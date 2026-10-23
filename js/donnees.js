/* =========================================================
   donnees.js : tout le contenu du site est ici.
   Pour ajouter un projet, une formation ou un lien,
   copie un bloc existant, colle-le et modifie le texte.
   Chaque texte existe en deux langues : fr et en.
   ========================================================= */

// Infos générales sur moi
const profil = {
  nom: "Daris Mbau",
  email: "dariusmbawu05@gmail.com",
  telephone: "+33 7 80 10 09 21",
  telephoneLien: "+33780100921",       // format utilisé pour les liens tel: et WhatsApp
  whatsapp: "33780100921",              // numéro sans le + pour wa.me
  photo: "assets/img/photo.jpg",        // dépose ta photo ici (jpg, carré de préférence)
  cv: "assets/cv-daris-mbau.pdf"        // dépose ton CV ici, le bouton apparaît tout seul
};

// Mes comptes en ligne (laisse url vide pour cacher un lien)
const liens = [
  { nom: "GitHub", url: "https://github.com/darismbau", icone: "github" },
  { nom: "LinkedIn", url: "https://www.linkedin.com/in/daris-mbau-ir-179690295", icone: "linkedin" },
  { nom: "Notion", url: "", icone: "notion" }
];

// Formations, de la plus récente à la plus ancienne
const formations = [
  {
    periode: { fr: "Sept. 2025 · aujourd'hui", en: "Sept. 2025 · present" },
    titre: { fr: "Diplôme d'ingénieur Informatique & Réseaux", en: "Engineering degree in Computer Science & Networks" },
    lieu: { fr: "ENSISA (Université de Haute-Alsace) · Mulhouse", en: "ENSISA (University of Haute-Alsace) · Mulhouse, France" },
    texte: {
      fr: "Commencé en parallèle de ma dernière année de BUT. J'y renforce mes bases en réseau avec l'informatique, le développement logiciel et la sécurité.",
      en: "Started alongside the final year of my BUT. I am strengthening my networking background with computer science, software development and security."
    },
    enCours: true
  },
  {
    periode: { fr: "Sept. 2025 · 2 semaines", en: "Sept. 2025 · 2 weeks" },
    titre: { fr: "Immersion en école d'ingénieurs", en: "Engineering school immersion" },
    lieu: { fr: "ENSISA · parcours ingénieur du BUT 3", en: "ENSISA · engineering track, final BUT year" },
    texte: {
      fr: "Deux semaines dans le rythme de l'ENSISA, avec un vrai projet d'équipe : Krojanty, un jeu de stratégie en C avec une IA minimax et un mode réseau.",
      en: "Two weeks at the pace of ENSISA, with a real team project: Krojanty, a strategy game in C with a minimax AI and a network mode."
    },
  },
  {
    periode: { fr: "Sept. 2023 · Août 2026", en: "Sept. 2023 · Aug. 2026" },
    titre: { fr: "BUT Réseaux & Télécommunications · parcours ROM", en: "Bachelor (BUT) Networks & Telecoms · ROM track" },
    lieu: { fr: "IUT de Colmar (Université de Haute-Alsace)", en: "IUT Colmar (University of Haute-Alsace), France" },
    texte: {
      fr: "Trois ans pour apprendre à configurer, sécuriser et superviser des réseaux. Le parcours ROM (Réseaux Opérateurs et Multimédia) m'a emmené vers les infrastructures d'opérateurs, la VoIP et l'IPTV. En alternance chez Orange à partir de la 2e année.",
      en: "Three years learning to configure, secure and monitor networks. The ROM track (Operator Networks & Multimedia) took me into carrier infrastructure, VoIP and IPTV. Work-study at Orange from the 2nd year on."
    },
  }
];

