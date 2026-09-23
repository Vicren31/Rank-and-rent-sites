import { SITE, ICONS, pillars, serviceUrl, sLink, gLink, zLink, zone, zoneChips, serviceChips } from "../components.mjs";
import { SERVICES } from "../data.mjs";

function page(o) {
  const z = zone(o.key);
  const n = z.name;
  const a = o.a || `à ${n}`;
  const de = o.de || `de ${n}`;
  const focus = o.focus || ["deneigement-residentiel-levis", "contrat-deneigement-saisonnier", "deneigement-manuel-balcons-escaliers", "epandage-abrasif-deglacage"];
  const body = `<section><div class="container layout-aside"><div class="prose">
${o.intro}
<h2>Ce qui rend le déneigement particulier ${a}</h2>
${o.local}
<h2>Nos services de déneigement ${a}</h2>
<p>${o.servicesIntro}</p>
<ul>
${focus.map((s) => { const sv = SERVICES.find((x) => x.slug === s); return `  <li><a href="${serviceUrl(s)}"><strong>${sv.name}</strong></a> : ${sv.short}</li>`; }).join("\n")}
</ul>
<p>Nous offrons aussi ${a} : ${SERVICES.filter((s) => !focus.includes(s.slug)).map((s) => `<a href="${serviceUrl(s.slug)}">${s.nav.toLowerCase()}</a>`).join(", ")}.</p>
<h2>Prix du déneigement ${a}</h2>
${o.price}
<h2>Secteurs voisins desservis</h2>
<p>Nos équipes circulent aussi dans les secteurs voisins ${de} :</p>
${zoneChips(o.neighbors)}
<p style="margin-top:1rem">Voir toutes nos <a href="/zones-desservies/">zones desservies à Lévis</a>.</p>
</div>
<aside class="aside-sticky" aria-label="Liens utiles">
  <div class="aside-box"><h2>Arrondissement ${z.borough}</h2><p>${o.nom ? o.nom[0].toUpperCase() + o.nom.slice(1) : n} fait partie de l'arrondissement ${z.borough} de la Ville de Lévis.</p></div>
  <div class="aside-box"><h2>Nos services</h2><ul>${SERVICES.map((s) => `<li><a href="${serviceUrl(s.slug)}">${s.nav}</a></li>`).join("")}</ul></div>
  <div class="aside-box" style="background:var(--navy);border-color:var(--navy);color:#DCE7F3"><h2 style="color:#fff">Soumission ${a}</h2><p>Gratuite et sans obligation.</p><p style="margin-top:1rem"><a href="tel:${SITE.phoneE164}" data-loc="aside-zone" class="btn btn-primary" style="width:100%">${ICONS.phone}${SITE.phone}</a></p></div>
</aside>
</div></section>
${pillars([
  { fact: "Circuits par secteur", h: `Une équipe qui connaît ${o.nom || n}`, p: o.pillarLocal },
  { fact: "Assurance responsabilité civile", h: "Entrepreneurs assurés", p: `Les équipes qui déneigent ${a} sont assurées en responsabilité civile. Une preuve d'assurance peut vous être remise avant la signature, comme le recommande l'Office de la protection du consommateur.` },
  { fact: "Contrat écrit", h: "Des conditions claires", p: "Seuil de déclenchement, dates de la saison, zones incluses, extras et modalités de paiement : tout est écrit dans le contrat, avant la première neige. Aucun frais caché." },
], `Pourquoi choisir Déneigeur Lévis ${a}`)}`;
  return {
    kind: "zone",
    path: z.path,
    title: o.title || `Déneigement ${n} | Déneigeur Lévis`,
    description: o.description,
    h1: `Déneigement ${a}`,
    lead: o.lead,
    checks: o.checks || ["Entrée de cour et stationnement", "Balcons, escaliers et trottoirs", "Épandage d'abrasif", "Soumission gratuite et sans obligation"],
    formVille: n,
    breadcrumbs: [{ name: "Zones desservies", path: "/zones-desservies/" }, { name: n, path: z.path }],
    service: { name: `Déneigement ${a}`, serviceType: "Déneigement résidentiel et commercial", description: o.description, areaServed: [`${n}, Lévis`] },
    faq: o.faq,
    faqTitle: `Questions sur le déneigement ${a}`,
    ctaTitle: `Votre déneigement ${a}, réglé pour l'hiver`,
    ctaText: `Soumission gratuite et sans obligation pour les résidents et entreprises ${de}. Appelez-nous ou remplissez le formulaire.`,
    body,
  };
}

