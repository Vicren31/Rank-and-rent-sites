// Composants HTML réutilisables (icônes, formulaire, grilles, FAQ, CTA).
import { SITE, SERVICES, ZONES, ROUTES, GROUPS, GUIDES, PROJECT_TYPES } from "./data.mjs";

const svg = (inner, vb = "0 0 24 24") =>
  `<svg viewBox="${vb}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${inner}</svg>`;

export const ICONS = {
  phone: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1 1 0 0 0-1.02.24l-2.2 2.2a15.05 15.05 0 0 1-6.59-6.58l2.2-2.21a1 1 0 0 0 .25-1.02A11.36 11.36 0 0 1 8.5 4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1 17 17 0 0 0 17 17 1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1z"/></svg>`,
  check: svg(`<path d="M20 6 9 17l-5-5"/>`),
  menu: svg(`<path d="M3 6h18M3 12h18M3 18h18"/>`),
  shield: svg(`<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>`),
  doc: svg(`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h5"/>`),
  pin: svg(`<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>`),
  tag: svg(`<path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L2 12V2h10l8.6 8.6a2 2 0 0 1 0 2.8z"/><circle cx="7" cy="7" r="1.5"/>`),
  clock: svg(`<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>`),
  users: svg(`<circle cx="9" cy="7" r="4"/><path d="M1 21v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2M16 3.1a4 4 0 0 1 0 7.8M23 21v-2a4 4 0 0 0-3-3.9"/>`),
  alert: svg(`<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/>`),
  tow: svg(`<path d="M2 17V10h7l2 3h10v4"/><path d="M9 10V7h3"/><path d="m13 13 5-8"/><path d="M18 5v4"/><circle cx="6" cy="17.5" r="2"/><circle cx="17" cy="17.5" r="2"/>`),
  flatbed: svg(`<path d="M1 15h14l-1 2H1z"/><path d="M15 17V9h4l3 4v4h-2"/><path d="M4 12h8l-1-3H6z"/><circle cx="5" cy="18.5" r="1.8"/><circle cx="18" cy="18.5" r="1.8"/>`),
  crash: svg(`<path d="M2 17v-4l2-4h8l2 4v4z"/><circle cx="5.5" cy="17" r="1.5"/><circle cx="10.5" cy="17" r="1.5"/><path d="m18 2 .8 3 2.7-1.4-1.3 2.8L23 7.5l-3 .7.8 3-2.4-1.9L16 11l.6-3L14 6.9l3-.6z"/>`),
  wrench: svg(`<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z"/>`),
  battery: svg(`<rect x="2" y="7" width="20" height="13"/><path d="M6 7V4h3v3M15 7V4h3v3"/><path d="M5.5 13.5h5M8 11v5M14 13.5h5"/>`),
  key: svg(`<circle cx="7.5" cy="15.5" r="4.5"/><path d="M10.7 12.3 21 2M16 7l3 3M13.5 9.5l2 2"/>`),
  fuel: svg(`<path d="M4 21V5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v16"/><path d="M3 21h13M7 7h5v4H7z"/><path d="M15 10h2a2 2 0 0 1 2 2v5a1.5 1.5 0 0 0 3 0V8l-3-3"/>`),
  tire: svg(`<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><path d="M12 2v6M12 16v6M2 12h6M16 12h6"/>`),
  winch: svg(`<path d="M12 2v9"/><path d="M12 11a4.5 4.5 0 1 1-4.5 4.5"/><path d="M7.5 15.5 10 13"/><path d="M8 2h8"/>`),
  moto: svg(`<circle cx="5" cy="17" r="3"/><circle cx="19" cy="17" r="3"/><path d="m5 17 4-6h5l5 6M12 11l2-4h3M9 11H6"/>`),
  rv: svg(`<path d="M2 17V6h14l5 5v6z"/><path d="M5 9h4v3H5zM12 9h3v3h-3z"/><circle cx="6.5" cy="18" r="2"/><circle cx="16.5" cy="18" r="2"/>`),
  plug: svg(`<path d="M9 2v5M15 2v5M6 7h12v4a6 6 0 0 1-12 0z"/><path d="M12 17v5M11 10.5l-1.5 2.5h3L11 15.5"/>`),
  truck: svg(`<path d="M1 4h13v12H1zM14 8h4l4 4v4h-8"/><circle cx="5.5" cy="18.5" r="2"/><circle cx="17.5" cy="18.5" r="2"/>`),
  route: svg(`<path d="M5 22 10 2M19 22 14 2M12 5v2M12 11v2M12 17v2"/>`),
  excavator: svg(`<path d="M2 21h12"/><rect x="2.5" y="15" width="11" height="4"/><path d="M5 15v-4h5l2 4"/><path d="m11 11 6-7 4.5 5-2.5 2"/>`),
  recycle: svg(`<path d="M7 19H4.8a1.8 1.8 0 0 1-1.6-2.7l1.4-2.4M11 19h8.2a1.8 1.8 0 0 0 1.6-2.7l-3.4-5.9M9.6 5.5l.7-1.2a1.8 1.8 0 0 1 3.1 0l3.1 5.4"/><path d="m14 16-3 3 3 3M8.3 13.6 7.2 9.5l-4.1 1.1M16.8 7.2l1 4.1 4.1-1.1"/>`),
};

