import { SITE, ICONS, servicesGrid, zonesGroups, guidesList, pillars, steps, serviceUrl, sLink, gLink, zLink, leadForm, checks } from "../components.mjs";
import { SERVICES, ZONES, BOROUGHS, GUIDES } from "../data.mjs";

const container = (html, cls = "") => `<section${cls ? ` class="${cls}"` : ""}><div class="container">${html}</div></section>`;
const prose = (html, cls = "") => `<section${cls ? ` class="${cls}"` : ""}><div class="container"><div class="prose">${html}</div></div></section>`;

// ---------- Services (index) ----------
const servicesHub = {
  kind: "page",
  path: "/services/",
  title: "Services de déneigement à Lévis | Déneigeur Lévis",
  description: "Tous nos services de déneigement à Lévis : résidentiel, contrat saisonnier, à l'unité, balcons et escaliers, abrasif, condos et commercial. Soumission gratuite.",
  h1: "Nos services de déneigement à Lévis",
  lead: "Du contrat saisonnier pour votre entrée au déneigement complet d'un stationnement commercial, trouvez le service qui convient à votre propriété.",
  checks: ["Résidentiel, condos et commercial", "Saisonnier ou à l'unité", "Entrepreneurs assurés", "Soumission gratuite et sans obligation"],
  breadcrumbs: [{ name: "Services", path: "/services/" }],
  priority: "0.9",
  body: container(`<div class="section-head"><span class="overline">8 services</span><h2>Choisissez votre service de déneigement</h2><p style="margin-top:.75rem">Tous nos services sont offerts dans les 12 secteurs de Lévis. Chacun commence par une soumission gratuite, sans obligation, et un contrat écrit qui précise exactement ce qui est inclus.</p></div>${servicesGrid()}`) +
    prose(`<h2>Quel service de déneigement choisir?</h2>
<div class="table-wrap"><table>
  <thead><tr><th>Votre situation</th><th>Service recommandé</th></tr></thead>
  <tbody>
    <tr><td>Maison unifamiliale, résidence principale</td><td>${sLink("contrat-deneigement-saisonnier", "Contrat saisonnier")} pour l'${sLink("deneigement-residentiel-levis", "entrée résidentielle")}</td></tr>
    <tr><td>Escaliers, balcon ou trottoir difficiles à pelleter</td><td>${sLink("deneigement-manuel-balcons-escaliers", "Déneigement manuel")} en ajout au contrat</td></tr>
    <tr><td>Entrée en pente ou glacée après les redoux</td><td>${sLink("epandage-abrasif-deglacage", "Épandage d'abrasif")}</td></tr>
    <tr><td>Besoin ponctuel, chalet, maison à vendre</td><td>${sLink("deneigement-a-l-unite", "Déneigement à l'unité")}</td></tr>
    <tr><td>Syndicat de copropriété, plex, immeuble locatif</td><td>${sLink("deneigement-condos-multilogements", "Déneigement de condos et multilogements")}</td></tr>
    <tr><td>Commerce, bureau, clinique</td><td>${sLink("deneigement-commercial-levis", "Déneigement commercial")}</td></tr>
    <tr><td>Bancs trop hauts, plus de place pour la neige</td><td>${sLink("soufflage-transport-neige", "Soufflage et transport de neige")}</td></tr>
  </tbody>
</table></div>
<p>Vous hésitez? Appelez-nous au ${`<a href="tel:${SITE.phoneE164}" data-loc="services-hub">${SITE.phone}</a>`} et nous vous aiderons à choisir la formule la plus adaptée à votre propriété et à votre budget. Pour des repères de coût, consultez nos <a href="/prix-deneigement-levis/">prix du déneigement à Lévis</a>.</p>`, "bg-ice"),
};

