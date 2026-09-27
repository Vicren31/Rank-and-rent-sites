import { SITE, ICONS, leadForm, checks, trustBar, zonesGroups, faqBlock, ctaBand, pillars, steps, serviceUrl, sLink, gLink, zLink, serviceChips } from "../components.mjs";
import { SERVICES } from "../data.mjs";

const faq = [
  { q: "Êtes-vous vraiment ouverts 24 heures sur 24?", a: `<p>Oui. Notre ligne répond 24 heures sur 24, 7 jours sur 7, y compris les fins de semaine, les nuits de tempête et les jours fériés. Que votre auto refuse de démarrer à 6 h un matin de janvier ou que vous soyez en panne sur l'autoroute 31 à minuit, appelez le ${SITE.phone} et nous organisons votre remorquage.</p>` },
  { q: "Combien coûte un remorquage à Joliette?", a: `<p>Pour une voiture ou un VUS remorqué localement, dans Joliette ou entre deux municipalités voisines, la plupart des remorquages se situent entre 110 $ et 180 $ avant taxes, puis quelques dollars par kilomètre supplémentaire pour les plus longues distances. Le prix varie selon le véhicule, la distance, l'heure et la situation (accident, fossé, véhicule non roulant). Consultez notre <a href="/prix-remorquage-joliette/">guide des prix du remorquage à Joliette</a>, puis appelez-nous pour une soumission gratuite et sans obligation.</p>` },
  { q: "Pouvez-vous remorquer mon auto jusqu'au garage de mon choix?", a: `<p>Oui. C'est vous qui choisissez la destination : votre garage habituel, le concessionnaire, votre domicile ou un atelier de carrosserie recommandé par votre assureur. Nous remorquons partout à Joliette, dans la MRC de Joliette et, sur demande, vers Montréal, Trois-Rivières ou ailleurs au Québec grâce au ${sLink("transport-vehicule-longue-distance", "transport longue distance")}.</p>` },
  { q: "Mon véhicule est à traction intégrale (AWD) : faut-il un plateau?", a: `<p>Dans la grande majorité des cas, oui. Les fabricants recommandent de transporter les véhicules à traction intégrale, les 4x4 permanents et les véhicules électriques avec les quatre roues soulevées, pour éviter d'endommager la transmission ou le moteur électrique. Précisez-le lors de votre appel : nous envoyons une ${sLink("remorquage-plateau", "dépanneuse à plateau")}.</p>` },
  { q: "Faites-vous le survoltage et le déverrouillage sans remorquer l'auto?", a: `<p>Oui. Plusieurs problèmes se règlent sur place, sans remorquage : ${sLink("survoltage-batterie", "survoltage de batterie")}, ${sLink("deverrouillage-voiture", "déverrouillage de portière")}, ${sLink("livraison-essence", "livraison d'essence")} et ${sLink("changement-pneu-crevaison", "changement de pneu")}. Si le véhicule ne repart pas, nous pouvons ensuite le remorquer jusqu'au garage.</p>` },
  { q: "Quelles villes desservez-vous autour de Joliette?", a: `<p>Nous desservons Joliette et 16 municipalités voisines : Saint-Charles-Borromée, Notre-Dame-des-Prairies, Saint-Paul, Crabtree, Saint-Thomas, Sainte-Mélanie, Notre-Dame-de-Lourdes, Saint-Ambroise-de-Kildare, Saint-Félix-de-Valois, Rawdon, Saint-Jean-de-Matha, Lavaltrie, Berthierville, Sainte-Élisabeth, Saint-Jacques et L'Assomption, ainsi que les autoroutes 40 et 31 et les routes 158 et 131. Voir toutes les <a href="/zones-desservies/">zones desservies</a>.</p>` },
  { q: "Que dois-je faire en attendant la remorqueuse?", a: `<p>Mettez vos feux de détresse, restez à l'écart de la circulation et, si vous êtes sur l'autoroute, demeurez dans le véhicule avec la ceinture bouclée à moins qu'il soit plus sécuritaire d'en sortir du côté opposé à la circulation. En cas de blessés, de fumée ou de danger, composez d'abord le 9-1-1. Tous nos conseils sont dans le guide ${gLink("panne-sur-autoroute-securite", "Panne sur l'autoroute : les bons réflexes")}.</p>` },
  { q: "Remorquez-vous les camions et les véhicules lourds?", a: `<p>Oui. Le ${sLink("remorquage-lourd", "remorquage lourd")} couvre les camions cubes, les camions de livraison, les autobus, les véhicules récréatifs de grande taille et d'autres véhicules commerciaux. L'équipement envoyé dépend du poids et de la situation : décrivez-nous le véhicule au téléphone pour une soumission précise.</p>` },
];