export const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
export const tel = (loc, cls = "", text = SITE.phone) => `<a href="tel:${SITE.phoneE164}" data-loc="${loc}"${cls ? ` class="${cls}"` : ""}>${text}</a>`;
export const serviceUrl = (slug) => `/services/${slug}/`;
export const svc = (slug) => SERVICES.find((s) => s.slug === slug);
export const zone = (key) => ZONES.find((z) => z.key === key) || ROUTES.find((r) => r.key === key);
export const guideUrl = (slug) => `/conseils/${slug}/`;
export const link = (href, text) => `<a href="${href}">${text}</a>`;
export const sLink = (slug, text) => link(serviceUrl(slug), text || svc(slug).name.toLowerCase());
export const zLink = (key, text) => link(zone(key).path, text || zone(key).name);
export const gLink = (slug, text) => link(guideUrl(slug), text);

export function leadForm({ id = "soumission", title = "Demandez votre soumission gratuite", sub = `Sans obligation. Pour une urgence sur la route, appelez directement le ${SITE.phone}.`, ville = "", type = "", headingTag = "h2" } = {}) {
  const villes = ["Joliette", ...ZONES.map((z) => z.name), "Sur l'autoroute 40 ou 31", "Autre municipalité de Lanaudière"];
  const opt = (v, sel) => `<option${v === sel ? " selected" : ""}>${esc(v)}</option>`;
  return `<div class="lead-card">
  <${headingTag} class="form-title">${title}</${headingTag}>
  <p class="form-sub">${sub}</p>
  <form id="${id}" class="lead-form" action="https://formsubmit.co/${SITE.email}" method="POST">
    <input type="hidden" name="_subject" value="Nouvelle demande : ${SITE.name}">
    <input type="hidden" name="_template" value="table">
    <input type="hidden" name="_captcha" value="false">
    <input type="hidden" name="_next" value="${SITE.url}/merci/">
    <div class="hp" aria-hidden="true"><label>Ne pas remplir<input type="text" name="_honey" tabindex="-1" autocomplete="off"></label></div>
    <div class="field"><label for="${id}-nom">Nom</label><input id="${id}-nom" type="text" name="nom" required autocomplete="name" maxlength="80"></div>
    <div class="row-2">
      <div class="field"><label for="${id}-tel">Téléphone</label><input id="${id}-tel" type="tel" name="telephone" required autocomplete="tel" inputmode="tel" pattern="[0-9 ()+.\\-]{10,20}" title="Numéro à 10 chiffres, par exemple 450 555-1234" placeholder="450 555-1234"></div>
      <div class="field"><label for="${id}-ville">Ville</label><select id="${id}-ville" name="ville" required><option value="">Choisissez</option>${villes.map((v) => opt(v, ville)).join("")}</select></div>
    </div>
    <div class="field"><label for="${id}-type">Type de service</label><select id="${id}-type" name="type_projet" required><option value="">Choisissez</option>${PROJECT_TYPES.map((v) => opt(v, type)).join("")}</select></div>
    <div class="field"><label for="${id}-msg">Message <span class="opt">(facultatif)</span></label><textarea id="${id}-msg" name="message" rows="3" maxlength="1500" placeholder="Ex. : Honda Civic 2016 qui ne démarre plus, à amener au garage sur le boulevard Base-de-Roc"></textarea></div>
    <button type="submit" class="btn btn-primary">Envoyer ma demande</button>
    <p class="form-note">Urgence? Appelez-nous en tout temps : ${tel("form-note")}<br>Vos renseignements restent confidentiels. <a href="/politique-de-confidentialite/">Confidentialité</a></p>
  </form>
</div>`;
}

export const checks = (items) => `<ul class="checks">${items.map((t) => `<li>${ICONS.check}<span>${t}</span></li>`).join("")}</ul>`;

export function trustBar() {
  const items = [
    [ICONS.clock, "Service 24 h sur 24, 7 jours sur 7"],
    [ICONS.tag, "Soumission gratuite et sans obligation"],
    [ICONS.shield, "Partenaires certifiés et assurés"],
    [ICONS.flatbed, "Dépanneuses à plateau disponibles"],
    [ICONS.pin, "Joliette et 16 municipalités voisines"],
  ];
  return `<section class="trust-bar" aria-label="Nos engagements"><div class="container"><ul>${items.map(([i, t]) => `<li>${i}<span>${t}</span></li>`).join("")}</ul></div></section>`;
}

export function servicesGrid(exclude = null) {
  const list = SERVICES.filter((s) => s.slug !== exclude);
  return `<div class="grid-3">${list.map((s) => `<a class="card" href="${serviceUrl(s.slug)}"><span class="icon">${ICONS[s.icon]}</span><h3>${s.name}</h3><p>${s.short}</p><span class="more">En savoir plus →</span></a>`).join("")}</div>`;
}

