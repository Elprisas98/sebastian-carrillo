// Content and hash router for the portfolio. Each case renders from the CASES data below.

const A = (name) => `assets/${name}.jpg`;
const BEHANCE = "https://www.behance.net/gallery/185153969/Portfolio-Sebastian-Carrillo";

const CASES = [
  {
    slug: "ucal-differentiators",
    title: "Lead with the differentiator",
    client: "UCAL", side: "Brand side", year: "2026",
    metric: "−28%", metricLabel: "cost per lead",
    thumb: "ucal-diff-qs-gold",
    insight: "Prospects compare universities on proof, not promises.",
    body: [
      "Each ad opened with UCAL's strongest proof point: the QS Gold rating, credit transfer of up to 100%, accessible tuition and employer demand for its graduates.",
      "The copy answered prospects' most pressing questions, and a single visual style ran across every program, so each new piece reinforced the last.",
      "Cost per lead on paid digital fell by 28%.",
    ],
    images: ["ucal-diff-qs-gold", "ucal-diff-transfer-100", "ucal-diff-s650", "ucal-diff-8-of-10", "ucal-diff-63", "ucal-diff-qs-psychology", "ucal-diff-business-leader", "ucal-diff-qs-curriculum"],
  },
  {
    slug: "ucal-business-school",
    title: "Business School campaign",
    client: "UCAL", side: "Brand side", year: "2026",
    metric: "+19%", metricLabel: "landing page leads",
    thumb: "ucal-bs-business",
    insight: "Business has changed. The way it is taught should change too.",
    body: [
      "UCAL's first major campaign produced about 95% with AI.",
      "Wrote the script and visual direction, and directed the AI production with the agency through several rounds of feedback. The system ran across film, key visuals and every paid format.",
      "Leads to the program's landing page grew by 19%.",
    ],
    video: "https://www.youtube-nocookie.com/embed/PTlT4-wcPRw",
    images: ["ucal-bs-administration", "ucal-bs-business", "ucal-bs-marketing", "ucal-bs-adm-mkt", "ucal-bs-story", "ucal-bs-vertical"],
  },
  {
    slug: "ucal-transfers",
    title: "Transfer students",
    client: "UCAL", side: "Brand side", year: "2026",
    metric: "+14%", metricLabel: "landing page leads",
    thumb: "ucal-tr-accounting",
    insight: "Hit your ceiling as a technician?",
    body: [
      "Spoke to technical-degree graduates who had reached a career ceiling, with credit transfer of up to 100% and a bachelor's degree in two more years as the hook.",
      "Recruited and managed 20 UGC creators, screening profiles for fit with the brand's personality and tone and giving feedback on their content.",
      "Leads to the transfer landing page grew by 14%.",
    ],
    images: ["ucal-tr-accounting", "ucal-tr-engineering", "ucal-tr-design-1", "ucal-tr-design-2", "ucal-tr-design-3", "ucal-tr-transfer-gown", "ucal-tr-accounting-story"],
  },
  {
    slug: "ucal-ai-production",
    title: "AI production at scale",
    client: "UCAL", side: "Brand side", year: "2026",
    metric: "10", metricLabel: "ad variations a day",
    thumb: "ucal-ai-engineering",
    insight: "One visual system, many programs, produced in-house.",
    body: [
      "Built prompt templates for each product and business unit, and used them with ChatGPT, Gemini, Midjourney and Veo 3 to produce up to 10 paid digital ad variations a day in-house.",
      "Competitor research was automated with Claude, pulling large volumes of ads from the Meta Ad Library to compare angles and formats before concepting.",
      "KPI reporting was automated with Claude and MCP connectors, so performance data reached the team fast enough to act on and iterate aggressively instead of waiting for a monthly report.",
    ],
    images: ["ucal-ai-engineering", "ucal-ai-accounting", "ucal-ai-communication", "ucal-ai-graphic-design", "ucal-ai-interiors", "ucal-ai-cpa-communication", "ucal-ai-cpa-design", "ucal-ai-cpa-interiors", "ucal-ai-film", "ucal-ai-strategist", "ucal-ai-marketing", "ucal-ai-dgp"],
  },
  {
    slug: "spec-baldecash",
    title: "Tu talento no necesita historial",
    client: "BaldeCash", side: "Spec work · unsolicited", year: "2026",
    metric: "Spec", metricLabel: "Nano Banana Pro + Veo 3.1",
    thumb: "spec-baldecash-ugc",
    insight: "\"I have the talent. What I don't have is a credit history.\" Banks judge students on something they have not had the chance to build yet.",
    body: [
      "Spec proposal for BaldeCash, the Peruvian fintech that finances laptops for students with no credit history and no guarantor. Its paid social leads with product and price; the opportunity was to bring the one argument only BaldeCash can make into the ads.",
      "The scene is one every student recognizes: \"Diego, can you share your screen?\", and Diego is on the call from his phone. His presentation shows up tiny, and a \"Mamá: ¿ya almorzaste?\" notification pops up in the middle. Humor carries the problem and the payoff comes at the start of the term: same kitchen, same class, now in full screen. The line: \"Tu talento no necesita historial\" (your talent needs no credit history).",
      "The end card pushes to action with the differentiator: no credit history, just your ID, apply in 5 minutes. The same concept adapts to a meme-style carousel and a split static, ready to A/B test against catalog ads.",
      "Scenes were generated with Nano Banana Pro, using the first frame as a reference to keep the person and the kitchen consistent, and animated with Veo 3.1 with Spanish dialogue. The video-call interface, captions and typography were set by hand in Asap, the brand's typeface. Not commissioned or published by BaldeCash.",
    ],
    mp4: "spec-baldecash-ugc",
    portrait: true,
    images: [
      ["spec-baldecash-car1", "Carousel 1/3: the meme"],
      ["spec-baldecash-car2", "Carousel 2/3: the line"],
      ["spec-baldecash-car3", "Carousel 3/3: the offer"],
      ["spec-baldecash-static", "Static: from the phone vs. full screen"],
    ],
  },
  {
    slug: "spec-bloqueo-ugc",
    title: "Lima's grey sky lies",
    client: "Bloqueo (fictional sunscreen)", side: "Spec work · AI social", year: "2026",
    metric: "Spec", metricLabel: "Nano Banana Pro + Veo 3.1",
    thumb: "spec-bloqueo-product",
    insight: "In Lima, sunscreen feels like a summer thing. The grey sky still burns.",
    body: [
      "Spec campaign for a fictional sunscreen brand built on one local truth: for most of the year Lima is overcast, so people skip SPF, but UV goes through the clouds.",
      "Two paid social statics carry the line in brand voice: \"El cielo está gris. El sol, no.\" and \"En Lima, el gris también quema.\" A UGC video tells the same truth as a confession, in the creator's voice, with the product shown in use, never presented.",
      "Photography generated with Nano Banana Pro without any text, using the product shot as a reference so the stick stays identical across pieces. Typography and layout were set by hand on a grid with real typefaces (Archivo and Instrument Serif). The UGC video was animated with Veo 3.1, including Spanish dialogue.",
    ],
    mp4: "spec-bloqueo-ugc",
    images: [
      ["spec-bloqueo-product", "Paid social: product"],
      ["spec-bloqueo-face", "Paid social: lifestyle"],
    ],
  },
  {
    slug: "spec-casa-barrio",
    title: "45 m², no excuses",
    client: "Casa Barrio (fictional home store)", side: "Spec work · AI UGC", year: "2026",
    metric: "Spec", metricLabel: "Nano Banana Pro + Veo 3.1",
    thumb: "spec-casabarrio-ugc",
    insight: "Everyone in Lima complains their apartment is small. Usually the apartment is fine. The furniture is too big.",
    body: [
      "Spec campaign for a fictional home store that sells compact, foldable furniture. The line flips the most common complaint about Lima apartments: \"Tu depa no es chico. Tus muebles son grandes.\"",
      "The UGC video is a 17-second before and after from a renter's phone. First, he has to climb over his own sofa to cross a 45 m² living room. One month later, in the same room with a sofa bed, a fold-down desk and a mirror, there is floor to spare: \"Resulta que mis muebles eran grandes.\" The brand line closes it on the end card.",
      "The Stories ad carries the same line as a static piece.",
      "Both frames were generated with Nano Banana Pro, using the first one as a reference so the person and the room stay the same, then animated with Veo 3.1, including Spanish dialogue. Captions and typography were set by hand with Hanken Grotesk and Newsreader.",
    ],
    mp4: "spec-casabarrio-ugc",
    images: [["spec-casabarrio-story", "Stories ad"]],
  },
  {
    slug: "izipay-heladizimo",
    title: "Verano Heladizimo",
    client: "izipay", side: "Conceptual work · VML", year: "2024",
    metric: "Concept", metricLabel: "conceptual work",
    thumb: "izipay-heladizimo-fans",
    insight: "In a Lima heatwave, people walk into whichever business has air conditioning. The coolest shop on the block gets the customers.",
    body: [
      "In February, Lima went past 30°C and people started looking for air-conditioned places to escape the heat, usually small businesses that attracted customers without trying.",
      "The idea, pitched to the creative director: izipay raffles air conditioners among merchants who buy a POS Android with Arisale, so their shop becomes the neighborhood's refuge from the heat. Teasers posed the problem in izipay's \"Eso no tiene sentido\" voice, and the key visual explained the mechanic in three steps. TikTok scripts dramatized it, from a shop so cold the staff wear jackets to an owner who sleeps at the shop to escape the heat at home.",
      "The UGC video tells the whole story in 18 seconds from a merchant's phone: a bodega owner complains that customers walk in, feel the heat and leave. Two weeks later she has won the air conditioner and nobody wants to leave.",
      "Conceptual work. The pieces shown were recreated in 2026 from the original pitch and follow izipay's own social system: the logo tab, its red and teal, captions outlined in red and a heavy rounded sans close to the brand's Museo Sans. Photography and footage were generated with Nano Banana Pro and Veo 3.1, and typography and captions were set by hand.",
    ],
    mp4: "izipay-heladizimo-ugc",
    images: [
      ["izipay-heladizimo-fans", "Teaser: \"¿Tienes más ventiladores que clientes?\""],
      ["izipay-heladizimo-type", "Teaser: type-only post"],
      ["izipay-heladizimo-kv", "Key visual and mechanic"],
    ],
  },
  {
    slug: "movistar-creative-excellence",
    title: "Price as a creative variable",
    client: "Movistar Peru", side: "Agency · VML", year: "2024–2025",
    metric: "+45%", metricLabel: "CTR · CPC −30%",
    thumb: "movistar-chip-plan",
    insight: "Nobody judges a price on its own. They judge it against what they already pay.",
    body: [
      "Led Movistar Peru's Creative Excellence program across home internet, mobile plans and devices, comparing static and carousel ads by CTR, clicks, engagement rate and impressions.",
      "Putting the price up front only worked for mobile plans. The difference was the reference point: someone switching operators compares the full price with their current bill, while an existing customer only weighs what they would add to it.",
      "So the price changed shape with the ask. The full price, kept low, when the ask was to switch. Only the difference when the ask was to add a line. A bundle price with a time frame for Movistar Total. And no price at all when the message was value.",
      "Testing also confirmed that percentage discounts performed better on lower-priced plans and fixed-amount discounts on higher-priced devices, measured on both ad and sales metrics. Designers were briefed with insights rather than raw figures, each piece with one clear objective.",
      "Paid social CTR rose by 45% and CPC fell by 30%.",
    ],
    images: [
      ["movistar-chip-plan", "Switch: the full price, kept low"],
      ["movistar-duo-plus-20", "Add a line: only the difference"],
      ["movistar-fiber-plus-mobile", "Complete the bundle: the combined price"],
      ["movistar-total-149", "Bundle: a price with a time frame"],
      ["movistar-total-benefits", "Value: no price at all"],
    ],
  },
  {
    slug: "aws-vanishing-emails",
    title: "Vanishing Emails",
    client: "AWS & Slalom", side: "Agency · VML", year: "2024",
    metric: "Bronze", metricLabel: "Cannes Lions, Innovation",
    thumbUrl: "https://img.youtube.com/vi/y38ZLtFSQ64/hqdefault.jpg",
    insight: "When promotions expire, their carbon footprint fades away.",
    body: [
      "Stored emails, especially promotional ones, consume energy in data centers long after they stop being useful. Most people never think about it.",
      "Vanishing Emails offers a one-click way to delete every expired promotional email. Co-developed the product idea, wrote the case video script and website copy, and built the deck with the creative director.",
      "Awarded a Cannes Lions Bronze in Innovation, 2024.",
    ],
    video: "https://www.youtube-nocookie.com/embed/y38ZLtFSQ64",
  },
  {
    slug: "samsung-influencers",
    title: "Influencer content for Samsung",
    client: "Samsung Peru", side: "Agency · VML", year: "2022–2023",
    metric: "50+", metricLabel: "influencer scripts",
    tile: "Samsung Galaxy",
    insight: "A script works when the creator's followers hear the creator, not the brand.",
    body: [
      "Wrote more than 50 scripts for Samsung campaigns with leading Peruvian influencers, and coordinated directly with each creator from the first idea to the published post.",
      "Every script was tailored to the creator's voice and to what their followers respond to, while keeping Samsung's message and product claims intact. The goal was content the creator was proud to post, the brand approved and the audience actually watched.",
      "Campaigns included the Galaxy S23 launch teasers, Galaxy Buds2 Pro and the Galaxy Trade-In promotion.",
    ],
    link: { href: BEHANCE, label: "See selected videos on Behance ↗" },
  },
];

