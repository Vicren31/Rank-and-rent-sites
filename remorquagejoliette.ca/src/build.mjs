// Générateur statique : assemble les pages, le schema JSON-LD, le sitemap et les fichiers Cloudflare.
// Utilisation : npm run build  (sortie dans ./public)
import fs from "node:fs";
import path from "node:path";
import { SITE, SERVICES, ZONES, ROUTES } from "./data.mjs";
import { ICONS, esc, serviceUrl, leadForm, checks, faqBlock, ctaBand } from "./components.mjs";
import home from "./content/home.mjs";
import services from "./content/services.mjs";
import zones from "./content/zones.mjs";
import routes from "./content/routes.mjs";
import guides from "./content/guides.mjs";
import pages from "./content/pages.mjs";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const OUT = path.join(ROOT, "public");
const STATIC = path.join(ROOT, "static");
const BUILD_DATE = process.env.BUILD_DATE || new Date().toISOString().slice(0, 10);
const OG_IMG = `${SITE.url}/assets/img/og-remorquage-joliette.jpg`;

const ALL = [home, ...services, ...zones, ...routes, ...guides, ...pages];

// ---------- Schema ----------
const BUSINESS_ID = `${SITE.url}/#entreprise`;
function businessNode() {
  return {
    "@type": "AutomotiveBusiness",
    "@id": BUSINESS_ID,
    name: SITE.name,
    description: "Service de remorquage 24 h sur 24 à Joliette et dans Lanaudière : remorquage automobile et sur plateau, remorquage après accident, survoltage, déverrouillage, livraison d'essence, sortie de fossé et remorquage lourd.",
    url: `${SITE.url}/`,
    telephone: SITE.phoneE164,
    email: SITE.email,
    logo: `${SITE.url}/assets/img/logo-remorquage-joliette-512.png`,
    image: OG_IMG,
    priceRange: "$$",
    currenciesAccepted: "CAD",
    address: { "@type": "PostalAddress", addressLocality: "Joliette", addressRegion: "QC", addressCountry: "CA" },
    geo: { "@type": "GeoCoordinates", latitude: SITE.geo.lat, longitude: SITE.geo.lng },
    areaServed: [
      { "@type": "City", name: "Joliette", sameAs: "https://fr.wikipedia.org/wiki/Joliette" },
      ...ZONES.map((z) => ({ "@type": "City", name: `${z.name}, QC` })),
    ],
    openingHoursSpecification: SITE.hours.filter((h) => h.spec).map((h) => ({ "@type": "OpeningHoursSpecification", ...h.spec })),
    knowsLanguage: "fr-CA",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services de remorquage à Joliette",
      itemListElement: SERVICES.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.name, url: `${SITE.url}${serviceUrl(s.slug)}` } })),
    },
  };
}
const strip = (html) => html.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();

function schema(p) {
  const url = `${SITE.url}${p.path}`;
  const graph = [businessNode()];
  if (p.kind === "home") {
    graph.push({ "@type": "WebSite", "@id": `${SITE.url}/#site`, url: `${SITE.url}/`, name: SITE.name, inLanguage: "fr-CA", publisher: { "@id": BUSINESS_ID } });
  }
  const page = { "@type": p.kind === "contact" ? "ContactPage" : p.kind === "about" ? "AboutPage" : p.kind === "faqpage" ? "FAQPage" : "WebPage", "@id": `${url}#page`, url, name: p.title, description: p.description, inLanguage: "fr-CA", isPartOf: { "@id": `${SITE.url}/#site` }, about: { "@id": BUSINESS_ID } };
  if (p.breadcrumbs) {
    const crumbs = [{ name: "Accueil", path: "/" }, ...p.breadcrumbs];
    graph.push({
      "@type": "BreadcrumbList", "@id": `${url}#fil`,
      itemListElement: crumbs.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, ...(i < crumbs.length - 1 ? { item: `${SITE.url}${c.path}` } : {}) })),
    });
    page.breadcrumb = { "@id": `${url}#fil` };
  }
  if (p.kind !== "faqpage") graph.push(page);
  if (p.service) {
    graph.push({
      "@type": "Service", "@id": `${url}#service`, name: p.service.name, serviceType: p.service.serviceType,
      description: p.service.description || p.description, url, provider: { "@id": BUSINESS_ID },
      areaServed: (p.service.areaServed || ["Joliette"]).map((n) => ({ "@type": "Place", name: `${n}, QC` })),
      hoursAvailable: { "@type": "OpeningHoursSpecification", dayOfWeek: SITE.hours[0].spec.dayOfWeek, opens: "00:00", closes: "23:59" },
      offers: { "@type": "Offer", priceCurrency: "CAD", url, availability: "https://schema.org/InStock", description: "Soumission gratuite et sans obligation" },
    });
  }
  if (p.kind === "guide") {
    graph.push({ "@type": "Article", "@id": `${url}#article`, headline: p.h1, description: p.description, inLanguage: "fr-CA", datePublished: p.date || BUILD_DATE, dateModified: BUILD_DATE, author: { "@id": BUSINESS_ID }, publisher: { "@id": BUSINESS_ID }, image: OG_IMG, mainEntityOfPage: { "@id": `${url}#page` } });
  }
  if (p.faq && p.faq.length) {
    const faqNode = { "@type": "FAQPage", "@id": p.kind === "faqpage" ? `${url}#page` : `${url}#faq`, mainEntity: p.faq.map((f) => ({ "@type": "Question", name: strip(f.q), acceptedAnswer: { "@type": "Answer", text: strip(f.a) } })) };
    if (p.kind === "faqpage") Object.assign(faqNode, { url, name: p.title, inLanguage: "fr-CA", breadcrumb: page.breadcrumb });
    graph.push(faqNode);
  }
  return JSON.stringify({ "@context": "https://schema.org", "@graph": graph });
}