// Expériences professionnelles
const experiences = [
  {
    periode: { fr: "Sept. 2024 · Août 2026", en: "Sept. 2024 · Aug. 2026" },
    poste: { fr: "Technicien opérateur d'infrastructure boucle locale optique", en: "Local fiber loop infrastructure technician" },
    entreprise: "Orange",
    contrat: { fr: "Alternance · 2 ans", en: "Work-study · 2 years" },
    resume: {
      fr: "Deux ans sur la boucle locale optique d'Orange, au contact de clients professionnels. J'y ai appris l'autonomie, le respect des engagements et la méthode face à une panne urgente. J'ai surtout compris de l'intérieur comment fonctionne le réseau d'un opérateur.",
      en: "Two years on Orange's local fiber loop, working with business customers. I learned autonomy, keeping commitments and a methodical approach to urgent outages. Above all, I understood from the inside how a carrier network works."
    },
    missions: {
      fr: [
        "Comprendre de bout en bout comment le réseau d'un opérateur arrive jusqu'aux entreprises",
        "Organiser seul mes interventions et échanger directement avec les clients",
        "Diagnostiquer des pannes avec méthode, sous la pression du temps",
        "Coordonner des prestataires et contrôler la qualité de leur travail",
        "Déployer des liaisons fibre dédiées pour des entreprises (pose de câble, soudures, mesures)"
      ],
      en: [
        "Understand end to end how a carrier network reaches businesses",
        "Plan my own interventions and deal directly with customers",
        "Troubleshoot faults methodically, under time pressure",
        "Coordinate subcontractors and check the quality of their work",
        "Deploy dedicated fiber links for businesses (cable laying, splicing, measurements)"
      ]
    },
    exemple: {
      titre: { fr: "Un exemple : le raccordement de France Télévisions", en: "An example: connecting France Télévisions" },
      texte: {
        fr: "J'ai déployé une liaison fibre dédiée avec garantie de temps de rétablissement, du nœud de raccordement jusqu'aux locaux du client : pose de câble, soudures, mesures au réflectomètre et validation du signal. Un client exigeant, un délai serré : j'ai appris à livrer proprement, du premier coup.",
        en: "I deployed a dedicated fiber link with guaranteed repair time, from the operator node to the customer's offices: cable laying, splicing, OTDR measurements and signal validation. A demanding customer and a tight deadline: I learned to deliver cleanly, the first time."
      }
    },
    apports: {
      fr: ["Autonomie", "Sens des responsabilités", "Relation client", "Méthode de diagnostic", "Calme sous pression", "Travail d'équipe"],
      en: ["Autonomy", "Ownership", "Customer relations", "Troubleshooting method", "Calm under pressure", "Teamwork"]
    }
  }
];

// Les projets sont dans js/projets.js

// Les 5 compétences du BUT R&T
const competences = [
  {
    id: "administrer",
    groupe: { fr: "Tronc commun", en: "Core" },
    nom: { fr: "Administrer", en: "Administer" },
    titre: { fr: "Administrer les réseaux et l'Internet", en: "Administer networks and the Internet" },
    texte: {
      fr: "Concevoir, configurer, sécuriser et superviser un réseau d'entreprise.",
      en: "Design, configure, secure and monitor a company network."
    }
  },
  {
    id: "connecter",
    groupe: { fr: "Tronc commun", en: "Core" },
    nom: { fr: "Connecter", en: "Connect" },
    titre: { fr: "Connecter les entreprises et les usagers", en: "Connect businesses and users" },
    texte: {
      fr: "Choisir et déployer les bons supports de transmission : fibre, Wi-Fi, radio, IoT.",
      en: "Choose and deploy the right transmission media: fiber, Wi-Fi, radio, IoT."
    }
  },
  {
    id: "programmer",
    groupe: { fr: "Tronc commun", en: "Core" },
    nom: { fr: "Programmer", en: "Program" },
    titre: { fr: "Créer des outils et des applications pour les R&T", en: "Build tools and apps for networks & telecoms" },
    texte: {
      fr: "Écrire des scripts et des applis qui automatisent, mesurent et font communiquer.",
      en: "Write scripts and apps that automate, measure and connect things."
    }
  },
  {
    id: "rapprocher",
    groupe: { fr: "Spécialité ROM", en: "ROM specialty" },
    nom: { fr: "Opérateurs", en: "Carriers" },
    titre: { fr: "Gérer les infrastructures et services des réseaux opérateurs", en: "Manage carrier network infrastructure and services" },
    texte: {
      fr: "Comprendre et faire tourner le cœur de réseau d'un opérateur et ses accès fibre.",
      en: "Understand and run a carrier's core network and its fiber access."
    }
  },
  {
    id: "unifier",
    groupe: { fr: "Spécialité ROM", en: "ROM specialty" },
    nom: { fr: "Multimédia", en: "Multimedia" },
    titre: { fr: "Gérer les communications unifiées et la vidéo sur Internet", en: "Manage unified communications and video over IP" },
    texte: {
      fr: "Mettre en place la téléphonie IP, l'IPTV et les services vidéo.",
      en: "Set up IP telephony, IPTV and video services."
    }
  }
];

