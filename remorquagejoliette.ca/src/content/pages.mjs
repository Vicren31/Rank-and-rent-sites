import { SITE, ICONS, leadForm, checks, pillars, steps, sLink, gLink, zLink, zonesGroups, servicesGrid, guidesList } from "../components.mjs";
import { SERVICES, ZONES, ROUTES, GUIDES } from "../data.mjs";
import { P24, PCERT, PPRIX, PDEST } from "./_service.mjs";

const container = (html, cls = "") => `<section${cls ? ` class="${cls}"` : ""}><div class="container">${html}</div></section>`;
const prose = (html) => container(`<div class="prose">${html}</div>`);
const today = new Date().toISOString().slice(0, 10);

// ---------- Prix ----------
const prixFaq = [
  { q: "Combien coûte un remorquage à Joliette?", a: `Pour une voiture ou un VUS remorqué localement, à l'intérieur de Joliette ou vers une municipalité voisine, comptez généralement entre 110 $ et 180 $ avant taxes. Au-delà d'une dizaine de kilomètres, quelques dollars par kilomètre s'ajoutent. Appelez le ${SITE.phone} pour un prix exact, gratuit et sans obligation.` },
  { q: "Pourquoi le prix varie-t-il autant d'un remorqueur à l'autre?", a: "Hors des situations encadrées par règlement, les prix du remorquage sont fixés par le marché. Chaque entreprise établit ses frais de base, son tarif au kilomètre et ses suppléments (nuit, plateau, treuillage). D'où l'importance de demander le prix total avant le chargement." },
  { q: "Le remorquage coûte-t-il plus cher la nuit ou la fin de semaine?", a: "Certains remorqueurs appliquent un supplément la nuit, la fin de semaine ou les jours fériés. Si c'est le cas pour votre intervention, il est inclus dans la soumission que nous vous donnons avant le départ de la remorqueuse." },
  { q: "Est-ce que mon assurance rembourse le remorquage?", a: "Plusieurs contrats d'assurance automobile, ainsi que les programmes d'assistance routière des fabricants et des clubs automobiles, remboursent les frais de remorquage en tout ou en partie. Conservez votre facture détaillée et vérifiez les modalités de votre contrat." },
  { q: "Les taxes sont-elles incluses dans vos fourchettes de prix?", a: "Non. Les fourchettes présentées sur cette page sont avant taxes (TPS et TVQ). La soumission que nous vous donnons précise le montant total." },
];

