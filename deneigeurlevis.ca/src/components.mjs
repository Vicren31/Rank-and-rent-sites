// Composants HTML réutilisables (icônes, formulaire, grilles, FAQ, CTA).
import { SITE, SERVICES, ZONES, BOROUGHS, GUIDES, PROJECT_TYPES } from "./data.mjs";

const svg = (inner, vb = "0 0 24 24") =>
  `<svg viewBox="${vb}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${inner}</svg>`;

export const ICONS = {
  phone: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1 1 0 0 0-1.02.24l-2.2 2.2a15.05 15.05 0 0 1-6.59-6.58l2.2-2.21a1 1 0 0 0 .25-1.02A11.36 11.36 0 0 1 8.5 4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1 17 17 0 0 0 17 17 1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1z"/></svg>`,
  check: svg(`<path d="M20 6 9 17l-5-5"/>`),
  menu: svg(`<path d="M3 6h18M3 12h18M3 18h18"/>`),
  shield: svg(`<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>`),
  doc: svg(`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h5"/>`),
  pin: svg(`<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>`),
  flake: svg(`<path d="M12 2v20M4.9 6l14.2 12M19.1 6 4.9 18M9 4l3 2 3-2M9 20l3-2 3 2"/>`),
  tag: svg(`<path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L2 12V2h10l8.6 8.6a2 2 0 0 1 0 2.8z"/><circle cx="7" cy="7" r="1.5"/>`),
  house: svg(`<path d="M3 11 12 3l9 8"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>`),
  calendar: svg(`<rect x="3" y="4" width="18" height="18"/><path d="M16 2v4M8 2v4M3 10h18M8 14h3v3H8z"/>`),
  bolt: svg(`<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>`),
  shovel: svg(`<path d="M14 4l6 6M17 7l-8.5 8.5"/><path d="M8.5 15.5 5 19a2 2 0 0 1-3-3l3.5-3.5 3 3z"/>`),
  salt: svg(`<path d="M7 8h10l-1 13H8z"/><path d="M9 8V5a3 3 0 0 1 6 0v3"/><path d="M4 3l1 1M20 3l-1 1M12 11v1M10 15v1M14 15v1M12 18v1"/>`),
  building: svg(`<rect x="4" y="2" width="16" height="20"/><path d="M9 22v-4h6v4M8 6h2M14 6h2M8 10h2M14 10h2M8 14h2M14 14h2"/>`),
  store: svg(`<path d="M3 9l1.5-5h15L21 9"/><path d="M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0"/><path d="M5 12v9h14v-9M10 21v-5h4v5"/>`),
  truck: svg(`<path d="M1 4h13v12H1zM14 8h4l4 4v4h-8"/><circle cx="5.5" cy="18.5" r="2"/><circle cx="17.5" cy="18.5" r="2"/>`),
  clock: svg(`<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>`),
  tools: svg(`<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z"/>`),
  users: svg(`<circle cx="9" cy="7" r="4"/><path d="M1 21v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2M16 3.1a4 4 0 0 1 0 7.8M23 21v-2a4 4 0 0 0-3-3.9"/>`),
};

export const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
export const tel = (loc, cls = "", text = SITE.phone) => `<a href="tel:${SITE.phoneE164}" data-loc="${loc}"${cls ? ` class="${cls}"` : ""}>${text}</a>`;
export const serviceUrl = (slug) => `/services/${slug}/`;
export const svc = (slug) => SERVICES.find((s) => s.slug === slug);
export const zone = (key) => ZONES.find((z) => z.key === key);
export const guideUrl = (slug) => `/conseils/${slug}/`;
export const link = (href, text) => `<a href="${href}">${text}</a>`;
export const sLink = (slug, text) => link(serviceUrl(slug), text || svc(slug).name.toLowerCase());
export const zLink = (key, text) => link(zone(key).path, text || zone(key).name);
export const gLink = (slug, text) => link(guideUrl(slug), text);

export function leadForm({ id = "soumission", title = "Obtenez votre soumission gratuite", sub = "Sans obligation. Remplissez le formulaire ou appelez-nous.", ville = "", type = "", headingTag = "h2" } = {}) {
  const villes = ZONES.map((z) => z.name).concat(["Autre secteur de Lévis"]);
  const opt = (v, sel) => `<option${v === sel ? " selected" : ""}>${esc(v)}</option>`;
  return `<div class="lead-card">
  <${headingTag} class="form-title">${title}</${headingTag}>
  <p class="form-sub">${sub}</p>
  <form id="${id}" class="lead-form" action="https://formsubmit.co/${SITE.email}" method="POST">
    <input type="hidden" name="_subject" value="Nouvelle demande de soumission : ${SITE.name}">
    <input type="hidden" name="_template" value="table">
    <input type="hidden" name="_captcha" value="false">
    <input type="hidden" name="_next" value="${SITE.url}/merci/">
    <div class="hp" aria-hidden="true"><label>Ne pas remplir<input type="text" name="_honey" tabindex="-1" autocomplete="off"></label></div>
    <div class="field"><label for="${id}-nom">Nom</label><input id="${id}-nom" type="text" name="nom" required autocomplete="name" maxlength="80"></div>
    <div class="row-2">
      <div class="field"><label for="${id}-tel">Téléphone</label><input id="${id}-tel" type="tel" name="telephone" required autocomplete="tel" inputmode="tel" pattern="[0-9 ()+.\\-]{10,20}" title="Numéro à 10 chiffres, par exemple 418 555-1234" placeholder="418 555-1234"></div>
      <div class="field"><label for="${id}-ville">Ville ou secteur</label><select id="${id}-ville" name="ville" required><option value="">Choisissez</option>${villes.map((v) => opt(v, ville)).join("")}</select></div>
    </div>
    <div class="field"><label for="${id}-type">Type de projet</label><select id="${id}-type" name="type_projet" required><option value="">Choisissez</option>${PROJECT_TYPES.map((v) => opt(v, type)).join("")}</select></div>
    <div class="field"><label for="${id}-msg">Message <span class="opt">(facultatif)</span></label><textarea id="${id}-msg" name="message" rows="3" maxlength="1500" placeholder="Ex. : entrée pour 3 voitures en longueur, escalier avant à pelleter"></textarea></div>
    <button type="submit" class="btn btn-primary">Recevoir ma soumission gratuite</button>
    <p class="form-note">Ou appelez-nous : ${tel("form-note")}<br>Vos renseignements restent confidentiels. <a href="/politique-de-confidentialite/">Confidentialité</a></p>
  </form>
</div>`;
}