// Spanish copy for each case, keyed by slug. Anything missing falls back to English.
const ES = {
  "ucal-differentiators": {
    title: "Abrir con el diferenciador", side: "Lado marca", metricLabel: "costo por lead",
    insight: "Los postulantes comparan universidades por pruebas, no por promesas.",
    body: [
      "Cada anuncio abría con la prueba más fuerte de UCAL: la calificación QS Gold, la convalidación de hasta el 100% de los cursos, una pensión accesible y la demanda de sus egresados entre los empleadores.",
      "El copy respondía las preguntas más urgentes de los postulantes, y un solo estilo visual recorría todas las carreras, de modo que cada pieza nueva reforzaba la anterior.",
      "El costo por lead en pauta digital bajó 28%.",
    ],
  },
  "ucal-business-school": {
    title: "Campaña de la Escuela de Negocios", side: "Lado marca", metricLabel: "leads a la landing",
    insight: "Los negocios cambiaron. La forma de enseñarlos también debería cambiar.",
    body: [
      "La primera gran campaña de UCAL producida en cerca de 95% con IA.",
      "Guion y dirección visual propios, y dirección de la producción con IA junto a la agencia en varias rondas de feedback. El sistema se aplicó al video, a los key visuals y a todos los formatos de pauta.",
      "Los leads a la landing del programa crecieron 19%.",
    ],
  },
  "ucal-transfers": {
    title: "Traslados", side: "Lado marca", metricLabel: "leads a la landing",
    insight: "¿Llegaste a tu techo como técnico?",
    body: [
      "La campaña le habló a egresados de carreras técnicas que habían llegado a un techo profesional, con la convalidación de hasta el 100% y el título universitario en dos años más como gancho.",
      "Selección y gestión de 20 creadores UGC, con filtro de perfiles por afinidad con la personalidad y el tono de la marca, y feedback sobre su contenido.",
      "Los leads a la landing de traslados crecieron 14%.",
    ],
  },
  "ucal-ai-production": {
    title: "Producción con IA a escala", side: "Lado marca", metricLabel: "variaciones de anuncios al día",
    insight: "Un solo sistema visual, muchas carreras, producido en casa.",
    body: [
      "Plantillas de prompts por producto y unidad de negocio, usadas con ChatGPT, Gemini, Midjourney y Veo 3 para producir en casa hasta 10 variaciones de anuncios al día.",
      "La investigación de la competencia se automatizó con Claude, que extrae grandes volúmenes de anuncios de la Biblioteca de anuncios de Meta para comparar ángulos y formatos antes de conceptualizar.",
      "Los reportes de KPIs se automatizaron con Claude y conectores MCP, así los datos llegaban al equipo a tiempo para actuar e iterar, sin esperar un reporte mensual.",
    ],
  },
  "spec-baldecash": {
    side: "Trabajo especulativo · sin encargo", metric: "Spec",
    insight: "\"Tengo el talento. Lo que no tengo es historial.\" El banco mide al estudiante por algo que todavía no tuvo oportunidad de construir.",
    body: [
      "Propuesta especulativa para BaldeCash, la fintech peruana que financia laptops a estudiantes sin historial crediticio ni garante. Su pauta habla de producto y precio; la oportunidad era llevar a los anuncios el argumento que solo ellos pueden usar.",
      "La escena es una que todo estudiante reconoce: \"Diego, ¿puedes compartir tu pantalla?\", y Diego está conectado desde el celular. Su exposición se ve diminuta y en medio le llega un \"Mamá: ¿ya almorzaste?\". El humor carga el problema y la revancha llega en el inicio de ciclo: la misma cocina, la misma clase, ahora en pantalla completa.",
      "El cierre empuja a la acción con el diferencial: sin historial, solo con DNI, solicita en 5 minutos. El mismo concepto se adapta a un carrusel tipo meme y a un estático partido, listos para una prueba A/B contra los anuncios de catálogo.",
      "Las escenas se generaron con Nano Banana Pro, usando el primer cuadro como referencia para mantener a la persona y la cocina, y se animaron con Veo 3.1 con diálogo en español. La interfaz de la clase virtual, los subtítulos y la tipografía se armaron a mano con Asap, la fuente de la marca. No es un trabajo encargado ni publicado por BaldeCash.",
    ],
    captions: ["Carrusel 1/3: el meme", "Carrusel 2/3: la frase", "Carrusel 3/3: la oferta", "Estático: desde el cel vs. pantalla completa"],
  },
  "spec-bloqueo-ugc": {
    title: "El cielo gris de Lima miente", client: "Bloqueo (protector solar ficticio)", side: "Trabajo especulativo · social con IA",
    insight: "En Lima, el bloqueador parece cosa de verano. El cielo gris quema igual.",
    body: [
      "Campaña especulativa para una marca ficticia de protector solar, construida sobre una verdad local: Lima pasa la mayor parte del año nublada, la gente no usa bloqueador, pero la radiación UV atraviesa las nubes.",
      "Dos estáticos de pauta llevan la frase en voz de marca: \"El cielo está gris. El sol, no.\" y \"En Lima, el gris también quema.\" Un video UGC cuenta la misma verdad como una confesión, en la voz de la creadora, con el producto en uso y nunca presentado.",
      "La fotografía se generó con Nano Banana Pro sin texto, con la foto del producto como referencia para que la barra sea idéntica en todas las piezas. La tipografía y la diagramación se hicieron a mano sobre una retícula, con Archivo e Instrument Serif. El video UGC se animó con Veo 3.1, con diálogo en español.",
    ],
    captions: ["Pauta: producto", "Pauta: lifestyle"],
  },
  "spec-casa-barrio": {
    title: "45 m², sin excusas", client: "Casa Barrio (tienda de hogar ficticia)", side: "Trabajo especulativo · UGC con IA",
    insight: "En Lima todos se quejan de que su depa es chico. Casi siempre el depa está bien. Los muebles son demasiado grandes.",
    body: [
      "Campaña especulativa para una tienda ficticia de muebles compactos y plegables. La frase le da la vuelta a la queja más común sobre los departamentos de Lima: \"Tu depa no es chico. Tus muebles son grandes.\"",
      "El video UGC es un antes y después de 17 segundos grabado desde el celular de un inquilino. Primero tiene que trepar su propio sofá para cruzar una sala de 45 m². Un mes después, en el mismo cuarto con sofá cama, escritorio abatible y espejo, sobra piso: \"Resulta que mis muebles eran grandes.\" La frase de marca cierra en la tarjeta final.",
      "La pieza para Stories lleva la misma frase en formato estático.",
      "Los dos cuadros se generaron con Nano Banana Pro, con el primero como referencia para mantener a la persona y el cuarto, y se animaron con Veo 3.1, con diálogo en español. Los subtítulos y la tipografía se armaron a mano con Hanken Grotesk y Newsreader.",
    ],
    captions: ["Pieza para Stories"],
  },
  "izipay-heladizimo": {
    side: "Trabajo conceptual · VML", metric: "Concepto", metricLabel: "trabajo conceptual",
    insight: "En una ola de calor en Lima, la gente entra al negocio que tenga aire acondicionado. El local más fresco de la cuadra se queda con los clientes.",
    body: [
      "En febrero, Lima pasó los 30 °C y la gente empezó a buscar lugares con aire acondicionado para escapar del calor, casi siempre pequeños negocios que atraían clientes sin proponérselo.",
      "La idea, presentada al director creativo: izipay sortea aires acondicionados entre los comercios que compran un POS Android con Arisale, para que su local sea el refugio del barrio contra el calor. Los teasers plantean el problema en la voz de \"Eso no tiene sentido\" de izipay, y el key visual explica la mecánica en tres pasos. Los guiones para TikTok lo dramatizan: desde un local tan frío que el personal usa casaca hasta un dueño que duerme en la tienda para escapar del calor de su casa.",
      "El video UGC cuenta toda la historia en 18 segundos desde el celular de una comerciante: una bodeguera se queja de que los clientes entran, sienten el horno y se van. Dos semanas después ganó el aire acondicionado y nadie se quiere ir.",
      "Trabajo conceptual. Las piezas se recrearon en 2026 a partir del pitch original y siguen el sistema de redes de izipay: la pestaña con el logo, su rojo y su turquesa, subtítulos con borde rojo y una sans redondeada y pesada cercana a la Museo Sans de la marca. La fotografía y el video se generaron con Nano Banana Pro y Veo 3.1, y la tipografía y los subtítulos se armaron a mano.",
    ],
    captions: ["Teaser: \"¿Tienes más ventiladores que clientes?\"", "Teaser: post tipográfico", "Key visual y mecánica"],
  },
  "movistar-creative-excellence": {
    title: "El precio como variable creativa", client: "Movistar Perú", side: "Agencia · VML",
    insight: "Nadie juzga un precio por sí solo. Lo juzga contra lo que ya paga.",
    body: [
      "Liderazgo del programa Creative Excellence de Movistar Perú para internet hogar, planes móviles y equipos, comparando anuncios estáticos y carruseles por CTR, clics, tasa de engagement e impresiones.",
      "Poner el precio adelante solo funcionaba en planes móviles. La diferencia era el punto de referencia: quien cambia de operador compara el precio completo con su recibo actual, mientras que un cliente actual solo evalúa cuánto le sumaría.",
      "Entonces el precio cambió de forma según el pedido. El precio completo, bajo, cuando el pedido era cambiarse. Solo la diferencia cuando el pedido era sumar una línea. Un precio de paquete con plazo para Movistar Total. Y ningún precio cuando el mensaje era valor.",
      "Las pruebas también confirmaron que los descuentos en porcentaje rendían mejor en planes de menor precio y los descuentos en monto fijo en equipos de mayor precio, medido tanto en métricas de anuncios como de ventas. Los diseñadores recibían briefs con insights en lugar de cifras, y cada pieza tenía un solo objetivo.",
      "El CTR en paid social subió 45% y el CPC bajó 30%.",
    ],
    captions: ["Cambiarse: el precio completo, bajo", "Sumar una línea: solo la diferencia", "Completar el paquete: el precio combinado", "Paquete: un precio con plazo", "Valor: ningún precio"],
  },
  "aws-vanishing-emails": {
    side: "Agencia · VML", metric: "Bronce", metricLabel: "Cannes Lions, Innovación",
    insight: "Cuando las promociones vencen, su huella de carbono se desvanece.",
    body: [
      "Los correos almacenados, sobre todo los promocionales, consumen energía en los centros de datos mucho después de dejar de ser útiles. Casi nadie piensa en eso.",
      "Vanishing Emails permite borrar con un clic todos los correos promocionales vencidos. Co-desarrollo de la idea de producto, guion del video caso, copy del sitio web y presentación junto al director creativo.",
      "Cannes Lions 2024, Bronce en Innovación.",
    ],
  },
  "samsung-influencers": {
    title: "Contenido con influencers para Samsung", client: "Samsung Perú", side: "Agencia · VML", metricLabel: "guiones para influencers",
    insight: "Un guion funciona cuando los seguidores escuchan al creador, no a la marca.",
    body: [
      "Más de 50 guiones para campañas de Samsung con influencers peruanos líderes, con coordinación directa con cada creador desde la primera idea hasta la publicación.",
      "Cada guion se adaptó a la voz del creador y a lo que funciona con sus seguidores, sin tocar el mensaje ni los atributos de producto de Samsung. La meta: contenido que el creador publique con orgullo, la marca apruebe y la audiencia vea de verdad.",
      "Las campañas incluyeron los teasers de lanzamiento del Galaxy S23, los Galaxy Buds2 Pro y la promoción Galaxy Trade-In.",
    ],
    link: "Ver videos seleccionados en Behance ↗",
  },
};

