import React from "react";
import img from "../assets/apropos.jpg";
import morocco from "../assets/flag morocco.jpg";
import Image from "../components/Image";
import Title from "../components/Title";
import Button from "../components/Button";
import loc from "../assets/loc.avif";
import { Link } from "react-router-dom";
import { IoIosArrowDropdown } from "react-icons/io";
import direction from "../assets/Direction.webp";
import purpos from "../assets/purpose-and-values.avif";
import LinkButton from "../components/LinkButton";
import { FaChevronRight } from "react-icons/fa";
import Btn from "../components/Btn";
import approches from "../data/approche";
import Card from "../components/Card";
import OpicBanner from "../components/OpicBanner";

const About = () => {
  return (
    <div className="  pb-10">
      <OpicBanner title="Opic A propos" desc="" image={img} />

      <div className=" mb-10 sm:px-6 px-2 md:px-[3rem]  2xl:px-44  flex items-start gap-[30px] flex-col lg:flex-row md:gap-[90px] pt-10">
        <div className="w-[100%]  relative   flex items-center">
          <div className="flex gap-3 flex-col">
            <h1 className=" text-[18px] md:text-[30px] font-bold text-[#003d78]">
              Chez Opic, nous sommes réputés pour mener à bien des mégaprojets
              complexes, de la conception à la réalisation.
            </h1>
            <div className=" bg-custom-blue h-[0.1px] w-full "></div>
            <p className=" text-justify text-[13px] sm:text-[14px] md:text-[17px] lg:text-[1.125rem] leading-[24px]">
              Cette expertise de classe mondiale nous permet de collaborer avec
              nos clients, sur des projets de toutes tailles, pour construire un
              avenir meilleur. Nos plus de 30 000 employés fournissent des
              solutions professionnelles et techniques qui réalisent des projets
              sûrs, bien exécutés et rentables pour des clients du monde entier.
              En 2024, Opic s'est classée au 265ème rang parmi les entreprises
              du Fortune 500. Avec son siège social à Irving, au Texas, nous
              fournissons des services d'ingénierie, d'approvisionnement et de
              construction depuis plus de 110 ans.
            </p>
            <LinkButton
              icon={<IoIosArrowDropdown />}
              lien=""
              download=""
              name="Lisez notre Profil d'Entreprise."
            />
          </div>
        </div>

        <div className=" w-fit">
          <Link to="/location">
            <div className="w-[344px] group">
              <div className="  h-[400px] relative hidden lg:block">
                <Image image={loc} />
              </div>
              <div className=" bg-main-color h-20 pl-2 lg:pl-3 w-full justify-between  flex items-center lg:justify-start">
                <Button name="Locations" color="white" />
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-6  lg:gap-0 mt-10 md:mt-0">
        <div className=" h-[600px] flex flex-col gap-6 lg:gap-0 sm:gap-0  lg:flex-row">
          <div className="w-[100%] lg:w-[50%] h-[600px] lg:pr-[3rem] lg:pl-[3rem] sm:px-6 pr-2 pl-2 relative  2xl:pl-52 flex items-center">
            <div className="flex gap-3 flex-col">
              <h1 className=" text-[18px] md:text-[30px] font-bold text-[#003d78]">
                Mission et Valeurs
              </h1>
              <div className=" bg-custom-blue h-[0.1px] w-full "></div>
              <p className=" text-justify text-[13px] sm:text-[14px] md:text-[17px] lg:text-[1.125rem] leading-[24px]">
                La mission de Opic, Nous construisons un monde meilleur,
                reflète notre ambition et forme la base de notre culture. <br />{" "}
                <br />
                Nos valeurs fondamentales – la sécurité, l'intégrité, le travail
                d'équipe et l'excellence – servent de boussole comportementale.
                Nous adhérons à ces valeurs, et nos employés les incarnent
                chaque jour.
              </p>
              <LinkButton
                icon={<FaChevronRight />}
                lien="/proposeAndeValue"
                download=""
                name="Découvrez notre mission et nos valeurs."
              />
            </div>
          </div>
          <div className="bg-green-400 w-[100%] lg:w-[50%] h-[858px] object-cover lg:h-[600px]  relative">
            <img src={purpos} className=" absolute w-full h-full" alt="" />
          </div>
        </div>
        <div className=" h-[600px] gap-5  lg:gap-0  sm:gap-0 flex flex-col-reverse lg:flex-row">
          <div className=" bg-green-400 w-[100%] lg:w-[50%] h-[858px] object-cover lg:h-[600px] relative">
            <img src={direction} className=" absolute w-full h-full" alt=" Nous sommes guidés par un conseil d'administration indépendant
                qui est responsable devant l'organisation et représente les
                intérêts des actionnaires" />
          </div>
          <div className="  w-[100%] lg:w-[50%] flex  h-[600px] relative items-center">
            <div className=" ml-0  flex gap-3 flex-col 2xl:pr-52 lg:pr-[3rem] lg:pl-[3rem] sm:px-6 px-2  ">
              <h1 className=" text-[18px] md:text-[30px] text-[#003d78] font-bold">
                Direction
              </h1>
              <div className=" bg-custom-blue h-[0.1px] w-full "></div>
              <p className=" text-[13px] sm:text-[14px] md:text-[17px] lg:text-[1.125rem] leading-[24px]">
                Nous sommes guidés par un conseil d'administration indépendant
                qui est responsable devant l'organisation et représente les
                intérêts des actionnaires. En parallèle, l'équipe de direction
                de Opic est dédiée à notre mission de construire un monde
                meilleur, et elle s'engage pleinement envers nos clients,
                employés et parties prenantes.
              </p>
              <div className=" flex items-start sm:flex-row sm:items-center flex-col gap-6">
                <Btn name="Directeur General" lien="/administration" />
                <Btn name="Équipe de direction" lien="/team-management" />
              </div>
              <LinkButton
                name="Regardez des vidéos de l'équipe de direction de Opic."
                icon={<FaChevronRight />}
                lien="/administration"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <Title title="Notre Approche" />
        <p className=" sm:px-6 px-2  2xl:px-44 md:px-[3rem] text-[23] font-semibold text-center">
          Chez Opic, nous sommes dédiés à avoir un impact positif sur le monde,
          les employés et les parties prenantes. Nous y parvenons grâce à notre
          leadership en matière de durabilité, à notre gestion environnementale
          et à nos engagements communautaires. Nous nous engageons également à
          mettre en œuvre les processus, les normes et la gouvernance
          nécessaires pour garantir un environnement honnête, sûr et inclusif.
        </p>

        <div className=" sm:px-6 px-2  2xl:px-44 lg:px-[3rem] mt-10">
          <div className=" grid w-full  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-10">
            {approches.map((approch, index) => (
              <div className=" h-[240px]">
                <Card key={index} color="main-color" item={approch} />
              </div>


            ))}
          </div>
        </div>
      </div>
      <div className=" px-14 py-6 mt-6 m-auto  w-fit">
        <Btn lien="/approche" name="approche"/>
      </div>
      <div>
        <Title title="Investisseurs et Médias" />
        <div className=" sm:px-6 px-2 mt-6  2xl:px-52 lg:px-44  flex flex-col lg:flex-row gap-6 lg:gap-10">
          <div className=" w-full flex gap-3 flex-col group cursor-pointer">
            <div className="relative h-[250px] w-full">
              <Image click= {false} image={morocco} />
            </div>
            <Button
              name="Relations avec les Investisseurs"
              color="main-color"
            />
          </div>
          <div className=" w-full flex gap-3 flex-col group cursor-pointer">
            <div className="relative h-[250px] w-full">
              <Image image={morocco}  click={false}/>
            </div>
            <Button name="Salle de Presse" color="main-color" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