// ---------- Gabarit ----------
function head(p) {
  const url = `${SITE.url}${p.path}`;
  return `<!DOCTYPE html>
<html lang="fr-CA">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(p.title)}</title>
<meta name="description" content="${esc(p.description)}">
<link rel="canonical" href="${url}">
<meta name="robots" content="${p.noindex ? "noindex, follow" : "index, follow, max-image-preview:large"}">
<meta name="geo.region" content="CA-QC">
<meta name="geo.placename" content="${p.geoPlace || "Joliette"}">
<meta name="geo.position" content="${SITE.geo.lat};${SITE.geo.lng}">
<meta name="ICBM" content="${SITE.geo.lat}, ${SITE.geo.lng}">
<meta name="theme-color" content="#121417">
<meta property="og:locale" content="fr_CA">
<meta property="og:type" content="${p.kind === "guide" ? "article" : "website"}">
<meta property="og:site_name" content="${SITE.name}">
<meta property="og:title" content="${esc(p.title)}">
<meta property="og:description" content="${esc(p.description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${OG_IMG}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Remorquage Joliette : remorquage 24 h sur 24 à Joliette">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(p.title)}">
<meta name="twitter:description" content="${esc(p.description)}">
<meta name="twitter:image" content="${OG_IMG}">
<link rel="icon" href="/assets/img/favicon.svg" type="image/svg+xml">
<link rel="icon" href="/favicon.png" type="image/png" sizes="48x48">
<link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.png">
<link rel="preload" href="/assets/fonts/barlow-condensed-latin-800-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/assets/fonts/inter-latin-400-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/assets/css/styles.css?v=${BUILD_DATE}">
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=${SITE.ga4}"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${SITE.ga4}');
</script>
<script type="application/ld+json">${schema(p)}</script>
</head>`;
}

const NAV = [
  ["/services/", "Services"],
  ["/zones-desservies/", "Zones desservies"],
  ["/prix-remorquage-joliette/", "Prix"],
  ["/conseils/", "Conseils"],
  ["/a-propos/", "À propos"],
  ["/contact/", "Contact"],
];