let LANG = "en";
try { LANG = localStorage.getItem("lang") || ((navigator.language || "").toLowerCase().startsWith("es") ? "es" : "en"); } catch (e) { /* storage blocked: keep default */ }
const T = (en, es) => (LANG === "es" ? es : en);

// A case in the active language: Spanish overrides on top of the English base.
function loc(c) {
  const es = LANG === "es" ? ES[c.slug] : null;
  if (!es) return c;
  const images = (c.images || []).map((im, i) => (Array.isArray(im) && es.captions?.[i] ? [im[0], es.captions[i]] : im));
  return { ...c, ...es, images, link: c.link ? { ...c.link, label: es.link || c.link.label } : undefined };
}

const app = document.getElementById("app");
const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const thumbSrc = (c) => c.thumbUrl || A(c.thumb);
const thumbHtml = (c) => c.tile ? `<span class="thumb tile">${esc(c.tile)}</span>` : `<img class="thumb" src="${thumbSrc(c)}" alt="" loading="lazy">`;

function workView() {
  const rows = CASES.map(loc).map((c, i) => `
    <li class="case-row">
      <a href="#/work/${c.slug}">
        <span class="num">${String(i + 1).padStart(2, "0")}</span>
        <span class="title">${esc(c.title)}</span>
        <span class="meta">${esc(c.client)} · ${esc(c.side)} · ${c.year}</span>
        <span class="metric">${esc(c.metric)}<small>${esc(c.metricLabel)}</small></span>
        ${thumbHtml(c)}
      </a>
    </li>`).join("");

  return `
    <section class="view">
      <div class="hero">
        <p class="eyebrow">${T("AI-native Creative Strategist · Meta, TikTok &amp; Google", "Creative Strategist nativo en IA · Meta, TikTok y Google")}</p>
        <h1 class="display">${T("Performance data in. <em>Winning ads</em> out.", "Entran datos. Salen <em>anuncios que ganan</em>.")}</h1>
        <div class="hero-grid">
          <p>${T(
            "A decade of copywriting and three years running the creative-to-performance loop on both sides of advertising: at VML for Movistar, izipay and Samsung, and in-house at UCAL, accountable to the CEO and board for every result.",
            "Una década de redacción publicitaria y tres años a cargo del ciclo entre creatividad y resultados en los dos lados de la publicidad: en VML para Movistar, izipay y Samsung, y dentro de UCAL, con responsabilidad por cada resultado ante el CEO y el directorio.")}</p>
          <div class="stats">
            <div class="stat"><b>+45%</b><span>CTR, Movistar</span></div>
            <div class="stat"><b>−40%</b><span>${T("Cost per lead, izipay", "Costo por lead, izipay")}</span></div>
            <div class="stat"><b>−28%</b><span>${T("Cost per lead, UCAL", "Costo por lead, UCAL")}</span></div>
          </div>
        </div>
        <div class="actions">
          <a class="btn btn-primary" href="#cases" data-scroll="cases">${T("See the work ↓", "Ver el trabajo ↓")}</a>
          <a class="btn btn-ghost" href="#/contact">${T("Get in touch", "Conversemos")}</a>
        </div>
      </div>
      <section class="process" aria-label="${T("How the work gets done", "Cómo se hace el trabajo")}">
        <div class="section-head"><h2>${T("The loop", "El ciclo")}</h2><span>${T("How every case below was built", "Cómo se construyó cada caso")}</span></div>
        <ol class="steps">
          <li><b>${T("Read the data", "Leer los datos")}</b><p>${T(
            "CTR, CPC, cost per lead and sales across Meta, TikTok and Google. KPI reporting automated with Claude, so decisions never wait for a monthly report.",
            "CTR, CPC, costo por lead y ventas en Meta, TikTok y Google. Reportes de KPIs automatizados con Claude, para que las decisiones no esperen un reporte mensual.")}</p></li>
          <li><b>${T("Find the angle", "Encontrar el ángulo")}</b><p>${T(
            "Competitor ads pulled at scale from the Meta Ad Library, social listening and one hypothesis per product and audience.",
            "Anuncios de la competencia extraídos a escala de la Biblioteca de anuncios de Meta, social listening y una hipótesis por producto y audiencia.")}</p></li>
          <li><b>${T("Brief and produce", "Briefear y producir")}</b><p>${T(
            "Briefs built on insights designers can act on, and prompt templates by product that ship up to 10 variations a day.",
            "Briefs con insights que el equipo de diseño puede ejecutar, y plantillas de prompts por producto que entregan hasta 10 variaciones al día.")}</p></li>
          <li><b>${T("Test and iterate", "Probar e iterar")}</b><p>${T(
            "Keep the winners, change one variable at a time (copy, type, color, layout) and start the next round.",
            "Se quedan los ganadores, se cambia una variable a la vez (copy, tipografía, color, layout) y empieza la siguiente ronda.")}</p></li>
        </ol>
      </section>
      <div class="section-head" id="cases"><h2 class="display">${T("Selected work", "Trabajo seleccionado")}</h2><span>${CASES.length} ${T("cases", "casos")}</span></div>
      <ul class="case-list">${rows}</ul>
    </section>`;
}

