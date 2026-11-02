/* ============================================
   AMERIKA - JavaScript principal
   Multi-idioma (ES/EN) + Menú móvil + Modal
   + Filtro de marcas + Control de edad + Formulario

   NOTA: el documento "Reestructuración" pide ES como
   idioma principal y EN solo si TODAS las páginas están
   traducidas. Por eso las dos listas de textos (es/en)
   tienen exactamente las mismas claves.
   ============================================ */

(function () {
  'use strict';

  const DEFAULT_LANG = 'es';
  const SUPPORTED_LANGS = ['es', 'en'];
  const STORAGE_KEY = 'amerika-lang';

  const translations = {
    es: {
      // ---------- Navegación / comunes ----------
      'nav.home': 'Inicio',
      'nav.brands': 'Nuestras marcas',
      'nav.about': 'Quiénes somos',
      'nav.route': 'Route to market',
      'nav.contact': 'Contáctanos',
      'nav.distribute': 'Distribuye con nosotros',
      'nav.menu': 'Menú',
      'common.close': 'Cerrar',
      'footer.legal': 'Comercial Amerika SpA · RUT 78.474.378-0',
      'footer.contactline': '[correo comercial] · Tel./WhatsApp +56 9 5610 0329',
      'footer.location': 'Colina, Región Metropolitana · Chile',
      'footer.rights': '© 2026 Comercial Amerika SpA. Todos los derechos reservados.',
      'footer.age': 'Venta de alcohol prohibida a menores de 18 años.',
      'footer.privacy': 'Política de privacidad',
      'wa.aria': 'Escríbenos por WhatsApp',

      // ---------- Títulos de página / SEO ----------
      'page.index.title': 'Distribuidora de Alimentos y Bebidas | Comercial Amerika SpA',
      'page.index.desc': 'Importador y distribuidor de marcas de alimentos y bebidas para Chile y la Región Andina. Supermercados, conveniencia, canal tradicional y HORECA. Más de 30 años de experiencia.',
      'page.brands.title': 'Nuestras marcas | Comercial Amerika SpA',
      'page.brands.desc': 'Portafolio de marcas de Comercial Amerika: bebidas con alcohol (DrinkBall, Pink Moon), bebidas sin alcohol y alimentos. Importación y distribución en Chile y la Región Andina.',
      'page.about.title': 'Quiénes somos | Comercial Amerika SpA',
      'page.about.desc': 'Importador y distribuidor de alimentos y bebidas con más de 30 años de experiencia en consumo masivo. Conoce la historia de Comercial Amerika SpA y su equipo.',
      'page.route.title': 'Route to market | Comercial Amerika SpA',
      'page.route.desc': 'Llevamos tu marca desde el puerto hasta la góndola: canales, cobertura en Chile, Perú y Argentina, logística en Colina y gestión regulatoria.',
      'page.contact.title': 'Contáctanos | Comercial Amerika SpA',
      'page.contact.desc': 'Contáctanos: si eres una marca que busca distribuidor o un cliente que quiere comprar, te respondemos en menos de 24 horas hábiles. Colina, Región Metropolitana, Chile.',
      'page.drinkball.title': 'DrinkBall | Comercial Amerika SpA',
      'page.drinkball.desc': 'DrinkBall: cócteles listos para beber (RTD) de Comary, Brasil, distribuidos en exclusividad para Chile por Comercial Amerika. Innovación y actitud.',
      'page.pinkmoon.title': 'Pink Moon | Comercial Amerika SpA',
      'page.pinkmoon.desc': 'Pink Moon: bebida frisante de Comary, Brasil, distribuida en exclusividad para Chile por Comercial Amerika. Experiencia y estilo.',

      // ---------- Inicio ----------
      'hero.label': 'Chile · Perú · Argentina',
      'hero.title': 'Llevamos grandes marcas a la mesa de Chile y la Región Andina',
      'hero.subtitle': 'Importamos, comercializamos y distribuimos alimentos y bebidas en supermercados, conveniencia, canal tradicional y HORECA.',
      'hero.cta1': 'Ver nuestras marcas',
      'hero.cta2': 'Distribuye con nosotros',
      'hero.rot1': 'Marcas internacionales con respaldo de fábrica: Comary · Vieira · My Foods',
      'hero.rot2': 'Cobertura real: supermercados, conveniencia, canal tradicional y HORECA',
      'hero.rot3': 'Importación directa, registros sanitarios y distribución en Chile y la Región Andina',
      'hero.image': '[VIDEO CORTO O CARRUSEL: góndola con productos · bodega en Colina · brindis con DrinkBall]',
      'paths.brand.title': 'Soy una marca o fabricante',
      'paths.brand.text': 'Busco un distribuidor en Chile, Perú o Argentina para mi marca de alimentos o bebidas.',
      'paths.brand.cta': 'Ver cómo trabajamos',
      'paths.client.title': 'Soy cliente',
      'paths.client.text': 'Quiero comprar para mi supermercado, almacén, tienda de conveniencia o negocio HORECA.',
      'paths.client.cta': 'Quiero comprar',
      'stats.years.lbl': 'años en consumo masivo',
      'stats.countries.lbl': 'países',
      'stats.brands.lbl': 'marcas en portafolio',
      'stats.sku.lbl': 'SKU en grandes cadenas',
      'stats.pv.lbl': 'puntos de venta',
      'allies.title': 'Trabajamos con',
      'brands.title': 'Nuestras marcas',
      'brands.note': 'Logos en blanco sobre fondo uniforme (pedir material a Comary y demás fabricantes).',
      'brands.drinkball.name': 'DrinkBall',
      'brands.drinkball.desc': 'Cócteles listos para beber · RTD',
      'brands.pinkmoon.name': 'Pink Moon',
      'brands.pinkmoon.desc': 'Frisante · Experiencia y estilo',
      'brands.phantom.name': 'Phantom',
      'brands.phantom.desc': 'Bebida energética',
      'brands.myfoods.name': 'My Foods',
      'brands.myfoods.desc': 'Alimentos sin gluten',
      'brands.cacaolat.name': 'CacaoLat',
      'brands.cacaolat.desc': 'Batidos lácteos de cacao',
      'brands.topk9.name': 'Top-K9',
      'brands.topk9.desc': 'Productos para mascotas',
      'featured.label': 'Lanzamiento',
      'featured.title': 'DrinkBall y Pink Moon llegan a Chile',
      'featured.text': 'Cócteles listos para disfrutar, directo desde Brasil. De Comary, fabricante con más de 70 años de historia (1952).',
      'featured.cta': 'Conocer DrinkBall',
      'featured.image': '[FOTO DE OCASIÓN DE CONSUMO: terraza frente al mar, personas mayores de 25 años]',
      'how.title': 'Cómo trabajamos',
      'how.item1.title': 'Importación',
      'how.item1.text': 'Comercio exterior y aduanas directas con fabricantes.',
      'how.item2.title': 'Registro y cumplimiento',
      'how.item2.text': 'SAG, SEREMI de Salud, Aduanas y etiquetado chileno.',
      'how.item3.title': 'Comercialización',
      'how.item3.text': 'Posicionamiento, precios por canal y planes promocionales.',
      'how.item4.title': 'Ejecución en punto de venta',
      'how.item4.text': 'Lanzamientos, degustaciones y trade marketing.',
      'cta.title': '¿Tienes una marca con potencial? Conversemos.',
      'cta.button': 'Agenda una reunión',

      // ---------- Nuestras marcas (página índice) ----------
      'bp.h1': 'Marcas que llevamos a la góndola',
      'bp.intro': 'Marcas con potencial de crecimiento, importadas y distribuidas en exclusividad para Chile. Haz clic en una marca para ver su ficha completa.',
      'bp.filter.all': 'Todas',
      'bp.filter.alcohol': 'Bebidas con alcohol',
      'bp.filter.noalcohol': 'Bebidas sin alcohol',
      'bp.filter.alimentos': 'Alimentos y mascotas',
      'bp.card.drinkball': 'Cócteles listos para beber · Comary, Brasil · "Innovación y actitud"',
      'bp.card.pinkmoon': 'Frisante · Comary, Brasil · "Experiencia y estilo"',
      'bp.card.phantom': 'Bebida energética',
      'bp.card.myfoods': 'Alimentos sin gluten',
      'bp.card.cacaolat': 'Batidos lácteos de cacao',
      'bp.card.topk9': 'Productos para mascotas: arenas, snacks y accesorios',
      'representa.title': 'Representa tu marca con nosotros',
      'representa.text': 'Buscamos marcas con potencial de crecimiento, con capacidad de producción y respaldo de fabricante. Aportamos importación, registros, estrategia comercial y ejecución en Chile y la Región Andina.',

      // ---------- Quiénes somos ----------
      'about.label': 'Quiénes somos',
      'about.h1': 'Somos el puente entre marcas con potencial y los consumidores de la Región Andina',
      'about.image': '[FOTO / VIDEO CORPORATIVO]',
      'about.history.title': 'Nuestra historia',
      'about.history.p1': '<strong>Comercial Amerika SpA</strong> es una empresa chilena que importa, comercializa y distribuye alimentos y bebidas. Llevamos marcas con potencial de crecimiento a los consumidores de Chile y la Región Andina.',
      'about.history.p2': 'Nacimos de más de 30 años de experiencia liderando equipos y proyectos comerciales en multinacionales de consumo masivo, en Chile y en el extranjero. Esa trayectoria nos permite conocer a fondo cómo funcionan las cadenas de supermercados, las tiendas de conveniencia y el canal tradicional, y qué necesita una marca para entrar, posicionarse y crecer en cada uno.',
      'about.dedicated.title': 'A qué nos dedicamos',
      'about.ded1.title': 'Importación',
      'about.ded1.text': 'Trabajamos directo con fabricantes internacionales, como Comary (Brasil, desde 1952) y Vieira (Portugal), y gestionamos comercio exterior y aduanas.',
      'about.ded2.title': 'Registros y cumplimiento',
      'about.ded2.text': 'Tramitamos registros ante SAG, SEREMI de Salud, Aduanas y la autoridad municipal. Adecuamos etiquetado y sellos desde el origen.',
      'about.ded3.title': 'Estrategia comercial',
      'about.ded3.text': 'Definimos posicionamiento, precios por canal, surtido y planes promocionales de cada marca.',
      'about.ded4.title': 'Distribución',
      'about.ded4.text': 'Llegamos a supermercados, conveniencia, canal tradicional, mayoristas, HORECA y tiendas especializadas, desde nuestra bodega en Colina.',
      'about.ded5.title': 'Ejecución en el punto de venta',
      'about.ded5.text': 'Lanzamientos, degustaciones, activaciones y trade marketing para que el producto rote.',
      'about.mission': 'Misión',
      'about.mission.text': 'Brindamos soluciones comerciales de alto valor, por medio de un servicio excepcional y una gestión eficiente de ventas, conectando productos de calidad con las necesidades de nuestros clientes y consumidores, para garantizar su satisfacción.',
      'about.vision': 'Visión',
      'about.vision.text': 'Ser referente en excelencia comercial, tanto en el mercado nacional como internacional, reconocidos por nuestra capacidad en el desarrollo y posicionamiento de marcas, la innovación en ventas y la fidelización de nuestros clientes y consumidores.',
      'about.why.title': 'Por qué Amerika',
      'about.why.text': 'Nuestra diferencia no está en <em>qué</em> vender, sino en el <em>cómo</em> vender. Combinamos inteligencia de mercado, rapidez para detectar tendencias y una relación de asesoría, no solo de venta, con las marcas y los clientes con los que trabajamos.',
      'about.why1': 'Inteligencia de mercado',
      'about.why2': 'Velocidad (time to market)',
      'about.why3': 'Asesoría, no solo venta',
      'about.why4': 'Relaciones de largo plazo',
      'about.r1.lbl': 'crecimiento en líneas core vs. año anterior',
      'about.r2.lbl': 'SKU incorporados en grandes cadenas',
      'about.r3.lbl': 'SKU nuevos desarrollados',
      'about.ally.title': 'Aliados',
      'about.ally.intro': 'Fabricantes internacionales representados con exclusividad para Chile (logos con autorización escrita).',
      'about.ally.comary': 'Comary · Brasil, desde 1952',
      'about.ally.vieira': 'Vieira · Portugal',
      'about.team.title': 'Equipo directivo',
      'about.team.text': 'Personas con trayectoria comprobable en áreas comerciales de multinacionales de consumo masivo.',
      'about.team.cta': 'Conocer al equipo',
      'about.team.modal.title': 'Equipo directivo',
      'role.commercial': 'Gerente Comercial',
      'role.ceo': 'Gerente General',
      'role.community': 'Community Manager',
      'role.supply': 'Jefe Supply',

      // ---------- Route to market ----------
      'route.h1': 'Llevamos tu marca desde el puerto hasta la góndola',
      'route.intro': '"Route to market" es el camino que recorre un producto desde el fabricante hasta el consumidor final. Diseñamos y ejecutamos ese camino por ti.',
      'route.channels.title': 'Canales que atendemos',
      'route.ch1.title': 'Supermercados',
      'route.ch1.text': 'Cadenas grandes y regionales. Rol de la marca: volumen y visibilidad.',
      'route.ch2.title': 'Tiendas de conveniencia',
      'route.ch2.text': 'Compras rápidas y alta rotación. Ideal para bebidas listas para beber.',
      'route.ch3.title': 'Canal tradicional y mayoristas',
      'route.ch3.text': 'Almacenes de barrio y distribuidores. Rol: cobertura y presencia en cada comuna.',
      'route.ch4.title': 'HORECA',
      'route.ch4.text': 'Hoteles, restaurantes y cafeterías. Rol: ocasiones de consumo y valor de marca.',
      'route.ch5.title': 'Tiendas especializadas',
      'route.ch5.text': 'Gourmet y salud. Rol: posicionamiento premium.',
      'route.ch6.title': 'E-commerce',
      'route.ch6.text': 'Ventas online y apps de despacho. Rol: alcance directo al consumidor.',
      'route.coverage.title': 'Cobertura y logística',
      'route.coverage.p1': 'Operamos desde nuestro centro de almacenaje y distribución en <strong>Colina, Región Metropolitana</strong>, con distribución en <strong>Chile, Perú y Argentina</strong>.',
      'route.coverage.p2': '[Completar: cadenas y canales cubiertos hoy por país, y lo que viene.]',
      'route.coverage.image': '[MAPA DE CHILE, PERÚ Y ARGENTINA: cobertura hoy y proyectada]',
      'route.steps.title': 'Cómo trabajamos con una marca',
      'route.step1.title': 'Evaluación de la marca y del mercado',
      'route.step1.text': 'Analizamos el potencial del producto, la competencia y la oportunidad por canal.',
      'route.step2.title': 'Registros y cumplimiento',
      'route.step2.text': 'SAG, SEREMI de Salud, Aduanas y etiquetado con sellos chilenos, desde el origen.',
      'route.step3.title': 'Estrategia comercial y de precios por canal',
      'route.step3.text': 'Posicionamiento, surtido y planes promocionales para cada tipo de cliente.',
      'route.step4.title': 'Ingreso a cadenas y distribución',
      'route.step4.text': 'Negociación de entrada y despacho desde la bodega de Colina.',
      'route.step5.title': 'Ejecución en punto de venta y marketing',
      'route.step5.text': 'Lanzamientos, degustaciones y trade marketing para que la marca rote.',
      'route.services.title': 'Servicios de valor agregado',
      'route.srv1.title': 'Marketing y trade marketing',
      'route.srv1.text': 'Lanzamientos, degustaciones, activaciones y presencia en ferias.',
      'route.srv2.title': 'Asesoría regulatoria',
      'route.srv2.text': 'Etiquetado y registros chilenos resueltos desde el país de origen.',
      'route.srv3.title': 'Reportes de venta y rotación',
      'route.srv3.text': 'Seguimiento periódico para tomar decisiones con datos.',
      'route.model.title': 'Modelo de acuerdo transparente.',
      'route.model.text': ' Las condiciones comerciales (márgenes, plazos y compromisos de servicio) se conversan en reunión con cada marca.',
      'route.trends.title': 'Lo que vemos en el mercado',
      'route.trends.subtitle': 'Adaptamos nuestras estrategias a las realidades y demandas del consumidor actual.',
      'route.trend1.title': 'Conveniencia',
      'route.trend1.text': 'Aumento de alimentos preparados, compras online y entregas a domicilio (80% de relevancia según estudio citado en el diagnóstico).',
      'route.trend2.title': 'Salud y bienestar',
      'route.trend2.text': 'Crecimiento en la búsqueda de productos saludables y con etiquetas claras (65% según estudio citado en el diagnóstico).',
      'route.trend3.title': 'Precio-calidad',
      'route.trend3.text': 'Calidad a precio razonable como factor de decisión en el canal moderno y tradicional.',
      'route.cta.title': '¿Quieres llevar tu marca a Chile?',

      // ---------- Contáctanos ----------
      'contact.h1': 'Conversemos',
      'contact.subtitle': 'Elige la opción que mejor te describa en el formulario y te contactaremos en menos de 24 horas hábiles.',
      'contact.email.lbl': 'Correo comercial',
      'contact.email.val': '[correo comercial, ej: ventas@comercialamerika.cl]',
      'contact.phone.lbl': 'Teléfono / WhatsApp',
      'contact.phone.val': '+56 9 5610 0329',
      'contact.hours': 'Horario de atención: lunes a viernes, 09:00 - 18:00 hrs',
      'contact.office.lbl': 'Bodega y oficina',
      'contact.office.val': 'Colina, Región Metropolitana · Chile',
      'contact.office.note': 'Solo distribución y despacho (no se recibe público)',
      'contact.map': '[MAPA: bodega en Colina, Región Metropolitana]',
      'contact.form.perfil': 'Soy…',
      'contact.perfil1': 'Marca o fabricante',
      'contact.perfil2': 'Cliente: supermercado, almacén, HORECA',
      'contact.perfil3': 'Proveedor de servicios',
      'contact.perfil4': 'Postulante (trabaja con nosotros)',
      'contact.pais1': 'Chile',
      'contact.pais2': 'Perú',
      'contact.pais3': 'Argentina',
      'contact.pais4': 'Otro',
      'contact.form.name': 'Nombre',
      'contact.ph.name': 'Tu nombre',
      'contact.form.company': 'Empresa',
      'contact.ph.company': 'Nombre de tu empresa',
      'contact.form.cargo': 'Cargo',
      'contact.ph.cargo': 'Ej: Jefe de compras',
      'contact.form.country': 'País',
      'contact.form.email': 'Correo',
      'contact.ph.email': 'correo@empresa.com',
      'contact.form.phone': 'Teléfono',
      'contact.ph.phone': '+56 9 ...',
      'contact.form.message': 'Mensaje',
      'contact.ph.message': 'Cuéntanos qué buscas: distribuir una marca (fabricantes) o comprar nuestros productos (clientes)',
      'contact.form.privacy': 'Acepto el tratamiento de mis datos según la <a href="#" data-consent-open>política de privacidad</a> (Ley 19.628 y Ley 21.719).',
      'contact.form.submit': 'Enviar mensaje',
      'contact.alert.success': '¡Mensaje enviado! Te contactaremos en menos de 24 horas hábiles.',
      'contact.alert.error': 'Hubo un problema al enviar el mensaje. Revisa tus datos e inténtalo de nuevo.',

      // ---------- Control de edad (páginas de alcohol) ----------
      'age.title': 'Contenido para mayores de 18 años',
      'age.text': 'Esta página muestra bebidas alcohólicas. Su venta está prohibida a menores de 18 años (Ley 21.363).',
      'age.yes': 'Sí, soy mayor de 18 años',
      'age.no': 'No, salir',
      'age.badge': '⚠ Bebida alcohólica · Solo para mayores de 18 años',

      // ---------- DrinkBall ----------
      'db.tagline': 'Cócteles listos para beber · "Enfría, abre, disfruta"',
      'db.cta': 'Quiero venderla en mi negocio',
      'db.hero.photo': '[HERO "GELOU, ABRIU, CURTIU": lata saliendo de un balde con hielo, fondo de playa desenfocado]',
      'db.history': 'DrinkBall es la línea de cócteles listos para beber (RTD) de <strong>Comary</strong>, fabricante brasileño de bebidas desde 1952 (más de 70 años de historia). Comercial Amerika la importa y distribuye en exclusividad para Chile.',
      'db.portfolio.title': 'Portafolio de sabores',
      'db.portfolio.note': 'Sabores conocidos de la línea DrinkBall (formatos por confirmar con Comary).',
      'db.f1.name': 'Caipiríssima',
      'db.f1.desc': 'Limón y menta · Clásico tropical',
      'db.f2.name': 'Mate Limao Spritz',
      'db.f2.desc': 'Hojas de mate y limón · Clásicos',
      'db.f3.name': 'Piña Bolada',
      'db.f3.desc': 'Piña y coco · Tropical',
      'db.f4.name': 'Banana Split',
      'db.f4.desc': 'Plátano · Cremosos',
      'db.f5.name': 'Doce de Leite',
      'db.f5.desc': 'Manjar · Cremosos',
      'db.f.ph1': '[PACKSHOT: lata Caipiríssima]',
      'db.f.ph2': '[PACKSHOT: lata Mate Limao Spritz]',
      'db.f.ph3': '[PACKSHOT: lata Piña Bolada]',
      'db.f.ph4': '[PACKSHOT: lata Banana Split]',
      'db.f.ph5': '[PACKSHOT: lata Doce de Leite]',
      'db.occasion.title': 'Ocasión de consumo',
      'db.occasion.note': 'Fiestas, playa, festivales y reuniones. Personas mayores de 25 años y espacios privados (Ley 21.363).',
      'db.occ1.title': 'Terraza / verano chileno',
      'db.occ1.text': 'Atardecer, cooler y latas listas para compartir.',
      'db.occ1.ph': '[FOTO: consumo en terraza frente al mar]',
      'db.occ2.title': 'Servido en vaso',
      'db.occ2.text': 'Muestra que es un cóctel de verdad, no un refresco.',
      'db.occ2.ph': '[FOTO: servido en vaso con hielo y decoración]',
      'db.occ3.title': 'Dónde encontrarla',
      'db.occ3.text': 'Supermercados, tiendas de conveniencia y canal tradicional.',
      'db.occ3.ph': '[FOTO: lata en la góndola o cooler de conveniencia]',
      'db.cta2.title': '¿Quieres vender DrinkBall en tu negocio?',

      // ---------- Pink Moon ----------
      'pm.tagline': 'Frisante · "Experiencia y estilo"',
      'pm.hero.photo': '[HERO: brindis con copas, botella de Pink Moon en foco, luz dorada de atardecer]',
      'pm.history': 'Pink Moon es una bebida <strong>frisante</strong> (espumante suave) de <strong>Comary</strong>, fabricante brasileño de bebidas desde 1952 (más de 70 años de historia). Comercial Amerika la importa y distribuye en exclusividad para Chile.',
      'pm.portfolio.title': 'Portafolio',
      'pm.portfolio.note': 'Los sabores y formatos se confirman con Comary junto al material gráfico oficial.',
      'pm.ph1': '[PACKSHOT: botella Pink Moon]',
      'pm.pending': '[Producto por confirmar]',
      'pm.pending.desc': 'Formato y sabor por confirmar con Comary',
      'pm.occasion.title': 'Ocasión de consumo',
      'pm.occasion.note': 'Celebraciones, brindis y salidas. Personas mayores de 25 años y espacios privados (Ley 21.363).',
      'pm.occ1.title': 'Celebración en casa',
      'pm.occ1.text': 'Mesa al aire libre con luces colgantes y brindis al atardecer.',
      'pm.occ1.ph': '[FOTO: asado o celebración en casa, luces colgantes, brindis]',
      'pm.occ2.title': 'Terraza / after office',
      'pm.occ2.text': 'Luz cálida de atardecer, copas y botella en foco.',
      'pm.occ2.ph': '[FOTO: terraza urbana de Santiago con la cordillera al fondo]',
      'pm.occ3.title': 'Dónde encontrarla',
      'pm.occ3.text': 'Supermercados, tiendas de conveniencia y canal tradicional.',
      'pm.occ3.ph': '[FOTO: producto en la góndola o material POP]',
      'pm.cta2.title': '¿Quieres vender Pink Moon en tu negocio?',

      // ---------- Ficha comercial (común a ambas marcas) ----------
      'sheet.title': 'Ficha comercial para clientes',
      'sheet.note': 'Datos para pedir a Comary junto a las fichas técnicas (sección 5.5 del documento).',
      'sheet.data': 'Dato comercial',
      'sheet.value': 'Valor',
      'sheet.format': 'Formato por unidad',
      'sheet.units': 'Unidades por caja',
      'sheet.ean': 'Código de barras (EAN)',
      'sheet.alcohol': 'Contenido alcohólico',
      'sheet.shelf': 'Vida útil',
      'sheet.channels': 'Canales disponibles',
      'sheet.tbc': '[confirmar con Comary]',
      'sheet.channels.val': 'Supermercados · Conveniencia · Canal tradicional · HORECA',
      'sheet.note.pm': 'Sabores y formatos por confirmar con Comary.',

      // ---------- Política de privacidad ----------
      'page.privacy.title': 'Política de Privacidad | Comercial Amerika SpA',
      'page.privacy.desc': 'Cómo Comercial Amerika SpA trata tus datos personales: finalidad, consentimiento, derechos ARCO y conservación, según las leyes chilenas 19.628 y 21.719.',
      'privacy.label': 'Legal',
      'privacy.h1': 'Política de privacidad y consentimiento de datos',
      'privacy.intro': 'Usamos tus datos únicamente para responder tus consultas comerciales. Aquí encuentras la finalidad, la base legal, tus derechos y los plazos, según las leyes chilenas 19.628 y 21.719.',
      'privacy.s1.title': 'Responsable',
      'privacy.s1.text': 'Comercial Amerika SpA, RUT, Colina, Región Metropolitana, Chile. Contacto de temas de datos personales: correo comercial, teléfono o WhatsApp.',
      'privacy.s2.title': 'Datos tratados',
      'privacy.s2.text': 'Nombre, empresa, cargo, correo electrónico, teléfono, país, perfil y mensaje, entregados voluntariamente en el formulario. No se solicitan datos sensibles ni datos de menores de 18 años.',
      'privacy.s3.title': 'Finalidad y base legal',
      'privacy.s3.text': 'Responder consultas, coordinar reuniones y enviar cotizaciones de importación y distribución. Base legal: consentimiento expreso e informado al marcar la casilla.',
      'privacy.s4.title': 'Plazo de conservación',
      'privacy.s4.text': 'Los datos se conservan durante 2 años desde la última comunicación o hasta que solicites su supresión.',
      'privacy.s5.title': 'Terceros y transferencia internacional',
      'privacy.s5.text': 'Tus datos pueden enviarse a fabricantes aliados (Comary, Vieira) si consultas por distribuir una marca en Chile. No se venden a terceros.',
      'privacy.s6.title': 'Derechos ARCO',
      'privacy.s6.text': 'Acceso, rectificación, cancelación y oposición, escribiendo al correo oficial con el asunto indicado. Respuesta dentro de 10 días hábiles.',
      'privacy.s7.title': 'Seguridad y registro de consentimiento',
      'privacy.s7.text': 'Sitio bajo HTTPS, acceso restringido, y registro de fecha, hora y versión del consentimiento aceptado (planilla interna).',
      'privacy.s8.title': 'Medición y cookies',
      'privacy.s8.text': 'Uso de Google Analytics 4 y Google Tag Manager con cookies medibles desactivables en tu navegador.',
      'privacy.s9.title': 'Cambios en la política',
      'privacy.s9.text': 'Cualquier cambio se publicará en esta misma página con la fecha de la nueva versión.',
      'privacy.version': 'Versión 1.0 · Publicada el 27 de octubre de 2026 · Comercial Amerika SpA',
      'consent.link': 'Información básica sobre protección de datos',
      'consent.title': 'Información básica sobre protección de datos',
      'consent.r1.lbl': 'Responsable del Tratamiento:',
      'consent.r1.val': 'Comercial Amerika SpA, RUT 78.474.378-0, domiciliado en [Colina, Región Metropolitana, Chile].',
      'consent.r2.lbl': 'Finalidad Principal:',
      'consent.r2.val': 'Gestionar su solicitud de contacto, procesar su solicitud de compra o distribución y/o responder a las consultas enviadas a través de este formulario.',
      'consent.r3.lbl': 'Bases de Licitud:',
      'consent.r3.val': 'Ejecución del contrato/servicio solicitado y su consentimiento explícito.',
      'consent.r4.lbl': 'Plazo de Conservación:',
      'consent.r4.val': 'Los datos se conservarán únicamente durante el tiempo necesario para cumplir con la finalidad descrita o mientras no solicite su supresión.',
      'consent.r5.lbl': 'Destinatarios:',
      'consent.r5.val': 'No se cederán datos a terceros salvo obligación legal o proveedores tecnológicos esenciales bajo estricto contrato de encargo de tratamiento.',
      'consent.r6.lbl': 'Derechos (ARSOP):',
      'consent.r6.val': 'Usted tiene derecho a acceder, rectificar, suprimir, oponerse y solicitar la portabilidad de sus datos personales, así como a revocar este consentimiento en cualquier momento. Puede ejercerlos enviando un correo electrónico a [correo de privacidad]. Para más detalle, consulte nuestra Política de Privacidad completa.',
      'consent.dec.title': 'Declaración de Consentimiento',
      'consent.dec1': 'Acepto el tratamiento de mis datos personales para las finalidades principales descritas arriba. (Casilla obligatoria del formulario: no se puede enviar el mensaje sin ella.)',
      'consent.dec2': 'Autorizo el envío de comunicaciones comerciales, ofertas y novedades de Comercial Amerika SpA por medios electrónicos (Email/WhatsApp). (Casilla opcional del formulario: elige según prefieras.)',
      'consent.accept': 'Aceptar y continuar',
      'consent.reject': 'Rechazar',
      'contact.form.comms': 'Autorizo el envío de comunicaciones comerciales, ofertas y novedades de Comercial Amerika SpA por medios electrónicos (Email/WhatsApp). Opcional.',
      'cookies.text': 'Usamos cookies de medición (Google Analytics) para entender cómo se usa el sitio y mejorarlo. Puedes aceptar o rechazar; más detalles en la <a href="privacidad.html">política de privacidad</a>.',
      'cookies.accept': 'Aceptar',
      'cookies.reject': 'Rechazar'
    },

    en: {
      // ---------- Navigation / common ----------
      'nav.home': 'Home',
      'nav.brands': 'Our brands',
      'nav.about': 'About us',
      'nav.route': 'Route to market',
      'nav.contact': 'Contact us',
      'nav.distribute': 'Distribute with us',
      'nav.menu': 'Menu',
      'common.close': 'Close',
      'footer.legal': 'Comercial Amerika SpA · Tax ID 78.474.378-0',
      'footer.contactline': '[commercial email] · Phone/WhatsApp +56 9 5610 0329',
      'footer.location': 'Colina, Metropolitan Region · Chile',
      'footer.rights': '© 2026 Comercial Amerika SpA. All rights reserved.',
      'footer.age': 'Sale of alcohol prohibited to under 18s.',
      'footer.privacy': 'Privacy policy',
      'wa.aria': 'Message us on WhatsApp',

      // ---------- Page titles / SEO ----------
      'page.index.title': 'Food and Beverage Distributor | Comercial Amerika SpA',
      'page.index.desc': 'Importer and distributor of food and beverage brands for Chile and the Andean Region. Supermarkets, convenience, traditional and HORECA channels. Over 30 years of experience.',
      'page.brands.title': 'Our brands | Comercial Amerika SpA',
      'page.brands.desc': 'Comercial Amerika brand portfolio: alcoholic beverages (DrinkBall, Pink Moon), non-alcoholic beverages and food. Import and distribution in Chile and the Andean Region.',
      'page.about.title': 'About us | Comercial Amerika SpA',
      'page.about.desc': 'Food and beverage importer and distributor with over 30 years of experience in mass consumption. Learn about Comercial Amerika SpA\'s history and team.',
      'page.route.title': 'Route to market | Comercial Amerika SpA',
      'page.route.desc': 'We take your brand from the port to the shelf: channels, coverage in Chile, Peru and Argentina, logistics in Colina and regulatory management.',
      'page.contact.title': 'Contact us | Comercial Amerika SpA',
      'page.contact.desc': 'Contact us: whether you are a brand looking for a distributor or a customer looking to buy, we reply within 24 business hours. Colina, Metropolitan Region, Chile.',
      'page.drinkball.title': 'DrinkBall | Comercial Amerika SpA',
      'page.drinkball.desc': 'DrinkBall: ready-to-drink cocktails (RTD) from Comary, Brazil, distributed exclusively in Chile by Comercial Amerika. Innovation and attitude.',
      'page.pinkmoon.title': 'Pink Moon | Comercial Amerika SpA',
      'page.pinkmoon.desc': 'Pink Moon: frisante sparkling drink from Comary, Brazil, distributed exclusively in Chile by Comercial Amerika. Experience and style.',

      // ---------- Home ----------
      'hero.label': 'Chile · Peru · Argentina',
      'hero.title': 'We bring great brands to the tables of Chile and the Andean Region',
      'hero.subtitle': 'We import, market and distribute food and beverages in supermarkets, convenience stores, traditional trade and HORECA.',
      'hero.cta1': 'See our brands',
      'hero.cta2': 'Distribute with us',
      'hero.image': '[SHORT VIDEO OR CAROUSEL: shelf with products · Colina warehouse · DrinkBall toast]',
      'hero.rot1': 'International brands with factory backing: Comary · Vieira · My Foods',
      'hero.rot2': 'Real coverage: supermarkets, convenience, traditional trade and HORECA',
      'hero.rot3': 'Direct importing, health registrations and distribution in Chile and the Andean Region',
      'hero.rot1': 'Marcas internacionales con respaldo de fábrica: Comary · Vieira · My Foods',
      'hero.rot2': 'Cobertura real: supermercados, conveniencia, canal tradicional y HORECA',
      'hero.rot3': 'Importación directa, registros sanitarios y distribución en Chile y la Región Andina',
      'paths.brand.title': 'I am a brand or manufacturer',
      'paths.brand.text': 'I am looking for a distributor in Chile, Peru or Argentina for my food or beverage brand.',
      'paths.brand.cta': 'See how we work',
      'paths.client.title': 'I am a customer',
      'paths.client.text': 'I want to buy for my supermarket, store, convenience shop or HORECA business.',
      'paths.client.cta': 'I want to buy',
      'stats.years.lbl': 'years in mass consumption',
      'stats.countries.lbl': 'countries',
      'stats.brands.lbl': 'brands in portfolio',
      'stats.sku.lbl': 'SKUs in major chains',
      'stats.pv.lbl': 'points of sale',
      'allies.title': 'We work with',
      'brands.title': 'Our brands',
      'brands.note': 'White logos on a uniform background (request material from Comary and other manufacturers).',
      'brands.drinkball.name': 'DrinkBall',
      'brands.drinkball.desc': 'Ready-to-drink cocktails · RTD',
      'brands.pinkmoon.name': 'Pink Moon',
      'brands.pinkmoon.desc': 'Frisante · Experience and style',
      'brands.phantom.name': 'Phantom',
      'brands.phantom.desc': 'Energy drink',
      'brands.myfoods.name': 'My Foods',
      'brands.myfoods.desc': 'Gluten-free foods',
      'brands.cacaolat.name': 'CacaoLat',
      'brands.cacaolat.desc': 'Cocoa milkshakes',
      'brands.topk9.name': 'Top-K9',
      'brands.topk9.desc': 'Pet products',
      'featured.label': 'Launch',
      'featured.title': 'DrinkBall and Pink Moon arrive in Chile',
      'featured.text': 'Cocktails ready to enjoy, straight from Brazil. From Comary, a manufacturer with more than 70 years of history (1952).',
      'featured.cta': 'Discover DrinkBall',
      'featured.image': '[LIFESTYLE PHOTO: seaside terrace, people over 25]',
      'how.title': 'How we work',
      'how.item1.title': 'Import',
      'how.item1.text': 'Foreign trade and customs handled directly with manufacturers.',
      'how.item2.title': 'Registration and compliance',
      'how.item2.text': 'SAG, SEREMI de Salud, customs and Chilean labeling.',
      'how.item3.title': 'Commercialization',
      'how.item3.text': 'Positioning, pricing by channel and promotional plans.',
      'how.item4.title': 'Point-of-sale execution',
      'how.item4.text': 'Launches, tastings and trade marketing.',
      'cta.title': 'Have a brand with potential? Let\'s talk.',
      'cta.button': 'Book a meeting',

      // ---------- Our brands (index page) ----------
      'bp.h1': 'Brands we take to the shelf',
      'bp.intro': 'Brands with growth potential, imported and distributed exclusively for Chile. Click on a brand to see its full profile.',
      'bp.filter.all': 'All',
      'bp.filter.alcohol': 'Alcoholic beverages',
      'bp.filter.noalcohol': 'Non-alcoholic beverages',
      'bp.filter.alimentos': 'Food and pets',
      'bp.card.drinkball': 'Ready-to-drink cocktails · Comary, Brazil · "Innovation and attitude"',
      'bp.card.pinkmoon': 'Frisante · Comary, Brazil · "Experience and style"',
      'bp.card.phantom': 'Energy drink',
      'bp.card.myfoods': 'Gluten-free foods',
      'bp.card.cacaolat': 'Cocoa milkshakes',
      'bp.card.topk9': 'Pet products: litter, snacks and accessories',
      'representa.title': 'Represent your brand with us',
      'representa.text': 'We look for brands with growth potential, production capacity and manufacturer backing. We provide import, registrations, commercial strategy and execution in Chile and the Andean Region.',

      // ---------- About us ----------
      'about.label': 'About us',
      'about.h1': 'We are the bridge between brands with potential and consumers in the Andean Region',
      'about.image': '[CORPORATE PHOTO / VIDEO]',
      'about.history.title': 'Our history',
      'about.history.p1': '<strong>Comercial Amerika SpA</strong> is a Chilean company that imports, markets and distributes food and beverages. We bring brands with growth potential to consumers in Chile and the Andean Region.',
      'about.history.p2': 'We were born from more than 30 years of experience leading commercial teams and projects in multinational mass-consumption companies, in Chile and abroad. That background gives us an in-depth understanding of how supermarket chains, convenience stores and the traditional channel operate, and what a brand needs to enter, position itself and grow in each one.',
      'about.dedicated.title': 'What we do',
      'about.ded1.title': 'Import',
      'about.ded1.text': 'We work directly with international manufacturers, such as Comary (Brazil, since 1952) and Vieira (Portugal), and manage foreign trade and customs.',
      'about.ded2.title': 'Registration and compliance',
      'about.ded2.text': 'We process registrations with SAG, SEREMI de Salud, customs and municipal authorities. We adapt labeling and seals at the origin.',
      'about.ded3.title': 'Commercial strategy',
      'about.ded3.text': 'We define positioning, pricing per channel, assortment and promotional plans for each brand.',
      'about.ded4.title': 'Distribution',
      'about.ded4.text': 'We reach supermarkets, convenience, traditional trade, wholesalers, HORECA and specialized stores, from our warehouse in Colina.',
      'about.ded5.title': 'Point-of-sale execution',
      'about.ded5.text': 'Launches, tastings, activations and trade marketing so the product sells.',
      'about.mission': 'Mission',
      'about.mission.text': 'We deliver high-value commercial solutions through exceptional service and efficient sales management, connecting quality products with the needs of our clients and consumers to guarantee their satisfaction.',
      'about.vision': 'Vision',
      'about.vision.text': 'To be a benchmark of commercial excellence, both domestically and internationally, recognized for our ability to develop and position brands, for sales innovation and for the loyalty of our clients and consumers.',
      'about.why.title': 'Why Amerika',
      'about.why.text': 'Our difference is not in <em>what</em> we sell, but in <em>how</em> we sell it. We combine market intelligence, speed to spot trends, and an advisory relationship, not just sales, with the brands and clients we work with.',
      'about.why1': 'Market intelligence',
      'about.why2': 'Speed (time to market)',
      'about.why3': 'Advisory, not just sales',
      'about.why4': 'Long-term relationships',
      'about.r1.lbl': 'growth in core lines vs. previous year',
      'about.r2.lbl': 'SKUs incorporated in major chains',
      'about.r3.lbl': 'new SKUs developed',
      'about.ally.title': 'Partners',
      'about.ally.intro': 'International manufacturers represented exclusively in Chile (logos with written authorization).',
      'about.ally.comary': 'Comary · Brazil, since 1952',
      'about.ally.vieira': 'Vieira · Portugal',
      'about.team.title': 'Management team',
      'about.team.text': 'People with a track record in commercial areas of multinational mass-consumption companies.',
      'about.team.cta': 'Meet the team',
      'about.team.modal.title': 'Management team',
      'role.commercial': 'Commercial Manager',
      'role.ceo': 'General Manager',
      'role.community': 'Community Manager',
      'role.supply': 'Supply Manager',

      // ---------- Route to market ----------
      'route.h1': 'We take your brand from the port to the shelf',
      'route.intro': '"Route to market" is the path a product travels from the manufacturer to the end consumer. We design and execute that path for you.',
      'route.channels.title': 'Channels we serve',
      'route.ch1.title': 'Supermarkets',
      'route.ch1.text': 'Large and regional chains. Brand role: volume and visibility.',
      'route.ch2.title': 'Convenience stores',
      'route.ch2.text': 'Quick purchases and high turnover. Ideal for ready-to-drink beverages.',
      'route.ch3.title': 'Traditional trade and wholesalers',
      'route.ch3.text': 'Neighborhood stores and distributors. Role: coverage and presence in every district.',
      'route.ch4.title': 'HORECA',
      'route.ch4.text': 'Hotels, restaurants and cafés. Role: consumption occasions and brand value.',
      'route.ch5.title': 'Specialized stores',
      'route.ch5.text': 'Gourmet and health. Role: premium positioning.',
      'route.ch6.title': 'E-commerce',
      'route.ch6.text': 'Online sales and delivery apps. Role: direct reach to the consumer.',
      'route.coverage.title': 'Coverage and logistics',
      'route.coverage.p1': 'We operate from our storage and distribution center in <strong>Colina, Metropolitan Region</strong>, with distribution in <strong>Chile, Peru and Argentina</strong>.',
      'route.coverage.p2': '[To complete: chains and channels currently covered per country, and what is coming.]',
      'route.coverage.image': '[MAP OF CHILE, PERU AND ARGENTINA: current and projected coverage]',
      'route.steps.title': 'How we work with a brand',
      'route.step1.title': 'Brand and market assessment',
      'route.step1.text': 'We analyze the product\'s potential, competition and opportunity per channel.',
      'route.step2.title': 'Registration and compliance',
      'route.step2.text': 'SAG, SEREMI de Salud, customs and labeling with Chilean seals, from the origin.',
      'route.step3.title': 'Commercial strategy and pricing per channel',
      'route.step3.text': 'Positioning, assortment and promotional plans for each type of client.',
      'route.step4.title': 'Entry into chains and distribution',
      'route.step4.text': 'Entry negotiation and dispatch from the Colina warehouse.',
      'route.step5.title': 'Point-of-sale execution and marketing',
      'route.step5.text': 'Launches, tastings and trade marketing so the brand sells.',
      'route.services.title': 'Added-value services',
      'route.srv1.title': 'Marketing and trade marketing',
      'route.srv1.text': 'Launches, tastings, activations and trade fair presence.',
      'route.srv2.title': 'Regulatory advisory',
      'route.srv2.text': 'Chilean labeling and registrations sorted out from the country of origin.',
      'route.srv3.title': 'Sales and rotation reports',
      'route.srv3.text': 'Periodic follow-up to make data-driven decisions.',
      'route.model.title': 'Transparent agreement model.',
      'route.model.text': ' Commercial terms (margins, deadlines and service commitments) are discussed in a meeting with each brand.',
      'route.trends.title': 'What we see in the market',
      'route.trends.subtitle': 'We adapt our strategies to the realities and demands of today\'s consumer.',
      'route.trend1.title': 'Convenience',
      'route.trend1.text': 'Growth in prepared foods, online shopping and home delivery (80% relevance according to the study cited in the diagnosis).',
      'route.trend2.title': 'Health and wellness',
      'route.trend2.text': 'Growing demand for healthy products with clear labels (65% according to the study cited in the diagnosis).',
      'route.trend3.title': 'Value for money',
      'route.trend3.text': 'Quality at a reasonable price as the deciding factor in modern and traditional channels.',
      'route.cta.title': 'Want to bring your brand to Chile?',

      // ---------- Contact ----------
      'contact.h1': 'Let\'s talk',
      'contact.subtitle': 'Choose the option that best describes you in the form and we will contact you within 24 business hours.',
      'contact.email.lbl': 'Commercial email',
      'contact.email.val': '[commercial email, e.g.: sales@comercialamerika.cl]',
      'contact.phone.lbl': 'Phone / WhatsApp',
      'contact.phone.val': '+56 9 5610 0329',
      'contact.hours': 'Opening hours: Monday to Friday, 9:00 am - 6:00 pm',
      'contact.office.lbl': 'Warehouse and office',
      'contact.office.val': 'Colina, Metropolitan Region · Chile',
      'contact.office.note': 'Distribution and shipping only (not open to the public)',
      'contact.map': '[MAP: warehouse in Colina, Metropolitan Region]',
      'contact.form.perfil': 'I am…',
      'contact.perfil1': 'Brand or manufacturer',
      'contact.perfil2': 'Customer: supermarket, store, HORECA',
      'contact.perfil3': 'Service provider',
      'contact.perfil4': 'Job applicant (work with us)',
      'contact.pais1': 'Chile',
      'contact.pais2': 'Peru',
      'contact.pais3': 'Argentina',
      'contact.pais4': 'Other',
      'contact.form.name': 'Name',
      'contact.ph.name': 'Your name',
      'contact.form.company': 'Company',
      'contact.ph.company': 'Your company\'s name',
      'contact.form.cargo': 'Position',
      'contact.ph.cargo': 'E.g.: Purchasing manager',
      'contact.form.country': 'Country',
      'contact.form.email': 'Email',
      'contact.ph.email': 'email@company.com',
      'contact.form.phone': 'Phone',
      'contact.ph.phone': '+56 9 ...',
      'contact.form.message': 'Message',
      'contact.ph.message': 'Tell us what you need: distribute a brand (manufacturers) or buy our products (customers)',
      'contact.form.privacy': 'I accept the processing of my data under the <a href="#" data-consent-open>privacy policy</a> (Chilean Laws 19.628 and 21.719).',
      'contact.form.submit': 'Send message',
      'contact.alert.success': 'Message sent! We will contact you within 24 business hours.',
      'contact.alert.error': 'There was a problem sending your message. Check your details and try again.',

      // ---------- Age gate (alcohol pages) ----------
      'age.title': 'Content for people over 18',
      'age.text': 'This page shows alcoholic beverages. Their sale is prohibited to people under 18 (Chilean Law 21.363).',
      'age.yes': 'Yes, I am over 18',
      'age.no': 'No, leave',
      'age.badge': '⚠ Alcoholic beverage · For people over 18 only',

      // ---------- DrinkBall ----------
      'db.tagline': 'Ready-to-drink cocktails · "Chill it, open it, enjoy it"',
      'db.cta': 'I want to sell it in my business',
      'db.hero.photo': '[HERO "GELOU, ABRIU, CURTIU": can coming out of an ice bucket, blurred beach background]',
      'db.history': 'DrinkBall is the ready-to-drink cocktail (RTD) line of <strong>Comary</strong>, a Brazilian beverage manufacturer since 1952 (over 70 years of history). Comercial Amerika imports and distributes it exclusively in Chile.',
      'db.portfolio.title': 'Flavor portfolio',
      'db.portfolio.note': 'Known flavors of the DrinkBall line (formats to be confirmed with Comary).',
      'db.f1.name': 'Caipiríssima',
      'db.f1.desc': 'Lime and mint · Tropical classic',
      'db.f2.name': 'Mate Limao Spritz',
      'db.f2.desc': 'Mate leaves and lime · Classics',
      'db.f3.name': 'Piña Bolada',
      'db.f3.desc': 'Pineapple and coconut · Tropical',
      'db.f4.name': 'Banana Split',
      'db.f4.desc': 'Banana · Creamy',
      'db.f5.name': 'Doce de Leite',
      'db.f5.desc': 'Dulce de leche · Creamy',
      'db.f.ph1': '[PACKSHOT: Caipiríssima can]',
      'db.f.ph2': '[PACKSHOT: Mate Limao Spritz can]',
      'db.f.ph3': '[PACKSHOT: Piña Bolada can]',
      'db.f.ph4': '[PACKSHOT: Banana Split can]',
      'db.f.ph5': '[PACKSHOT: Doce de Leite can]',
      'db.occasion.title': 'Consumption occasion',
      'db.occasion.note': 'Parties, beach, festivals and gatherings. People over 25 and private settings (Law 21.363).',
      'db.occ1.title': 'Terrace / Chilean summer',
      'db.occ1.text': 'Sunset, cooler and cans ready to share.',
      'db.occ1.ph': '[PHOTO: consumption on a seaside terrace]',
      'db.occ2.title': 'Served in a glass',
      'db.occ2.text': 'Shows it is a true cocktail, not a soft drink.',
      'db.occ2.ph': '[PHOTO: served in a glass with ice and garnish]',
      'db.occ3.title': 'Where to find it',
      'db.occ3.text': 'Supermarkets, convenience stores and traditional trade.',
      'db.occ3.ph': '[PHOTO: can on the shelf or in a convenience cooler]',
      'db.cta2.title': 'Want to sell DrinkBall in your business?',

      // ---------- Pink Moon ----------
      'pm.tagline': 'Frisante · "Experience and style"',
      'pm.hero.photo': '[HERO: toast with glasses, Pink Moon bottle in focus, golden sunset light]',
      'pm.history': 'Pink Moon is a <strong>frisante</strong> (soft sparkling drink) from <strong>Comary</strong>, a Brazilian beverage manufacturer since 1952 (over 70 years of history). Comercial Amerika imports and distributes it exclusively in Chile.',
      'pm.portfolio.title': 'Portfolio',
      'pm.portfolio.note': 'Flavors and formats are confirmed with Comary together with the official graphic material.',
      'pm.ph1': '[PACKSHOT: Pink Moon bottle]',
      'pm.pending': '[Product to be confirmed]',
      'pm.pending.desc': 'Format and flavor to be confirmed with Comary',
      'pm.occasion.title': 'Consumption occasion',
      'pm.occasion.note': 'Celebrations, toasts and nights out. People over 25 and private settings (Law 21.363).',
      'pm.occ1.title': 'Home celebration',
      'pm.occ1.text': 'Outdoor table with string lights and a sunset toast.',
      'pm.occ1.ph': '[PHOTO: barbecue or home celebration, string lights, toast]',
      'pm.occ2.title': 'Terrace / after office',
      'pm.occ2.text': 'Warm sunset light, glasses and bottle in focus.',
      'pm.occ2.ph': '[PHOTO: Santiago rooftop terrace with the Andes in the background]',
      'pm.occ3.title': 'Where to find it',
      'pm.occ3.text': 'Supermarkets, convenience stores and traditional trade.',
      'pm.occ3.ph': '[PHOTO: product on the shelf or POP material]',
      'pm.cta2.title': 'Want to sell Pink Moon in your business?',

      // ---------- Commercial sheet (common to both brands) ----------
      'sheet.title': 'Commercial sheet for customers',
      'sheet.note': 'Data to request from Comary together with the technical sheets (section 5.5 of the document).',
      'sheet.note.pm': 'Flavors and formats to be confirmed with Comary.',
      'sheet.data': 'Commercial data',
      'sheet.value': 'Value',
      'sheet.format': 'Format per unit',
      'sheet.units': 'Units per case',
      'sheet.ean': 'Barcode (EAN)',
      'sheet.alcohol': 'Alcohol content',
      'sheet.shelf': 'Shelf life',
      'sheet.channels': 'Available channels',
      'sheet.tbc': '[to be confirmed with Comary]',
      'sheet.channels.val': 'Supermarkets · Convenience · Traditional trade · HORECA',

      // ---------- Privacy policy (EN) ----------
      'page.privacy.title': 'Privacy Policy | Comercial Amerika SpA',
      'page.privacy.desc': 'How Comercial Amerika SpA processes your personal data: purpose, consent, ARCO rights and retention, under Chilean Laws 19.628 and 21.719.',
      'privacy.label': 'Legal',
      'privacy.h1': 'Privacy policy and data consent',
      'privacy.intro': 'We use your data only to answer your commercial inquiries. Here you find the purpose, the legal basis, your rights and timelines, under Chilean Laws 19.628 and 21.719.',
      'privacy.s1.title': '1. Data controller',
      'privacy.s1.text': '<strong>Comercial Amerika SpA</strong>, Tax ID 78.474.378-0, with office and distribution center in Colina, Metropolitan Region, Chile. Contact for personal data matters: [privacy email] · Phone/WhatsApp: +56 9 5610 0329.',
      'privacy.s2.title': '2. Data we process',
      'privacy.s2.text': 'The data you provide voluntarily in the contact form: name, company, position, email, phone, country, profile type and your message contents. We do not request sensitive data (health, ethnic origin, beliefs, etc.). We do not knowingly collect data from people under 18.',
      'privacy.s3.title': '3. Purpose and legal basis',
      'privacy.s3.text': 'We use your data only to answer your inquiry, arrange a meeting or send quotations related to the import and distribution of food and beverages. The legal basis is your <strong>express and informed consent</strong>, given when you check the acceptance box in the form. We do not use your data for automated decisions or behavioral profiling.',
      'privacy.s4.title': '4. Retention period',
      'privacy.s4.text': 'We keep your data for [2] years from the last contact, or for as long as needed to handle your inquiry, or until you request deletion.',
      'privacy.s5.title': '5. Third parties and international transfer',
      'privacy.s5.text': 'Your data may be shared with our allied manufacturers when your inquiry is about distributing a brand in Chile (for example, Comary in Brazil or Vieira in Portugal). These communications are the minimum necessary and are made with your consent. We do not sell or hand over your data to third parties for advertising purposes.',
      'privacy.s6.title': '6. Your rights (access, rectification, cancellation and opposition)',
      'privacy.s6.text': 'You may request at any time: (a) access to your data; (b) rectification or amendment; (c) cancellation or deletion; and (d) opposition to their processing. To exercise your rights, write to [privacy email] with the subject "Data protection"; the reply will be sent within [10] business days. You may also request, under Law 21.719, information about the scope and characteristics of the processing of your data.',
      'privacy.s7.title': '7. Security and consent record',
      'privacy.s7.text': 'The site travels over an encrypted connection (HTTPS) and data access is restricted to the company\'s commercial team. Every form submission records the date, time, the version of the consent text accepted and the verified acceptance of the checkbox, in an internal consent log intended to provide traceability of compliance with Laws 19.628 and 21.719.',
      'privacy.s8.title': '8. Measurement and cookies',
      'privacy.s8.text': 'The site uses Google Analytics 4 and Google Tag Manager to measure, in aggregate, visits and the use of its sections (for example, form submissions and WhatsApp clicks). These tools may install cookies in your browser; you can disable them in your browser settings without losing any site functionality.',
      'privacy.s9.title': '9. Changes to this policy',
      'privacy.s9.text': 'This policy may be updated; any change will be published on this same page, with the corresponding version indicated at the end of the text.',
      'privacy.version': 'Version 1.0 · Published on October 27, 2026 · Comercial Amerika SpA',
      'consent.link': 'Basic personal data protection information',
      'consent.title': 'Basic personal data protection information',
      'consent.r1.lbl': 'Data controller:',
      'consent.r1.val': 'Comercial Amerika SpA, Tax ID 78.474.378-0, with registered office in [Colina, Metropolitan Region, Chile].',
      'consent.r2.lbl': 'Main purpose:',
      'consent.r2.val': 'Handling your contact request, processing your purchase or distribution request and/or answering the queries sent through this form.',
      'consent.r3.lbl': 'Legitimate bases:',
      'consent.r3.val': 'Performance of the requested contract/service and your explicit consent.',
      'consent.r4.lbl': 'Retention period:',
      'consent.r4.val': 'Your data is kept only for as long as needed to fulfil the described purpose, or until you request its deletion.',
      'consent.r5.lbl': 'Recipients:',
      'consent.r5.val': 'No data is handed over to third parties except under a legal obligation or to essential technology providers under a strict data-processing agreement.',
      'consent.r6.lbl': 'Rights (ARSOP):',
      'consent.r6.val': 'You have the right to access, rectify, delete, oppose and request portability of your personal data, as well as to revoke this consent at any time. You may exercise these rights by writing to [privacy email]. For more detail, see our full Privacy Policy.',
      'consent.dec.title': 'Consent statement',
      'consent.dec1': 'I accept the processing of my personal data for the main purposes described above. (Mandatory checkbox on the form: the message cannot be sent without it.)',
      'consent.dec2': 'I authorize the sending of commercial communications, offers and news from Comercial Amerika SpA via electronic means (Email/WhatsApp). (Optional checkbox on the form: choose according to your preference.)',
      'consent.accept': 'Accept and continue',
      'consent.reject': 'Reject',
      'contact.form.comms': 'I authorize the sending of commercial communications, offers and news from Comercial Amerika SpA via electronic means (Email/WhatsApp). Optional.',
      'cookies.text': 'We use measurement cookies (Google Analytics) to understand how the site is used and improve it. You can accept or reject; details in the <a href="privacidad.html">privacy policy</a>.',
      'cookies.accept': 'Accept',
      'cookies.reject': 'Reject',
      'sheet.note.pm': 'Flavors and formats to be confirmed with Comary.'
    }
  };

  /* ------------------------------------------
     BANDA "TRABAJAMOS CON" (index.html)
     Lista de logos que se muestra en una cinta animada.
     Para agregar o quitar una marca, edita solo este array:
     siempre con la ruta de la imagen y su texto alternativo.
     ------------------------------------------ */
  const ALLIES_LOGOS = [
    { src: 'img/movimiento/1 (1).svg', alt: 'Vieira' },
    { src: 'img/movimiento/2.svg', alt: 'Cacaolat' },
    { src: 'img/movimiento/3.svg',     alt: 'Comary' },
    { src: 'img/movimiento/4.svg',   alt: 'My Foods' },
    { src: 'img/movimiento/5 (1).svg', alt: 'Drinkball' },
    { src: 'img/movimiento/6 (1).svg',           alt: 'Pink Moon' },
    { src: 'img/movimiento/7.svg', alt: 'Top-K9' }
  ];

  // Variables compartidas de la cinta (las usan las dos funciones de abajo)
  var alliesHtml = '';
  var alliesCopias = 1;   // cuántas veces está pegada la lista dentro del track

  function initAlliesBand() {
    const track = document.getElementById('alliesTrack');
    if (!track) return; // solo existe en index.html

    // Se construye una "tarjeta" por marca (imagen con texto alternativo).
    // Sin loading="lazy": si la carga es diferida, las copias tardan en
    // aparecer y dejan un espacio vacío grande en la cinta.
    alliesHtml = ALLIES_LOGOS.map(function (logo) {
      return '<img src="' + logo.src + '" alt="' + logo.alt + '">';
    }).join('');

    // Primero una sola copia; initAlliesScrollDirection agrega las demás
    // cuando las imágenes ya cargaron y se conoce su ancho real.
    track.innerHTML = alliesHtml;
  }

  /* Dirección de la cinta según el scroll:
     al BAJAR en la página, los logos van de derecha a izquierda;
     al SUBIR, van de izquierda a derecha.
     La velocidad no cambia de golpe: se va acercando a su objetivo
     poco a poco, así la cinta frena y da la vuelta sin corte visible. */
  function initAlliesScrollDirection() {
    const track = document.getElementById('alliesTrack');
    if (!track) return; // solo existe en index.html

    // Accesibilidad: quien pidió menos movimiento, no ve la cinta moverse
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const VELOCIDAD_BASE = 0.6;     // píxeles por cuadro: despacio
    const SUAVIDAD = 0.04;          // qué tan rápido frena/acelera (0 = nunca, 1 = al instante)
    let pos = 0;                    // posición actual de la cinta
    let velocidad = -VELOCIDAD_BASE;       // arranca yendo hacia la izquierda
    let velocidadObjetivo = -VELOCIDAD_BASE;

    let ultimaPosicion = window.scrollY;

    window.addEventListener('scroll', function () {
      const ahora = window.scrollY;
      if (ahora > ultimaPosicion) {
        velocidadObjetivo = -VELOCIDAD_BASE;  // bajando
      } else if (ahora < ultimaPosicion) {
        velocidadObjetivo = VELOCIDAD_BASE;   // subiendo
      }
      ultimaPosicion = ahora;
    }, { passive: true });

    // Con el cursor sobre la banda, la cinta se detiene (de forma suave)
    const banda = track.closest('.allies-band');
    banda.addEventListener('mouseenter', function () { velocidadObjetivo = 0; });
    banda.addEventListener('mouseleave', function () {
      velocidadObjetivo = (window.scrollY < ultimaPosicion) ? VELOCIDAD_BASE : -VELOCIDAD_BASE;
    });

    // BUCLE CONTINUO: la cinta debe medir, al menos, el doble de la pantalla.
    // Esto se revisa cuando ya cargaron las imágenes (con "load"), porque
    // antes de eso los logos no tienen ancho real y la medida sale mal.
    function completarCopias() {
      while (track.scrollWidth < window.innerWidth * 2) {
        track.innerHTML += alliesHtml;
        alliesCopias = alliesCopias + 1;
      }
    }
    if (document.readyState === 'complete') {
      completarCopias();
    } else {
      window.addEventListener('load', completarCopias);
    }

    // Bucle de animación: aplica la transformación y ajusta la velocidad
    function animar() {
      velocidad = velocidad + (velocidadObjetivo - velocidad) * SUAVIDAD;
      pos = pos + velocidad;

      // cada copia de la lista mide lo mismo: scrollWidth / copias.
      // Ese ancho es el "vuelta completa": cuando la cinta avanza esa
      // distancia, vuelve a iniciar por el mismo lado por donde iba,
      // así una marca que sale por la izquierda reaparece por la derecha
      // (y viceversa), sin espacio vacío en ningún momento.
      const vuelta = track.scrollWidth / alliesCopias;
      if (pos <= -vuelta) pos = pos + vuelta;
      if (pos > 0) pos = pos - vuelta;

      track.style.transform = 'translateX(' + pos + 'px)';
      requestAnimationFrame(animar);
    }
    animar();
  }

  /* ------------------------------------------
     SISTEMA MULTI-IDIOMA
     ------------------------------------------ */
  let currentLang = DEFAULT_LANG;
  const missingKeys = new Set();

  function normalizeLang(lang) {
    const code = String(lang || '').toLowerCase().split('-')[0];
    return SUPPORTED_LANGS.indexOf(code) !== -1 ? code : DEFAULT_LANG;
  }

  function readStoredLanguage() {
    try {
      return normalizeLang(window.localStorage.getItem(STORAGE_KEY));
    } catch (error) {
      return DEFAULT_LANG; // file:// puede bloquear localStorage
    }
  }

  function storeLanguage(lang) {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (error) { /* sin almacenamiento: igual se aplica en esta página */ }
  }

  function getTranslation(lang, key) {
    const dict = translations[lang] || {};
    const fallback = translations[DEFAULT_LANG];

    if (Object.prototype.hasOwnProperty.call(dict, key) && dict[key]) {
      return dict[key];
    }
    if (Object.prototype.hasOwnProperty.call(fallback, key) && fallback[key]) {
      missingKeys.add(lang + ':' + key);
      return fallback[key];
    }
    missingKeys.add(lang + ':' + key + ' (sin texto de respaldo)');
    return null;
  }

  function applyTranslations(lang) {
    const safeLang = normalizeLang(lang);

    // Textos (admite HTML como <br> o <strong>)
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const value = getTranslation(safeLang, el.getAttribute('data-i18n'));
      if (value === null) return;
      if (el.tagName === 'TITLE') {
        el.textContent = value;
      } else {
        el.innerHTML = value;
      }
    });

    // Placeholders de inputs y textareas
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      const value = getTranslation(safeLang, el.getAttribute('data-i18n-placeholder'));
      if (value !== null) el.setAttribute('placeholder', value);
    });

    // Meta etiquetas (description, og:description, etc.)
    document.querySelectorAll('[data-i18n-content]').forEach(function (el) {
      const value = getTranslation(safeLang, el.getAttribute('data-i18n-content'));
      if (value !== null) el.setAttribute('content', value);
    });

    // Atributos aria-label
    document.querySelectorAll('[data-i18n-aria-label]').forEach(function (el) {
      const value = getTranslation(safeLang, el.getAttribute('data-i18n-aria-label'));
      if (value !== null) el.setAttribute('aria-label', value);
    });

    // Estado visual de los botones ES / EN
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      const isActive = btn.dataset.lang === safeLang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    document.documentElement.setAttribute('lang', safeLang);
    document.documentElement.setAttribute('data-lang', safeLang);
  }

  function setLanguage(lang) {
    currentLang = normalizeLang(lang);
    applyTranslations(currentLang);
    storeLanguage(currentLang);
    document.dispatchEvent(new CustomEvent('amerika:languagechange', {
      detail: { lang: currentLang }
    }));
    return currentLang;
  }

  function reportMissingKeys() {
    if (!missingKeys.size) return;
    if (window.console && typeof window.console.warn === 'function') {
      window.console.warn(
        '[AMERIKA i18n] Claves sin traducción en el idioma activo: ' +
        Array.from(missingKeys).join(', ')
      );
    }
  }

  function initLanguageButtons() {
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setLanguage(btn.dataset.lang);
      });
    });
  }

  /* ------------------------------------------
     MENÚ MÓVIL
     ------------------------------------------ */
  function initMobileMenu() {
    const toggle = document.querySelector('.mobile-toggle');
    const navs = document.querySelectorAll('.nav');
    if (!toggle || !navs.length) return;

    toggle.addEventListener('click', function () {
      // Abre o cierra los dos grupos del menú a la vez
      let abrirAhora = true;
      navs.forEach(function (n) {
        if (n.classList.contains('open')) abrirAhora = false;
      });
      navs.forEach(function (n) {
        n.classList.toggle('open', abrirAhora);
      });
      toggle.setAttribute('aria-expanded', abrirAhora ? 'true' : 'false');
    });

    // Al elegir una sección (o cambiar idioma), el menú se cierra
    navs.forEach(function (nav) {
      nav.querySelectorAll('a, .lang-btn').forEach(function (item) {
        item.addEventListener('click', function () {
          navs.forEach(function (n) { n.classList.remove('open'); });
          toggle.setAttribute('aria-expanded', 'false');
        });
      });
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ------------------------------------------
     MODAL DEL EQUIPO (Quiénes somos)
     ------------------------------------------ */
  function initTeamModal() {
    const btnOpen = document.getElementById('btnOpenTeam');
    const btnClose = document.getElementById('btnCloseTeam');
    const modal = document.getElementById('teamModal');
    if (!modal) return;

    function openModal() {
      modal.classList.add('show');
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      modal.classList.remove('show');
      document.body.style.overflow = '';
    }

    if (btnOpen) btnOpen.addEventListener('click', openModal);
    if (btnClose) btnClose.addEventListener('click', closeModal);

    window.addEventListener('click', function (event) {
      if (event.target === modal) closeModal();
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && modal.classList.contains('show')) closeModal();
    });
  }

  /* MODAL DE CONSENTIMIENTO DE DATOS (contacto.html)
     Igual que el modal del equipo: se abre al hacer clic en
     "Información básica sobre protección de datos" y se cierra
     con la X, haciendo clic fuera o con la tecla Escape. */
  function initConsentModal() {
    const btnClose = document.getElementById('btnCloseConsent');
    const modal = document.getElementById('consentModal');
    if (!modal) return;

    function openModal() {
      modal.classList.add('show');
      document.body.style.overflow = 'hidden';
      // El modal parte mostrando lo que ya está marcado en el formulario
      if (chkObligatoria && formPrivacidad) chkObligatoria.checked = formPrivacidad.checked;
      if (chkComunicaciones && formComunicaciones) chkComunicaciones.checked = formComunicaciones.checked;
      actualizarBotonAceptar();
    }

    function closeModal() {
      modal.classList.remove('show');
      document.body.style.overflow = '';
    }

    // Los checkboxes del modal y los del formulario van juntos:
    // - al abrir, el modal parte con lo que hay en el formulario;
    // - los cambios en el modal se reflejan al momento en el formulario.
    // Como el checkbox "privacidad" del formulario es "required",
    // sin marcarlo no se puede enviar: el usuario no puede avanzar
    // sin dar su consentimiento.
    const chkObligatoria = document.getElementById('consentObligatoria');
    const chkComunicaciones = document.getElementById('consentComunicaciones');
    const btnAccept = document.getElementById('btnConsentAccept');
    const btnReject = document.getElementById('btnConsentReject');
    const formPrivacidad = document.getElementById('privacidad');
    const formComunicaciones = document.getElementById('comunicaciones');

    // El botón "Aceptar y continuar" solo se activa con la casilla
    // obligatoria marcada (la de comunicaciones es opcional).
    function actualizarBotonAceptar() {
      if (btnAccept) btnAccept.disabled = !chkObligatoria.checked;
    }

    if (chkObligatoria) {
      chkObligatoria.addEventListener('change', function () {
        if (formPrivacidad) formPrivacidad.checked = chkObligatoria.checked;
        actualizarBotonAceptar();
      });
    }
    if (chkComunicaciones) {
      chkComunicaciones.addEventListener('change', function () {
        if (formComunicaciones) formComunicaciones.checked = chkComunicaciones.checked;
      });
    }

    if (btnAccept) btnAccept.addEventListener('click', closeModal);
    if (btnReject) btnReject.addEventListener('click', function () {
      // Rechazar: se desmarcan ambas (el envío del formulario queda bloqueado
      // porque la casilla "privacidad" del formulario es obligatoria)
      if (formPrivacidad) formPrivacidad.checked = false;
      if (formComunicaciones) formComunicaciones.checked = false;
      chkObligatoria.checked = false;
      chkComunicaciones.checked = false;
      actualizarBotonAceptar();
      closeModal();
    });

    /* El enlace que abre el modal vive DENTRO de la frase del checkbox,
       y esa frase la reescribe el sistema multi-idioma cada vez que
       cambia el idioma. Por eso el clic NO se engancha a un botón fijo:
       se escucha en todo el documento y se reacciona a cualquier
       elemento con data-consent-open (ver el texto en los diccionarios).
       preventDefault: que el enlace no navegue; stopPropagation: que el
       clic no active la casilla del label donde está el enlace. */
    document.addEventListener('click', function (event) {
      const link = event.target.closest('[data-consent-open]');
      if (!link) return;
      event.preventDefault();
      event.stopPropagation();
      openModal();
    });

    if (btnClose) btnClose.addEventListener('click', closeModal);

    window.addEventListener('click', function (event) {
      if (event.target === modal) closeModal();
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && modal.classList.contains('show')) closeModal();
    });
  }

  /* ------------------------------------------
     FILTRO DE MARCAS por categoría
     ------------------------------------------ */
  function initBrandFilters() {
    const buttons = document.querySelectorAll('.brand-filters button');
    const cards = document.querySelectorAll('[data-categorias]');
    if (!buttons.length || !cards.length) return;

    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        const categoria = button.getAttribute('data-categoria');

        buttons.forEach(function (b) { b.classList.remove('active'); });
        button.classList.add('active');

        cards.forEach(function (card) {
          const categorias = card.getAttribute('data-categorias');

          // La lista se separa por espacios en palabras ("alcohol",
          // "sin-alcohol", "alimentos", ...) y se compara palabra por palabra.
          // No se puede usar indexOf directo sobre el texto completo, porque
          // "alcohol" está dentro de "sin-alcohol" y mezcla los filtros.
          const mostrar = categoria === 'todas' ||
            categorias.split(' ').indexOf(categoria) !== -1;
          card.style.display = mostrar ? '' : 'none';
        });
      });
    });
  }

  /* ------------------------------------------
     AVISO DE COOKIES (todas las páginas)
     La primera vez, muestra la barra y guarda la decisión
     en localStorage ("amerika-cookies": aceptada / rechazada).
     Con una decisión guardada, la barra ya no vuelve a aparecer.
     ------------------------------------------ */
  const COOKIES_KEY = 'amerika-cookies';

  function initCookieBanner() {
    const banner = document.getElementById('cookieBanner');
    if (!banner) return; // la página no incluye el aviso

    // Respeta la Ley 21.719: sin decisión guardada, no se instala NADA.
    if (window.localStorage.getItem(COOKIES_KEY)) return;
    banner.hidden = false;

    document.getElementById('cookieAccept').addEventListener('click', function () {
      window.localStorage.setItem(COOKIES_KEY, 'aceptada');
      banner.hidden = true;
    });
    document.getElementById('cookieReject').addEventListener('click', function () {
      window.localStorage.setItem(COOKIES_KEY, 'rechazada');
      banner.hidden = true;
    });
  }

  /* ------------------------------------------
     MENSAJES ROTATIVOS DEL HERO (index.html)
     Cambia una frase cada 4 segundos con un fundido.
     Usa el diccionario actual, así que respeta ES/EN.
     ------------------------------------------ */
  function initHeroRotator() {
    const el = document.getElementById('heroRotator');
    if (!el) return;

    const mensajes = ['hero.rot1', 'hero.rot2', 'hero.rot3'];
    let indice = 0;

    function mostrarSiguiente() {
      // fundido de salida -> cambio de texto -> fundido de entrada
      el.style.opacity = '0';
      setTimeout(function () {
        el.textContent = window.AmerikaI18n.getTranslation(mensajes[indice]);
        el.style.opacity = '1';
        indice = (indice + 1) % mensajes.length;
      }, 400);
    }

    mostrarSiguiente();
    setInterval(mostrarSiguiente, 4000);
  }

  /* ------------------------------------------
     CONTROL DE EDAD 18+
     ------------------------------------------ */
  const AGE_KEY = 'amerika-mayor-de-18';

  function initAgeGate() {
    const modal = document.getElementById('ageModal');
    if (!modal) return;

    let yaConfirmo = false;
    try {
      yaConfirmo = sessionStorage.getItem(AGE_KEY) === 'si';
    } catch (error) { /* sin almacenamiento: siempre preguntamos */ }

    if (yaConfirmo) {
      modal.classList.add('hidden');
      return;
    }

    const btnYes = document.getElementById('btnAgeYes');
    if (btnYes) {
      btnYes.addEventListener('click', function () {
        try { sessionStorage.setItem(AGE_KEY, 'si'); } catch (error) {}
        modal.classList.add('hidden');
      });
    }

    const btnNo = document.getElementById('btnAgeNo');
    if (btnNo) {
      btnNo.addEventListener('click', function () {
        window.location.href = 'index.html';
      });
    }
  }

  /* ------------------------------------------
     AVISO DEL FORMULARIO DE CONTACTO
     ------------------------------------------ */
  function initFormAlert() {
    const alerta = document.getElementById('formAlert');
    if (!alerta) return;

    if (window.location.search.indexOf('enviado=1') !== -1) {
      alerta.innerHTML = getTranslation(currentLang, 'contact.alert.success');
      alerta.className = 'form-alert success';
      window.history.replaceState({}, '', 'contacto.html');
    } else if (window.location.search.indexOf('error=1') !== -1) {
      alerta.innerHTML = getTranslation(currentLang, 'contact.alert.error');
      alerta.className = 'form-alert error';
      window.history.replaceState({}, '', 'contacto.html');
    }
  }

  /* ------------------------------------------
     ARRANQUE
     ------------------------------------------ */
  function init() {
    initLanguageButtons();
    initMobileMenu();
    initTeamModal();
    initConsentModal();
    initBrandFilters();
    initAlliesBand();
    initAlliesScrollDirection();
    initHeroRotator();
    initCookieBanner();
    initAgeGate();
    setLanguage(readStoredLanguage());
    initFormAlert();
    reportMissingKeys();
  }

  // API pública para depurar
  window.AmerikaI18n = {
    get language() { return currentLang; },
    setLanguage: setLanguage,
    applyTranslations: applyTranslations,
    getTranslation: function (key) { return getTranslation(currentLang, key); },
    translations: translations
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
