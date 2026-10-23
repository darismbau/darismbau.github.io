/* =========================================================
   projets.js : tous mes projets, détaillés comme dans Notion.
   Chaque projet a une carte (resume) et une page complète
   (contexte, fiche technique, rôle, réalisations, compétences,
   apports, ce que je ferais autrement, bilan).
   Pour ajouter un projet : copie un bloc, change l'id et les textes
   (un modèle vide à copier est dans le README, section "Modèles").
   Seuls id, annee, date, code, titre, resume et domaines sont
   obligatoires : un champ absent n'est simplement pas affiché.

   annee : texte libre, ex : "ENSISA 2A", "Perso", "BUT 3"
   archive : true pour le mettre "à côté" (hors objectif, bas de la page Travaux)
   domaines : ia, reseau, dev, telecom, iot, securite (filtres)
   competences : administrer, connecter, programmer, rapprocher, unifier
     (compétences du BUT, facultatif : mets [] pour un projet ENSISA ou perso)
   phare : true pour le mettre en avant (les 6 premiers phares vont sur l'accueil)
   L'ordre des blocs = l'ordre d'affichage sur le site
   glossaire : les notions du projet, une phrase chacune
   preuves : documents et images, rangés dans assets/preuves/<id>/
     type "image" ou "pdf" ou "fichier" (+ fichier), "config" (+ code),
     ou "lien" (+ adresse complète dans fichier, ex : une vidéo YouTube)
     une preuve dont le fichier manque n'est pas affichée
   Image de couverture : assets/img/projets/<id>.jpg
     (sinon une affiche avec le code et le titre s'affiche)
   ========================================================= */