// ---------- Zones (index) ----------
const zonesHub = {
  kind: "page",
  path: "/zones-desservies/",
  title: "Zones desservies : déneigement partout à Lévis",
  description: "Déneigement dans les 12 secteurs de Lévis : Saint-Nicolas, Saint-Romuald, Charny, Saint-Jean-Chrysostome, Lauzon, Pintendre et plus. Soumission gratuite.",
  h1: "Zones desservies à Lévis",
  lead: "Nos équipes de déneigement couvrent les trois arrondissements de Lévis, de Saint-Étienne-de-Lauzon à l'ouest jusqu'à Saint-Joseph-de-la-Pointe-de-Lévy à l'est.",
  checks: ["Arrondissement Desjardins", "Chutes-de-la-Chaudière-Est", "Chutes-de-la-Chaudière-Ouest", "Circuits organisés par secteur"],
  breadcrumbs: [{ name: "Zones desservies", path: "/zones-desservies/" }],
  priority: "0.8",
  body: container(`<div class="section-head"><span class="overline">12 secteurs</span><h2>Choisissez votre secteur</h2><p style="margin-top:.75rem">Depuis la fusion municipale de 2002, la ville de Lévis regroupe dix anciennes municipalités réparties en trois arrondissements. Chaque secteur a ses particularités de déneigement : rues en pente près du fleuve, quartiers récents aux entrées doubles, milieux ouverts exposés à la poudrerie. Sélectionnez le vôtre pour en savoir plus.</p></div>${zonesGroups()}`) +
    prose(`<h2>Comment nous organisons nos circuits de déneigement</h2>
<p>Pour intervenir efficacement pendant les tempêtes, nos circuits sont organisés par secteur. Une équipe qui dessert ${zLink("saint-nicolas")} passe aussi par ${zLink("saint-redempteur")} et ${zLink("saint-etienne-de-lauzon")}; une autre couvre ${zLink("saint-romuald")}, ${zLink("charny")}, ${zLink("saint-jean-chrysostome")} et ${zLink("breakeyville")}; une troisième dessert le ${zLink("vieux-levis")}, ${zLink("lauzon")}, ${zLink("saint-david")}, ${zLink("pintendre")} et ${zLink("saint-joseph-de-la-pointe-de-levy")}. Ce regroupement réduit les déplacements entre deux adresses et permet de dégager plus d'entrées pendant une même tempête.</p>
<h2>Les arrondissements de Lévis en bref</h2>
<div class="table-wrap"><table>
  <thead><tr><th>Arrondissement</th><th>Secteurs</th><th>Particularités de déneigement</th></tr></thead>
  <tbody>
    <tr><td>Desjardins</td><td>Vieux-Lévis, Lauzon, Saint-David, Pintendre, Saint-Joseph-de-la-Pointe-de-Lévy</td><td>Rues en pente et entrées étroites près du fleuve, secteurs ruraux à l'est</td></tr>
    <tr><td>Les Chutes-de-la-Chaudière-Est</td><td>Saint-Romuald, Saint-Jean-Chrysostome, Charny, Breakeyville</td><td>Quartiers établis et récents, terrains boisés, commerces</td></tr>
    <tr><td>Les Chutes-de-la-Chaudière-Ouest</td><td>Saint-Nicolas, Saint-Rédempteur, Saint-Étienne-de-Lauzon</td><td>Grandes entrées, navetteurs vers les ponts, poudrerie en milieu ouvert</td></tr>
  </tbody>
</table></div>
<p>Votre adresse est à Lévis mais vous ne savez pas à quel secteur elle appartient? Appelez-nous au <a href="tel:${SITE.phoneE164}" data-loc="zones-hub">${SITE.phone}</a> ou indiquez « Autre secteur de Lévis » dans le formulaire.</p>`, "bg-ice"),
};

