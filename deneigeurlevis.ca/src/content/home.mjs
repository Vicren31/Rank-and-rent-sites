import { SITE, ICONS, leadForm, checks, trustBar, zonesGroups, faqBlock, ctaBand, pillars, steps, serviceUrl, sLink, gLink, zLink } from "../components.mjs";
import { SERVICES } from "../data.mjs";

const faq = [
  { q: "Combien coûte un contrat de déneigement à Lévis?", a: `<p>Pour une entrée résidentielle standard, la plupart des contrats saisonniers dans la région de Lévis se situent entre 450 $ et 850 $ par hiver, taxes en sus. Le prix dépend surtout de la longueur et de la largeur de l'entrée, des extras choisis (escaliers, balcon, abrasif) et de la complexité du terrain. Consultez notre <a href="/prix-deneigement-levis/">guide des prix du déneigement à Lévis</a> pour les fourchettes détaillées, puis demandez une soumission gratuite pour un prix exact.</p>` },
  { q: "Quand faut-il signer son contrat de déneigement?", a: `<p>Idéalement entre la fin de l'été et la fin d'octobre. Les routes de déneigement se remplissent vite à l'automne et les entrepreneurs planifient leurs circuits avant la première neige. En signant tôt, vous vous assurez une place et vous avez le temps de comparer les contrats sans pression.</p>` },
  { q: "À partir de combien de centimètres passez-vous?", a: `<p>Le seuil de déclenchement est inscrit dans votre contrat. La norme dans la région est un passage à partir d'environ 5 cm d'accumulation, avec des passages supplémentaires lors des grosses tempêtes. Nous vous indiquons clairement le seuil avant la signature pour éviter toute surprise.</p>` },
  { q: "Déneigez-vous aussi les escaliers et les balcons?", a: `<p>Oui. Le ${sLink("deneigement-manuel-balcons-escaliers", "déneigement manuel des balcons, escaliers et trottoirs")} peut être ajouté à votre contrat saisonnier ou demandé séparément. C'est l'option la plus populaire auprès des aînés et des familles qui partent tôt le matin.</p>` },
  { q: "Quels secteurs de Lévis desservez-vous?", a: `<p>Nous desservons les 12 secteurs de Lévis répartis dans les trois arrondissements : Desjardins (Vieux-Lévis, Lauzon, Saint-David, Pintendre, Saint-Joseph-de-la-Pointe-de-Lévy), Les Chutes-de-la-Chaudière-Est (Saint-Romuald, Saint-Jean-Chrysostome, Charny, Breakeyville) et Les Chutes-de-la-Chaudière-Ouest (Saint-Nicolas, Saint-Rédempteur, Saint-Étienne-de-Lauzon). Voir toutes les <a href="/zones-desservies/">zones desservies</a>.</p>` },
  { q: "Est-ce que je peux pousser ma neige dans la rue à Lévis?", a: `<p>Non. Déposer la neige de votre terrain dans la rue, sur le trottoir ou dans un parc municipal est interdit et peut entraîner un constat d'infraction. La Ville délivre toutefois un permis de dépôt de neige dans certains cas précis. Tous les détails sont dans notre guide sur les ${gLink("reglements-deneigement-levis", "règlements de déneigement à Lévis")}.</p>` },
  { q: "Vos entrepreneurs sont-ils assurés?", a: `<p>Oui. Les équipes qui effectuent le déneigement sont assurées en responsabilité civile, et une preuve d'assurance peut vous être fournie sur demande. C'est d'ailleurs l'une des premières vérifications que recommande l'Office de la protection du consommateur avant d'engager un déneigeur.</p>` },
  { q: "Offrez-vous le déneigement à l'unité, sans contrat?", a: `<p>Oui, selon les disponibilités lors des tempêtes. Le ${sLink("deneigement-a-l-unite", "déneigement à l'unité")} convient bien pour un dépannage, une maison à vendre, un chalet ou une entrée rarement utilisée. Pour une résidence principale, le contrat saisonnier reste généralement plus avantageux.</p>` },
];

