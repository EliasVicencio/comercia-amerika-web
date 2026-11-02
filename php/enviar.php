<?php
// ============================================
// AMERIKA - Formulario de contacto
// Compatible con PlanetHosting / cPanel
//
// Cada envío deja:
//  1) un correo con los datos y el detalle del consentimiento
//  2) un registro PERMANENTE del consentimiento (archivo JSON por línea,
//     fuera de la carpeta pública), para poder demostrarlo ante una
//     solicitud o fiscalización (Ley 19.628 modificada por Ley 21.719).
// ============================================

date_default_timezone_set('America/Santiago');

// ---------- CONFIGURACIÓN: CAMBIA ESTOS VALORES ----------
$destinatario  = "tu-correo@tudominio.cl";   // Donde recibes los mensajes
$dominio_envio = "comercialamerika.cl";      // Tu dominio real (se usa en el From; NO usar HTTP_HOST)
$asunto_base   = "Nuevo contacto desde web Comercial Amerika SpA";

// Debe coincidir con la versión publicada en privacidad.html.
// Cada vez que cambies el texto del consentimiento: sube la versión (1.1, 2.0...)
// y guarda una copia del texto anterior (ej. consentimientos/v1.0.txt).
$version_consentimiento = "1.0";

// MODO PRUEBA LOCAL: cuando abres el sitio desde tu propio computador (localhost),
// el correo NO se envía: se guarda en registro_consentimientos/correos_prueba.txt
// y el formulario termina en "enviado=1". En el hosting real este modo nunca se activa
// (solo funciona si la petición viene del mismo equipo). Para desactivarlo del todo
// antes de publicar, cambia true por false.
$modo_prueba_local = false;   // PRODUCCIÓN: desactivado

// La IP también es un dato personal. Déjala en false salvo que tu abogado
// recomiende guardarla como evidencia adicional.
$guardar_ip = false;

// Carpeta del registro: FUERA de public_html (queda en tu carpeta de cPanel).
$carpeta_registro = dirname($_SERVER['DOCUMENT_ROOT']) . "/registro_consentimientos";
// ---------------------------------------------------------

// Solo aceptamos envíos por POST
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("Location: ../contacto.html");
    exit;
}

// Lee un campo como texto limpio (sin etiquetas) y con largo máximo
function campo($nombre, $max = 200, $una_linea = true) {
    if (!isset($_POST[$nombre]) || !is_string($_POST[$nombre])) return "";
    $v = trim(strip_tags($_POST[$nombre]));
    if ($una_linea) $v = trim(preg_replace('/[\r\n\t]+/', ' ', $v)); // evita inyección en cabeceras
    // Recorta por caracteres (UTF-8) sin depender de la extensión mbstring
    return preg_match('/^.{0,' . (int)$max . '}/su', $v, $m) ? $m[0] : $v;
}

// Anti-spam: campo oculto "sitio_web" que un humano nunca llena.
// (Agrega en el formulario: <input type="text" name="sitio_web" tabindex="-1" autocomplete="off" style="position:absolute;left:-9999px">)
if (campo("sitio_web") !== "") {
    header("Location: ../contacto.html?enviado=1"); // fingimos éxito, no enviamos nada
    exit;
}

$perfil         = campo("perfil");
$nombre         = campo("nombre");
$empresa        = campo("empresa");
$cargo          = campo("cargo");
$email          = filter_var(campo("email"), FILTER_SANITIZE_EMAIL);
$telefono       = campo("telefono", 50);
$pais           = campo("pais", 60);
$mensaje        = campo("mensaje", 5000, false);
$privacidad     = campo("privacidad", 5);       // "SI" si acepta el tratamiento (obligatoria)
$comunicaciones = campo("comunicaciones", 5);   // "SI" si autoriza comunicaciones comerciales (opcional)

// Validación: sin consentimiento principal no se procesa nada
if ($nombre === "" || $email === "" || $mensaje === ""
    || !filter_var($email, FILTER_VALIDATE_EMAIL) || $privacidad !== "SI") {
    header("Location: ../contacto.html?error=1");
    exit;
}

$fecha_iso = date("c");                    // 2026-11-02T14:35:10-03:00
$fecha_txt = date("d-m-Y H:i:s") . " (hora de Chile)";
$acepta_com = ($comunicaciones === "SI");