// ---------- Prix ----------
const prixFaq = [
  { q: "Les prix affichés incluent-ils les taxes?", a: "Non. Les fourchettes de prix présentées sont avant taxes (TPS et TVQ). Le prix exact, taxes incluses, figure sur votre soumission et votre contrat." },
  { q: "Pourquoi le prix du déneigement a-t-il augmenté ces dernières années?", a: "Plusieurs coûts ont augmenté pour les entrepreneurs : assurances, carburant, achat et entretien de la machinerie, main-d'œuvre. Ces hausses se reflètent dans le prix des contrats partout au Québec." },
  { q: "Est-ce que le prix change si l'hiver est très enneigé?", a: "Pas avec un contrat saisonnier : le prix est fixe pour toute la saison, peu importe le nombre de bordées. Seuls les services demandés en extra, comme un soufflage ponctuel, s'ajoutent." },
  { q: "Comment obtenir un prix exact pour mon entrée?", a: "Demandez une soumission gratuite par téléphone ou avec le formulaire. Nous confirmons les dimensions de votre entrée et vos besoins, puis vous remettons un prix précis, sans obligation." },
];
const prix = {
  kind: "page",
  path: "/prix-deneigement-levis/",
  title: "Prix du déneigement à Lévis : combien ça coûte?",
  description: "Prix du déneigement à Lévis : fourchettes pour une entrée simple, double ou grande, à l'unité, escaliers et abrasif. Soumission gratuite au 365-334-9481.",
  h1: "Prix du déneigement à Lévis",
  lead: "Combien coûte un contrat de déneigement à Lévis? Voici les fourchettes de prix observées dans la région, et ce qui fait varier le coût pour votre propriété.",
  checks: ["Fourchettes indicatives, taxes en sus", "Prix fixe avec le contrat saisonnier", "Aucun frais caché", "Prix exact avec une soumission gratuite"],
  breadcrumbs: [{ name: "Prix du déneigement", path: "/prix-deneigement-levis/" }],
  priority: "0.9",
  faq: prixFaq,
  faqTitle: "Questions sur le prix du déneigement",
  body: prose(`<p>Le prix du déneigement à Lévis dépend surtout de la taille de votre entrée, de la formule choisie et des extras. Les fourchettes ci-dessous sont données à titre indicatif : elles reflètent les prix généralement observés dans la région de Lévis et de Québec pour la saison d'hiver, avant taxes. Seule une soumission permet de connaître le prix exact pour votre propriété.</p>

<h2>Contrat saisonnier résidentiel : fourchettes de prix</h2>
<div class="table-wrap"><table class="price-table">
  <thead><tr><th>Type d'entrée</th><th>Description</th><th>Prix par saison</th></tr></thead>
  <tbody>
    <tr><td>Entrée simple</td><td>Une voiture de large, 2 à 3 voitures en longueur</td><td>450 $ à 650 $</td></tr>
    <tr><td>Entrée double</td><td>Deux voitures de large ou 4 voitures au total</td><td>550 $ à 850 $</td></tr>
    <tr><td>Grande entrée</td><td>5 voitures et plus, en U ou avec aire de virage</td><td>800 $ à 1 300 $</td></tr>
    <tr><td>Entrée rurale très longue</td><td>Longues entrées de secteurs ruraux</td><td>Sur évaluation</td></tr>
    <tr><td>Duplex ou triplex</td><td>Entrée ou stationnement partagé</td><td>700 $ à 1 200 $</td></tr>
  </tbody>
</table></div>

<h2>Extras et services ponctuels</h2>
<div class="table-wrap"><table class="price-table">
  <thead><tr><th>Service</th><th>Détail</th><th>Prix indicatif</th></tr></thead>
  <tbody>
    <tr><td>${sLink("deneigement-manuel-balcons-escaliers", "Escaliers, balcon et trottoir")}</td><td>Ajout au contrat saisonnier</td><td>150 $ à 400 $ / saison</td></tr>
    <tr><td>${sLink("epandage-abrasif-deglacage", "Épandage d'abrasif")}</td><td>Ajout au contrat saisonnier</td><td>100 $ à 250 $ / saison</td></tr>
    <tr><td>Épandage d'abrasif à l'unité</td><td>Entrée résidentielle</td><td>25 $ à 60 $ / épandage</td></tr>
    <tr><td>${sLink("deneigement-a-l-unite", "Déneigement à l'unité")}</td><td>Entrée résidentielle, un passage</td><td>50 $ à 110 $ / passage</td></tr>
    <tr><td>${sLink("soufflage-transport-neige", "Soufflage des bancs")}</td><td>Terrain résidentiel</td><td>Au passage ou à l'heure</td></tr>
    <tr><td>${sLink("deneigement-condos-multilogements", "Condos et multilogements")}</td><td>Stationnements partagés</td><td>Sur mesure</td></tr>
    <tr><td>${sLink("deneigement-commercial-levis", "Déneigement commercial")}</td><td>Commerces, bureaux</td><td>Sur mesure</td></tr>
  </tbody>
</table></div>
<p class="source">Prix indicatifs, avant taxes, observés dans la région de Lévis et de Québec. Ils ne constituent pas une offre de service; le prix applicable est celui de votre soumission et de votre contrat.</p>

<h2>Ce qui fait varier le prix de votre déneigement</h2>
<ol>
  <li><strong>La superficie de l'entrée</strong> : longueur, largeur, nombre de voitures. C'est le facteur principal.</li>
  <li><strong>La complexité du terrain</strong> : pente, virage, bordures de pavé uni, fossés, obstacles à contourner.</li>
  <li><strong>L'espace pour la neige</strong> : un terrain sans espace de dépôt peut exiger du soufflage ou du transport.</li>
  <li><strong>Le travail manuel</strong> : nombre de marches, balcons, trottoirs à pelleter à la main.</li>
  <li><strong>Le seuil de déclenchement</strong> et les passages de rattrapage prévus au contrat.</li>
  <li><strong>Le secteur</strong> : l'accès, la densité du circuit et l'exposition au vent.</li>
</ol>

<h2>Exemples de prix par secteur</h2>
<p>Les prix varient selon le type de propriété typique de chaque secteur. Dans le ${zLink("vieux-levis")} et à ${zLink("lauzon")}, les entrées sont souvent plus petites, mais le travail manuel est plus fréquent. À ${zLink("saint-jean-chrysostome")} et ${zLink("saint-nicolas")}, les entrées doubles sont la norme. À ${zLink("saint-etienne-de-lauzon")}, ${zLink("breakeyville")} et ${zLink("saint-joseph-de-la-pointe-de-levy")}, les grandes entrées font grimper le prix, mais l'espace pour la neige ne manque pas.</p>

<h2>Contrat saisonnier ou à l'unité : lequel coûte le moins cher?</h2>
<p>La région de Québec reçoit en moyenne près de 300 cm de neige par hiver (normales climatiques d'Environnement Canada). Avec une vingtaine de passages par saison pour une entrée typique, le contrat saisonnier revient presque toujours moins cher que le déneigement à l'unité pour une résidence principale. Tous les calculs sont dans notre guide ${gLink("contrat-saisonnier-ou-a-l-unite", "contrat saisonnier ou à l'unité")}.</p>

<h2>Méfiez-vous des prix trop bas</h2>
<p>Un prix nettement sous le marché peut cacher un seuil de déclenchement élevé, un banc de charrue non inclus, l'absence d'assurance ou un entrepreneur qui accepte trop d'adresses pour son équipement. Comparez les contrats point par point, pas seulement le montant total. Notre guide ${gLink("choisir-deneigeur-levis", "pour choisir un déneigeur")} vous aide à le faire.</p>`),
};