// Ce que je suis en train d'apprendre (ma roadmap)
const roadmap = [
  {
    titre: { fr: "Automatisation réseau", en: "Network automation" },
    texte: { fr: "Générer, déployer et tester des configurations réseau automatiquement.", en: "Generating, deploying and testing network configurations automatically." },
    progression: 25
  },
  {
    titre: { fr: "Sécurité réseau", en: "Network security" },
    texte: { fr: "Pare-feu, segmentation, VPN, détection d'intrusion.", en: "Firewalls, segmentation, VPN, intrusion detection." },
    progression: 30
  },
  {
    titre: { fr: "Infrastructure pour l'IA", en: "Infrastructure for AI" },
    texte: { fr: "Data center, GPU, Kubernetes, réseaux haute performance.", en: "Data centers, GPUs, Kubernetes, high-performance networks." },
    progression: 20
  },
  {
    titre: { fr: "Anglais technique", en: "Technical English" },
    texte: { fr: "Lire la doc, échanger, présenter.", en: "Reading docs, discussing, presenting." },
    progression: 55
  }
];

// Certificats et badges (page Compétences)
// nom : le nom du certificat (fr / en)
// organisme : qui le délivre (Cisco, Fortinet, ANSSI...)
// date : quand (texte libre, ex : "Janv. 2027")
// statut : "obtenu", "encours" ou "prevu" (affiche une petite étiquette)
// lien : adresse du badge en ligne (Credly, Cisco...), ou laisse vide
// fichier : nom d'un PDF déposé dans assets/certificats/ (si pas de lien)
const certificats = [
  {
    nom: { fr: "Certificat Linphone", en: "Linphone certificate" },
    organisme: "Linphone · R&T",
    date: "",
    statut: "obtenu",
    lien: "",
    fichier: ""
  },
  {
    nom: { fr: "Analyse des réseaux 4G / 5G", en: "4G / 5G network analysis" },
    organisme: "ACD R&T",
    date: "",
    statut: "obtenu",
    lien: "",
    fichier: ""
  },
  {
    nom: { fr: "SecNumacadémie", en: "SecNumacadémie" },
    organisme: "ANSSI",
    date: "2026",
    statut: "prevu",
    lien: "",
    fichier: ""
  },
  {
    nom: { fr: "Fortinet Certified Fundamentals (FCF)", en: "Fortinet Certified Fundamentals (FCF)" },
    organisme: "Fortinet",
    date: "2026",
    statut: "prevu",
    lien: "",
    fichier: ""
  },
  {
    nom: { fr: "NVIDIA AI Infrastructure and Operations (NCA-AIIO)", en: "NVIDIA AI Infrastructure and Operations (NCA-AIIO)" },
    organisme: "NVIDIA",
    date: "2027",
    statut: "prevu",
    lien: "",
    fichier: ""
  },
  {
    nom: { fr: "Cisco CCNA", en: "Cisco CCNA" },
    organisme: "Cisco",
    date: "2027",
    statut: "prevu",
    lien: "",
    fichier: ""
  }
];

// Mes deux passions, affichées sur l'accueil
const passions = [
  {
    id: "reseau",
    titre: { fr: "Réseaux informatiques", en: "Computer networks" },
    texte: {
      fr: "Un intérêt qui date d'avant mes études, et que le BUT a renforcé : concevoir, relier, automatiser et sécuriser des réseaux, du réseau d'entreprise jusqu'au cœur d'un opérateur.",
      en: "An interest that started before my studies and that my degree strengthened: designing, connecting, automating and securing networks, from a company network to a carrier's core."
    },
    mots: [
      { fr: "Réseaux opérateurs", en: "Carrier networks" },
      { fr: "Data center", en: "Data centers" },
      { fr: "Automatisation", en: "Automation" },
      { fr: "Sécurité réseau", en: "Network security" }
    ]
  },
  {
    id: "ia",
    titre: { fr: "Infrastructure pour l'IA", en: "Infrastructure for AI" },
    texte: {
      fr: "Une IA, c'est d'abord des milliers de GPU qui doivent se parler très vite. Dans ces clusters, c'est le réseau qui décide de la performance. C'est là que je veux aller.",
      en: "An AI is first of all thousands of GPUs that must talk to each other very fast. In those clusters, the network decides performance. That is where I want to go."
    },
    mots: [
      { fr: "Clusters GPU", en: "GPU clusters" },
      { fr: "Réseaux haute performance", en: "High-performance networks" },
      "Kubernetes",
      { fr: "Supervision", en: "Monitoring" }
    ]
  }
];