const prix = {
  kind: "page",
  path: "/prix-remorquage-joliette/",
  priority: "0.9",
  title: "Prix d'un remorquage à Joliette | Tarifs et prix au km",
  description: "Combien coûte un remorquage à Joliette? Frais de base, prix au kilomètre, plateau, survoltage, sortie de fossé et longue distance : les fourchettes de prix.",
  h1: "Prix d'un remorquage à Joliette",
  lead: "Frais de base, prix au kilomètre, suppléments : voici les fourchettes de prix observées dans la région de Joliette, pour que vous sachiez à quoi vous attendre avant d'appeler.",
  checks: ["Fourchettes de prix réalistes", "Ce qui fait varier le prix", "Exemples de trajets dans Lanaudière", "Soumission gratuite et sans obligation"],
  breadcrumbs: [{ name: "Prix", path: "/prix-remorquage-joliette/" }],
  faq: prixFaq,
  faqTitle: "Questions fréquentes sur le prix du remorquage",
  body: `<section><div class="container layout-aside"><div class="prose">
<p>« Combien ça va coûter? » C'est la première question que se posent les automobilistes en panne, et c'est normal. Au Québec, en dehors de certaines situations encadrées par règlement, les prix du remorquage sont fixés par le marché. Ils varient selon l'entreprise, le véhicule, la distance, l'heure et la difficulté de l'intervention. Voici les fourchettes observées dans la région de Joliette.</p>

<h2>Fourchettes de prix du remorquage dans la région de Joliette</h2>
<div class="table-wrap"><table class="price-table">
  <thead><tr><th>Service</th><th>Ce qui est inclus</th><th>Fourchette (avant taxes)</th></tr></thead>
  <tbody>
    <tr><td>${sLink("remorquage-automobile", "Remorquage local")}, auto ou VUS</td><td>Déplacement, chargement et trajet local (environ 10 premiers km)</td><td>110 $ à 180 $</td></tr>
    <tr><td>Kilomètre supplémentaire</td><td>Au-delà du trajet local inclus</td><td>3 $ à 5 $ / km</td></tr>
    <tr><td>${sLink("remorquage-plateau", "Remorquage sur plateau")}</td><td>Supplément éventuel pour AWD, électrique, voiture basse</td><td>0 $ à 50 $ de plus</td></tr>
    <tr><td>${sLink("survoltage-batterie", "Survoltage (boost)")}</td><td>Déplacement et démarrage avec appareil professionnel</td><td>60 $ à 110 $</td></tr>
    <tr><td>${sLink("deverrouillage-voiture", "Déverrouillage de portière")}</td><td>Déplacement et ouverture sans dommage</td><td>60 $ à 110 $</td></tr>
    <tr><td>${sLink("livraison-essence", "Livraison d'essence")}</td><td>Déplacement et quelques litres de carburant</td><td>60 $ à 110 $ + carburant</td></tr>
    <tr><td>${sLink("changement-pneu-crevaison", "Changement de pneu")}</td><td>Installation de votre roue de secours</td><td>60 $ à 120 $</td></tr>
    <tr><td>${sLink("sortie-de-fosse-desenlisement", "Sortie de fossé / désenlisement")}</td><td>Treuillage, selon la profondeur et l'accès</td><td>125 $ à 300 $ et plus</td></tr>
    <tr><td>${sLink("remorquage-moto", "Remorquage de moto")}</td><td>Transport sur plateau avec arrimage adapté</td><td>120 $ à 220 $</td></tr>
    <tr><td>${sLink("transport-vehicule-longue-distance", "Transport longue distance")}</td><td>Frais de base et prix au kilomètre sur plateau</td><td>Sur soumission (prix fixe)</td></tr>
    <tr><td>${sLink("remorquage-lourd", "Remorquage lourd")}</td><td>Camions, autobus, souvent facturé à l'heure</td><td>Sur soumission</td></tr>
  </tbody>
</table></div>
<p class="source">Fourchettes indicatives observées sur le marché, fournies à titre informatif. Elles ne constituent pas une soumission. Le prix exact de votre intervention vous est donné avant le départ de la remorqueuse.</p>

<h2>Ce qui fait varier le prix</h2>
<ul>
  <li><strong>La distance</strong> entre l'endroit où se trouve le véhicule et la destination. Un remorquage de Saint-Charles-Borromée à Joliette ne coûte pas le même prix qu'un remorquage de Saint-Jean-de-Matha à Joliette.</li>
  <li><strong>Le véhicule</strong> : une compacte, un VUS à traction intégrale, une camionnette lourde ou un véhicule électrique ne demandent pas le même équipement.</li>
  <li><strong>La situation</strong> : un véhicule qui roule jusqu'à la dépanneuse est plus simple qu'un véhicule accidenté, dans le fossé, sans clés ou dans un stationnement souterrain.</li>
  <li><strong>L'heure et le jour</strong> : certains frais peuvent s'appliquer la nuit, la fin de semaine ou les jours fériés.</li>
  <li><strong>Le temps d'attente</strong> sur place, par exemple si le véhicule doit attendre la fin d'une intervention policière.</li>
</ul>

<h2>Exemples de trajets dans la région</h2>
<div class="table-wrap"><table>
  <thead><tr><th>Trajet</th><th>Distance approximative</th><th>Ordre de grandeur (auto, avant taxes)</th></tr></thead>
  <tbody>
    <tr><td>Dans Joliette, vers un garage de la ville</td><td>Moins de 10 km</td><td>110 $ à 180 $</td></tr>
    <tr><td>${zLink("saint-charles-borromee")} ou ${zLink("notre-dame-des-prairies")} vers Joliette</td><td>Moins de 10 km</td><td>110 $ à 180 $</td></tr>
    <tr><td>${zLink("autoroute-31", "Autoroute 31")} (Lavaltrie) vers Joliette</td><td>Environ 15 à 20 km</td><td>140 $ à 230 $</td></tr>
    <tr><td>${zLink("saint-jean-de-matha")} vers Joliette</td><td>Environ 30 km</td><td>170 $ à 280 $</td></tr>
    <tr><td>Joliette vers Montréal</td><td>Environ 75 km</td><td>Sur soumission, prix fixe</td></tr>
  </tbody>
</table></div>
<p class="source">Estimations calculées à partir des fourchettes ci-dessus, pour un véhicule qui ne demande pas d'intervention particulière.</p>

<h2>Les tarifs réglementés, à connaître</h2>
<p>Dans certaines situations, les frais de remorquage sont encadrés par règlement. C'est le cas des frais de remorquage et de garde des véhicules saisis en vertu du Code de la sécurité routière, publiés par la SAAQ, et du remorquage dans les zones de remorquage exclusif de certaines autoroutes de la région de Montréal. En dehors de ces cas, dont la plupart des remorquages à Joliette, les prix sont libres : d'où l'importance de demander le prix total avant le chargement. Notre guide ${gLink("choisir-un-remorqueur", "Comment choisir un remorqueur fiable")} explique quoi vérifier.</p>

<h2>Notre engagement sur le prix</h2>
${checks(["Le prix total vous est donné avant l'intervention", "Soumission gratuite et sans obligation", "Facture détaillée pour votre assureur", "Aucun frais ajouté sans votre accord"])}
</div>
<aside class="aside-sticky" aria-label="Soumission">
  ${`<div class="aside-box aside-dark"><h2>Votre prix exact</h2><p>Décrivez-nous le véhicule, l'endroit et la destination : on vous donne le prix, gratuitement.</p><p style="margin-top:1rem"><a href="tel:${SITE.phoneE164}" data-loc="aside-prix" class="btn btn-primary" style="width:100%">${ICONS.phone}${SITE.phone}</a></p></div>`}
  <div class="aside-box"><h2>Nos services</h2><ul>${SERVICES.map((s) => `<li><a href="/services/${s.slug}/">${s.nav}</a></li>`).join("")}</ul></div>
</aside>
</div></section>
${pillars([PPRIX, P24, PDEST], "Un prix clair, avant l'intervention")}`,
};

// ---------- À propos ----------
const about = {
  kind: "about",
  path: "/a-propos/",
  title: "À propos de Remorquage Joliette | Service local 24/7",
  description: "Remorquage Joliette : un service de remorquage local, ouvert 24 h sur 24, qui confie les interventions à des partenaires certifiés de Lanaudière.",
  h1: "À propos de Remorquage Joliette",
  lead: "Un numéro, ouvert en tout temps, qui vous met en contact avec des remorqueurs qualifiés de la région de Joliette, avec un prix clair avant chaque intervention.",
  heroForm: false,
  breadcrumbs: [{ name: "À propos", path: "/a-propos/" }],
  body: `<section><div class="container grid-2">
  <div class="prose">
    <h2>Pourquoi Remorquage Joliette existe</h2>
    <p>Quand votre auto vous laisse tomber, vous n'avez pas le temps de comparer dix remorqueurs sur Internet. Vous voulez parler à quelqu'un tout de suite, savoir combien ça coûtera et être certain que la personne qui se présente saura quoi faire avec votre véhicule.</p>
    <p>Remorquage Joliette a été créé pour répondre à ce besoin. Nous sommes un service de remorquage local, centré sur Joliette et les municipalités voisines, qui répond au téléphone 24 heures sur 24 et qui confie chaque intervention à des partenaires certifiés de la région, équipés pour votre situation.</p>
    <h2>Notre façon de travailler</h2>
    <ul>
      <li><strong>Une seule ligne, ouverte en tout temps</strong> : ${SITE.phone}, jour et nuit, fins de semaine et jours fériés compris.</li>
      <li><strong>Le prix avant l'intervention</strong> : soumission gratuite et sans obligation, sans frais ajoutés sans votre accord.</li>
      <li><strong>Le bon équipement</strong> : dépanneuse à roues levées, plateau, treuil, appareil de survoltage ou dépanneuse lourde, selon votre véhicule.</li>
      <li><strong>Votre choix de destination</strong> : garage, concessionnaire, domicile ou atelier désigné par votre assureur.</li>
      <li><strong>Une facture détaillée</strong>, utile pour votre assureur ou votre programme d'assistance routière.</li>
    </ul>
  </div>
  <div>
    ${steps([
      ["Vous appelez", "On écoute votre situation et on pose les bonnes questions sur votre véhicule."],
      ["On vous donne le prix", "Avant d'envoyer qui que ce soit, selon la distance et la situation."],
      ["Un partenaire certifié intervient", "Avec l'équipement adapté à votre véhicule et à l'endroit."],
      ["Votre véhicule arrive à destination", "Là où vous l'avez choisi, avec une facture détaillée."],
    ], false)}
  </div>
</div></section>
<section class="bg-soft"><div class="container">
  <div class="section-head"><span class="overline">Territoire</span><h2>Enracinés dans Lanaudière</h2><p style="margin-top:.75rem">Nos partenaires circulent chaque jour sur l'autoroute 31, la route 158, la route 131 et dans les rangs de la MRC de Joliette. Nous desservons Joliette et 16 municipalités voisines.</p></div>
  ${zonesGroups()}
</div></section>
${pillars([P24, PCERT, PPRIX])}`,
};

// ---------- Contact ----------
const contact = {
  kind: "contact",
  path: "/contact/",
  title: "Contact et soumission gratuite | Remorquage Joliette",
  description: "Joignez Remorquage Joliette au 450-915-0067, 24 h sur 24, ou demandez une soumission gratuite en ligne pour un remorquage ou un transport de véhicule.",
  h1: "Contactez Remorquage Joliette",
  lead: `Pour une urgence sur la route, appelez-nous au ${SITE.phone}, 24 heures sur 24, 7 jours sur 7. Pour un remorquage ou un transport planifié, remplissez le formulaire : nous vous rappelons avec une soumission gratuite.`,
  checks: ["Ligne ouverte 24 h sur 24, 7 jours sur 7", "Soumission gratuite et sans obligation", "Joliette et 16 municipalités voisines", "Réponse par téléphone"],
  breadcrumbs: [{ name: "Contact", path: "/contact/" }],
  body: `<section><div class="container grid-2">
  <div class="prose">
    <h2>Nos coordonnées</h2>
    <p><strong>Téléphone (24 h sur 24) :</strong> <a href="tel:${SITE.phoneE164}" data-loc="contact-page">${SITE.phone}</a></p>
    <p><strong>Courriel :</strong> <a href="mailto:${SITE.email}">${SITE.email}</a></p>
    <p><strong>Heures :</strong> ${SITE.hours.map((h) => `${h.days} : ${h.label}`).join(" · ")}</p>
    <p><strong>Zone de service :</strong> Joliette, Saint-Charles-Borromée, Notre-Dame-des-Prairies, Saint-Paul, Crabtree, Saint-Thomas, Sainte-Mélanie, Notre-Dame-de-Lourdes, Saint-Ambroise-de-Kildare, Saint-Félix-de-Valois, Rawdon, Saint-Jean-de-Matha, Lavaltrie, Berthierville, Sainte-Élisabeth, Saint-Jacques, L'Assomption, ainsi que les autoroutes 40 et 31.</p>
    <p class="source">Nous sommes un service mobile : nos remorqueuses se déplacent là où se trouve votre véhicule. Nous n'accueillons pas de clientèle sur place.</p>
    <h2>Pour une réponse précise, indiquez-nous</h2>
    <ul>
      <li>L'endroit où se trouve le véhicule (adresse, intersection ou sortie d'autoroute).</li>
      <li>La marque, le modèle, l'année et la traction (avant, arrière, intégrale, électrique).</li>
      <li>Ce qui se passe : panne, accident, fossé, batterie, clés, pneu.</li>
      <li>La destination souhaitée, s'il faut remorquer.</li>
    </ul>
    <div class="callout callout-danger"><strong>Blessés, fumée ou danger sur la route?</strong> Composez d'abord le 9-1-1.</div>
  </div>
  ${leadForm({ id: "soumission-contact", title: "Demande de soumission", sub: "Gratuite et sans obligation. Nous vous rappelons au numéro indiqué." })}