export function zonesGroups(current = null, withRoutes = true) {
  const groups = GROUPS.map((g) => `<div class="zone-group"><h3>${g.name}</h3><ul class="zone-list">${g.zones.filter((k) => k !== current).map((k) => { const z = zone(k); return `<li><a href="${z.path}">Remorquage ${z.name}</a></li>`; }).join("")}</ul></div>`);
  if (withRoutes) groups.push(`<div class="zone-group"><h3>Axes routiers</h3><ul class="zone-list">${ROUTES.filter((r) => r.key !== current).map((r) => `<li><a href="${r.path}">Remorquage ${r.name}</a></li>`).join("")}</ul></div>`);
  return `<div class="zone-groups">${groups.join("")}</div>`;
}

export const zoneChips = (keys) => `<ul class="chips">${keys.map((k) => `<li><a href="${zone(k).path}">${zone(k).name}</a></li>`).join("")}</ul>`;
export const serviceChips = (slugs) => `<ul class="chips">${slugs.map((s) => `<li><a href="${serviceUrl(s)}">${svc(s).nav}</a></li>`).join("")}</ul>`;

export function faqBlock(faq, title = "Questions fréquentes", intro = "") {
  if (!faq || !faq.length) return "";
  return `<section class="bg-soft" aria-labelledby="faq-titre"><div class="container narrow faq">
  <span class="overline">FAQ</span><h2 id="faq-titre" class="mb-3">${title}</h2>${intro ? `<p class="mb-3">${intro}</p>` : ""}
  ${faq.map((f) => `<details><summary>${f.q}</summary><div>${f.a.startsWith("<") ? f.a : `<p>${f.a}</p>`}</div></details>`).join("\n  ")}
</div></section>`;
}

export function ctaBand(title = "Besoin d'une remorqueuse à Joliette?", text = "Notre ligne est ouverte 24 heures sur 24, 7 jours sur 7. Appelez-nous ou demandez une soumission gratuite et sans obligation.") {
  return `<section class="cta-band"><div class="container narrow">
  <h2>${title}</h2><p>${text}</p>
  <div class="btn-row"><a href="tel:${SITE.phoneE164}" data-loc="cta-band" class="btn btn-dark">${ICONS.phone}Appelez le ${SITE.phone}</a><a href="/contact/" class="btn btn-ghost-dark">Soumission gratuite</a></div>
</div></section>`;
}

export function pillars(items, title = "Pourquoi appeler Remorquage Joliette", overline = "Nos engagements", bg = "bg-soft") {
  return `<section class="${bg}"><div class="container">
  <div class="section-head"><span class="overline">${overline}</span><h2>${title}</h2></div>
  <div class="grid-3">${items.map((p) => `<div class="pillar"><span class="fact">${p.fact}</span><h3>${p.h}</h3><p>${p.p}</p></div>`).join("")}</div>
</div></section>`;
}

export const steps = (items, cols4 = true) => `<ol class="steps${cols4 ? " cols-4" : ""}">${items.map(([h, p]) => `<li><h3>${h}</h3><p>${p}</p></li>`).join("")}</ol>`;

export function guidesList(exclude = null) {
  return `<div class="grid-3">${GUIDES.filter((g) => g.slug !== exclude).map((g) => `<a class="card" href="${guideUrl(g.slug)}"><span class="icon">${ICONS.doc}</span><h3>${g.name}</h3><span class="more">Lire le guide →</span></a>`).join("")}</div>`;
}

export const callBox = (loc, title = "Urgence sur la route?", text = "Notre ligne est ouverte 24 h sur 24, 7 jours sur 7.") =>
  `<div class="aside-box aside-dark"><h2>${title}</h2><p>${text}</p><p style="margin-top:1rem"><a href="tel:${SITE.phoneE164}" data-loc="${loc}" class="btn btn-primary" style="width:100%">${ICONS.phone}${SITE.phone}</a></p></div>`;

export { SITE, SERVICES, ZONES, ROUTES, GROUPS, GUIDES };

// Photo facultative : s'affiche seulement si le fichier existe dans static/assets/img/photos/.
// Permet d'ajouter des photos libres de droits plus tard sans toucher au contenu.
import fs from "node:fs";
import path from "node:path";
const PHOTO_DIR = path.resolve(path.dirname(new URL(import.meta.url).pathname), "../static/assets/img/photos");
export const PHOTOS_WANTED = [];
export function photo(file, alt, caption = "") {
  PHOTOS_WANTED.push({ file, alt });
  if (!fs.existsSync(path.join(PHOTO_DIR, file))) return "";
  return `<figure class="photo"><img src="/assets/img/photos/${file}" alt="${esc(alt)}" width="1200" height="800" loading="lazy" decoding="async">${caption ? `<figcaption>${caption}</figcaption>` : ""}</figure>`;
}