// ---------- FAQ ----------
const faqAll = [
  { q: "Quels types de propriétés déneigez-vous?", a: "Maisons unifamiliales, jumelés, maisons de ville, duplex et triplex, condos et immeubles à logements, ainsi que commerces, bureaux et petites entreprises, partout à Lévis." },
  { q: "Comment se passe une demande de soumission?", a: "Vous nous appelez ou remplissez le formulaire en indiquant votre secteur et le type de projet. Nous vous rappelons pour confirmer les détails de votre entrée, puis nous vous remettons un prix. La soumission est gratuite et sans obligation." },
  { q: "Quand commence et se termine la saison de déneigement?", a: "La plupart des contrats couvrent la période de la mi-novembre à la mi-avril. Les dates exactes, et ce qui se passe en cas de neige hâtive ou tardive, sont inscrites au contrat." },
  { q: "Qu'est-ce que le seuil de déclenchement?", a: "C'est l'accumulation de neige à partir de laquelle un passage est effectué, souvent autour de 5 cm dans la région. Il est précisé dans votre contrat." },
  { q: "Que se passe-t-il lors d'une tempête qui dure toute la nuit?", a: "Lors des longues tempêtes, des passages supplémentaires sont effectués selon les modalités du contrat. L'ordre de passage dépend du circuit de votre secteur et de l'accumulation." },
  { q: "Est-ce que je dois déplacer ma voiture?", a: "Idéalement, l'entrée devrait être libre lors du passage. Si une voiture est présente, l'opérateur dégage autour, puis l'espace est complété lors d'un passage suivant." },
  { q: "Qui installe les piquets?", a: "Pour les clients sous contrat, les piquets sont installés à l'automne, avant le gel du sol, puis retirés au printemps." },
  { q: "Que faire si mon terrain est endommagé?", a: "Signalez-le rapidement, idéalement avec une photo. Les dommages causés par l'équipement sont pris en charge selon les conditions du contrat et l'assurance responsabilité civile de l'entrepreneur." },
  { q: "Déneigez-vous les toitures?", a: "Non. Le déneigement de toiture est un travail spécialisé qui exige un équipement antichute et une assurance adaptée. Nous nous concentrons sur les entrées, stationnements, escaliers, balcons et trottoirs." },
  { q: "Offrez-vous des rabais ou des promotions?", a: "Non. Nous préférons offrir un prix juste et clair dès la soumission, le même pour tous, sans promotion temporaire ni prix gonflé à rabais." },
  { q: "Comment puis-je payer?", a: "Les modalités de paiement, en un ou plusieurs versements, sont convenues à la signature et inscrites au contrat. Un reçu est remis pour chaque paiement." },
  { q: "Est-ce que mes informations sont partagées?", a: "Vos renseignements servent uniquement à préparer votre soumission et à réaliser les travaux. Consultez notre politique de confidentialité pour tous les détails." },
];
const faqPage = {
  kind: "page",
  path: "/faq/",
  title: "FAQ : déneigement à Lévis | Déneigeur Lévis",
  description: "Réponses aux questions fréquentes sur le déneigement à Lévis : soumission, saison, seuil de déclenchement, piquets, dommages, paiement et plus.",
  h1: "Questions fréquentes sur le déneigement",
  lead: "Tout ce que les propriétaires de Lévis nous demandent avant de signer leur contrat de déneigement. Vous ne trouvez pas votre réponse? Appelez-nous.",
  heroForm: false,
  breadcrumbs: [{ name: "FAQ", path: "/faq/" }],
  faq: faqAll,
  faqTitle: "Toutes vos questions, nos réponses",
  body: prose(`<p>Cette page regroupe les questions les plus fréquentes. Pour des sujets précis, consultez aussi nos pages sur les <a href="/prix-deneigement-levis/">prix du déneigement</a>, le ${sLink("contrat-deneigement-saisonnier", "contrat saisonnier")}, les ${gLink("reglements-deneigement-levis", "règlements de déneigement à Lévis")} et nos <a href="/zones-desservies/">zones desservies</a>.</p>`),
};

