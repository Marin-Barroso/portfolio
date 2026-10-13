import missionsData from "./missions.json";
import parcoursData from "./parcours.json";
import skillsData from "./skills.json";

// Missions, compétences et parcours sont dans des fichiers JSON modifiables depuis /admin
export const content = {
  missions: missionsData.missions,
  skills: skillsData,
  timeline: parcoursData,

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
      { label: "Missions détaillées", value: String(missionsData.missions.length) },
      { label: "Stages en garage et job saisonnier en atelier", value: "2 + 1" },
      { label: "Jiu-Jitsu brésilien", value: "2 ans" },
      { label: "Accordéon", value: "15 ans" }
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

  // Rubriques « Compétences » : chaque compétence de skills.json porte le slug de sa catégorie
  skillCategories: [
    {
      slug: "cao",
      title: "CAO et conception",
      intro: "Modélisation de pièces et d'ensembles, découverte en Fablab puis pratique en études."
    },
    {
      slug: "fabrication",
      title: "Fabrication",
      intro: "Soudure en production et usinage, en atelier professionnel et en école."
    },
    {
      slug: "mecanique-electricite",
      title: "Mécanique et électricité",
      intro: "Entretien, diagnostic et restauration sur voiture et cyclomoteur."
    },
    {
      slug: "langues-savoir-etre",
      title: "Langues et savoir-être",
      intro: "Ce qui ne se voit pas sur un plan : langues, organisation et relation client."
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
