import { SITE, ICONS, steps, sLink, gLink, zLink, guidesList, callBox } from "../components.mjs";
import { GUIDES, SERVICES } from "../data.mjs";

function guide(o) {
  const g = GUIDES.find((x) => x.slug === o.slug);
  const related = o.related.map((s) => SERVICES.find((x) => x.slug === s));
  return {
    kind: "guide",
    path: `/conseils/${o.slug}/`,
    title: o.title,
    description: o.description,
    h1: g.name,
    lead: o.lead,
    heroForm: false,
    date: o.date,
    breadcrumbs: [{ name: "Conseils", path: "/conseils/" }, { name: o.crumb, path: `/conseils/${o.slug}/` }],
    faq: o.faq,
    body: `<section><div class="container layout-aside"><article class="prose">
${o.prose}
<p class="source" style="margin-top:2rem">Ce guide est fourni à titre informatif et ne remplace pas l'avis des autorités, de votre assureur ou d'un professionnel. Les règles peuvent changer : vérifiez les renseignements à jour auprès des organismes concernés.</p>
</article>
<aside class="aside-sticky" aria-label="Liens utiles">
  ${callBox("aside-guide")}
  <div class="aside-box"><h2>Services liés</h2><ul>${related.map((s) => `<li><a href="/services/${s.slug}/">${s.name}</a></li>`).join("")}</ul></div>
  <div class="aside-box"><h2>Autres guides</h2><ul>${GUIDES.filter((x) => x.slug !== o.slug).map((x) => `<li><a href="/conseils/${x.slug}/">${x.name}</a></li>`).join("")}</ul></div>
</aside>
</div></section>`,
  };
}