// ---------- À propos ----------
const about = {
  kind: "about",
  path: "/a-propos/",
  title: "À propos de Déneigeur Lévis | Déneigement local",
  description: "Déneigeur Lévis : une équipe locale de déneigement résidentiel et commercial. Entrepreneurs assurés, contrats clairs, service dans les 12 secteurs de Lévis.",
  h1: "À propos de Déneigeur Lévis",
  lead: "Un service de déneigement local, pensé pour les gens de Lévis : quelqu'un qui répond, un contrat clair et une entrée dégagée après chaque bordée.",
  heroForm: false,
  breadcrumbs: [{ name: "À propos", path: "/a-propos/" }],
  body: prose(`<h2>Pourquoi Déneigeur Lévis existe</h2>
<p>Trouver un bon déneigeur sur la Rive-Sud est devenu un vrai casse-tête. Listes d'attente en octobre, appels sans retour, contrats vagues, seuils de déclenchement flous, bancs de charrue « pas inclus » découverts en janvier. Déneigeur Lévis est né de ce constat : les propriétaires méritent un service simple, clair et fiable.</p>
<p>Notre promesse est modeste, mais on la tient : répondre au téléphone, expliquer clairement nos prix, écrire toutes les conditions dans le contrat et se présenter après chaque bordée.</p>

<h2>Notre équipe et nos partenaires</h2>
<p>Nos opérations reposent sur des opérateurs d'expérience et des partenaires certifiés qui connaissent les rues de Lévis. Tous travaillent avec de l'équipement professionnel (tracteurs avec souffleuse, souffleuses compactes, équipement d'épandage) entretenu avant chaque saison, et sont assurés en responsabilité civile.</p>
<p>Nos circuits sont organisés par secteur, dans les trois arrondissements de la ville : Desjardins, Les Chutes-de-la-Chaudière-Est et Les Chutes-de-la-Chaudière-Ouest. Cette organisation nous permet de desservir efficacement les ${ZONES.length} secteurs de Lévis.</p>

<h2>Nos valeurs</h2>
<ul>
  <li><strong>La clarté</strong> : un contrat écrit, un prix fixe, aucun frais caché.</li>
  <li><strong>La fiabilité</strong> : des circuits planifiés et du suivi pendant les tempêtes.</li>
  <li><strong>Le respect de votre propriété</strong> : piquets posés à l'automne, équipement adapté aux surfaces, neige jamais poussée dans la rue.</li>
  <li><strong>L'honnêteté</strong> : pas de promesse irréaliste, pas de promotion gonflée, juste un prix juste dès la soumission.</li>
</ul>

<h2>Ce que nous faisons, et ce que nous ne faisons pas</h2>
<p>Nous nous spécialisons dans le déneigement des entrées, stationnements, escaliers, balcons et trottoirs, pour les propriétés résidentielles, les copropriétés et les commerces. Nous ne faisons pas le déneigement de toitures, qui exige un équipement et une assurance spécialisés. Voir tous nos <a href="/services/">services de déneigement</a>.</p>`) +
    pillars([
      { fact: "Assurance responsabilité civile", h: "Des équipes assurées", p: "La preuve d'assurance est disponible sur demande, avant la signature du contrat. C'est la première chose à vérifier avant d'engager un déneigeur, selon l'Office de la protection du consommateur." },
      { fact: "Contrat écrit", h: "Des conditions claires", p: "Dates, seuil de déclenchement, zones incluses, extras, paiement et annulation : tout est écrit avant l'hiver, pour qu'il n'y ait aucune surprise en cours de saison." },
      { fact: "12 secteurs", h: "Une présence dans tout Lévis", p: "Des rues en pente du Vieux-Lévis aux grands terrains de Saint-Étienne-de-Lauzon, nos circuits couvrent les trois arrondissements de la ville." },
    ], "Ce qui nous distingue", "Nos engagements", "bg-ice"),
};