const situations = [
  ["La batterie qui lâche un matin de janvier", `Dans Lanaudière, les nuits sous -25 °C ne sont pas rares en plein hiver, et c'est souvent là qu'une batterie fatiguée rend l'âme. Un ${sLink("survoltage-batterie", "survoltage sur place")} suffit souvent à repartir; sinon, on remorque l'auto jusqu'au garage de votre choix.`],
  ["L'accident sur l'A-31 ou la route 158", `Une collision sur l'autoroute Antonio-Barrette ou sur la 158 entre Joliette et Saint-Jacques? Le ${sLink("remorquage-accident", "remorquage après accident")} déplace le véhicule en sécurité et vous remet les documents dont votre assureur aura besoin.`],
  ["Le fossé dans un rang de campagne", `Chemins de rang glacés, accotements mous au printemps, bancs de neige après une tempête : les ${sLink("sortie-de-fosse-desenlisement", "sorties de fossé et désenlisements")} sont fréquentes autour de Sainte-Mélanie, Saint-Thomas ou Sainte-Élisabeth.`],
  ["Les clés oubliées dans l'auto", `Au stationnement d'un commerce du boulevard Firestone ou devant la maison, le ${sLink("deverrouillage-voiture", "déverrouillage de portière")} se fait avec des outils conçus pour ne rien briser, ni vitre ni joint.`],
  ["L'auto électrique ou la 4x4 à déplacer", `Les véhicules électriques, hybrides et à traction intégrale doivent généralement voyager les quatre roues soulevées. Le ${sLink("remorquage-plateau", "remorquage sur plateau")} protège la transmission et le moteur.`],
  ["La vieille auto qui dort dans la cour", `Une voiture qui ne roule plus depuis des années prend de la place et peut fuir. Le ${sLink("remorquage-vehicule-ferraille", "remorquage de véhicule hors d'usage")} l'amène chez un recycleur autorisé.`],
];

const homeCards = {
  "remorquage-automobile": "Voiture, VUS, camionnette ou fourgonnette en panne : remorquage local dans Joliette et vers la destination de votre choix, de jour comme de nuit.",
  "remorquage-plateau": "Pour les véhicules AWD, 4x4, électriques, abaissés ou de collection : le véhicule voyage complètement sur le plateau, sans usure pour la transmission.",
  "remorquage-accident": "Véhicule accidenté ou non roulant après une collision : remorquage vers le garage ou le centre de carrosserie, et documents fournis pour votre assureur.",
  "depannage-routier": "Survoltage, déverrouillage, livraison d'essence et changement de pneu : l'assistance routière règle bien des pannes sans avoir à remorquer.",
  "sortie-de-fosse-desenlisement": "Véhicule dans le fossé, enlisé dans la neige, la boue ou un champ : treuillage professionnel avec sangles et points d'ancrage adaptés.",
  "remorquage-lourd": "Camions, cubes, autobus et véhicules commerciaux : remorquage et récupération avec l'équipement adapté au poids du véhicule.",
};
const featured = Object.keys(homeCards);
const others = SERVICES.filter((s) => !featured.includes(s.slug)).map((s) => s.slug);