const guides = [
  guide({
    slug: "que-faire-apres-accident-auto",
    crumb: "Après un accident",
    date: "2026-09-27",
    title: "Accident d'auto : que faire dans les 30 premières minutes",
    description: "Accident d'auto à Joliette ou dans Lanaudière : sécurité, 9-1-1, constat amiable, photos, remorquage et assureur. Le guide étape par étape.",
    lead: "Un accrochage sur le boulevard Base-de-Roc ou une collision sur l'autoroute 31 : dans les minutes qui suivent, quelques bons réflexes font toute la différence pour votre sécurité et votre réclamation.",
    related: ["remorquage-accident", "remorquage-plateau", "remorquage-automobile"],
    prose: `
<p>Même un accident mineur provoque une montée d'adrénaline qui brouille les idées. Ce guide résume, dans l'ordre, ce qu'il faut faire après un accident d'auto au Québec. Gardez-le en tête, ou enregistrez cette page dans votre téléphone.</p>

<h2>1. Assurez votre sécurité et celle des autres</h2>
<ul>
  <li>Allumez vos feux de détresse.</li>
  <li>Si personne n'est blessé et que les véhicules peuvent rouler, déplacez-les hors de la circulation (accotement, stationnement, rue transversale).</li>
  <li>Sur l'autoroute, si les véhicules ne peuvent pas être déplacés, restez dans le vôtre avec la ceinture bouclée, sauf en cas de fumée ou de risque d'incendie.</li>
  <li>Si vous devez sortir, faites-le du côté opposé à la circulation et éloignez-vous derrière la glissière ou le fossé.</li>
</ul>

<h2>2. Appelez le 9-1-1 si nécessaire</h2>
<p>Composez le 9-1-1 s'il y a des blessés, même légers, un risque d'incendie, une fuite de carburant, un conducteur qui semble intoxiqué, un délit de fuite ou un véhicule qui bloque la circulation. Les lignes *4141 et 310-4141 de la Sûreté du Québec ont été retirées : c'est le 9-1-1 qu'il faut utiliser en cas d'urgence.</p>

<h2>3. Remplissez le constat amiable</h2>
<p>Au Québec, lorsqu'il n'y a que des dommages matériels, les conducteurs remplissent ensemble un constat amiable. Il ne sert pas à désigner un coupable sur place : il documente les faits pour les assureurs. Notez notamment :</p>
<ul>
  <li>le nom, l'adresse et le numéro de permis de conduire de l'autre conducteur;</li>
  <li>le numéro d'immatriculation et la description des véhicules;</li>
  <li>le nom de l'assureur et le numéro de police de chaque conducteur;</li>
  <li>le lieu exact, l'heure et les circonstances, avec un croquis;</li>
  <li>les coordonnées des témoins, s'il y en a.</li>
</ul>
<p>Pas de formulaire dans la boîte à gants? Plusieurs assureurs offrent une version dans leur application mobile. Sinon, notez tout sur papier ou dans votre téléphone.</p>

<h2>4. Prenez des photos</h2>
<p>Photographiez les dommages sur tous les véhicules, les plaques, la position des véhicules, la chaussée, la signalisation, les traces de freinage et les débris. Prenez aussi quelques photos plus larges qui montrent l'intersection ou le tronçon de route. Ces images sont précieuses pour votre réclamation.</p>

<h2>5. Organisez le remorquage, à votre façon</h2>
<p>Si votre véhicule ne peut plus rouler en sécurité (fuite, roue tordue, phare arraché la nuit, coussins gonflables déployés), il doit être remorqué. À moins d'une directive des policiers ou d'une zone de remorquage exclusif, <strong>c'est vous qui choisissez le remorqueur et la destination</strong>. Avant de laisser partir votre auto :</p>
<ul>
  <li>demandez le nom de l'entreprise et le prix, avant le chargement;</li>
  <li>indiquez clairement la destination : garage, carrossier, domicile ou centre désigné par votre assureur;</li>
  <li>demandez une facture détaillée pour votre réclamation.</li>
</ul>
<p>Pour un remorquage après accident à Joliette et dans les environs, appelez-nous au ${SITE.phone}, 24 heures sur 24. Voir notre service de ${sLink("remorquage-accident", "remorquage après accident")}.</p>
<div class="callout"><strong>Véhicule à traction intégrale ou électrique?</strong> Mentionnez-le : il devra voyager sur un ${sLink("remorquage-plateau", "plateau")} pour éviter d'endommager la transmission ou le moteur.</div>

<h2>6. Communiquez avec votre assureur</h2>
<p>Appelez votre assureur dès que possible, idéalement le jour même. Il ouvrira un dossier de réclamation, vous indiquera où faire évaluer les dommages et, selon votre contrat, s'il couvre les frais de remorquage ou une voiture de remplacement. Gardez toutes vos factures.</p>

<h2>7. Et si vous êtes blessé?</h2>
<p>Au Québec, les blessures subies dans un accident d'automobile relèvent du régime public d'assurance de la SAAQ. Consultez un médecin même si vous vous sentez bien : certaines blessures, comme une entorse cervicale, se manifestent quelques heures plus tard. La SAAQ explique la démarche de réclamation sur son site.</p>

<h2>En résumé</h2>
${steps([
  ["Sécurité", "Feux de détresse, véhicules déplacés si possible, personne sur la chaussée."],
  ["9-1-1", "Blessés, danger, fuite ou délit de fuite."],
  ["Constat et photos", "Informations complètes et images des lieux."],
  ["Remorquage et assureur", `Remorqueur de votre choix, facture détaillée, appel à l'assureur. Nous répondons au ${SITE.phone}.`],
])}`,
    faq: [
      { q: "Faut-il appeler la police pour un accrochage sans blessés?", a: "Pas obligatoirement. Pour un accident avec dommages matériels seulement, les conducteurs peuvent remplir un constat amiable. Appelez toutefois le 9-1-1 s'il y a des blessés, un danger, un délit de fuite, un conducteur qui semble intoxiqué ou un désaccord qui dégénère." },
      { q: "Est-ce que je peux refuser une remorqueuse qui arrive sans avoir été appelée?", a: "Oui, à moins que les policiers vous demandent de dégager la route rapidement ou que le secteur soit soumis à un remorquage exclusif. Vous pouvez choisir votre remorqueur et la destination de votre véhicule. Demandez toujours le prix avant le chargement." },
    ],
  }),

  guide({
    slug: "panne-sur-autoroute-securite",
    crumb: "Panne sur l'autoroute",
    date: "2026-09-27",
    title: "Panne sur l'autoroute 40 ou 31 : les bons réflexes",
    description: "En panne sur l'autoroute 40 ou 31 dans Lanaudière? Où s'arrêter, rester dans l'auto ou sortir, qui appeler, corridor de sécurité : le guide complet.",
    lead: "Une panne à 100 km/h, avec les camions qui passent à quelques mètres, c'est l'une des situations les plus dangereuses sur la route. Voici quoi faire, dans l'ordre, pour rester en sécurité.",
    related: ["remorquage-automobile", "changement-pneu-crevaison", "livraison-essence"],
    prose: `
<p>L'autoroute 40, qui longe le fleuve de Repentigny à Berthierville, et l'autoroute 31, qui relie Lavaltrie à Joliette, voient passer des milliers de véhicules chaque jour. Une panne sur l'une ou l'autre est toujours stressante. Les gestes ci-dessous sont ceux que recommandent les corps policiers et les organismes de sécurité routière.</p>

<h2>Dès les premiers signes de panne</h2>
<ul>
  <li><strong>Allumez vos feux de détresse</strong> immédiatement, avant même de ralentir.</li>
  <li><strong>Visez l'accotement de droite</strong>, le plus large possible. Si le véhicule roule encore, continuez jusqu'à une sortie, une halte ou un accotement élargi.</li>
  <li><strong>Évitez de vous arrêter</strong> dans une courbe, sur un pont, au sommet d'une côte ou juste après une bretelle d'entrée : les autres conducteurs vous verraient trop tard.</li>
  <li><strong>Tournez les roues</strong> vers l'extérieur de la route une fois arrêté, et serrez le frein de stationnement.</li>
</ul>