// ---------- Contact ----------
const contact = {
  kind: "contact",
  path: "/contact/",
  title: "Soumission gratuite en déneigement | Déneigeur Lévis",
  description: "Demandez votre soumission gratuite et sans obligation pour le déneigement à Lévis. Appelez le 365-334-9481 ou remplissez le formulaire en ligne.",
  h1: "Demandez votre soumission gratuite",
  lead: "Soumission gratuite et sans obligation pour le déneigement de votre entrée, de votre immeuble ou de votre commerce à Lévis. Appelez-nous ou remplissez le formulaire.",
  checks: ["Soumission gratuite", "Sans obligation", "Contrat écrit et clair", "12 secteurs de Lévis"],
  breadcrumbs: [{ name: "Contact", path: "/contact/" }],
  noCta: true,
  body: container(`<div class="grid-3">
  <div class="card"><span class="icon">${ICONS.phone}</span><h2 style="font-size:1.3rem;margin-bottom:.5rem">Par téléphone</h2><p><a href="tel:${SITE.phoneE164}" data-loc="contact-card" style="font-family:var(--font-heading);font-weight:900;font-size:1.4rem;color:var(--orange)">${SITE.phone}</a></p><p>Le moyen le plus rapide, surtout pendant la saison des tempêtes.</p></div>
  <div class="card"><span class="icon">${ICONS.clock}</span><h2 style="font-size:1.3rem;margin-bottom:.5rem">Heures d'ouverture</h2><dl>${SITE.hours.map((h) => `<dt style="font-weight:700;color:var(--ink)">${h.days}</dt><dd style="margin:0 0 .4rem">${h.label}</dd>`).join("")}</dl></div>
  <div class="card"><span class="icon">${ICONS.pin}</span><h2 style="font-size:1.3rem;margin-bottom:.5rem">Zone de service</h2><p>Nous desservons les 12 secteurs de Lévis, dans les arrondissements Desjardins, Les Chutes-de-la-Chaudière-Est et Les Chutes-de-la-Chaudière-Ouest.</p><p style="margin-top:.5rem"><a href="/zones-desservies/">Voir les zones desservies</a></p></div>
</div>`) +
    prose(`<h2>Comment se passe votre soumission</h2>
${steps([
  ["Votre demande", "Formulaire ou téléphone : indiquez votre secteur, le type de projet et les particularités de votre propriété."],
  ["Notre appel", "Nous vous rappelons pour confirmer les dimensions, les accès et les extras souhaités."],
  ["Votre prix", "Vous recevez un prix clair, sans obligation. Vous prenez le temps de comparer."],
  ["Votre contrat", "Si tout vous convient, le contrat écrit est signé et votre adresse est ajoutée au circuit."],
], false)}
<p style="margin-top:1.5rem">Des questions avant de nous écrire? Consultez la <a href="/faq/">foire aux questions</a> ou les <a href="/prix-deneigement-levis/">prix du déneigement à Lévis</a>.</p>`, "bg-ice"),
};

// ---------- Conseils (index) ----------
const conseils = {
  kind: "page",
  path: "/conseils/",
  title: "Conseils et guides de déneigement | Déneigeur Lévis",
  description: "Guides pratiques sur le déneigement à Lévis : règlements municipaux, contrat saisonnier ou à l'unité, choisir un déneigeur, piquets et préparation de l'entrée.",
  h1: "Conseils et guides de déneigement",
  lead: "Des guides pratiques, rédigés pour les propriétaires de Lévis, pour mieux préparer l'hiver et choisir le bon service de déneigement.",
  heroForm: false,
  breadcrumbs: [{ name: "Conseils", path: "/conseils/" }],
  body: container(`<div class="section-head"><span class="overline">Guides pratiques</span><h2>Nos guides pour l'hiver à Lévis</h2></div>${guidesList()}`),
};

// ---------- Plan du site ----------
const planDuSite = {
  kind: "page",
  path: "/plan-du-site/",
  title: "Plan du site | Déneigeur Lévis",
  description: "Plan du site de Déneigeur Lévis : toutes les pages de services, zones desservies, guides et informations sur le déneigement à Lévis.",
  h1: "Plan du site",
  heroForm: false,
  noCta: true,
  priority: "0.3",
  breadcrumbs: [{ name: "Plan du site", path: "/plan-du-site/" }],
  body: prose(`<h2>Pages principales</h2>
<ul><li><a href="/">Accueil : déneigement résidentiel à Lévis</a></li><li><a href="/services/">Services</a></li><li><a href="/zones-desservies/">Zones desservies</a></li><li><a href="/prix-deneigement-levis/">Prix du déneigement à Lévis</a></li><li><a href="/faq/">FAQ</a></li><li><a href="/a-propos/">À propos</a></li><li><a href="/contact/">Contact et soumission gratuite</a></li></ul>
<h2>Services</h2><ul>${SERVICES.map((s) => `<li><a href="${serviceUrl(s.slug)}">${s.name}</a></li>`).join("")}</ul>
<h2>Zones desservies</h2>${BOROUGHS.map((b) => `<h3>${b.name}</h3><ul>${b.zones.map((k) => { const z = ZONES.find((x) => x.key === k); return `<li><a href="${z.path}">Déneigement ${z.name}</a></li>`; }).join("")}</ul>`).join("")}
<h2>Conseils</h2><ul>${GUIDES.map((g) => `<li><a href="/conseils/${g.slug}/">${g.name}</a></li>`).join("")}</ul>
<h2>Informations légales</h2><ul><li><a href="/politique-de-confidentialite/">Politique de confidentialité</a></li><li><a href="/conditions-utilisation/">Conditions d'utilisation</a></li></ul>`),
};

