import { SITE, pillars, serviceUrl, sLink, gLink, zLink, zone, zoneChips, callBox, steps } from "../components.mjs";
import { SERVICES, ROUTES } from "../data.mjs";

const safetySteps = (road) => steps([
  ["Se ranger", `Quittez la voie de circulation dès que possible : accotement le plus large, sortie ou halte. Sur ${road}, évitez de vous arrêter dans une courbe ou au sommet d'une côte.`],
  ["Être visible", "Allumez vos feux de détresse. La nuit, laissez les feux de position allumés. Si vous avez un triangle et que c'est sécuritaire, placez-le loin derrière le véhicule."],
  ["Rester à l'abri", "Restez dans le véhicule, ceinture bouclée, sauf s'il y a de la fumée ou un risque d'incendie. Si vous devez sortir, faites-le du côté opposé à la circulation et éloignez-vous derrière la glissière."],
  ["Appeler", `En cas de blessés, de fumée ou de véhicule qui bloque une voie : 9-1-1. Pour le remorquage : ${SITE.phone}, en donnant la direction, la sortie la plus proche ou une borne kilométrique.`],
]);

const corridor = `<div class="callout"><strong>Le corridor de sécurité, c'est la loi.</strong> Depuis 2012, le Code de la sécurité routière oblige les conducteurs à ralentir et, si possible, à changer de voie lorsqu'ils approchent d'un véhicule d'urgence, d'une dépanneuse ou d'un véhicule de surveillance immobilisé avec ses gyrophares allumés. C'est ce qui protège les remorqueurs qui interviennent pour vous, et vous-même lorsque vous êtes en panne sur l'accotement.</div>`;

function page(o) {
  const r = ROUTES.find((x) => x.key === o.key);
  const body = `<section><div class="container layout-aside"><div class="prose">
${o.intro}
<h2>Le tronçon que nous desservons</h2>
${o.section}
<h2>En panne sur ${o.sur} : les bons réflexes</h2>
${safetySteps(o.sur)}
${corridor}
<h2>Accident sur ${o.sur}</h2>
${o.accident}
<h2>Nos services sur ${o.sur}</h2>
<ul>
${o.focus.map((s) => { const sv = SERVICES.find((x) => x.slug === s); return `  <li><a href="${serviceUrl(s)}"><strong>${sv.name}</strong></a> : ${sv.short}</li>`; }).join("\n")}
</ul>
<h2>Municipalités le long de ${o.sur}</h2>
${zoneChips(o.towns)}
</div>
<aside class="aside-sticky" aria-label="Liens utiles">
  ${callBox("aside-route", `En panne sur ${o.sur}?`, "Ligne ouverte 24 h sur 24. En cas de danger ou de blessés, composez d'abord le 9-1-1.")}
  <div class="aside-box"><h2>${r.name} en bref</h2><ul>${o.facts.map((f) => `<li style="padding:.45rem 0">${f}</li>`).join("")}</ul></div>
  <div class="aside-box"><h2>Autres axes routiers</h2><ul>${ROUTES.filter((x) => x.key !== o.key).map((x) => `<li><a href="${x.path}">Remorquage ${x.name}</a></li>`).join("")}</ul></div>
</aside>
</div></section>
${pillars([
  { fact: "Interventions routières", h: "Des remorqueurs habitués à la route", p: `Intervenir sur ${o.sur} demande de la méthode : positionnement de la dépanneuse, gyrophares, chargement rapide et sécuritaire. Nos partenaires certifiés en ont l'habitude.` },
  { fact: "24 h sur 24, 7 jours sur 7", h: "Jour et nuit, beau temps mauvais temps", p: "Les pannes sur la route surviennent à toute heure, souvent au pire moment. Notre ligne répond en tout temps, fins de semaine et jours fériés compris." },
  { fact: "Destination de votre choix", h: "Vous choisissez le garage", p: "Une fois votre véhicule chargé, il est livré au garage, au concessionnaire ou à l'endroit que vous choisissez, à Joliette ou ailleurs dans la région." },
], `Remorquage sur ${o.sur} avec Remorquage Joliette`)}`;
  return {
    kind: "route",
    path: r.path,
    title: o.title,
    description: o.description,
    h1: o.h1,
    lead: o.lead,
    checks: o.checks,
    formVille: o.formVille || "",
    breadcrumbs: [{ name: "Zones desservies", path: "/zones-desservies/" }, { name: r.name, path: r.path }],
    service: { name: o.h1, serviceType: "Remorquage et assistance routière sur la route", description: o.description, areaServed: o.area },
    faq: o.faq,
    faqTitle: `Questions sur le remorquage sur ${o.sur}`,
    ctaTitle: `En panne sur ${o.sur}?`,
    ctaText: `Appelez-nous au ${SITE.phone}, 24 heures sur 24. En cas de danger ou de blessés, composez d'abord le 9-1-1.`,
    body,
  };
}

