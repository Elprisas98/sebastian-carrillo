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

const app = document.getElementById("app");
const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const thumbSrc = (c) => c.thumbUrl || A(c.thumb);
const thumbHtml = (c) => c.tile ? `<span class="thumb tile">${esc(c.tile)}</span>` : `<img class="thumb" src="${thumbSrc(c)}" alt="" loading="lazy">`;

function workView() {
  const rows = CASES.map((c, i) => `
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
        <p class="eyebrow">AI-native Creative Strategist · Meta, TikTok &amp; Google</p>
        <h1 class="display">Performance data in. <em>Winning ads</em> out.</h1>
        <div class="hero-grid">
          <p>A decade of copywriting and three years running the creative-to-performance loop on both sides of advertising: at VML for Movistar, izipay and Samsung, and in-house at UCAL, accountable to the CEO and board for every result.</p>
          <div class="stats">
            <div class="stat"><b>+45%</b><span>CTR, Movistar</span></div>
            <div class="stat"><b>−40%</b><span>Cost per lead, izipay</span></div>
            <div class="stat"><b>−28%</b><span>Cost per lead, UCAL</span></div>
          </div>
        </div>
        <div class="actions">
          <a class="btn btn-primary" href="#cases" data-scroll="cases">See the work ↓</a>
          <a class="btn btn-ghost" href="#/contact">Get in touch</a>
        </div>
      </div>
      <section class="process" aria-label="How the work gets done">
        <div class="section-head"><h2>The loop</h2><span>How every case below was built</span></div>
        <ol class="steps">
          <li><b>Read the data</b><p>CTR, CPC, cost per lead and sales across Meta, TikTok and Google. KPI reporting automated with Claude, so decisions never wait for a monthly report.</p></li>
          <li><b>Find the angle</b><p>Competitor ads pulled at scale from the Meta Ad Library, social listening and one hypothesis per product and audience.</p></li>
          <li><b>Brief and produce</b><p>Briefs built on insights designers can act on, and prompt templates by product that ship up to 10 variations a day.</p></li>
          <li><b>Test and iterate</b><p>Keep the winners, change one variable at a time (copy, type, color, layout) and start the next round.</p></li>
        </ol>
      </section>
      <div class="section-head" id="cases"><h2 class="display">Selected work</h2><span>${CASES.length} cases</span></div>
      <ul class="case-list">${rows}</ul>
    </section>`;
}

function caseView(slug) {
  const i = CASES.findIndex((c) => c.slug === slug);
  if (i < 0) return workView();
  const c = CASES[i];
  const next = CASES[(i + 1) % CASES.length];
  const imgs = [
    ...(c.images || []).map((im) => (Array.isArray(im) ? { src: A(im[0]), caption: im[1] } : { src: A(im) })),
    ...(c.imageUrls || []).map((src) => ({ src })),
  ];
  const figure = ({ src, caption }) => `<figure><img src="${src}" alt="${esc(caption || c.title)}" loading="lazy">${caption ? `<figcaption>${esc(caption)}</figcaption>` : ""}</figure>`;
  const ordered = imgs.some((im) => im.caption);
  const gallery = imgs.length ? `<div class="gallery${ordered ? " gallery-grid" : ""}">${imgs.map(figure).join("")}</div>` : "";
  const video = c.video ? `<div class="embed"><iframe src="${c.video}" title="${esc(c.title)}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen loading="lazy"></iframe></div>` : "";
  const link = c.link ? `<a class="cta" href="${c.link.href}" target="_blank" rel="noopener">${esc(c.link.label)}</a>` : "";

  return `
    <article class="view">
      <a class="back" href="#/work">← All work</a>
      <header class="case-hero">
        <h1 class="display">${esc(c.title)}</h1>
        <dl class="case-facts">
          <div><dt>Client</dt><dd>${esc(c.client)}</dd></div>
          <div><dt>Side</dt><dd>${esc(c.side)}</dd></div>
          <div><dt>Year</dt><dd>${c.year}</dd></div>
          <div class="big"><dt>${esc(c.metricLabel)}</dt><dd>${esc(c.metric)}</dd></div>
        </dl>
      </header>
      <div class="case-body">
        <div class="insight-card"><h3>The idea</h3><p class="insight">${esc(c.insight)}</p></div>
        <div><h3>What was done</h3>${c.body.map((p) => `<p>${esc(p)}</p>`).join("")}</div>
      </div>
      ${video}${link}${gallery}
      <a class="next-case" href="#/work/${next.slug}"><span>Next case</span><b>${esc(next.title)} →</b></a>
    </article>`;
}

function aboutView() {
  return `
    <section class="view">
      <div class="hero">
        <p class="eyebrow">About</p>
        <h1 class="display"><span class="line">Agency craft.</span><span class="line"><em>Client</em> accountability.</span></h1>
      </div>
      <div class="about-grid">
        <h2>Profile</h2>
        <div>
          <p class="lead">Creative strategist who has produced, evaluated and iterated thousands of ads, and keeps training in AI image and video generation to improve results with each round.</p>
        </div>
      </div>
      <div class="about-grid">
        <h2>Experience</h2>
        <ul class="timeline">
          <li><b>UCAL · Communications Coordinator, Marketing</b><span>2026 – Present</span><p>Paid digital creative, AI production, UGC creators and results presented to the CEO and board.</p></li>
          <li><b>VML · Senior Data Strategist</b><span>2025 – 2026</span><p>Brand and product strategy for most of the agency's brands, giving creative teams data-driven insights tied to business objectives. Trained 100+ people in applied AI.</p></li>
          <li><b>VML · Performance Lead</b><span>2024 – 2025</span><p>Movistar Peru's Creative Excellence program: CTR +45%, CPC −30%.</p></li>
          <li><b>VML · Senior Copywriter</b><span>2023 – 2024</span><p>izipay lead generation: cost per lead −40%, leads +17%. Effie Gold, Silver and Bronze. Cannes Lions Bronze for AWS & Slalom.</p></li>
          <li><b>VML · Senior Content Manager</b><span>2022 – 2023</span><p>Samsung, Cementos Pacasmayo, Viru and Kulhaus: consumer electronics, construction, agro-export and retail.</p></li>
          <li><b>Fiverr · Creative Copywriter</b><span>2016 – 2022</span><p>English-language copy for international clients.</p></li>
        </ul>
      </div>
      <div class="about-grid">
        <h2>Recognition</h2>
        <ul class="timeline">
          <li><b>Cannes Lions · Bronze, Innovation</b><span>2024</span><p>AWS & Slalom, "Vanishing Emails".</p></li>
          <li><b>Effie Awards · Gold, Silver and Bronze</b><span>2024</span><p>izipay, "Con izipay recibes el dinero de tus ventas En One".</p></li>
        </ul>
      </div>
      <div class="about-grid">
        <h2>Toolkit</h2>
        <div>
          <p class="skill-label">Strategy &amp; performance</p>
          <ul class="chips"><li>Creative briefs</li><li>Angle &amp; hook research</li><li>Meta Ad Library</li><li>A/B testing</li><li>Meta Ads Manager</li><li>TikTok Ads Manager</li><li>Google Ads</li><li>Social listening</li></ul>
          <p class="skill-label">AI &amp; production</p>
          <ul class="chips"><li>ChatGPT</li><li>Claude</li><li>Gemini</li><li>Perplexity</li><li>Midjourney</li><li>Veo 3</li><li>Canva</li><li>CapCut</li><li>Premiere Pro</li><li>Lovable</li><li>Apps Script</li></ul>
          <p class="skill-label">Languages</p>
          <ul class="chips"><li>English (advanced)</li><li>Spanish (native)</li></ul>
        </div>
      </div>
      <div class="about-grid">
        <h2>Education</h2>
        <ul class="timeline"><li><b>Bachelor's Degree in Communication Sciences</b><span>2021</span><p>Universidad de Lima</p></li></ul>
      </div>
    </section>`;
}

function contactView() {
  return `
    <section class="view contact band">
      <p class="eyebrow">Contact</p>
      <h1 class="display">Let's make ads that <em>earn</em> their budget.</h1>
      <div class="contact-links">
        <a href="mailto:scbrake98@gmail.com">scbrake98@gmail.com<span>Email</span></a>
        <a href="https://www.linkedin.com/in/sebastiancarrillo-brake-a62b37145" target="_blank" rel="noopener">LinkedIn<span>Profile ↗</span></a>
        <a href="${BEHANCE}" target="_blank" rel="noopener">Behance<span>Earlier work ↗</span></a>
      </div>
    </section>`;
}

function render() {
  const [, tab = "work", slug] = (location.hash || "#/work").split("/");
  app.innerHTML = tab === "about" ? aboutView() : tab === "contact" ? contactView() : slug ? caseView(slug) : workView();
  document.querySelectorAll(".tabs a").forEach((a) => a.classList.toggle("active", a.dataset.tab === (["about", "contact"].includes(tab) ? tab : "work")));
  window.scrollTo(0, 0);
}

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

window.addEventListener("hashchange", render);
render();
