export const content = {
  hero: {
    name: "MARIN BARROSO",
    subtitle: "Mécanique automobile & préparation course",
    tagline: "Étudiant en 3e année de Bachelor Sciences & Ingénierie – Arts et Métiers Bordeaux",
    badge: "Recherche une alternance – disponible",
    buttons: {
      missions: "Voir mes missions",
      contact: "Me contacter"
    },
    quickStats: [
      { label: "Missions détaillées", value: "4" },
      { label: "Stages en garage et atelier", value: "3" },
      { label: "Jiu-Jitsu brésilien", value: "2 ans" },
      { label: "Accordéon", value: "15 ans" }
    ]
  },

  skills: {
    technical: [
      { name: "Mécanique et restauration automobile", level: "Pratiqué en stage", linkedMissions: [0], linkedExperiences: [0, 1] },
      { name: "Mécanique moto/cyclomoteur", level: "Pratiqué en projet perso", linkedMissions: [2, 3], linkedExperiences: [] },
      { name: "Recherche de panne", level: "Pratiqué en stage", linkedMissions: [3], linkedExperiences: [1] },
      { name: "Électricité véhicule (faisceaux)", level: "Pratiqué en projet perso", linkedMissions: [3], linkedExperiences: [] },
      { name: "Soudage MIG", level: "Pratiqué en stage", linkedMissions: [1], linkedExperiences: [3] },
      { name: "Usinage CNC", level: "Pratiqué en stage", linkedMissions: [], linkedExperiences: [3] },
      { name: "Usinage conventionnel", level: "Pratiqué en stage", linkedMissions: [], linkedExperiences: [] },
      { name: "SolidWorks", level: "Pratiqué en études", linkedMissions: [], linkedExperiences: [] },
      { name: "CATIA V5", level: "Pratiqué en études", linkedMissions: [], linkedExperiences: [] },
      { name: "Gestion de planning et de chantiers", level: "Pratiqué en stage", linkedMissions: [], linkedExperiences: [0] },
      { name: "Relation client", level: "Pratiqué en stage", linkedMissions: [], linkedExperiences: [0] },
      { name: "Conception CAO", level: "Pratiqué en stage", linkedMissions: [], linkedExperiences: [5] }
    ],
    missionTypes: [
      "Révision et entretien",
      "Diagnostic et recherche de panne",
      "Restauration mécanique",
      "Restauration électrique",
      "Soudure en production",
      "Conception CAO",
      "Gestion de planning atelier"
    ],
    languages: [
      { name: "Français", level: "Natif" },
      { name: "Anglais", level: "A2" },
      { name: "Espagnol", level: "A1" }
    ]
  },

  competenceTable: [
    {
      activity: "Mécanique automobile",
      savoir: "Fonctionnement d'un véhicule 4 roues léger",
      savoirFaire: "Méthodologie de recherche de panne, entretien, révision et rapport client",
      savoirEtre: "Comportement à adopter en garage"
    },
    {
      activity: "Mécanique moto",
      savoir: "Fonctionnement d'un moteur à explosion interne",
      savoirFaire: "Réparer et entretenir un véhicule",
      savoirEtre: "Contrôle des émotions"
    },
    {
      activity: "Championnat de natation",
      savoir: "Technique de nage",
      savoirFaire: "Mise en pratique des techniques",
      savoirEtre: "Esprit sportif et concentration"
    },
    {
      activity: "Projet d'étude",
      savoir: "Fabrication, conception, gestion de projet",
      savoirFaire: "Fabrication, test, préparation et gestion d'une équipe",
      savoirEtre: "Comportement pour le bon fonctionnement d'une équipe"
    }
  ],

  missions: [
    {
      id: 1,
      slug: "revision-peugeot-106",
      title: "Révision complète sur une Peugeot 106",
      type: "Pro",
      location: "Garage LEZAMIS, Cadaujac",
      period: "03/02 – 28/02/2025",
      duration: "45 min",
      year: "2025",
      tags: ["Révision", "Entretien", "Méthodologie"],
      skills: ["Mécanique et restauration automobile", "Recherche de panne"],
      details: {
        post: "Exécutant",
        mission: "Révision complète + entretien classique",
        means: "Garage professionnel + accompagnement par un mécanicien",
        constraints: "Le temps",
        steps: [
          { caption: "Vérification de l'état du véhicule" },
          { caption: "Intervention" },
          { caption: "Entretien nécessaire du véhicule (vidange)" }
        ],
        highlights: "Le niveau de propreté des véhicules est souvent contraignant.",
        skills: "Méthodologie de vérification d'un véhicule ; réparer et tester l'état du véhicule ; oser demander de l'aide.",
        liked: "L'autonomie donnée à un simple stagiaire une fois qu'il a été formé, mais en gardant un certain accompagnement en cas de nécessité."
      }
    },
    {
      id: 2,
      slug: "soudure-micro-pieux",
      title: "Soudure de plots de micro-pieux",
      type: "Pro",
      location: "Aguila Mécanique, Martillac",
      period: "27/06 – 30/07/2023",
      duration: "8h à 16h",
      year: "2023",
      tags: ["Soudure MIG", "Production", "Précision"],
      skills: ["Soudage MIG", "Usinage CNC"],
      details: {
        post: "Exécutant",
        mission: "Soudure MIG d'un plot de micro-pieux",
        means: "Atelier d'usinage professionnel",
        constraints: "Le débit de pièces",
        steps: [
          { caption: "Mise en place des 2 pièces" },
          { caption: "Soudure" },
          { caption: "Vérification de la pièce" }
        ],
        highlights: "Nécessité d'un haut débit de pièces et précision requise pour la mise en place.",
        skills: "Soudure, vitesse de fabrication.",
        liked: "La pédagogie avec laquelle on m'a appris à souder."
      }
    },
    {
      id: 3,
      slug: "restauration-mecanique-moto-50",
      title: "Restauration mécanique d'une moto 50 cm³",
      type: "Perso",
      location: "Projet personnel",
      period: "Depuis le 31/07/2024",
      duration: "Projet en cours",
      year: "2024",
      tags: ["Restauration", "Mécanique moto", "Autonomie"],
      skills: ["Mécanique moto/cyclomoteur"],
      details: {
        post: "Autodidacte",
        mission: "Révision + entretien + réparation",
        means: "Outillage amateur, amis pour aider",
        constraints: "Coût, temps, météo, apprentissage en cours de route",
        steps: [
          { caption: "Rapatriement du cyclo + état des lieux" },
          { caption: "Réparation et remplacement des pièces" },
          { caption: "Vérification, fiabilisation et test" }
        ],
        highlights: "État du parc cyclomoteur en France, il a fallu refaire la quasi-totalité de la moto.",
        skills: "Entretien d'un cyclomoteur, réparation de pièces, mécanique sur cyclo.",
        liked: "Apprendre et découvrir la mécanique cyclomoteur, ce qui a confirmé mon envie de travailler dans ce domaine."
      }
    },
    {
      id: 4,
      slug: "restauration-electrique-moto-50",
      title: "Restauration du système électrique d'une moto 50 cm³",
      type: "Perso",
      location: "Projet personnel",
      period: "Depuis le 31/07/2024",
      duration: "Projet en cours",
      year: "2024",
      tags: ["Électricité", "Diagnostic", "Faisceaux"],
      skills: ["Mécanique moto/cyclomoteur", "Recherche de panne", "Électricité véhicule (faisceaux)"],
      details: {
        post: "Autodidacte",
        mission: "Recherche de panne + réparation + test",
        means: "Outillage amateur, amis pour aider",
        constraints: "Manque de connaissances, coût, temps, météo, apprentissage en cours de route",
        steps: [
          { caption: "État des lieux du faisceau électrique" },
          { caption: "Réparation des défauts et amélioration" },
          { caption: "Test et fiabilisation du faisceau" }
        ],
        highlights: "Malgré l'âge du cyclo, l'état électrique était relativement bon.",
        skills: "Restauration électrique d'un cyclomoteur, réparation de faisceaux électriques.",
        liked: "Découvrir le monde de l'électricité dans la mécanique."
      }
    }
  ],

  timeline: {
    education: [
      {
        year: "En cours",
        title: "Bachelor en Sciences et Ingénierie",
        specialty: "Spécialité Mécanique-production",
        location: "Arts et Métiers Bordeaux"
      },
      {
        year: "2023",
        title: "Baccalauréat technologique",
        specialty: "Spécialité ITEC, mention Bien",
        location: "Lycée Alfred Kastler"
      }
    ],
    experiences: [
      {
        year: "2026",
        duration: "3 mois",
        title: "Stage technicien assistant responsable du pôle mécanique",
        company: "Speed Motors, Mérignac",
        description: "Gestion du planning du pôle mécanique, gestion des chantiers, maintenance sur véhicule préparé, apprentissage de la gestion des délais, relation client.",
        isAutomotive: true,
        skills: ["Gestion de planning et de chantiers", "Relation client"]
      },
      {
        year: "2025",
        duration: "1 mois",
        title: "Stage opérateur de maintenance",
        company: "Garage LEZAMIS, Cadaujac",
        description: "Maintenance sur véhicule léger, recherche de panne.",
        isAutomotive: true,
        skills: ["Mécanique et restauration automobile", "Recherche de panne"]
      },
      {
        year: "2025",
        duration: "1 mois",
        title: "Commis de cuisine",
        company: "L'Escala, Espagne",
        description: "Service en salle, préparation d'ingrédients.",
        isAutomotive: false,
        skills: []
      },
      {
        year: "2023",
        duration: "1 mois",
        title: "Opérateur polyvalent saisonnier",
        company: "Aguila Mécanique, Martillac",
        description: "Soudure, soudure CNC, scierie.",
        isAutomotive: true,
        skills: ["Soudage MIG", "Usinage CNC"]
      },
      {
        year: "2022",
        duration: "1 mois",
        title: "Réceptionniste de commandes saisonnier",
        company: "Salad&Co, Villenave d'Ornon",
        description: "",
        isAutomotive: false,
        skills: []
      },
      {
        year: "2021",
        duration: "1 semaine",
        title: "Stage découverte en CAO",
        company: "Fablab Coh@bit",
        description: "Conception d'un mobilier, aide à un projet viticole, conception d'une vis et d'un écrou.",
        isAutomotive: false,
        skills: ["Conception CAO"]
      }
    ]
  },

  about: {
    text: "Passionné par le sport mécanique et la technologie depuis l'enfance, je combine une formation théorique solide avec une pratique concrète en atelier. Rigoureux et méthodique, je me suis formé à la mécanique automobile et moto à travers des stages professionnels et des projets personnels. Mon objectif est de travailler dans la préparation automobile pour la course, un domaine où je peux mettre à profit mes compétences techniques et mon goût pour le travail d'équipe. À l'aise aussi bien en atelier qu'au bureau, je recherche une alternance pour acquérir de l'expérience.",
    interests: [
      "Mécanique automobile",
      "Jiu-Jitsu brésilien (2 ans)",
      "Accordéon (15 ans)",
      "Bénévolat (musicien dans un orchestre lors de représentations)"
    ],
    image: "/images/marin.jpg"
  },

  contact: {
    email: "marin.barroso@ensam.eu",
    phone: "07 67 46 70 70",
    phoneInternational: "+33767467070",
    city: "Villenave d'Ornon",
    license: "Permis B et AM, véhiculé",
    cvButton: "Télécharger mon CV",
    contactButton: "M'écrire",
    cvFile: "/cv-marin-barroso.pdf",
    logo: "/images/logo-arts-et-metiers.png",
    availability: "Disponible pour une alternance",
    emailSubject: "Opportunité d'alternance – Portfolio de Marin Barroso",
    emailBody: "Bonjour Marin, j'ai découvert votre portfolio et souhaiterais échanger avec vous au sujet de…",
    whatsappMessage: "Bonjour Marin, j'ai découvert votre portfolio et souhaiterais échanger avec vous au sujet d'une opportunité."
  },

  alternance: {
    intro: "En 3e année de Bachelor, la formation se poursuit en contrat de professionnalisation. Je cherche une entreprise pour l'année 2026-2027.",
    details: [
      { label: "Contrat", value: "Contrat de professionnalisation (Bachelor 3e année)" },
      { label: "Formation", value: "Bachelor Sciences et Ingénierie, Arts et Métiers Bordeaux-Talence" },
      { label: "Mobilité", value: "Bordeaux" }
    ]
  },

  // Rubriques « Compétences » : chaque catégorie reprend des compétences de skills.technical par leur nom
  skillCategories: [
    {
      slug: "cao",
      title: "CAO et conception",
      intro: "Modélisation de pièces et d'ensembles, découverte en Fablab puis pratique en études.",
      skills: ["Conception CAO", "SolidWorks", "CATIA V5"]
    },
    {
      slug: "fabrication",
      title: "Fabrication",
      intro: "Soudure en production et usinage, en atelier professionnel et en école.",
      skills: ["Soudage MIG", "Usinage CNC", "Usinage conventionnel"]
    },
    {
      slug: "mecanique-electricite",
      title: "Mécanique et électricité",
      intro: "Entretien, diagnostic et restauration sur voiture et cyclomoteur.",
      skills: [
        "Mécanique et restauration automobile",
        "Mécanique moto/cyclomoteur",
        "Recherche de panne",
        "Électricité véhicule (faisceaux)"
      ]
    },
    {
      slug: "langues-savoir-etre",
      title: "Langues et savoir-être",
      intro: "Ce qui ne se voit pas sur un plan : langues, organisation et relation client.",
      skills: ["Gestion de planning et de chantiers", "Relation client"]
    }
  ],

  // Projets perso : textes à confirmer par Marin avant publication
  projects: [
    {
      slug: "moto-50",
      title: "Restauration d'une moto 50 cm³",
      intro: "Un cyclomoteur racheté en 2024 et remis en état de A à Z, mécanique et électricité.",
      items: [
        { title: "Restauration mécanique", kind: "Mission 3", text: "Révision, entretien et remplacement de la quasi-totalité des pièces.", tags: ["Mécanique moto", "Autonomie"], mission: "restauration-mecanique-moto-50" },
        { title: "Restauration électrique", kind: "Mission 4", text: "Recherche de panne, réparation et fiabilisation du faisceau.", tags: ["Électricité", "Diagnostic"], mission: "restauration-electrique-moto-50" }
      ]
    },
    {
      slug: "impression-3d",
      title: "Impression 3D",
      intro: "À compléter : pièces conçues et imprimées.",
      items: []
    },
    {
      slug: "echecs",
      title: "Jeu d'échecs",
      intro: "À compléter : pièces d'échecs modélisées en 3D.",
      items: []
    },
    {
      slug: "applications",
      title: "Applications",
      intro: "À compléter : projets numériques.",
      items: []
    }
  ],

  links: [
    { label: "Email", value: "marin.barroso@ensam.eu", href: "mailto:marin.barroso@ensam.eu" },
    { label: "Téléphone", value: "07 67 46 70 70", href: "tel:+33767467070" },
    { label: "GitHub", value: "Marin-Barroso", href: "https://github.com/Marin-Barroso" }
  ],

  // Synthèse du syllabus du Bachelor de Technologie (Arts et Métiers)
  formation: {
    years: [
      {
        year: "1re année",
        title: "Les bases de l'ingénieur",
        text: "Mathématiques, mécanique du point, électricité, premiers programmes en Python et Arduino. En atelier : lecture de plans, dessin technique, schémas cinématiques et réalisation de pièces simples par enlèvement de matière, en sécurité. Stage exécutant de 4 semaines.",
      },
      {
        year: "2e année",
        title: "Concevoir et industrialiser",
        text: "Analyse fonctionnelle et cahier des charges, modélisation de mécanismes, choix et dimensionnement de solutions technologiques. Matériaux, énergétique, préparation de la fabrication (gamme d'usinage, fabrication additive) et métrologie. Stage technicien de 12 semaines.",
      },
      {
        year: "3e année",
        title: "Piloter en entreprise",
        text: "Lean manufacturing, conduite et gestion de projet, ouverture scientifique et semaines thématiques. L'année se déroule en contrat de professionnalisation, en alternance entre l'école et l'entreprise.",
      },
    ],
    pillars: [
      { title: "Concevoir", text: "CAO, modélisation de systèmes et partage de données dans un environnement PLM." },
      { title: "Réaliser", text: "Usinage, fabrication additive, avant-projets et gammes de fabrication." },
      { title: "Contrôler", text: "Spécifications géométriques, gammes de contrôle, capabilité et cartes de contrôle." },
      { title: "Organiser", text: "Lean, gestion de projet, management et communication, anglais sur les trois ans." },
    ],
  }
};