<h2>Rester dans l'auto ou en sortir?</h2>
<p>La règle générale : <strong>restez dans le véhicule, ceinture bouclée</strong>. La carrosserie et la ceinture vous protègent mieux qu'une glissière si un autre véhicule heurte le vôtre. Il y a toutefois des exceptions :</p>
<ul>
  <li>de la fumée, une odeur de brûlé ou d'essence, ou un risque d'incendie;</li>
  <li>un véhicule immobilisé dans une voie de circulation, sans possibilité de le déplacer;</li>
  <li>l'échappement bloqué par la neige, qui peut faire entrer du monoxyde de carbone dans l'habitacle si le moteur tourne.</li>
</ul>
<p>Dans ces cas, sortez du côté opposé à la circulation, avec tous les passagers, et éloignez-vous derrière la glissière ou en haut du talus. Ne restez jamais debout entre votre véhicule et la circulation.</p>

<h2>Qui appeler?</h2>
<div class="table-wrap"><table>
  <thead><tr><th>Situation</th><th>Numéro</th></tr></thead>
  <tbody>
    <tr><td>Blessés, fumée, véhicule dans une voie, danger immédiat</td><td>9-1-1</td></tr>
    <tr><td>Remorquage, crevaison, panne sèche, batterie</td><td>Remorquage Joliette : ${SITE.phone}</td></tr>
    <tr><td>Conditions routières et fermetures</td><td>Québec 511</td></tr>
  </tbody>
</table></div>
<p>Les anciens numéros *4141 et 310-4141 de la Sûreté du Québec ont été retirés : en cas d'urgence, c'est le 9-1-1.</p>

<h2>Comment indiquer où vous êtes</h2>
<p>Sur l'autoroute, une adresse n'existe pas. Pour que la remorqueuse vous trouve du premier coup, donnez :</p>
<ul>
  <li>le numéro de l'autoroute et la <strong>direction</strong> (est ou ouest sur l'A-40, vers Joliette ou vers l'A-40 sur l'A-31);</li>
  <li>la <strong>dernière sortie</strong> passée ou la prochaine, par exemple la sortie 122 à Lavaltrie ou la sortie 144 à Berthierville;</li>
  <li>une <strong>borne kilométrique</strong>, un viaduc, un commerce ou un repère visible;</li>
  <li>au besoin, votre <strong>position GPS</strong>, visible dans l'application de cartes de votre téléphone.</li>
</ul>

<h2>Le corridor de sécurité : pour vous et pour les remorqueurs</h2>
<p>Depuis 2012, le Code de la sécurité routière oblige les conducteurs à ralentir et, lorsque c'est possible, à changer de voie à l'approche d'un véhicule d'urgence, d'une dépanneuse ou d'un véhicule de surveillance immobilisé avec ses gyrophares allumés. C'est le corridor de sécurité. Lorsque la dépanneuse arrive pour vous, cette règle protège le remorqueur, mais aussi vous.</p>

<h2>Ce qu'il faut avoir dans l'auto</h2>
<ul>
  <li>Une veste à haute visibilité, rangée à portée de main (pas dans le coffre).</li>
  <li>Des triangles réfléchissants ou des fusées éclairantes.</li>
  <li>Une lampe de poche, une couverture chaude, des gants et une tuque l'hiver.</li>
  <li>Un chargeur de téléphone pour l'auto.</li>
  <li>De l'eau et quelques collations, surtout pour les longs trajets.</li>
</ul>
<div class="callout"><strong>Nos pages sur les autoroutes de la région :</strong> ${zLink("autoroute-40", "remorquage sur l'autoroute 40")} et ${zLink("autoroute-31", "remorquage sur l'autoroute 31")}.</div>`,
    faq: [
      { q: "Est-ce que je peux changer mon pneu moi-même sur l'accotement de l'autoroute?", a: `Seulement si le pneu à changer est du côté opposé à la circulation, que l'accotement est large et que la visibilité est bonne. Sinon, attendez un professionnel : c'est l'une des situations les plus dangereuses sur l'autoroute. Voir le ${sLink("changement-pneu-crevaison", "changement de pneu")}.` },
      { q: "Faut-il lever le capot pour signaler une panne?", a: "Lever le capot est un signal de détresse connu, mais ne le faites que si vous pouvez le faire sans vous exposer à la circulation. Les feux de détresse, et la nuit les feux de position, sont prioritaires." },
    ],
  }),

  guide({
    slug: "batterie-a-plat-par-grand-froid",
    crumb: "Batterie à plat",
    date: "2026-09-27",
    title: "Batterie à plat par grand froid : causes et solutions",
    description: "Pourquoi les batteries lâchent l'hiver, comment survolter sans risque, quand remplacer la batterie et comment éviter la panne à Joliette et dans Lanaudière.",
    lead: "Chaque hiver, la batterie à plat est la panne numéro un dans Lanaudière. Comprendre pourquoi elle survient aide à l'éviter, et à bien réagir quand elle arrive.",
    related: ["survoltage-batterie", "depannage-routier", "remorquage-automobile"],
    prose: `
<p>Un matin de janvier, le thermomètre affiche -25 °C à Joliette. Vous tournez la clé : clic-clic, puis plus rien. Rassurez-vous, vous n'êtes pas seul : c'est de loin la panne la plus fréquente de l'hiver québécois.</p>