function caseView(slug) {
  const i = CASES.findIndex((c) => c.slug === slug);
  if (i < 0) return workView();
  const c = loc(CASES[i]);
  const next = loc(CASES[(i + 1) % CASES.length]);
  const imgs = [
    ...(c.images || []).map((im) => (Array.isArray(im) ? { src: A(im[0]), caption: im[1] } : { src: A(im) })),
    ...(c.imageUrls || []).map((src) => ({ src })),
  ];
  const figure = ({ src, caption }) => `<figure><img src="${src}" alt="${esc(caption || c.title)}" loading="lazy">${caption ? `<figcaption>${esc(caption)}</figcaption>` : ""}</figure>`;
  const ordered = imgs.some((im) => im.caption);
  const gallery = imgs.length ? `<div class="gallery${ordered ? " gallery-grid" : ""}${c.portrait ? " gallery-portrait" : ""}">${imgs.map(figure).join("")}</div>` : "";
  const video = c.video ? `<div class="embed"><iframe src="${c.video}" title="${esc(c.title)}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen loading="lazy"></iframe></div>`
    : c.mp4 ? `<div class="embed-vertical"><video src="assets/${c.mp4}.mp4" poster="${A(c.mp4)}" controls playsinline preload="metadata"></video></div>` : "";
  const link = c.link ? `<a class="cta" href="${c.link.href}" target="_blank" rel="noopener">${esc(c.link.label)}</a>` : "";

  return `
    <article class="view">
      <a class="back" href="#/work">${T("← All work", "← Todo el trabajo")}</a>
      <header class="case-hero">
        <h1 class="display">${esc(c.title)}</h1>
        <dl class="case-facts">
          <div><dt>${T("Client", "Cliente")}</dt><dd>${esc(c.client)}</dd></div>
          <div><dt>${T("Side", "Rol")}</dt><dd>${esc(c.side)}</dd></div>
          <div><dt>${T("Year", "Año")}</dt><dd>${c.year}</dd></div>
          <div class="big"><dt>${esc(c.metricLabel)}</dt><dd>${esc(c.metric)}</dd></div>
        </dl>
      </header>
      <div class="case-body">
        <div class="insight-card"><h3>${T("The idea", "La idea")}</h3><p class="insight">${esc(c.insight)}</p></div>
        <div><h3>${T("What was done", "Qué se hizo")}</h3>${c.body.map((p) => `<p>${esc(p)}</p>`).join("")}</div>
      </div>
      ${video}${link}${gallery}
      <a class="next-case" href="#/work/${next.slug}"><span>${T("Next case", "Siguiente caso")}</span><b>${esc(next.title)} →</b></a>
    </article>`;
}