</div></section>`,
  heroForm: false,
};

// ---------- FAQ ----------
const faqAll = [
  { q: "Êtes-vous ouverts 24 heures sur 24?", a: `Oui. Notre ligne répond 24 heures sur 24, 7 jours sur 7, y compris les fins de semaine et les jours fériés. Composez le ${SITE.phone}.` },
  { q: "Combien coûte un remorquage à Joliette?", a: `Pour une auto ou un VUS remorqué localement, la plupart des remorquages se situent entre 110 $ et 180 $ avant taxes, avec quelques dollars par kilomètre au-delà du trajet local. Voir notre <a href="/prix-remorquage-joliette/">page des prix</a>.` },
  { q: "Donnez-vous le prix avant d'envoyer la remorqueuse?", a: "Oui, toujours. La soumission est gratuite et sans obligation, et aucun frais n'est ajouté sans votre accord." },
  { q: "Est-ce que je peux choisir le garage où ira mon auto?", a: "Oui. Vous choisissez la destination : garage, concessionnaire, domicile ou atelier désigné par votre assureur. Nous ne vous imposons aucun garage." },
  { q: "Faut-il un plateau pour mon véhicule?", a: `C'est généralement recommandé pour les véhicules à traction intégrale, les 4x4 permanents, les véhicules électriques, les voitures basses et les véhicules accidentés. Voir ${sLink("remorquage-plateau", "le remorquage sur plateau")}.` },
  { q: "Faites-vous le survoltage, le déverrouillage et la livraison d'essence?", a: `Oui. Ces services d'${sLink("depannage-routier", "assistance routière")} règlent bien des pannes sur place, sans remorquage.` },
  { q: "Quelles villes desservez-vous?", a: `Joliette et 16 municipalités voisines, ainsi que les autoroutes 40 et 31 et les routes 158 et 131. Voir nos <a href="/zones-desservies/">zones desservies</a>.` },
  { q: "Remorquez-vous les camions et les autobus?", a: `Oui, avec l'équipement de forte capacité de nos partenaires. Voir le ${sLink("remorquage-lourd", "remorquage lourd")}.` },
  { q: "Qui sont vos remorqueurs?", a: "Les interventions sont confiées à des partenaires certifiés de la région, qui travaillent avec de l'équipement entretenu et sont assurés pour transporter votre véhicule." },
  { q: "Est-ce que mon assurance paiera le remorquage?", a: "Cela dépend de votre contrat. Plusieurs polices d'assurance et programmes d'assistance routière remboursent les frais de remorquage. Conservez la facture détaillée que nous vous remettons." },
  { q: "Que dois-je faire en attendant la remorqueuse sur l'autoroute?", a: `Feux de détresse allumés, restez dans le véhicule avec la ceinture bouclée, sauf en cas de fumée ou de danger. En cas d'urgence, composez le 9-1-1. Voir ${gLink("panne-sur-autoroute-securite", "notre guide de sécurité sur l'autoroute")}.` },
  { q: "Pouvez-vous ramener mon auto de la fourrière?", a: `Oui. Une fois les démarches faites et les frais payés, nous pouvons prendre votre véhicule à la sortie de la fourrière et le livrer où vous voulez. Voir ${gLink("vehicule-remorque-ou-saisi", "notre guide sur les véhicules saisis")}.` },
  { q: "Faites-vous du remorquage de stationnement privé?", a: "Non. Nous travaillons pour les automobilistes, pas pour les propriétaires de stationnements." },
  { q: "Est-ce que vous achetez les vieilles voitures?", a: `Nous remorquons les véhicules hors d'usage vers des recycleurs autorisés. Selon l'état et le modèle, le véhicule peut avoir une valeur de récupération : nous vous en parlons avant l'enlèvement. Voir le ${sLink("remorquage-vehicule-ferraille", "remorquage de véhicule hors d'usage")}.` },
];