export const checks = (items) => `<ul class="checks">${items.map((t) => `<li>${ICONS.check}<span>${t}</span></li>`).join("")}</ul>`;

export function trustBar() {
  const items = [
    [ICONS.tag, "Soumission gratuite et sans obligation"],
    [ICONS.shield, "Entrepreneurs assurés en responsabilité civile"],
    [ICONS.doc, "Contrat écrit, clair et détaillé"],
    [ICONS.tools, "Équipement professionnel entretenu"],
    [ICONS.pin, "12 secteurs de Lévis desservis"],
  ];
  return `<section class="trust-bar" aria-label="Nos engagements"><div class="container"><ul>${items.map(([i, t]) => `<li>${i}<span>${t}</span></li>`).join("")}</ul></div></section>`;
}

export function servicesGrid(exclude = null, heading = true) {
  const list = SERVICES.filter((s) => s.slug !== exclude);
  return `<div class="grid-3">${list.map((s) => `<a class="card" href="${serviceUrl(s.slug)}"><span class="icon">${ICONS[s.icon]}</span><h3>${s.name}</h3><p>${s.short}</p><span class="more">En savoir plus →</span></a>`).join("")}</div>`;
}

export function zonesGroups(current = null) {
  return `<div class="zone-groups">${BOROUGHS.map((b) => `<div class="zone-group"><h3>${b.name}</h3><ul class="zone-list">${b.zones.filter((k) => k !== current).map((k) => { const z = zone(k); return `<li><a href="${z.path}">Déneigement ${z.name}</a></li>`; }).join("")}</ul></div>`).join("")}</div>`;
}

export const zoneChips = (keys) => `<ul class="chips">${keys.map((k) => `<li><a href="${zone(k).path}">${zone(k).name}</a></li>`).join("")}</ul>`;
export const serviceChips = (slugs) => `<ul class="chips">${slugs.map((s) => `<li><a href="${serviceUrl(s)}">${svc(s).nav}</a></li>`).join("")}</ul>`;

export function faqBlock(faq, title = "Questions fréquentes", intro = "") {
  if (!faq || !faq.length) return "";
  return `<section class="bg-ice" aria-labelledby="faq-titre"><div class="container narrow faq">
  <span class="overline">FAQ</span><h2 id="faq-titre" class="mb-3">${title}</h2>${intro ? `<p class="mb-3">${intro}</p>` : ""}
  ${faq.map((f) => `<details><summary>${f.q}</summary><div>${f.a.startsWith("<") ? f.a : `<p>${f.a}</p>`}</div></details>`).join("\n  ")}
</div></section>`;
}

export function ctaBand(title = "Prêt pour un hiver sans pelle?", text = "Demandez votre soumission gratuite et sans obligation. Nous vous rappelons pour évaluer votre entrée.") {
  return `<section class="cta-band"><div class="container narrow">
  <h2>${title}</h2><p>${text}</p>
  <div class="btn-row"><a href="tel:${SITE.phoneE164}" data-loc="cta-band" class="btn btn-light">${ICONS.phone}Appelez le ${SITE.phone}</a><a href="/contact/" class="btn btn-ghost-light">Demander une soumission</a></div>
</div></section>`;
}

export function pillars(items, title = "Pourquoi choisir Déneigeur Lévis", overline = "Nos engagements", bg = "bg-ice") {
  return `<section class="${bg}"><div class="container">
  <div class="section-head"><span class="overline">${overline}</span><h2>${title}</h2></div>
  <div class="grid-3">${items.map((p) => `<div class="pillar"><span class="fact">${p.fact}</span><h3>${p.h}</h3><p>${p.p}</p></div>`).join("")}</div>
</div></section>`;
}

export const steps = (items, cols4 = true) => `<ol class="steps${cols4 ? " cols-4" : ""}">${items.map(([h, p]) => `<li><h3>${h}</h3><p>${p}</p></li>`).join("")}</ol>`;

export function guidesList() {
  return `<div class="grid-3">${GUIDES.map((g) => `<a class="card" href="${guideUrl(g.slug)}"><span class="icon">${ICONS.doc}</span><h3>${g.name}</h3><span class="more">Lire le guide →</span></a>`).join("")}</div>`;
}

export { SITE, SERVICES, ZONES, BOROUGHS, GUIDES };