function aboutView() {
  const job = (b, span, p) => `<li><b>${b}</b><span>${span}</span><p>${p}</p></li>`;
  return `
    <section class="view">
      <div class="hero">
        <p class="eyebrow">${T("About", "Perfil")}</p>
        <h1 class="display">${T(
          '<span class="line">Agency craft.</span><span class="line"><em>Client</em> accountability.</span>',
          '<span class="line">Oficio de agencia.</span><span class="line">Responsabilidad de <em>cliente</em>.</span>')}</h1>
      </div>
      <div class="about-grid">
        <h2>${T("Profile", "Perfil")}</h2>
        <div>
          <p class="lead">${T(
            "Creative strategist who has produced, evaluated and iterated thousands of ads, and keeps training in AI image and video generation to improve results with each round.",
            "Creative strategist con miles de anuncios producidos, evaluados e iterados, en formación constante en generación de imagen y video con IA para mejorar los resultados en cada ronda.")}</p>
        </div>
      </div>
      <div class="about-grid">
        <h2>${T("Experience", "Experiencia")}</h2>
        <ul class="timeline">
          ${job("UCAL · Communications Coordinator, Marketing", T("2026 – Present", "2026 – Actualidad"), T(
            "In charge of all external communications: paid digital ads, organic content, OOH and press. AI production, UGC creators and results presented to the CEO and board.",
            "A cargo de toda la comunicación externa: pauta digital, contenido orgánico, OOH y prensa. Producción con IA, creadores UGC y resultados presentados al CEO y al directorio."))}
          ${job("VML · Senior Data Strategist", "2025 – 2026", T(
            "Brand and product strategy for most of the agency's brands, giving creative teams data-driven insights tied to business objectives. Trained 100+ people in applied AI.",
            "Estrategia de marca y de producto para la mayoría de las marcas de la agencia, con insights basados en datos y atados a objetivos de negocio para los equipos creativos. Capacitación en IA aplicada a más de 100 personas."))}
          ${job("VML · Performance Lead", "2024 – 2025", T(
            "Movistar Peru's Creative Excellence program: CTR +45%, CPC −30%.",
            "Programa Creative Excellence de Movistar Perú: CTR +45%, CPC −30%."))}
          ${job("VML · Senior Copywriter", "2023 – 2024", T(
            "izipay lead generation: cost per lead −40%, leads +17%. Effie Gold, Silver and Bronze. Cannes Lions Bronze for AWS &amp; Slalom.",
            "Generación de leads para izipay: costo por lead −40%, leads +17%. Effie Oro, Plata y Bronce. Cannes Lions Bronce para AWS &amp; Slalom."))}
          ${job("VML · Senior Content Manager", "2022 – 2023", T(
            "Samsung, Cementos Pacasmayo, Viru and Kulhaus: consumer electronics, construction, agro-export and retail.",
            "Samsung, Cementos Pacasmayo, Viru y Kulhaus: tecnología de consumo, construcción, agroexportación y retail."))}
          ${job("Fiverr · Creative Copywriter", "2016 – 2022", T(
            "English-language copy for international clients.",
            "Copy en inglés para clientes internacionales."))}
        </ul>
      </div>
      <div class="about-grid">
        <h2>${T("Recognition", "Premios")}</h2>
        <ul class="timeline">
          ${job(T("Cannes Lions · Bronze, Innovation", "Cannes Lions · Bronce, Innovación"), "2024", 'AWS &amp; Slalom, "Vanishing Emails".')}
          ${job(T("Effie Awards · Gold, Silver and Bronze", "Effie Awards · Oro, Plata y Bronce"), "2024", 'izipay, "Con izipay recibes el dinero de tus ventas En One".')}
        </ul>
      </div>
      <div class="about-grid">
        <h2>${T("Toolkit", "Herramientas")}</h2>
        <div>
          <p class="skill-label">${T("Strategy &amp; performance", "Estrategia y performance")}</p>
          <ul class="chips"><li>${T("Creative briefs", "Briefs creativos")}</li><li>${T("Angle &amp; hook research", "Investigación de ángulos y ganchos")}</li><li>Meta Ad Library</li><li>${T("A/B testing", "Pruebas A/B")}</li><li>Meta Ads Manager</li><li>TikTok Ads Manager</li><li>Google Ads</li><li>Social listening</li></ul>
          <p class="skill-label">${T("AI &amp; production", "IA y producción")}</p>
          <ul class="chips"><li>ChatGPT</li><li>Claude</li><li>Gemini</li><li>Perplexity</li><li>Midjourney</li><li>Nano Banana</li><li>Higgsfield</li><li>Google Flow</li><li>Veo 3</li><li>Canva</li><li>CapCut</li><li>Premiere Pro</li><li>Lovable</li><li>Apps Script</li></ul>
          <p class="skill-label">${T("Languages", "Idiomas")}</p>
          <ul class="chips"><li>${T("English (advanced)", "Inglés (avanzado)")}</li><li>${T("Spanish (native)", "Español (nativo)")}</li></ul>
        </div>
      </div>
      <div class="about-grid">
        <h2>${T("Education", "Educación")}</h2>
        <ul class="timeline">${job(T("Bachelor's Degree in Communication Sciences", "Bachiller en Ciencias de la Comunicación"), "2021", "Universidad de Lima")}</ul>
      </div>
    </section>`;
}