const problems = [
  ["Les grosses bordées et les accumulations", "La région de Québec reçoit en moyenne près de 300 cm de neige par hiver (normales climatiques d'Environnement Canada, station de l'aéroport Jean-Lesage). À Lévis, une seule tempête peut laisser 25 à 40 cm au sol. Nos équipes effectuent un passage dès que le seuil prévu au contrat est atteint, puis reviennent au besoin pendant les longues tempêtes pour que votre entrée ne devienne jamais impraticable."],
  ["Le banc de neige laissé par la charrue", "Quand la Ville déneige votre rue, la charrue repousse un cordon de neige dure et compacte au bout de votre entrée. C'est souvent la partie la plus pénible à pelleter. Le dégagement de ce banc est prévu dans nos contrats résidentiels, et la loi interdit de remettre cette neige dans la rue : nous la replaçons sur votre terrain, aux endroits convenus."],
  ["La glace, les redoux et le verglas", "Les cycles de gel et de dégel sont fréquents sur la Rive-Sud, surtout en début et en fin de saison. Une entrée bien déneigée peut devenir une patinoire en quelques heures après une pluie verglaçante. Nous offrons l'" + `<a href="${serviceUrl("epandage-abrasif-deglacage")}">épandage d'abrasif et le déglaçage</a>` + " pour garder vos surfaces praticables et réduire les risques de chute."],
  ["Les escaliers, balcons et trottoirs privés", "Au Canada, les chutes sont la principale cause d'hospitalisation liée à une blessure chez les personnes âgées (Agence de la santé publique du Canada). Les marches glacées et les balcons enneigés en sont une cause fréquente. Notre équipe de pelletage manuel dégage les accès que la machinerie ne peut pas atteindre, pour que vous puissiez sortir de chez vous en toute sécurité."],
  ["Le stationnement de nuit et les opérations de la Ville", "Du 1er décembre au 15 mars, la Ville de Lévis peut interdire le stationnement dans les rues de 23 h à 7 h lorsqu'une opération de déneigement est en cours, sous peine d'une amende de 40 $. Une entrée dégagée à temps vous permet de rentrer votre voiture sans stress, même quand l'avis est annoncé en fin de soirée."],
  ["Le manque d'espace pour entreposer la neige", "Sur les petits terrains du Vieux-Lévis ou dans les stationnements de multilogements, la neige finit par ne plus avoir de place. Plutôt que de la pousser dans la rue, ce qui est interdit, nous proposons le " + `<a href="${serviceUrl("soufflage-transport-neige")}">soufflage et le transport de neige</a>` + " pour libérer l'espace et garder vos cases de stationnement utilisables tout l'hiver."],
];

const homeServices = {
  "deneigement-residentiel-levis": "Le service le plus demandé à Lévis : votre entrée de cour et votre espace de stationnement déneigés après chaque chute de neige qui atteint le seuil prévu, y compris le banc laissé par la charrue municipale. Tracteurs et souffleuses adaptés aux entrées de banlieue.",
  "contrat-deneigement-saisonnier": "Un seul prix pour toute la saison, du 15 novembre au 15 avril environ, peu importe le nombre de bordées. Contrat écrit précisant le seuil de déclenchement, les zones déneigées, les extras et les modalités de paiement.",
  "deneigement-a-l-unite": "Pas besoin de contrat : un passage ponctuel pour une grosse tempête, une propriété à vendre, un chalet ou un retour de vacances. Offert selon les disponibilités, car les clients sous contrat sont servis en priorité pendant les tempêtes.",
  "deneigement-manuel-balcons-escaliers": "Pelletage à la main des marches, du balcon, de la galerie, du trottoir privé et de l'accès au cabanon. Un ajout populaire pour les aînés, les familles et les propriétaires qui partent tôt le matin.",
  "epandage-abrasif-deglacage": "Épandage de sable, de gravier ou de sel selon la surface et la température, pour limiter la glace sur l'entrée et les accès piétons après un redoux ou une pluie verglaçante.",
  "deneigement-condos-multilogements": "Stationnements partagés, allées, entrées de garage et sorties d'urgence pour les syndicats de copropriété, les plex et les immeubles locatifs. Horaire planifié pour que tous les résidents puissent partir le matin.",
  "deneigement-commercial-levis": "Commerces, bureaux, cliniques et petites entreprises : stationnement, accès clients et trottoirs dégagés avant l'ouverture, avec abrasif pour réduire les risques de chute sur votre propriété.",
  "soufflage-transport-neige": "Quand les bancs deviennent trop hauts ou que l'espace manque, nous soufflons les accumulations plus loin sur le terrain ou les chargeons et transportons hors du site.",
};