const faqPage = {
  kind: "faqpage",
  path: "/faq/",
  title: "FAQ remorquage à Joliette | Questions fréquentes",
  description: "Prix, heures, plateau, assurances, destinations, autoroutes : les réponses aux questions les plus fréquentes sur le remorquage à Joliette et dans Lanaudière.",
  h1: "Questions fréquentes sur le remorquage",
  lead: "Les réponses aux questions que nous posent le plus souvent les automobilistes de Joliette et de Lanaudière.",
  heroForm: false,
  breadcrumbs: [{ name: "FAQ", path: "/faq/" }],
  faq: faqAll,
  faqTitle: "Toutes nos réponses",
  body: "",
};

// ---------- Merci ----------
const merci = {
  kind: "page",
  path: "/merci/",
  title: "Merci pour votre demande | Remorquage Joliette",
  description: "Votre demande a bien été reçue. Nous vous rappelons au numéro indiqué. Pour une urgence, appelez le 450-915-0067, 24 heures sur 24.",
  h1: `Merci<span id="merci-nom"></span>!`,
  lead: "Votre demande a bien été reçue. Nous vous rappelons au numéro indiqué pour confirmer les détails et vous donner votre prix, sans obligation.",
  heroForm: false,
  noindex: true,
  noCta: true,
  breadcrumbs: [{ name: "Merci", path: "/merci/" }],
  body: container(`<div class="grid-2"><div class="prose"><h2>Et maintenant?</h2>
<ol><li>Gardez votre téléphone à portée de main : nous vous appellerons au numéro indiqué.</li><li>Ayez sous la main la marque, le modèle, l'année et la traction du véhicule.</li><li>Notez l'adresse exacte de la destination souhaitée.</li></ol>
<div class="callout callout-danger"><strong>C'est une urgence?</strong> N'attendez pas notre rappel : appelez-nous au <a href="tel:${SITE.phoneE164}" data-loc="merci">${SITE.phone}</a>, 24 heures sur 24.</div></div>
<div class="aside-box"><h3>En attendant, à lire</h3><ul>${GUIDES.slice(0, 4).map((g) => `<li><a href="/conseils/${g.slug}/">${g.name}</a></li>`).join("")}</ul></div></div>`),
};