// ---------- Merci ----------
const merci = {
  kind: "page",
  path: "/merci/",
  title: "Merci pour votre demande | Déneigeur Lévis",
  description: "Votre demande de soumission de déneigement a bien été reçue.",
  h1: `Merci<span id="merci-nom"></span>!`,
  lead: "Votre demande de soumission a bien été reçue. Un membre de notre équipe vous rappellera pour confirmer les détails et vous remettre votre prix, sans obligation.",
  heroForm: false,
  noindex: true,
  noCta: true,
  breadcrumbs: [{ name: "Merci", path: "/merci/" }],
  body: container(`<div class="grid-2"><div class="prose"><h2>Et maintenant?</h2>
<ol><li>Gardez votre téléphone à portée de main : nous vous appellerons au numéro indiqué.</li><li>Préparez les dimensions approximatives de votre entrée (nombre de voitures en longueur et en largeur).</li><li>Notez les extras qui vous intéressent : escaliers, balcon, abrasif.</li></ol>
<p>Vous préférez nous parler tout de suite? Appelez le <a href="tel:${SITE.phoneE164}" data-loc="merci">${SITE.phone}</a>.</p></div>
<div class="aside-box"><h3>En attendant, à lire</h3><ul>${GUIDES.slice(0, 4).map((g) => `<li><a href="/conseils/${g.slug}/">${g.name}</a></li>`).join("")}</ul></div></div>`),
};

// ---------- Confidentialité ----------
const privacy = {
  kind: "legal",
  path: "/politique-de-confidentialite/",
  title: "Politique de confidentialité | Déneigeur Lévis",
  description: "Politique de confidentialité de Déneigeur Lévis : renseignements recueillis, utilisation, communication, témoins, conservation et vos droits.",
  h1: "Politique de confidentialité",
  heroForm: false,
  noCta: true,
  breadcrumbs: [{ name: "Politique de confidentialité", path: "/politique-de-confidentialite/" }],
  body: prose(`<p><em>Dernière mise à jour : ${new Date().toISOString().slice(0, 10)}</em></p>
<p>Déneigeur Lévis (« nous ») accorde une grande importance à la protection de vos renseignements personnels. Cette politique explique quels renseignements nous recueillons sur le site ${SITE.domain}, pourquoi, comment nous les utilisons et quels sont vos droits, conformément à la Loi sur la protection des renseignements personnels dans le secteur privé du Québec.</p>

<h2>1. Responsable de la protection des renseignements personnels</h2>
<p>La personne responsable de la protection des renseignements personnels chez Déneigeur Lévis peut être jointe par courriel à <a href="mailto:${SITE.email}">${SITE.email}</a>. Toute question, demande d'accès, de rectification ou plainte peut lui être adressée.</p>

<h2>2. Renseignements recueillis</h2>
<p>Lorsque vous remplissez notre formulaire de soumission, nous recueillons : votre nom, votre numéro de téléphone, votre ville ou secteur, le type de projet et, si vous le souhaitez, un message. Lorsque vous nous appelez, nous pouvons noter les renseignements nécessaires à votre soumission. Nous ne recueillons aucun renseignement de paiement sur ce site.</p>
<p>Nous recueillons aussi, de façon automatisée, des données de navigation anonymisées ou pseudonymisées au moyen de Google Analytics (voir la section 6).</p>

<h2>3. Fins de la collecte</h2>
<p>Vos renseignements servent uniquement à : communiquer avec vous au sujet de votre demande, préparer votre soumission, planifier et réaliser les services de déneigement demandés, assurer le suivi de votre dossier et améliorer notre site.</p>

<h2>4. Communication de vos renseignements</h2>
<p>Afin de préparer votre soumission et de réaliser les travaux, vos renseignements peuvent être communiqués aux membres de notre équipe et aux entrepreneurs partenaires qui exécutent les services de déneigement dans votre secteur. Ces personnes n'utilisent vos renseignements qu'à ces fins. Nous ne vendons pas vos renseignements à des fins de publicité ou de sollicitation par des tiers non liés à votre demande.</p>
<p>Les formulaires du site sont transmis par le service FormSubmit, et les statistiques de visite sont traitées par Google Analytics. Ces fournisseurs peuvent héberger des données à l'extérieur du Québec, notamment aux États-Unis. Nous choisissons des fournisseurs reconnus et limitons les renseignements transmis au strict nécessaire.</p>

<h2>5. Consentement</h2>
<p>En soumettant le formulaire ou en nous appelant, vous consentez à ce que vos renseignements soient utilisés aux fins décrites ci-dessus. Vous pouvez retirer votre consentement en tout temps en nous écrivant à <a href="mailto:${SITE.email}">${SITE.email}</a>.</p>

<h2>6. Témoins (cookies) et Google Analytics</h2>
<p>Notre site utilise Google Analytics 4 pour mesurer l'audience : pages consultées, provenance des visites, type d'appareil, clics sur le numéro de téléphone et envois de formulaire. Ces données sont statistiques et ne servent pas à vous identifier personnellement. Vous pouvez refuser ou supprimer les témoins dans les paramètres de votre navigateur, ou installer le module de désactivation de Google Analytics offert par Google.</p>

<h2>7. Conservation et sécurité</h2>
<p>Vos renseignements sont conservés le temps nécessaire aux fins pour lesquelles ils ont été recueillis, puis détruits de façon sécuritaire. Une demande de soumission non suivie d'un contrat est conservée au plus deux ans. Nous prenons des mesures raisonnables pour protéger vos renseignements contre l'accès non autorisé, la perte ou l'utilisation abusive.</p>

<h2>8. Vos droits</h2>
<p>Vous avez le droit d'accéder à vos renseignements personnels, d'en demander la rectification s'ils sont inexacts, de retirer votre consentement et de demander leur suppression, sous réserve des obligations légales. Pour exercer ces droits, écrivez à <a href="mailto:${SITE.email}">${SITE.email}</a>. Si vous n'êtes pas satisfait de notre réponse, vous pouvez vous adresser à la Commission d'accès à l'information du Québec.</p>

<h2>9. Modifications</h2>
<p>Nous pouvons modifier cette politique pour refléter l'évolution de nos pratiques ou de la loi. La date de mise à jour figure en haut de la page.</p>`),
};

