import { FaChevronRight } from "react-icons/fa";
import relation from "../assets/Community-Relations.jpg"
import Conformité from "../assets/ethics.png"
import rapport from "../assets/CorporateReporting.jpg"
import Gouvernance from "../assets/gouvernance.webp"
import securite from "../assets/securite.jpg"
import Inclusion from "../assets/inclusion.avif"
const approches = [
    {
        id:1,
        name:"Relations avec la Communauté",
        image:relation,
        icon:<FaChevronRight/>,
        lien:"",

    },
    {
        id:2,
        name:"Conformité et Éthique",
        image:Conformité,
        icon:<FaChevronRight/>,
        lien:"",
    },
    {
        id:3,
        name:"Reporting d'Entreprise",
        image:rapport,
        icon:<FaChevronRight/>,
        lien:"",
    },
    {
        id:4,
        name:"Gouvernance",
        image:Gouvernance,
        icon:<FaChevronRight/>,
        lien:"",
    },
    {
        id:5,
        name:"Santé, Sécurité et Environnement",
        image:securite,
        icon:<FaChevronRight/>,
        lien:"",
    },
    {
        id:5,
        name:"Inclusion",
        image:Inclusion,
        icon:<FaChevronRight/>,
        lien:"",
    }
    
]

export default approches