import { SITE, servicePage, P24, PCERT, PPRIX, PDEST } from "./_service.mjs";
import { steps, sLink, gLink, zLink, photo } from "../components.mjs";

export default [
  // 1. Remorquage automobile
  servicePage({
    slug: "remorquage-automobile",
    title: "Remorquage automobile à Joliette 24/7 | Remorquage Joliette",
    description: "Remorquage d'auto, de VUS et de camionnette à Joliette, 24 h sur 24. Vers le garage de votre choix, dans toute la région. Soumission gratuite au 450-915-0067.",
    h1: "Remorquage automobile à Joliette",
    serviceType: "Remorquage automobile",
    lead: "Votre voiture, votre VUS ou votre camionnette ne roule plus? On la remorque jusqu'au garage, au concessionnaire ou à la maison, partout à Joliette et dans les environs, 24 heures sur 24.",
    checks: ["Voitures, VUS, camionnettes, fourgonnettes", "Dépanneuse à roues levées ou à plateau", "Destination de votre choix", "Soumission gratuite et sans obligation"],
    prose: `
<p>Une auto qui refuse de démarrer dans l'entrée, un voyant moteur qui clignote sur le boulevard Base-de-Roc, une courroie qui lâche en revenant du travail : quelle que soit la panne, le remorquage automobile à Joliette commence par un appel au ${SITE.phone}. Nous organisons le déplacement de votre véhicule avec un partenaire certifié et vous donnons le prix avant qu'il se mette en route.</p>
${photo("remorquage-automobile-joliette.webp", "Dépanneuse remorquant une voiture en panne à Joliette")}
<h2>Quels véhicules remorquons-nous?</h2>
<ul>
  <li><strong>Voitures compactes et berlines</strong> : Civic, Corolla, Elantra, Mazda3 et toutes les autos du quotidien.</li>
  <li><strong>VUS et multisegments</strong> : RAV4, CR-V, Rogue, Tucson, Escape, y compris les versions à traction intégrale.</li>
  <li><strong>Camionnettes (pick-up)</strong> : F-150, Silverado, Ram, Tacoma, avec ou sans boîte chargée.</li>
  <li><strong>Fourgonnettes et minifourgonnettes</strong> : Caravan, Sienna, Transit Connect, fourgonnettes d'entrepreneurs.</li>
  <li><strong>Véhicules électriques et hybrides</strong>, toujours sur plateau : voir notre page sur le ${sLink("remorquage-vehicule-electrique", "remorquage de véhicule électrique")}.</li>
</ul>
<p>Pour un camion cube, un autobus ou un véhicule commercial lourd, consultez plutôt notre service de ${sLink("remorquage-lourd", "remorquage lourd")}.</p>

<h2>Roues levées ou plateau : quelle dépanneuse pour votre auto?</h2>
<p>Il existe deux grandes façons de remorquer une auto. La <strong>dépanneuse à roues levées</strong> soulève les roues avant (ou arrière) du véhicule et le tire sur ses deux autres roues. Elle est idéale pour les tractions avant en ville et dans les stationnements serrés. La <strong>dépanneuse à plateau</strong> charge le véhicule au complet sur une plateforme : aucune roue ne touche la route.</p>
<div class="table-wrap"><table>
  <thead><tr><th>Situation</th><th>Méthode recommandée</th></tr></thead>
  <tbody>
    <tr><td>Traction avant, panne mécanique simple, court trajet</td><td>Roues levées ou plateau</td></tr>
    <tr><td>Traction intégrale (AWD) ou 4x4 permanent</td><td>Plateau</td></tr>
    <tr><td>Véhicule électrique ou hybride</td><td>Plateau</td></tr>
    <tr><td>Voiture sport, abaissée ou de collection</td><td>Plateau</td></tr>
    <tr><td>Véhicule accidenté, roues bloquées ou endommagées</td><td>Plateau (avec treuil au besoin)</td></tr>
    <tr><td>Stationnement intérieur à plafond bas</td><td>Roues levées, puis transfert au besoin</td></tr>
  </tbody>
</table></div>
<p>Vous hésitez? Donnez-nous la marque, le modèle et l'année : nous choisissons la bonne méthode pour vous. Pour aller plus loin, lisez notre guide ${gLink("plateau-ou-remorquage-conventionnel", "Plateau ou remorquage conventionnel")}.</p>

<h2>Comment se déroule votre remorquage</h2>
${steps([
  ["Appel", "Vous nous dites où se trouve l'auto, sa marque, son modèle, sa traction et la destination souhaitée."],
  ["Soumission", "Vous recevez le prix avant le départ de la remorqueuse. Vous acceptez seulement s'il vous convient."],
  ["Chargement", "Le remorqueur sécurise le véhicule : sangles, chaînes de sécurité, feux de remorquage."],
  ["Livraison", "Votre auto est livrée à la destination choisie. Si le garage est fermé, on convient d'une solution avec vous."],
], false)}

<h2>Où pouvons-nous amener votre véhicule?</h2>
<p>Partout où vous le souhaitez. La plupart de nos remorquages se font à l'intérieur de Joliette ou vers les villes voisines comme ${zLink("saint-charles-borromee")}, ${zLink("notre-dame-des-prairies")} ou ${zLink("saint-paul")}, où se trouvent de nombreux garages et concessionnaires. Nous faisons aussi des trajets plus longs vers Repentigny, Terrebonne, Montréal ou Trois-Rivières avec notre service de ${sLink("transport-vehicule-longue-distance", "transport longue distance")}.</p>
<div class="callout"><strong>Garage fermé la nuit?</strong> Plusieurs garages de la région acceptent le dépôt des clés dans une boîte prévue à cet effet. Sinon, votre véhicule peut être livré chez vous et déplacé au garage le lendemain. Nous en discutons avec vous au moment de l'appel.</div>

<h2>Préparer votre auto avant l'arrivée de la remorqueuse</h2>
<ul>
  <li>Retirez vos objets de valeur, vos papiers importants et, si possible, votre transpondeur ou vos télécommandes.</li>
  <li>Ayez sous la main vos clés, votre certificat d'immatriculation et votre preuve d'assurance.</li>
  <li>Notez l'adresse exacte du garage de destination et son heure de fermeture.</li>
  <li>Si le véhicule est dans un stationnement souterrain, mentionnez la hauteur libre si vous la connaissez.</li>
</ul>`,
    faq: [
      { q: "Est-ce que je peux monter dans la remorqueuse avec le chauffeur?", a: "Dans la plupart des cas, oui, un passager peut prendre place dans la cabine, selon l'espace disponible et les règles de sécurité du remorqueur. Mentionnez-le lors de votre appel, surtout si vous êtes plusieurs ou avec des enfants, afin que nous puissions prévoir la bonne solution." },
      { q: "Combien de temps dure un remorquage local à Joliette?", a: "Une fois la remorqueuse sur place, le chargement prend généralement entre 10 et 20 minutes, puis le trajet dépend de la destination. À l'intérieur de Joliette et des municipalités voisines, le trajet lui-même est habituellement court." },
      { q: "Remorquez-vous les autos sans clés?", a: "Oui, c'est possible dans la plupart des cas avec l'équipement approprié (chariots de roues, plateau). Signalez-le à l'appel, car un véhicule sans clés dont la transmission est verrouillée demande un équipement particulier." },
      { q: "Puis-je faire remorquer une auto que je viens d'acheter?", a: `Oui. C'est même une demande courante lorsqu'on achète une auto usagée qui n'est pas encore immatriculée ou qui a besoin de réparations. Pour une auto achetée loin de Joliette, voyez le ${sLink("transport-vehicule-longue-distance", "transport de véhicule longue distance")}.` },
    ],
    pillars: [P24, PDEST, PPRIX],
  }),

  // 2. Remorquage sur plateau
  servicePage({
    slug: "remorquage-plateau",
    title: "Remorquage sur plateau à Joliette (flatbed) | 24/7",
    description: "Dépanneuse à plateau à Joliette pour véhicules AWD, 4x4, électriques, sport et de collection. Service 24/7 et soumission gratuite au 450-915-0067.",
    h1: "Remorquage sur plateau à Joliette",
    serviceType: "Remorquage sur plateau (flatbed)",
    lead: "Avec une dépanneuse à plateau, votre véhicule voyage entièrement sur la plateforme, sans que ses roues touchent la route. C'est la méthode la plus sûre pour les véhicules à traction intégrale, électriques, abaissés ou de valeur.",
    checks: ["Idéal pour AWD, 4x4 et véhicules électriques", "Voitures sport, abaissées et de collection", "Aucune usure de la transmission", "Service 24 h sur 24, 7 jours sur 7"],
    prose: `
<p>La dépanneuse à plateau, qu'on appelle aussi <em>flatbed</em> ou « tilt », possède une plateforme hydraulique qui s'incline jusqu'au sol. Le véhicule est tiré doucement sur la plateforme à l'aide d'un treuil, puis arrimé aux quatre roues. Résultat : pendant tout le trajet, votre auto ne roule pas, ne tourne pas ses engrenages et ne subit aucune usure mécanique.</p>
${photo("remorquage-plateau-joliette.webp", "Voiture chargée sur une dépanneuse à plateau à Joliette")}
<h2>Quand le plateau est-il nécessaire?</h2>
<ul>
  <li><strong>Traction intégrale (AWD) et 4x4 permanents</strong> : la plupart des fabricants déconseillent de remorquer ces véhicules avec des roues au sol, car la transmission et le différentiel central pourraient être endommagés.</li>
  <li><strong>Véhicules électriques et hybrides</strong> : un moteur électrique entraîné par les roues produit du courant, ce qui peut endommager le système. Les guides des fabricants recommandent le plateau. Voir le ${sLink("remorquage-vehicule-electrique", "remorquage de véhicule électrique")}.</li>
  <li><strong>Voitures sport, abaissées ou modifiées</strong> : une garde au sol basse et des bas de caisse fragiles s'accommodent mal d'une remorque à roues levées.</li>
  <li><strong>Voitures de collection et véhicules de valeur</strong> : le plateau limite les vibrations et les contacts.</li>
  <li><strong>Véhicules accidentés</strong> : roues tordues, pneus éclatés ou direction bloquée empêchent le véhicule de rouler, même partiellement.</li>
  <li><strong>Motos, VTT et petits équipements</strong> : ils se transportent sur plateau, avec des points d'arrimage adaptés. Voir le ${sLink("remorquage-moto", "remorquage de moto")}.</li>
</ul>
<div class="callout"><strong>Le saviez-vous?</strong> Le manuel du propriétaire de votre véhicule contient presque toujours une section « Remorquage ». Elle indique si le remorquage avec deux roues au sol est permis. Dans le doute, le plateau est le choix sécuritaire.</div>

<h2>Comment se fait le chargement sur plateau</h2>
${steps([
  ["Inclinaison", "La plateforme glisse vers l'arrière et s'incline jusqu'au sol, derrière votre véhicule."],
  ["Treuillage", "Le câble du treuil est fixé à un point d'ancrage prévu par le fabricant, puis le véhicule monte lentement."],
  ["Arrimage", "La plateforme revient à l'horizontale. Le véhicule est attaché aux roues avec des sangles, sans toucher à la carrosserie."],
  ["Transport", "Le véhicule voyage à l'arrêt complet, frein de stationnement serré, jusqu'à la destination de votre choix."],
], false)}

<h2>Plateau et espaces restreints</h2>
<p>Une dépanneuse à plateau est plus longue qu'une remorqueuse conventionnelle. Dans une entrée étroite du centre-ville de Joliette, un stationnement souterrain ou une ruelle, le remorqueur peut d'abord sortir le véhicule avec des chariots de roues (<em>dollies</em>) ou une remorqueuse compacte, puis le transférer sur le plateau à l'extérieur. Mentionnez-nous ces contraintes lors de l'appel pour que la bonne dépanneuse se présente.</p>

<h2>Plateau pour les trajets plus longs</h2>
<p>Pour un trajet de Joliette vers Montréal, Québec ou Trois-Rivières, le plateau est aussi le choix le plus confortable pour votre véhicule : il n'accumule ni kilomètres ni usure. C'est la méthode que nous utilisons pour le ${sLink("transport-vehicule-longue-distance", "transport de véhicule longue distance")} et pour le ${sLink("transport-machinerie", "transport de machinerie légère")}.</p>`,
    faq: [
      { q: "Le remorquage sur plateau coûte-t-il plus cher?", a: `Souvent un peu, mais pas toujours. Pour un remorquage local, la différence est généralement modeste, et elle est largement justifiée pour un véhicule AWD ou électrique, dont la transmission coûte beaucoup plus cher à réparer. Consultez notre <a href="/prix-remorquage-joliette/">page des prix</a> pour les fourchettes.` },
      { q: "Mon VUS est-il à traction intégrale?", a: "Regardez l'arrière du véhicule : une mention AWD, 4WD, 4x4, 4MATIC, xDrive, quattro, SH-AWD ou Symmetrical AWD indique généralement une traction intégrale. Le manuel du propriétaire le confirme. Dans le doute, dites-nous la marque et le modèle." },
      { q: "Peut-on charger une auto qui ne roule plus du tout?", a: "Oui. Le treuil de la dépanneuse tire le véhicule sur la plateforme même si le moteur ne démarre pas, si les freins sont bloqués ou si une roue est endommagée. Des chariots de roues peuvent aussi être utilisés." },
      { q: "Transportez-vous des voitures de collection pour les expositions?", a: "Oui, sur rendez-vous. Nous transportons des voitures anciennes ou modifiées vers les garages spécialisés, les expositions et les lieux d'entreposage, avec un arrimage par les roues qui protège la carrosserie." },
    ],
    pillars: [PCERT, P24, PPRIX],
  }),

  // 3. Remorquage après accident
  servicePage({
    slug: "remorquage-accident",
    title: "Remorquage après un accident à Joliette | 24 h sur 24",
    description: "Remorquage de véhicule accidenté à Joliette et dans Lanaudière, 24/7 : dépanneuse à plateau, nettoyage des débris et documents pour votre assureur.",
    h1: "Remorquage après un accident à Joliette",
    serviceType: "Remorquage de véhicule accidenté",
    lead: "Après une collision, vous avez déjà assez de stress. On s'occupe de déplacer votre véhicule en sécurité, de ramasser les débris et de vous remettre les documents dont votre assureur aura besoin.",
    checks: ["Véhicules non roulants ou endommagés", "Nettoyage des débris sur la chaussée", "Destination : garage, carrossier ou domicile", "Facture détaillée pour votre assureur"],
    prose: `
<p>Un accident, même mineur, laisse souvent un véhicule qui ne peut plus rouler en sécurité : radiateur percé, roue tordue, phare arraché, coussins gonflables déployés. Le remorquage après un accident à Joliette demande un équipement adapté et un remorqueur habitué à travailler en bordure de route, au milieu de la circulation. C'est exactement ce que font nos partenaires certifiés.</p>
<div class="callout callout-danger"><strong>Blessés, fumée, fuite d'essence ou véhicule qui bloque la circulation?</strong> Composez d'abord le 9-1-1. Les services d'urgence sécurisent la scène. Appelez-nous ensuite au ${SITE.phone} pour le remorquage.</div>

<h2>Ce que comprend notre remorquage après accident</h2>
<ul>
  <li><strong>Déplacement sécuritaire du véhicule</strong>, le plus souvent sur plateau, avec treuillage si les roues sont bloquées ou si l'auto a quitté la chaussée.</li>
  <li><strong>Ramassage des débris</strong> (morceaux de plastique, de verre, de pare-chocs) laissés sur la chaussée par la collision.</li>
  <li><strong>Livraison à la destination de votre choix</strong> : votre garage, un centre de carrosserie, le concessionnaire ou un atelier recommandé par votre assureur.</li>
  <li><strong>Facture détaillée</strong> indiquant le lieu, l'heure, la distance et la destination, utile pour votre réclamation d'assurance.</li>
</ul>

<h2>Vos droits : c'est vous qui choisissez</h2>
<p>Après une collision, il arrive qu'une remorqueuse se présente sans avoir été appelée. Au Québec, à moins d'une directive des policiers pour dégager la route ou d'une zone de remorquage exclusif, <strong>vous gardez le choix du remorqueur et de la destination de votre véhicule</strong>. Avant de laisser quelqu'un repartir avec votre auto, demandez le nom de l'entreprise, le prix et l'endroit où le véhicule sera amené. Notre guide ${gLink("choisir-un-remorqueur", "Comment choisir un remorqueur fiable")} explique les pièges à éviter.</p>

<h2>Les accidents les plus fréquents autour de Joliette</h2>
<p>Nos appels après collision viennent surtout de quelques endroits bien connus des automobilistes de la région :</p>
<ul>
  <li><strong>L'autoroute 31</strong>, entre l'autoroute 40 à Lavaltrie et l'entrée de Joliette, où la vitesse est élevée et les bretelles achalandées aux heures de pointe. Voir la page ${zLink("autoroute-31", "remorquage sur l'autoroute 31")}.</li>
  <li><strong>Les grandes artères de Joliette</strong> comme les boulevards Base-de-Roc, Firestone et Manseau, où les accrochages aux intersections sont courants.</li>
  <li><strong>La route 158</strong>, vers Saint-Jacques à l'ouest et Berthierville à l'est, avec ses croisements de rangs et ses sorties de commerces.</li>
  <li><strong>Les rangs de campagne</strong> glacés l'hiver, où les sorties de route se terminent souvent dans le fossé. Voir la ${sLink("sortie-de-fosse-desenlisement", "sortie de fossé")}.</li>
</ul>

<h2>Après l'accident : les étapes à suivre</h2>
${steps([
  ["Sécuriser", "Feux de détresse, triangle si vous en avez un, et tout le monde à l'écart de la circulation."],
  ["Constat", "Remplissez le constat amiable avec l'autre conducteur et prenez des photos des véhicules et des lieux."],
  ["Remorquage", `Appelez-nous au ${SITE.phone} : on vous donne le prix et on organise l'intervention.`],
  ["Assureur", "Communiquez avec votre assureur, qui ouvrira votre dossier et vous indiquera la suite."],
], false)}
<p>Le détail de chaque étape se trouve dans notre guide ${gLink("que-faire-apres-accident-auto", "Accident d'auto dans Lanaudière : que faire dans les 30 premières minutes")}.</p>`,
    faq: [
      { q: "Mon assurance paiera-t-elle le remorquage?", a: "Cela dépend de votre contrat et des protections choisies. Plusieurs polices d'assurance automobile couvrent les frais de remorquage après une collision, en tout ou en partie. Gardez la facture détaillée que nous vous remettons et transmettez-la à votre assureur avec votre réclamation." },
      { q: "Puis-je faire remorquer mon auto chez moi plutôt qu'au garage?", a: "Oui, si le véhicule peut y être déposé de façon sécuritaire. Certains assureurs préfèrent toutefois que le véhicule soit amené directement à un centre d'expertise ou à un atelier : vérifiez auprès de votre assureur avant de choisir, pour éviter un deuxième remorquage." },
      { q: "Les policiers peuvent-ils faire remorquer mon auto sans mon accord?", a: "Oui, lorsque le véhicule nuit à la circulation ou à la sécurité, les policiers peuvent exiger qu'il soit déplacé rapidement. Dans les autres cas, vous gardez le choix du remorqueur. Si votre véhicule a été remorqué par une autre entreprise, notre guide sur les véhicules remorqués ou saisis vous explique comment le récupérer." },
      { q: "Faites-vous le remorquage des véhicules commerciaux accidentés?", a: `Oui. Camionnettes de service, fourgons et camions légers sont pris en charge. Pour les camions lourds, les autobus ou les semi-remorques, consultez notre service de ${sLink("remorquage-lourd", "remorquage lourd")}.` },
    ],
    pillars: [P24, PDEST, PCERT],
  }),

  // 4. Dépannage et assistance routière
  servicePage({
    slug: "depannage-routier",
    title: "Dépannage et assistance routière à Joliette | 24/7",
    description: "Assistance routière à Joliette 24 h sur 24 : survoltage, déverrouillage, livraison d'essence, changement de pneu et sortie de fossé. Appelez le 450-915-0067.",
    h1: "Dépannage et assistance routière à Joliette",
    serviceType: "Assistance routière",
    lead: "Toutes les pannes ne demandent pas un remorquage. Batterie à plat, clés dans l'auto, réservoir vide ou pneu crevé : l'assistance routière règle le problème sur place et vous remet sur la route.",
    checks: ["Survoltage de batterie (boost)", "Déverrouillage de portière", "Livraison d'essence", "Changement de pneu et sortie de fossé"],
    prose: `
