import STRUCTURE from "../assets/services/structur.jpg";
import LOTSTECHNIQUES from "../assets/services/LOTSTECHNIQUES.png";
import LOTSARCHITECTURAUX from "../assets/services/architectural.jpg";
import DECORATION from "../assets/services/decorationService.jpg";
const servicesMenu = [
  {
    id: 1,
    name: "STRUCTURE",
    image: STRUCTURE,
    link: "/structure-service",
    desc: "Opic offre une expertise dans plusieurs disciplines de l'ingénierie, y compris la technologie des procédés, la conception HSE, la mécanique, la tuyauterie, les systèmes de contrôle, l'électricité, les pipelines, le génie civil, les structures et l'architecture, ainsi que des spécialités plus avancées.",
    buttonContent: "Structure Services",
    reverse: true,
  },
  {
    id: 2,
    name: "LOTS TECHNIQUES",
    image: LOTSTECHNIQUES,
    desc: "En tirant parti de notre expertise en chaîne d'approvisionnement internationale, de notre connaissance du marché et de nos réseaux mondiaux, nous aidons les clients à gérer l'acquisition d'équipements, de matériaux et de services grâce à des approvisionnements stratégiques, à la gestion des matériaux, à la gestion des contrats et à la logistique.",
    buttonContent: "Lots Techniques Services",
    reverse: false,
    link: "/technique-service",
  },

  {
    id: 3,
    name: "LOTS ARCHITECTURAUX",
    image: LOTSARCHITECTURAUX,
    desc: "Améliorant l'efficacité des capitaux pour certaines des conditions de projet les plus difficiles auxquelles les clients de toutes les industries sont confrontés, notre approche intégrée des solutions de fabrication offre une gamme d'options pour répondre aux besoins spécifiques des clients.",
    buttonContent: "Architecture Services",
    reverse: true,
    link: "/architectural-service",
  },
  {
    id: 4,
    name: "DECORATION",
    image: DECORATION,
    desc: "Opic facilite la mobilisation efficace d'équipes de construction qualifiées et de méthodologies avancées à travers le monde. Grâce à notre vaste réseau de ressources de construction, nous réalisons des projets avec la qualité et la sécurité attendues par nos clients.",
    buttonContent: "Decoration Services",
    reverse: false,
    link: "/decoration-service",
  },
];

export default servicesMenu;
