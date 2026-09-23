import { SITE, ICONS, serviceUrl, sLink, gLink, zLink, guideUrl } from "../components.mjs";
import { GUIDES } from "../data.mjs";

function page(o) {
  const g = GUIDES.find((x) => x.slug === o.slug);
  const others = GUIDES.filter((x) => x.slug !== o.slug);
  return {
    kind: "guide",
    path: guideUrl(o.slug),
    title: o.title,
    description: o.description,
    h1: g.name,
    lead: o.lead,
    heroForm: false,
    date: o.date,
    breadcrumbs: [{ name: "Conseils", path: "/conseils/" }, { name: o.crumb, path: guideUrl(o.slug) }],
    faq: o.faq,
    faqTitle: o.faqTitle,
    body: `<section><div class="container layout-aside"><article class="prose">${o.prose}</article>
<aside class="aside-sticky" aria-label="À lire aussi">
  <div class="aside-box" style="background:var(--navy);border-color:var(--navy);color:#DCE7F3"><h2 style="color:#fff">Soumission gratuite</h2><p>Confiez votre déneigement à une équipe de Lévis. Sans obligation.</p><p style="margin-top:1rem"><a href="tel:${SITE.phoneE164}" data-loc="aside-guide" class="btn btn-primary" style="width:100%">${ICONS.phone}${SITE.phone}</a></p><p style="margin-top:.6rem"><a href="/contact/" class="btn btn-ghost-light" style="width:100%">Formulaire en ligne</a></p></div>
  <div class="aside-box"><h2>Autres guides</h2><ul>${others.map((x) => `<li><a href="${guideUrl(x.slug)}">${x.name}</a></li>`).join("")}</ul></div>
</aside></div></section>`,
  };
}

