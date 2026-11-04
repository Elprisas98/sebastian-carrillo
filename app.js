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
    slug: "movistar-creative-excellence",
    title: "Price as a creative variable",
    client: "Movistar Peru", side: "Agency · VML", year: "2024–2025",
    metric: "+45%", metricLabel: "CTR · CPC −30%",
    thumb: "movistar-chip-plan",
    insight: "Price is not a yes or no. It is a variable with many forms.",
    body: [
      "Led Movistar Peru's Creative Excellence program across home internet, mobile plans and devices, comparing static and carousel ads by CTR, clicks, engagement rate and impressions.",
      "Price-led ads only worked for mobile plans, so price became a creative variable: final price, percentage or fixed-amount discount, installments, savings versus the current bill, or no price at all. Hypotheses were built per product and tested by audience.",
      "Testing confirmed that percentage discounts performed better on lower-priced plans and fixed-amount discounts on higher-priced devices, measured on both ad and sales metrics. The design team was briefed with insights rather than raw figures, each piece with one clear objective.",
      "Paid social CTR rose by 45% and CPC fell by 30%.",
    ],
    images: ["movistar-chip-plan", "movistar-total-149", "movistar-fiber-plus-mobile", "movistar-duo-plus-20", "movistar-total-benefits"],
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
    title: "Scripts for influencers",
    client: "Samsung Peru", side: "Agency · VML", year: "2022–2023",
    metric: "Galaxy", metricLabel: "S23, Buds2 Pro, Trade-In",
    thumbUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/7d3ece185153969.655ebeda78f67.png",
    insight: "Write for the creator's voice, not the brand's.",
    body: [
      "Storytelling and scripts for Samsung campaigns with leading Peruvian influencers, covering the Galaxy S23 launch teasers, Galaxy Buds2 Pro and the Galaxy Trade-In promotion.",
    ],
    link: { href: BEHANCE, label: "Watch the four influencer videos on Behance ↗" },
  },
];

const app = document.getElementById("app");
const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const thumbSrc = (c) => c.thumbUrl || A(c.thumb);

function workView() {
  const rows = CASES.map((c, i) => `
    <li class="case-row">
      <a href="#/work/${c.slug}">
        <span class="num">${String(i + 1).padStart(2, "0")}</span>
        <span class="title">${esc(c.title)}</span>
        <span class="meta">${esc(c.client)} · ${esc(c.side)} · ${c.year}</span>
        <span class="metric">${esc(c.metric)}<small>${esc(c.metricLabel)}</small></span>
        <img class="thumb" src="${thumbSrc(c)}" alt="" loading="lazy">
      </a>
    </li>`).join("");

  return `
    <section class="view">
      <div class="hero">
        <p class="eyebrow">Creative Strategist · Performance creative, copy &amp; AI production</p>
        <h1>Ideas that are measured, <em>then</em> made better.</h1>
        <div class="hero-grid">
          <p>Experience on both sides of advertising. At VML, the full creative process for Movistar, izipay and Samsung. At UCAL, the brand side: optimizing creative against business objectives and presenting results to the CEO and board.</p>
          <div class="stats">
            <div class="stat"><b>+45%</b><span>CTR, Movistar</span></div>
            <div class="stat"><b>−40%</b><span>Cost per lead, izipay</span></div>
            <div class="stat"><b>−28%</b><span>Cost per lead, UCAL</span></div>
          </div>
        </div>
      </div>
      <div class="section-head"><h2>Selected work</h2><span>${CASES.length} cases</span></div>
      <ul class="case-list">${rows}</ul>
    </section>`;
}

function caseView(slug) {
  const i = CASES.findIndex((c) => c.slug === slug);
  if (i < 0) return workView();
  const c = CASES[i];
  const next = CASES[(i + 1) % CASES.length];
  const imgs = [...(c.images || []).map(A), ...(c.imageUrls || [])];
  const gallery = imgs.length ? `<div class="gallery">${imgs.map((src) => `<figure><img src="${src}" alt="${esc(c.title)}" loading="lazy"></figure>`).join("")}</div>` : "";
  const video = c.video ? `<div class="embed"><iframe src="${c.video}" title="${esc(c.title)}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen loading="lazy"></iframe></div>` : "";
  const link = c.link ? `<a class="cta" href="${c.link.href}" target="_blank" rel="noopener">${esc(c.link.label)}</a>` : "";

  return `
    <article class="view">
      <a class="back" href="#/work">← All work</a>
      <header class="case-hero">
        <h1>${esc(c.title)}</h1>
        <dl class="case-facts">
          <div><dt>Client</dt><dd>${esc(c.client)}</dd></div>
          <div><dt>Side</dt><dd>${esc(c.side)}</dd></div>
          <div><dt>Year</dt><dd>${c.year}</dd></div>
          <div class="big"><dt>${esc(c.metricLabel)}</dt><dd>${esc(c.metric)}</dd></div>
        </dl>
      </header>
      <div class="case-body">
        <div><h3>The idea</h3><p class="insight">${esc(c.insight)}</p></div>
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
        <h1>Agency craft. <em>Client</em> accountability.</h1>
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
          <li><b>VML · Senior Data Strategist</b><span>2025 – 2026</span><p>Brand, product and market strategy from research and performance data. Trained 100+ people in applied AI.</p></li>
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
    <section class="view contact">
      <p class="eyebrow">Contact</p>
      <h1>Let's make ads that <em>earn</em> their budget.</h1>
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