// ---------- Plan du site ----------
const planDuSite = {
  kind: "page",
  path: "/plan-du-site/",
  title: "Plan du site | Remorquage Joliette",
  description: "Plan du site de Remorquage Joliette : toutes nos pages de services, de zones desservies, d'axes routiers, de prix et de conseils pour les automobilistes.",
  h1: "Plan du site",
  heroForm: false,
  noCta: true,
  breadcrumbs: [{ name: "Plan du site", path: "/plan-du-site/" }],
  body: container(`<div class="grid-2"><div class="prose">
<h2>Pages principales</h2><ul><li><a href="/">Accueil</a></li><li><a href="/services/">Services</a></li><li><a href="/zones-desservies/">Zones desservies</a></li><li><a href="/prix-remorquage-joliette/">Prix d'un remorquage</a></li><li><a href="/conseils/">Conseils</a></li><li><a href="/faq/">FAQ</a></li><li><a href="/a-propos/">À propos</a></li><li><a href="/contact/">Contact</a></li></ul>
<h2>Services</h2><ul>${SERVICES.map((s) => `<li><a href="/services/${s.slug}/">${s.name}</a></li>`).join("")}</ul>
</div><div class="prose">
<h2>Zones desservies</h2><ul>${ZONES.map((z) => `<li><a href="${z.path}">Remorquage ${z.name}</a></li>`).join("")}</ul>
<h2>Axes routiers</h2><ul>${ROUTES.map((r) => `<li><a href="${r.path}">Remorquage ${r.name}</a></li>`).join("")}</ul>
<h2>Conseils</h2><ul>${GUIDES.map((g) => `<li><a href="/conseils/${g.slug}/">${g.name}</a></li>`).join("")}</ul>
<h2>Informations légales</h2><ul><li><a href="/politique-de-confidentialite/">Politique de confidentialité</a></li><li><a href="/conditions-utilisation/">Conditions d'utilisation</a></li></ul>
</div></div>`),
};