const body = `
<section class="hero">
  <div class="container">
    <div class="hero-grid">
      <div>
        <span class="overline">Remorqueur à Joliette et dans Lanaudière</span>
        <h1>Remorquage à Joliette, <span class="accent">24&nbsp;h sur&nbsp;24, 7&nbsp;jours sur&nbsp;7</span></h1>
        <p class="lead">Panne, accident, batterie à plat ou auto dans le fossé? Remorquage Joliette organise votre remorquage et votre assistance routière à Joliette et dans 16 municipalités voisines, avec des partenaires certifiés et une soumission gratuite avant le départ.</p>
        ${checks(["Remorquage automobile et sur plateau", "Remorquage après accident", "Survoltage, déverrouillage, essence, pneu", "Sortie de fossé et remorquage lourd"])}
        <div class="btn-row">
          <a href="tel:${SITE.phoneE164}" data-loc="hero" class="btn btn-primary">${ICONS.phone}Appelez le ${SITE.phone}</a>
          <a href="#soumission" class="btn btn-ghost-light">Soumission en ligne</a>
        </div>
        <p class="hero-phone">Ligne ouverte jour et nuit, fins de semaine et jours fériés compris.</p>
      </div>
      ${leadForm({ id: "soumission", title: "Soumission gratuite pour votre remorquage", sub: `Sans obligation. Pour une urgence sur la route, appelez directement le ${SITE.phone}.` })}
    </div>
  </div>
  <div class="hero-road" aria-hidden="true"></div>
</section>

${trustBar()}

<section id="services" aria-labelledby="services-titre">
  <div class="container">
    <div class="section-head"><span class="overline">Nos services</span>
      <h2 id="services-titre">Nos services de remorquage à Joliette</h2>
      <p class="lead" style="margin-top:.75rem">Du simple survoltage au remorquage d'un camion, nous couvrons toutes les situations sur la route. Chaque intervention commence par une soumission gratuite et sans obligation, au téléphone ou en ligne.</p>
    </div>
    <div class="grid-3">
      ${featured.map((slug) => { const s = SERVICES.find((x) => x.slug === slug); return `<a class="card" href="${serviceUrl(s.slug)}"><span class="icon">${ICONS[s.icon]}</span><h3>${s.name}</h3><p>${homeCards[slug]}</p><span class="more">Voir le service</span></a>`; }).join("\n      ")}
    </div>
    <div class="grid-2" style="margin-top:var(--s-4)">
      <div>
        <h3 class="mb-2">Aussi offerts à Joliette et dans les environs</h3>
        ${serviceChips(others)}
      </div>
      <a class="card card-dark" href="/prix-remorquage-joliette/"><span class="icon">${ICONS.tag}</span><h3>Combien coûte un remorquage à Joliette?</h3><p>Frais de base, prix au kilomètre, plateau, nuit et fin de semaine : voyez les fourchettes de prix observées dans la région avant d'appeler.</p><span class="more">Voir les prix</span></a>
    </div>
  </div>
</section>

<section class="bg-soft" aria-labelledby="situations-titre">
  <div class="container">
    <div class="section-head"><span class="overline">Sur les routes de Lanaudière</span>
      <h2 id="situations-titre">Les situations que nous réglons chaque semaine autour de Joliette</h2>
      <p style="margin-top:.75rem">Entre l'autoroute 31, les grands boulevards de Joliette et les rangs de campagne de la MRC, chaque panne est différente. Voici celles qui reviennent le plus souvent.</p>
    </div>
    <div class="grid-3">
      ${situations.map(([h, p]) => `<div class="pillar"><h3>${h}</h3><p>${p}</p></div>`).join("\n      ")}
    </div>
  </div>
</section>

${pillars([
  { fact: "24 h sur 24, 7 jours sur 7", h: "Une ligne qui répond jour et nuit", p: "Les pannes n'arrivent jamais aux heures de bureau. Notre ligne est ouverte en tout temps, y compris la nuit, les fins de semaine, pendant les tempêtes et les jours fériés. Vous parlez à une personne qui connaît Joliette et ses environs, pas à une boîte vocale." },
  { fact: "Partenaires certifiés", h: "Des remorqueurs qualifiés et assurés", p: "Les interventions sont confiées à des partenaires certifiés, qui travaillent avec des dépanneuses entretenues, à roues levées ou à plateau, et qui sont assurés pour transporter votre véhicule. Vous savez qui se présente et avec quel équipement." },
  { fact: "Soumission gratuite", h: "Le prix est clair avant le départ", p: "Avant d'envoyer une remorqueuse, nous vous donnons une soumission selon votre véhicule, l'endroit où il se trouve, la destination et la situation. C'est gratuit et sans obligation : vous décidez ensuite, en connaissant le montant." },
])}

<section class="mid-form" aria-labelledby="mid-titre">
  <div class="container">
    <div class="grid-2">
      <div>
        <span class="overline">Pas une urgence?</span>
        <h2 id="mid-titre">Planifiez un remorquage ou un transport de véhicule</h2>
        <p class="lead" style="color:var(--on-dark);margin-top:1rem">Achat d'une auto usagée, véhicule à amener au garage pour une réparation, roulotte à déplacer ou vieille voiture à faire enlever : remplissez le formulaire et nous vous rappelons avec une soumission.</p>
        ${checks(["Soumission gratuite et sans obligation", "Destination de votre choix", "Plateau disponible pour AWD, 4x4 et électriques", "Transport local ou longue distance"])}
        <p class="hero-phone" style="margin-top:1rem">Vous préférez en parler? <a href="tel:${SITE.phoneE164}" data-loc="mid-form">${SITE.phone}</a></p>
      </div>
      ${leadForm({ id: "soumission-2", title: "Recevez votre soumission", sub: "Décrivez le véhicule, l'endroit où il se trouve et la destination." })}
    </div>
  </div>
</section>

<section aria-labelledby="processus-titre">
  <div class="container">
    <div class="section-head"><span class="overline">Comment ça fonctionne</span><h2 id="processus-titre">Votre remorquage à Joliette en 4 étapes</h2></div>
    ${steps([
      ["Vous appelez", `Composez le ${SITE.phone}, jour et nuit. Indiquez où vous êtes, le véhicule (marque, modèle, traction) et ce qui se passe.`],
      ["Soumission claire", "On vous donne le prix selon la distance et la situation, avant d'envoyer qui que ce soit. Vous acceptez seulement si ça vous convient."],
      ["Intervention", "Un partenaire certifié se présente avec l'équipement adapté : roues levées, plateau, treuil ou appareil de survoltage."],
      ["Destination de votre choix", "Votre véhicule est livré au garage, chez le concessionnaire, à la maison ou à l'atelier désigné par votre assureur."],
    ])}
  </div>
</section>

<section class="bg-soft" aria-labelledby="zones-titre">
  <div class="container">
    <div class="section-head"><span class="overline">Zones desservies</span>
      <h2 id="zones-titre">Remorquage à Joliette et dans 16 municipalités voisines</h2>
      <p style="margin-top:.75rem">Joliette est le carrefour de Lanaudière : l'autoroute 31 la relie à l'autoroute 40 à Lavaltrie, la route 158 la traverse d'ouest en est et la route 131 remonte vers ${zLink("saint-felix-de-valois", "Saint-Félix-de-Valois")} et ${zLink("saint-jean-de-matha", "Saint-Jean-de-Matha")}. Nous desservons toute la MRC de Joliette ainsi que les municipalités voisines de Matawinie, de D'Autray, de Montcalm et de L'Assomption.</p>
    </div>
    ${zonesGroups()}
  </div>
</section>

<section aria-labelledby="apropos-titre">
  <div class="container grid-2">
    <div>
      <span class="overline">Qui sommes-nous</span>
      <h2 id="apropos-titre" class="mb-2">Un service de remorquage local, pensé pour les gens de Joliette</h2>
      <p>Quand votre auto vous laisse tomber, vous voulez deux choses : parler à quelqu'un tout de suite et savoir combien ça va coûter. Remorquage Joliette a été créé pour ça. Un seul numéro, ouvert en tout temps, qui vous met en contact avec des remorqueurs qualifiés de la région.</p>
      <p>Nos partenaires certifiés connaissent les boulevards Base-de-Roc et Firestone, les rangs de Saint-Thomas, les côtes de Rawdon et les bretelles de l'autoroute 31. Que vous soyez un automobiliste en panne, un garage qui doit faire déplacer un véhicule ou une entreprise avec une flotte de camions, on s'occupe de vous du premier appel à la livraison.</p>
      <p style="margin-top:1.5rem"><a href="/a-propos/" class="btn btn-outline">En savoir plus sur nous</a></p>
    </div>
    <div class="aside-box">
      <h3>Guides pratiques pour les automobilistes</h3>
      <ul>
        <li>${gLink("que-faire-apres-accident-auto", "Accident d'auto : que faire dans les 30 premières minutes")}</li>
        <li>${gLink("panne-sur-autoroute-securite", "Panne sur l'autoroute 40 ou 31 : les bons réflexes")}</li>
        <li>${gLink("batterie-a-plat-par-grand-froid", "Batterie à plat par grand froid")}</li>
        <li>${gLink("choisir-un-remorqueur", "Comment choisir un remorqueur fiable")}</li>
        <li>${gLink("plateau-ou-remorquage-conventionnel", "Plateau ou remorquage conventionnel?")}</li>
        <li>${gLink("voiture-dans-le-fosse-hiver", "Votre voiture a pris le fossé : quoi faire")}</li>
        <li>${gLink("vehicule-remorque-ou-saisi", "Véhicule remorqué ou saisi : comment le récupérer")}</li>
      </ul>
    </div>
  </div>
</section>

${faqBlock(faq, "Questions fréquentes sur le remorquage à Joliette")}
${ctaBand("En panne à Joliette ou dans Lanaudière?", `Appelez-nous au ${SITE.phone}, 24 heures sur 24, 7 jours sur 7. Soumission gratuite et sans obligation.`)}
`;

export default {
  kind: "home",
  path: "/",
  title: "Remorquage Joliette 24/7 | Remorqueuse et dépannage",
  description: "Remorquage à Joliette 24 h sur 24 : remorqueuse, plateau, accident, survoltage et sortie de fossé dans Lanaudière. Soumission gratuite au 450-915-0067.",
  h1: "Remorquage à Joliette, 24 h sur 24, 7 jours sur 7",
  faq,
  body,
};