// ---------- 1) Registro permanente del consentimiento ----------
$registro = array(
    "fecha_hora"                 => $fecha_iso,
    "version_texto"              => $version_consentimiento,
    "nombre"                     => $nombre,
    "email"                      => $email,
    "consentimiento_principal"   => true,
    "comunicaciones_comerciales" => $acepta_com,
    "ip"                         => $guardar_ip ? ($_SERVER['REMOTE_ADDR'] ?? null) : null,
);

$guardado = false;
if (is_dir($carpeta_registro) || @mkdir($carpeta_registro, 0750, true)) {
    $archivo = $carpeta_registro . "/consentimientos-" . date("Y") . ".jsonl";
    $linea   = json_encode($registro, JSON_UNESCAPED_UNICODE) . "\n";
    $guardado = (@file_put_contents($archivo, $linea, FILE_APPEND | LOCK_EX) !== false);
}
if (!$guardado) {
    // No bloqueamos al usuario, pero queda aviso en el log de errores y en el correo
    error_log("AMERIKA: no se pudo escribir el registro de consentimiento en $carpeta_registro");
}

// ---------- 2) Correo ----------
$detalle  = "Consentimiento (Ley 19.628 / Ley 21.719)\n";
$detalle .= "  Aceptación del tratamiento de datos: SI (casilla marcada por el usuario)\n";
$detalle .= "  Comunicaciones comerciales: " . ($acepta_com ? "SI (autorizadas)" : "NO (no autorizadas)") . "\n";
$detalle .= "  Fecha y hora de recepción: $fecha_txt\n";
$detalle .= "  Versión del texto aceptado: $version_consentimiento\n";
$detalle .= "  Registro permanente guardado: " . ($guardado ? "SI" : "NO - REVISAR EL SERVIDOR") . "\n";

$cuerpo  = "Nuevo mensaje desde el sitio web de Comercial Amerika SpA\n\n";
$cuerpo .= "Perfil (Soy...): $perfil\n";
$cuerpo .= "Nombre: $nombre\n";
$cuerpo .= "Empresa: $empresa\n";
$cuerpo .= "Cargo: $cargo\n";
$cuerpo .= "País: $pais\n";
$cuerpo .= "Email: $email\n";
$cuerpo .= "Teléfono: $telefono\n\n";
$cuerpo .= "Mensaje:\n$mensaje\n\n";
$cuerpo .= "--------------------------------------------\n";
$cuerpo .= $detalle;

$asunto = $asunto_base . " - " . $perfil . " - " . $nombre;
// Tildes correctas en el asunto (usa mbstring si existe; si no, codificación base64 manual)
$asunto = function_exists('mb_encode_mimeheader')
    ? mb_encode_mimeheader($asunto, "UTF-8", "B", "\r\n")
    : "=?UTF-8?B?" . base64_encode($asunto) . "?=";

$headers  = "From: Web Comercial Amerika <noreply@" . $dominio_envio . ">\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

$es_local = in_array($_SERVER['REMOTE_ADDR'] ?? '', array('127.0.0.1', '::1'), true);

if ($modo_prueba_local && $es_local) {
    // Simula el envío: guarda el correo completo en un archivo de texto
    $copia  = "==== " . $fecha_txt . " ====\n";
    $copia .= "Para: $destinatario\nAsunto: " . $asunto_base . " - " . $perfil . " - " . $nombre . "\n\n" . $cuerpo . "\n\n";
    $enviado = (@file_put_contents($carpeta_registro . "/correos_prueba.txt", $copia, FILE_APPEND | LOCK_EX) !== false);
} else {
    if ($destinatario === "tu-correo@tudominio.cl") {
        // Seguridad: evita perder mensajes si olvidaste configurar el correo de destino
        error_log("AMERIKA: falta configurar \$destinatario en enviar.php");
        $enviado = false;
    } else {
        $enviado = @mail($destinatario, $asunto, $cuerpo, $headers);
    }
}

// main.js detecta ?enviado=1 y muestra la confirmación
header("Location: ../contacto.html?" . ($enviado ? "enviado=1" : "error=1"));
exit;