<p>Le dépannage routier, c'est l'intervention qui évite le remorquage. Un technicien se déplace là où se trouve votre véhicule, à la maison, au travail, dans un stationnement ou sur le bord de la route, et règle la panne sur place quand c'est possible. Si le problème est plus sérieux, la même intervention peut se transformer en ${sLink("remorquage-automobile", "remorquage")} vers le garage de votre choix.</p>

<h2>Nos services d'assistance routière</h2>
<div class="table-wrap"><table>
  <thead><tr><th>Service</th><th>Quand l'utiliser</th></tr></thead>
  <tbody>
    <tr><td>${sLink("survoltage-batterie", "Survoltage (boost)")}</td><td>Le moteur ne démarre pas, les lumières du tableau de bord faiblissent, clic-clic au démarrage.</td></tr>
    <tr><td>${sLink("deverrouillage-voiture", "Déverrouillage de portière")}</td><td>Clés oubliées dans l'auto ou dans le coffre, clé intelligente enfermée, serrure gelée.</td></tr>
    <tr><td>${sLink("livraison-essence", "Livraison d'essence")}</td><td>Panne sèche sur la route, dans un rang ou dans l'entrée.</td></tr>
    <tr><td>${sLink("changement-pneu-crevaison", "Changement de pneu")}</td><td>Pneu crevé ou à plat, installation de la roue de secours.</td></tr>
    <tr><td>${sLink("sortie-de-fosse-desenlisement", "Sortie de fossé et désenlisement")}</td><td>Véhicule dans le fossé, enlisé dans la neige, la boue ou le sable.</td></tr>
  </tbody>
