export const projectsData = [
  {
    id: 14,
    title: "Site personnel",
    date: "Aout 2020",
    skills: ["Réaliser un site avec React", "Héberger un site avec AWS"],
    languages: ["React", "Javascript", "Sass", "AWS"],
    languagesIcons:["fab fa-aws","fab fa-react", "fab fa-sass",  'fab fa-css3-alt'],
    resume: "Réalisation de ce site personnel à l'aide de React",
    detail:"",
    img: "./media/projet-14.png",
    link: "https://github.com/S0Imyr/site_perso",
  },
  {
    id: 13,
    title: "OC Lettings",
    date: "Juin Juillet 2020",
    skills: ["Réaliser un Pipeline CI/CD", "Générer et utiliser une image Docker", "Configurer le suivi des erreurs avec Sentry"],
    languages: ["Django", "Python", "CircleCI", "Docker", "Heroku", "Sentry"],
    languagesIcons:["fab fa-python", "fab fa-docker"],
    resume: "Le projet consiste à créer un pipeline CI/CD d'une application Django. A chaque commit sur la branche master du repository Github, les tests et le linting sont lancés. En cas de succès, une image Docker est créée. Enfin si l'image a bien été créée, le site est déployé avec Heroku.",
    detail:
      "Nous travaillons au sein d'une start-up dans la location de biens immobiliers. Il nous est demandé d'améliorer un site existant."/
      "Un repository Github avec les instructions pour l'exécuter en local nous est fourni."/
      "Les points à améliorer/ajouter sont :"/
      "la réduction de diverses dettes techniques sur le projet"/
      "la refonte de l'architecture modulaire"/
      "l'ajout d'un pipeline CI/CD utilisant CircleCI et Heroku"/
      "la surveillance de l'application de le suivi des erreurs via Sentry.",
    img: "./media/projet-13.png",
    link: "https://github.com/S0Imyr/Projet-13",
  },
  {
    id: 12,
    title: "Epic Events",
    date: "Février 2020",
    languages: ["Django", "Python", "Postman", "PostgreSQL"],
    languagesIcons:["fab fa-python"],
    skills: ["Conception de l'architecture d'une API", "Réaliser une API avec Django Rest Framework", "Documenter une application avec Postman"],
    python_packages: ["Unittest"],
    resume: "Il s'agit de créer une API pour le CRM d'une entreprise dans l'événementiel. Dans un premier temps il faut réaliser l'ERD et déterminer des endpoints. Enfin il faut sécuriser l'API avec notamment une authentification JWT et le respect du principe de moindre privilège pour les différents types d'utilisateur. Une couverture de test est assurée avec unittest.",
    detail:
      "Nous travaillons au sein d'une entreprise dans l'événementiel."/
      "Pour effectuer le suivi de tous les clients et événements, un CRM (Customer Relationship Management) est géré par un fournisseur."/
      "Ce fournisseur a malheureusement été piraté et il nous est demandé de créer un logiciel CRM interne."/
      "Il s'agit dans un premier temps de réaliser un diagramme entité-relation (ERD) puis de développer l'application sous Django avec une base de donnée PostgreSQL.",
    img: "./media/projet-12.png",
    link: "https://github.com/S0Imyr/Projet-12",
  },
  {
    id: 11,
    title: "Tests",
    date: "Mai 2020",
    languages: ["Flask", "Python", "Locust"],
    languagesIcons:["fab fa-python"],
    python_packages: ["Pytest"],
    resume: "Le projet consiste à réaliser la couverture de test d'une application Flask à l'aide de Pytest. Enfin il faut contrôler ses performances avec Locust.",
    detail:
      "Un projet a été initié par un collègue absent. Il s'agit de réaliser une application pour coordonner l'organisation de compétitions entre plusieurs clubs."/
      "Une précédente version s'est avérée trop lourde pour les organisateurs régionaux. Le collègue a opté pour Flask pour réaliser le projet."/
      "Il nous est demandé de reprendre le projet et de corriger les bugs déjà recensés par le collègue. Il s'agit aussi de réaliser des tests pour couvrir ses bugs."/
      "Enfin il faudra terminer le projet en suivant une approche de Test Driven Developpement et tester les performances avec Locust.",
    img: "./media/projet-11.png",
    link: "https://github.com/S0Imyr/Projet-11",
  },
  {
    id: 10,
    title: "SoftDesk",
    date: "Avril 2020",
    languages: ["Django", "Python"],
    languagesIcons:["fab fa-python"],
    python_packages: ["Unittest"],
    resume: "Il s'agit de réaliser une API REST à l'aide de Django REST Framework. \n L'authentification est assurée par un JSON Web Token et est nécessaire pour tous les endpoints. Une couverture de test est assurée avec unittest.",
    detail:
    "Une entreprise de développement souhaite avoir une application de suivi des bugs et problèmes de leurs projets en développement."/
    "La mission est donc de réaliser cette API en utilisant Django REST Framework."/
    "Elle doit tout d'abord permettre l'authentification des utilisateurs avec JWT."/
    "En l'absence d'authentification, aucun endpoint n'est accessible."/
    "Les utilisateurs doivent pouvoir créer et avoir la liste des projets. Il faut ensuite être un contributeur du projet pour le lire."/
    "Pour le mettre à jour ou le supprimer, il faut en être l'auteur."/
    "Les contributeurs d'un projet peuvent lui attribuer des problèmes ou en lire la liste des problèmes."/
    "Pour mettre à jour ou supprimer un problème, il faut en être l'auteur."/
    "Enfin les contributeurs d'un projet peuvent créer et lire des commentaires relatifs à un problème."/
    "La mise à jour ou la suppression d'un commentaire demande que l'utilisateur soit l'auteur.",
    img: "./media/projet-10.png",
    link: "https://github.com/S0Imyr/Projet-10",
  },
  {
    id: 9,
    title: "LITReview",
    date: "Mars 2020",
    languages: ["Django", "Python", "Sass", "CSS"],
    languagesIcons:["fab fa-python", 'fab fa-css3-alt', "fab fa-sass"],
    resume:"Le projet consiste à réaliser une application web avec Django. L'application doit permettre à des utilisateurs de demander des critiques sur des livres ou de réaliser une critique. Un système de follower/followed filtre les posts visibles par les utilisateurs. L'utilisateur peut donc voir les différents posts des personnes suivies, modifier/supprimer ses posts ou encore modifier/supprimer les personnes suivies.",
    detail:
      "Une start-up souhaite créer un site de critiques littéraires avec un système de followers."/
      "L'utilisateur doit donc pouvoir demander une critique sur un livre, ou à l'inverse répondre à une demande de critique."/
      "Le système de followers détermine donc les messages que l'utilisateur peut voir, grossièrement les siens et ceux des personnes qu'il suit."/
      "Une première étape est donc de créer une page de connexion et une page de création de compte permettant l'authentification des membres."/
      "Il s'agit ensuite de créer une page centrale qui contiendra les messages visibles pour l'utilisateur. Ces messages sont soit des demandes de critique soit des critiques."/
      "Une page permet aussi de voir et modifier ses contributions."/
      "Trois pages contenant des formulaires permettent à l'utilisateur de participer aux critiques. Une pour y répondre, une pour critiquer et une dernière pour créer une critique pour une œuvre sans sollicitation."/
      "Enfin une page doit permettre de suivre d'autres utilisateurs et de connaître les utilisateurs suivis. Elle pourra aussi indiquer les utilisateurs qui le suivent.",
    img: "./media/projet-9.png",
    link: "https://github.com/S0Imyr/Projet-9",
  },
  {
    id: 7,
    title: "AlgoInvest&Trade",
    date: "Février 2020",
    languages: ["Python"],
    languagesIcons:["fab fa-python"],
    python_packages: ["Itertools"],
    resume: "Il s'agit de réaliser un programme pour une société financière qui explore un portefeuille d'actions. Un premier programme de force brute doit explorer toutes les possibilités d'un portefeuille de 20 actions. Il faut ensuite réaliser un programme optimisé permettant de trouver le meilleur investissement sur un portefeuille plus élargi.",
    detail:
      "Une société financière fait appel à nous pour optimiser ses stratégies d'investissement."/
      "Dans un premier temps, elle souhaite avoir un programme python qui analyse un portefeuille réduit de 20 actions."/
      "Pour chaque action, nous avons la possibilité de l'acheter une fois ou de ne pas l'acheter."/
      "Un premier programme de force brute doit parcourir l'ensemble des possibilités d'investissement pour en retenir la meilleure."/
      "Dans un second temps, le programme doit pouvoir tourner pour un portefeuille d'actions plus large."/
      "Le programme de force brute développé sera donc trop long, il nous est donc demandé de développer une solution plus optimisée.",
    img: "./media/projet-7.png",
    link: "https://github.com/S0Imyr/Projet-7",
  },
  {
    id: 6,
    title: "Just Stream It",
    date: "Janvier 2020",
    languages: ["CSS", "Sass", "Javascript"],
    languagesIcons:['fab fa-js', "fab fa-sass",  'fab fa-css3-alt'],
    resume: "Le projet consiste à réaliser la partie front-end d'une application web affichant des classements de films. Une API est fournie afin d'obtenir les meilleurs films à afficher. Il faut donc utiliser des requêtes AJAX afin d'obtenir le top 7 de différentes catégories et d'organiser leur affichage sur la page. Une fenêtre modale doit permettre d'afficher les différentes informations d'un film lorsqu'on clique sur son affiche.",
    detail:
      "Une association de critiques de films souhaite développer une page web qui affiche les films les mieux notés."/
      "Elle nous fournit pour cela un repository permettant de simuler en local l'appel à une API (Application Programming Interface)."/
      "Nous y ferons donc appel pour que les classements de films s'actualisent."/
      "La page web devra afficher successivement :"/
      "le film le mieux classé avec son affiche, son titre et son résumé"/
      "les affiches des 7 meilleurs films toutes catégories confondues"/
      "pour chacune des trois catégories choisies, le classement des 7 meilleurs films"/
      "des fenêtres modales devront s'ouvrir lorsqu'on clique sur les affiches des films"/
      "ces fenêtres modales donnent les principales informations des films.",
    img: "./media/projet-6.png",
    link: "https://github.com/S0Imyr/Projet-6",
  },
  {
    id: 4,
    title: "Chess Organizer",
    date: "Décembre 2020",
    languages: ["Python"],
    languagesIcons:["fab fa-python"],
    python_packages: ["requests", "BeautifoulSoup"],
    resume: "Pour une association qui organise des tournois d'échecs, il s'agit de réaliser un logiciel permettant d'établir les confrontations du tournoi en respectant les règles du tournoi suisse. Il doit être possible d'interrompre le programme et de le relancer au même stade du tournoi.",
    detail:
      "Le client est une association qui organise des tournois d'échecs. Elle souhaite que nous réalisions un programme logiciel aidant à l'organisation des matchs."/
      "Lors de tournoi d'échecs, le programme doit permettre d'établir quels joueurs devront s'affronter."/
      "Le programme doit respecter pour cela, les règles du tournoi suisse."/
      "Un tournoi pouvant être interrompu et repris le lendemain, il doit être possible d'interrompre le programme et de le relancer au même stade du tournoi."/
      "Enfin le programme doit permettre d'écrire un certain nombre de rapports :"/
      "la liste des joueurs ayant participé aux différents tournois,"/
      "la liste des tournois,"/
      "la liste des informations pour un tournoi donné."/
      "Pour les listes de joueurs, elles doivent être disponibles par ordre alphabétique ou selon leur classement."/
      "En termes de spécifications techniques, il est exigé de suivre un design pattern, il s'agit de se conformer à un modèle de conception MVC (Modèle, Vue, Contrôleur)."/
      "Pour la base de données, on utilisera le package TinyDB. Enfin le code Python devra respecter la PEP8.",
    img: "./media/projet-4.png",
    link: "https://github.com/S0Imyr/Projet-4",
  },
  {
    id: 3,
    title: "Learn@Home",
    date: "Novembre 2020",
    languages: ["Balsamiq"],
    languagesIcons:[],
    resume: "Il s'agit de réaliser le Design d'une application d'aide au devoir pour des élèves en difficulté. Un ensemble de maquette sous Balsamiq définit l'ensemble des pages (PC, mobile) et leurs liens. La construction se fait dans un contexte de méthodes agiles avec des User Stories et un kanban.",
    detail:
    "",
    img: "./media/projet-3.png",
    link: "https://github.com/S0Imyr/Projet-3",
  },
  {
  id: 2,
  title: "Book scraping",
  date: "Novembre 2020",
  languages: ["Python"],
  languagesIcons:["fab fa-python"],
  python_packages: [""],
  resume: "Le projet consiste à scraper une bibliothèque 1000 livres répartis en catégories. Le programme doit créer un fichier csv par catégorie avec pour chaque livre, l'ensemble des données disponibles (prix, description, auteur, ...). Enfin un dossier image par catégorie doit stocker ces images au nom du livre."
  ,
  détail:
    "Une association de critiques de films souhaite développer une page web qui affiche les films les mieux notés."/
    "Elle nous fournit pour cela un repository permettant de simuler en local l'appel à une API (Application Programming Interface)."/
    "Nous y ferons donc appel pour que les classements de films s'actualisent."/
    "La page web devra afficher successivement :"/
    "le film le mieux classé avec son affiche, son titre et son résumé"/
    "les affiches des 7 meilleurs films toutes catégories confondues"/
    "pour chacune des trois catégories choisies, le classement des 7 meilleurs films"/
    "des fenêtres modales devront s'ouvrir lorsqu'on clique sur les affiches des films"/
    "ces fenêtres modales donnent les principales informations des films.",
  img: "./media/projet-2.png",
  link: "https://github.com/S0Imyr/Projet-2",
},
];