export default [
  page({
    key: "vieux-levis",
    a: "dans le Vieux-Lévis",
    de: "du Vieux-Lévis",
    nom: "le Vieux-Lévis",
    description: "Déneigement dans le Vieux-Lévis : entrées étroites, rues en pente, escaliers et balcons de plex. Entrepreneurs assurés. Soumission gratuite au 365-334-9481.",
    lead: "Rues en pente, entrées étroites, plex avec escaliers extérieurs : le déneigement dans le Vieux-Lévis demande de la précision. Notre équipe connaît le quartier.",
    intro: `<p>Vous cherchez un service de déneigement dans le Vieux-Lévis? Le quartier historique, perché sur la falaise face à Québec, a un charme unique, mais ses rues étroites et ses terrains serrés en font l'un des secteurs les plus exigeants de Lévis à déneiger. Nous y déneigeons entrées de cour, stationnements de plex, escaliers et balcons tout l'hiver.</p>`,
    local: `<p>Le Vieux-Lévis s'est développé autour de la traverse Québec-Lévis et de la falaise qui domine le fleuve. Résultat : beaucoup de rues en pente, comme la côte du Passage, des maisons anciennes construites près de la rue et des entrées souvent étroites, parfois partagées avec le voisin. Il reste peu d'espace pour empiler la neige, et les bancs grossissent vite.</p>
<p>On y trouve aussi une forte proportion de duplex et de triplex avec escaliers extérieurs et galeries en façade. Pour les locataires comme pour les propriétaires, ce sont ces escaliers qui posent le plus de risques l'hiver. Enfin, de nombreux résidents stationnent dans la rue : avec l'interdiction de stationner de 23 h à 7 h lors des opérations de déneigement de la Ville, une entrée dégagée à temps est précieuse.</p>
<p>Notre approche dans le secteur : souffleuse compacte pour les entrées étroites, pelletage manuel pour les escaliers et les balcons, abrasif sur les entrées en pente et, quand l'espace manque, <a href="${serviceUrl("soufflage-transport-neige")}">transport de la neige</a> plutôt que de la laisser envahir le terrain.</p>`,
    servicesIntro: "Dans le Vieux-Lévis, les demandes les plus fréquentes combinent l'entrée et les accès piétons :",
    focus: ["deneigement-residentiel-levis", "deneigement-manuel-balcons-escaliers", "epandage-abrasif-deglacage", "soufflage-transport-neige"],
    price: `<p>Les entrées du Vieux-Lévis sont souvent courtes, mais le travail manuel et la précision requise comptent dans le prix. À titre indicatif, un contrat saisonnier pour une entrée simple se situe généralement entre 450 $ et 650 $, et l'ajout des escaliers et d'un balcon entre 150 $ et 400 $ par saison, taxes en sus. Voir les <a href="/prix-deneigement-levis/">prix du déneigement à Lévis</a>.</p>`,
    neighbors: ["lauzon", "saint-david", "saint-romuald", "saint-joseph-de-la-pointe-de-levy"],
    pillarLocal: "Rues en pente, entrées étroites, voitures stationnées dans la rue et escaliers de plex : nos opérateurs connaissent les contraintes du Vieux-Lévis et utilisent l'équipement adapté aux petits espaces, pour dégager sans accrocher les clôtures, les bordures et les véhicules voisins.",
    faq: [
      { q: "Mon entrée est partagée avec le voisin. Pouvez-vous la déneiger?", a: "Oui. Une entrée partagée peut être déneigée dans le cadre d'une entente avec un seul des voisins ou avec les deux. L'idéal est que les deux propriétaires s'entendent sur le partage des coûts avant la saison." },
      { q: "Pouvez-vous déneiger l'escalier extérieur de mon triplex?", a: "Oui. Les escaliers extérieurs et les galeries des plex du Vieux-Lévis sont pelletés à la main par notre équipe de déneigement manuel, après chaque bordée." },
      { q: "Il n'y a plus de place pour la neige sur mon terrain. Que faire?", a: "Dans le Vieux-Lévis, c'est fréquent. Nous proposons le soufflage des bancs ou le chargement et le transport de la neige vers un lieu autorisé. La neige ne peut pas être déposée dans la rue." },
    ],
  }),

  page({
    key: "lauzon",
    description: "Déneigement à Lauzon (Lévis) : entrées de cour, plex, escaliers et abrasif dans les rues en pente près du fleuve. Soumission gratuite et sans obligation.",
    lead: "Maisons unifamiliales, jumelés et plex près du fleuve : un déneigement fiable pour le secteur Lauzon, tout l'hiver.",
    intro: `<p>Pour le déneigement à Lauzon, notre équipe dégage les entrées de cour, les stationnements de plex et les accès piétons après chaque bordée. Ancienne ville fusionnée avec Lévis en 1989, Lauzon forme aujourd'hui l'un des secteurs résidentiels les plus établis de l'arrondissement Desjardins.</p>`,
    local: `<p>Lauzon s'est développé en bonne partie autour de son histoire maritime et du chantier naval Davie, sur les rives du fleuve. Le secteur compte beaucoup de quartiers ouvriers de maisons unifamiliales, de jumelés et de plex construits au fil du 20e siècle, avec des entrées de largeur modeste et des terrains de taille moyenne.</p>
<p>La proximité du fleuve et le relief amènent deux défis : des rues et des entrées en pente vers les berges, où la glace se forme rapidement après un redoux, et des vents qui soufflent la neige en congères sur les terrains dégagés. Dans les rues plus anciennes, la présence de plex avec escaliers extérieurs rend le pelletage manuel particulièrement utile.</p>
<p>Plus au sud, en s'éloignant du fleuve, les quartiers de bungalows ont des entrées plus longues où la souffleuse sur tracteur est la méthode la plus efficace. Nous adaptons l'équipement à chaque type de propriété du secteur.</p>`,
    servicesIntro: "À Lauzon, nos clients choisissent surtout :",
    price: `<p>Pour une entrée de bungalow typique de Lauzon, un contrat saisonnier se situe le plus souvent entre 450 $ et 700 $ par hiver, taxes en sus, selon la longueur de l'entrée et les extras. Pour un plex avec entrée partagée, le prix est établi selon la surface et les escaliers à pelleter. Voir les <a href="/prix-deneigement-levis/">prix du déneigement à Lévis</a>.</p>`,
    neighbors: ["vieux-levis", "saint-david", "pintendre", "saint-joseph-de-la-pointe-de-levy"],
    pillarLocal: "Entre les rues en pente près du fleuve et les quartiers de bungalows plus au sud, Lauzon présente des propriétés très variées. Nos équipes adaptent la machinerie à chaque type d'entrée et savent où la glace se forme en premier après un redoux.",
    faq: [
      { q: "Est-ce que vous déneigez les entrées de plex à Lauzon?", a: "Oui, incluant les entrées partagées et les stationnements de duplex et triplex. Les escaliers extérieurs peuvent être ajoutés au contrat." },
      { q: "Mon entrée est en pente et glacée après chaque redoux. Que proposez-vous?", a: "L'épandage d'abrasif est la solution la plus efficace sur une entrée en pente. Il peut être inclus dans votre contrat saisonnier ou demandé à l'unité après un épisode de verglas." },
      { q: "Est-ce que Lauzon fait partie de la ville de Lévis?", a: "Oui. Lauzon a été fusionnée à Lévis en 1989 et fait aujourd'hui partie de l'arrondissement Desjardins. Les règlements municipaux de Lévis sur le déneigement s'y appliquent." },
    ],
  }),

  page({
    key: "saint-david",
    description: "Déneigement à Saint-David (Lévis) : entrées de cour, contrats saisonniers, escaliers et abrasif dans un secteur résidentiel établi. Soumission gratuite.",
    lead: "Un secteur résidentiel établi, des familles et des aînés : à Saint-David, un bon déneigement, c'est une entrée dégagée et des accès sécuritaires.",
    intro: `<p>Le déneigement à Saint-David, c'est notre quotidien l'hiver : entrées de cour, stationnements, escaliers et trottoirs privés dégagés après chaque bordée. Ancienne municipalité de Saint-David-de-l'Auberivière, fusionnée avec Lévis en 1990, Saint-David est aujourd'hui un secteur résidentiel bien établi de l'arrondissement Desjardins.</p>`,
    local: `<p>Saint-David regroupe surtout des quartiers de maisons unifamiliales et de jumelés, avec des entrées de cour de taille standard, souvent pour deux voitures en longueur. On y retrouve à la fois de jeunes familles et des résidents établis depuis longtemps, deux clientèles qui apprécient particulièrement l'ajout du pelletage des escaliers et de l'abrasif sur les accès.</p>
<p>Les rues résidentielles du secteur reçoivent le passage de la charrue municipale, qui laisse au bout de chaque entrée un banc de neige compacte. C'est souvent ce banc, plus que la neige de l'entrée elle-même, qui décide un propriétaire à confier le déneigement. Dans nos contrats résidentiels, ce banc est dégagé lors de nos passages.</p>
<p>Enfin, beaucoup de terrains de Saint-David sont aménagés avec des bordures, des plates-bandes et du pavé uni. La pose des piquets à l'automne est donc une étape importante pour guider l'opérateur et protéger vos aménagements.</p>`,
    servicesIntro: "À Saint-David, les services les plus demandés sont :",
    price: `<p>Pour une entrée standard à Saint-David, un contrat saisonnier se situe généralement entre 450 $ et 700 $ par hiver dans la région, taxes en sus. L'ajout des escaliers ou de l'abrasif est facturé selon les surfaces. Consultez les <a href="/prix-deneigement-levis/">prix du déneigement à Lévis</a> pour plus de détails.</p>`,
    neighbors: ["vieux-levis", "lauzon", "pintendre", "saint-romuald"],
    pillarLocal: "Saint-David compte beaucoup de terrains aménagés avec soin. Nos opérateurs travaillent avec des piquets bien placés et une attention particulière aux bordures et au pavé uni, pour que votre terrain soit intact au printemps.",
    faq: [
      { q: "Est-ce que vous dégagez le banc de la charrue à Saint-David?", a: "Oui. Le banc laissé par la charrue municipale au bout de l'entrée est dégagé lors de nos passages, dans le cadre des contrats résidentiels." },
      { q: "Pouvez-vous pelleter les escaliers d'une personne âgée?", a: "Oui. Le pelletage des escaliers, du perron et du trottoir privé peut être ajouté au contrat. C'est un service très apprécié des aînés du secteur." },
    ],
  }),

  page({
    key: "pintendre",
    description: "Déneigement à Pintendre (Lévis) : grandes entrées, quartiers récents et terrains semi-ruraux exposés à la poudrerie. Contrat saisonnier, soumission gratuite.",
    lead: "Quartiers récents, grands terrains et secteurs plus ouverts exposés au vent : à Pintendre, le déneigement doit composer avec la poudrerie.",
    intro: `<p>Le déneigement à Pintendre demande de l'équipement capable de gérer de grandes entrées et des accumulations poussées par le vent. Ancienne municipalité fusionnée à Lévis en 2002, Pintendre fait partie de l'arrondissement Desjardins et combine quartiers résidentiels récents et secteurs au caractère plus rural.</p>`,
    local: `<p>Pintendre est traversée par la route du Président-Kennedy (route 173), autour de laquelle se sont développés plusieurs quartiers résidentiels au cours des dernières décennies. Beaucoup de propriétés y ont des entrées larges, pour deux ou trois voitures, et des terrains plus grands que dans les secteurs centraux de Lévis.</p>
<p>La présence de champs et d'espaces ouverts autour des quartiers a une conséquence bien connue des résidents : la poudrerie. Le vent déplace la neige et forme des congères qui se reforment dans les entrées quelques heures après le passage. Dans ces secteurs, un contrat qui prévoit des passages de rattrapage lors des épisodes de vent fait une vraie différence.</p>
<p>Les grandes entrées se prêtent bien au tracteur avec souffleuse, qui projette la neige loin sur le terrain et évite que les bancs ne rétrécissent l'entrée au fil de l'hiver. Nous balisons aussi soigneusement les fossés et les bordures, fréquents dans les secteurs moins urbanisés.</p>`,
    servicesIntro: "À Pintendre, les propriétaires choisissent surtout :",
    focus: ["deneigement-residentiel-levis", "contrat-deneigement-saisonnier", "soufflage-transport-neige", "epandage-abrasif-deglacage"],
    price: `<p>Les entrées de Pintendre sont souvent plus grandes que la moyenne. Un contrat saisonnier pour une entrée double se situe généralement entre 550 $ et 850 $ dans la région, et une grande entrée peut dépasser 900 $, taxes en sus. Voir les <a href="/prix-deneigement-levis/">prix du déneigement à Lévis</a>.</p>`,
    neighbors: ["saint-david", "lauzon", "saint-joseph-de-la-pointe-de-levy", "saint-jean-chrysostome"],
    pillarLocal: "À Pintendre, la poudrerie et les grandes entrées demandent de la puissance et du suivi. Nos opérateurs connaissent les rues exposées au vent et planifient des passages de rattrapage lorsque les congères se reforment après une tempête.",
    faq: [
      { q: "La neige revient dans mon entrée avec le vent. Est-ce que vous repassez?", a: "Les modalités de passages de rattrapage lors de la poudrerie sont précisées au contrat. Dans les secteurs exposés de Pintendre, nous recommandons une entente qui prévoit ces retours." },
      { q: "Mon terrain a un fossé en bordure de rue. Est-ce un problème?", a: "Non, mais il doit être bien balisé. Nous installons des piquets le long du fossé à l'automne pour que l'opérateur le repère facilement, même sous une épaisse couche de neige." },
    ],
  }),

  page({
    key: "saint-joseph-de-la-pointe-de-levy",
    title: "Déneigement Saint-Joseph-de-la-Pointe-de-Lévy, Lévis",
    description: "Déneigement à Saint-Joseph-de-la-Pointe-de-Lévy : longues entrées, terrains ruraux et vent du fleuve. Contrat saisonnier et soumission gratuite au 365-334-9481.",
    lead: "Longues entrées, terres agricoles et vent du fleuve : le déneigement à Saint-Joseph-de-la-Pointe-de-Lévy exige de la machinerie et de la patience.",
    intro: `<p>Pour le déneigement à Saint-Joseph-de-la-Pointe-de-Lévy, il faut une équipe habituée aux longues entrées et aux terrains exposés. Ce secteur de l'est de Lévis, ancienne municipalité fusionnée en 2002 et souvent appelé Saint-Joseph-de-Lévis, est le plus rural de l'arrondissement Desjardins.</p>`,
    local: `<p>Saint-Joseph-de-la-Pointe-de-Lévy s'étend le long du fleuve, à l'est des secteurs urbains de Lévis et de Lauzon. Le paysage y est marqué par les terres agricoles, les rangs et les résidences implantées sur de grands terrains, souvent en retrait de la route. Les entrées de 30, 50 ou même 100 mètres ne sont pas rares.</p>
<p>Ce caractère ouvert expose les propriétés au vent qui vient du fleuve et balaie les champs. La poudrerie forme des congères en travers des entrées, parfois plus hautes que la neige tombée. Les longues entrées demandent aussi une machinerie plus puissante et plus de temps à chaque passage, ce qui se reflète dans le prix.</p>
<p>Dans ce secteur, nous portons une attention particulière au balisage : fossés, ponceaux, bordures de champ et arbres sont repérés à l'automne avec des piquets hauts, visibles même lors des grosses accumulations.</p>`,
    servicesIntro: "Dans ce secteur rural, les demandes les plus courantes sont :",
    focus: ["deneigement-residentiel-levis", "contrat-deneigement-saisonnier", "soufflage-transport-neige", "deneigement-a-l-unite"],
    price: `<p>Le prix dépend surtout de la longueur de l'entrée. Une grande entrée rurale se situe généralement entre 800 $ et 1 300 $ par saison dans la région, et parfois davantage pour les entrées très longues, taxes en sus. Une évaluation permet un prix précis. Voir les <a href="/prix-deneigement-levis/">prix du déneigement à Lévis</a>.</p>`,
    neighbors: ["lauzon", "pintendre", "vieux-levis", "saint-david"],
    pillarLocal: "Longues entrées, fossés, ponceaux et congères : nos opérateurs sont habitués aux propriétés rurales de l'est de Lévis. Le balisage fait à l'automne et une machinerie adaptée permettent de dégager ces grandes surfaces sans abîmer vos aménagements.",
    faq: [
      { q: "Déneigez-vous les très longues entrées?", a: "Oui. Les longues entrées rurales demandent plus de temps et une machinerie plus puissante, ce qui est pris en compte dans le prix de la soumission. Une évaluation sur place permet de fixer un prix juste." },
      { q: "Pouvez-vous dégager l'accès à un bâtiment secondaire ou à une remise?", a: "Oui. L'accès à un garage détaché, un atelier ou un bâtiment secondaire peut être ajouté au contrat, selon la surface à dégager." },
    ],
  }),

  page({
    key: "saint-romuald",
    description: "Déneigement à Saint-Romuald (Lévis) : entrées en pente vers le fleuve, bungalows, condos et commerces. Contrat saisonnier, soumission au 365-334-9481.",
    lead: "Du vieux quartier en bordure du fleuve aux quartiers de bungalows et de condos, Saint-Romuald a besoin d'un déneigeur polyvalent.",
    intro: `<p>Le déneigement à Saint-Romuald, c'est à la fois des entrées en pente près du fleuve, des quartiers de bungalows, des condos et des commerces. Ancienne ville fusionnée à Lévis en 2002, Saint-Romuald fait partie de l'arrondissement Les Chutes-de-la-Chaudière-Est et compte parmi les secteurs les plus peuplés de Lévis.</p>`,
    local: `<p>Le cœur historique de Saint-Romuald, autour de son église et le long du fleuve, se caractérise par des rues qui descendent vers la berge et des maisons plus anciennes aux entrées étroites. Dans ces rues en pente, la glace est l'ennemi numéro un : l'eau de fonte coule et regèle la nuit, ce qui rend l'épandage d'abrasif presque indispensable.</p>
<p>Plus au sud, les quartiers résidentiels développés à partir des années 1960 offrent des entrées plus larges, faciles à dégager au tracteur. On y trouve aussi plusieurs ensembles de condos et de maisons en rangée, où les stationnements partagés demandent une organisation particulière pour préserver les cases tout l'hiver.</p>
<p>Saint-Romuald est enfin bien pourvu en commerces et en bureaux le long de ses grands axes, près de l'autoroute 20 et de l'accès aux ponts vers Québec. Nous y offrons aussi le <a href="${serviceUrl("deneigement-commercial-levis")}">déneigement commercial</a>.</p>`,
    servicesIntro: "À Saint-Romuald, nos services les plus demandés sont :",
    focus: ["deneigement-residentiel-levis", "epandage-abrasif-deglacage", "deneigement-condos-multilogements", "deneigement-commercial-levis"],
    price: `<p>Pour une entrée résidentielle standard à Saint-Romuald, un contrat saisonnier se situe généralement entre 450 $ et 750 $ dans la région, taxes en sus. Pour les condos et les commerces, le prix est établi sur mesure selon la superficie. Voir les <a href="/prix-deneigement-levis/">prix du déneigement à Lévis</a>.</p>`,
    neighbors: ["saint-jean-chrysostome", "charny", "saint-nicolas", "vieux-levis"],
    pillarLocal: "Pentes du vieux Saint-Romuald, quartiers de bungalows, condos et commerces : nos équipes connaissent les réalités variées du secteur et adaptent l'équipement et l'épandage d'abrasif selon chaque type de propriété.",
    faq: [
      { q: "Mon entrée descend vers la rue et devient une patinoire. Que faire?", a: "Pour les entrées en pente, nous recommandons d'ajouter l'épandage d'abrasif au contrat. L'abrasif redonne de l'adhérence même par grand froid, lorsque le sel n'est plus efficace." },
      { q: "Déneigez-vous les stationnements de condos à Saint-Romuald?", a: "Oui. Nous offrons des contrats adaptés aux syndicats de copropriété, avec un plan de déneigement qui préserve les cases de stationnement." },
      { q: "Offrez-vous le déneigement commercial à Saint-Romuald?", a: "Oui, pour les commerces, bureaux et petites entreprises du secteur, avec des interventions planifiées avant l'ouverture." },
    ],
  }),

  page({
    key: "saint-jean-chrysostome",
    description: "Déneigement à Saint-Jean-Chrysostome (Lévis) : entrées doubles, pavé uni, quartiers familiaux. Contrat saisonnier et soumission gratuite au 365-334-9481.",
    lead: "Quartiers familiaux récents, entrées doubles et pavé uni : à Saint-Jean-Chrysostome, on veut une entrée dégagée tôt et un terrain intact au printemps.",
    intro: `<p>Pour le déneigement à Saint-Jean-Chrysostome, les familles du secteur nous confient leur entrée de cour, leurs escaliers et leurs accès, du début à la fin de l'hiver. Ancienne ville fusionnée à Lévis en 2002, Saint-Jean-Chrysostome fait partie de l'arrondissement Les Chutes-de-la-Chaudière-Est et a connu une forte croissance résidentielle au cours des dernières décennies.</p>`,
    local: `<p>Une grande partie de Saint-Jean-Chrysostome est composée de quartiers résidentiels relativement récents : maisons unifamiliales, jumelés et maisons de ville, souvent avec des entrées doubles ou pour trois à quatre voitures. Beaucoup de propriétaires ont investi dans des entrées de pavé uni, des bordures de béton et des aménagements paysagers soignés.</p>
<p>Ces aménagements changent la façon de déneiger. Il faut régler la hauteur de la souffleuse pour ne pas accrocher les pavés, bien baliser les bordures et limiter l'usage du sel, qui peut abîmer le pavé et le béton récent. Pour les familles qui partent tôt vers l'école et le travail, souvent vers Québec par l'autoroute 20 et les ponts, le moment du passage compte aussi.</p>
<p>Les rues en croissant et les culs-de-sac, nombreux dans les quartiers récents, reçoivent aussi d'importants bancs de charrue au bout des entrées. Dans nos contrats résidentiels, ce banc est dégagé lors de nos passages.</p>`,
    servicesIntro: "À Saint-Jean-Chrysostome, les services les plus populaires sont :",
    price: `<p>Les entrées doubles sont la norme dans plusieurs quartiers de Saint-Jean-Chrysostome. Un contrat saisonnier pour une entrée double se situe généralement entre 550 $ et 850 $ par hiver dans la région, taxes en sus, selon la longueur et les extras. Voir les <a href="/prix-deneigement-levis/">prix du déneigement à Lévis</a>.</p>`,
    neighbors: ["saint-romuald", "charny", "breakeyville", "pintendre"],
    pillarLocal: "Entrées de pavé uni, bordures de béton et aménagements récents : nos opérateurs ajustent l'équipement pour protéger vos surfaces et balisent soigneusement votre terrain à l'automne. Votre entrée est dégagée sans que votre investissement en souffre.",
    faq: [
      { q: "Mon entrée est en pavé uni. Est-ce que la souffleuse va l'abîmer?", a: "Une souffleuse bien réglée et un opérateur attentif ne devraient pas abîmer le pavé uni. Nous ajustons la hauteur de l'équipement et évitons le sel autant que possible sur ces surfaces." },
      { q: "Est-ce que vous déneigez les entrées pour 3 ou 4 voitures?", a: "Oui. La taille de l'entrée est simplement prise en compte dans la soumission. Les entrées doubles et longues sont très courantes à Saint-Jean-Chrysostome." },
      { q: "Est-ce que les escaliers peuvent être inclus?", a: "Oui, le pelletage des escaliers, du perron et du trottoir privé peut être ajouté à votre contrat saisonnier." },
    ],
  }),

  page({
    key: "charny",
    description: "Déneigement à Charny (Lévis) : bungalows, jumelés et commerces près de la rivière Chaudière. Contrat saisonnier, escaliers, abrasif. Soumission au 365-334-9481.",
    lead: "Entre la rivière Chaudière et ses quartiers résidentiels établis, Charny compte sur un déneigement régulier et bien fait.",
    intro: `<p>Le déneigement à Charny, c'est dégager des entrées de bungalows et de jumelés, des stationnements de plex et des commerces, tout l'hiver. Ancienne ville fusionnée à Lévis en 2002, Charny fait partie de l'arrondissement Les Chutes-de-la-Chaudière-Est, sur la rive est de la rivière Chaudière.</p>`,
    local: `<p>Charny est connue pour le parc de la Chute-de-la-Chaudière et sa passerelle au-dessus de la chute, mais aussi pour son histoire ferroviaire : le secteur accueille depuis longtemps d'importantes installations du chemin de fer. Ce passé explique en partie ses nombreux quartiers résidentiels établis, composés de bungalows, de jumelés et de plex.</p>
<p>Les entrées y sont typiquement de taille moyenne, pour une ou deux voitures en longueur, sur des terrains où l'espace pour empiler la neige est correct, mais pas illimité. Au fil d'un hiver chargé, les bancs grossissent et rétrécissent l'entrée : un tracteur avec souffleuse, qui projette la neige plus loin, aide à garder toute la largeur jusqu'au printemps.</p>
<p>La proximité de la rivière et du fleuve apporte aussi son lot d'humidité et de verglas lors des redoux. Pour les propriétaires d'un certain âge, nombreux dans les quartiers établis de Charny, l'ajout du pelletage des escaliers et de l'abrasif est souvent un choix judicieux.</p>`,
    servicesIntro: "À Charny, nos clients optent le plus souvent pour :",
    price: `<p>Pour une entrée typique de Charny, un contrat saisonnier se situe généralement entre 450 $ et 700 $ par hiver dans la région, taxes en sus. L'ajout des escaliers ou de l'abrasif est évalué selon les surfaces. Voir les <a href="/prix-deneigement-levis/">prix du déneigement à Lévis</a>.</p>`,
    neighbors: ["saint-romuald", "saint-jean-chrysostome", "breakeyville", "saint-nicolas"],
    pillarLocal: "Charny compte beaucoup de propriétés établies avec des entrées de taille moyenne. Nos opérateurs utilisent la souffleuse pour garder toute la largeur de l'entrée jusqu'au printemps, même lors des hivers les plus chargés.",
    faq: [
      { q: "Mes bancs de neige rétrécissent mon entrée chaque hiver. Que faire?", a: "Le déneigement au tracteur avec souffleuse projette la neige plus loin sur le terrain et limite la hauteur des bancs. Si l'espace vient à manquer, le soufflage des bancs peut être fait en cours d'hiver." },
      { q: "Déneigez-vous les plex et les jumelés à Charny?", a: "Oui, incluant les entrées partagées. Le partage des coûts entre voisins peut être convenu avant la saison." },
    ],
  }),

  page({
    key: "breakeyville",
    description: "Déneigement à Breakeyville (Lévis) : grands terrains boisés, longues entrées et zones d'ombre glacées. Contrat saisonnier, soumission gratuite au 365-334-9481.",
    lead: "Grands terrains, arbres matures et entrées plus longues : à Breakeyville, le déneigement se fait avec de l'espace, mais aussi avec de l'ombre et de la glace.",
    intro: `<p>Le déneigement à Breakeyville demande de l'équipement pour les grandes entrées et une bonne gestion de la glace dans les secteurs ombragés. Sainte-Hélène-de-Breakeyville, ancienne municipalité fusionnée à Lévis en 2002, fait partie de l'arrondissement Les Chutes-de-la-Chaudière-Est, le long de la rivière Chaudière.</p>`,
    local: `<p>Breakeyville doit son nom à la famille Breakey, liée à l'exploitation forestière et au moulin à scie qui ont marqué les débuts du village en bordure de la Chaudière. Le secteur a conservé un caractère plus boisé et plus aéré que les secteurs centraux de Lévis, avec de grands terrains et des résidences souvent implantées en retrait de la rue.</p>
<p>Deux conséquences pour le déneigement. D'abord, les entrées y sont souvent plus longues, ce qui demande une machinerie plus puissante et plus de temps à chaque passage. Ensuite, les arbres matures créent des zones d'ombre où la neige compactée se transforme en glace qui ne fond pas de l'hiver. L'épandage d'abrasif ciblé sur ces zones est très utile.</p>
<p>L'avantage : l'espace ne manque pas pour placer la neige. Avec une souffleuse sur tracteur, la neige est projetée loin sur le terrain et l'entrée garde sa pleine largeur tout l'hiver, tant que les arbres et les aménagements sont bien balisés.</p>`,
    servicesIntro: "À Breakeyville, les services les plus demandés sont :",
    focus: ["deneigement-residentiel-levis", "contrat-deneigement-saisonnier", "epandage-abrasif-deglacage", "deneigement-manuel-balcons-escaliers"],
    price: `<p>Avec des entrées souvent plus longues que la moyenne, un contrat saisonnier à Breakeyville se situe généralement entre 550 $ et 900 $ par hiver dans la région, et davantage pour les très grandes entrées, taxes en sus. Voir les <a href="/prix-deneigement-levis/">prix du déneigement à Lévis</a>.</p>`,
    neighbors: ["saint-jean-chrysostome", "charny", "saint-romuald", "saint-etienne-de-lauzon"],
    pillarLocal: "Arbres matures, longues entrées et zones d'ombre glacées : nos opérateurs connaissent le caractère boisé de Breakeyville. Le balisage des arbres et des aménagements à l'automne permet de souffler la neige loin sans rien abîmer.",
    faq: [
      { q: "Une partie de mon entrée reste glacée tout l'hiver à cause de l'ombre. Que faire?", a: "C'est fréquent sous les grands arbres. L'épandage d'abrasif ciblé sur ces zones redonne de l'adhérence. Il peut être inclus dans votre contrat ou fait à la demande." },
      { q: "La souffleuse peut-elle endommager mes arbres?", a: "La neige est dirigée vers les zones convenues, loin des arbres et arbustes fragiles. Les piquets posés à l'automne permettent à l'opérateur de repérer les végétaux à protéger." },
    ],
  }),

  page({
    key: "saint-nicolas",
    description: "Déneigement à Saint-Nicolas (Lévis) : entrées de banlieue, condos et commerces près des ponts. Contrat saisonnier et abrasif. Soumission au 365-334-9481.",
    lead: "Le plus grand secteur de l'ouest de Lévis, près des ponts : quartiers résidentiels, condos et commerces, et beaucoup de navetteurs qui partent tôt vers Québec.",
    intro: `<p>Le déneigement à Saint-Nicolas, c'est d'abord une question d'horaire : beaucoup de résidents traversent les ponts vers Québec chaque matin et veulent une entrée dégagée avant de partir. Ancienne ville fusionnée à Lévis en 2002, Saint-Nicolas est le principal secteur de l'arrondissement Les Chutes-de-la-Chaudière-Ouest.</p>`,
    local: `<p>C'est à la hauteur de Saint-Nicolas, à la limite de Saint-Romuald, qu'aboutissent sur la rive sud le pont Pierre-Laporte et le pont de Québec. Le secteur s'est beaucoup développé grâce à cet accès direct à Québec, avec de vastes quartiers de maisons unifamiliales, de jumelés et de maisons de ville, ainsi que plusieurs ensembles de condos et des zones commerciales près de l'autoroute 20 et de la route 116.</p>
<p>Le secteur comprend aussi le vieux village de Saint-Nicolas, en bordure du fleuve, avec ses rues en pente et ses maisons plus anciennes. Là, les entrées sont souvent plus étroites et l'abrasif est précieux lors des redoux. Dans les quartiers plus récents, ce sont plutôt les entrées doubles, le pavé uni et les grands culs-de-sac qui dominent.</p>
<p>Pour les navetteurs, le moment du passage est essentiel. Nos circuits dans Saint-Nicolas sont organisés pour dégager un maximum d'entrées tôt le matin, et les modalités de passage lors des tempêtes de nuit sont précisées au contrat.</p>`,
    servicesIntro: "À Saint-Nicolas, les demandes les plus fréquentes sont :",
    focus: ["deneigement-residentiel-levis", "contrat-deneigement-saisonnier", "deneigement-condos-multilogements", "deneigement-commercial-levis"],
    price: `<p>Pour une entrée double typique de Saint-Nicolas, un contrat saisonnier se situe généralement entre 550 $ et 850 $ par hiver dans la région, taxes en sus. Une entrée simple dans le vieux village se situe plutôt entre 450 $ et 650 $. Voir les <a href="/prix-deneigement-levis/">prix du déneigement à Lévis</a>.</p>`,
    neighbors: ["saint-redempteur", "saint-etienne-de-lauzon", "saint-romuald", "charny"],
    pillarLocal: "À Saint-Nicolas, nos circuits tiennent compte des navetteurs qui partent tôt vers les ponts. Du vieux village en pente aux quartiers récents de pavé uni, nos opérateurs adaptent leur méthode à chaque type d'entrée.",
    faq: [
      { q: "Je pars vers Québec tôt le matin. Mon entrée sera-t-elle dégagée?", a: "Nos circuits sont planifiés pour dégager le plus d'entrées possible tôt le matin. Lors d'une tempête de nuit qui se prolonge, l'ordre de passage dépend du circuit; les modalités sont précisées au contrat." },
      { q: "Déneigez-vous les condos et les commerces de Saint-Nicolas?", a: "Oui. Nous offrons des contrats pour les syndicats de copropriété et le déneigement commercial pour les entreprises du secteur." },
      { q: "Est-ce que vous desservez le vieux village de Saint-Nicolas?", a: "Oui, incluant les rues en pente près du fleuve, où l'épandage d'abrasif est souvent recommandé." },
    ],
  }),

  page({
    key: "saint-redempteur",
    description: "Déneigement à Saint-Rédempteur (Lévis) : entrées de maisons unifamiliales, escaliers et abrasif dans un secteur résidentiel tranquille. Soumission gratuite.",
    lead: "Un petit secteur résidentiel tranquille entre Saint-Nicolas et Saint-Étienne-de-Lauzon, où l'on veut simplement une entrée dégagée après chaque bordée.",
    intro: `<p>Le déneigement à Saint-Rédempteur, c'est surtout des entrées de maisons unifamiliales à dégager avec régularité, tout l'hiver. Ancienne municipalité fusionnée à Lévis en 2002, Saint-Rédempteur fait partie de l'arrondissement Les Chutes-de-la-Chaudière-Ouest, entre Saint-Nicolas et Saint-Étienne-de-Lauzon.</p>`,
    local: `<p>Saint-Rédempteur est un secteur essentiellement résidentiel, composé en majorité de maisons unifamiliales sur des terrains de bonne taille. Les entrées y sont généralement simples ou doubles, droites et faciles d'accès, ce qui permet un déneigement efficace au tracteur avec souffleuse.</p>
<p>Sa position entre deux secteurs plus vastes fait que Saint-Rédempteur est souvent intégré aux circuits de Saint-Nicolas et de Saint-Étienne-de-Lauzon. Pour les résidents, cela signifie un passage régulier, planifié dans une tournée bien établie. Les quelques rues en bordure d'espaces plus ouverts peuvent toutefois recevoir de la poudrerie, avec des congères qui se reforment après le passage.</p>
<p>Comme ailleurs à Lévis, la neige du terrain privé ne peut pas être déposée dans la rue. Sur des terrains de bonne taille comme ceux de Saint-Rédempteur, l'espace ne manque généralement pas pour la placer sur la pelouse, pourvu que les aménagements soient bien balisés.</p>`,
    servicesIntro: "À Saint-Rédempteur, nos clients choisissent surtout :",
    price: `<p>Pour une entrée typique de Saint-Rédempteur, un contrat saisonnier se situe généralement entre 450 $ et 750 $ par hiver dans la région, taxes en sus, selon la taille de l'entrée et les extras. Voir les <a href="/prix-deneigement-levis/">prix du déneigement à Lévis</a>.</p>`,
    neighbors: ["saint-nicolas", "saint-etienne-de-lauzon", "charny", "breakeyville"],
    pillarLocal: "Saint-Rédempteur est intégré à nos circuits de l'ouest de Lévis, avec Saint-Nicolas et Saint-Étienne-de-Lauzon. Cette organisation permet des passages réguliers et efficaces dans ce secteur résidentiel tranquille.",
    faq: [
      { q: "Est-ce que Saint-Rédempteur est desservi aussi souvent que les grands secteurs?", a: "Oui. Saint-Rédempteur fait partie de nos circuits de l'ouest de Lévis et reçoit un passage après chaque bordée atteignant le seuil prévu au contrat, comme partout ailleurs." },
      { q: "Offrez-vous le déneigement à l'unité à Saint-Rédempteur?", a: "Oui, selon les disponibilités. Pour une résidence principale, le contrat saisonnier reste toutefois la formule la plus avantageuse." },
    ],
  }),

  page({
    key: "saint-etienne-de-lauzon",
    title: "Déneigement Saint-Étienne-de-Lauzon | Déneigeur Lévis",
    description: "Déneigement à Saint-Étienne-de-Lauzon (Lévis) : grands terrains, entrées longues et poudrerie en milieu ouvert. Contrat saisonnier, soumission gratuite.",
    lead: "Le secteur le plus à l'ouest de Lévis : quartiers récents, grands terrains et champs ouverts où la poudrerie ne pardonne pas.",
    intro: `<p>Le déneigement à Saint-Étienne-de-Lauzon demande de composer avec deux réalités : des quartiers résidentiels en croissance et un environnement ouvert, balayé par le vent. Ancienne municipalité fusionnée à Lévis en 2002, Saint-Étienne-de-Lauzon est le secteur le plus à l'ouest de l'arrondissement Les Chutes-de-la-Chaudière-Ouest.</p>`,
    local: `<p>Saint-Étienne-de-Lauzon a longtemps été un milieu agricole avant d'accueillir de nouveaux quartiers résidentiels. Aujourd'hui, on y trouve des maisons unifamiliales récentes sur des terrains souvent plus grands qu'en ville, entourées de terres cultivées et d'espaces boisés.</p>
<p>Ce paysage ouvert a un effet direct sur le déneigement : la poudrerie. Après une tempête, le vent qui balaie les champs peut reboucher une entrée en quelques heures et former des congères plus hautes que la neige tombée. Dans ces conditions, un contrat qui prévoit des passages de rattrapage lors des épisodes de vent est précieux.</p>
<p>Les entrées plus longues et plus larges demandent aussi une machinerie puissante. En contrepartie, l'espace ne manque pas pour placer la neige : avec une souffleuse sur tracteur, elle est projetée loin sur le terrain et l'entrée garde sa largeur jusqu'au printemps.</p>`,
    servicesIntro: "À Saint-Étienne-de-Lauzon, les demandes les plus courantes sont :",
    focus: ["deneigement-residentiel-levis", "contrat-deneigement-saisonnier", "soufflage-transport-neige", "epandage-abrasif-deglacage"],
    price: `<p>Avec des entrées souvent plus longues, un contrat saisonnier à Saint-Étienne-de-Lauzon se situe généralement entre 550 $ et 900 $ par hiver dans la région, et davantage pour les grandes propriétés, taxes en sus. Voir les <a href="/prix-deneigement-levis/">prix du déneigement à Lévis</a>.</p>`,
    neighbors: ["saint-redempteur", "saint-nicolas", "breakeyville", "charny"],
    pillarLocal: "Poudrerie, champs ouverts et entrées plus longues : nos opérateurs connaissent les rues exposées de Saint-Étienne-de-Lauzon et planifient des passages de rattrapage quand les congères se reforment après une tempête.",
    faq: [
      { q: "Le vent rebouche mon entrée après le passage. Est-ce inclus?", a: "Les passages de rattrapage lors de la poudrerie sont précisés au contrat. Dans les secteurs ouverts de Saint-Étienne-de-Lauzon, nous recommandons une entente qui les prévoit." },
      { q: "Est-ce que vous déneigez les propriétés en milieu rural du secteur?", a: "Oui, incluant les longues entrées et les accès à des bâtiments secondaires. Une évaluation permet d'établir un prix juste selon la surface." },
    ],
  }),
];