const projets = [
  {
    id: "operateur",
    annee: "BUT 2",
    date: { fr: "Mai · Juin 2025", en: "May · June 2025" },
    code: "SAE 4.ROM.01",
    titre: { fr: "Infrastructure opérateur et services multimédia", en: "Carrier infrastructure and multimedia services" },
    resume: {
      fr: "Monter le réseau d'un opérateur et les services qui tournent dessus : télévision par IP, téléphonie, vidéo à la demande, le tout automatisé.",
      en: "Building a carrier network and the services running on it: IPTV, telephony, video on demand, all automated."
    },
    techno: ["OSPF", "Multicast", "DMVPN", "IPsec", "Ansible", "Docker", "GNS3"],
    equipe: { fr: "Binôme", en: "Pair project" },
    domaines: ["reseau", "telecom"],
    competences: ["rapprocher"],
    phare: true,
    contexte: {
      fr: "Déployer l'infrastructure complète d'un opérateur pour que des clients sur plusieurs sites accèdent à des services multimédia (VoIP, VOD, IPTV, Web) hébergés dans des conteneurs. Le réseau devait gérer l'unicast, le multicast pour l'IPTV, les VPN et l'automatisation.",
      en: "Deploy a carrier's full infrastructure so customers on several sites can reach multimedia services (VoIP, VOD, IPTV, Web) hosted in containers. The network had to handle unicast, multicast for IPTV, VPNs and automation."
    },
    fiche: [
      { cle: { fr: "Zones", en: "Zones" }, valeur: { fr: "Contenu, cœur opérateur, deux sites clients, administration", en: "Content, carrier core, two customer sites, management" } },
      { cle: { fr: "Routage", en: "Routing" }, valeur: { fr: "OSPF dans le cœur, multicast PIM-SM et IGMP pour l'IPTV", en: "OSPF in the core, PIM-SM and IGMP multicast for IPTV" } },
      { cle: { fr: "Sécurité", en: "Security" }, valeur: { fr: "VPN DMVPN avec IPsec, SSH, VLAN", en: "DMVPN with IPsec, SSH, VLANs" } },
      { cle: { fr: "Automatisation", en: "Automation" }, valeur: { fr: "Playbooks Ansible pour configurer les routeurs", en: "Ansible playbooks to configure routers" } }
    ],
    role: {
      fr: "Je m'occupais de toute l'infrastructure réseau ; mon binôme déployait les services en conteneurs.",
      en: "I handled the whole network infrastructure; my teammate deployed the containerised services."
    },
    realise: {
      fr: ["Découper le réseau en zones et faire le plan d'adressage", "Configurer OSPF dans le cœur et le routage statique aux bords", "Activer le multicast pour diffuser l'IPTV jusqu'aux clients", "Mettre en place DHCP, SSH et le VPN entre sites", "Automatiser la configuration des routeurs avec Ansible"],
      en: ["Split the network into zones and build the addressing plan", "Configure OSPF in the core and static routing at the edges", "Enable multicast to stream IPTV to customers", "Set up DHCP, SSH and the VPN between sites", "Automate router configuration with Ansible"]
    },
    ac: [
      { fait: { fr: "Gérer le routage unicast et multicast", en: "Handle unicast and multicast routing" }, ref: "AC24.04", libelle: { fr: "Gérer le routage et les interconnexions", en: "Manage routing and interconnections" } },
      { fait: { fr: "Automatiser la configuration avec Ansible", en: "Automate configuration with Ansible" }, ref: "AC24.05", libelle: { fr: "Automatiser la gestion des équipements", en: "Automate equipment management" } },
      { fait: { fr: "Sécuriser avec SSH, VPN et VLAN", en: "Secure with SSH, VPN and VLANs" }, ref: "CE1.02", libelle: { fr: "Respecter les principes de sécurité", en: "Follow security principles" } }
    ],
    apports: {
      fr: ["Passer de la théorie à la pratique sur le multicast", "Comprendre la différence entre logique unicast et multicast", "Découvrir l'automatisation avec Ansible", "Voir qu'un service dépend toujours du réseau qui le transporte"],
      en: ["Go from theory to practice on multicast", "Understand how unicast and multicast logic differ", "Discover automation with Ansible", "See that a service always depends on the network carrying it"]
    },
    limites: {
      fr: ["La téléphonie en conteneur n'a pas fonctionné correctement", "La qualité de service n'a pas pu être mise en place faute de temps"],
      en: ["Telephony in a container didn't work properly", "Quality of service couldn't be set up in time"]
    },
    autrement: {
      fr: ["Intégrer Ansible dès le début", "Tester la téléphonie beaucoup plus tôt", "Mieux préparer le multicast"],
      en: ["Bring in Ansible from day one", "Test telephony much earlier", "Plan multicast better"]
    },
    bilan: {
      fr: "Le projet qui m'a fait penser au réseau dans son ensemble : pas juste faire marcher une topologie, mais penser maintenance, sécurité et diagnostic.",
      en: "The project that made me think about the network as a whole: not just making a topology work, but thinking about maintenance, security and troubleshooting."
    },
    glossaire: [
      { terme: "OSPF", definition: { fr: "Protocole de routage qui calcule le chemin le plus court entre les routeurs d'un même réseau.", en: "Routing protocol that computes the shortest path between routers of the same network." } },
      { terme: "Multicast", definition: { fr: "Envoyer un même flux à plusieurs destinataires en une seule fois, au lieu d'une copie par client.", en: "Sending one stream to many receivers at once, instead of one copy per client." } },
      { terme: "PIM-SM", definition: { fr: "Protocole qui construit l'arbre de diffusion multicast entre les routeurs, à partir d'un point de rendez-vous (RP).", en: "Protocol that builds the multicast distribution tree between routers, from a rendezvous point (RP)." } },
      { terme: "IGMP", definition: { fr: "Protocole par lequel un client dit à son routeur qu'il veut recevoir un flux multicast (une chaîne IPTV par exemple).", en: "Protocol a client uses to tell its router it wants a multicast stream (an IPTV channel for example)." } },
      { terme: "DMVPN", definition: { fr: "VPN dynamique où les sites se connectent à un site central et peuvent ensuite se parler directement.", en: "Dynamic VPN where sites connect to a hub and can then talk to each other directly." } },
      { terme: "IPsec", definition: { fr: "Suite de protocoles qui chiffre et authentifie les paquets IP entre deux sites.", en: "Protocol suite that encrypts and authenticates IP packets between two sites." } },
      { terme: "Ansible", definition: { fr: "Outil d'automatisation : on décrit la configuration voulue dans un fichier (playbook) et Ansible l'applique aux équipements.", en: "Automation tool: you describe the desired configuration in a file (playbook) and Ansible applies it to devices." } },
      { terme: "Docker", definition: { fr: "Outil qui fait tourner des services dans des conteneurs légers et isolés, faciles à déployer.", en: "Tool that runs services in light, isolated containers that are easy to deploy." } }
    ],
    preuves: [
      { type: "image", fichier: "topologie.png", titre: { fr: "Topologie du réseau (GNS3)", en: "Network topology (GNS3)" } },
      { type: "pdf", fichier: "rapport.pdf", titre: { fr: "Mon rapport", en: "My report" } },
      { type: "pdf", fichier: "sujet.pdf", titre: { fr: "Sujet du projet", en: "Project brief" } },
      { type: "pdf", fichier: "tp-dmvpn.pdf", titre: { fr: "TP lié : VPN DMVPN", en: "Related lab: DMVPN VPN" } },
      { type: "pdf", fichier: "tp-video.pdf", titre: { fr: "TP lié : diffusion vidéo (VLC)", en: "Related lab: video streaming (VLC)" } }
    ]
  },

  {
    id: "mpls",
    annee: "BUT 2",
    date: { fr: "Nov. 2024 · Janv. 2025", en: "Nov. 2024 · Jan. 2025" },
    code: "SAE 3.ROM.03",
    titre: { fr: "Réseau d'opérateur multi-sites", en: "Multi-site carrier network" },
    resume: {
      fr: "Jouer le rôle d'un fournisseur d'accès : relier deux entreprises réparties sur Strasbourg, Metz et Nancy, chacune isolée dans son propre réseau privé.",
      en: "Acting as an internet provider: connecting two companies spread across Strasbourg, Metz and Nancy, each isolated in its own private network."
    },
    techno: ["MPLS-VPN", "BGP", "OSPF", "RIP", "VRF", "NAT", "GNS3"],
    equipe: { fr: "Équipe de 3", en: "Team of 3" },
    domaines: ["reseau"],
    competences: ["administrer", "connecter", "rapprocher", "unifier"],
    phare: true,
    contexte: {
      fr: "Deux entreprises fictives d'e-commerce, sur trois villes, ont besoin d'un réseau sûr, redondant et interconnecté. Le projet avait trois parties : les réseaux locaux, les services, et le réseau du fournisseur d'accès. J'étais responsable du cœur de réseau opérateur.",
      en: "Two fictional e-commerce companies, across three cities, need a secure, redundant and interconnected network. The project had three parts: local networks, services, and the provider's network. I was in charge of the carrier core."
    },
    fiche: [
      { cle: { fr: "Cœur de réseau", en: "Core" }, valeur: { fr: "3 systèmes autonomes, MPLS activé partout", en: "3 autonomous systems, MPLS enabled everywhere" } },
      { cle: { fr: "Routage", en: "Routing" }, valeur: { fr: "RIP et OSPF en interne, BGP et MP-BGP entre les AS", en: "RIP and OSPF internally, BGP and MP-BGP between ASes" } },
      { cle: { fr: "Clients", en: "Customers" }, valeur: { fr: "Une VRF par entreprise, NAT pour publier un serveur web", en: "One VRF per company, NAT to publish a web server" } },
      { cle: { fr: "Simulation", en: "Simulation" }, valeur: { fr: "GNS3 avec routeurs Cisco IOS", en: "GNS3 with Cisco IOS routers" } }
    ],
    role: {
      fr: "Responsable de toute la partie fournisseur d'accès. On avançait chacun sur sa partie la semaine et on mettait tout en commun le week-end.",
      en: "In charge of the whole provider part. Each of us worked on our part during the week and we put everything together at weekends."
    },
    realise: {
      fr: ["Adresser toutes les interfaces des trois AS", "Mettre en place le routage interne et MPLS dans chaque AS", "Monter les sessions BGP avec réflecteurs de routes et entre les AS", "Isoler chaque client dans sa VRF et filtrer les préfixes échangés", "Publier le serveur web d'un client grâce au NAT", "Tester la redondance en coupant des liens volontairement"],
      en: ["Address every interface across the three ASes", "Set up internal routing and MPLS in each AS", "Bring up BGP sessions with route reflectors and between ASes", "Isolate each customer in its VRF and filter exchanged prefixes", "Publish a customer's web server through NAT", "Test redundancy by deliberately cutting links"]
    },
    ac: [
      { fait: { fr: "Configurer et dépanner le routage multi-AS", en: "Configure and troubleshoot multi-AS routing" }, ref: "AC21.01", libelle: { fr: "Configurer et dépanner le routage dynamique", en: "Configure and troubleshoot dynamic routing" } },
      { fait: { fr: "Déployer VRF, MPLS, BGP et NAT", en: "Deploy VRF, MPLS, BGP and NAT" }, ref: "AC21.04", libelle: { fr: "Déployer des services réseaux avancés", en: "Deploy advanced network services" } },
      { fait: { fr: "Concevoir l'architecture du fournisseur d'accès", en: "Design the provider architecture" }, ref: "AC34.01", libelle: { fr: "Administrer les infrastructures télécom", en: "Administer telecom infrastructure" } },
      { fait: { fr: "Assurer plusieurs chemins entre les sites", en: "Provide multiple paths between sites" }, ref: "CE4.01", libelle: { fr: "Assurer la haute disponibilité", en: "Ensure high availability" } }
    ],
    apports: {
      fr: ["Comprendre de l'intérieur comment fonctionne un réseau d'opérateur", "Isoler des clients sur une même infrastructure", "Déboguer des problèmes complexes : sessions qui ne montent pas, tables vides", "Coordonner trois parties qui doivent s'emboîter"],
      en: ["Understand from the inside how a carrier network works", "Isolate customers on the same infrastructure", "Debug complex issues: sessions not coming up, empty tables", "Coordinate three parts that have to fit together"]
    },
    autrement: { fr: ["Automatiser les configurations avec Ansible au lieu de tout taper à la main"], en: ["Automate configurations with Ansible instead of typing everything by hand"] },
    bilan: {
      fr: "Le projet qui m'a le plus appris en réseau, et celui qui m'a demandé le plus de travail perso, souvent le soir et le week-end.",
      en: "The project that taught me the most about networking, and the one that took the most personal work, often evenings and weekends."
    },
    glossaire: [
      { terme: "Système autonome (AS)", definition: { fr: "Ensemble de routeurs gérés par un même opérateur, identifié par un numéro unique.", en: "Group of routers run by the same operator, identified by a unique number." } },
      { terme: "BGP", definition: { fr: "Le protocole qui échange les routes entre opérateurs : c'est lui qui fait tenir Internet.", en: "The protocol that exchanges routes between operators: it is what holds the Internet together." } },
      { terme: "MP-BGP", definition: { fr: "Extension de BGP qui transporte aussi les routes des réseaux privés des clients (VPN).", en: "BGP extension that also carries the routes of customers' private networks (VPN)." } },
      { terme: "Réflecteur de routes", definition: { fr: "Routeur qui redistribue les routes BGP aux autres, pour éviter de relier tous les routeurs entre eux.", en: "Router that passes BGP routes on to the others, so every router does not need a session with every other." } },
      { terme: "MPLS", definition: { fr: "Technique d'opérateur qui fait suivre les paquets grâce à des étiquettes, plus rapide et plus souple que le routage classique.", en: "Carrier technique that forwards packets using labels, faster and more flexible than plain routing." } },
      { terme: "VRF", definition: { fr: "Table de routage séparée par client : plusieurs clients partagent le même routeur sans jamais se voir.", en: "Separate routing table per customer: several customers share one router without ever seeing each other." } },
      { terme: "RIP", definition: { fr: "Protocole de routage simple qui choisit le chemin avec le moins de routeurs à traverser.", en: "Simple routing protocol that picks the path crossing the fewest routers." } },
      { terme: "NAT", definition: { fr: "Traduction d'adresses : permet à des machines en adresses privées de sortir ou d'être joignables avec une adresse publique.", en: "Address translation: lets privately addressed machines reach out or be reached with a public address." } }
    ],
    preuves: [
      { type: "image", fichier: "architecture.png", titre: { fr: "Architecture du réseau du fournisseur d'accès", en: "Provider network architecture" } },
      { type: "image", fichier: "ibgp.png", titre: { fr: "Configuration iBGP avec réflecteur de routes", en: "iBGP configuration with route reflector" } },
      { type: "image", fichier: "vrf.png", titre: { fr: "Configuration des VRF clients", en: "Customer VRF configuration" } },
      { type: "image", fichier: "maquette.png", titre: { fr: "Vue d'ensemble de la maquette", en: "Lab overview" } },
      { type: "pdf", fichier: "sujet.pdf", titre: { fr: "Sujet du projet", en: "Project brief" } },
      { type: "pdf", fichier: "cahier-des-charges.pdf", titre: { fr: "Cahier des charges", en: "Specifications" } },
      { type: "fichier", fichier: "maquette-fai.zip", titre: { fr: "Maquette finale de la partie fournisseur d'accès (GNS3)", en: "Final provider lab (GNS3)" } }
    ]
  },

  {
    id: "frigate",
    annee: "BUT 3",
    date: { fr: "Déc. 2025", en: "Dec. 2025" },
    code: "SAE 5.ROM.03",
    titre: { fr: "Vidéosurveillance intelligente avec l'IA", en: "AI-powered video surveillance" },
    resume: {
      fr: "Un système de vidéosurveillance qui ne se contente pas de filmer : il détecte les objets, lit les plaques, reconnaît les visages et permet de chercher dans les vidéos en langage naturel.",
      en: "A video surveillance system that does more than record: it detects objects, reads license plates, recognises faces and lets you search footage in plain language."
    },
    techno: ["Frigate", "Docker", "FaceNet", "Jina CLIP", "Gemini", "MQTT", { fr: "Caméras IP", en: "IP cameras" }],
    equipe: { fr: "Projet individuel", en: "Solo project" },
    domaines: ["ia", "telecom"],
    competences: ["rapprocher", "unifier"],
    phare: true,
    contexte: {
      fr: "Déployer un système de vidéosurveillance intelligent avec Frigate. Sur un serveur Debian 12, deux caméras IP Hikvision envoient leurs flux en RTSP (720p, 5 images par seconde). Les caméras se pilotent en ONVIF et les alertes passent par MQTT.",
      en: "Deploy an intelligent video surveillance system with Frigate. On a Debian 12 server, two Hikvision IP cameras stream over RTSP (720p, 5 fps). The cameras are controlled over ONVIF and alerts go through MQTT."
    },
    fiche: [
      { cle: { fr: "Serveur", en: "Server" }, valeur: { fr: "Debian 12, Frigate 0.16 sous Docker Compose", en: "Debian 12, Frigate 0.16 on Docker Compose" } },
      { cle: { fr: "Caméras", en: "Cameras" }, valeur: { fr: "2 caméras IP Hikvision, flux RTSP, contrôle PTZ en ONVIF", en: "2 Hikvision IP cameras, RTSP streams, PTZ control over ONVIF" } },
      { cle: { fr: "IA", en: "AI" }, valeur: { fr: "Détection d'objets, lecture de plaques, FaceNet, Jina CLIP, Google Gemini", en: "Object detection, plate reading, FaceNet, Jina CLIP, Google Gemini" } },
      { cle: { fr: "Messagerie", en: "Messaging" }, valeur: "Mosquitto (MQTT)" }
    ],
    role: {
      fr: "Projet réalisé seul, de l'installation du serveur jusqu'au réglage des fonctions d'IA.",
      en: "Done alone, from installing the server to tuning the AI features."
    },
    realise: {
      fr: [
        "Installer Docker (avec un souci de dépôts Debian à résoudre) et déployer Frigate",
        "Brancher les deux caméras en RTSP et leur pilotage en ONVIF",
        "Activer la détection d'objets et régler les seuils de lecture de plaques",
        "Configurer la reconnaissance faciale avec des photos de référence",
        "Ajouter la recherche dans les vidéos en langage naturel (Jina CLIP)",
        "Brancher l'API Gemini pour décrire les événements en français",
        "Entraîner des modèles YOLO perso (99,5 % de précision), puis découvrir que Frigate ne les accepte pas"
      ],
      en: [
        "Install Docker (fixing a Debian repository issue) and deploy Frigate",
        "Connect both cameras over RTSP and their control over ONVIF",
        "Enable object detection and tune the license plate thresholds",
        "Set up face recognition with reference photos",
        "Add plain-language search over footage (Jina CLIP)",
        "Plug in the Gemini API to describe events in French",
        "Train custom YOLO models (99.5% precision), then find out Frigate doesn't accept them"
      ]
    },
    ac: [
      { fait: { fr: "Superviser les flux vidéo et les alertes MQTT", en: "Monitor video streams and MQTT alerts" }, ref: "AC34.01", libelle: { fr: "Superviser les infrastructures et services télécom", en: "Monitor telecom infrastructure and services" } },
      { fait: { fr: "Déployer Frigate avec Docker Compose et des volumes persistants", en: "Deploy Frigate with Docker Compose and persistent volumes" }, ref: "AC33.04", libelle: { fr: "Déployer et maintenir une solution informatique", en: "Deploy and maintain an IT solution" } },
      { fait: { fr: "Protéger l'accès aux flux et la clé de l'API Gemini", en: "Protect stream access and the Gemini API key" }, ref: "CE3.05", libelle: { fr: "Intégrer les problématiques de sécurité", en: "Take security into account" } },
      { fait: { fr: "Réunir cinq fonctions d'IA dans un même système vidéo", en: "Combine five AI features into one video system" }, ref: "AC35.02", libelle: { fr: "Déployer des services multimédia", en: "Deploy multimedia services" } }
    ],
    apports: {
      fr: ["Comprendre la chaîne d'un système vidéo moderne : flux, détection, alertes", "Régler des seuils : trop bas, des fausses alertes ; trop haut, des oublis", "Découvrir la recherche par vecteurs : l'image devient un vecteur qu'on compare", "Utiliser une IA générative par API avec mes propres consignes", "Accepter les limites d'un outil après l'avoir poussé au bout"],
      en: ["Understand the chain of a modern video system: streams, detection, alerts", "Tune thresholds: too low means false alarms, too high means misses", "Discover vector search: an image becomes a vector you compare", "Use a generative AI through an API with my own prompts", "Accept a tool's limits after pushing it all the way"]
    },
    autrement: {
      fr: ["Utiliser un GPU ou un accélérateur pour la détection", "Envoyer des alertes par mail ou Telegram", "Documenter au fur et à mesure"],
      en: ["Use a GPU or accelerator for detection", "Send alerts by email or Telegram", "Document as I go"]
    },
    bilan: {
      fr: "Le premier projet où j'ai touché à autant de couches d'IA à la fois : détection, reconnaissance, recherche et génération. Un vrai déclic pour la suite.",
      en: "The first project where I worked with so many AI layers at once: detection, recognition, search and generation. A real turning point."
    },
    glossaire: [
      { terme: "Frigate", definition: { fr: "Logiciel libre de vidéosurveillance qui analyse les flux des caméras avec de l'IA.", en: "Open-source video surveillance software that analyses camera streams with AI." } },
      { terme: "RTSP", definition: { fr: "Protocole qui transporte le flux vidéo en direct d'une caméra IP.", en: "Protocol that carries a live video stream from an IP camera." } },
      { terme: "ONVIF", definition: { fr: "Norme commune aux caméras IP, utilisée ici pour piloter les mouvements (PTZ).", en: "Common standard for IP cameras, used here to control movement (PTZ)." } },
      { terme: "MQTT", definition: { fr: "Protocole léger de messagerie : des appareils publient des messages, d'autres s'y abonnent via un broker.", en: "Lightweight messaging protocol: devices publish messages, others subscribe through a broker." } },
      { terme: "Docker Compose", definition: { fr: "Fichier qui décrit plusieurs conteneurs et leurs réglages, lancés ensemble en une commande.", en: "File describing several containers and their settings, started together in one command." } },
      { terme: "Modèle COCO", definition: { fr: "Modèle de détection entraîné à reconnaître 80 types d'objets courants (personne, voiture...).", en: "Detection model trained to recognise 80 common object types (person, car...)." } },
      { terme: "Recherche sémantique", definition: { fr: "Chercher par le sens et non par mots exacts : l'image et la question sont transformées en vecteurs puis comparées.", en: "Searching by meaning rather than exact words: image and query become vectors that are compared." } },
      { terme: "Seuil de détection", definition: { fr: "Score minimum pour valider une détection : trop bas, fausses alertes ; trop haut, détections ratées.", en: "Minimum score to accept a detection: too low gives false alarms, too high misses detections." } }
    ],
    preuves: [
      { type: "image", fichier: "architecture.png", titre: { fr: "Architecture du système", en: "System architecture" } },
      { type: "image", fichier: "fonctions-ia.png", titre: { fr: "Les fonctions IA dans Frigate", en: "AI features in Frigate" } },
      { type: "pdf", fichier: "rapport-1.pdf", titre: { fr: "Mon rapport, partie 1", en: "My report, part 1" } },
      { type: "pdf", fichier: "rapport-2.pdf", titre: { fr: "Mon rapport, partie 2", en: "My report, part 2" } },
      { type: "pdf", fichier: "sujet.pdf", titre: { fr: "Sujet du projet", en: "Project brief" } }
    ]
  },

  {
    id: "petite-structure",
    annee: "BUT 1",
    date: { fr: "Mai · Juin 2024", en: "May · June 2024" },
    code: "SAE 2.01",
    titre: { fr: "Réseau sécurisé pour une petite structure", en: "Secure network for a small business" },
    resume: {
      fr: "Un réseau local segmenté et sécurisé, avec serveurs web synchronisés et serveur de fichiers, monté sur GNS3.",
      en: "A segmented and secured local network with synchronised web servers and a file server, built in GNS3."
    },
    techno: ["GNS3", "Cisco", "VLAN", "RIP", "ACL", "NAT", "Apache"],
    equipe: { fr: "Projet individuel", en: "Solo project" },
    domaines: ["reseau", "securite"],
    competences: ["administrer"],
    phare: true,
    contexte: {
      fr: "Construire un réseau local complet, fonctionnel et sécurisé sur GNS3 : segmentation en VLAN, adressage hiérarchique, routage dynamique, services FTP et Web, et règles de sécurité.",
      en: "Build a complete, working and secure local network in GNS3: VLAN segmentation, hierarchical addressing, dynamic routing, FTP and web services, and security rules."
    },
    fiche: [
      { cle: { fr: "Réseau", en: "Network" }, valeur: { fr: "3 VLAN, routage inter-VLAN, RIP v2, Spanning Tree", en: "3 VLANs, inter-VLAN routing, RIP v2, Spanning Tree" } },
      { cle: { fr: "Services", en: "Services" }, valeur: { fr: "FTP, deux serveurs Apache synchronisés, DHCP", en: "FTP, two synced Apache servers, DHCP" } },
      { cle: { fr: "Sécurité", en: "Security" }, valeur: { fr: "ACL, NAT, sécurité des ports", en: "ACLs, NAT, port security" } }
    ],
    role: { fr: "Projet réalisé seul, avec une maquette reliée à celle d'un camarade.", en: "Done alone, with my lab connected to a classmate's." },
    realise: {
      fr: ["Faire le plan d'adressage et créer les VLAN", "Configurer le routage RIP v2", "Installer les services FTP et Web sur Debian", "Filtrer les flux avec des ACL et du NAT", "Sécuriser les ports des commutateurs"],
      en: ["Build the addressing plan and create VLANs", "Configure RIP v2 routing", "Install FTP and web services on Debian", "Filter traffic with ACLs and NAT", "Secure switch ports"]
    },
    ac: [
      { fait: { fr: "Configurer VLAN et adressage", en: "Configure VLANs and addressing" }, ref: "AC11.03", libelle: { fr: "Configurer un réseau local", en: "Configure a local network" } },
      { fait: { fr: "Appliquer ACL et sécurité des ports", en: "Apply ACLs and port security" }, ref: "CE1.02", libelle: { fr: "Respecter les principes de sécurité", en: "Follow security principles" } }
    ],
    apports: { fr: ["Concevoir un réseau avec des contraintes réelles", "Relier couche réseau et couche applicative"], en: ["Design a network under real constraints", "Link the network and application layers"] },
    autrement: { fr: ["Préparer le plan d'adressage dès le départ", "Utiliser des configurations pré-remplies"], en: ["Prepare the addressing plan from the start", "Use pre-filled configurations"] },
    bilan: { fr: "Technique, mais très formateur : une première vision globale d'un réseau sécurisé.", en: "Technical but very formative: a first overall view of a secure network." },
    glossaire: [
      { terme: "VLAN", definition: { fr: "Réseau virtuel : on sépare un même switch en plusieurs réseaux isolés (services, utilisateurs...).", en: "Virtual network: one switch is split into several isolated networks (departments, users...)." } },
      { terme: "RIP v2", definition: { fr: "Version améliorée de RIP qui gère les masques de sous-réseau variables.", en: "Improved version of RIP that supports variable subnet masks." } },
      { terme: "ACL", definition: { fr: "Liste de règles sur un routeur qui autorise ou bloque certains flux.", en: "List of rules on a router that allows or blocks certain traffic." } },
      { terme: "NAT", definition: { fr: "Traduction d'adresses pour que le réseau interne accède à Internet avec une adresse publique.", en: "Address translation so the internal network can reach the Internet with a public address." } },
      { terme: "Port-security", definition: { fr: "Protection d'un port de switch qui n'accepte que les machines autorisées.", en: "Switch port protection that only accepts authorised machines." } },
      { terme: "Spanning Tree", definition: { fr: "Protocole qui coupe les boucles entre switchs tout en gardant des liens de secours.", en: "Protocol that breaks loops between switches while keeping backup links." } },
      { terme: "DHCP", definition: { fr: "Service qui donne automatiquement une adresse IP aux machines qui se connectent.", en: "Service that automatically gives an IP address to connecting machines." } },
      { terme: "rsync", definition: { fr: "Outil qui synchronise des fichiers entre deux serveurs, ici pour garder deux serveurs web identiques.", en: "Tool that syncs files between two servers, here to keep two web servers identical." } }
    ],
    preuves: [
      { type: "image", fichier: "topologie.png", titre: { fr: "Topologie du réseau (GNS3)", en: "Network topology (GNS3)" } },
      { type: "pdf", fichier: "rapport.pdf", titre: { fr: "Mon rapport", en: "My report" } },
      { type: "pdf", fichier: "sujet.pdf", titre: { fr: "Sujet du projet", en: "Project brief" } },
      { type: "pdf", fichier: "td.pdf", titre: { fr: "TD lié au projet", en: "Related tutorial" } }
    ]
  },

  {
    id: "integratif",
    annee: "BUT 1",
    date: { fr: "Juin 2024", en: "June 2024" },
    code: "SAE 2.04",
    titre: { fr: "Projet intégratif : réseau, téléphonie et données", en: "Capstone: network, telephony and data" },
    resume: {
      fr: "Le projet de fin de 1re année qui mélange tout : un réseau segmenté, de la téléphonie, et des données de capteurs affichées dans une appli web.",
      en: "The end of first year project that mixes everything: a segmented network, telephony, and sensor data displayed in a web app."
    },
    techno: ["VLAN", "DNS", "NAT", "SIP", "MQTT", "MySQL", "Django"],
    equipe: { fr: "Équipe de 3", en: "Team of 3" },
    domaines: ["reseau", "dev"],
    competences: ["administrer", "connecter", "programmer"],
    phare: true,
    contexte: {
      fr: "Concevoir un système complet en quatre parties : réseau, téléphonie IP, collecte de données et web. En tant qu'administrateurs, il fallait un réseau segmenté capable de gérer la téléphonie, la remontée des capteurs et l'affichage sur un site.",
      en: "Build a complete system in four parts: network, IP telephony, data collection and web. As administrators, we needed a segmented network able to handle telephony, sensor data and display on a website."
    },
    fiche: [
      { cle: { fr: "Réseau", en: "Network" }, valeur: { fr: "4 VLAN, DHCP, NAT, filtrage, DNS sous Windows Server", en: "4 VLANs, DHCP, NAT, filtering, DNS on Windows Server" } },
      { cle: { fr: "Téléphonie", en: "Telephony" }, valeur: { fr: "Linphone, comptes SIP", en: "Linphone, SIP accounts" } },
      { cle: { fr: "Données", en: "Data" }, valeur: { fr: "Collecte MQTT en Python, base MySQL, site Django", en: "MQTT collection in Python, MySQL database, Django site" } }
    ],
    role: {
      fr: "J'ai fait seul toute la partie réseau et la téléphonie, et participé au site, à la base et aux scripts de collecte.",
      en: "I did the whole network and telephony parts alone, and contributed to the site, database and collection scripts."
    },
    realise: {
      fr: ["Découper le réseau en VLAN Voix, Utilisateurs, Serveurs et Admin", "Configurer passerelles, DHCP, NAT et règles de filtrage", "Mettre en place le DNS pour nommer les services internes", "Créer les comptes SIP et tester les appels", "Écrire les scripts de collecte et modéliser la base"],
      en: ["Split the network into Voice, Users, Servers and Admin VLANs", "Configure gateways, DHCP, NAT and filtering rules", "Set up DNS to name internal services", "Create SIP accounts and test calls", "Write collection scripts and design the database"]
    },
    ac: [
      { fait: { fr: "Construire un réseau local segmenté", en: "Build a segmented local network" }, ref: "AC11.03", libelle: { fr: "Configurer un réseau local", en: "Configure a local network" } },
      { fait: { fr: "Mettre en place DHCP, DNS, FTP et Web", en: "Set up DHCP, DNS, FTP and Web" }, ref: "AC11.04", libelle: { fr: "Maîtriser les services d'infrastructure", en: "Master infrastructure services" } },
      { fait: { fr: "Modéliser la base de données", en: "Design the database" }, ref: "AC13.05", libelle: { fr: "Choisir les mécanismes de gestion de données", en: "Choose data management mechanisms" } }
    ],
    apports: {
      fr: ["Relier concrètement réseau, téléphonie et développement", "Protéger les flux entre VLAN", "Travailler sur un système réparti entre plusieurs machines"],
      en: ["Really connect networking, telephony and development", "Protect traffic between VLANs", "Work on a system spread across several machines"]
    },
    autrement: { fr: ["Documenter au fur et à mesure", "Préparer des scripts pour les tâches répétitives"], en: ["Document as I go", "Prepare scripts for repetitive tasks"] },
    bilan: { fr: "Un projet réussi de bout en bout, grâce à une vraie coordination à trois.", en: "A project that worked from end to end, thanks to real coordination between the three of us." },
    glossaire: [
      { terme: "VLAN", definition: { fr: "Réseau virtuel qui sépare les flux (voix, utilisateurs, serveurs, administration) sur le même matériel.", en: "Virtual network separating traffic (voice, users, servers, admin) on the same hardware." } },
      { terme: "DNS", definition: { fr: "Annuaire du réseau : il traduit un nom (FQDN) en adresse IP.", en: "The network's directory: it turns a name (FQDN) into an IP address." } },
      { terme: "FQDN", definition: { fr: "Nom complet d'une machine, par exemple web.entreprise.lab.", en: "Full name of a machine, for example web.company.lab." } },
      { terme: "SIP", definition: { fr: "Protocole qui établit et termine les appels en téléphonie sur IP.", en: "Protocol that sets up and ends calls in IP telephony." } },
      { terme: "MQTT", definition: { fr: "Protocole léger utilisé pour remonter les mesures des capteurs.", en: "Lightweight protocol used to send sensor readings." } },
      { terme: "Clé étrangère", definition: { fr: "Lien entre deux tables d'une base de données, ici entre une mesure et son capteur.", en: "Link between two database tables, here between a reading and its sensor." } },
      { terme: "Django", definition: { fr: "Framework Python pour créer des sites web reliés à une base de données.", en: "Python framework to build websites connected to a database." } }
    ],
    preuves: [
      { type: "pdf", fichier: "presentation.pdf", titre: { fr: "Présentation du projet", en: "Project presentation" } },
      { type: "pdf", fichier: "partie-reseau.pdf", titre: { fr: "Partie réseau (ma partie)", en: "Network part (my part)" } },
      { type: "pdf", fichier: "partie-telephonie.pdf", titre: { fr: "Partie téléphonie", en: "Telephony part" } }
    ]
  },

  {
    id: "succursale",
    annee: "BUT 1",
    date: { fr: "Janv. · Févr. 2024", en: "Jan. · Feb. 2024" },
    code: "SAE 1.02",
    titre: { fr: "Réseau d'une succursale d'entreprise", en: "Branch office network" },
    resume: {
      fr: "Mon premier vrai réseau : plan d'adressage, VLAN, routage entre VLAN et DHCP sur un serveur Linux.",
      en: "My first real network: addressing plan, VLANs, inter-VLAN routing and DHCP on a Linux server."
    },
    techno: ["VLAN", "DHCP", "VTP", "Linux", "EVE-NG", "Wireshark"],
    equipe: { fr: "Projet individuel", en: "Solo project" },
    domaines: ["reseau"],
    competences: ["administrer"],
    phare: true,
    contexte: {
      fr: "En tant que technicien, concevoir et mettre en place le réseau d'une succursale d'entreprise selon un cahier des charges : plan d'adressage, VLAN, commutateurs, routeur, DHCP, routage entre VLAN et vérification complète. Tout a été simulé sur EVE-NG.",
      en: "As a technician, design and set up a company branch network from a brief: addressing plan, VLANs, switches, router, DHCP, inter-VLAN routing and full verification. Everything was simulated on EVE-NG."
    },
    fiche: [
      { cle: { fr: "Adressage", en: "Addressing" }, valeur: { fr: "172.20.85.0/24 découpé en 4 sous-réseaux", en: "172.20.85.0/24 split into 4 subnets" } },
      { cle: { fr: "VLAN", en: "VLANs" }, valeur: { fr: "Direction, Utilisateurs, Serveurs, Administrateur", en: "Management, Users, Servers, Admin" } },
      { cle: { fr: "Équipements", en: "Equipment" }, valeur: { fr: "Routeur Cisco 2800, deux commutateurs Catalyst 2960", en: "Cisco 2800 router, two Catalyst 2960 switches" } }
    ],
    role: { fr: "Projet réalisé seul.", en: "Done alone." },
    realise: {
      fr: ["Découper le réseau selon le nombre de postes de chaque VLAN", "Créer les VLAN et les liens trunk", "Configurer le routage inter-VLAN sur le routeur", "Mettre le DHCP sur le switch puis le migrer sur un serveur Linux", "Ajouter un second switch synchronisé par VTP", "Vérifier avec ping et captures Wireshark"],
      en: ["Split the network by number of hosts per VLAN", "Create VLANs and trunk links", "Configure inter-VLAN routing on the router", "Run DHCP on the switch, then move it to a Linux server", "Add a second switch synced through VTP", "Verify with ping and Wireshark captures"]
    },
    ac: [
      { fait: { fr: "Configurer VLAN, trunk et routage inter-VLAN", en: "Configure VLANs, trunks and inter-VLAN routing" }, ref: "AC11.03", libelle: { fr: "Configurer un réseau local", en: "Configure a local network" } },
      { fait: { fr: "Capturer et analyser les trames", en: "Capture and analyse frames" }, ref: "AC11.05", libelle: { fr: "Identifier les dysfonctionnements du réseau", en: "Identify network issues" } }
    ],
    apports: {
      fr: ["Faire un plan d'adressage précis pour de vrai", "Comprendre l'intérêt des VLAN et des trunks", "Lire les échanges DHCP dans Wireshark"],
      en: ["Build a precise addressing plan for real", "Understand why VLANs and trunks matter", "Read DHCP exchanges in Wireshark"]
    },
    autrement: { fr: ["Mieux structurer le plan d'adressage dès le départ"], en: ["Structure the addressing plan better from the start"] },
    bilan: { fr: "Le projet qui m'a donné les bases en réseau, réutilisées dans tous les projets suivants.", en: "The project that gave me my networking foundations, reused in every project after." },
    glossaire: [
      { terme: "Plan d'adressage", definition: { fr: "Découpage d'une plage d'adresses IP en sous-réseaux, selon le nombre de machines de chaque groupe.", en: "Splitting an IP range into subnets, sized for the number of machines in each group." } },
      { terme: "Masque de sous-réseau", definition: { fr: "Indique quelle partie de l'adresse IP désigne le réseau, par exemple /27 pour 30 machines.", en: "Shows which part of an IP address is the network, for example /27 for 30 machines." } },
      { terme: "VLAN", definition: { fr: "Réseau virtuel qui isole un groupe de machines (direction, utilisateurs...) sur un même switch.", en: "Virtual network isolating a group of machines (management, users...) on one switch." } },
      { terme: "Trunk 802.1Q", definition: { fr: "Lien qui transporte plusieurs VLAN à la fois, chaque trame portant l'étiquette de son VLAN.", en: "Link carrying several VLANs at once, each frame tagged with its VLAN." } },
      { terme: "Routage inter-VLAN", definition: { fr: "Le routeur fait passer le trafic d'un VLAN à l'autre grâce à une sous-interface par VLAN.", en: "The router moves traffic between VLANs using one sub-interface per VLAN." } },
      { terme: "DHCP (DORA)", definition: { fr: "Attribution automatique d'adresse en 4 messages : Discover, Offer, Request, Acknowledge.", en: "Automatic address assignment in 4 messages: Discover, Offer, Request, Acknowledge." } },
      { terme: "ip helper-address", definition: { fr: "Commande qui relaie les demandes DHCP vers un serveur situé dans un autre VLAN.", en: "Command that relays DHCP requests to a server in another VLAN." } },
      { terme: "VTP", definition: { fr: "Protocole Cisco qui recopie automatiquement la liste des VLAN d'un switch vers les autres.", en: "Cisco protocol that automatically copies the VLAN list from one switch to the others." } }
    ],
    preuves: [
      { type: "image", fichier: "maquette.png", titre: { fr: "La maquette sur EVE-NG", en: "The lab on EVE-NG" } },
      { type: "pdf", fichier: "presentation.pdf", titre: { fr: "Présentation du projet", en: "Project presentation" } },
      { type: "pdf", fichier: "plan-adressage.pdf", titre: { fr: "Préparation et plan d'adressage", en: "Preparation and addressing plan" } },
      { type: "pdf", fichier: "dhcp.pdf", titre: { fr: "Mise en place du serveur DHCP", en: "DHCP server setup" } },
      { type: "fichier", fichier: "maquette-eve-ng.zip", titre: { fr: "Maquette EVE-NG à importer", en: "EVE-NG lab to import" } },
      { type: "config", titre: { fr: "Configuration du routeur (extrait)", en: "Router configuration (excerpt)" }, code: "hostname MTD-Pass\n!\ninterface Ethernet0/0.1\n encapsulation dot1Q 10\n ip address 172.20.85.38 255.255.255.248\n ip helper-address 172.20.85.41\n!\ninterface Ethernet0/0.2\n encapsulation dot1Q 20\n ip address 172.20.85.30 255.255.255.224\n ip helper-address 172.20.85.41\n!\ninterface Ethernet0/0.3\n encapsulation dot1Q 30\n ip address 172.20.85.42 255.255.255.252\n!\ninterface Ethernet0/0.4\n encapsulation dot1Q 40\n ip address 172.20.85.46 255.255.255.252\n!\nbanner motd BIENVENUE SUR LE ROUTEUR DE LA NOUVELLE SUCCURSALE" },
      { type: "config", titre: { fr: "Configuration du switch principal (extrait)", en: "Main switch configuration (excerpt)" }, code: "hostname MTD-Switch\nvtp interface e4/2\nspanning-tree mode pvst\n!\ninterface Ethernet0/0\n switchport access vlan 10\n switchport mode access\ninterface Ethernet1/0\n switchport access vlan 20\n switchport mode access\ninterface Ethernet2/0\n switchport access vlan 30\n switchport mode access\ninterface Ethernet3/0\n switchport access vlan 40\n switchport mode access\n!\ninterface Ethernet4/0\n switchport trunk allowed vlan 10,20,30,40\n switchport trunk encapsulation dot1q\n switchport mode trunk\ninterface Ethernet4/2\n switchport trunk encapsulation dot1q\n switchport mode trunk\n!\nmonitor session 1 source interface Et0/0 , Et1/0\nmonitor session 1 source interface Et2/0\nmonitor session 1 source interface Et3/0\nmonitor session 1 destination interface Et4/1" }
    ]
  },

  {
    id: "asterisk",
    annee: "BUT 2",
    date: { fr: "Févr. 2025", en: "Feb. 2025" },
    code: "SAE 3.ROM.04",
    titre: { fr: "Téléphonie IP multi-sites", en: "Multi-site IP telephony" },
    resume: {
      fr: "La téléphonie complète d'une maison médicale : appels entre sites, transferts, mise en attente, et messagerie vocale qui prévient par mail.",
      en: "Full phone system for a medical centre: calls between sites, transfers, hold, and voicemail that notifies by email."
    },
    techno: ["Asterisk", "SIP", "Linux", "Dovecot", "Wireshark"],
    equipe: { fr: "Projet individuel", en: "Solo project" },
    domaines: ["telecom"],
    competences: ["rapprocher", "unifier"],
    contexte: {
      fr: "Déployer la téléphonie d'une maison médicale avec un serveur Asterisk sous Debian : appels internes entre praticien, assistant et secrétaire, appels entre cabinets, fonctions avancées et messagerie vocale. Trois types de téléphones à faire cohabiter.",
      en: "Deploy a medical centre's phone system with an Asterisk server on Debian: internal calls between practitioner, assistant and secretary, calls between practices, advanced features and voicemail. Three kinds of phones to make work together."
    },
    fiche: [
      { cle: { fr: "Serveur", en: "Server" }, valeur: { fr: "Debian, Asterisk 20, SIP via PJSIP", en: "Debian, Asterisk 20, SIP via PJSIP" } },
      { cle: { fr: "Téléphones", en: "Phones" }, valeur: { fr: "Linphone (logiciel), Yealink T31P, Nortel LIP6812", en: "Linphone (softphone), Yealink T31P, Nortel LIP6812" } },
      { cle: { fr: "Messagerie", en: "Voicemail" }, valeur: { fr: "Boîtes vocales, notification par mail via Dovecot", en: "Voicemail boxes, email notification via Dovecot" } },
      { cle: { fr: "Outils", en: "Tools" }, valeur: { fr: "CLI Asterisk, Wireshark, ffmpeg, Audacity", en: "Asterisk CLI, Wireshark, ffmpeg, Audacity" } }
    ],
    role: { fr: "Projet réalisé seul, de l'installation du serveur jusqu'aux fonctions avancées.", en: "Done alone, from server installation to advanced features." },
    realise: {
      fr: ["Déclarer les utilisateurs et écrire le plan de numérotation", "Configurer les trois téléphones avec touches rapides et présence", "Relier le cabinet aux autres sites", "Mettre en place transfert, mise en attente avec musique, interception et message d'accueil", "Créer les boîtes vocales avec envoi par mail"],
      en: ["Declare users and write the dial plan", "Configure the three phones with speed keys and presence", "Connect the practice to the other sites", "Set up transfer, hold with music, call pickup and greeting message", "Create voicemail boxes with email delivery"]
    },
    ac: [
      { fait: { fr: "Concevoir l'architecture téléphonique", en: "Design the telephony architecture" }, ref: "AC25.01", libelle: { fr: "Déployer des services de téléphonie sur IP", en: "Deploy IP telephony services" } },
      { fait: { fr: "Configurer appels internes et inter-sites", en: "Configure internal and inter-site calls" }, ref: "AC25.02", libelle: { fr: "Administrer un service de téléphonie", en: "Administer a telephony service" } },
      { fait: { fr: "Gérer la qualité audio", en: "Manage audio quality" }, ref: "AC25.03", libelle: { fr: "Assurer la qualité de service de la voix", en: "Ensure voice quality of service" } }
    ],
    apports: {
      fr: ["Configurer un serveur de téléphonie de bout en bout", "Faire fonctionner du matériel très différent sur le même serveur", "Comprendre SIP en profondeur", "Chercher seul dans la doc et les logs"],
      en: ["Configure a phone server end to end", "Make very different hardware work on the same server", "Understand SIP in depth", "Dig through docs and logs on my own"]
    },
    limites: {
      fr: ["L'enregistrement des conversations n'a pas abouti", "La messagerie instantanée entre sites n'arrivait pas à destination", "Le menu vocal de prise de rendez-vous est resté inachevé"],
      en: ["Call recording didn't work out", "Instant messaging between sites never reached its destination", "The appointment voice menu stayed unfinished"]
    },
    autrement: {
      fr: ["Tester chaque fonction séparément avant de tout assembler", "Documenter au fur et à mesure"],
      en: ["Test each feature on its own before combining them", "Document as I go"]
    },
    bilan: {
      fr: "J'ai vu concrètement le travail d'un administrateur télécom. Même ce qui n'a pas marché m'a appris quelque chose.",
      en: "I saw first-hand what a telecom administrator does. Even what didn't work taught me something."
    },
    glossaire: [
      { terme: "Asterisk", definition: { fr: "Logiciel libre qui transforme un serveur Linux en central téléphonique (IPBX).", en: "Open-source software that turns a Linux server into a phone system (IP PBX)." } },
      { terme: "IPBX", definition: { fr: "Central téléphonique d'entreprise qui fonctionne sur le réseau IP.", en: "Company phone system running over the IP network." } },
      { terme: "SIP", definition: { fr: "Protocole qui établit, modifie et termine les appels.", en: "Protocol that sets up, changes and ends calls." } },
      { terme: "PJSIP", definition: { fr: "Module d'Asterisk qui gère les comptes et les connexions SIP.", en: "Asterisk module handling SIP accounts and connections." } },
      { terme: "Plan de numérotation", definition: { fr: "Les règles qui disent à Asterisk quoi faire quand on compose un numéro.", en: "The rules telling Asterisk what to do when a number is dialled." } },
      { terme: "RTP", definition: { fr: "Protocole qui transporte la voix pendant l'appel, une fois celui-ci établi par SIP.", en: "Protocol carrying the voice during a call, once SIP has set it up." } }
    ],
    preuves: [
      { type: "image", fichier: "architecture.png", titre: { fr: "Architecture de la téléphonie", en: "Telephony architecture" } },
      { type: "pdf", fichier: "rapport.pdf", titre: { fr: "Mon rapport", en: "My report" } },
      { type: "pdf", fichier: "sujet.pdf", titre: { fr: "Sujet du projet", en: "Project brief" } }
    ]
  },

  {
    id: "cluster",
    annee: "BUT 2",
    date: { fr: "Nov. · Déc. 2024", en: "Nov. · Dec. 2024" },
    code: "SAE 3.02",
    titre: { fr: "Cluster de calcul distribué", en: "Distributed computing cluster" },
    resume: {
      fr: "Une architecture distribuée en Python : un serveur maître reçoit des programmes et les envoie au serveur le moins chargé, qui les compile et les exécute.",
      en: "A distributed architecture in Python: a master server receives programs and sends them to the least loaded worker, which compiles and runs them."
    },
    techno: ["Python", "Sockets TCP", "Threads", "PyQt6", "psutil", "JSON", "GitHub"],
    equipe: { fr: "Projet individuel", en: "Solo project" },
    domaines: ["dev", "reseau"],
    competences: ["programmer", "administrer"],
    contexte: {
      fr: "Créer une architecture client-serveur distribuée. Un serveur maître reçoit le code envoyé par les clients et le confie au serveur esclave le moins chargé en CPU et en mémoire. L'esclave compile, exécute et renvoie le résultat.",
      en: "Build a distributed client-server architecture. A master server receives code from clients and hands it to the worker with the lowest CPU and memory load. The worker compiles, runs and sends back the result."
    },
    fiche: [
      { cle: { fr: "Langages exécutés", en: "Languages run" }, valeur: "Python, C (GCC), C++ (g++), Java (javac)" },
      { cle: { fr: "Communication", en: "Communication" }, valeur: { fr: "Sockets TCP, un thread par client, échanges en JSON", en: "TCP sockets, one thread per client, JSON messages" } },
      { cle: { fr: "Interfaces", en: "Interfaces" }, valeur: { fr: "Client et supervision en PyQt6, mise à jour toutes les 3 s", en: "Client and monitoring in PyQt6, refreshed every 3 s" } },
      { cle: { fr: "Gestion", en: "Management" }, valeur: { fr: "Planning Gantt, suivi Notion, dépôt GitHub", en: "Gantt planning, Notion tracking, GitHub repository" } }
    ],
    role: {
      fr: "Projet réalisé seul, du serveur maître jusqu'au client, avec la documentation et une vidéo de démonstration.",
      en: "Done alone, from master server to client, including documentation and a demo video."
    },
    realise: {
      fr: ["Coder le serveur maître : connexions, répartition de charge, retour des résultats", "Coder les esclaves : compilation et exécution isolée avec subprocess", "Créer l'interface client pour envoyer du code et lire les résultats", "Créer la supervision temps réel de la charge des esclaves", "Rendre le tout configurable par un fichier JSON", "Rédiger le référentiel développeur et le guide d'installation"],
      en: ["Code the master: connections, load balancing, returning results", "Code the workers: compilation and isolated execution with subprocess", "Build the client UI to send code and read results", "Build real-time monitoring of worker load", "Make everything configurable through a JSON file", "Write the developer reference and the install guide"]
    },
    ac: [
      { fait: { fr: "Choisir les sockets TCP et le multithreading", en: "Choose TCP sockets and multithreading" }, ref: "CE1.01", libelle: { fr: "Choisir les technologies réseaux adaptées", en: "Choose suitable network technologies" } },
      { fait: { fr: "Isoler l'exécution des programmes", en: "Isolate program execution" }, ref: "AC11.04", libelle: { fr: "Gérer les processus système", en: "Manage system processes" } },
      { fait: { fr: "Programmer la communication client/serveur en JSON", en: "Program client/server communication in JSON" }, ref: "AC23.03", libelle: { fr: "Programmer une application client/serveur", en: "Program a client/server application" } },
      { fait: { fr: "Planifier avec un Gantt et suivre sur Notion", en: "Plan with a Gantt chart and track in Notion" }, ref: "AC31.06", libelle: { fr: "Gérer le projet et respecter les délais", en: "Manage the project and meet deadlines" } }
    ],
    apports: {
      fr: ["Comprendre le multithreading sans bloquer le système", "Concevoir une vraie architecture distribuée", "Créer des interfaces graphiques en PyQt6", "Mener un projet seul de bout en bout"],
      en: ["Understand multithreading without blocking the system", "Design a real distributed architecture", "Build desktop interfaces in PyQt6", "Run a project alone from start to finish"]
    },
    autrement: { fr: ["Automatiser l'ajout et le retrait des serveurs esclaves"], en: ["Automate adding and removing workers"] },
    bilan: {
      fr: "Mon premier pas dans les systèmes distribués, un sujet qui me plaît toujours autant aujourd'hui.",
      en: "My first step into distributed systems, a topic I still enjoy just as much today."
    },
    glossaire: [
      { terme: "Calcul distribué", definition: { fr: "Répartir un travail sur plusieurs machines qui calculent en parallèle.", en: "Spreading work across several machines computing in parallel." } },
      { terme: "Socket TCP", definition: { fr: "Point de connexion réseau qui permet à deux programmes d'échanger des données de façon fiable.", en: "Network endpoint letting two programs exchange data reliably." } },
      { terme: "Thread", definition: { fr: "Fil d'exécution : le serveur en lance un par client pour les servir en même temps.", en: "Execution thread: the server starts one per client to serve them at the same time." } },
      { terme: "Répartition de charge", definition: { fr: "Envoyer chaque tâche à la machine la moins occupée.", en: "Sending each task to the least busy machine." } },
      { terme: "JSON", definition: { fr: "Format texte simple pour échanger des données structurées entre programmes.", en: "Simple text format to exchange structured data between programs." } }
    ],
    preuves: [
      { type: "image", fichier: "architecture.png", titre: { fr: "Architecture du cluster", en: "Cluster architecture" } },
      { type: "lien", fichier: "https://youtu.be/dA0f4q9vcS4", titre: { fr: "Vidéo de démonstration", en: "Demo video" } },
      { type: "pdf", fichier: "sujet.pdf", titre: { fr: "Sujet du projet", en: "Project brief" } },
      { type: "fichier", fichier: "code-source.zip", titre: { fr: "Code source du projet", en: "Project source code" } }
    ]
  },

  {
    id: "lorawan",
    annee: "BUT 3",
    date: { fr: "Oct. 2025", en: "Oct. 2025" },
    code: "SAE 5.01",
    titre: { fr: "Traceur GPS autonome en LoRaWAN", en: "Autonomous LoRaWAN GPS tracker" },
    resume: {
      fr: "Un traceur pour véhicule qui envoie sa position par LoRaWAN et s'affiche en direct sur une carte. Il dort à l'arrêt et se réveille tout seul au moindre mouvement.",
      en: "A vehicle tracker that sends its position over LoRaWAN and shows up live on a map. It sleeps when parked and wakes up on its own at the slightest movement."
    },
    techno: ["LoRaWAN", "MicroPython", "TTN", "MQTT", "Node-RED", "Leaflet", "Raspberry Pi"],
    equipe: { fr: "Équipe de 4", en: "Team of 4" },
    domaines: ["iot", "dev", "reseau"],
    competences: ["administrer", "connecter", "programmer"],
    contexte: {
      fr: "Créer un traceur GPS de véhicule qui transmet sa position par LoRaWAN et l'affiche en temps réel sur une carte web. Le traceur doit être autonome : veille profonde quand le véhicule ne bouge pas, réveil automatique grâce à l'accéléromètre.",
      en: "Build a vehicle GPS tracker that sends its position over LoRaWAN and shows it live on a web map. It has to be autonomous: deep sleep when the vehicle is still, automatic wake-up thanks to the accelerometer."
    },
    fiche: [
      { cle: { fr: "Matériel", en: "Hardware" }, valeur: { fr: "Pycom LoPy4 sur Pytrack 2 (GPS + accéléromètre), passerelle TTIG, Raspberry Pi", en: "Pycom LoPy4 on Pytrack 2 (GPS + accelerometer), TTIG gateway, Raspberry Pi" } },
      { cle: { fr: "Langages", en: "Languages" }, valeur: { fr: "MicroPython (traceur), JavaScript (TTN, Node-RED)", en: "MicroPython (tracker), JavaScript (TTN, Node-RED)" } },
      { cle: { fr: "Protocoles", en: "Protocols" }, valeur: "LoRaWAN EU868 OTAA, MQTT, GNSS" },
      { cle: { fr: "Chaîne", en: "Pipeline" }, valeur: { fr: "Traceur, passerelle, TTN, MQTT, Node-RED, carte Leaflet", en: "Tracker, gateway, TTN, MQTT, Node-RED, Leaflet map" } }
    ],
    role: {
      fr: "En équipe de quatre, j'ai travaillé sur l'architecture complète et sur le code embarqué du traceur.",
      en: "In a team of four, I worked on the full architecture and on the tracker's embedded code."
    },
    realise: {
      fr: ["Concevoir toute la chaîne, du traceur jusqu'à la carte web", "Écrire environ 600 lignes de MicroPython qui gèrent tout le cycle", "Coder la position GPS sur 6 octets au lieu de 8 (précision d'environ 1 m)", "Mettre en place l'authentification OTAA chiffrée sur TTN", "Gérer la veille profonde et le réveil par l'accéléromètre", "Afficher les positions en direct dans Node-RED avec Leaflet"],
      en: ["Design the whole chain, from tracker to web map", "Write about 600 lines of MicroPython handling the full cycle", "Encode the GPS position in 6 bytes instead of 8 (about 1 m precision)", "Set up encrypted OTAA authentication on TTN", "Handle deep sleep and wake-up through the accelerometer", "Display positions live in Node-RED with Leaflet"]
    },
    ac: [
      { fait: { fr: "Concevoir l'architecture IoT complète", en: "Design the full IoT architecture" }, ref: "AC31.01", libelle: { fr: "Concevoir un projet de réseau informatique", en: "Design a network project" } },
      { fait: { fr: "Respecter la limite d'émission LoRaWAN de 1 %", en: "Respect the 1% LoRaWAN duty cycle" }, ref: "CE1.04", libelle: { fr: "Respecter les règles métiers", en: "Follow industry rules" } },
      { fait: { fr: "Faire cohabiter GPS et radio LoRa dans un même système", en: "Combine GPS and LoRa radio in one system" }, ref: "AC22.01", libelle: { fr: "Déployer des systèmes de transmission complexes", en: "Deploy complex transmission systems" } },
      { fait: { fr: "Programmer le client LoRa et le client MQTT", en: "Program the LoRa and MQTT clients" }, ref: "AC23.03", libelle: { fr: "Programmer une application client/serveur", en: "Program a client/server application" } }
    ],
    apports: {
      fr: ["Comprendre LoRaWAN en profondeur : la radio d'un côté, le réseau de l'autre", "Vivre la contrainte du GPS : un premier fix peut prendre 3 minutes", "Maîtriser la veille profonde et les interruptions matérielles", "Voir pourquoi MQTT est si adapté à l'IoT"],
      en: ["Understand LoRaWAN in depth: radio on one side, network on the other", "Deal with GPS reality: a first fix can take 3 minutes", "Master deep sleep and hardware interrupts", "See why MQTT fits IoT so well"]
    },
    autrement: {
      fr: ["Stocker l'historique des positions dans une base de données", "Tester la portée en vrai (LoRa peut aller jusqu'à 10 km)"],
      en: ["Store position history in a database", "Test the real range (LoRa can reach 10 km)"]
    },
    bilan: {
      fr: "Un système IoT complet, du capteur jusqu'à l'interface web : embarqué, radio, réseau et web dans un seul projet.",
      en: "A complete IoT system, from sensor to web interface: embedded, radio, networking and web in a single project."
    },
    glossaire: [
      { terme: "LoRaWAN", definition: { fr: "Réseau radio longue portée et basse consommation pour objets connectés.", en: "Long-range, low-power radio network for connected devices." } },
      { terme: "Passerelle", definition: { fr: "Antenne qui reçoit les messages radio des capteurs et les envoie sur Internet.", en: "Antenna that receives sensors' radio messages and sends them over the Internet." } },
      { terme: "TTN", definition: { fr: "The Things Network : réseau LoRaWAN communautaire qui reçoit et décode les messages.", en: "The Things Network: community LoRaWAN network that receives and decodes messages." } },
      { terme: "OTAA", definition: { fr: "Méthode d'activation où l'objet négocie ses clés de chiffrement en rejoignant le réseau.", en: "Activation method where the device negotiates its encryption keys when joining." } },
      { terme: "Node-RED", definition: { fr: "Outil visuel pour relier des flux de données, ici de MQTT jusqu'à une carte web.", en: "Visual tool to wire data flows, here from MQTT to a web map." } }
    ],
    preuves: [
      { type: "image", fichier: "architecture.png", titre: { fr: "Architecture : traceur, passerelle, TTN, MQTT, Node-RED, carte", en: "Architecture: tracker, gateway, TTN, MQTT, Node-RED, map" } },
      { type: "image", fichier: "traceur.jpg", titre: { fr: "Le traceur : LoPy4 sur Pytrack 2", en: "The tracker: LoPy4 on Pytrack 2" } },
      { type: "image", fichier: "passerelle.jpg", titre: { fr: "La passerelle LoRaWAN (TTIG)", en: "The LoRaWAN gateway (TTIG)" } },
      { type: "image", fichier: "raspberry.jpg", titre: { fr: "Le Raspberry Pi qui reçoit les positions", en: "The Raspberry Pi receiving positions" } },
      { type: "image", fichier: "resultat.png", titre: { fr: "Capture du résultat", en: "Result screenshot" } },
      { type: "pdf", fichier: "sujet.pdf", titre: { fr: "Sujet du projet", en: "Project brief" } },
      { type: "config", titre: { fr: "Extrait du code : la position GPS codée sur 6 octets", en: "Code excerpt: GPS position packed into 6 bytes" }, code: "def encoder_int24_be(valeur):\n    \"\"\"encode un entier signé sur 3 octets en big-endian\"\"\"\n    if valeur < 0:\n        valeur = (1 << 24) + valeur\n    octet_haut = (valeur >> 16) & 0xFF\n    octet_milieu = (valeur >> 8) & 0xFF\n    octet_bas = valeur & 0xFF\n    return bytes([octet_haut, octet_milieu, octet_bas])\n\ndef creer_payload_gps(latitude, longitude):\n    \"\"\"payload GPS optimisé de 6 octets au lieu de 8\"\"\"\n    lat_val = int(round(latitude * 1e5))\n    lon_val = int(round(longitude * 1e5))\n    return encoder_int24_be(lat_val) + encoder_int24_be(lon_val)" },
      { type: "config", titre: { fr: "Extrait du code : veille profonde et réveil au mouvement", en: "Code excerpt: deep sleep and wake on motion" }, code: "def entrer_deep_sleep():\n    \"\"\"deep sleep avec réveil par mouvement sur P13\"\"\"\n    pin_acc = Pin('P13', mode=Pin.IN, pull=Pin.PULL_DOWN)\n    pin_acc.callback(Pin.IRQ_RISING, handler=None)\n    machine.pin_sleep_wakeup(['P13'], machine.WAKEUP_ANY_HIGH)\n    machine.deepsleep()  # tout s'éteint ici" }
    ]
  },

  {
    id: "cyber-iot",
    annee: "BUT 1",
    date: { fr: "Mai 2024", en: "May 2024" },
    code: "SAE 1.01",
    titre: { fr: "Sécurité des objets connectés", en: "Security of connected devices" },
    resume: {
      fr: "Étudier les risques qui pèsent sur les objets connectés et proposer des protections simples et concrètes.",
      en: "Studying the risks facing connected devices and proposing simple, concrete protections."
    },
    techno: [{ fr: "Cybersécurité", en: "Cybersecurity" }, "IoT", { fr: "Veille", en: "Tech watch" }],
    equipe: { fr: "Équipe de 3", en: "Team of 3" },
    domaines: ["securite", "iot"],
    competences: ["administrer"],
    contexte: {
      fr: "Sujet confié par l'enseignant : sécuriser les objets connectés. Comprendre les risques, proposer des réponses adaptées et partager les bonnes pratiques, avec un rapport et une présentation orale.",
      en: "Topic given by the teacher: securing connected devices. Understand the risks, propose suitable answers and share good practice, with a report and an oral presentation."
    },
    fiche: [{ cle: { fr: "Livrables", en: "Deliverables" }, valeur: { fr: "Rapport écrit et présentation orale", en: "Written report and oral presentation" } }],
    role: { fr: "J'ai pris en charge l'analyse des méthodes de protection, avec des exemples concrets.", en: "I handled the analysis of protection methods, with concrete examples." },
    realise: {
      fr: ["Lire, sélectionner et synthétiser les sources", "Analyser les méthodes de protection", "Vulgariser pour un public non expert", "Participer au rapport et à la présentation"],
      en: ["Read, select and summarise sources", "Analyse protection methods", "Explain it to a non-expert audience", "Contribute to the report and presentation"]
    },
    ac: [{ fait: { fr: "Faire une veille sur les menaces et protections", en: "Keep watch on threats and protections" }, ref: "CE1.05", libelle: { fr: "Assurer une veille technologique", en: "Keep up with technology" } }],
    apports: { fr: ["Les bons réflexes : mises à jour, mots de passe solides, prudence", "Savoir vulgariser un sujet technique"], en: ["Good habits: updates, strong passwords, caution", "Explaining a technical topic simply"] },
    autrement: { fr: ["Mieux cadrer les recherches dès le début", "Ajouter des schémas pour illustrer"], en: ["Frame the research better from the start", "Add diagrams to illustrate"] },
    bilan: { fr: "Mon premier contact avec la cybersécurité, et l'art d'expliquer simplement.", en: "My first contact with cybersecurity, and the art of explaining simply." },
    glossaire: [
      { terme: "IoT", definition: { fr: "Internet des objets : les appareils du quotidien connectés au réseau.", en: "Internet of Things: everyday devices connected to the network." } },
      { terme: "Surface d'attaque", definition: { fr: "Tous les points par lesquels un système peut être attaqué.", en: "All the points through which a system can be attacked." } },
      { terme: "Mise à jour de sécurité", definition: { fr: "Correctif qui ferme une faille connue : la première protection.", en: "Patch closing a known flaw: the first line of defence." } },
      { terme: "Veille", definition: { fr: "Suivre régulièrement les nouvelles menaces et solutions.", en: "Regularly following new threats and solutions." } }
    ]
  },

  {
    id: "mitm",
    annee: "BUT 1",
    date: { fr: "Janv. 2024", en: "Jan. 2024" },
    code: "SAE 1.05",
    titre: { fr: "Sécurité d'un réseau local : comprendre pour protéger", en: "Local network security: understand to protect" },
    resume: {
      fr: "Étudier, dans un réseau de test isolé, pourquoi des échanges non chiffrés sont fragiles, et quelles protections mettre en place.",
      en: "Studying, in an isolated test network, why unencrypted traffic is fragile and which protections to put in place."
    },
    techno: ["Python", "Wireshark", { fr: "Machines virtuelles", en: "Virtual machines" }],
    equipe: { fr: "Binôme", en: "Pair project" },
    domaines: ["securite", "dev"],
    competences: ["programmer"],
    contexte: {
      fr: "Projet pédagogique en environnement fermé : comprendre les risques d'un réseau local mal protégé, observer ce qui circule en clair, et en tirer des règles de protection.",
      en: "An educational project in a closed environment: understand the risks of a poorly protected local network, see what travels in clear text, and turn that into protection rules."
    },
    fiche: [
      { cle: { fr: "Environnement", en: "Environment" }, valeur: { fr: "Réseau virtuel isolé, sans impact réel", en: "Isolated virtual network, no real-world impact" } },
      { cle: { fr: "Analyse", en: "Analysis" }, valeur: { fr: "Captures et lecture des échanges avec Wireshark", en: "Captures and traffic reading with Wireshark" } },
      { cle: { fr: "Protections étudiées", en: "Protections studied" }, valeur: { fr: "Chiffrement HTTPS, détection d'anomalies réseau", en: "HTTPS encryption, network anomaly detection" } }
    ],
    role: { fr: "En binôme, j'ai participé au code, aux tests, à la documentation et à la présentation.", en: "As a pair, I worked on the code, tests, documentation and presentation." },
    realise: {
      fr: ["Monter un réseau de test isolé sur machines virtuelles", "Analyser les échanges réseau avec Wireshark", "Comparer le comportement de HTTP et de HTTPS", "Étudier les protections et la détection des comportements suspects"],
      en: ["Build an isolated test network on virtual machines", "Analyse network traffic with Wireshark", "Compare how HTTP and HTTPS behave", "Study protections and detection of suspicious behaviour"]
    },
    ac: [
      { fait: { fr: "Comprendre le fonctionnement des échanges en réseau local", en: "Understand how local network exchanges work" }, ref: "AC11.02", libelle: { fr: "Comprendre les communications IP", en: "Understand IP communications" } },
      { fait: { fr: "Intégrer la sécurité dans la réflexion", en: "Bring security into the thinking" }, ref: "CE3.05", libelle: { fr: "Intégrer les problématiques de sécurité", en: "Take security into account" } }
    ],
    apports: {
      fr: ["Voir à quel point des échanges non chiffrés sont exposés", "Comprendre pourquoi il faut sécuriser dès la conception d'un réseau"],
      en: ["See how exposed unencrypted traffic really is", "Understand why security must be built in from the network's design"]
    },
    autrement: { fr: ["Mieux structurer le code en modules", "Approfondir le rôle des outils de détection"], en: ["Structure the code into modules", "Dig deeper into how detection tools help"] },
    bilan: { fr: "Un projet qui m'a fait prendre la sécurité au sérieux très tôt.", en: "A project that made me take security seriously very early on." },
    glossaire: [
      { terme: "Wireshark", definition: { fr: "Logiciel qui capture et affiche les paquets qui passent sur le réseau.", en: "Software that captures and displays the packets crossing the network." } },
      { terme: "Homme du milieu", definition: { fr: "Situation où un tiers s'intercale entre deux machines pour lire leurs échanges : ce qu'on apprend à empêcher.", en: "When a third party sits between two machines to read their traffic: what we learn to prevent." } },
      { terme: "HTTPS", definition: { fr: "HTTP chiffré : les échanges deviennent illisibles pour un tiers.", en: "Encrypted HTTP: exchanges become unreadable to a third party." } },
      { terme: "Réseau isolé", definition: { fr: "Réseau de test sans lien avec le vrai réseau, pour expérimenter sans risque.", en: "Test network with no link to the real one, to experiment safely." } }
    ]
  },

  {
    id: "wifi",
    annee: "BUT 1",
    date: { fr: "1re année", en: "First year" },
    code: "SAE 1.03",
    titre: { fr: "Couverture Wi-Fi et transmission", en: "Wi-Fi coverage and transmission" },
    resume: {
      fr: "Installer des points d'accès Wi-Fi, mesurer la couverture et l'analyser avec des cartes de chaleur.",
      en: "Installing Wi-Fi access points, measuring coverage and analysing it with heatmaps."
    },
    techno: ["Wi-Fi", "PoE", "Acrylic Wi-Fi", "Packet Tracer"],
    equipe: { fr: "Projet de groupe", en: "Group project" },
    domaines: ["telecom"],
    competences: ["connecter"],
    contexte: {
      fr: "Observer, configurer, mesurer : comprendre comment les données circulent en filaire et en sans-fil, et comment les murs et les distances influencent le signal.",
      en: "Observe, configure, measure: understand how data travels over wired and wireless links, and how walls and distance affect the signal."
    },
    fiche: [
      { cle: { fr: "Matériel", en: "Hardware" }, valeur: { fr: "Points d'accès, câbles Ethernet, alimentation PoE", en: "Access points, Ethernet cables, PoE power" } },
      { cle: { fr: "Mesures", en: "Measurements" }, valeur: { fr: "Signal, stabilité, couverture, pertes", en: "Signal, stability, coverage, losses" } }
    ],
    role: { fr: "En groupe, j'ai installé le matériel, fait les relevés, généré les cartes de chaleur et rédigé une partie du rapport.", en: "In a group, I installed the hardware, took measurements, generated heatmaps and wrote part of the report." },
    realise: {
      fr: ["Câbler et configurer les points d'accès", "Faire les relevés sur le terrain", "Générer et analyser les cartes de chaleur", "Proposer des pistes d'amélioration"],
      en: ["Cable and configure the access points", "Take field measurements", "Generate and analyse heatmaps", "Suggest improvements"]
    },
    ac: [
      { fait: { fr: "Mesurer et analyser les signaux Wi-Fi", en: "Measure and analyse Wi-Fi signals" }, ref: "AC12.01", libelle: { fr: "Mesurer et analyser les signaux", en: "Measure and analyse signals" } },
      { fait: { fr: "Déployer câbles et points d'accès", en: "Deploy cables and access points" }, ref: "AC12.03", libelle: { fr: "Déployer des supports de transmission", en: "Deploy transmission media" } }
    ],
    apports: { fr: ["Voir comment les ondes réagissent aux matériaux", "Utiliser des outils de mesure professionnels"], en: ["See how radio waves react to materials", "Use professional measurement tools"] },
    autrement: { fr: ["Mieux préparer le plan de mesure", "Partager une grille de lecture commune"], en: ["Prepare the measurement plan better", "Share a common reading grid"] },
    bilan: { fr: "Des concepts théoriques devenus des gestes concrets.", en: "Theory turned into hands-on practice." },
    glossaire: [
      { terme: "Point d'accès", definition: { fr: "Équipement qui diffuse le Wi-Fi et relie les appareils sans fil au réseau filaire.", en: "Device broadcasting Wi-Fi and linking wireless devices to the wired network." } },
      { terme: "PoE", definition: { fr: "Alimenter un équipement (point d'accès, caméra) par le câble réseau.", en: "Powering a device (access point, camera) through the network cable." } },
      { terme: "Carte de chaleur", definition: { fr: "Carte qui montre la force du signal Wi-Fi pièce par pièce.", en: "Map showing Wi-Fi signal strength room by room." } },
      { terme: "RSSI", definition: { fr: "Mesure de la puissance du signal reçu, en dBm.", en: "Measure of received signal strength, in dBm." } }
    ],
    preuves: [
      { type: "pdf", fichier: "rapport.pdf", titre: { fr: "Notre rapport", en: "Our report" } },
      { type: "pdf", fichier: "tp-mesures.pdf", titre: { fr: "TP : tests et mesures Wi-Fi", en: "Lab: Wi-Fi tests and measurements" } },
      { type: "pdf", fichier: "tp-heatmap.pdf", titre: { fr: "TP : carte de chaleur avec Acrylic", en: "Lab: heatmap with Acrylic" } },
      { type: "pdf", fichier: "tp-packet-tracer.pdf", titre: { fr: "TP : simulation Packet Tracer", en: "Lab: Packet Tracer simulation" } },
      { type: "fichier", fichier: "simulation.pkt", titre: { fr: "Simulation Packet Tracer", en: "Packet Tracer simulation" } }
    ]
  },

  {
    id: "fft",
    annee: "BUT 1",
    date: { fr: "Juin 2024", en: "June 2024" },
    code: "SAE 2.02",
    titre: { fr: "Reconnaître une note de musique avec Arduino", en: "Recognising musical notes with Arduino" },
    resume: {
      fr: "Capter un son, analyser son spectre avec une FFT et retrouver la note jouée, avec des cartes Arduino.",
      en: "Capture a sound, analyse its spectrum with an FFT and find the note being played, using Arduino boards."
    },
    techno: ["Arduino", "C / C++", "FFT", "Tinkercad"],
    equipe: { fr: "Binôme", en: "Pair project" },
    domaines: ["iot"],
    competences: ["connecter"],
    archive: true,
    contexte: {
      fr: "Concevoir un programme Arduino qui acquiert un signal audio, l'analyse par transformée de Fourier rapide et en déduit la fréquence fondamentale, donc la note. Tout a été simulé sur Tinkercad avec amplificateurs et oscilloscope virtuel.",
      en: "Build an Arduino program that captures an audio signal, analyses it with a fast Fourier transform and works out the fundamental frequency, so the note. Everything was simulated on Tinkercad with amplifiers and a virtual oscilloscope."
    },
    fiche: [
      { cle: { fr: "Matériel", en: "Hardware" }, valeur: { fr: "Arduino Uno, amplificateurs, boutons, LED", en: "Arduino Uno, op-amps, buttons, LEDs" } },
      { cle: { fr: "Traitement", en: "Processing" }, valeur: { fr: "FFT, recherche de la fréquence dominante", en: "FFT, finding the dominant frequency" } }
    ],
    role: { fr: "En binôme, j'ai participé à toutes les étapes, du montage à l'analyse.", en: "As a pair, I took part in every step, from circuit to analysis." },
    realise: {
      fr: ["Programmer l'acquisition et lancer la FFT", "Détecter la fréquence dominante", "Amplifier le signal et le vérifier à l'oscilloscope", "Ajuster l'échantillonnage entre précision et fluidité"],
      en: ["Program the acquisition and run the FFT", "Detect the dominant frequency", "Amplify the signal and check it on the oscilloscope", "Tune sampling between precision and smoothness"]
    },
    ac: [
      { fait: { fr: "Analyser des signaux en fréquence", en: "Analyse signals in the frequency domain" }, ref: "AC12.01", libelle: { fr: "Mesurer et analyser les signaux", en: "Measure and analyse signals" } },
      { fait: { fr: "Valider les résultats de la FFT", en: "Validate the FFT results" }, ref: "CE2.02", libelle: { fr: "Démarche scientifique", en: "Scientific approach" } }
    ],
    apports: { fr: ["Relier la théorie du signal à un cas concret", "Lire et interpréter un spectre audio"], en: ["Link signal theory to a real case", "Read and interpret an audio spectrum"] },
    autrement: { fr: ["Mieux structurer le code", "Ajouter un écran LCD", "Comparer à une table de notes"], en: ["Structure the code better", "Add an LCD screen", "Compare against a note table"] },
    bilan: { fr: "La théorie du signal devenue concrète, et une bonne collaboration en binôme.", en: "Signal theory made concrete, and good teamwork as a pair." },
    glossaire: [
      { terme: "FFT", definition: { fr: "Transformée de Fourier rapide : trouve les fréquences présentes dans un signal.", en: "Fast Fourier transform: finds the frequencies present in a signal." } },
      { terme: "Fréquence d'échantillonnage", definition: { fr: "Nombre de mesures du signal par seconde, à choisir entre précision et rapidité.", en: "Number of signal measurements per second, a trade-off between precision and speed." } },
      { terme: "Fréquence dominante", definition: { fr: "La fréquence la plus forte du signal, qui donne la note jouée.", en: "The strongest frequency in the signal, which gives the note played." } }
    ]
  },

  {
    id: "prise",
    annee: "BUT 2",
    date: { fr: "Sept. · Oct. 2024", en: "Sept. · Oct. 2024" },
    code: "SAE 3.01",
    titre: { fr: "Prise électrique connectée Wi-Fi", en: "Wi-Fi smart plug" },
    resume: {
      fr: "Une prise que l'on commande par un bouton, une page web ou une appli Android, avec un capteur de température. Pour environ 12 euros de composants.",
      en: "A plug you control with a button, a web page or an Android app, with a temperature sensor. For about 12 euros of parts."
    },
    techno: ["ESP8266", "Arduino", "MQTT", "Raspberry Pi", "Android", "EasyEDA"],
    equipe: { fr: "Équipe de 4", en: "Team of 4" },
    domaines: ["iot"],
    competences: ["connecter"],
    archive: true,
    contexte: {
      fr: "Concevoir une prise connectée comme celles du commerce. Un microcontrôleur Wi-Fi commande un relais 220 V, échange avec un serveur MQTT sur Raspberry Pi, et remonte la température toutes les 30 secondes. Le tout dans un cahier des charges strict : taille, coût, consommation.",
      en: "Design a smart plug like the ones in stores. A Wi-Fi microcontroller drives a 220 V relay, talks to an MQTT server on a Raspberry Pi, and reports the temperature every 30 seconds. All within a strict brief: size, cost, power."
    },
    fiche: [
      { cle: { fr: "Carte", en: "Board" }, valeur: { fr: "75 × 50 mm, environ 500 mW, environ 11,83 euros", en: "75 × 50 mm, about 500 mW, about 11.83 euros" } },
      { cle: { fr: "Composants", en: "Parts" }, valeur: { fr: "ESP8266, relais 30 A, capteur DS18B20, transistor, convertisseur 220 V vers 5 V", en: "ESP8266, 30 A relay, DS18B20 sensor, transistor, 220 V to 5 V converter" } },
      { cle: { fr: "Commande", en: "Control" }, valeur: { fr: "Bouton, page web, application Android", en: "Button, web page, Android app" } }
    ],
    role: {
      fr: "En équipe de quatre, j'ai pris en charge les composants, le schéma, le code embarqué, le serveur web et le mode point d'accès.",
      en: "In a team of four, I handled the parts, schematic, embedded code, web server and access point mode."
    },
    realise: {
      fr: ["Choisir les composants et calculer les résistances", "Dessiner le schéma et router le circuit imprimé", "Programmer l'ESP8266 : Wi-Fi, MQTT, bouton, LED, température", "Installer le serveur web de commande sur le Raspberry Pi", "Ajouter un mode point d'accès pour configurer le Wi-Fi au premier démarrage"],
      en: ["Choose parts and calculate resistor values", "Draw the schematic and route the PCB", "Program the ESP8266: Wi-Fi, MQTT, button, LED, temperature", "Set up the control web server on the Raspberry Pi", "Add an access point mode to set up Wi-Fi on first boot"]
    },
    ac: [
      { fait: { fr: "Choisir ESP8266 et MQTT selon le cahier des charges", en: "Choose ESP8266 and MQTT based on the brief" }, ref: "CE2.03", libelle: { fr: "Choisir les technologies adaptées", en: "Choose suitable technologies" } },
      { fait: { fr: "Mesurer les signaux via la console série", en: "Measure signals through the serial console" }, ref: "AC12.01", libelle: { fr: "Mesurer et analyser les signaux", en: "Measure and analyse signals" } },
      { fait: { fr: "Faire communiquer prise, web et appli", en: "Make plug, web and app communicate" }, ref: "AC23.03", libelle: { fr: "Programmer une application client/serveur", en: "Program a client/server application" } }
    ],
    apports: {
      fr: ["Concevoir un circuit complet, des composants au circuit imprimé", "Commander du 220 V en sécurité avec un relais", "Faire dialoguer plusieurs appareils grâce à MQTT", "Voir comment toutes les couches d'un vrai produit s'emboîtent"],
      en: ["Design a full circuit, from parts to PCB", "Switch 220 V safely with a relay", "Get several devices talking through MQTT", "See how all the layers of a real product fit together"]
    },
    autrement: {
      fr: ["Tester chaque fonction séparément avant d'assembler", "Mieux gérer les pertes de connexion MQTT", "Documenter au fur et à mesure"],
      en: ["Test each feature on its own before assembling", "Handle MQTT disconnections better", "Document as I go"]
    },
    bilan: {
      fr: "Un objet connecté de A à Z : électronique, embarqué, réseau, web et mobile dans un seul projet.",
      en: "A connected device from A to Z: electronics, embedded, networking, web and mobile in a single project."
    },
    glossaire: [
      { terme: "ESP8266", definition: { fr: "Petit microcontrôleur avec Wi-Fi intégré, idéal pour les objets connectés.", en: "Small microcontroller with built-in Wi-Fi, ideal for connected devices." } },
      { terme: "Relais", definition: { fr: "Interrupteur commandé électriquement, qui allume ou coupe la prise.", en: "Electrically controlled switch that turns the socket on or off." } },
      { terme: "MQTT", definition: { fr: "Protocole léger qui transporte les ordres et les mesures entre la prise et le serveur.", en: "Lightweight protocol carrying commands and readings between socket and server." } },
      { terme: "Circuit imprimé", definition: { fr: "Carte sur laquelle on soude les composants, dessinée ici avec EasyEDA.", en: "Board the components are soldered on, designed here with EasyEDA." } }
    ]
  },

  {
    id: "absences",
    annee: "BUT 1",
    date: { fr: "Mai 2024", en: "May 2024" },
    code: "SAE 2.03",
    titre: { fr: "Appli web de gestion des absences", en: "Attendance management web app" },
    resume: {
      fr: "Une application Django pour gérer les absences d'un département universitaire, de la base de données jusqu'au déploiement sur serveur.",
      en: "A Django app to manage absences in a university department, from the database all the way to server deployment."
    },
    techno: ["Django", "Python", "MySQL", "HTML / CSS", "Linux", "GitHub"],
    equipe: { fr: "Projet individuel", en: "Solo project" },
    domaines: ["dev"],
    competences: ["programmer"],
    archive: true,
    contexte: {
      fr: "Permettre aux responsables de cours d'enregistrer les absences, d'ajouter des justificatifs et de suivre tout ça dans une interface simple. Le projet couvrait tout le cycle : base de données, backend, interface et déploiement.",
      en: "Let course managers record absences, add justifications and follow everything in a simple interface. The project covered the whole cycle: database, backend, interface and deployment."
    },
    fiche: [
      { cle: { fr: "Données", en: "Data" }, valeur: { fr: "5 entités : groupes, étudiants, enseignants, cours, absences", en: "5 entities: groups, students, teachers, courses, absences" } },
      { cle: { fr: "Architecture", en: "Architecture" }, valeur: { fr: "Django en modèle, vue, template", en: "Django model, view, template" } },
      { cle: { fr: "Déploiement", en: "Deployment" }, valeur: { fr: "MySQL sur Windows Server, application sur machine Linux", en: "MySQL on Windows Server, app on a Linux machine" } }
    ],
    role: { fr: "Projet réalisé seul, de bout en bout.", en: "Done alone, end to end." },
    realise: {
      fr: ["Concevoir le schéma relationnel des 5 entités", "Installer MySQL et le relier à Django", "Développer la gestion complète (créer, lire, modifier, supprimer) de chaque entité", "Créer les formulaires et les pages HTML / CSS", "Déployer l'application sur une machine Linux"],
      en: ["Design the relational schema for the 5 entities", "Install MySQL and connect it to Django", "Build full management (create, read, update, delete) for each entity", "Build the forms and HTML / CSS pages", "Deploy the app on a Linux machine"]
    },
    ac: [
      { fait: { fr: "Concevoir le schéma et l'ORM avec MySQL", en: "Design the schema and ORM with MySQL" }, ref: "AC13.05", libelle: { fr: "Choisir les mécanismes de gestion de données", en: "Choose data management mechanisms" } },
      { fait: { fr: "Structurer le backend et les templates", en: "Structure the backend and templates" }, ref: "AC13.04", libelle: { fr: "Connaître l'architecture d'un site web", en: "Know how a website is built" } },
      { fait: { fr: "Versionner sur GitHub", en: "Version on GitHub" }, ref: "AC13.06", libelle: { fr: "S'intégrer dans un environnement de développement", en: "Work in a development environment" } }
    ],
    apports: {
      fr: ["Ma première application web complète", "Comprendre l'architecture d'un projet Django", "Déployer une appli sur un serveur"],
      en: ["My first complete web application", "Understand how a Django project is structured", "Deploy an app on a server"]
    },
    autrement: { fr: ["Documenter chaque modification au fur et à mesure"], en: ["Document each change as I go"] },
    bilan: { fr: "Une vraie base en développement web, et un projet technique mené seul du début à la fin.", en: "A real foundation in web development, and a technical project run alone from start to finish." },
    glossaire: [
      { terme: "Modèle relationnel", definition: { fr: "Organisation des données en tables reliées entre elles.", en: "Organising data into linked tables." } },
      { terme: "CRUD", definition: { fr: "Créer, lire, modifier, supprimer : les quatre opérations de base sur des données.", en: "Create, read, update, delete: the four basic operations on data." } },
      { terme: "MVT", definition: { fr: "Modèle, vue, template : la façon dont Django sépare données, logique et affichage.", en: "Model, view, template: how Django separates data, logic and display." } },
      { terme: "MySQL", definition: { fr: "Système de gestion de base de données relationnelle.", en: "Relational database management system." } }
    ]
  },

  {
    id: "site-perso",
    annee: "BUT 1",
    date: { fr: "Nov. · Déc. 2023", en: "Nov. · Dec. 2023" },
    code: "SAE 1.04",
    titre: { fr: "Mon premier site perso", en: "My first personal website" },
    resume: {
      fr: "Un site en HTML / CSS pour me présenter, avec une page sur un centre d'intérêt et un résumé en anglais. Le tout premier ancêtre de ce portfolio.",
      en: "An HTML / CSS site to introduce myself, with a page about a hobby and a summary in English. The very first ancestor of this portfolio."
    },
    techno: ["HTML", "CSS", "VS Code", "GitHub"],
    equipe: { fr: "Projet individuel", en: "Solo project" },
    domaines: ["dev"],
    competences: ["programmer"],
    archive: true,
    contexte: {
      fr: "Réfléchir à son identité numérique et construire un site de présentation : une page professionnelle, une page sur un centre d'intérêt, avec un résumé en anglais.",
      en: "Think about online identity and build a personal site: a professional page, a page about a hobby, with a summary in English."
    },
    fiche: [{ cle: { fr: "Outils", en: "Tools" }, valeur: { fr: "HTML, CSS, VS Code, hébergement GitHub", en: "HTML, CSS, VS Code, GitHub hosting" } }],
    role: { fr: "Projet réalisé seul : structure, contenu et design.", en: "Done alone: structure, content and design." },
    realise: {
      fr: ["Rédiger ma présentation et mettre en valeur mes compétences", "Construire les pages en HTML / CSS", "Écrire le résumé en anglais", "Soigner la clarté et l'accessibilité"],
      en: ["Write my introduction and highlight my skills", "Build the pages in HTML / CSS", "Write the English summary", "Focus on clarity and accessibility"]
    },
    ac: [{ fait: { fr: "Structurer un site web", en: "Structure a website" }, ref: "AC13.04", libelle: { fr: "Connaître l'architecture d'un site web", en: "Know how a website is built" } }],
    apports: { fr: ["Comprendre l'impact de ce qu'on publie en ligne", "Trouver l'équilibre entre forme et fond"], en: ["Understand the impact of what you publish online", "Balance form and content"] },
    autrement: { fr: ["Tester sur téléphone et tablette", "Ajouter un peu d'interactivité"], en: ["Test on phone and tablet", "Add a bit of interactivity"] },
    bilan: { fr: "Il m'a appris à mieux me présenter. Ce portfolio en est la suite.", en: "It taught me to present myself better. This portfolio is its sequel." },
    glossaire: [
      { terme: "HTML", definition: { fr: "Langage qui structure le contenu d'une page web.", en: "Language that structures the content of a web page." } },
      { terme: "CSS", definition: { fr: "Langage qui met en forme une page web (couleurs, mise en page).", en: "Language that styles a web page (colours, layout)." } },
      { terme: "Hébergement", definition: { fr: "Mettre le site sur un serveur pour qu'il soit accessible en ligne.", en: "Putting the site on a server so it is reachable online." } }
    ]
  },

  {
    id: "krojanty",
    annee: "BUT 3",
    date: { fr: "Sept. 2025", en: "Sept. 2025" },
    code: "SAE 5.02",
    titre: { fr: "Krojanty, jeu de stratégie avec IA", en: "Krojanty, a strategy game with AI" },
    resume: {
      fr: "Un jeu tactique au tour par tour écrit en C pendant l'immersion à l'ENSISA, avec une IA qui réfléchit plusieurs coups à l'avance et un mode multijoueur en réseau.",
      en: "A turn-based tactics game written in C during the ENSISA immersion, with an AI that thinks several moves ahead and a networked multiplayer mode."
    },
    techno: ["C", "Minimax", "Sockets TCP", "Makefile", "SVN", { fr: "Tests unitaires", en: "Unit tests" }],
    equipe: { fr: "Projet d'équipe", en: "Team project" },
    domaines: ["ia", "dev"],
    competences: ["programmer", "administrer", "connecter"],
    archive: true,
    contexte: {
      fr: "Deux semaines d'immersion à l'ENSISA pour découvrir une école d'ingénieurs. Le défi : développer de zéro un jeu de stratégie complet en C, en équipe, avec des points réguliers sur les bonnes pratiques, les tests, la documentation et la gestion de versions.",
      en: "A two-week immersion at ENSISA to discover an engineering school. The challenge: build a complete strategy game in C from scratch, as a team, with regular sessions on best practices, testing, documentation and version control."
    },
    fiche: [
      { cle: { fr: "Plateau", en: "Board" }, valeur: { fr: "9 × 9 cases, cités dans les coins, 1 roi et 9 soldats par joueur", en: "9 × 9 grid, cities in the corners, 1 king and 9 soldiers per player" } },
      { cle: { fr: "Règles", en: "Rules" }, valeur: { fr: "Deux types de capture, contrôle de territoire, 64 demi-coups maximum", en: "Two capture types, territory control, 64 half-moves maximum" } },
      { cle: { fr: "Modules", en: "Modules" }, valeur: { fr: "Plateau, règles, moteur, IA, réseau, interface terminal, sauvegarde", en: "Board, rules, engine, AI, network, terminal UI, save/load" } },
      { cle: { fr: "Outils", en: "Tools" }, valeur: { fr: "Makefile, SVN sur le serveur de l'ENSISA, tests unitaires", en: "Makefile, SVN on the ENSISA server, unit tests" } }
    ],
    role: {
      fr: "J'ai codé tous les jours pendant deux semaines : modules du jeu, IA et partie réseau, avec le reste de l'équipe.",
      en: "I coded every day for two weeks: game modules, AI and networking, alongside the rest of the team."
    },
    realise: {
      fr: ["Organiser le code en modules séparés avec un Makefile", "Coder la validation des coups et les deux types de capture", "Écrire une IA minimax avec élagage alpha-bêta et heuristiques", "Programmer le mode réseau en sockets TCP (client et serveur)", "Écrire des tests unitaires et la documentation technique", "Versionner le travail d'équipe avec SVN"],
      en: ["Organise the code into separate modules with a Makefile", "Code move validation and both capture types", "Write a minimax AI with alpha-beta pruning and heuristics", "Program the network mode over TCP sockets (client and server)", "Write unit tests and technical documentation", "Version the team's work with SVN"]
    },
    ac: [
      { fait: { fr: "Développer un jeu complet en C, en modules", en: "Build a complete game in C, in modules" }, ref: "AC33.04", libelle: { fr: "Déployer et maintenir une solution informatique", en: "Deploy and maintain an IT solution" } },
      { fait: { fr: "Versionner le code en équipe avec SVN", en: "Version code as a team with SVN" }, ref: "AC33.02", libelle: { fr: "Mettre en place un environnement de travail collaboratif", en: "Set up a collaborative work environment" } },
      { fait: { fr: "Programmer le mode réseau client/serveur", en: "Program the client/server network mode" }, ref: "AC23.03", libelle: { fr: "Programmer une application client/serveur", en: "Program a client/server application" } },
      { fait: { fr: "Coder l'IA minimax", en: "Code the minimax AI" }, ref: "AC13.03", libelle: { fr: "Traduire un algorithme dans un langage donné", en: "Translate an algorithm into a given language" } }
    ],
    apports: {
      fr: ["Vraiment accrocher avec le C après des jours entiers dessus", "Organiser un vrai projet : modules, Makefile, versions", "Apprendre seul des notions pas encore vues : minimax, sockets en C", "Découvrir le rythme d'une école d'ingénieurs : plus d'autonomie"],
      en: ["Really click with C after whole days on it", "Organise a real project: modules, Makefile, versions", "Learn on my own things not yet covered: minimax, sockets in C", "Discover the pace of an engineering school: more autonomy"]
    },
    autrement: { fr: ["Documenter le code au fur et à mesure, pas à la fin"], en: ["Document the code as I go, not at the end"] },
    bilan: {
      fr: "Cette immersion m'a confirmé que je voulais continuer en école d'ingénieurs. Un projet concret de A à Z, en équipe, avec de vraies contraintes.",
      en: "This immersion confirmed I wanted to go on to engineering school. A real project from A to Z, as a team, with real constraints."
    },
    glossaire: [
      { terme: "Minimax", definition: { fr: "Algorithme de jeu qui choisit le coup en supposant que l'adversaire joue au mieux.", en: "Game algorithm choosing a move assuming the opponent plays their best." } },
      { terme: "Élagage alpha-bêta", definition: { fr: "Optimisation du minimax qui ignore les branches inutiles.", en: "Minimax optimisation that skips useless branches." } },
      { terme: "Socket TCP", definition: { fr: "Connexion réseau fiable entre le client et le serveur de jeu.", en: "Reliable network connection between game client and server." } },
      { terme: "Makefile", definition: { fr: "Fichier qui automatise la compilation d'un projet en C.", en: "File that automates building a C project." } }
    ]
  }
];