<h2>Pourquoi le froid vide les batteries</h2>
<p>Une batterie d'auto produit son électricité par une réaction chimique. Plus il fait froid, plus cette réaction ralentit : une batterie en pleine forme perd une bonne partie de sa puissance disponible par grand froid. En même temps, le moteur est plus difficile à faire tourner, car l'huile épaissit. Moins d'énergie disponible, plus d'énergie demandée : une batterie un peu fatiguée ne suffit plus.</p>
<p>D'autres facteurs aggravent la situation :</p>
<ul>
  <li><strong>L'âge de la batterie</strong> : au-delà de quatre ou cinq ans, sa capacité diminue nettement.</li>
  <li><strong>Les courts trajets</strong> : quelques kilomètres dans Joliette ne laissent pas le temps à l'alternateur de recharger ce que le démarrage a consommé.</li>
  <li><strong>Les accessoires</strong> : sièges chauffants, dégivreur, phares et chauffage sollicitent la batterie au ralenti.</li>
  <li><strong>Une lumière oubliée</strong> ou une portière mal fermée pendant la nuit.</li>
  <li><strong>Des bornes corrodées</strong>, qui nuisent au passage du courant.</li>
</ul>

<h2>Les signes avant-coureurs</h2>
<ul>
  <li>Le moteur tourne plus lentement que d'habitude au démarrage.</li>
  <li>Les phares faiblissent au ralenti.</li>
  <li>Le voyant de batterie s'allume au tableau de bord.</li>
  <li>Vous avez eu besoin d'un survoltage récemment.</li>
</ul>

<h2>Survolter sans risque</h2>
<p>Si vous survoltez vous-même avec des câbles, suivez scrupuleusement l'ordre de branchement indiqué dans le manuel du propriétaire. En général :</p>
${steps([
  ["Rouge sur la batterie à plat", "Pince rouge sur la borne positive (+) de la batterie déchargée."],
  ["Rouge sur la batterie d'appoint", "Autre pince rouge sur la borne positive (+) de la batterie en bon état."],
  ["Noir sur la batterie d'appoint", "Pince noire sur la borne négative (-) de la batterie en bon état."],
  ["Noir sur une masse", "Dernière pince noire sur une pièce métallique non peinte du moteur en panne, loin de la batterie."],
])}
<p>Démarrez d'abord le véhicule d'appoint, attendez quelques minutes, puis tentez de démarrer le vôtre. Débranchez ensuite dans l'ordre inverse.</p>
<div class="callout callout-danger"><strong>Ne survoltez jamais</strong> une batterie fissurée, gonflée, qui fuit ou qui dégage une odeur d'œufs pourris, ni une batterie gelée (bombée, avec de la glace visible). Elle pourrait exploser. Appelez un professionnel.</div>
<p>Sur les véhicules récents, remplis d'électronique, un appareil de survoltage professionnel est plus sûr que des câbles branchés sur une autre auto. C'est ce qu'utilisent nos partenaires pour le ${sLink("survoltage-batterie", "survoltage à domicile ou sur la route")}.</p>

<h2>Après le survoltage</h2>
<p>Roulez au moins 20 à 30 minutes, idéalement à vitesse constante, pour laisser l'alternateur recharger la batterie. Si l'auto refuse de redémarrer le lendemain, la batterie est probablement à remplacer, ou l'alternateur ne charge plus : faites-les vérifier au garage.</p>

<h2>Prévenir la panne cet hiver</h2>
<ul>
  <li><strong>Faites tester la batterie à l'automne</strong>, surtout si elle a plus de trois ou quatre ans.</li>
  <li><strong>Branchez le chauffe-moteur</strong> les nuits de grand froid, deux à trois heures avant le départ suffisent. Une minuterie évite de gaspiller de l'électricité.</li>
  <li><strong>Éteignez les accessoires</strong> avant de couper le moteur.</li>
  <li><strong>Nettoyez les bornes</strong> et vérifiez qu'elles sont bien serrées.</li>
  <li><strong>Stationnez à l'abri</strong> du vent quand c'est possible, ou dans un garage.</li>
</ul>`,
    faq: [
      { q: "Combien de temps dure une batterie d'auto au Québec?", a: "En moyenne, de quatre à six ans, mais les hivers rigoureux et les courts trajets peuvent réduire cette durée. Faites-la tester chaque automne à partir de la troisième année." },
      { q: "Est-ce qu'un démarreur à distance use la batterie?", a: "Le démarrage lui-même consomme de l'énergie, mais le moteur recharge ensuite la batterie. Le problème survient surtout avec des démarrages très courts, répétés, sans vraiment rouler. Dans ce cas, la batterie se vide peu à peu." },
    ],
  }),

  guide({
    slug: "choisir-un-remorqueur",
    crumb: "Choisir un remorqueur",
    date: "2026-09-27",
    title: "Comment choisir un remorqueur fiable : liste de vérification",
    description: "Prix avant le chargement, destination de votre choix, facture détaillée, assurances : les questions à poser pour choisir un remorqueur fiable à Joliette.",
    lead: "Quand on est en panne, on a tendance à accepter la première remorqueuse qui se présente. Quelques questions simples permettent pourtant d'éviter les mauvaises surprises.",
    related: ["remorquage-automobile", "remorquage-accident", "remorquage-plateau"],
    prose: `
