import React, { useState } from "react";
import bg_home from "../assets/feautures/homeBanner.png";
import Title from "../components/Title";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import opicAbout from "../assets/about.jpg";
import UNICEF from "../assets/UNICEF.mp4";
import unicefScreen from "../assets/feautures/uni.png";
import carroussel from "../assets/carroussel.mp4";
import carrousselScreen from "../assets/feautures/carousel.png";
import resto from "../assets/resto.mp4";
import restoScreen from "../assets/feautures/resto.png";
import { FaAngleRight } from "react-icons/fa";
import { MdOutlinePlayCircle } from "react-icons/md";
import { DefaultPlayer } from "react-html5video";
import "react-html5video/dist/styles.css";
import logo from "../assets/logo.png";
import Image from "../components/Image";
import Button from "../components/Button";
import patrimoine from "../assets/feautures/Patrimoine.png";
import EngagementSocial from "../assets/feautures/Engagement Social.png";
import OpicBanner from "../components/OpicBanner";
const Home = () => {
  const [show, setShow] = useState(false);
  const [modelShow, setModelShow] = useState([]);
  const listModels = [
    {
      id: 1,
      name: "Restaurant MAREA",
      desc: "un magnifique restaurant de fruits de mer, créé de A à Z par OPIC ! Grâce à notre service ‘Clés en main’, nous avons transformé un espace vide en un lieu où chaque détail compte.",
      video: resto,
      image: restoScreen,
    },
    {
      id: 2,
      name: "UNICEF",
      desc: "Chez OPIC, nous avons eu l’honneur de transformer le bureau de l’UNICEF en un espace qui incarne leur mission de défendre les droits des enfants. Du balcon spacieux aux espaces de travail modernes et aux couloirs élégants, chaque détail a été conçu avec soin",
      video: UNICEF,
      image: unicefScreen,
    },
    {
      id: 3,
      name: "Carousel Mall",
      desc: "Discover the remarkable collaboration between @opic_maroc and @imkan_maroc , bringing a visionary project to life on Rabat’s stunning coastal road.Witness the dedication, precision, and expertise that make Caroussel Mall a reality.",
      video: carroussel,
      image: carrousselScreen,
    },
  ];
  const features = [
    {
      id: 1,
      name: "Patrimoine & Savoir-Faire Marocain",
      desc: "Découvrez l’essence du Maroc à travers notre section dédiée au Patrimoine & Savoir-Faire Marocain. Plongez dans l’architecture traditionnelle qui allie art et histoire, et laissez-vous inspirer par la richesse de notre héritage.",
      lien: "/patrimoine-projets",
      image: patrimoine,
    },
    {
      id: 2,
      name: "Engagement Social : Projets et Partenariats Solidaires",
      desc: "Notre engagement pour un avenir meilleur se reflète dans nos collaborations avec des organisations sociales et caritatives comme l'UNICEF.",
      lien: "/engagement-social",
      image: EngagementSocial,
    },

  ];
  const filterModels = (id) => {
    const model = listModels.find((item) => item.id === id);
    setModelShow(model);
  };
  return (
    <div>
      <OpicBanner
        image={bg_home}
        desc="Chez Opic, nous relevons les projets les plus difficiles au monde. Nous offrons des solutions expertes et techniques pour réaliser des projets d'ingénierie, d'approvisionnement et de construction (EPC) de manière sécurisée, efficace et rentable pour nos clients à travers le monde."
        title="Nous construisons un monde meilleur"
      />
      <Title title="Caractéristiques" />
      <div className=" sm:px-6 px-2 mt-6  2xl:px-64 lg:px-44  grid  grid-cols-1 md:grid-cols-2   gap-6 lg:gap-10">
        {features.map((item, index) => (
          <div className=" w-full flex gap-3 flex-col group cursor-pointer" key={index}>
            <a href={item.lien}>
              {" "}
              <div className="relative h-[250px] w-full">
                <Image click={false} image={item.image} />
              </div>
              <Button name={item.name} color="main-color" />
            </a>
          </div>
        ))}
      </div>

      <Title title="Projets" />
      {show ? (
        <div
          className={` opacity-0 ${
            show ? " opacity-100" : ""
          } fixed bg-slate-950/90 flex items-center justify-center top-0 left-0 w-full h-full  z-40 p-1 lg:p-10`}
        >
          <div className=" relative  w-fit h-[600px] mt-[60px] p-1 lg:p-10 pt-[43px] bg-custom-blue/85 rounded-md">
            <div
              className=" absolute right-4 bg-red-500 rounded-full  justify-center items-center w-[25px] h-[25px] top-2 cursor-pointer  flex gap-0"
              onClick={() => setShow(false)}
            >
              <span className=" block h-6 rotate-45  w-[1.4px] bg-white"></span>
              <span className=" block h-6 -rotate-45  w-[1.4px] bg-white"></span>{" "}
            </div>
            <DefaultPlayer play loop>
              <source src={modelShow.video} type="video/webm" />
            </DefaultPlayer>
            <h3 className=" text-[1rem] lg:text-[1.2rem] font-normal m-auto w-fit mt-3 text-white">
              {modelShow.name}
            </h3>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className=" py-14  sm:px-6 px-2  2xl:px-44 lg:px-[3rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 gap-3">
        {listModels.map((model, index) => (
          <div key={index} className=" flex flex-col gap-3">
            <div
              onClick={() => {
                setShow(true);
                filterModels(model.id);
              }}
              className=" relative h-[230px] w-full cursor-pointer group"
            >
              <div className=" transition-opacity ease-in-out  duration-300 opacity-0  group-hover:opacity-100  bg-main-color/25 w-full h-full absolute z-10"></div>
              <MdOutlinePlayCircle className=" absolute text-white right-1 bottom-2 z-10 w-[60px] h-[60px] lg:w-[130px] group-hover:scale-110 transition-transform transform duration-300  lg:h-[130px]" />
              <img
                src={model.image}
                alt=""
                className=" absolute h-full w-full"
              />
            </div>
            <h3 className=" flex items-center gap-1 text-[1.2rem] font-semibold text-main-color ">
              {model.name} <FaAngleRight />
            </h3>
            <p>{model.desc}</p>
          </div>
        ))}
      </div>
      <div
        className={` mt-6 flex flex-col h-fit lg:h-[700px] bg-gray-100 gap-6 lg:gap-0 lg:flex-row`}
      >
        <div
          className={`w-[100%] lg:w-[50%] h-full px-2  2xl:pl-44 lg:pl-[3rem] lg:pr-[3rem] sm:px-6 relative mt-4 md:mt-0   flex items-center`}
        >
          <div className=" flex gap-3 flex-col">
            <div>
              <img
                src={logo}
                alt=""
                className=" w-[100px] object-contain lg:w-[150px] h-[40px]  lg:h-[60px]"
              />
            </div>
            <h1 className=" text-[18px] md:text-[30px] font-bold text-black/80">
              QUI SOMMES-NOUS?
            </h1>{" "}
            <div className=" bg-custom-blue h-[0.1px] w-full "></div>
            <p className=" text-justify text-[13px] sm:text-[14px] md:text-[17px] lg:text-[1.125rem] leading-[24px] text-black/90">
              OPIC est une entreprise générale du bâtiment située à RABAT.
              Quelle que soit la nature de votre projet, nous vous proposons des
              solutions techniques adaptées, dans le respect des budgets et des
              délais. <br /> <br /> L’image de l’entreprise se forge sur la
              qualité des réalisations effectuées, reflétant le
              professionnalisme de nos équipes d’exécution, ainsi que notre
              volonté de satisfaire l’ensemble de nos partenaires et clients.{" "}
              <br /> <br /> Nous accompagnons donc les Maîtres d’Ouvrage dans le
              management des opérations de bâtiment depuis la phase
              d’opportunité jusqu’à la gestion de l’exploitation et de la
              maintenance. <br /> <br /> Nous mettons au service de nos clients
              une expertise, une approche innovante et une démarche qualité dans
              les différentes missions que nous réalisons.
            </p>
            <div className=" w-fit">
              <Link
                to="/about"
                className=" bg-custom-blue hover:bg-custom/35 flex items-center justify-center transition-all group duration-500 py-1 px-4 md:py-3 md:px-8"
              >
                <span className=" text-white capitalize text-[15px]  font-bold flex gap-3 items-center group-hover:gap-4 duration-200 transition-all ">
                  Opic À propos <FaChevronRight className="  text-white" />
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className=" w-[100%] h-[450px] lg:w-[50%] lg:h-full relative">
          <img
            src={opicAbout}
            className="  object-cover  w-full h-full"
            alt=""
          />
        </div>
      </div>

      {/* <Test/> */}
    </div>
  );
};

export default Home;
