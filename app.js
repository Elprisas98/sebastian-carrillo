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
    ],
    images: ["ucal-ai-engineering", "ucal-ai-accounting", "ucal-ai-communication", "ucal-ai-graphic-design", "ucal-ai-interiors", "ucal-ai-cpa-communication", "ucal-ai-cpa-design", "ucal-ai-cpa-interiors", "ucal-ai-film", "ucal-ai-strategist", "ucal-ai-marketing", "ucal-ai-dgp"],
  },
  {
    slug: "spec-farmersdog",
    title: "Family eats real food",
    client: "The Farmer's Dog", side: "Spec work · unsolicited", year: "2026",
    metric: "3", metricLabel: "hooks to A/B test",
    thumb: "spec-farmersdog-c", loop: "loop-farmersdog",
    insight: "We treat our dogs like family in every way except the bowl: the $180 bed, the sweater, the birthday cake, and then the same brown pellets twice a day for years.",
    brief: [
      ["Audience", "US dog owners who already spend on their dog and still feed kibble. Solution-aware."],
      ["Insight", "They spoil the dog everywhere except dinner."],
      ["Bet", "A contradiction every owner recognizes, played for laughs, earns more attention than another ingredient list."],
      ["Measure", "Hook rate by hook, then click-through to the quiz and cost per first box."],
    ],
    body: [
      "Benchmark first. The Farmer's Dog's brand films sell food as love, and its TikTok work leans on creators and convenience. Its ads rarely use humor, so humor became the angle: the contradiction between how much owners spend on their dog and what goes in the bowl.",
      "Three hooks, three moments, one dog. The spoiled dog: \"his bed: $180 / his sweater: $45 / his dinner:\", landing as kibble hits the bowl. The dinner stare: \"he's not begging. he's asking why his food looks like that.\" The picky eater: \"me: it's dinner / him:\", as he walks away from a full bowl.",
      "One shared body: a bowl of fresh food, a dog that dives in and licks it clean. The copy uses only what the brand claims (real meat and veggies, made fresh, portioned for your dog, human-grade, developed by board-certified vet nutritionists) and closes on \"Family eats real food.\" No packaging is shown, so nothing on screen invents a label.",
      "One dog, one apartment: every still came from the same reference image in Nano Banana Pro so the dog never changes, then was animated with Kling 3.0. Sound design and music were generated with ElevenLabs and CassetteAI, and the captions and close were set by hand in Remotion. Not commissioned or published by The Farmer's Dog.",
    ],
    mp4s: [
      ["spec-farmersdog-a", "Hook A: the spoiled dog"],
      ["spec-farmersdog-b", "Hook B: the dinner stare"],
      ["spec-farmersdog-c", "Hook C: the picky eater"],
    ],
  },
  {
    slug: "spec-starface",
    title: "Your fingers aren't skincare",
    client: "Starface", side: "Spec work · unsolicited", year: "2026",
    metric: "3", metricLabel: "hooks to A/B test",
    thumb: "spec-starface-a", loop: "loop-starface",
    insight: "Everyone knows not to pick. Everyone picks anyway: in the mirror at 1 a.m., under a fourth layer of concealer, with a hand that keeps drifting back to the jaw in class.",
    brief: [
      ["Audience", "Gen Z in the US with occasional breakouts. Problem-aware: they know patches exist."],
      ["Insight", "The pimple isn't what makes it worse. Their hands are."],
      ["Bet", "Starface's least-used claim, that the star protects the spot from picking, beats another \"cute patch\" ad."],
      ["Measure", "Hook rate by hook, then CTR and cost per purchase on the winner."],
    ],
    body: [
      "Benchmark first. Starface's paid social leans on creators wearing stars as an accessory, limited drops and acne positivity. The claim it uses least is the most functional one: the star shields the spot and reminds you not to pick. That became the angle.",
      "Three hooks, three behaviors, three audiences, all with native captions. The picker at 1 a.m.: \"me at 1am about to make it so much worse:\". The concealer layerer in the car mirror: \"layer 4 of concealer and it's still the main character\". The student who can't stop touching his jaw: \"my hand every 4 seconds in lecture:\".",
      "One shared body: a star comes off the sheet and goes on the spot, with the brand's own three words, \"absorbs. shrinks. protects.\" The close lands the line, \"your fingers aren't skincare.\", and uses only claims Starface makes, footnote included: 100% hydrocolloid, clinically proven to shrink pimples in 6 hours.",
      "Stills generated with Nano Banana Pro and the compact with GPT Image, using Starface's product photos as reference, then animated with Kling 3.0. Sound design and music were generated with ElevenLabs and CassetteAI, and the captions and close were set by hand in Remotion. Every frame was reviewed before animating, and the one shot where the star missed the spot was redone. Not commissioned or published by Starface.",
    ],
    mp4s: [
      ["spec-starface-a", "Hook A: the 1 a.m. picker"],
      ["spec-starface-b", "Hook B: the concealer"],
      ["spec-starface-c", "Hook C: the lecture"],
    ],
  },
  {
    slug: "spec-liquidiv",
    title: "Water alone isn't keeping up",
    client: "Liquid I.V.", side: "Spec work · unsolicited", year: "2026",
    metric: "3", metricLabel: "hooks to A/B test",
    thumb: "spec-liquidiv-a", loop: "loop-liquidiv",
    insight: "Nobody notices they're dehydrated until water alone stops keeping up: after a long flight, an open bar, a hot class.",
    brief: [
      ["Audience", "US adults who drink water and don't think they need more. Problem-unaware."],
      ["Insight", "You only notice dehydration once water alone stops keeping up."],
      ["Bet", "Three specific moments (a flight, the morning after, a hot class) beat a generic hydration claim."],
      ["Measure", "Hook rate by hook, then CTR and cost per purchase on the winner."],
    ],
    body: [
      "Spec direct-response ad for Liquid I.V. Sugar-Free, built the way a performance team tests: one body and one close, three hooks, each aimed at a different moment and audience.",
      "Hook A, travel: \"6 hour flight. 1 tiny cup of water.\" Hook B, the morning after a wedding: \"the open bar was free. this isn't.\", without promising a hangover cure. Hook C, fitness: \"me thinking water is enough:\". No dialogue, native captions, the problem shown, not explained.",
      "The shared body is the ritual: the stick tears, the powder blooms in the water, the bottle shakes, \"Same water. Better hydration.\" The close uses only the claim the brand already makes, better hydration than water alone, with the real Sugar-Free pack and a \"Shop Sugar-Free\" button.",
      "Hooks were generated with Nano Banana Pro and the product shots with GPT Image 2, using the real pack as a reference so the label stays exact, then animated with Kling 3.0. Sound design generated with ElevenLabs, close typography set by hand. Not commissioned or published by Liquid I.V.",
    ],
    mp4s: [
      ["spec-liquidiv-a", "Hook A: the flight"],
      ["spec-liquidiv-b", "Hook B: the morning after"],
      ["spec-liquidiv-c", "Hook C: hot yoga"],
    ],
    portrait: true,
  },
  {
    slug: "spec-baldecash",
    title: "Tu talento no necesita historial",
    client: "BaldeCash", side: "Spec work · unsolicited", year: "2026",
    metric: "5", metricLabel: "pieces: Reel, carousel, static",
    thumb: "spec-baldecash-ugc", loop: "loop-baldecash",
    insight: "\"I have the talent. What I don't have is a credit history.\" Banks judge students on something they have not had the chance to build yet.",
    brief: [
      ["Audience", "Peruvian university students with no credit history who think financing is out of reach."],
      ["Insight", "Banks judge students on something they haven't had the chance to build."],
      ["Bet", "The one argument only BaldeCash can make (no credit history, no guarantor) beats product-and-price catalog ads."],
      ["Measure", "CTR and cost per application against the current catalog ads."],
    ],
    body: [
      "Spec proposal for BaldeCash, the Peruvian fintech that finances laptops for students with no credit history and no guarantor. Its paid social leads with product and price; the opportunity was to bring the one argument only BaldeCash can make into the ads.",
      "The hook is a native meme caption: \"my laptop when my only job is changing the slides:\". Mid-presentation, Diego's old laptop gives out on its own: the screen stutters, a band of interference rolls across it and it goes black, while the hallway light stays on. No dialogue, show don't tell: his frozen face, then his phone lighting up on the desk as the group chat blows up.",
      "The close sells: \"Jubila a la poderosa\" (retire the old warhorse), no credit history, no guarantor, just your ID, a new laptop from S/49 a month, apply in 5 minutes. The line: \"Tu talento no necesita historial\". The same concept adapts to a meme-style carousel and a split static, ready to A/B test against catalog ads.",
      "Every story beat is AI footage: frames made with Nano Banana Pro from one base image to keep the person and the room consistent, animated with Kling 3.0 using start and end frames so the screen dies on camera. Sound design (voice-free) was generated with ElevenLabs and the close typography was set by hand in Asap, the brand's typeface. Not commissioned or published by BaldeCash.",
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
    slug: "izipay-heladizimo",
    title: "Verano Heladizimo",
    client: "izipay", side: "Conceptual work · VML", year: "2024",
    metric: "Pitch", metricLabel: "concept recreated with AI",
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
    insight: "People rarely judge a price on its own. They judge it against what they already pay.",
    body: [
      "Led Movistar Peru's Creative Excellence program across home internet, mobile plans and devices, with ads that drove purchases in Movistar's online store. Static and carousel ads were compared by CTR, clicks, engagement rate and impressions.",
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
    slug: "reporting-loop",
    title: "Reporting that writes itself",
    client: "UCAL", side: "Brand side", year: "2026",
    metric: "−80%", metricLabel: "hours on paid media reporting",
    thumb: "loop-reporting",
    insight: "The slowest part of a creative loop is rarely the creative. It is waiting for someone to put the numbers together.",
    body: [
      "Paid media reporting for Google and Meta was fully automated with Claude and MCP connectors. Performance data now reaches the team in time to shape the next round of concepts, instead of arriving in a monthly report.",
      "The time that used to go into putting the numbers together now goes into deciding what to test next.",
      "The hours spent on paid media reporting fell by 80%.",
    ],
    wide: true, tile: true,
    images: [["loop-reporting", "The automated reporting loop"]],
  },
];

// Display order: results first, then conceptual and spec work.
const ORDER = [
  "movistar-creative-excellence", "ucal-differentiators", "ucal-business-school", "ucal-transfers",
  "ucal-ai-production", "reporting-loop", "aws-vanishing-emails",
  "izipay-heladizimo", "spec-farmersdog", "spec-starface", "spec-liquidiv", "spec-baldecash",
];
CASES.sort((a, b) => ORDER.indexOf(a.slug) - ORDER.indexOf(b.slug));

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
    ],
  },
  "reporting-loop": {
    title: "El reporte se arma solo", side: "Lado marca", metricLabel: "horas en reportería de pauta",
    insight: "La parte más lenta del ciclo creativo casi nunca es la creatividad. Es esperar a que alguien junte los números.",
    body: [
      "La reportería de pauta de Google y Meta se automatizó por completo con Claude y conectores MCP. Ahora los datos llegan al equipo a tiempo para definir la siguiente ronda de conceptos, en vez de llegar en un reporte mensual.",
      "El tiempo que antes se iba en juntar los números ahora se va en decidir qué probar después.",
      "Las horas dedicadas a la reportería de pauta bajaron 80%.",
    ],
    captions: ["El ciclo de reportería automatizado"],
  },
  "spec-farmersdog": {
    title: "La familia come comida de verdad", side: "Trabajo especulativo · sin encargo", metricLabel: "ganchos para prueba A/B",
    insight: "Tratamos al perro como familia en todo menos en el plato: la cama de US$180, el suéter, la torta de cumpleaños y, después, las mismas bolitas marrones dos veces al día durante años.",
    brief: [
      ["Público", "Dueños de perros en EE. UU. que ya gastan en su perro y siguen dándole croquetas. Conocen la solución."],
      ["Insight", "Engríen al perro en todo, menos en la comida."],
      ["Apuesta", "Una contradicción que todo dueño reconoce, contada con humor, gana más atención que otra lista de ingredientes."],
      ["Qué medir", "Tasa de gancho por cada uno, luego clics al quiz y costo por primera caja."],
    ],
    body: [
      "Primero, el benchmark. Los films de marca de The Farmer's Dog venden la comida como amor, y su trabajo en TikTok se apoya en creadores y en la conveniencia. Sus anuncios casi no usan el humor, así que el humor se volvió el ángulo: la contradicción entre lo que el dueño gasta en su perro y lo que pone en el plato.",
      "Tres ganchos, tres momentos, un solo perro. El perro engreído: \"his bed: $180 / his sweater: $45 / his dinner:\", justo cuando las croquetas caen al plato. La mirada en la cena: \"he's not begging. he's asking why his food looks like that.\" El mañoso: \"me: it's dinner / him:\", mientras deja el plato lleno y se va.",
      "Un solo cuerpo en común: un plato de comida fresca y un perro que se lanza y lo deja limpio. El copy usa solo lo que la marca afirma (carne y verduras de verdad, hecho fresco, porcionado para tu perro, calidad apta para humanos, desarrollado por nutricionistas veterinarios certificados) y cierra con \"Family eats real food.\" No se muestra el empaque, para que nada en pantalla invente una etiqueta.",
      "Un perro, un departamento: todos los cuadros salieron de la misma imagen de referencia en Nano Banana Pro para que el perro nunca cambie, y se animaron con Kling 3.0. El diseño sonoro y la música se generaron con ElevenLabs y CassetteAI, y los textos y el cierre se armaron a mano en Remotion. No es un trabajo encargado ni publicado por The Farmer's Dog.",
    ],
    mp4Captions: ["Gancho A: el perro engreído", "Gancho B: la mirada en la cena", "Gancho C: el mañoso"],
  },
  "spec-starface": {
    title: "Tus dedos no son skincare", side: "Trabajo especulativo · sin encargo", metricLabel: "ganchos para prueba A/B",
    insight: "Todos saben que no hay que reventarse los granos. Todos lo hacen igual: frente al espejo a la 1 a. m., bajo la cuarta capa de corrector, con una mano que vuelve a la mandíbula en plena clase.",
    brief: [
      ["Público", "Gen Z en EE. UU. con brotes ocasionales. Conocen el problema y saben que existen los parches."],
      ["Insight", "No es el grano lo que lo empeora. Son sus manos."],
      ["Apuesta", "La afirmación que Starface menos usa, que la estrella protege el grano de las manos, le gana a otro anuncio de \"parche bonito\"."],
      ["Qué medir", "Tasa de gancho por cada uno, luego CTR y costo por compra del ganador."],
    ],
    body: [
      "Primero, el benchmark. La pauta de Starface se apoya en creadoras que usan las estrellas como accesorio, en lanzamientos limitados y en la positividad frente al acné. La afirmación que menos usa es la más funcional: la estrella protege el grano y te recuerda no tocarlo. Ese fue el ángulo.",
      "Tres ganchos, tres conductas, tres públicos, todos con textos nativos. La que se revienta el grano a la 1 a. m.: \"me at 1am about to make it so much worse:\". La que tapa el grano con corrector en el espejo del auto: \"layer 4 of concealer and it's still the main character\". El estudiante que no deja de tocarse la mandíbula: \"my hand every 4 seconds in lecture:\".",
      "Un solo cuerpo en común: la estrella sale de la lámina y va sobre el grano, con las tres palabras de la propia marca, \"absorbs. shrinks. protects.\" El cierre aterriza la frase, \"your fingers aren't skincare.\", y usa solo afirmaciones de Starface, con su nota al pie: 100% hidrocoloide, clínicamente probado para reducir granos en 6 horas.",
      "Los cuadros se generaron con Nano Banana Pro y el estuche con GPT Image, con las fotos de producto de Starface como referencia, y se animaron con Kling 3.0. El diseño sonoro y la música se generaron con ElevenLabs y CassetteAI, y los textos y el cierre se armaron a mano en Remotion. Cada cuadro se revisó antes de animarlo, y se rehízo la única toma en que la estrella no tapaba el grano. No es un trabajo encargado ni publicado por Starface.",
    ],
    mp4Captions: ["Gancho A: la 1 a. m.", "Gancho B: el corrector", "Gancho C: la clase"],
  },
  "spec-liquidiv": {
    title: "El agua sola ya no alcanza", side: "Trabajo especulativo · sin encargo", metricLabel: "ganchos para prueba A/B",
    insight: "Nadie nota que está deshidratado hasta que el agua sola ya no alcanza: después de un vuelo largo, de una barra libre, de una clase de hot yoga.",
    brief: [
      ["Público", "Adultos en EE. UU. que toman agua y no creen necesitar más. No saben que tienen el problema."],
      ["Insight", "Solo notas la deshidratación cuando el agua sola ya no alcanza."],
      ["Apuesta", "Tres momentos concretos (un vuelo, la mañana después, una clase de hot yoga) le ganan a una promesa genérica de hidratación."],
      ["Qué medir", "Tasa de gancho por cada uno, luego CTR y costo por compra del ganador."],
    ],
    body: [
      "Anuncio especulativo de respuesta directa para Liquid I.V. Sugar-Free, armado como prueba un equipo de performance: un solo cuerpo y un solo cierre, con tres ganchos, cada uno para un momento y un público distinto.",
      "Gancho A, viajes: \"6 hour flight. 1 tiny cup of water.\" Gancho B, la mañana después de un matrimonio: \"the open bar was free. this isn't.\", sin prometer que cura la resaca. Gancho C, deporte: \"me thinking water is enough:\". Sin diálogos, con textos nativos: el problema se muestra, no se explica.",
      "El cuerpo común es el ritual: el sobre se rasga, el polvo florece en el agua, la botella se agita, \"Same water. Better hydration.\" El cierre usa solo la afirmación que la marca ya hace, mejor hidratación que el agua sola, con el sobre Sugar-Free real y el botón \"Shop Sugar-Free\".",
      "Los ganchos se generaron con Nano Banana Pro y las tomas de producto con GPT Image 2, con el sobre real como referencia para que la etiqueta salga exacta, y se animaron con Kling 3.0. El diseño sonoro se generó con ElevenLabs y la tipografía del cierre se armó a mano. No es un trabajo encargado ni publicado por Liquid I.V.",
    ],
    mp4Captions: ["Gancho A: el vuelo", "Gancho B: la mañana después", "Gancho C: hot yoga"],
  },
  "spec-baldecash": {
    side: "Trabajo especulativo · sin encargo", metric: "5", metricLabel: "piezas: Reel, carrusel y estático",
    insight: "\"Tengo el talento. Lo que no tengo es historial.\" El banco mide al estudiante por algo que todavía no tuvo oportunidad de construir.",
    brief: [
      ["Público", "Universitarios peruanos sin historial crediticio que creen que el financiamiento no es para ellos."],
      ["Insight", "El banco mide al estudiante por algo que todavía no pudo construir."],
      ["Apuesta", "El único argumento que solo BaldeCash puede usar (sin historial, sin garante) le gana a los anuncios de catálogo con producto y precio."],
      ["Qué medir", "CTR y costo por solicitud frente a los anuncios de catálogo actuales."],
    ],
    body: [
      "Propuesta especulativa para BaldeCash, la fintech peruana que financia laptops a estudiantes sin historial crediticio ni garante. Su pauta habla de producto y precio; la oportunidad era llevar a los anuncios el argumento que solo ellos pueden usar.",
      "El gancho es un texto nativo de meme: \"mi laptop cuando mi único trabajo es pasar las diapositivas:\". En plena exposición, la laptop vieja de Diego se malogra sola: la pantalla tartamudea, la cruza una banda de interferencia y se va a negro, mientras la luz del pasadizo sigue prendida. Sin diálogos, mostrar y no contar: su cara congelada y luego su celular que se ilumina sobre la mesa mientras el grupo lo bombardea.",
      "El cierre vende: \"Jubila a la poderosa\", sin historial crediticio, sin garante, solo con DNI, laptop nueva desde S/49 al mes, solicita en 5 minutos. La firma: \"Tu talento no necesita historial\". El mismo concepto se adapta a un carrusel tipo meme y a un estático partido, listos para una prueba A/B contra los anuncios de catálogo.",
      "Toda la historia es metraje generado con IA: cuadros hechos con Nano Banana Pro a partir de una sola imagen base para mantener a la persona y el cuarto, animados con Kling 3.0 con cuadro inicial y final para que la pantalla muera en cámara. El diseño sonoro, sin voces, se generó con ElevenLabs y la tipografía del cierre se armó a mano con Asap, la fuente de la marca. No es un trabajo encargado ni publicado por BaldeCash.",
    ],
    captions: ["Carrusel 1/3: el meme", "Carrusel 2/3: la frase", "Carrusel 3/3: la oferta", "Estático: desde el cel vs. pantalla completa"],
  },
  "izipay-heladizimo": {
    side: "Trabajo conceptual · VML", metric: "Pitch", metricLabel: "concepto recreado con IA",
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
    insight: "Casi nadie juzga un precio por sí solo. Lo juzga contra lo que ya paga.",
    body: [
      "Liderazgo del programa Creative Excellence de Movistar Perú para internet hogar, planes móviles y equipos, con anuncios que llevaban a comprar en la tienda online de Movistar. Los estáticos y carruseles se comparaban por CTR, clics, tasa de engagement e impresiones.",
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
};

let LANG = "en";
try { LANG = localStorage.getItem("lang") || ((navigator.language || "").toLowerCase().startsWith("es") ? "es" : "en"); } catch (e) { /* storage blocked: keep default */ }
const T = (en, es) => (LANG === "es" ? es : en);

// A case in the active language: Spanish overrides on top of the English base.
function loc(c) {
  const es = LANG === "es" ? ES[c.slug] : null;
  if (!es) return c;
  const images = (c.images || []).map((im, i) => (Array.isArray(im) && es.captions?.[i] ? [im[0], es.captions[i]] : im));
  const mp4s = c.mp4s && c.mp4s.map((m, i) => [m[0], es.mp4Captions?.[i] || m[1]]);
  return { ...c, ...es, images, mp4s, link: c.link ? { ...c.link, label: es.link || c.link.label } : undefined };
}

const app = document.getElementById("app");
const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const thumbSrc = (c) => c.thumbUrl || A(c.thumb);
const cardMedia = (c) => c.tile
  ? `<span class="card-tile"><b>${esc(c.metric)}</b><small>${esc(c.metricLabel)}</small></span>`
  : `<img src="${thumbSrc(c)}" alt="" loading="lazy">`;

// Muted loop of a spec ad; played only while on screen (see the observer below)
const loopVideo = (c, eager) =>
  `<video class="loop" src="assets/${c.loop}.mp4" poster="${A(c.thumb)}" muted loop playsinline preload="${eager ? "auto" : "none"}" aria-hidden="true"></video>`;

function workView() {
  const all = CASES.map(loc);
  const isSpec = (c) => c.slug.startsWith("spec-");
  const real = all.filter((c) => !isSpec(c));
  const spec = all.filter(isSpec);
  const reel = ["spec-farmersdog", "spec-starface", "spec-liquidiv"].map((s) => all.find((c) => c.slug === s));

  const card = (c) => `
    <li class="card">
      <a href="#/work/${c.slug}">
        <div class="card-media">${cardMedia(c)}</div>
        <div class="card-text">
          <p class="card-metric">${esc(c.metric)}<small>${esc(c.metricLabel)}</small></p>
          <h3>${esc(c.title)}</h3>
          <p class="card-meta">${esc(c.client)} · ${esc(c.side)} · ${c.year}</p>
        </div>
      </a>
    </li>`;
  const specCard = (c) => `
    <li class="card card-spec">
      <a href="#/work/${c.slug}">
        <div class="card-media">${loopVideo(c, false)}</div>
        <div class="card-text">
          <h3>${esc(c.title)}</h3>
          <p class="card-meta">${esc(c.client)} · ${esc(c.metric)} ${esc(c.metricLabel)}</p>
        </div>
      </a>
    </li>`;

  return `
    <section class="view">
      <div class="hero hero-split">
        <div class="hero-copy">
          <p class="eyebrow">${T("Performance Creative Strategist · Meta, TikTok &amp; Google", "Performance Creative Strategist · Meta, TikTok y Google")}</p>
          <h1 class="display">${T("Ads that say <em>one thing</em>. And sell it.", "Anuncios que dicen <em>una sola cosa</em>. Y la venden.")}</h1>
          <p class="hero-lead">${T(
            "I make ads clearer: one idea that matters to someone who has never heard of the brand, said plainly, then the results decide the next round. Agency side at VML for Movistar and izipay. Brand side at UCAL, leading the campaigns and the agencies.",
            "Hago anuncios más claros: una idea que le importe a alguien que nunca oyó de la marca, dicha simple, y que los resultados decidan la siguiente ronda. En agencia, en VML, para Movistar e izipay. En marca, en UCAL, a cargo de las campañas y las agencias.")}</p>
          <div class="actions">
            <a class="btn btn-primary" href="#cases" data-scroll="cases">${T("See the work ↓", "Ver el trabajo ↓")}</a>
            <a class="btn btn-ghost" href="assets/cv-sebastian-carrillo-brake.pdf" target="_blank" rel="noopener">${T("Download CV", "Descargar CV")}</a>
            <a class="btn btn-ghost" href="https://www.linkedin.com/in/sebastian-carrillo-brake-a62b37145" target="_blank" rel="noopener">LinkedIn ↗</a>
          </div>
        </div>
        <div class="reel" aria-label="${T("Spec ads", "Anuncios especulativos")}">
          ${reel.map((c) => `<a class="phone" href="#/work/${c.slug}">${loopVideo(c, true)}<span>${esc(c.client)}</span></a>`).join("")}
        </div>
      </div>
      <div class="stats">
        <div class="stat"><b>+45%</b><span>CTR, Movistar</span></div>
        <div class="stat"><b>−40%</b><span>${T("Cost per lead, izipay", "Costo por lead, izipay")}</span></div>
        <div class="stat"><b>−28%</b><span>${T("Cost per lead, UCAL", "Costo por lead, UCAL")}</span></div>
        <div class="stat"><b>${T("Bronze", "Bronce")}</b><span>${T("Cannes Lions, Innovation", "Cannes Lions, Innovación")}</span></div>
      </div>
      <div class="brands"><span>${T("Brands", "Marcas")}</span><ul>${["Movistar", "izipay", "Santander", "AWS &amp; Slalom", "Cementos Pacasmayo", "Cementos Sol", "Viru", "Kulhaus", "Sublime", "UCAL"].map((b) => `<li>${b}</li>`).join("")}</ul></div>
      <div class="brands"><span>${T("Industries", "Industrias")}</span><p class="industries">${T("Telecom · Payments · Banking · Cloud · Construction · Agro-export · Retail · Consumer goods · Education", "Telecomunicaciones · Pagos · Banca · Nube · Construcción · Agroexportación · Retail · Consumo masivo · Educación")}</p></div>

      <div class="section-head" id="cases"><h2>${T("Selected work", "Trabajo seleccionado")}</h2><span>${real.length} ${T("cases with results", "casos con resultados")}</span></div>
      <ul class="cards">${real.map(card).join("")}</ul>

      <div class="section-head"><h2>${T("Spec ads, made with AI", "Anuncios especulativos con IA")}</h2><span>${T("Unsolicited · benchmark, brief and hooks to A/B test", "Sin encargo · benchmark, brief y ganchos para prueba A/B")}</span></div>
      <ul class="cards cards-spec">${spec.map(specCard).join("")}</ul>

      <section class="process" aria-label="${T("How the work gets done", "Cómo se hace el trabajo")}">
        <div class="section-head"><h2>${T("How I work", "Cómo trabajo")}</h2><span>${T("The loop behind every case", "El ciclo detrás de cada caso")}</span></div>
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
            "Keep the winners, change one variable at a time (hook, copy, type, layout) and start the next round.",
            "Se quedan los ganadores, se cambia una variable a la vez (gancho, copy, tipografía, layout) y empieza la siguiente ronda.")}</p></li>
        </ol>
      </section>
    </section>`;
}

function caseView(slug) {
  const i = CASES.findIndex((c) => c.slug === slug);
  if (i < 0) return workView();
  const c = loc(CASES[i]);
  const next = loc(CASES[(i + 1) % CASES.length]);
  const spec = c.slug.startsWith("spec-");
  const imgs = [
    ...(c.images || []).map((im) => (Array.isArray(im) ? { src: A(im[0]), caption: im[1] } : { src: A(im) })),
    ...(c.imageUrls || []).map((src) => ({ src })),
  ];
  const figure = ({ src, caption }) => `<figure><img src="${src}" alt="${esc(caption || c.title)}" loading="lazy">${caption ? `<figcaption>${esc(caption)}</figcaption>` : ""}</figure>`;
  const ordered = imgs.some((im) => im.caption);
  const gallery = imgs.length ? `<div class="gallery${ordered ? " gallery-grid" : ""}${c.portrait ? " gallery-portrait" : ""}${c.wide ? " gallery-wide" : ""}">${imgs.map(figure).join("")}</div>` : "";
  const video = c.video ? `<div class="embed"><iframe src="${c.video}" title="${esc(c.title)}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen loading="lazy"></iframe></div>`
    : c.mp4s ? `<div class="video-row">${c.mp4s.map(([n, cap]) => `<figure><div class="embed-vertical"><video src="assets/${n}.mp4" poster="${A(n)}" controls playsinline preload="none"></video></div><figcaption>${esc(cap)}</figcaption></figure>`).join("")}</div>`
    : c.mp4 ? `<div class="embed-vertical"><video src="assets/${c.mp4}.mp4" poster="${A(c.mp4)}" controls playsinline preload="none"></video></div>` : "";
  const link = c.link ? `<a class="cta" href="${c.link.href}" target="_blank" rel="noopener">${esc(c.link.label)}</a>` : "";
  const brief = c.brief ? `
      <section class="brief" aria-label="${T("The brief", "El brief")}">
        <h3>${T("The brief", "El brief")}</h3>
        <dl>${c.brief.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>
      </section>` : "";
  // Spec cases keep their production notes apart from the strategy
  const body = spec ? c.body.slice(0, -1) : c.body;
  const made = spec ? `<p class="made"><b>${T("How it was made", "Cómo se hizo")}</b>${esc(c.body[c.body.length - 1])}</p>` : "";

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
      ${video}${brief}
      <div class="case-body${spec ? " is-spec" : ""}">
        <div class="insight-card"><h3>${T("The idea", "La idea")}</h3><p class="insight">${esc(c.insight)}</p></div>
        <div><h3>${T("What was done", "Qué se hizo")}</h3>${body.map((p) => `<p>${esc(p)}</p>`).join("")}${made}</div>
      </div>
      ${link}${gallery}
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
            "Every piece I brief has one objective, which keeps feedback honest and fast. When something is not working, I explain the objective and the reason, not just the fix. That is why I am usually the one asked to lead big campaigns, crisis messages and the work with agencies. Along the way I automate whatever slows the team down, so the next round starts sooner.",
            "Cada pieza que briefeo tiene un solo objetivo, y eso mantiene el feedback honesto y rápido. Cuando algo no funciona, explico el objetivo y la razón, no solo el arreglo. Por eso suelo ser a quien le piden liderar las campañas grandes, los mensajes de crisis y el trabajo con agencias. En el camino automatizo lo que frena al equipo, para que la siguiente ronda empiece antes.")}</p>
        </div>
      </div>
      <div class="about-grid">
        <h2>${T("Experience", "Experiencia")}</h2>
        <ul class="timeline">
          ${job("UCAL · Communications Coordinator, Marketing", T("2026 – Present", "2026 – Actualidad"), T(
            "In charge of all external communications: paid digital ads, organic content, OOH and press. AI production, UGC creators and results presented to the CEO and board.",
            "A cargo de toda la comunicación externa: pauta digital, contenido orgánico, OOH y prensa. Producción con IA, creadores UGC y resultados presentados al CEO y al directorio."))}
          ${job("VML · Senior Data Strategist", "2025 – 2026", T(
            "Brand and communication strategy for Santander Consumer Peru, Cementos Sol and izipay, with data-driven insights so creative teams worked toward each client's business objective. Trained 100+ people in applied AI.",
            "Estrategia de marca y de comunicación para Santander Consumer Perú, Cementos Sol e izipay, con insights basados en datos para que los equipos creativos trabajaran hacia el objetivo de negocio de cada cliente. Capacitación en IA aplicada a más de 100 personas."))}
          ${job("VML · Performance Lead", "2024 – 2025", T(
            "Movistar Peru's Creative Excellence program: CTR +45%, CPC −30%.",
            "Programa Creative Excellence de Movistar Perú: CTR +45%, CPC −30%."))}
          ${job("VML · Senior Copywriter", "2023 – 2024", T(
            "izipay lead generation: cost per lead −40%, leads +17%. Effie Gold, Silver and Bronze. Cannes Lions Bronze for AWS &amp; Slalom.",
            "Generación de leads para izipay: costo por lead −40%, leads +17%. Effie Oro, Plata y Bronce. Cannes Lions Bronce para AWS &amp; Slalom."))}
          ${job("VML · Senior Content Manager", "2022 – 2023", T(
            "Cementos Pacasmayo, Viru and Kulhaus, plus consumer electronics: construction, agro-export, retail and consumer tech.",
            "Cementos Pacasmayo, Viru y Kulhaus, además de tecnología de consumo: construcción, agroexportación, retail y tecnología."))}
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
        <h2>${T("Also", "Además")}</h2>
        <ul class="timeline">
          ${job(T("Effie Awards case writer", "Redacción de casos Effie"), "VML", T(
            "Entries for Nestlé, izipay and UTP: each campaign distilled into its strongest results, and why it worked.",
            "Casos para Nestlé, izipay y UTP: cada campaña reducida a sus resultados más fuertes y a por qué funcionó."))}
          ${job("The Future 100", "VML", T(
            "Research and writing for The Future 100, VML's annual trends report.",
            "Investigación y redacción para The Future 100, el reporte anual de tendencias de VML."))}
          ${job(T("AI workshops", "Talleres de IA"), T("2024 – Present", "2024 – Actualidad"), T(
            "Practical generative AI workshops for teams at Nestlé, Interbank, Intercorp, La Rambla, La Tinka, PUCP and WPP.",
            "Talleres prácticos de IA generativa para equipos de Nestlé, Interbank, Intercorp, La Rambla, La Tinka, PUCP y WPP."))}
        </ul>
      </div>
      <div class="about-grid">
        <h2>${T("Toolkit", "Herramientas")}</h2>
        <div>
          <p class="skill-label">${T("Strategy &amp; performance", "Estrategia y performance")}</p>
          <ul class="chips"><li>${T("Creative briefs", "Briefs creativos")}</li><li>${T("Angle &amp; hook research", "Investigación de ángulos y ganchos")}</li><li>Meta Ad Library</li><li>${T("A/B testing", "Pruebas A/B")}</li><li>Meta Ads Manager</li><li>TikTok Ads Manager</li><li>Google Ads</li><li>Social listening</li></ul>
          <p class="skill-label">${T("AI &amp; production", "IA y producción")}</p>
          <ul class="chips"><li>ChatGPT</li><li>Claude</li><li>Gemini</li><li>Perplexity</li><li>Midjourney</li><li>Nano Banana</li><li>Higgsfield</li><li>Google Flow</li><li>Veo 3</li><li>Kling</li><li>ElevenLabs</li><li>Canva</li><li>CapCut</li><li>Premiere Pro</li><li>Remotion</li><li>Lovable</li><li>Apps Script</li></ul>
          <p class="skill-label">${T("Languages", "Idiomas")}</p>
          <ul class="chips"><li>${T("English (C1, Cambridge CAE)", "Inglés (C1, Cambridge CAE)")}</li><li>${T("Spanish (native)", "Español (nativo)")}</li></ul>
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
        <a href="https://www.linkedin.com/in/sebastian-carrillo-brake-a62b37145" target="_blank" rel="noopener">LinkedIn<span>${T("Profile ↗", "Perfil ↗")}</span></a>
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

// Spec loops play only while on screen, and never for people who prefer reduced motion
const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const io = "IntersectionObserver" in window
  ? new IntersectionObserver((entries) => entries.forEach((e) => (e.isIntersecting ? e.target.play().catch(() => {}) : e.target.pause())), { threshold: 0.35 })
  : null;
function watchLoops() {
  if (calm || !io) return;
  io.disconnect();
  document.querySelectorAll("video.loop").forEach((v) => io.observe(v));
}

function render(keepScroll) {
  const [, tab = "work", slug] = (location.hash || "#/work").split("/");
  chrome();
  app.innerHTML = tab === "about" ? aboutView() : tab === "contact" ? contactView() : slug ? caseView(slug) : workView();
  document.querySelectorAll(".tabs a").forEach((a) => a.classList.toggle("active", a.dataset.tab === (["about", "contact"].includes(tab) ? tab : "work")));
  if (keepScroll !== true) window.scrollTo(0, 0);
  watchLoops();
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