<p>La grande majorité des remorqueurs font un travail honnête et difficile, souvent dans des conditions dangereuses. Mais comme dans tous les domaines, il existe des pratiques douteuses : prix annoncé après coup, frais d'entreposage qui s'accumulent, véhicule amené dans un garage que vous n'avez pas choisi. Voici comment vous protéger.</p>

<h2>La liste de vérification</h2>
${steps([
  ["Le prix, avant", "Demandez le prix total avant que votre véhicule soit chargé : frais de base, kilométrage, frais de plateau, de nuit ou de treuillage."],
  ["La destination, votre choix", "Indiquez vous-même où va votre véhicule. Un remorqueur ne devrait pas vous imposer un garage."],
  ["Le nom de l'entreprise", "Notez le nom de l'entreprise, le numéro de téléphone et le nom du remorqueur."],
  ["La facture détaillée", "Exigez une facture qui indique le lieu, la destination, la distance et le détail des frais."],
])}

<h2>Méfiez-vous si…</h2>
<ul>
  <li>une remorqueuse arrive sur les lieux d'un accident <strong>sans que personne l'ait appelée</strong> et insiste pour prendre votre véhicule;</li>
  <li>on refuse de vous donner un prix avant le chargement, ou on vous dit « on verra au garage »;</li>
  <li>on vous demande de signer un document que vous n'avez pas le temps de lire, surtout une autorisation de réparations;</li>
  <li>on veut amener votre véhicule dans une cour d'entreposage plutôt qu'au garage que vous avez choisi;</li>
  <li>on refuse de vous remettre une facture.</li>
</ul>
<div class="callout"><strong>Exception importante :</strong> lorsque les policiers exigent le déplacement immédiat d'un véhicule qui nuit à la circulation, ou dans une zone de remorquage exclusif, c'est l'autorité qui désigne le remorqueur. Suivez alors les consignes, et demandez où votre véhicule sera amené.</div>

<h2>Le bon équipement pour votre véhicule</h2>
<p>Un remorqueur sérieux vous pose des questions sur votre véhicule avant de partir : marque, modèle, traction, état. C'est ce qui lui permet d'envoyer le bon équipement. Un véhicule à traction intégrale ou électrique doit généralement voyager sur un ${sLink("remorquage-plateau", "plateau")}. Un camion demande une dépanneuse de plus forte capacité. Si personne ne vous pose ces questions, posez-les vous-même.</p>

<h2>Assurances et qualifications</h2>
<p>Un remorqueur professionnel est assuré pour les véhicules qu'il transporte. N'hésitez pas à le demander. Chez Remorquage Joliette, les interventions sont confiées à des partenaires certifiés, qui travaillent avec de l'équipement entretenu et sont assurés.</p>

<h2>Gardez un numéro de confiance dans votre téléphone</h2>
<p>La meilleure façon d'éviter de choisir sous pression, c'est d'avoir déjà un numéro enregistré. Ajoutez le ${SITE.phone} dans vos contacts sous « Remorquage Joliette » : notre ligne est ouverte 24 heures sur 24, et le prix vous est toujours donné avant l'intervention.</p>`,
    faq: [
      { q: "Un remorqueur peut-il garder mon auto si je conteste la facture?", a: "Un remorqueur peut, dans certaines circonstances, retenir un véhicule jusqu'au paiement des frais. C'est pourquoi il est si important de convenir du prix avant le chargement et d'obtenir une facture détaillée. En cas de litige, l'Office de la protection du consommateur peut vous renseigner sur vos recours." },
      { q: "Est-ce normal de payer plus cher la nuit?", a: "Plusieurs remorqueurs appliquent des frais différents la nuit, la fin de semaine ou les jours fériés. L'important est que ces frais vous soient annoncés avant l'intervention, pas découverts sur la facture." },
    ],
  }),

  guide({
    slug: "plateau-ou-remorquage-conventionnel",
    crumb: "Plateau ou conventionnel",
    date: "2026-09-27",
    title: "Plateau ou remorquage conventionnel : quelle méthode choisir?",
    description: "Dépanneuse à plateau ou à roues levées? Traction intégrale, électrique, voiture sport : comment choisir la méthode de remorquage qui protège votre véhicule.",
    lead: "Roues levées ou plateau : les deux méthodes ont leur place. Mais pour certains véhicules, le mauvais choix peut coûter une transmission.",
    related: ["remorquage-plateau", "remorquage-vehicule-electrique", "remorquage-automobile"],
    prose: `
<p>Quand on appelle une remorqueuse, on pense rarement au type de dépanneuse qui va se présenter. Pourtant, selon votre véhicule, la méthode de remorquage peut faire une grande différence.</p>