// ---------- Conditions ----------
const terms = {
  kind: "legal",
  path: "/conditions-utilisation/",
  title: "Conditions d'utilisation | Déneigeur Lévis",
  description: "Conditions d'utilisation du site de Déneigeur Lévis : nature des informations, prix indicatifs, exécution des services, responsabilité et droit applicable.",
  h1: "Conditions d'utilisation",
  heroForm: false,
  noCta: true,
  breadcrumbs: [{ name: "Conditions d'utilisation", path: "/conditions-utilisation/" }],
  body: prose(`<p><em>Dernière mise à jour : ${new Date().toISOString().slice(0, 10)}</em></p>
<p>En utilisant le site ${SITE.domain}, vous acceptez les présentes conditions d'utilisation.</p>

<h2>1. Nature des informations</h2>
<p>Les informations publiées sur ce site, y compris les guides et les résumés de règlements municipaux, sont fournies à titre informatif. Elles ne constituent pas un avis juridique. Les règlements peuvent changer : vérifiez toujours auprès de la Ville de Lévis ou de l'autorité compétente.</p>

<h2>2. Prix indicatifs</h2>
<p>Les prix et fourchettes de prix affichés sont indicatifs, avant taxes, et ne constituent pas une offre de service. Seuls le prix inscrit à votre soumission et les conditions de votre contrat écrit s'appliquent.</p>

<h2>3. Soumissions et exécution des services</h2>
<p>Une demande de soumission n'engage ni vous ni nous. Les services de déneigement sont réalisés par l'équipe de Déneigeur Lévis ou par des entrepreneurs partenaires qualifiés et assurés, selon votre secteur. Les conditions applicables à chaque service (dates, seuil de déclenchement, surfaces, prix, paiement, responsabilité et annulation) sont celles du contrat écrit signé avec l'entreprise qui réalise les travaux.</p>

<h2>4. Limitation de responsabilité</h2>
<p>Nous faisons les efforts raisonnables pour que le contenu du site soit exact et à jour, sans toutefois le garantir. Dans la mesure permise par la loi, nous ne pouvons être tenus responsables des dommages découlant de l'utilisation du site ou de l'impossibilité de l'utiliser.</p>

<h2>5. Propriété intellectuelle</h2>
<p>Le contenu du site (textes, logo, illustrations, mise en page) est protégé par le droit d'auteur. Toute reproduction sans autorisation écrite est interdite.</p>

<h2>6. Liens externes</h2>
<p>Le site peut contenir des liens vers des sites de tiers. Nous ne sommes pas responsables de leur contenu ni de leurs pratiques.</p>

<h2>7. Renseignements personnels</h2>
<p>La collecte et l'utilisation de vos renseignements sont décrites dans notre <a href="/politique-de-confidentialite/">politique de confidentialité</a>.</p>

<h2>8. Droit applicable</h2>
<p>Les présentes conditions sont régies par les lois de la province de Québec et les lois fédérales du Canada qui s'y appliquent. Tout litige relève des tribunaux du district judiciaire compétent au Québec.</p>

<h2>9. Nous joindre</h2>
<p>Pour toute question : <a href="tel:${SITE.phoneE164}" data-loc="terms">${SITE.phone}</a>.</p>`),
};

// ---------- 404 ----------
const notFound = {
  kind: "page",
  path: "/404.html",
  title: "Page introuvable | Déneigeur Lévis",
  description: "La page demandée est introuvable.",
  h1: "Oups, cette page est introuvable",
  lead: "Elle a peut-être été déplacée, ou elle est enfouie sous un banc de neige. Voici quelques liens utiles.",
  heroForm: false,
  noindex: true,
  breadcrumbs: [{ name: "Page introuvable", path: "/404.html" }],
  body: container(`<div class="section-head"><h2>Nos services de déneigement</h2></div>${servicesGrid()}<p style="margin-top:2rem"><a href="/" class="btn btn-outline">Retour à l'accueil</a></p>`),
};

export default [servicesHub, zonesHub, prix, faqPage, about, contact, conseils, planDuSite, merci, privacy, terms, notFound];