// ---------- Confidentialité ----------
const privacy = {
  kind: "legal",
  path: "/politique-de-confidentialite/",
  title: "Politique de confidentialité | Remorquage Joliette",
  description: "Politique de confidentialité de Remorquage Joliette : renseignements recueillis, utilisation, partenaires, témoins, conservation et vos droits.",
  h1: "Politique de confidentialité",
  heroForm: false,
  noCta: true,
  breadcrumbs: [{ name: "Politique de confidentialité", path: "/politique-de-confidentialite/" }],
  body: prose(`<p><em>Dernière mise à jour : ${today}</em></p>
<p>Remorquage Joliette (« nous ») accorde une grande importance à la protection de vos renseignements personnels. Cette politique explique quels renseignements nous recueillons sur le site ${SITE.domain} et par téléphone, pourquoi, comment nous les utilisons et quels sont vos droits, conformément à la Loi sur la protection des renseignements personnels dans le secteur privé du Québec.</p>

<h2>1. Responsable de la protection des renseignements personnels</h2>
<p>La personne responsable de la protection des renseignements personnels chez Remorquage Joliette peut être jointe par courriel à <a href="mailto:${SITE.email}">${SITE.email}</a>. Toute question, demande d'accès, de rectification ou plainte peut lui être adressée.</p>

<h2>2. Renseignements recueillis</h2>
<p>Lorsque vous remplissez notre formulaire, nous recueillons : votre nom, votre numéro de téléphone, votre ville, le type de service demandé et, si vous le souhaitez, un message. Lorsque vous nous appelez, nous pouvons noter les renseignements nécessaires à l'intervention : position du véhicule, description du véhicule, destination. Nous ne recueillons aucun renseignement de paiement sur ce site.</p>
<p>Nous recueillons aussi, de façon automatisée, des données de navigation pseudonymisées au moyen de Google Analytics (voir la section 6). Les appels téléphoniques passent par un système de gestion des appels qui peut enregistrer des données techniques (numéro appelant, date, durée) afin d'assurer le suivi des demandes.</p>

<h2>3. Fins de la collecte</h2>
<p>Vos renseignements servent uniquement à : communiquer avec vous au sujet de votre demande, vous donner une soumission, organiser et réaliser l'intervention demandée, assurer le suivi de votre dossier et améliorer notre service et notre site.</p>

<h2>4. Communication de vos renseignements</h2>
<p>Pour organiser et réaliser l'intervention, vos renseignements peuvent être communiqués aux partenaires certifiés qui effectuent le remorquage ou l'assistance routière dans votre secteur. Ces partenaires n'utilisent vos renseignements qu'à cette fin. Nous ne vendons pas vos renseignements à des fins de publicité ou de sollicitation par des tiers non liés à votre demande.</p>
<p>Les formulaires du site sont transmis par le service FormSubmit, et les statistiques de visite sont traitées par Google Analytics. Ces fournisseurs peuvent héberger des données à l'extérieur du Québec, notamment aux États-Unis. Nous choisissons des fournisseurs reconnus et limitons les renseignements transmis au strict nécessaire.</p>

<h2>5. Consentement</h2>
<p>En soumettant le formulaire ou en nous appelant, vous consentez à ce que vos renseignements soient utilisés aux fins décrites ci-dessus. Vous pouvez retirer votre consentement en tout temps en nous écrivant à <a href="mailto:${SITE.email}">${SITE.email}</a>.</p>

<h2>6. Témoins (cookies) et Google Analytics</h2>
<p>Notre site utilise Google Analytics 4 pour mesurer l'audience : pages consultées, provenance des visites, type d'appareil, clics sur le numéro de téléphone et envois de formulaire. Ces données sont statistiques et ne servent pas à vous identifier personnellement. Vous pouvez refuser ou supprimer les témoins dans les paramètres de votre navigateur, ou installer le module de désactivation de Google Analytics offert par Google.</p>

<h2>7. Conservation et sécurité</h2>
<p>Vos renseignements sont conservés le temps nécessaire aux fins pour lesquelles ils ont été recueillis, puis détruits de façon sécuritaire. Une demande non suivie d'une intervention est conservée au plus deux ans. Nous prenons des mesures raisonnables pour protéger vos renseignements contre l'accès non autorisé, la perte ou l'utilisation abusive.</p>

<h2>8. Vos droits</h2>
<p>Vous avez le droit d'accéder à vos renseignements personnels, d'en demander la rectification s'ils sont inexacts, de retirer votre consentement et de demander leur suppression, sous réserve des obligations légales. Pour exercer ces droits, écrivez à <a href="mailto:${SITE.email}">${SITE.email}</a>. Si vous n'êtes pas satisfait de notre réponse, vous pouvez vous adresser à la Commission d'accès à l'information du Québec.</p>

<h2>9. Modifications</h2>
<p>Nous pouvons modifier cette politique pour refléter l'évolution de nos pratiques ou de la loi. La date de mise à jour figure en haut de la page.</p>`),
};