<h2>Les deux grandes méthodes</h2>
<div class="table-wrap"><table>
  <thead><tr><th></th><th>Roues levées (conventionnel)</th><th>Plateau (flatbed)</th></tr></thead>
  <tbody>
    <tr><td>Principe</td><td>Deux roues soulevées, les deux autres roulent sur la route</td><td>Le véhicule est entièrement chargé sur une plateforme</td></tr>
    <tr><td>Avantages</td><td>Maniable, idéal en ville et dans les espaces restreints</td><td>Aucune usure mécanique, aucune roue au sol</td></tr>
    <tr><td>Limites</td><td>Non recommandé pour AWD, 4x4 permanents, électriques</td><td>Plus long, demande plus d'espace pour charger</td></tr>
    <tr><td>Idéal pour</td><td>Traction avant ou arrière, courts trajets</td><td>AWD, électriques, voitures basses, accidentées, longues distances</td></tr>
  </tbody>
</table></div>

<h2>Pourquoi la traction intégrale change tout</h2>
<p>Sur un véhicule à traction intégrale permanente, les quatre roues sont reliées mécaniquement par la transmission et un différentiel central (ou un embrayage). Si on remorque ce véhicule avec deux roues au sol et deux roues soulevées, les roues avant et arrière tournent à des vitesses différentes, ce que le système n'est pas conçu pour supporter longtemps. Résultat possible : surchauffe et bris du différentiel ou de la boîte de transfert, une réparation coûteuse.</p>
<p>C'est pourquoi la plupart des fabricants recommandent le ${sLink("remorquage-plateau", "remorquage sur plateau")} pour ces véhicules, ou l'utilisation de chariots sous les roues qui restent au sol.</p>

<h2>Et les véhicules électriques?</h2>
<p>Dans une voiture électrique, les roues motrices sont reliées directement au moteur électrique. Si elles tournent pendant le remorquage, le moteur produit du courant et de la chaleur qui peuvent endommager l'électronique de puissance. Les guides des fabricants recommandent donc le plateau. Voir notre page sur le ${sLink("remorquage-vehicule-electrique", "remorquage de véhicule électrique")}.</p>

<h2>Comment savoir ce qui convient à votre véhicule?</h2>
<ul>
  <li><strong>Consultez le manuel du propriétaire</strong>, section « Remorquage » : il indique précisément ce qui est permis.</li>
  <li><strong>Regardez les inscriptions</strong> à l'arrière du véhicule : AWD, 4WD, 4x4, 4MATIC, xDrive, quattro indiquent une traction intégrale.</li>
  <li><strong>Dites-le au téléphone</strong> : la marque, le modèle et l'année suffisent à un remorqueur expérimenté pour choisir la bonne méthode.</li>
</ul>

<h2>Les cas où le plateau s'impose toujours</h2>
<ul>
  <li>Véhicule accidenté, roues endommagées ou direction bloquée.</li>
  <li>Voiture sport, abaissée ou avec des bas de caisse fragiles.</li>
  <li>Voiture de collection ou de grande valeur.</li>
  <li>Transport sur une longue distance, comme notre ${sLink("transport-vehicule-longue-distance", "transport longue distance")}.</li>
  <li>Motos, VTT et petite machinerie.</li>
</ul>`,
    faq: [
      { q: "Le plateau coûte-t-il toujours plus cher?", a: `Pas toujours, et quand c'est le cas, la différence est généralement modeste pour un remorquage local. Comparez-la au coût d'une transmission endommagée. Voir notre <a href="/prix-remorquage-joliette/">guide des prix</a>.` },
      { q: "Ma camionnette 4x4 a une boîte de transfert à engager : faut-il un plateau?", a: "Les 4x4 à temps partiel peuvent souvent être remorqués avec les roues arrière soulevées, boîte de transfert au neutre, selon les instructions du fabricant. Vérifiez le manuel ou précisez le modèle : dans le doute, le plateau est l'option sûre." },
    ],
  }),

  guide({
    slug: "voiture-dans-le-fosse-hiver",
    crumb: "Voiture dans le fossé",
    date: "2026-09-27",
    title: "Voiture dans le fossé l'hiver : quoi faire et quoi éviter",
    description: "Votre auto a glissé dans le fossé dans Lanaudière? Sécurité, monoxyde de carbone, erreurs à éviter et sortie de fossé professionnelle : le guide complet.",
    lead: "Une plaque de glace, une rafale de poudrerie, et la voiture se retrouve dans le fossé. Voici comment réagir pour rester en sécurité, et comment éviter d'aggraver les dommages.",
    related: ["sortie-de-fosse-desenlisement", "remorquage-accident", "remorquage-automobile"],
    prose: `
<p>Dans les rangs de Saint-Thomas, de Sainte-Élisabeth ou de Saint-Jacques, sur la route 348 près de Sainte-Mélanie ou dans les côtes de Rawdon, les sorties de route font partie de l'hiver lanaudois. La plupart se terminent sans blessé, mais les minutes qui suivent comptent.</p>

<h2>1. Vérifiez que tout le monde va bien</h2>
<p>Si quelqu'un est blessé, si le véhicule est sur le côté ou sur le toit, s'il y a de la fumée ou une odeur d'essence, composez le 9-1-1 immédiatement.</p>

