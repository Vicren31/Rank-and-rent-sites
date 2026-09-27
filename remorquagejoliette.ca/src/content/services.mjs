import { SITE, ICONS, servicesGrid, pillars, steps, sLink } from "../components.mjs";
import { P24, PCERT, PPRIX } from "./_service.mjs";
import a from "./services-a.mjs";
import b from "./services-b.mjs";

const index = {
  kind: "page",
  path: "/services/",
  title: "Services de remorquage à Joliette | Remorquage Joliette",
  description: "Tous nos services à Joliette : remorquage automobile, plateau, accident, survoltage, déverrouillage, essence, pneu, sortie de fossé et remorquage lourd.",
  h1: "Nos services de remorquage à Joliette",
  lead: "Remorquage, assistance routière et transport de véhicules : voici tout ce que nous faisons à Joliette et dans Lanaudière, 24 heures sur 24.",
  checks: ["16 services, un seul numéro", "Ligne ouverte 24 h sur 24, 7 jours sur 7", "Partenaires certifiés et assurés", "Soumission gratuite et sans obligation"],
  breadcrumbs: [{ name: "Services", path: "/services/" }],
  faq: [
    { q: "Quel service choisir si je ne sais pas ce qui cloche avec mon auto?", a: `Appelez-nous au ${SITE.phone} et décrivez ce qui se passe : bruits, voyants, ce qui s'est produit juste avant. Quelques questions suffisent pour savoir si une assistance sur place (survoltage, pneu, essence) peut régler le problème ou s'il faut remorquer l'auto au garage.` },
    { q: "Offrez-vous vos services aux entreprises?", a: `Oui. Garages, concessionnaires, entreprises de construction et de livraison font appel à nous pour déplacer des véhicules, de la ${sLink("transport-machinerie", "machinerie légère")} ou des ${sLink("remorquage-lourd", "véhicules lourds")}. Une procédure d'appel peut être établie pour les besoins récurrents.` },
    { q: "Vos services sont-ils offerts la nuit et la fin de semaine?", a: "Oui, notre ligne est ouverte 24 heures sur 24, 7 jours sur 7, y compris les jours fériés. Les déplacements planifiés, comme un transport longue distance ou de machinerie, se réservent à la date qui vous convient." },
  ],
  body: `<section><div class="container">
  <div class="section-head"><span class="overline">Services</span><h2>Remorquage, dépannage et transport</h2><p style="margin-top:.75rem">Chaque service a sa page détaillée : quand l'utiliser, comment il se déroule et les questions fréquentes. Cliquez sur celui qui correspond à votre situation.</p></div>
  ${servicesGrid()}
</div></section>
<section class="bg-soft"><div class="container">
  <div class="section-head"><span class="overline">Comment choisir</span><h2>Remorquage ou assistance sur place?</h2></div>
  <div class="grid-2">
    <div class="prose">
      <h3>Une assistance routière peut suffire si…</h3>
      <ul>
        <li>la batterie est à plat après une nuit de froid : ${sLink("survoltage-batterie", "survoltage")};</li>
        <li>les clés sont restées dans l'auto : ${sLink("deverrouillage-voiture", "déverrouillage")};</li>
        <li>le réservoir est vide : ${sLink("livraison-essence", "livraison d'essence")};</li>
        <li>un pneu est crevé et la roue de secours est bonne : ${sLink("changement-pneu-crevaison", "changement de pneu")};</li>
        <li>l'auto est prise dans un banc de neige, sans dommage : ${sLink("sortie-de-fosse-desenlisement", "désenlisement")}.</li>
      </ul>
    </div>
    <div class="prose">
      <h3>Un remorquage est nécessaire si…</h3>
      <ul>
        <li>un voyant rouge s'est allumé (huile, température, freins) ou un bruit anormal a précédé la panne;</li>
        <li>le véhicule a subi un choc : ${sLink("remorquage-accident", "remorquage après accident")};</li>
        <li>le véhicule est AWD, 4x4 ou électrique et ne roule plus : ${sLink("remorquage-plateau", "plateau")};</li>
        <li>il s'agit d'un camion ou d'un autobus : ${sLink("remorquage-lourd", "remorquage lourd")};</li>
        <li>le véhicule doit aller loin : ${sLink("transport-vehicule-longue-distance", "transport longue distance")}.</li>
      </ul>
    </div>
  </div>
</div></section>
<section><div class="container">
  <div class="section-head"><span class="overline">Déroulement</span><h2>Comment se passe une intervention</h2></div>
  ${steps([
    ["Appel ou formulaire", `Au ${SITE.phone}, en tout temps, ou par le formulaire pour une demande planifiée.`],
    ["Soumission", "Le prix est donné avant l'intervention, selon la situation et la distance."],
    ["Intervention", "Un partenaire certifié se présente avec l'équipement adapté à votre véhicule."],
    ["Livraison ou remise en route", "Votre véhicule repart, ou il est livré à la destination de votre choix."],
  ])}
</div></section>
${pillars([P24, PCERT, PPRIX])}`,
};

export default [index, ...a, ...b];