</table></div>

<h2>Assistance routière ou remorquage : comment savoir?</h2>
<p>Au téléphone, quelques questions suffisent pour déterminer le bon service. Voici des indices :</p>
<ul>
  <li><strong>Un survoltage devrait suffire</strong> si l'auto a été stationnée longtemps au froid, si une lumière est restée allumée ou si la batterie a plus de quatre ou cinq ans.</li>
  <li><strong>Un remorquage est probablement nécessaire</strong> si un bruit anormal a précédé la panne, si un voyant rouge s'est allumé (température, huile, freins), si de la fumée ou une odeur de brûlé est apparue, ou si l'auto a subi un choc.</li>
  <li><strong>Un pneu crevé se change sur place</strong> si la roue de secours est en bon état et que le véhicule est sur une surface stable, hors de la circulation. Sinon, on remorque.</li>
</ul>
<div class="callout"><strong>Conseil :</strong> ne tentez pas de survolter votre auto avec des câbles si la batterie est fissurée, gonflée ou si elle dégage une odeur d'œufs pourris. Éloignez-vous et appelez-nous.</div>

<h2>Partout où vous êtes en panne</h2>
<p>L'assistance routière se fait aussi bien dans une entrée résidentielle de ${zLink("notre-dame-des-prairies")} que dans le stationnement du Cégep régional de Lanaudière à Joliette, sur la route 131 vers ${zLink("saint-felix-de-valois")} ou sur l'accotement de l'${zLink("autoroute-40", "autoroute 40")}. Donnez-nous votre adresse ou, sur la route, le numéro de la sortie la plus proche, un commerce ou une borne kilométrique.</p>