<h2>2. Restez dans le véhicule, en sécurité</h2>
<ul>
  <li>Gardez votre ceinture bouclée et allumez vos feux de détresse.</li>
  <li>Un véhicule dans le fossé peut être heurté par une autre voiture qui glisse au même endroit : l'habitacle reste l'endroit le plus sûr, sauf danger d'incendie.</li>
  <li>Si vous devez sortir, faites-le du côté opposé à la route et éloignez-vous de la chaussée.</li>
</ul>

<h2>3. Attention au monoxyde de carbone</h2>
<div class="callout callout-danger"><strong>Si la neige bloque le tuyau d'échappement</strong>, le monoxyde de carbone, un gaz inodore et mortel, peut s'infiltrer dans l'habitacle quand le moteur tourne. Si l'échappement est enfoui, coupez le moteur. Si vous devez garder le chauffage, dégagez d'abord l'échappement (seulement si vous pouvez le faire sans danger), entrouvrez une fenêtre et faites tourner le moteur par courtes périodes.</div>

<h2>4. Ne forcez pas le moteur</h2>
<p>Le réflexe naturel est d'appuyer sur l'accélérateur pour sortir. C'est rarement une bonne idée :</p>
<ul>
  <li>les roues qui patinent creusent la neige et enfoncent davantage le véhicule;</li>
  <li>la transmission peut surchauffer, surtout sur une boîte automatique ou une traction intégrale;</li>
  <li>le véhicule peut glisser plus loin dans le fossé ou vers un obstacle.</li>
</ul>
<p>Si le véhicule est simplement pris dans un banc de neige sur une surface plane, un léger mouvement de va-et-vient peut suffire. Sinon, attendez de l'aide.</p>

<h2>5. Évitez de vous faire tirer par un passant</h2>
<p>Un bon samaritain avec une camionnette et une corde, ça part d'une bonne intention. Mais une corde ou une sangle qui cède peut fouetter avec une force énorme et blesser gravement quelqu'un. Un crochet mal placé peut arracher un pare-chocs ou tordre la suspension. Un treuillage professionnel utilise des sangles homologuées, les points d'ancrage prévus par le fabricant et une traction lente et contrôlée. Voir notre service de ${sLink("sortie-de-fosse-desenlisement", "sortie de fossé et désenlisement")}.</p>

<h2>6. Indiquez précisément où vous êtes</h2>
<p>En campagne, un rang peut s'étirer sur des kilomètres. Donnez le nom du rang et de la municipalité, le numéro civique le plus proche, une ferme, une intersection ou votre position GPS. Appelez-nous au ${SITE.phone}, 24 heures sur 24.</p>

<h2>7. Après la sortie : faites vérifier le véhicule</h2>
<p>Un passage dans le fossé peut dérégler la géométrie, endommager un pneu, une jante ou un bras de suspension, ou arracher un pare-boue. Si le volant n'est plus droit, si le véhicule tire d'un côté, si vous entendez un bruit anormal ou si un voyant s'allume, faites-le inspecter. S'il n'est pas sécuritaire, il devra être ${sLink("remorquage-automobile", "remorqué au garage")}.</p>

<h2>La trousse d'hiver qui fait la différence</h2>
<ul>
  <li>Pelle compacte, balai à neige et grattoir.</li>
  <li>Sable, litière pour chat ou tapis de traction.</li>
  <li>Couverture, bottes, tuque, mitaines de rechange.</li>
  <li>Lampe de poche, chargeur de téléphone, collations et eau.</li>
</ul>`,
    faq: [
      { q: "Mon assurance couvre-t-elle la sortie de fossé?", a: "Cela dépend de votre contrat et des protections choisies. Plusieurs polices ou services d'assistance routière la couvrent en tout ou en partie. Gardez votre facture détaillée pour votre demande." },
      { q: "Dois-je déclarer une sortie de route sans dommage?", a: "Si personne n'est blessé et qu'aucun bien d'autrui n'est endommagé (clôture, poteau, autre véhicule), il n'y a généralement pas de déclaration obligatoire à la police. En cas de dommages à la propriété d'autrui, informez-vous auprès de votre assureur sur la marche à suivre." },
    ],
  }),

  guide({
    slug: "vehicule-remorque-ou-saisi",
    crumb: "Véhicule remorqué ou saisi",
    date: "2026-09-27",
    title: "Véhicule remorqué ou saisi : comment le récupérer au Québec",
    description: "Votre auto a disparu ou a été saisie? Comment savoir où elle est, quels documents apporter, frais de remorquage et de garde, délais : le guide pour le Québec.",
    lead: "Vous revenez au stationnement et votre auto n'est plus là? Avant de paniquer, voici comment savoir si elle a été remorquée ou saisie, et comment la récupérer.",
    related: ["remorquage-automobile", "remorquage-plateau", "transport-vehicule-longue-distance"],
    prose: `
