// Gabarit commun des pages de service.
import { SITE, ICONS, pillars, serviceUrl, zoneChips, callBox } from "../components.mjs";
import { SERVICES, ZONES } from "../data.mjs";

function aside(slug) {
  const others = SERVICES.filter((s) => s.slug !== slug);
  return `<aside class="aside-sticky" aria-label="Liens utiles">
    ${callBox("aside")}
    <div class="aside-box"><h2>Nos autres services</h2><ul>${others.map((s) => `<li><a href="${serviceUrl(s.slug)}">${s.nav}</a></li>`).join("")}</ul></div>
    <div class="aside-box"><h2>Secteurs desservis</h2><p style="margin-bottom:.75rem">Joliette et :</p>${zoneChips(ZONES.map((z) => z.key))}</div>
  </aside>`;
}

export const P24 = { fact: "24 h sur 24, 7 jours sur 7", h: "Une ligne ouverte en tout temps", p: "Nuit, fin de semaine, tempête ou jour férié : notre ligne répond toujours. Vous expliquez la situation une seule fois et nous organisons l'intervention avec le partenaire le mieux placé et le mieux équipé." };
export const PCERT = { fact: "Partenaires certifiés", h: "Des remorqueurs qualifiés et assurés", p: "Les interventions sont confiées à des partenaires certifiés, formés aux techniques de remorquage et d'arrimage, qui travaillent avec de l'équipement entretenu et sont assurés pour transporter votre véhicule." };
export const PPRIX = { fact: "Soumission gratuite", h: "Le prix avant l'intervention", p: "On vous donne un prix clair selon le véhicule, la distance et la situation avant d'envoyer la remorqueuse. La soumission est gratuite et sans obligation : aucune surprise à l'arrivée." };
export const PDEST = { fact: "Destination de votre choix", h: "Vous choisissez où va votre véhicule", p: "Garage habituel, concessionnaire, domicile ou atelier désigné par votre assureur : c'est vous qui décidez de la destination. Nous ne vous imposons aucun garage." };

export function servicePage(o) {
  const s = SERVICES.find((x) => x.slug === o.slug);
  if (!s) throw new Error(`Service inconnu : ${o.slug}`);
  return {
    kind: "service",
    path: serviceUrl(o.slug),
    title: o.title,
    description: o.description,
    h1: o.h1,
    lead: o.lead,
    checks: o.checks,
    formType: s.form,
    breadcrumbs: [{ name: "Services", path: "/services/" }, { name: s.nav, path: serviceUrl(o.slug) }],
    service: { name: o.h1, serviceType: o.serviceType, description: o.description, areaServed: ["Joliette", ...ZONES.map((z) => z.name)] },
    faq: o.faq,
    faqTitle: o.faqTitle || `Questions fréquentes : ${s.name.toLowerCase()}`,
    ctaTitle: o.ctaTitle,
    ctaText: o.ctaText,
    body: `<section><div class="container layout-aside"><div class="prose">${o.prose}</div>${aside(o.slug)}</div></section>\n${pillars(o.pillars || [P24, PCERT, PPRIX], o.pillarsTitle || "Pourquoi choisir Remorquage Joliette")}`,
  };
}

export { SITE, ICONS };