<h2>Ce qu'il faut avoir sous la main</h2>
<ul>
  <li>Votre position exacte (adresse, intersection, sortie d'autoroute ou coordonnées GPS de votre téléphone).</li>
  <li>La marque, le modèle, l'année et la couleur du véhicule.</li>
  <li>Une description de la panne : bruits, voyants allumés, ce qui s'est passé juste avant.</li>
  <li>Pour la livraison d'essence : le type de carburant (essence ordinaire, super ou diesel).</li>
</ul>`,
    faq: [
      { q: "Est-ce que l'assistance routière coûte moins cher qu'un remorquage?", a: `Généralement, oui : un survoltage, un déverrouillage ou une livraison d'essence prennent moins de temps et ne demandent pas de transporter le véhicule. Voyez les fourchettes sur notre <a href="/prix-remorquage-joliette/">page des prix</a>.` },
      { q: "Je suis membre d'un club automobile : puis-je quand même vous appeler?", a: "Oui, vous pouvez faire appel à nous en tout temps, que vous soyez membre d'un club automobile ou non. Si votre club ou votre assureur rembourse les frais d'assistance routière, conservez votre facture pour votre demande de remboursement." },
      { q: "Faites-vous de l'assistance routière pour les camions?", a: `Oui, pour plusieurs situations (survoltage de camion, crevaison, désenlisement). Les camions lourds demandent un équipement particulier : précisez le type de véhicule lors de l'appel ou consultez notre service de ${sLink("remorquage-lourd", "remorquage lourd")}.` },
      { q: "Pouvez-vous réparer ma voiture sur place?", a: "Nous réglons les pannes courantes (batterie, portière, essence, pneu, désenlisement). Les réparations mécaniques, comme remplacer un alternateur ou une courroie, se font au garage. Dans ces cas, nous remorquons votre auto jusqu'au garage de votre choix." },
    ],
  }),

  // 5. Survoltage
  servicePage({
    slug: "survoltage-batterie",
    title: "Survoltage de batterie (boost) à Joliette | 24/7",
    description: "Batterie à plat à Joliette? Survoltage (boost) sur place avec un appareil professionnel, à la maison ou sur la route, 24 h sur 24. Appelez le 450-915-0067.",
    h1: "Survoltage de batterie (boost) à Joliette",
    serviceType: "Survoltage de batterie",
    lead: "Clic-clic au démarrage, tableau de bord qui s'éteint, auto qui ne veut rien savoir un matin de grand froid? Un survoltage professionnel vous remet en marche sans avoir à remorquer.",
    checks: ["Survoltage sur place, à la maison ou sur la route", "Appareil de démarrage professionnel", "Voitures, VUS, camionnettes et camions", "Remorquage au garage si l'auto ne repart pas"],
    prose: `
<p>La batterie à plat est la panne la plus fréquente de l'hiver québécois. À -20 °C, une batterie perd une bonne partie de sa capacité, alors que le moteur, avec son huile épaissie par le froid, demande plus d'énergie pour démarrer. Une batterie un peu fatiguée qui passait l'automne sans problème peut lâcher du jour au lendemain lors d'une vague de froid à Joliette.</p>
${photo("survoltage-batterie-joliette.webp", "Survoltage d'une batterie d'auto en hiver à Joliette")}
<h2>Les signes d'une batterie à plat</h2>
<ul>
  <li>Le démarreur fait un <strong>clic-clic</strong> rapide ou tourne très lentement.</li>
  <li>Les lumières du tableau de bord s'allument faiblement ou clignotent.</li>
  <li>Rien ne se passe du tout quand vous tournez la clé ou appuyez sur le bouton.</li>
  <li>Les portières ne se déverrouillent plus avec la télécommande.</li>
</ul>
<p>Si le moteur tourne normalement mais ne démarre pas, le problème est probablement ailleurs (carburant, allumage, capteur). Un ${sLink("remorquage-automobile", "remorquage vers le garage")} sera alors plus utile qu'un survoltage.</p>

<h2>Comment se fait un survoltage professionnel</h2>
${steps([
  ["Vérification", "Le technicien inspecte visuellement la batterie : fissures, gonflement, fuite ou bornes corrodées."],
  ["Branchement", "Un appareil de démarrage professionnel est branché dans le bon ordre, selon les points prévus par le fabricant."],
  ["Démarrage", "Le moteur est démarré, puis le technicien vérifie que l'alternateur recharge bien la batterie."],
  ["Conseils", "On vous dit combien de temps rouler pour recharger et s'il faut faire tester ou remplacer la batterie."],
], false)}
<p>Un appareil de survoltage professionnel protège l'électronique de votre véhicule mieux que des câbles branchés sur une autre auto. C'est important sur les véhicules récents, remplis de modules électroniques sensibles aux pics de tension.</p>

<h2>Et après le survoltage?</h2>
<p>Une fois l'auto démarrée, roulez au moins 20 à 30 minutes, idéalement sur la route plutôt qu'en ville, pour laisser l'alternateur recharger la batterie. Si votre batterie a plus de quatre ou cinq ans, ou si c'est le deuxième survoltage en quelques semaines, faites-la tester : la plupart des garages et des magasins de pièces de Joliette le font rapidement.</p>
<div class="callout"><strong>Voitures hybrides et électriques :</strong> elles ont aussi une batterie de 12 volts qui peut se décharger. Le survoltage se fait alors sur des points précis indiqués par le fabricant. Précisez le type de véhicule lors de votre appel.</div>

<h2>Prévenir la prochaine panne de batterie</h2>
<ul>
  <li>Branchez le chauffe-moteur (bloc) les nuits de grand froid, deux ou trois heures avant le départ suffisent.</li>
  <li>Éteignez phares, chauffage et accessoires avant de couper le moteur.</li>
  <li>Faites tester la batterie chaque automne, avant les premiers grands froids.</li>
  <li>Nettoyez les bornes si elles sont couvertes d'un dépôt blanc ou verdâtre.</li>
</ul>
<p>Tous nos conseils sont réunis dans le guide ${gLink("batterie-a-plat-par-grand-froid", "Batterie à plat par grand froid")}.</p>`,
    faq: [
      { q: "Faites-vous le survoltage à domicile?", a: "Oui. Le survoltage se fait là où se trouve votre auto : dans votre entrée, dans un stationnement d'immeuble, au travail ou sur le bord de la route, à Joliette comme dans les municipalités voisines." },
      { q: "Mon auto a besoin d'un survoltage chaque matin : est-ce normal?", a: "Non. Si votre batterie se décharge chaque nuit, elle est probablement en fin de vie, ou un accessoire consomme du courant quand l'auto est éteinte, ou encore l'alternateur ne recharge plus correctement. Faites vérifier le système de charge au garage." },
      { q: "Pouvez-vous survolter un camion ou un véhicule diesel?", a: "Oui, en précisant le type de véhicule lors de l'appel. Les camions et les moteurs diesel, surtout par grand froid, demandent un appareil plus puissant ou un branchement adapté (12 ou 24 volts)." },
      { q: "Vendez-vous des batteries?", a: "Notre rôle est de vous dépanner et, au besoin, de remorquer votre véhicule. Si la batterie doit être remplacée, nous pouvons amener l'auto chez le garage ou le commerce de votre choix." },
    ],
    pillars: [P24, PPRIX, PCERT],
  }),

  // 6. Déverrouillage
  servicePage({
    slug: "deverrouillage-voiture",
    title: "Déverrouillage de voiture à Joliette | Clés dans l'auto",
    description: "Clés oubliées dans l'auto à Joliette? Déverrouillage de portière et de coffre, 24 h sur 24, avec des outils qui ne brisent rien. Appelez le 450-915-0067.",
    h1: "Déverrouillage de voiture à Joliette",
    serviceType: "Déverrouillage de véhicule",
    lead: "Vos clés sont restées sur le siège, dans le coffre ou dans le démarreur? On ouvre votre portière avec des outils conçus pour ne rien abîmer, ni vitre, ni joint, ni serrure.",
    checks: ["Clés oubliées dans l'auto ou le coffre", "Outils professionnels sans dommage", "Voitures, VUS et camionnettes", "Service 24 h sur 24, 7 jours sur 7"],
    prose: `
<p>Ça arrive à tout le monde : on referme la portière en pensant avoir les clés dans ses poches, ou on dépose le sac d'épicerie dans le coffre avec le trousseau. Avec les clés intelligentes, il arrive aussi que l'auto se verrouille toute seule avec la clé à l'intérieur. Le déverrouillage de voiture à Joliette règle le problème sans casser de vitre.</p>

<h2>Situations les plus fréquentes</h2>
<ul>
  <li><strong>Clés sur le siège ou dans le contact</strong>, portières verrouillées.</li>
  <li><strong>Clés dans le coffre</strong>, souvent en déchargeant l'épicerie ou les bagages.</li>
  <li><strong>Clé intelligente enfermée</strong> ou dont la pile est morte.</li>
  <li><strong>Serrure gelée</strong> après une pluie verglaçante ou un lavage d'auto en hiver.</li>
  <li><strong>Enfant ou animal enfermé</strong> dans le véhicule : dans ce cas, s'il fait chaud ou très froid, composez le 9-1-1 sans attendre.</li>
</ul>

<h2>Comment se fait un déverrouillage sans dommage</h2>
<p>Le technicien utilise un coussin gonflable mince pour créer un petit espace dans le haut de la portière, puis une tige de déverrouillage pour atteindre le bouton ou la poignée intérieure. Ces outils sont conçus pour ne pas déformer la portière ni abîmer les joints d'étanchéité. Sur certains véhicules, d'autres méthodes adaptées au modèle sont utilisées.</p>
${steps([
  ["Vérification d'identité", "Avant d'ouvrir, le technicien confirme que vous êtes le propriétaire ou l'utilisateur autorisé (permis, immatriculation)."],
  ["Ouverture", "La portière est ouverte avec des outils professionnels, sans briser la vitre ni la serrure."],
  ["Récupération des clés", "Vous récupérez vos clés et vérifiez que tout fonctionne : verrous, vitres, alarme."],
], false)}
<div class="callout"><strong>Pourquoi on vous demande une pièce d'identité :</strong> c'est une mesure de protection contre le vol. Si vos papiers sont dans l'auto, ils seront vérifiés dès l'ouverture, avant que vous repartiez.</div>

<h2>Et si la clé est perdue ou brisée?</h2>
<p>Le déverrouillage permet d'ouvrir le véhicule, pas de le démarrer sans clé. Si votre clé est perdue, brisée ou si la clé intelligente ne répond plus, le véhicule devra probablement être remorqué chez le concessionnaire ou chez un serrurier spécialisé en automobile pour faire programmer une nouvelle clé. Nous pouvons organiser ce ${sLink("remorquage-automobile", "remorquage")}, sur plateau au besoin.</p>

<h2>Où intervenons-nous?</h2>
<p>Partout où votre auto est verrouillée : entrée de maison à ${zLink("saint-charles-borromee")}, stationnement d'épicerie à Joliette, aréna, centre commercial, stationnement d'hôpital ou halte routière. Nous desservons Joliette et les ${`<a href="/zones-desservies/">16 municipalités voisines</a>`}.</p>

<h2>Pour éviter que ça se reproduise</h2>
<ul>
  <li>Faites faire un double de votre clé et gardez-le à la maison ou confiez-le à un proche de confiance.</li>
  <li>Changez la pile de votre clé intelligente aux deux ou trois ans.</li>
  <li>Prenez l'habitude de verrouiller avec la télécommande, clés en main, plutôt qu'avec le bouton de la portière.</li>
  <li>En hiver, un dégivreur de serrure dans votre sac ou au bureau (pas dans l'auto!) peut vous sauver la mise.</li>
</ul>`,
    faq: [
      { q: "Est-ce que le déverrouillage peut endommager ma portière?", a: "Avec des outils professionnels et une technique adaptée, le risque est très faible. C'est justement ce qui distingue un déverrouillage professionnel d'une tentative avec un cintre, qui peut rayer la peinture, abîmer le joint ou déclencher des problèmes électriques." },
      { q: "Pouvez-vous ouvrir le coffre directement?", a: "Sur la plupart des véhicules, on ouvre d'abord une portière, puis on utilise le bouton intérieur ou la clé pour ouvrir le coffre. Sur certains modèles, l'accès au coffre se fait par l'habitacle en rabattant les sièges arrière." },
      { q: "Un enfant est enfermé dans l'auto : que faire?", a: "Si un enfant ou un animal est enfermé dans un véhicule par temps chaud ou très froid, composez immédiatement le 9-1-1. Les services d'urgence interviennent en priorité. Vous pouvez aussi nous appeler, mais le 9-1-1 passe avant tout." },
      { q: "Déverrouillez-vous les camions et les véhicules commerciaux?", a: "Oui, la plupart des camionnettes, fourgonnettes et camions légers peuvent être déverrouillés. Précisez la marque et le modèle lors de l'appel." },
    ],
    pillars: [P24, PCERT, PPRIX],
  }),

  // 7. Livraison d'essence
  servicePage({
    slug: "livraison-essence",
    title: "Livraison d'essence à Joliette | Panne sèche 24/7",
    description: "Panne d'essence à Joliette ou dans Lanaudière? Livraison de carburant sur place, 24 h sur 24, pour vous rendre à la station. Appelez le 450-915-0067.",
    h1: "Livraison d'essence à Joliette",
    serviceType: "Livraison de carburant en cas de panne sèche",
    lead: "Le voyant d'essence était allumé depuis un bout et l'auto s'est arrêtée? On vous apporte assez de carburant pour vous rendre à la prochaine station, sur la route ou dans votre entrée.",
    checks: ["Essence ordinaire, super ou diesel", "Sur la route, dans un rang ou à la maison", "Redémarrage vérifié sur place", "Service 24 h sur 24, 7 jours sur 7"],
    prose: `
<p>La panne sèche n'arrive pas qu'aux distraits. Une jauge qui fait défaut, un détour imprévu sur la route 131 vers ${zLink("saint-jean-de-matha")}, un réservoir qui se vide plus vite par grand froid ou une station fermée la nuit dans un petit village : il suffit de peu pour se retrouver immobilisé. La livraison d'essence à Joliette vous évite de marcher sur l'accotement avec un bidon.</p>

<h2>Comment ça fonctionne</h2>
${steps([
  ["Appel", "Indiquez votre position et le type de carburant : ordinaire, super ou diesel."],
  ["Livraison", "Le technicien arrive avec un contenant homologué et verse une quantité suffisante pour vous rendre à la station."],
  ["Redémarrage", "Il vérifie que le moteur redémarre. Un moteur diesel peut demander une purge ou un démarrage assisté."],
  ["Direction station", "Vous faites le plein à la station la plus proche. On vous l'indique au besoin."],
], false)}

<h2>Essence, diesel : ne vous trompez pas</h2>
<p>Mettre de l'essence dans un moteur diesel, ou l'inverse, peut causer des dommages coûteux. Vérifiez l'inscription sur la trappe du réservoir ou dans le manuel du propriétaire avant d'appeler.</p>
<div class="callout callout-danger"><strong>Vous avez fait le plein avec le mauvais carburant?</strong> Ne démarrez surtout pas le moteur, ou arrêtez-le immédiatement si vous avez déjà roulé. Le véhicule doit être remorqué au garage pour vidanger le réservoir. Appelez-nous pour un ${sLink("remorquage-automobile", "remorquage")}.</div>

<h2>Les endroits où la panne sèche nous surprend</h2>
<ul>
  <li><strong>Sur l'autoroute 40 et l'autoroute 31</strong>, où les stations sont concentrées près des sorties. Sur l'autoroute, restez dans le véhicule, ceinture bouclée, feux de détresse allumés. Voir la page ${zLink("autoroute-40", "remorquage sur l'autoroute 40")}.</li>
  <li><strong>Dans les secteurs plus ruraux</strong> du nord de Lanaudière, entre ${zLink("saint-felix-de-valois")}, ${zLink("saint-jean-de-matha")} et ${zLink("rawdon")}, où les stations sont plus espacées.</li>
  <li><strong>Dans les rangs agricoles</strong> autour de ${zLink("sainte-elisabeth")}, ${zLink("saint-thomas")} ou ${zLink("crabtree")}, surtout la nuit.</li>
</ul>

<h2>Le cas des véhicules électriques</h2>
<p>Une voiture électrique à batterie vide ne peut évidemment pas recevoir d'essence. Dans ce cas, le véhicule doit être amené à une borne de recharge, sur plateau. Voir notre service de ${sLink("remorquage-vehicule-electrique", "remorquage de véhicule électrique")}.</p>`,
    faq: [
      { q: "Combien de carburant livrez-vous?", a: "Assez pour vous rendre à une station-service à proximité, généralement quelques litres. L'objectif est de vous dépanner, pas de faire le plein complet : vous payez ensuite votre carburant au prix de la pompe." },
      { q: "Le carburant est-il inclus dans le prix?", a: `Le prix comprend le déplacement et le service. Le carburant livré est ajouté au coût selon la quantité. Tout est précisé dans la soumission avant l'intervention. Voir aussi la <a href="/prix-remorquage-joliette/">page des prix</a>.` },
      { q: "Mon moteur diesel ne redémarre pas après la livraison : pourquoi?", a: "Un moteur diesel qui a manqué de carburant peut avoir de l'air dans le circuit d'alimentation. Il faut parfois purger le système ou faire plusieurs tentatives de démarrage. Si le moteur ne repart pas, nous remorquons le véhicule jusqu'au garage." },
      { q: "Livrez-vous de l'essence pour une génératrice ou un bateau?", a: "Notre service de livraison d'essence est conçu pour dépanner les véhicules routiers immobilisés. Pour d'autres besoins, appelez-nous : selon la situation, nous vous dirigerons vers la bonne ressource." },
    ],
    pillars: [P24, PPRIX, PCERT],
  }),

  // 8. Changement de pneu
  servicePage({
    slug: "changement-pneu-crevaison",
    title: "Changement de pneu et crevaison à Joliette | 24/7",
    description: "Pneu crevé à Joliette? Installation de votre roue de secours sur place, ou remorquage au garage si le pneu ne peut être changé. Service 24/7 au 450-915-0067.",
    h1: "Changement de pneu et crevaison à Joliette",
    serviceType: "Changement de pneu sur la route",
    lead: "Un nid-de-poule sur la route 158, un clou ramassé sur un chantier, un pneu à plat au petit matin : on installe votre roue de secours en sécurité, ou on remorque l'auto si ce n'est pas possible.",
    checks: ["Installation de la roue de secours", "Écrous antivol pris en charge (avec la clé)", "Remorquage si pas de roue de secours", "Service 24 h sur 24, 7 jours sur 7"],
    prose: `
<p>Changer un pneu, en théorie, tout le monde sait le faire. En pratique, c'est une autre histoire sur l'accotement de l'autoroute 31 à la noirceur, par -15 °C, avec des écrous serrés à la clé pneumatique au dernier changement de saison. Le changement de pneu à Joliette par un professionnel se fait avec le bon équipement et en sécurité.</p>

<h2>Ce que comprend le service</h2>
<ul>
  <li><strong>Sécurisation de la zone</strong> avec les gyrophares de la dépanneuse lorsque le véhicule est en bordure de route.</li>
  <li><strong>Levage sécuritaire</strong> avec un cric professionnel placé aux points de levage prévus par le fabricant.</li>
  <li><strong>Retrait de la roue crevée</strong>, même si les écrous sont grippés par la rouille ou le calcium.</li>
  <li><strong>Installation de la roue de secours</strong> et serrage au couple approprié.</li>
  <li><strong>Vérification de la pression</strong> de la roue de secours, souvent oubliée depuis des années.</li>
</ul>

<h2>Pas de roue de secours? Ce n'est pas rare</h2>
<p>De plus en plus de véhicules neufs sont vendus sans roue de secours, avec seulement une trousse de réparation (scellant et compresseur). Ces trousses fonctionnent pour une petite perforation dans la bande de roulement, mais pas pour un flanc déchiré, une jante pliée ou un pneu éclaté. Dans ces cas, la solution est de ${sLink("remorquage-automobile", "remorquer le véhicule")} jusqu'au garage ou au centre de pneus de votre choix.</p>
<div class="callout"><strong>Écrous antivol :</strong> si vos roues ont des écrous de sécurité, la clé spéciale (adaptateur) est souvent rangée dans le coffre, près du cric ou dans le coffre à gants. Cherchez-la avant l'arrivée du technicien : sans elle, la roue ne peut pas être retirée.</div>

<h2>Crevaison sur l'autoroute : les bons réflexes</h2>
<ul>
  <li>Ne freinez pas brusquement : tenez le volant fermement et ralentissez graduellement.</li>
  <li>Rangez-vous le plus loin possible de la circulation, idéalement sur un accotement large ou à une sortie.</li>
  <li>Allumez vos feux de détresse et, si vous devez sortir, faites-le du côté opposé à la circulation.</li>
  <li>Ne changez pas le pneu vous-même si le côté à changer donne sur la voie de circulation.</li>
</ul>
<p>Notre guide ${gLink("panne-sur-autoroute-securite", "Panne sur l'autoroute 40 ou 31")} détaille toutes ces étapes.</p>

<h2>Roue de secours temporaire : attention</h2>
<p>La petite roue de secours temporaire (galette) n'est pas faite pour rouler longtemps ni vite. La plupart sont limitées à environ 80 km/h et à une courte distance : vérifiez l'inscription sur la roue. Faites réparer ou remplacer votre pneu dès que possible dans un centre de pneus de Joliette ou des environs.</p>`,
    faq: [
      { q: "Pouvez-vous réparer mon pneu sur place?", a: "Notre service consiste à installer votre roue de secours ou à remorquer le véhicule. La réparation d'un pneu (rustine, champignon) se fait en atelier, où le pneu est démonté et inspecté de l'intérieur pour s'assurer qu'il est sécuritaire." },
      { q: "J'ai deux pneus crevés : que faire?", a: "Avec une seule roue de secours, il faut remorquer le véhicule. Nous l'amenons au centre de pneus ou au garage de votre choix, idéalement sur plateau si les jantes risquent d'être abîmées." },
      { q: "Changez-vous les pneus de camionnette et de VR?", a: "Oui, pour les camionnettes et plusieurs véhicules récréatifs, selon l'accès aux points de levage et la taille des roues. Pour une roulotte, voyez aussi notre service de remorquage de VR et de roulotte." },
      { q: "Faites-vous le changement de pneus d'hiver à domicile?", a: "Non, notre service vise le dépannage en cas de crevaison. Pour la pose saisonnière de vos pneus d'hiver ou d'été, adressez-vous à un garage ou à un centre de pneus." },
    ],
    pillars: [P24, PCERT, PPRIX],
  }),
];