export default [
  page({
    slug: "reglements-deneigement-levis",
    crumb: "Règlements de déneigement",
    title: "Règlements de déneigement à Lévis : le guide 2026",
    description: "Neige dans la rue, stationnement de nuit, permis de dépôt de neige : les règlements de déneigement à Lévis expliqués simplement pour les propriétaires.",
    lead: "Pousser sa neige dans la rue, stationner la nuit l'hiver, obtenir un permis de dépôt : voici les règles municipales que tout propriétaire de Lévis devrait connaître avant la première neige.",
    prose: `
<p>Les règlements de déneigement à Lévis encadrent ce que vous pouvez faire de la neige de votre terrain et où vous pouvez stationner pendant l'hiver. Les connaître vous évite des constats d'infraction et facilite le travail des équipes de la Ville comme celui de votre déneigeur. Voici un résumé clair des principales règles.</p>
<div class="callout"><strong>Important :</strong> les règlements peuvent être modifiés par la Ville. Ce guide résume l'information publiée par la Ville de Lévis au moment de sa rédaction. Pour toute situation particulière, vérifiez auprès de la Ville de Lévis ou sur son site Web officiel.</div>

<h2>1. Interdit de déposer sa neige dans la rue</h2>
<p>C'est la règle la plus importante. Il est interdit de déposer la neige accumulée sur votre terrain dans la rue, sur le trottoir, dans une aire de stationnement ou dans un parc appartenant à la Ville. Cette interdiction découle du Code de la sécurité routière. Si un patrouilleur constate l'infraction, vous pourriez recevoir un constat et devoir payer une amende.</p>
<p>La règle s'applique à vous comme à votre déneigeur. Un entrepreneur sérieux replace toujours la neige sur votre terrain, aux endroits convenus, ou la transporte vers un lieu autorisé. C'est l'une des raisons pour lesquelles il faut bien prévoir, dès l'automne, où ira la neige sur votre propriété.</p>

<h2>2. Le permis de dépôt de neige dans la rue</h2>
<p>La Ville de Lévis prévoit une exception encadrée : un permis de dépôt de neige dans la rue, pour certaines propriétés qui n'ont pas d'espace suffisant. Selon l'information publiée par la Ville :</p>
<ul>
  <li>aucun permis n'est accordé si la superficie à déneiger dépasse 300 m²;</li>
  <li>des frais de 6,50 $ par mètre carré de superficie à déneiger s'appliquent;</li>
  <li>le permis est valide du 1er novembre au 30 avril suivant;</li>
  <li>la neige doit être déposée en bordure de la chaussée avant le passage des équipes de déneigement, selon la période autorisée par la Ville.</li>
</ul>
<p>Pour une entrée de 60 m², par exemple, les frais de permis seraient d'environ 390 $. Dans bien des cas, il est plus simple de prévoir le <a href="${serviceUrl("soufflage-transport-neige")}">soufflage ou le transport de la neige</a> lorsque l'espace manque.</p>

<h2>3. Le stationnement dans la rue l'hiver</h2>
<p>La Ville de Lévis encadre le stationnement de nuit dans les rues pendant la période hivernale, du 1er décembre au 15 mars. Les principales règles publiées :</p>
<ul>
  <li>lorsqu'une <strong>opération de déneigement</strong> est en cours, il est interdit de stationner sur la voie publique de <strong>23 h à 7 h</strong>;</li>
  <li>une opération de déneigement peut avoir lieu même par beau temps, après la fin des précipitations, pour ramasser ou souffler la neige;</li>
  <li>sur certaines rues, une signalisation indique une interdiction de stationner la nuit pendant toute la période hivernale;</li>
  <li>en dehors de ces situations, il est permis de stationner dans la rue;</li>
  <li>une infraction est passible d'une amende de <strong>40 $</strong>.</li>
</ul>
<p>La Ville diffuse le statut des opérations de déneigement et offre des avis par texto et par courriel. S'abonner à ces avis est le meilleur moyen de savoir quand déplacer votre voiture. La Ville met aussi à la disposition des résidents des stationnements de courtoisie lors des opérations.</p>

<h2>4. Ce que ces règles changent pour votre entrée</h2>
<p>En pratique, ces règlements ont trois conséquences pour les propriétaires :</p>
<ol>
  <li><strong>Votre entrée doit être dégagée assez tôt</strong> pour y rentrer votre voiture lorsqu'une opération est annoncée pour la nuit.</li>
  <li><strong>La neige doit rester sur votre terrain</strong> : il faut prévoir de l'espace de dépôt, surtout dans les secteurs denses comme le ${zLink("vieux-levis")} ou ${zLink("lauzon")}.</li>
  <li><strong>Le banc de la charrue fait partie du jeu</strong> : la Ville déneige la rue et repousse la neige vers les bords, y compris devant votre entrée. Ce banc doit être dégagé sur votre terrain, pas remis dans la rue.</li>
</ol>

<h2>5. Les bornes-fontaines et la sécurité</h2>
<p>Même si ce n'est pas toujours inscrit dans un règlement propre au déneigement résidentiel, il est essentiel de ne jamais enfouir une borne-fontaine sous un banc de neige. En cas d'incendie, chaque minute compte. Si une borne se trouve en bordure de votre terrain, gardez-la visible et accessible, et signalez-la à votre déneigeur.</p>

<h2>En résumé</h2>
<div class="table-wrap"><table>
  <thead><tr><th>Règle</th><th>Ce qu'il faut retenir</th></tr></thead>
  <tbody>
    <tr><td>Neige dans la rue</td><td>Interdit, sauf permis de dépôt; constat d'infraction possible</td></tr>
    <tr><td>Permis de dépôt</td><td>6,50 $/m², maximum 300 m², valide du 1er novembre au 30 avril</td></tr>
    <tr><td>Période hivernale</td><td>Du 1er décembre au 15 mars</td></tr>
    <tr><td>Opération de déneigement</td><td>Stationnement interdit dans la rue de 23 h à 7 h</td></tr>
    <tr><td>Amende</td><td>40 $ pour une infraction au stationnement hivernal</td></tr>
  </tbody>
</table></div>
<p class="source">Source : information publiée par la Ville de Lévis (sections Déneigement, Consignes, Permis de dépôt de neige et Règlementation entourant le stationnement en période hivernale). Vérifiez toujours auprès de la Ville pour la version la plus récente.</p>
<p>Vous voulez une entrée dégagée à temps, sans vous soucier de ces règles? Voyez notre service de ${sLink("deneigement-residentiel-levis", "déneigement résidentiel à Lévis")}.</p>`,
    faq: [
      { q: "Mon déneigeur peut-il pousser la neige de l'autre côté de la rue?", a: "Non. Déposer la neige d'un terrain privé dans la rue ou sur un terrain public est interdit, que ce soit par le propriétaire ou par son déneigeur. La neige doit rester sur votre terrain ou être transportée dans un lieu autorisé." },
      { q: "Comment savoir si une opération de déneigement est prévue cette nuit?", a: "La Ville de Lévis publie le statut des opérations de déneigement et offre des avis par texto et par courriel. L'abonnement à ces avis est la façon la plus simple d'être informé." },
      { q: "Le permis de dépôt de neige vaut-il la peine?", a: "Il peut être utile pour une petite propriété sans espace de dépôt. Pour la plupart des terrains, il est plus avantageux de placer la neige sur le terrain ou de faire souffler les bancs lorsque l'espace manque." },
    ],
    faqTitle: "Questions sur les règlements de déneigement à Lévis",
  }),

  page({
    slug: "contrat-saisonnier-ou-a-l-unite",
    crumb: "Saisonnier ou à l'unité",
    title: "Contrat de déneigement saisonnier ou à l'unité?",
    description: "Contrat de déneigement saisonnier ou à l'unité : comparaison des coûts, de la priorité et de la flexibilité pour choisir la bonne formule à Lévis.",
    lead: "Payer une fois pour tout l'hiver, ou seulement quand il neige? Voici comment comparer les deux formules selon votre propriété et votre budget.",
    prose: `
<p>Contrat saisonnier ou déneigement à l'unité : c'est la première question que se posent les propriétaires de Lévis à l'automne. La bonne réponse dépend surtout de l'usage de votre propriété. Voici une comparaison honnête des deux formules.</p>

<h2>Le contrat saisonnier en bref</h2>
<p>Avec un ${sLink("contrat-deneigement-saisonnier", "contrat saisonnier")}, vous payez un prix fixe pour toute la saison, généralement de la mi-novembre à la mi-avril. Votre entrée est déneigée chaque fois que l'accumulation atteint le seuil prévu, sans limite du nombre de passages.</p>
<ul>
  <li><strong>Avantages</strong> : budget fixe, priorité lors des tempêtes, aucune démarche à faire pendant l'hiver.</li>
  <li><strong>Inconvénient</strong> : vous payez le même prix même si l'hiver est peu enneigé.</li>
</ul>

<h2>Le déneigement à l'unité en bref</h2>
<p>Avec le ${sLink("deneigement-a-l-unite", "déneigement à l'unité")}, vous appelez quand vous avez besoin d'un passage et vous payez chaque intervention.</p>
<ul>
  <li><strong>Avantages</strong> : aucun engagement, vous payez seulement ce que vous utilisez.</li>
  <li><strong>Inconvénients</strong> : prix plus élevé par passage, disponibilité non garantie lors des grosses tempêtes, budget imprévisible.</li>
</ul>

<h2>Faisons le calcul</h2>
<p>La région de Québec reçoit en moyenne près de 300 cm de neige par hiver selon les normales climatiques d'Environnement Canada. Avec un seuil de déclenchement d'environ 5 cm, une entrée résidentielle demande typiquement une vingtaine de passages, parfois beaucoup plus lors d'un hiver chargé.</p>
<div class="table-wrap"><table>
  <thead><tr><th>Scénario (entrée simple)</th><th>Contrat saisonnier</th><th>À l'unité (environ 75 $ le passage)</th></tr></thead>
  <tbody>
    <tr><td>Hiver peu enneigé : 12 passages</td><td>environ 550 $</td><td>environ 900 $</td></tr>
    <tr><td>Hiver moyen : 20 passages</td><td>environ 550 $</td><td>environ 1 500 $</td></tr>
    <tr><td>Hiver chargé : 30 passages</td><td>environ 550 $</td><td>environ 2 250 $</td></tr>
  </tbody>
</table></div>
<p class="source">Exemple illustratif basé sur des fourchettes de prix observées dans la région; les prix réels varient selon l'entrée et l'entrepreneur. Voir les <a href="/prix-deneigement-levis/">prix du déneigement à Lévis</a>.</p>
<p>Pour une résidence principale utilisée tous les jours, le contrat saisonnier est donc presque toujours gagnant, même lors d'un hiver doux.</p>

<h2>Quand choisir le déneigement à l'unité</h2>
<ul>
  <li>Une propriété que vous n'utilisez pas l'hiver, ou très peu.</li>
  <li>Une maison à vendre, en succession ou inoccupée pour quelques semaines.</li>
  <li>Un dépannage ponctuel : souffleuse brisée, retour de voyage, tempête exceptionnelle.</li>
  <li>Une entrée très courte que vous déneigez vous-même la plupart du temps.</li>
</ul>

<h2>Quand choisir le contrat saisonnier</h2>
<ul>
  <li>Votre résidence principale, avec une voiture utilisée tous les jours.</li>
  <li>Vous partez travailler tôt et ne pouvez pas attendre qu'un déneigeur soit disponible.</li>
  <li>Vous voulez un budget fixe et connu dès l'automne.</li>
  <li>Vous voulez ajouter des extras comme les escaliers ou l'abrasif.</li>
</ul>

<h2>La formule hybride</h2>
<p>Certains propriétaires choisissent un contrat saisonnier pour l'entrée et demandent à l'unité des services ponctuels comme le ${sLink("soufflage-transport-neige", "soufflage des bancs")} en février ou un ${sLink("epandage-abrasif-deglacage", "épandage d'abrasif")} après un épisode de verglas. C'est une façon de garder un budget prévisible tout en réglant les situations exceptionnelles.</p>`,
    faq: [
      { q: "Est-ce que le contrat saisonnier est remboursé si l'hiver est doux?", a: "Non, le principe du contrat saisonnier est un prix fixe, peu importe la quantité de neige. En contrepartie, vous ne payez pas plus lors d'un hiver très enneigé." },
      { q: "Peut-on passer de l'unité au saisonnier en cours d'hiver?", a: "C'est parfois possible, selon les places disponibles dans les circuits de votre secteur et le moment de la saison. Le prix est alors ajusté en conséquence." },
    ],
    faqTitle: "Questions fréquentes",
  }),

  page({
    slug: "choisir-deneigeur-levis",
    crumb: "Choisir un déneigeur",
    title: "Comment choisir un déneigeur à Lévis : liste de vérification",
    description: "Assurance, contrat écrit, seuil de déclenchement, entreprise enregistrée : la liste de vérification pour bien choisir votre déneigeur à Lévis.",
    lead: "Un bon déneigeur, on s'en rend compte en janvier. Un mauvais aussi. Voici les points à vérifier avant de signer, inspirés des conseils de l'Office de la protection du consommateur.",
    prose: `
<p>Choisir un déneigeur à Lévis, c'est confier votre entrée, votre terrain et une partie de votre tranquillité d'esprit pour cinq mois. Les recommandations de l'Office de la protection du consommateur (OPC) et de CAA-Québec convergent sur quelques points essentiels. Voici notre liste de vérification.</p>

<h2>1. Une entreprise identifiable et joignable</h2>
<p>Un entrepreneur sérieux est facile à identifier : nom d'entreprise, numéro de téléphone qui répond, site Web ou moyen de communication pendant l'hiver. Il devrait être immatriculé au Registraire des entreprises du Québec. Méfiez-vous d'une offre faite uniquement par un numéro de cellulaire, sans aucune trace de l'entreprise.</p>

<h2>2. Une assurance responsabilité civile</h2>
<p>Le déneigement se fait avec de la machinerie lourde, près de vos bordures, de votre clôture, de votre porte de garage et parfois de votre voiture. Demandez si l'entrepreneur est assuré en responsabilité civile et n'hésitez pas à demander une preuve d'assurance. Chez Déneigeur Lévis, les équipes sont assurées et la preuve est fournie sur demande.</p>

<h2>3. Un contrat écrit</h2>
<p>L'OPC recommande fortement un contrat écrit. Il protège les deux parties et évite les malentendus. Vérifiez qu'il précise :</p>
<ul>
  <li>le nom et les coordonnées de l'entreprise;</li>
  <li>les dates de début et de fin de la saison;</li>
  <li>le seuil de déclenchement (par exemple, 5 cm);</li>
  <li>les surfaces déneigées et les extras (escaliers, balcon, abrasif);</li>
  <li>le prix total, les taxes et les modalités de paiement;</li>
  <li>la responsabilité en cas de dommages;</li>
  <li>les conditions d'annulation.</li>
</ul>

<h2>4. Un seuil de déclenchement clair</h2>
<p>Le seuil de déclenchement est l'accumulation à partir de laquelle le déneigeur doit passer. Un seuil trop élevé, comme 10 ou 15 cm, peut vous laisser pelleter souvent. Un seuil autour de 5 cm est courant dans la région. Demandez aussi ce qui se passe lors des longues tempêtes : y a-t-il des passages supplémentaires?</p>

<h2>5. Le banc de la charrue : inclus ou non?</h2>
<p>Le banc de neige dure laissé par la charrue municipale au bout de l'entrée est souvent la partie la plus pénible. Assurez-vous qu'il est inclus dans les passages, et à quel moment il est dégagé.</p>

<h2>6. Des modalités de paiement raisonnables</h2>
<p>Il est courant de payer en un ou plusieurs versements. Méfiez-vous toutefois d'une exigence de paiement complet en argent comptant, sans reçu. Demandez toujours une facture ou un reçu.</p>

<h2>7. Des piquets posés avant le gel</h2>
<p>Un entrepreneur organisé pose ses piquets à l'automne, avant que le sol ne gèle. C'est un bon indice de sérieux. Lisez notre guide sur les ${gLink("piquets-balises-deneigement", "piquets et balises de déneigement")}.</p>

<h2>8. La connaissance des règlements de Lévis</h2>
<p>Un bon déneigeur ne pousse jamais la neige dans la rue, ce qui est interdit à Lévis. Il connaît aussi les contraintes de votre secteur. Pour en savoir plus, consultez notre guide des ${gLink("reglements-deneigement-levis", "règlements de déneigement à Lévis")}.</p>

<h2>La liste en un coup d'œil</h2>
<div class="table-wrap"><table>
  <thead><tr><th>Point à vérifier</th><th>Pourquoi</th></tr></thead>
  <tbody>
    <tr><td>Entreprise identifiable et immatriculée</td><td>Pouvoir la joindre et faire valoir vos droits</td></tr>
    <tr><td>Assurance responsabilité civile</td><td>Couvrir les dommages causés par la machinerie</td></tr>
    <tr><td>Contrat écrit</td><td>Éviter les malentendus sur le service</td></tr>
    <tr><td>Seuil de déclenchement</td><td>Savoir quand le déneigeur doit passer</td></tr>
    <tr><td>Banc de charrue inclus</td><td>Éviter de ressortir la pelle</td></tr>
    <tr><td>Reçu ou facture</td><td>Preuve de paiement</td></tr>
  </tbody>
</table></div>
<p class="source">Sources : Office de la protection du consommateur, conseils avant d'engager un déneigeur; CAA-Québec, contrat de déneigement et entrepreneur.</p>`,
    faq: [
      { q: "Est-ce qu'un déneigeur doit avoir une licence de la RBQ?", a: "Le déneigement ne fait pas partie des travaux de construction qui exigent une licence de la Régie du bâtiment du Québec. Il faut plutôt vérifier l'immatriculation de l'entreprise, son assurance responsabilité civile et la qualité de son contrat." },
      { q: "Que faire si mon déneigeur ne se présente pas?", a: "Communiquez d'abord avec lui par écrit, en citant les clauses du contrat. Si le problème persiste, l'Office de la protection du consommateur explique les recours possibles. D'où l'importance d'un contrat écrit et d'une entreprise joignable." },
    ],
    faqTitle: "Questions fréquentes",
  }),

  page({
    slug: "piquets-balises-deneigement",
    crumb: "Piquets et balises",
    title: "Piquets de déneigement : où et quand les installer",
    description: "Piquets et balises de déneigement : à quoi ils servent, où les placer et quand les installer pour protéger votre terrain, vos bordures et votre pavé uni.",
    lead: "Ces petits piquets orange ou rouges qui apparaissent en octobre ne sont pas là pour décorer : ils sont la première protection de votre terrain contre la machinerie.",
    prose: `
<p>Les piquets de déneigement, qu'on appelle aussi balises ou tiges, indiquent à l'opérateur les limites de votre entrée et les obstacles cachés sous la neige. Bien placés, ils protègent votre gazon, vos bordures, votre pavé uni et vos aménagements. Mal placés ou absents, ils peuvent coûter cher au printemps.</p>

<h2>À quoi servent les piquets?</h2>
<ul>
  <li><strong>Délimiter l'entrée</strong> : l'opérateur sait où s'arrête l'asphalte et où commence le gazon.</li>
  <li><strong>Signaler les obstacles</strong> : bordures de béton, fossés, ponceaux, lampadaires, bornes, petits murets.</li>
  <li><strong>Protéger les aménagements</strong> : plates-bandes, jeunes arbres, arbustes, haies de cèdres.</li>
  <li><strong>Indiquer les zones de dépôt</strong> : où la neige peut être soufflée ou poussée.</li>
</ul>

<h2>Quand installer les piquets?</h2>
<p>Idéalement en octobre ou au début de novembre, <strong>avant que le sol ne gèle</strong>. Une fois le sol gelé, il devient très difficile d'enfoncer les piquets solidement, et un piquet mal ancré tombe à la première gerbe de souffleuse. Chez Déneigeur Lévis, la pose des piquets fait partie de la préparation de la saison pour les clients sous contrat.</p>

<h2>Où placer les piquets : les bonnes pratiques</h2>
<ol>
  <li><strong>De chaque côté de l'entrée</strong>, aux coins et le long des bordures, environ tous les 3 à 5 mètres selon la longueur.</li>
  <li><strong>Au bout de l'entrée</strong>, près de la rue, là où la charrue municipale laisse son banc.</li>
  <li><strong>Devant chaque obstacle</strong> : lampadaire, borne, boîte aux lettres, muret, rocaille.</li>
  <li><strong>Le long des fossés et des ponceaux</strong>, fréquents dans les secteurs plus ruraux comme ${zLink("saint-joseph-de-la-pointe-de-levy")} ou ${zLink("saint-etienne-de-lauzon")}.</li>
  <li><strong>Autour des végétaux fragiles</strong> et des aménagements récents.</li>
</ol>

<h2>Choisir la bonne hauteur</h2>
<div class="table-wrap"><table>
  <thead><tr><th>Situation</th><th>Hauteur recommandée</th></tr></thead>
  <tbody>
    <tr><td>Entrée résidentielle en secteur urbain</td><td>Environ 1,2 m (4 pieds)</td></tr>
    <tr><td>Secteur ouvert exposé à la poudrerie</td><td>1,5 m (5 pieds) ou plus</td></tr>
    <tr><td>Fossés, ponceaux et bordures de champ</td><td>1,5 m à 1,8 m, avec bande réfléchissante</td></tr>
  </tbody>
</table></div>
<p>Les piquets munis d'une bande réfléchissante sont plus visibles la nuit, lorsque la plupart des passages se font.</p>

<h2>Protéger les arbustes et les haies</h2>
<p>Les piquets indiquent où ne pas souffler la neige, mais ils ne protègent pas les végétaux du poids de la neige. Pour les cèdres et les arbustes fragiles, une toile ou une structure de protection hivernale est recommandée, surtout près de l'entrée où la neige soufflée s'accumule.</p>

<h2>Au printemps</h2>
<p>Les piquets sont retirés après la fonte, une fois la saison terminée. C'est aussi le bon moment pour faire le tour du terrain, noter les dommages éventuels et les signaler rapidement à votre déneigeur.</p>
<p>Prêt à préparer votre terrain pour l'hiver? Lisez aussi ${gLink("preparer-entree-avant-hiver", "Préparer votre entrée avant l'hiver")}.</p>`,
    faq: [
      { q: "Qui fournit les piquets de déneigement?", a: "Dans la plupart des contrats résidentiels, c'est le déneigeur qui fournit et installe les piquets à l'automne, puis les retire au printemps. Vérifiez ce point dans votre contrat." },
      { q: "Puis-je installer mes propres piquets?", a: "Oui, mais informez-en votre déneigeur pour qu'il sache à quoi ils correspondent. L'idéal est de faire le tour du terrain ensemble à l'automne." },
    ],
    faqTitle: "Questions sur les piquets de déneigement",
  }),

  page({
    slug: "preparer-entree-avant-hiver",
    crumb: "Préparer son entrée",
    title: "Préparer votre entrée avant l'hiver : 8 gestes simples",
    description: "Réparer les fissures, dégager le terrain, baliser, protéger les arbustes : 8 gestes pour préparer votre entrée et votre terrain avant l'hiver à Lévis.",
    lead: "Quelques heures de préparation en octobre peuvent vous éviter des bris, des infiltrations d'eau et bien des frustrations en janvier.",
    prose: `
<p>Préparer votre entrée avant l'hiver, c'est faciliter le travail de votre déneigeur, protéger votre terrain et éviter les mauvaises surprises au printemps. Voici 8 gestes simples à faire en octobre ou au début de novembre, avant la première neige à Lévis.</p>

<h2>1. Réparer les fissures et les nids-de-poule</h2>
<p>L'eau qui s'infiltre dans les fissures gèle, prend de l'expansion et agrandit les dommages. Colmater les fissures de l'asphalte avant l'hiver limite la dégradation et évite que la lame ou la souffleuse n'accroche un rebord.</p>

<h2>2. Ranger tout ce qui traîne</h2>
<p>Tuyau d'arrosage, jouets, pots de fleurs, rallonges, pierres décoratives : tout ce qui se retrouve sous la neige peut endommager la souffleuse ou être projeté. Faites le tour de l'entrée et de ses abords.</p>

<h2>3. Signaler les obstacles cachés</h2>
<p>Bordures de béton, luminaires au sol, tête de gicleur, petit muret : identifiez-les et signalez-les à votre déneigeur. Ils seront balisés avec des piquets. Voir notre guide ${gLink("piquets-balises-deneigement", "piquets et balises de déneigement")}.</p>

<h2>4. Prévoir où ira la neige</h2>
<p>À Lévis, la neige ne peut pas être poussée dans la rue. Choisissez avec votre déneigeur les zones de dépôt sur votre terrain : loin des fenêtres du sous-sol, des arbustes fragiles et de la pente qui ramènerait l'eau de fonte vers la maison.</p>

<h2>5. Protéger les arbustes et les haies</h2>
<p>Les cèdres et arbustes près de l'entrée reçoivent beaucoup de neige soufflée, souvent chargée de sel. Une toile de protection ou une structure en bois limite les bris et les brûlures de sel.</p>

<h2>6. Vérifier les gouttières et les descentes pluviales</h2>
<p>Une descente pluviale qui déverse l'eau sur l'entrée crée une plaque de glace à chaque redoux. Redirigez-la vers le gazon ou prévoyez un ${sLink("epandage-abrasif-deglacage", "épandage d'abrasif")} régulier à cet endroit.</p>

<h2>7. Préparer les escaliers et le balcon</h2>
<p>Vérifiez les rampes, les marches abîmées et l'éclairage extérieur. Un escalier bien éclairé et en bon état est beaucoup plus sécuritaire l'hiver. Si vous ne voulez pas les pelleter vous-même, pensez au ${sLink("deneigement-manuel-balcons-escaliers", "déneigement manuel des balcons et escaliers")}.</p>

<h2>8. Signer votre contrat de déneigement</h2>
<p>Enfin, réservez votre place tôt. Les entrepreneurs de la région bâtissent leurs circuits à l'automne. Un ${sLink("contrat-deneigement-saisonnier", "contrat saisonnier")} signé en septembre ou en octobre vous assure une entrée dégagée dès la première bordée.</p>

<h2>La liste de vérification</h2>
<div class="table-wrap"><table>
  <thead><tr><th>Geste</th><th>Quand</th></tr></thead>
  <tbody>
    <tr><td>Signer le contrat de déneigement</td><td>Septembre à octobre</td></tr>
    <tr><td>Réparer les fissures de l'entrée</td><td>Septembre à octobre, par temps sec</td></tr>
    <tr><td>Poser les piquets</td><td>Octobre, avant le gel du sol</td></tr>
    <tr><td>Protéger les arbustes</td><td>Fin octobre à début novembre</td></tr>
    <tr><td>Ranger les objets et vérifier les gouttières</td><td>Avant la première neige</td></tr>
  </tbody>
</table></div>`,
    faq: [
      { q: "Est-ce que je dois sceller mon asphalte avant l'hiver?", a: "Le scellant se fait idéalement l'été, par temps chaud et sec. À l'automne, concentrez-vous sur le colmatage des fissures, qui limite les dommages causés par le gel." },
      { q: "Mon entrée est neuve. Y a-t-il des précautions particulières?", a: "Oui. Évitez le sel de déglaçage sur le béton de moins de deux ans et informez votre déneigeur si votre asphalte ou votre pavé uni est récent, pour qu'il ajuste son équipement." },
    ],
    faqTitle: "Questions fréquentes",
  }),
];