<p>Un véhicule peut être remorqué sans votre présence pour plusieurs raisons : stationnement interdit pendant une opération de déneigement, stationnement privé non autorisé, véhicule qui nuit à la circulation, ou saisie ordonnée par un agent de la paix en vertu du Code de la sécurité routière. La démarche pour le récupérer dépend de la situation.</p>

<h2>Étape 1 : savoir où se trouve votre véhicule</h2>
<ul>
  <li><strong>Stationnement dans la rue</strong> : communiquez avec la municipalité ou avec le service de police qui dessert votre secteur, en utilisant son numéro administratif plutôt que le 9-1-1, sauf si vous croyez à un vol.</li>
  <li><strong>Stationnement privé</strong> (commerce, immeuble) : une affiche doit normalement indiquer l'entreprise de remorquage et son numéro. Sinon, informez-vous auprès du gestionnaire des lieux.</li>
  <li><strong>Saisie par la police</strong> : l'agent vous remet un avis de saisie indiquant l'endroit où le véhicule sera gardé.</li>
</ul>
<p>Si personne ne semble avoir remorqué votre véhicule, il a peut-être été volé : signalez-le à la police.</p>

<h2>Étape 2 : le cas particulier de la saisie</h2>
<p>Au Québec, un véhicule peut être saisi par un agent de la paix, notamment si le conducteur n'a pas de permis valide ou conduit malgré une suspension. Dans ce cas, pour reprendre possession du véhicule, il faut d'abord obtenir une <strong>autorisation de la SAAQ</strong> (ou d'un juge), puis se présenter à la fourrière avec le formulaire de mainlevée et un permis de conduire valide.</p>
<ul>
  <li>Les <strong>frais de remorquage et de garde</strong> doivent être payés avant de récupérer le véhicule. Ils sont encadrés par règlement et publiés sur le site de la SAAQ.</li>
  <li>Le propriétaire doit reprendre le véhicule dans un délai prévu après la fin de la saisie. Au-delà, la SAAQ peut entamer la procédure de disposition du véhicule.</li>
  <li>Les frais de garde s'accumulent chaque jour : agissez vite.</li>
</ul>
<div class="callout"><strong>Vérifiez toujours les règles à jour</strong> sur le site de la SAAQ, car les tarifs et les procédures peuvent changer.</div>

<h2>Étape 3 : ce qu'il faut apporter</h2>
<ul>
  <li>Une pièce d'identité avec photo et un permis de conduire valide.</li>
  <li>Le certificat d'immatriculation du véhicule et la preuve d'assurance.</li>
  <li>En cas de saisie, l'autorisation de la SAAQ (mainlevée).</li>
  <li>Un mode de paiement accepté par la fourrière ou l'entreprise de remorquage : informez-vous avant de vous déplacer.</li>
</ul>

<h2>Étape 4 : ramener le véhicule</h2>
<p>Si vous n'avez pas de permis valide, si le véhicule n'est plus en état de rouler ou s'il est trop loin, vous pouvez le faire transporter. Nous pouvons prendre votre véhicule à la sortie de la fourrière et le livrer chez vous ou au garage de votre choix, sur plateau au besoin. Voir nos services de ${sLink("remorquage-automobile", "remorquage automobile")} et de ${sLink("transport-vehicule-longue-distance", "transport longue distance")}.</p>

<h2>Éviter que ça arrive</h2>
<ul>
  <li>Respectez les interdictions de stationnement de nuit en hiver lors des opérations de déneigement : consultez les avis de votre municipalité.</li>
  <li>Lisez les affiches dans les stationnements privés.</li>
  <li>Vérifiez la validité de votre permis et de votre immatriculation avant de prendre la route.</li>
</ul>`,
    faq: [
      { q: "Remorquage Joliette fait-il du remorquage de stationnement privé?", a: "Non. Nous travaillons pour les automobilistes, pas pour les propriétaires de stationnements. Notre rôle est de vous aider à déplacer votre véhicule, par exemple pour le ramener de la fourrière à la maison." },
      { q: "Combien coûtent les frais de garde en fourrière?", a: "Pour les véhicules saisis, les frais de remorquage et de garde sont fixés par règlement et publiés sur le site de la SAAQ. Pour un remorquage de stationnement privé ou municipal, informez-vous directement auprès de l'entreprise ou de la municipalité." },
    ],
  }),
];

const index = {
  kind: "page",
  path: "/conseils/",
  title: "Conseils et guides pour automobilistes | Remorquage Joliette",
  description: "Guides pratiques pour les automobilistes de Joliette et de Lanaudière : accident, panne sur l'autoroute, batterie à plat, fossé, véhicule saisi.",
  h1: "Conseils et guides pour les automobilistes",
  lead: "Des guides clairs pour savoir quoi faire quand la route vous joue un tour : accident, panne sur l'autoroute, batterie à plat, sortie de fossé ou véhicule remorqué.",
  heroForm: false,
  breadcrumbs: [{ name: "Conseils", path: "/conseils/" }],
  body: `<section><div class="container">
  <div class="section-head"><span class="overline">Guides</span><h2>Nos guides pratiques</h2></div>
  ${guidesList()}
</div></section>`,
};

export default [index, ...guides];