export default [
  page({
    key: "autoroute-40",
    sur: "l'autoroute 40",
    title: "Remorquage autoroute 40 (Lanaudière) | 24 h sur 24",
    description: "Panne ou accident sur l'autoroute 40 entre Repentigny, Lavaltrie et Berthierville? Remorquage et dépannage 24/7. Appelez le 450-915-0067.",
    h1: "Remorquage sur l'autoroute 40 dans Lanaudière",
    lead: "Panne, crevaison ou accident sur l'autoroute 40 entre Repentigny, Lavaltrie et Berthierville? On organise votre remorquage ou votre dépannage, 24 heures sur 24, avec des remorqueurs habitués à la circulation autoroutière.",
    checks: ["De Repentigny à Berthierville", "Échangeurs de Lavaltrie (sortie 122) et de Berthierville (sortie 144)", "Autos, VUS, camions et VR", "Service 24 h sur 24, 7 jours sur 7"],
    formVille: "Sur l'autoroute 40 ou 31",
    area: ["Autoroute 40, Lanaudière", "Lavaltrie", "Berthierville", "Lanoraie"],
    facts: ["Autoroute Félix-Leclerc, rive nord du Saint-Laurent", "Sortie 122 : échangeur avec l'A-31 vers Joliette", "Sortie 144 : Berthierville et la route 158", "Grand axe Montréal – Trois-Rivières – Québec"],
    towns: ["l-assomption", "lavaltrie", "berthierville", "sainte-elisabeth", "saint-thomas"],
    focus: ["remorquage-accident", "remorquage-automobile", "remorquage-lourd", "changement-pneu-crevaison", "livraison-essence"],
    intro: `<p>L'autoroute 40 est l'épine dorsale de la rive nord du Saint-Laurent. Dans Lanaudière, elle longe le fleuve de Repentigny jusqu'à Berthierville, en passant par Lavaltrie, où l'autoroute 31 s'en détache à la sortie 122 pour monter vers Joliette. Voitures, camions lourds, autocars et véhicules récréatifs y circulent à haute vitesse, de jour comme de nuit.</p>
<p>Une panne ou un accident sur l'autoroute 40 est toujours stressant : la circulation passe tout près, l'accotement est parfois étroit et, l'hiver, la visibilité peut chuter en quelques secondes. Le remorquage sur l'autoroute 40 se fait avec des remorqueurs habitués à ces conditions.</p>`,
    section: `<div class="table-wrap"><table>
  <thead><tr><th>Secteur</th><th>Repères</th></tr></thead>
  <tbody>
    <tr><td>L'Assomption et Repentigny</td><td>Entrée de Lanaudière, accès vers la route 343 et L'Assomption</td></tr>
    <tr><td>Lavaltrie</td><td>Sortie 122, échangeur avec l'autoroute 31 vers Joliette</td></tr>
    <tr><td>Lanoraie</td><td>Tronçon rural le long du fleuve, exposé au vent</td></tr>
    <tr><td>Berthierville</td><td>Sortie 144, route 158 vers Joliette et la traverse de Sorel-Tracy</td></tr>
  </tbody>
</table></div>
<p>Donnez-nous la direction (est vers Québec ou ouest vers Montréal), le numéro de la sortie la plus proche ou la borne kilométrique la plus récente : c'est ce qui permet au remorqueur de vous trouver du premier coup.</p>
<p class="source">À noter : sur certains tronçons ou lors de certains événements, les autorités peuvent désigner elles-mêmes le remorqueur. Suivez alors les consignes des policiers.</p>`,
    accident: `<p>Après une collision sur l'autoroute 40, la priorité est la sécurité. Composez le 9-1-1 s'il y a des blessés, un risque d'incendie ou si un véhicule bloque une voie. Si les véhicules peuvent être déplacés et que personne n'est blessé, rangez-les sur l'accotement, remplissez le constat amiable et prenez des photos. Pour le ${sLink("remorquage-accident", "remorquage après accident")}, appelez-nous : on vous donne le prix et vous choisissez la destination. Tous les détails sont dans notre guide ${gLink("que-faire-apres-accident-auto", "Accident d'auto : que faire dans les 30 premières minutes")}.</p>`,
    faq: [
      { q: "Est-ce que je dois rester dans mon auto sur l'accotement de l'autoroute 40?", a: "En règle générale, oui : restez dans le véhicule avec la ceinture bouclée, feux de détresse allumés, car c'est là que vous êtes le mieux protégé en cas d'impact. Sortez seulement s'il y a de la fumée ou un risque d'incendie, du côté opposé à la circulation, et éloignez-vous derrière la glissière." },
      { q: "Remorquez-vous les camions lourds en panne sur l'autoroute 40?", a: `Oui, avec des dépanneuses de forte capacité. Donnez-nous la configuration du camion, son chargement et sa position exacte. Voir le ${sLink("remorquage-lourd", "remorquage lourd")}.` },
      { q: "Pouvez-vous amener mon véhicule vers Joliette depuis l'autoroute 40?", a: "Oui, par l'autoroute 31 depuis la sortie 122, ou par la route 158 depuis la sortie 144. Vous pouvez aussi choisir un garage de Repentigny, de Lavaltrie ou de Berthierville." },
    ],
  }),

  page({
    key: "autoroute-31",
    sur: "l'autoroute 31",
    title: "Remorquage autoroute 31 (Joliette – Lavaltrie) | 24/7",
    description: "Panne ou accident sur l'autoroute 31 entre Lavaltrie et Joliette? Remorquage, plateau et dépannage 24 h sur 24. Soumission gratuite au 450-915-0067.",
    h1: "Remorquage sur l'autoroute 31, entre Lavaltrie et Joliette",
    lead: "L'autoroute 31 est le lien rapide entre Joliette et l'autoroute 40. En cas de panne, de crevaison ou d'accident sur ses 14 kilomètres, on organise votre remorquage, 24 heures sur 24.",
    checks: ["Les 14 km entre l'A-40 (sortie 122) et Joliette", "Remorquage après accident", "Crevaison, panne sèche, batterie", "Livraison au garage de votre choix à Joliette"],
    formVille: "Sur l'autoroute 40 ou 31",
    area: ["Autoroute 31, Lanaudière", "Joliette", "Lavaltrie", "Saint-Paul"],
    facts: ["Autoroute Antonio-Barrette", "Environ 14 km de longueur", "Relie l'A-40 (sortie 122, Lavaltrie) à Joliette", "Partage son tracé avec la route 131"],
    towns: ["lavaltrie", "saint-paul", "crabtree", "saint-thomas", "notre-dame-des-prairies"],
    focus: ["remorquage-accident", "remorquage-automobile", "remorquage-plateau", "changement-pneu-crevaison", "survoltage-batterie"],
    intro: `<p>L'autoroute 31, aussi appelée autoroute Antonio-Barrette en l'honneur du premier ministre du Québec originaire de Joliette, relie l'autoroute 40 à Lavaltrie (sortie 122) au centre de Joliette sur environ 14 kilomètres. Elle partage son tracé avec la route 131. C'est le chemin qu'empruntent chaque jour des milliers de navetteurs entre Joliette, Repentigny et Montréal.</p>
<p>Courte mais rapide, l'autoroute 31 concentre les pannes du matin et du retour du travail, les crevaisons et les accrochages aux bretelles. Le remorquage sur l'autoroute 31 est l'un de nos appels les plus fréquents.</p>`,
    section: `<p>Nous intervenons sur toute la longueur de l'autoroute 31, dans les deux directions :</p>
<ul>
  <li><strong>À l'extrémité sud</strong>, près de l'échangeur avec l'autoroute 40 à Lavaltrie.</li>
  <li><strong>Sur le tronçon central</strong>, en terrain agricole ouvert, exposé au vent et à la poudrerie l'hiver.</li>
  <li><strong>À l'entrée de Joliette</strong>, où l'autoroute rejoint le réseau urbain et les grands boulevards.</li>
</ul>
<p>Indiquez la direction (vers Joliette ou vers l'autoroute 40) et un repère : sortie, pont d'étagement, borne kilométrique ou commerce visible.</p>`,
    accident: `<p>Les collisions sur l'autoroute 31 surviennent souvent aux heures de pointe, près des bretelles, ou l'hiver quand la chaussée devient glacée dans les secteurs dégagés. S'il y a des blessés ou un danger, composez d'abord le 9-1-1. Sinon, déplacez les véhicules sur l'accotement si c'est possible, remplissez le constat amiable et appelez-nous pour le ${sLink("remorquage-accident", "remorquage après accident")}. Votre véhicule peut être livré en quelques kilomètres à un garage ou à un carrossier de Joliette.</p>`,
    faq: [
      { q: "Mon auto est en panne sur l'autoroute 31 : combien coûte le remorquage jusqu'à Joliette?", a: `Comme l'autoroute 31 ne fait qu'environ 14 kilomètres, le remorquage vers un garage de Joliette reste généralement dans la fourchette d'un remorquage local. Le prix exact vous est donné avant l'intervention. Voir notre <a href="/prix-remorquage-joliette/">guide des prix</a>.` },
      { q: "Pouvez-vous changer mon pneu sur l'accotement de l'autoroute 31?", a: `Oui, si c'est sécuritaire. Si la roue à changer est du côté de la circulation ou si l'accotement est trop étroit, le véhicule sera plutôt chargé et amené dans un endroit sûr. Voir le ${sLink("changement-pneu-crevaison", "changement de pneu")}.` },
      { q: "Mon VUS AWD est en panne sur l'autoroute 31 : faut-il un plateau?", a: `Oui, dans la plupart des cas. Mentionnez-le lors de votre appel. Voir le ${sLink("remorquage-plateau", "remorquage sur plateau")}.` },
    ],
  }),

  page({
    key: "route-158",
    sur: "la route 158",
    title: "Remorquage route 158 (Saint-Jacques – Berthierville)",
    description: "Panne, accident ou sortie de route sur la route 158 entre Saint-Jacques, Joliette et Berthierville? Remorquage 24 h sur 24 au 450-915-0067.",
    h1: "Remorquage sur la route 158, de Saint-Jacques à Berthierville",
    lead: "La route 158 traverse Lanaudière d'ouest en est en passant par le cœur de Joliette. Panne, accident ou sortie de route, on organise votre remorquage 24 heures sur 24.",
    checks: ["De Saint-Jacques à Berthierville par Joliette", "Accidents, sorties de route et pannes", "Autos, VUS, camions et machinerie", "Service 24 h sur 24, 7 jours sur 7"],
    area: ["Route 158, Lanaudière", "Joliette", "Saint-Jacques", "Saint-Thomas", "Berthierville"],
    facts: ["Relie Lachute à Saint-Ignace-de-Loyola", "Traverse Saint-Jacques, Joliette, Saint-Thomas et Berthierville", "Chaussées divisées dans Joliette", "Rejoint l'A-40 et la route 138 à Berthierville"],
    towns: ["saint-jacques", "crabtree", "saint-thomas", "berthierville", "saint-paul"],
    focus: ["remorquage-accident", "sortie-de-fosse-desenlisement", "remorquage-automobile", "remorquage-lourd", "transport-machinerie"],
    intro: `<p>La route 158 est l'un des grands axes est-ouest du sud du Québec. Partie de Lachute, elle traverse Saint-Jérôme, Saint-Lin–Laurentides et Saint-Esprit avant d'entrer dans Lanaudière par Saint-Alexis et Saint-Jacques. Elle passe ensuite au cœur de Joliette, où elle devient une route à chaussées divisées, puis poursuit vers Saint-Thomas et Berthierville, où elle rejoint l'autoroute 40 et la route 138, avant de se terminer à Saint-Ignace-de-Loyola, au quai de la traverse vers Sorel-Tracy.</p>
<p>Dans notre secteur, la route 158 combine circulation urbaine à Joliette, longs tronçons agricoles et intersections avec les rangs : des conditions très différentes d'un kilomètre à l'autre.</p>`,
    section: `<div class="table-wrap"><table>
  <thead><tr><th>Tronçon</th><th>Ce qu'il faut savoir</th></tr></thead>
  <tbody>
    <tr><td>Saint-Jacques</td><td>Croisement avec la route 341, secteur agricole à l'ouest de Joliette</td></tr>
    <tr><td>Joliette</td><td>Chaussées divisées, circulation urbaine et commerciale, nombreux feux de circulation</td></tr>
    <tr><td>Saint-Thomas</td><td>Tronçon agricole ouvert, exposé à la poudrerie l'hiver</td></tr>
    <tr><td>Berthierville</td><td>Jonction avec l'autoroute 40 (sortie 144) et la route 138</td></tr>
  </tbody>
</table></div>`,
    accident: `<p>Sur la route 158, les accidents surviennent surtout aux intersections avec les rangs et les entrées de commerces, lors des dépassements sur les tronçons à deux voies et l'hiver, dans les secteurs dégagés où la poudrerie réduit la visibilité. Composez le 9-1-1 en cas de blessés ou de danger. Pour le ${sLink("remorquage-accident", "remorquage après accident")} ou une ${sLink("sortie-de-fosse-desenlisement", "sortie de fossé")}, appelez-nous en indiquant la municipalité et un repère.</p>`,
    faq: [
      { q: "Mon auto a pris le fossé sur la route 158 près de Saint-Thomas : que faire?", a: `Restez dans le véhicule, ceinture bouclée, feux de détresse allumés, sauf en cas de fumée. Si l'échappement est bloqué par la neige, coupez le moteur. Appelez-nous avec un repère précis. Voir ${gLink("voiture-dans-le-fosse-hiver", "notre guide sur les sorties de fossé")}.` },
      { q: "Intervenez-vous sur la route 158 à l'ouest de Saint-Jacques?", a: "Oui, selon la situation, vers Saint-Alexis et Saint-Esprit notamment. Appelez-nous avec votre position : on vous confirme l'intervention et le prix." },
      { q: "Pouvez-vous transporter de l'équipement agricole le long de la 158?", a: `Oui, pour l'équipement léger et compact, sur plateau. Voir notre service de ${sLink("transport-machinerie", "transport de machinerie")}.` },
    ],
  }),

  page({
    key: "route-131",
    sur: "la route 131",
    title: "Remorquage route 131 (Joliette – Saint-Jean-de-Matha)",
    description: "Panne, accident ou VR immobilisé sur la route 131 entre Joliette, Saint-Félix-de-Valois et Saint-Jean-de-Matha? Remorquage 24/7 au 450-915-0067.",
    h1: "Remorquage sur la route 131, de Joliette vers le nord",
    lead: "La route 131 relie Joliette au nord de Lanaudière, par Notre-Dame-des-Prairies, Notre-Dame-de-Lourdes, Saint-Félix-de-Valois et Saint-Jean-de-Matha. Panne, accident ou VR immobilisé : remorquage 24 heures sur 24.",
    checks: ["De Joliette à Saint-Jean-de-Matha et au-delà", "Autos, VUS, VR et roulottes", "Sorties de route et désenlisement", "Service 24 h sur 24, 7 jours sur 7"],
    area: ["Route 131, Lanaudière", "Notre-Dame-des-Prairies", "Notre-Dame-de-Lourdes", "Saint-Félix-de-Valois", "Saint-Jean-de-Matha"],
    facts: ["Environ 125 km de Lavaltrie à Saint-Michel-des-Saints", "Partage le tracé de l'A-31 jusqu'à Joliette", "Traverse Notre-Dame-des-Prairies, Notre-Dame-de-Lourdes, Saint-Félix-de-Valois et Saint-Jean-de-Matha", "Chevauche la route 348 près de Saint-Félix-de-Valois"],
    towns: ["notre-dame-des-prairies", "notre-dame-de-lourdes", "saint-felix-de-valois", "saint-jean-de-matha", "lavaltrie"],
    focus: ["remorquage-automobile", "remorquage-vr-roulotte", "sortie-de-fosse-desenlisement", "remorquage-accident", "livraison-essence"],
    intro: `<p>La route 131 est la grande voie du nord de Lanaudière. Elle part de Lavaltrie, emprunte le tracé de l'autoroute 31 jusqu'à Joliette, puis monte vers Notre-Dame-des-Prairies, Notre-Dame-de-Lourdes, Saint-Félix-de-Valois, Saint-Jean-de-Matha, Sainte-Émélie-de-l'Énergie, Saint-Zénon et Saint-Michel-des-Saints, sur environ 125 kilomètres. Le ministère des Transports a d'ailleurs mené une consultation publique sur la mobilité et la sécurité de ses usagers dans Lanaudière.</p>
<p>Navetteurs, camions forestiers, villégiateurs, roulottes et motos se partagent la chaussée, surtout les fins de semaine d'été. L'hiver, le relief et les tronçons boisés rendent la route plus exigeante à mesure qu'on monte vers le nord.</p>`,
    section: `<div class="table-wrap"><table>
  <thead><tr><th>Tronçon</th><th>Ce qu'il faut savoir</th></tr></thead>
  <tbody>
    <tr><td>Joliette et Notre-Dame-des-Prairies</td><td>Secteur urbain et commercial, circulation dense aux heures de pointe</td></tr>
    <tr><td>Notre-Dame-de-Lourdes</td><td>Tronçon agricole, exposé au vent et à la poudrerie</td></tr>
    <tr><td>Saint-Félix-de-Valois</td><td>Carrefour avec la route 348, commerces et services</td></tr>
    <tr><td>Saint-Jean-de-Matha et au nord</td><td>Relief, forêt, stations-service plus espacées</td></tr>
  </tbody>
</table></div>`,
    accident: `<p>Sur la route 131, les collisions se produisent souvent lors des dépassements, aux intersections des villages et, l'hiver, dans les courbes et les côtes au nord de Saint-Félix-de-Valois. Composez le 9-1-1 en cas de blessés ou de danger. Pour le ${sLink("remorquage-accident", "remorquage après accident")}, appelez-nous : votre véhicule peut être amené à un garage de Saint-Félix-de-Valois, de Joliette ou à la destination de votre choix.</p>`,
    faq: [
      { q: "Mon VR est en panne sur la route 131 : pouvez-vous le remorquer?", a: `Oui, selon la classe et le poids du véhicule. Précisez-les lors de votre appel. Voir le ${sLink("remorquage-vr-roulotte", "remorquage de VR et de roulotte")}.` },
      { q: "Intervenez-vous au nord de Saint-Jean-de-Matha?", a: "Oui, selon la situation, vers Sainte-Émélie-de-l'Énergie et plus loin. Appelez-nous avec votre position exacte : on vous confirme l'intervention et le prix avant le départ." },
      { q: "Je suis en panne d'essence sur la 131 : que faire?", a: `Rangez-vous hors de la circulation, allumez vos feux de détresse et appelez-nous en précisant le type de carburant. Voir notre service de ${sLink("livraison-essence", "livraison d'essence")}.` },
    ],
  }),
];