function header(p) {
  const cur = (href) => (p.path === href || (href !== "/" && p.path.startsWith(href)) ? ' aria-current="page"' : "");
  return `<body>
<a class="skip-link" href="#contenu">Aller au contenu</a>
<div class="announce"><span class="dot" aria-hidden="true"></span>Remorquage 24 h sur 24<span class="hide-sm">, 7 jours sur 7 · Joliette et Lanaudière</span> · <a href="tel:${SITE.phoneE164}" data-loc="announce">${SITE.phone}</a></div>
<header class="site-header">
  <div class="container">
    <a href="/" class="logo" aria-label="${SITE.name}, accueil"><img src="/assets/img/logo.svg" alt="${SITE.name}" width="240" height="56"></a>
    <nav class="main-nav" aria-label="Navigation principale"><ul>${NAV.map(([h, t]) => `<li><a href="${h}"${cur(h)}>${t}</a></li>`).join("")}</ul></nav>
    <div class="header-actions">
      <a href="tel:${SITE.phoneE164}" class="header-call" data-loc="header" aria-label="Appelez-nous au ${SITE.phone}, 24 h sur 24">${ICONS.phone}<span><small>24/7</small>${SITE.phone}</span></a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav" aria-label="Ouvrir le menu">${ICONS.menu}</button>
    </div>
  </div>
</header>
<nav id="mobile-nav" class="mobile-nav" aria-label="Menu mobile">
  <ul>
    <li><a href="/">Accueil</a></li>
    <li><a href="/services/">Services</a></li>
    ${SERVICES.map((s) => `<li class="sub"><a href="${serviceUrl(s.slug)}">${s.nav}</a></li>`).join("")}
    <li><a href="/zones-desservies/">Zones desservies</a></li>
    <li><a href="/prix-remorquage-joliette/">Prix</a></li>
    <li><a href="/conseils/">Conseils</a></li>
    <li><a href="/faq/">FAQ</a></li>
    <li><a href="/a-propos/">À propos</a></li>
    <li><a href="/contact/">Contact</a></li>
  </ul>
  <p style="margin-top:1.5rem"><a href="tel:${SITE.phoneE164}" data-loc="mobile-menu" class="btn btn-primary" style="width:100%">${ICONS.phone}Appelez le ${SITE.phone}</a></p>
</nav>`;
}

function footer() {
  return `<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        <img src="/assets/img/logo-light.svg" alt="${SITE.name}" width="220" height="51" loading="lazy">
        <p style="margin-top:1rem;max-width:38ch">Remorquage, dépannage et assistance routière à Joliette et dans Lanaudière, 24 heures sur 24. Soumission gratuite et sans obligation.</p>
        <a class="footer-phone" href="tel:${SITE.phoneE164}" data-loc="footer">${SITE.phone}</a>
        <p style="margin-top:.5rem"><a href="mailto:${SITE.email}">${SITE.email}</a></p>
        <p style="margin-top:.5rem">Zone de service : Joliette, MRC de Joliette, Matawinie, D'Autray, Montcalm et L'Assomption (QC)</p>
        <dl class="hours" style="margin-top:1rem">${SITE.hours.map((h) => `<dt>${h.days}</dt><dd>${h.label}</dd>`).join("")}</dl>
      </div>
      <div>
        <h2>Services</h2>
        <ul>${SERVICES.map((s) => `<li><a href="${serviceUrl(s.slug)}">${s.nav}</a></li>`).join("")}</ul>
      </div>
      <div>
        <h2>Zones desservies</h2>
        <ul>${ZONES.map((z) => `<li><a href="${z.path}">Remorquage ${z.name}</a></li>`).join("")}${ROUTES.map((r) => `<li><a href="${r.path}">Remorquage ${r.name}</a></li>`).join("")}</ul>
      </div>
      <div>
        <h2>Entreprise</h2>
        <ul>
          <li><a href="/a-propos/">À propos</a></li>
          <li><a href="/prix-remorquage-joliette/">Prix d'un remorquage</a></li>
          <li><a href="/faq/">Questions fréquentes</a></li>
          <li><a href="/conseils/">Conseils et guides</a></li>
          <li><a href="/contact/">Soumission gratuite</a></li>
          <li><a href="/plan-du-site/">Plan du site</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div>© <span id="year">${new Date().getFullYear()}</span> ${SITE.name}. Tous droits réservés.</div>
      <div><a href="/politique-de-confidentialite/">Politique de confidentialité</a> · <a href="/conditions-utilisation/">Conditions d'utilisation</a></div>
    </div>
  </div>
</footer>
<div class="mobile-cta" id="mobile-cta" aria-hidden="true">
  <a href="tel:${SITE.phoneE164}" class="call" data-loc="mobile-bar">${ICONS.phone}Appeler 24/7</a>
  <a href="/contact/" class="quote">Soumission</a>
</div>
<script src="/assets/js/main.js?v=${BUILD_DATE}" defer></script>
</body>
</html>
`;
}

function breadcrumbsHtml(p) {
  const crumbs = [{ name: "Accueil", path: "/" }, ...p.breadcrumbs];
  return `<nav class="breadcrumbs" aria-label="Fil d'Ariane"><ol>${crumbs.map((c, i) => i < crumbs.length - 1 ? `<li><a href="${c.path}">${c.name}</a></li>` : `<li><span aria-current="page">${c.name}</span></li>`).join("")}</ol></nav>`;
}