// Les mots du grand bandeau qui défile sur l'accueil
const motsBandeau = {
  fr: ["Réseaux informatiques", "Data center", "Infrastructure pour l'IA", "Sécurité", "Automatisation"],
  en: ["Computer networks", "Data centers", "Infrastructure for AI", "Security", "Automation"]
};

/* Textes de l'interface, en français et en anglais.
   La clé (ex : "nav.travaux") est utilisée dans les pages HTML avec data-i18n. */
const textes = {
  fr: {
    "lien.evitement": "Aller au contenu",
    "menu.ouvrir": "Menu",
    "menu.fermer": "Fermer",
    "nav.accueil": "Accueil",
    "nav.travaux": "Travaux",
    "nav.parcours": "Parcours",
    "nav.competences": "Compétences",
    "nav.contact": "Contact",
    "nav.glossaire": "Glossaire",
    "statut": "Ouvert aux stages",
    "statut.cta": "Me contacter",
    "theme.basculer": "Changer de thème",
    "theme.clair": "Clair",
    "theme.sombre": "Sombre",
    "langue": "Langue",
    "voir": "Voir",
    "lieu": "Colmar, France",

    "hero.meta1": "[ Élève ingénieur ]",
    "hero.meta2": "ENSISA · Mulhouse",
    "hero.meta4": "Travaux sélectionnés",
    "hero.role1": "Réseaux et infrastructures,",
    "hero.role2": "pour l'intelligence artificielle",
    "hero.disciplines": "Disciplines",
    "hero.phrase": "Je conçois, j'automatise et je sécurise les réseaux sur lesquels tourne l'intelligence artificielle.",
    "hero.defiler": "Défiler",
    "hero.pays": "France",
    "hero.base": "Basé à Colmar",

    "apropos.etiquette": "[ 01 ] À propos",
    "apropos.manifeste": "Les réseaux informatiques m'intéressent depuis bien avant mes études. Mes projets d'infrastructure n'ont fait que le confirmer. Aujourd'hui, à l'ENSISA, je construis la suite : concevoir, automatiser et sécuriser les réseaux et les infrastructures sur lesquels tourne l'intelligence artificielle.",
    "apropos.texte": "Je m'appelle Daris, je suis en 2e année du cycle ingénieur Informatique & Réseaux à l'ENSISA, après un BUT Réseaux & Télécoms à l'IUT de Colmar. Mon objectif : devenir ingénieur réseau et infrastructure pour l'IA, avec la sécurité comme deuxième pilier. Quand je bloque, je respire, je découpe le problème, je cherche, et je demande de l'aide si besoin.",
    "apropos.chiffre1": "projets réalisés",
    "apropos.chiffre2": "ans d'alternance chez Orange",
    "apropos.chiffre3": "ans en réseaux & télécoms",
    "apropos.lien": "Mon parcours",

    "choisis.etiquette": "[ 02 ] Travaux choisis",
    "choisis.titre": "Ce que j'ai construit",
    "choisis.tout": "Tous les travaux",

    "index.etiquette": "[ 03 ] Index",
    "index.titre": "Tous les projets",
    "col.numero": "N°",
    "col.projet": "Projet",
    "col.domaine": "Domaine",
    "col.annee": "Année",

    "passions.etiquette": "[ 03 ] Ce qui m'intéresse",

    "console.etiquette": "[ 04 ] Console",
    "console.titre": "Ou en ligne de commande.",
    "console.texte": "Un petit terminal pour me découvrir autrement. Tapez help, puis essayez les commandes.",
    "terminal.titre": "daris@ensisa : ~",
    "terminal.aide": "Commandes : whoami, projets, competences, contact, ia, reseaux, theme, lang, clear",

    "travaux.etiquette": "[ Travaux ]",
    "travaux.titre": "Travaux",
    "travaux.intro": "Projets d'école, du BUT à l'ENSISA : j'ai monté, configuré, codé, cassé puis réparé. Chaque projet a sa page détaillée.",
    "vue.liste": "Liste",
    "vue.grille": "Grille",
    "filtre.tous": "Tout",
    "filtre.ia": "IA",
    "filtre.reseau": "Réseaux",
    "filtre.dev": "Développement",
    "filtre.telecom": "Télécoms",
    "filtre.iot": "Objets connectés",
    "filtre.securite": "Sécurité",
    "filtre.competence": "Compétence",
    "travaux.aucun": "Aucun projet pour ce filtre pour l'instant.",
    "travaux.aCote": "À côté",
    "travaux.aCoteIntro": "Des projets plus anciens ou hors de mon objectif réseau, gardés pour la trace : développement, Arduino, traitement du signal.",

    "projet.retour": "Tous les travaux",
    "projet.annee": "Date",
    "projet.code": "Référence",
    "projet.equipe": "Équipe",
    "projet.domaines": "Domaines",
    "projet.sommaire": "Sur cette page",
    "projet.contexte": "Contexte",
    "projet.fiche": "Fiche technique",
    "projet.role": "Mon rôle",
    "projet.realise": "Ce que j'ai fait",
    "projet.acTitre": "Compétences et apprentissages critiques",
    "projet.colFait": "Ce que j'ai fait",
    "projet.colAc": "Apprentissage critique",
    "projet.apports": "Ce que ça m'a apporté",
    "projet.recul": "Avec du recul",
    "projet.limites": "Ce qui n'a pas marché",
    "projet.autrement": "Ce que je ferais autrement",
    "projet.bilan": "Bilan",
    "projet.techno": "Technos",
    "projet.competences": "Compétences du BUT",
    "projet.suivant": "Projet suivant",
    "projet.introuvable": "Ce projet n'existe pas, ou plus.",
    "projet.notions": "Notions clés",
    "projet.toutGlossaire": "Tout le glossaire",
    "projet.preuves": "Traces et preuves",
    "projet.ouvrir": "Ouvrir",
    "projet.telecharger": "Télécharger",
    "projet.video": "VIDÉO",
    "projet.voirPreuves": "Voir les traces et preuves",
    "projet.lien": "LIEN",
    "projet.regarder": "Regarder",
    "projet.fermer": "Fermer",
    "glossaire.etiquette": "[ Glossaire ]",
    "glossaire.titre": "Glossaire",
    "glossaire.intro": "Toutes les notions de mes projets, expliquées en une phrase. Pour comprendre vite, et pour réviser.",
    "glossaire.recherche": "Chercher une notion (VLAN, BGP, Docker...)",
    "glossaire.vide": "Aucune notion ne correspond.",
    "glossaire.vu": "Vu dans",

    "parcours.etiquette": "[ Parcours ]",
    "parcours.titre": "Parcours",
    "parcours.intro": "D'un BUT très concret à une école d'ingénieurs, en passant par deux ans sur le terrain chez un opérateur.",
    "parcours.formation": "Formation",
    "parcours.experience": "Expérience",
    "parcours.enCours": "En cours",
    "parcours.details": "Voir le détail",
    "parcours.missions": "Ce que je faisais",
    "parcours.outils": "Outils",
    "parcours.apports": "Ce que ça m'a apporté",

    "comp.etiquette": "[ Compétences ]",
    "comp.titre": "Compétences",
    "comp.intro": "Les cinq compétences du BUT R&T, travaillées pendant trois ans, puis ma boîte à outils et ce que j'apprends en ce moment.",
    "comp.projets": "projets",
    "comp.voir": "Voir les projets liés",
    "comp.stack": "Boîte à outils",
    "comp.roadmap": "En train d'apprendre",
    "comp.roadmapIntro": "Ma route vers l'infrastructure pour l'IA. Les barres montrent où j'en suis, honnêtement.",
    "comp.certifs": "Certificats",
    "certif.obtenu": "Obtenu",
    "certif.encours": "En cours",
    "certif.prevu": "Prévu",

    "contact.etiquette": "[ Contact ]",
    "contact.titre": "Parlons-en.",
    "contact.intro": "Un stage, un projet, une question, ou juste envie d'échanger sur l'IA ou les réseaux ? Écrivez-moi, je réponds vite.",
    "contact.nom": "Votre nom",
    "contact.email": "Votre email",
    "contact.sujet": "Sujet",
    "contact.message": "Votre message",
    "contact.envoyer": "Envoyer",
    "contact.envoi": "Envoi",
    "contact.succes": "Merci ! Votre message est bien parti, je vous réponds très vite.",
    "contact.erreur": "Oups, l'envoi n'a pas marché. Vous pouvez m'écrire directement à",
    "contact.invalide": "Merci de remplir tous les champs avec un email valide.",
    "contact.direct": "Ou directement",
    "contact.copier": "Copier",
    "contact.copie": "Copié !",
    "contact.whatsapp": "Message WhatsApp",

    "pied.cta1": "Un stage, un projet,",
    "pied.cta2": "une idée ?",
    "pied.ecrire": "Écrivez-moi",
    "pied.naviguer": "Naviguer",
    "pied.ailleurs": "Ailleurs",
    "pied.heure": "Heure locale",
    "pied.role": "Élève ingénieur Informatique & Réseaux",
    "pied.haut": "Haut de page",

    "erreur.titre": "Page introuvable.",
    "erreur.texte": "Le paquet s'est perdu en route. Revenez à l'accueil, la route est bonne par là.",
    "erreur.retour": "Retour à l'accueil"
  },
  en: {
    "lien.evitement": "Skip to content",
    "menu.ouvrir": "Menu",
    "menu.fermer": "Close",
    "nav.accueil": "Home",
    "nav.travaux": "Work",
    "nav.parcours": "Path",
    "nav.competences": "Skills",
    "nav.contact": "Contact",
    "nav.glossaire": "Glossary",
    "statut": "Open to internships",
    "statut.cta": "Get in touch",
    "theme.basculer": "Toggle theme",
    "theme.clair": "Light",
    "theme.sombre": "Dark",
    "langue": "Language",
    "voir": "View",
    "lieu": "Colmar, France",

    "hero.meta1": "[ Engineering student ]",
    "hero.meta2": "ENSISA · Mulhouse",
    "hero.meta4": "Selected work",
    "hero.role1": "Networks and infrastructure,",
    "hero.role2": "for artificial intelligence",
    "hero.disciplines": "Disciplines",
    "hero.phrase": "I design, automate and secure the networks that artificial intelligence runs on.",
    "hero.defiler": "Scroll",
    "hero.pays": "France",
    "hero.base": "Based in Colmar",

    "apropos.etiquette": "[ 01 ] About",
    "apropos.manifeste": "Computer networks have interested me since long before my studies. My infrastructure projects only confirmed it. Now, at ENSISA, I'm building what comes next: designing, automating and securing the networks and infrastructure that artificial intelligence runs on.",
    "apropos.texte": "I'm Daris, a 2nd year Computer Science & Networks engineering student at ENSISA, after a Networks & Telecoms degree at IUT Colmar. My goal: become a network and infrastructure engineer for AI, with security as my second pillar. When I get stuck, I take a breath, split the problem, dig, and ask for help when needed.",
    "apropos.chiffre1": "projects built",
    "apropos.chiffre2": "years of work-study at Orange",
    "apropos.chiffre3": "years in networks & telecoms",
    "apropos.lien": "My path",

    "choisis.etiquette": "[ 02 ] Selected work",
    "choisis.titre": "Things I've built",
    "choisis.tout": "All work",

    "index.etiquette": "[ 03 ] Index",
    "index.titre": "Every project",
    "col.numero": "No.",
    "col.projet": "Project",
    "col.domaine": "Field",
    "col.annee": "Year",

    "passions.etiquette": "[ 03 ] What interests me",

    "console.etiquette": "[ 04 ] Console",
    "console.titre": "Or from the command line.",
    "console.texte": "A tiny terminal to get to know me differently. Type help, then try the commands.",
    "terminal.titre": "daris@ensisa : ~",
    "terminal.aide": "Commands: whoami, projects, skills, contact, ai, networks, theme, lang, clear",

    "travaux.etiquette": "[ Work ]",
    "travaux.titre": "Work",
    "travaux.intro": "School projects, from my bachelor to ENSISA: I set things up, configured, coded, broke and fixed them. Every project has its own detailed page.",
    "vue.liste": "List",
    "vue.grille": "Grid",
    "filtre.tous": "All",
    "filtre.ia": "AI",
    "filtre.reseau": "Networking",
    "filtre.dev": "Development",
    "filtre.telecom": "Telecoms",
    "filtre.iot": "Connected devices",
    "filtre.securite": "Security",
    "filtre.competence": "Skill",
    "travaux.aucun": "No project for this filter yet.",
    "travaux.aCote": "On the side",
    "travaux.aCoteIntro": "Older projects or ones outside my networking goal, kept for the record: development, Arduino, signal processing.",

    "projet.retour": "All work",
    "projet.annee": "Date",
    "projet.code": "Reference",
    "projet.equipe": "Team",
    "projet.domaines": "Fields",
    "projet.sommaire": "On this page",
    "projet.contexte": "Context",
    "projet.fiche": "Tech sheet",
    "projet.role": "My role",
    "projet.realise": "What I did",
    "projet.acTitre": "Skills and learning outcomes",
    "projet.colFait": "What I did",
    "projet.colAc": "Learning outcome",
    "projet.apports": "What I gained",
    "projet.recul": "Looking back",
    "projet.limites": "What didn't work",
    "projet.autrement": "What I'd do differently",
    "projet.bilan": "Takeaway",
    "projet.techno": "Tech",
    "projet.competences": "Degree skills",
    "projet.suivant": "Next project",
    "projet.introuvable": "This project doesn't exist, or not anymore.",
    "projet.notions": "Key concepts",
    "projet.toutGlossaire": "Full glossary",
    "projet.preuves": "Evidence",
    "projet.ouvrir": "Open",
    "projet.telecharger": "Download",
    "projet.video": "VIDEO",
    "projet.voirPreuves": "See the evidence",
    "projet.lien": "LINK",
    "projet.regarder": "Watch",
    "projet.fermer": "Close",
    "glossaire.etiquette": "[ Glossary ]",
    "glossaire.titre": "Glossary",
    "glossaire.intro": "Every concept from my projects, explained in one sentence. To understand fast, and to revise.",
    "glossaire.recherche": "Search a concept (VLAN, BGP, Docker...)",
    "glossaire.vide": "No concept matches.",
    "glossaire.vu": "Seen in",

    "parcours.etiquette": "[ Path ]",
    "parcours.titre": "Path",
    "parcours.intro": "From a very hands-on bachelor to an engineering school, with two years in the field at a telecom operator.",
    "parcours.formation": "Education",
    "parcours.experience": "Experience",
    "parcours.enCours": "Ongoing",
    "parcours.details": "See details",
    "parcours.missions": "What I did",
    "parcours.outils": "Tools",
    "parcours.apports": "What I gained",

    "comp.etiquette": "[ Skills ]",
    "comp.titre": "Skills",
    "comp.intro": "The five core skills of my Networks & Telecoms degree, practiced over three years, then my toolbox and what I'm learning right now.",
    "comp.projets": "projects",
    "comp.voir": "See related projects",
    "comp.stack": "Toolbox",
    "comp.roadmap": "Currently learning",
    "comp.roadmapIntro": "My road to infrastructure for AI. The bars show where I honestly stand.",
    "comp.certifs": "Certificates",
    "certif.obtenu": "Earned",
    "certif.encours": "In progress",
    "certif.prevu": "Planned",

    "contact.etiquette": "[ Contact ]",
    "contact.titre": "Let's talk.",
    "contact.intro": "An internship, a project, a question, or just want to chat about AI or networks? Drop me a message, I reply quickly.",
    "contact.nom": "Your name",
    "contact.email": "Your email",
    "contact.sujet": "Subject",
    "contact.message": "Your message",
    "contact.envoyer": "Send",
    "contact.envoi": "Sending",
    "contact.succes": "Thanks! Your message is on its way, I'll get back to you soon.",
    "contact.erreur": "Oops, sending failed. You can email me directly at",
    "contact.invalide": "Please fill in every field with a valid email.",
    "contact.direct": "Or reach me directly",
    "contact.copier": "Copy",
    "contact.copie": "Copied!",
    "contact.whatsapp": "WhatsApp message",

    "pied.cta1": "An internship, a project,",
    "pied.cta2": "an idea?",
    "pied.ecrire": "Write to me",
    "pied.naviguer": "Navigate",
    "pied.ailleurs": "Elsewhere",
    "pied.heure": "Local time",
    "pied.role": "Computer Science & Networks engineering student",
    "pied.haut": "Back to top",

    "erreur.titre": "Page not found.",
    "erreur.texte": "The packet got lost on the way. Head back home, the route is good from there.",
    "erreur.retour": "Back to home"
  }
};