const body = `
<section class="hero">
  <div class="container">
    <div class="hero-grid">
      <div>
        <span class="overline" style="color:#FDBA74">Déneigeur à Lévis et environs</span>
        <h1>Déneigement résidentiel à Lévis, <span class="accent">sans sortir la pelle</span></h1>
        <p class="lead">Si vous cherchez un service de déneigement à Lévis fiable pour votre entrée de cour, votre balcon ou votre stationnement, notre équipe s'en occupe tout l'hiver. Contrat saisonnier clair, entrepreneurs assurés et soumission gratuite, dans les 12 secteurs de Lévis.</p>
        ${checks(["Contrats saisonniers et déneigement à l'unité", "Balcons, escaliers et trottoirs à la pelle", "Épandage d'abrasif contre la glace", "Résidentiel, condos et commercial"])}
        <div class="btn-row">
          <a href="tel:${SITE.phoneE164}" data-loc="hero" class="btn btn-primary">${ICONS.phone}Appelez le ${SITE.phone}</a>
          <a href="#soumission" class="btn btn-ghost-light">Soumission en ligne</a>
        </div>
      </div>
      ${leadForm({ id: "soumission", title: "Soumission gratuite pour votre déneigement", sub: "Sans obligation. Dites-nous où vous êtes et ce que vous voulez faire déneiger." })}
    </div>
  </div>
  <div class="hero-landscape" aria-hidden="true"></div>
</section>

${trustBar()}

<section id="services" aria-labelledby="services-titre">
  <div class="container">
    <div class="section-head"><span class="overline">Nos services</span>
      <h2 id="services-titre">Nos services de déneigement à Lévis</h2>
      <p class="lead" style="margin-top:.75rem">Du contrat saisonnier pour votre entrée au déneigement complet d'un stationnement commercial, choisissez le service qui correspond à votre propriété. Tous nos services commencent par une soumission gratuite et sans obligation.</p>
    </div>
    <div class="grid-3">
      ${SERVICES.map((s) => `<a class="card" href="${serviceUrl(s.slug)}"><span class="icon">${ICONS[s.icon]}</span><h3>${s.name}</h3><p>${homeServices[s.slug]}</p><span class="more">Voir le service →</span></a>`).join("\n      ")}
      <a class="card" href="/prix-deneigement-levis/" style="background:var(--navy);border-color:var(--navy);color:#DCE7F3"><span class="icon" style="background:var(--orange)">${ICONS.tag}</span><h3 style="color:#fff">Combien coûte le déneigement à Lévis?</h3><p>Consultez les fourchettes de prix observées dans la région pour une entrée simple, double ou grande, et ce qui fait varier le coût d'un contrat.</p><span class="more" style="color:#FDBA74">Voir les prix →</span></a>
    </div>
  </div>
</section>

<section class="bg-ice" aria-labelledby="problemes-titre">
  <div class="container">
    <div class="section-head"><span class="overline">L'hiver à Lévis</span>
      <h2 id="problemes-titre">Quels problèmes d'hiver réglons-nous pour les propriétaires de Lévis?</h2>
      <p style="margin-top:.75rem">Un bon service de déneigement ne se limite pas à passer la souffleuse. Voici les situations les plus fréquentes que nos équipes règlent chaque hiver sur la Rive-Sud.</p>
    </div>
    <div class="grid-3">
      ${problems.map(([h, p]) => `<div class="pillar"><h3>${h}</h3><p>${p}</p></div>`).join("\n      ")}
    </div>
  </div>
</section>

${pillars([
  { fact: "Assurance responsabilité civile", h: "Des entrepreneurs assurés, preuve à l'appui", p: "Un bris de clôture, une bordure de pavé uni accrochée ou une porte de garage endommagée, ça peut arriver avec de la machinerie lourde. C'est pourquoi les équipes qui déneigent votre propriété sont assurées en responsabilité civile. Vous pouvez demander la preuve d'assurance avant de signer, comme le recommande l'Office de la protection du consommateur." },
  { fact: "Contrat écrit et détaillé", h: "Un contrat clair, sans petits caractères", p: "Seuil de déclenchement, dates de début et de fin, zones déneigées, extras, modalités de paiement et d'annulation : tout est écrit noir sur blanc avant la saison. Vous savez exactement ce que vous payez et ce qui est inclus. Pas de frais cachés, et aucune surprise au premier redoux." },
  { fact: "12 secteurs de Lévis", h: "Une équipe qui connaît Lévis", p: "Des rues en pente du Vieux-Lévis aux grands terrains de Saint-Étienne-de-Lauzon, chaque secteur a ses particularités : poudrerie en milieu ouvert, bancs de charrue imposants, petites entrées étroites. Nos circuits sont planifiés par secteur pour desservir efficacement Desjardins et les deux arrondissements des Chutes-de-la-Chaudière." },
])}

<section class="mid-form" aria-labelledby="mid-titre">
  <div class="container">
    <div class="grid-2">
      <div>
        <span class="overline" style="color:#FDBA74">Réservez votre place pour l'hiver</span>
        <h2 id="mid-titre">Les circuits de déneigement se remplissent à l'automne</h2>
        <p class="lead" style="color:#DCE7F3;margin-top:1rem">Chaque entrepreneur ne peut desservir qu'un nombre limité d'adresses par circuit. Demandez votre soumission maintenant pour comparer tranquillement, sans aucune obligation.</p>
        ${checks(["Soumission gratuite et sans obligation", "Prix fixe pour toute la saison", "Extras au choix : escaliers, balcon, abrasif", "Paiement en un ou plusieurs versements selon l'entente"])}
        <p class="hero-phone" style="margin-top:1rem">Vous préférez en parler? ${`<a href="tel:${SITE.phoneE164}" data-loc="mid-form">${SITE.phone}</a>`}</p>
      </div>
      ${leadForm({ id: "soumission-2", title: "Recevez votre prix pour la saison", sub: "Nous vous rappelons pour confirmer les dimensions de votre entrée." })}
    </div>
  </div>
</section>

<section aria-labelledby="processus-titre">
  <div class="container">
    <div class="section-head"><span class="overline">Comment ça fonctionne</span><h2 id="processus-titre">Votre déneigement à Lévis en 4 étapes</h2></div>
    ${steps([
      ["Demande de soumission", "Remplissez le formulaire ou appelez-nous au " + SITE.phone + ". Indiquez votre secteur, le type de projet et les particularités de votre entrée."],
      ["Évaluation de votre terrain", "Nous confirmons les dimensions de l'entrée, les zones à déneiger, l'endroit où entreposer la neige et les extras souhaités."],
      ["Contrat écrit", "Vous recevez un contrat clair : prix, seuil de déclenchement, dates de la saison et conditions. Vous signez seulement si tout vous convient."],
      ["Installation des piquets et saison", "Les piquets sont posés avant le gel, puis votre entrée est déneigée après chaque bordée, jusqu'à la fin de la saison."],
    ])}
  </div>
</section>

<section class="bg-ice" aria-labelledby="zones-titre">
  <div class="container">
    <div class="section-head"><span class="overline">Zones desservies</span>
      <h2 id="zones-titre">Déneigement dans tous les secteurs de Lévis</h2>
      <p style="margin-top:.75rem">Depuis la fusion de 2002, Lévis regroupe dix anciennes municipalités réparties en trois arrondissements, pour près de 159 000 habitants. Nous desservons chacun de ces secteurs, de ${zLink("saint-etienne-de-lauzon", "Saint-Étienne-de-Lauzon")} à l'ouest jusqu'à ${zLink("saint-joseph-de-la-pointe-de-levy", "Saint-Joseph-de-la-Pointe-de-Lévy")} à l'est.</p>
    </div>
    ${zonesGroups()}
  </div>
</section>

<section aria-labelledby="apropos-titre">
  <div class="container grid-2">
    <div>
      <span class="overline">Qui sommes-nous</span>
      <h2 id="apropos-titre" class="mb-2">Un service de déneigement pensé pour les résidents de Lévis</h2>
      <p>Déneigeur Lévis est né d'un constat simple : trouver un déneigeur fiable sur la Rive-Sud est devenu compliqué. Listes d'attente, contrats flous, appels sans retour. Nous avons bâti un service local qui répond au téléphone, qui explique clairement ses prix et qui se présente après chaque bordée.</p>
      <p>Notre équipe et nos partenaires certifiés travaillent avec de l'équipement professionnel entretenu avant chaque saison, et chaque client reçoit un contrat écrit. Que vous habitiez un bungalow à Charny, une maison de ville à Saint-Nicolas ou un plex dans le Vieux-Lévis, vous parlez à des gens qui connaissent votre secteur.</p>
      <p style="margin-top:1.5rem"><a href="/a-propos/" class="btn btn-outline">En savoir plus sur nous</a></p>
    </div>
    <div class="aside-box">
      <h3>Guides pratiques pour l'hiver</h3>
      <ul>
        <li>${gLink("reglements-deneigement-levis", "Règlements de déneigement à Lévis")}</li>
        <li>${gLink("contrat-saisonnier-ou-a-l-unite", "Contrat saisonnier ou à l'unité?")}</li>
        <li>${gLink("choisir-deneigeur-levis", "Comment choisir un déneigeur")}</li>
        <li>${gLink("piquets-balises-deneigement", "Piquets et balises : protéger votre terrain")}</li>
        <li>${gLink("preparer-entree-avant-hiver", "Préparer votre entrée avant l'hiver")}</li>
      </ul>
    </div>
  </div>
</section>

${faqBlock(faq, "Questions fréquentes sur le déneigement à Lévis")}
${ctaBand("Réservez votre déneigement pour cet hiver", "Soumission gratuite et sans obligation, partout à Lévis. Appelez-nous ou remplissez le formulaire en ligne.")}
`;

export default {
  kind: "home",
  path: "/",
  title: "Déneigement à Lévis | Déneigeur Lévis, soumission gratuite",
  description: "Déneigement résidentiel à Lévis : contrat saisonnier, entrée de cour, balcons, escaliers et abrasif. Entrepreneurs assurés. Soumission gratuite au 365-334-9481.",
  h1: "Déneigement résidentiel à Lévis",
  faq,
  body,
};