function innerHero(p) {
  const withForm = p.heroForm !== false;
  const copy = `<div>
      ${breadcrumbsHtml(p)}
      <h1>${p.h1Html || p.h1}</h1>
      ${p.lead ? `<p class="lead">${p.lead}</p>` : ""}
      ${p.checks ? checks(p.checks) : ""}
      ${withForm ? `<div class="btn-row"><a href="tel:${SITE.phoneE164}" data-loc="hero" class="btn btn-primary">${ICONS.phone}Appelez le ${SITE.phone}</a></div><p class="hero-phone">Ligne ouverte 24 h sur 24, 7 jours sur 7</p>` : ""}
    </div>`;
  return `<section class="hero hero-sm">
  <div class="container">
    <div class="hero-grid"${withForm ? "" : ' style="grid-template-columns:1fr"'}>
    ${copy}
    ${withForm ? leadForm({ id: "soumission", ville: p.formVille || "", type: p.formType || "", headingTag: "p" }) : ""}
    </div>
  </div>
  <div class="hero-road" aria-hidden="true"></div>
</section>`;
}

function render(p) {
  let main;
  if (p.kind === "home") main = p.body;
  else main = innerHero(p) + p.body + faqBlock(p.faq, p.faqTitle, p.faqIntro) + (p.noCta ? "" : ctaBand(p.ctaTitle, p.ctaText));
  return `${head(p)}\n${header(p)}\n<main id="contenu">\n${main}\n</main>\n${footer()}`;
}

// ---------- Sortie ----------
function write(rel, content) {
  const f = path.join(OUT, rel);
  fs.mkdirSync(path.dirname(f), { recursive: true });
  fs.writeFileSync(f, content);
}

fs.rmSync(OUT, { recursive: true, force: true });
fs.cpSync(STATIC, OUT, { recursive: true });

const seen = new Set();
for (const p of ALL) {
  if (seen.has(p.path)) throw new Error(`Chemin en double : ${p.path}`);
  seen.add(p.path);
  if (/—/.test(p.body + p.title + p.description + (p.lead || ""))) console.warn(`Tiret cadratin trouvé dans ${p.path}`);
  if (p.title.length > 65) console.warn(`Titre long (${p.title.length}) : ${p.path}`);
  if (p.description.length > 160 || p.description.length < 110) console.warn(`Description (${p.description.length}) : ${p.path}`);
  const file = p.path === "/404.html" ? "404.html" : path.join(p.path, "index.html");
  write(file, render(p));
}

// Plan du site XML
const indexable = ALL.filter((p) => !p.noindex && p.path !== "/404.html");
const pri = (p) => p.priority ?? ({ home: "1.0", service: "0.9", zone: "0.8", route: "0.7", guide: "0.6", legal: "0.2" }[p.kind] || "0.6");
const freq = (p) => ({ home: "weekly", legal: "yearly" }[p.kind] || "monthly");
write("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexable.map((p) => `  <url>
    <loc>${SITE.url}${p.path}</loc>
    <lastmod>${BUILD_DATE}</lastmod>
    <changefreq>${freq(p)}</changefreq>
    <priority>${pri(p)}</priority>
  </url>`).join("\n")}
</urlset>
`);

write("robots.txt", `User-agent: *
Allow: /
Disallow: /merci/

Sitemap: ${SITE.url}/sitemap.xml
`);

write("_headers", `/*
  X-Content-Type-Options: nosniff
  X-Frame-Options: SAMEORIGIN
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=(), payment=()
  Strict-Transport-Security: max-age=31536000; includeSubDomains
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; connect-src 'self' https://formsubmit.co https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com; img-src 'self' data: https://*.google-analytics.com https://www.googletagmanager.com; style-src 'self' 'unsafe-inline'; font-src 'self'; form-action 'self' https://formsubmit.co; frame-ancestors 'self'; base-uri 'self'; object-src 'none'

/assets/*
  Cache-Control: public, max-age=31536000, immutable

/*.xml
  Cache-Control: public, max-age=3600

/merci/*
  X-Robots-Tag: noindex
`);

write("_redirects", `# Raccourcis et anciennes adresses probables
/soumission /contact/ 301
/soumission-gratuite /contact/ 301
/nous-joindre /contact/ 301
/prix /prix-remorquage-joliette/ 301
/tarifs /prix-remorquage-joliette/ 301
/zones /zones-desservies/ 301
/secteurs /zones-desservies/ 301
/blog /conseils/ 301
/boost /services/survoltage-batterie/ 301
/depannage /services/depannage-routier/ 301
/plateau /services/remorquage-plateau/ 301
`);

console.log(`${ALL.length} pages générées (${indexable.length} dans le sitemap) → ${path.relative(ROOT, OUT)}/`);