function contactView() {
  return `
    <section class="view contact band">
      <p class="eyebrow">${T("Contact", "Contacto")}</p>
      <h1 class="display">${T("Let's make ads that <em>earn</em> their budget.", "Hagamos anuncios que <em>se ganen</em> su presupuesto.")}</h1>
      <div class="contact-links">
        <a href="mailto:scbrake98@gmail.com">scbrake98@gmail.com<span>${T("Email", "Correo")}</span></a>
        <a href="https://www.linkedin.com/in/sebastiancarrillo-brake-a62b37145" target="_blank" rel="noopener">LinkedIn<span>${T("Profile ↗", "Perfil ↗")}</span></a>
        <a href="${BEHANCE}" target="_blank" rel="noopener">Behance<span>${T("Earlier work ↗", "Trabajo anterior ↗")}</span></a>
      </div>
    </section>`;
}

// Text that lives in index.html rather than in a view
function chrome() {
  document.documentElement.lang = LANG;
  document.title = T("Sebastian Carrillo Brake · Creative Strategist", "Sebastian Carrillo Brake · Creative Strategist");
  const labels = { work: T("Work", "Trabajo"), about: T("About", "Perfil"), contact: T("Contact", "Contacto") };
  document.querySelectorAll(".tabs a").forEach((a) => { a.textContent = labels[a.dataset.tab]; });
  document.querySelectorAll(".lang button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === LANG)));
  document.querySelector(".site-footer span").textContent = T("Sebastian Carrillo Brake · Creative Strategist · Lima, Peru (GMT-5)", "Sebastian Carrillo Brake · Creative Strategist · Lima, Perú (GMT-5)");
  document.querySelector(".lightbox-close").textContent = T("Close", "Cerrar");
}

function render(keepScroll) {
  const [, tab = "work", slug] = (location.hash || "#/work").split("/");
  chrome();
  app.innerHTML = tab === "about" ? aboutView() : tab === "contact" ? contactView() : slug ? caseView(slug) : workView();
  document.querySelectorAll(".tabs a").forEach((a) => a.classList.toggle("active", a.dataset.tab === (["about", "contact"].includes(tab) ? tab : "work")));
  if (keepScroll !== true) window.scrollTo(0, 0);
}

// Language toggle: re-render in place, keep the reader where they were
document.querySelector(".lang").addEventListener("click", (e) => {
  const b = e.target.closest("button[data-lang]");
  if (!b || b.dataset.lang === LANG) return;
  LANG = b.dataset.lang;
  try { localStorage.setItem("lang", LANG); } catch (err) { /* storage blocked */ }
  render(true);
});

// Smooth-scroll buttons that point at an in-page section, not a route
document.addEventListener("click", (e) => {
  const a = e.target.closest("[data-scroll]");
  if (!a) return;
  e.preventDefault();
  document.getElementById(a.dataset.scroll)?.scrollIntoView({ behavior: "smooth" });
});

// Lightbox for gallery images
const lb = document.getElementById("lightbox");
app.addEventListener("click", (e) => {
  const img = e.target.closest(".gallery img");
  if (!img) return;
  lb.querySelector("img").src = img.src;
  lb.hidden = false;
});
lb.addEventListener("click", () => { lb.hidden = true; });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") lb.hidden = true; });

window.addEventListener("hashchange", () => render());
render();