// ---------- Conditions ----------
const terms = {
  kind: "legal",
  path: "/conditions-utilisation/",
  title: "Conditions d'utilisation | Remorquage Joliette",
  description: "Conditions d'utilisation du site remorquagejoliette.ca : nature de l'information, soumissions, prix indicatifs, responsabilité, propriété intellectuelle.",
  h1: "Conditions d'utilisation",
  heroForm: false,
  noCta: true,
  breadcrumbs: [{ name: "Conditions d'utilisation", path: "/conditions-utilisation/" }],
  body: prose(`<p><em>Dernière mise à jour : ${today}</em></p>
<p>En utilisant le site ${SITE.domain}, vous acceptez les présentes conditions. Si vous ne les acceptez pas, veuillez ne pas utiliser le site.</p>

<h2>1. Nature du service</h2>
<p>Remorquage Joliette est un service de remorquage et d'assistance routière qui organise les interventions demandées et les confie à des partenaires certifiés de la région de Joliette. Le site présente nos services et permet de demander une soumission.</p>

<h2>2. Information générale</h2>
<p>Le contenu du site, y compris les guides et conseils, est fourni à titre informatif. Il ne remplace pas l'avis des autorités, d'un assureur, d'un mécanicien ou d'un autre professionnel. En cas d'urgence, de blessés ou de danger, composez le 9-1-1.</p>

<h2>3. Prix et soumissions</h2>
<p>Les fourchettes de prix présentées sur le site sont indicatives et ne constituent pas une offre. Le prix d'une intervention est confirmé dans la soumission donnée avant l'intervention, selon le véhicule, la distance, l'heure et la situation. Une soumission est gratuite et n'entraîne aucune obligation.</p>

<h2>4. Formulaire</h2>
<p>L'envoi d'un formulaire constitue une demande de soumission, pas une réservation confirmée. Pour une urgence, communiquez avec nous par téléphone au ${SITE.phone}.</p>

<h2>5. Responsabilité</h2>
<p>Nous faisons des efforts raisonnables pour que l'information du site soit exacte et à jour, sans pouvoir le garantir en tout temps. Nous ne sommes pas responsables des dommages découlant de l'utilisation de l'information du site ou de l'impossibilité d'y accéder.</p>

<h2>6. Liens externes</h2>
<p>Le site peut contenir des liens vers des sites de tiers (organismes publics, par exemple). Nous n'exerçons aucun contrôle sur ces sites et n'assumons aucune responsabilité quant à leur contenu.</p>

<h2>7. Propriété intellectuelle</h2>
<p>Les textes, le logo, les illustrations et le design du site sont protégés. Toute reproduction sans autorisation écrite est interdite.</p>

<h2>8. Renseignements personnels</h2>
<p>La collecte et l'utilisation de vos renseignements sont décrites dans notre <a href="/politique-de-confidentialite/">politique de confidentialité</a>.</p>

<h2>9. Droit applicable</h2>
<p>Les présentes conditions sont régies par les lois de la province de Québec et les lois fédérales du Canada qui s'y appliquent. Tout litige relève des tribunaux du district judiciaire compétent au Québec.</p>

<h2>10. Nous joindre</h2>
<p>Pour toute question : <a href="tel:${SITE.phoneE164}" data-loc="terms">${SITE.phone}</a> ou <a href="mailto:${SITE.email}">${SITE.email}</a>.</p>`),
};

// ---------- 404 ----------
const notFound = {
  kind: "page",
  path: "/404.html",
  title: "Page introuvable | Remorquage Joliette",
  description: "La page demandée est introuvable. Consultez nos services de remorquage à Joliette ou appelez-nous au 450-915-0067, 24 heures sur 24.",
  h1: "Page introuvable",
  lead: `La page que vous cherchez n'existe pas ou a été déplacée. Besoin d'une remorqueuse? Appelez le ${SITE.phone}, 24 heures sur 24.`,
  heroForm: false,
  noindex: true,
  breadcrumbs: [{ name: "Page introuvable", path: "/404.html" }],
  body: container(`<div class="section-head"><h2>Nos services</h2></div>${servicesGrid()}`),
};

export default [prix, about, contact, faqPage, merci, planDuSite, privacy, terms, notFound];
