import React from "react";
import approche from "../assets/opic1.jpg";
import archi from "../assets/archi.jpg";
import { IoIosArrowDropdown } from "react-icons/io";
import { GoChevronRight } from "react-icons/go";
import LinkButton from "../components/LinkButton";
import pont from "../assets/pont.jpg";
import relations from "../assets/CommunityRelations.jpg";
import Btn from "../components/Btn";
import safety from "../assets/HealthSafetyEnvironmental.jpg";
import Inclusion from "../assets/inclusion.avif";
import OpicBanner from "../components/OpicBanner";

const Approche = () => {
  return (
    <div className="">
      <OpicBanner image={approche} title="Approche" desc="" />
      <div className=" h-[600px] flex flex-col gap-6 lg:gap-0 sm:gap-0  lg:flex-row">
        <div className="w-[100%] lg:w-[70%] h-[600px] sm:px-6 pr-2 pl-2 relative  2xl:pl-44 lg:pl-[3rem] flex items-center">
          <div className="flex gap-3 flex-col">
            <h1 className=" text-[18px] md:text-[30px] font-bold text-[#003d78]">
              Principes Directeurs Fondés sur la Durabilité
            </h1>
            <div className=" bg-custom-blue h-[0.1px] w-full "></div>
            <p className=" text-justify text-[13px] sm:text-[14px] md:text-[17px] lg:text-[1.125rem] leading-[24px]">
              Chez Opic, le leadership en
              matière de durabilité est plus qu'une responsabilité ; c'est un
              privilège. Notre charte de durabilité envisage de répondre aux
              besoins de nos clients tout en menant nos activités de manière
              socialement, économiquement et écologiquement responsable. <br />{" "}
              <br /> Cette approche profite aux générations actuelles et
              futures, créant ainsi de la valeur pour toutes les parties
              prenantes. Chaque jour, nous aidons nos clients à protéger
              l'environnement, à économiser l'énergie, à protéger des vies et à
              renforcer les économies et les structures sociales de nos
              communautés.
            </p>
            <LinkButton
              icon={<IoIosArrowDropdown />}
              lien="/"
              download=""
              name="Lisez notre Politique de Durabilité."
            />
            <LinkButton
              icon={<GoChevronRight />}
              lien="/"
              download=""
              name="Découvrez notre rapport d'entreprise."
            />
          </div>
        </div>
        <div className="w-[100%] lg:w-[30%] h-[600px] relative"></div>
      </div>
      <div className=" h-[600px]  sm:gap-30 flex flex-col-reverse lg:flex-row">
        <div className="  w-[100%] lg:w-[50%] h-[600px] relative">
          <img src={relations} className=" absolute w-full h-full" alt="" />
        </div>
        <div className="  w-[100%] lg:w-[50%] flex  h-[600px] relative items-center">
          <div className=" ml-0  flex gap-3 flex-col 2xl:pr-44 lg:pr-[3rem] lg:pl-[3rem] sm:px-6 px-2  ">
            <h1 className=" text-[18px] md:text-[30px] text-[#003d78] font-bold">
              Relations avec la communauté
            </h1>
            <div className=" bg-custom-blue h-[0.1px] w-full "></div>
            <p className=" text-[13px] sm:text-[14px] md:text-[17px] lg:text-[1.125rem] leading-[24px]">
              Nous sommes guidés par un conseil d'administration indépendant qui
              est responsable devant l'organisation et représente les intérêts
              des actionnaires. Dans le même temps, l'équipe de direction d'Opic
              est consacrée à notre mission de construire un monde meilleur et
              est pleinement engagée envers nos clients, nos employés et nos
              parties prenantes.
            </p>
            <div className=" flex items-start sm:flex-row sm:items-center flex-col gap-6">
              <Btn name="Relations avec la communauté" lien="/administration" />
            </div>
          </div>
        </div>
      </div>
      <div className=" h-[600px] flex flex-col gap-6 lg:gap-0 sm:gap-0  lg:flex-row">
        <div className="w-[100%] lg:w-[50%] h-[600px] sm:px-6 pr-2 pl-2 relative  2xl:pl-44 lg:pl-[3rem] lg:pr-[3rem] flex items-center">
          <div className="flex gap-3 flex-col">
            <h1 className=" text-[18px] md:text-[30px] font-bold text-[#003d78]">
              Conformité et Éthique
            </h1>
            <div className=" bg-custom-blue h-[0.1px] w-full "></div>
            <p className=" text-justify text-[13px] sm:text-[14px] md:text-[17px] lg:text-[1.125rem] leading-[24px]">
              Opic s'efforce d'aller au-delà de la conformité aux lois et
              réglementations, en abordant les questions d'éthique de manière
              proactive. <br />
              Nous améliorons et renforçons continuellement notre programme de
              conformité et d'éthique en surveillant les risques émergents et en
              établissant des références des meilleures pratiques dans notre
              entreprise, notre industrie et la communauté mondiale des
              affaires.
            </p>
            <div className=" w-fit">
              <Btn name="Conformité et Éthique" lien="" />
            </div>
          </div>
        </div>
        <div className=" w-[100%] lg:w-[50%] h-[600px] relative">
          <img src={archi} className=" absolute w-full h-full" alt="" />
        </div>
      </div>
      <div className=" h-[600px]  sm:gap-30 flex flex-col-reverse lg:flex-row">
        <div className="  w-[100%] lg:w-[50%] h-[600px] relative">
          <img src={pont} className=" absolute w-full h-full" alt="" />
        </div>
        <div className="  w-[100%] lg:w-[50%] flex  h-[600px] relative items-center">
          <div className=" ml-0  flex gap-3 flex-col 2xl:pr-44 lg:pr-[3rem] lg:pl-[3rem] sm:px-6 px-2  ">
            <h1 className=" text-[18px] md:text-[30px] text-[#003d78] font-bold">
              Gouvernance
            </h1>
            <div className=" bg-custom-blue h-[0.1px] w-full "></div>
            <p className=" text-[13px] sm:text-[14px] md:text-[17px] lg:text-[1.125rem] leading-[24px]">
              De bonnes normes de gouvernance d'entreprise et un leadership
              solide nous aident à mettre en œuvre notre stratégie de durabilité
              dans l'ensemble de l'entreprise, à gérer les processus de
              définition des objectifs et de reporting, à renforcer les
              relations avec les parties prenantes et à garantir une
              transparence et une responsabilité globales.
            </p>
            <div className=" flex items-start sm:flex-row sm:items-center flex-col gap-6">
              <Btn name="Gouvernance" lien="/administration" />
            </div>
          </div>
        </div>
      </div>
      <div className=" h-[600px] flex flex-col gap-6 lg:gap-0 sm:gap-0  lg:flex-row">
        <div className="w-[100%] lg:w-[50%] h-[600px] sm:px-6 pr-2 pl-2 relative  2xl:pl-44 lg:pl-[3rem] lg:pr-[3rem] flex items-center">
          <div className="flex gap-3 flex-col">
            <h1 className=" text-[18px] md:text-[30px] font-bold text-[#003d78]">
              Santé, Sécurité & Environnement
            </h1>
            <div className=" bg-custom-blue h-[0.1px] w-full "></div>
            <p className=" text-justify text-[13px] sm:text-[14px] md:text-[17px] lg:text-[1.125rem] leading-[24px]">
              Nous prenons soin des personnes qui travaillent sur nos projets et
              dans nos bureaux, ainsi que des communautés et de l'environnement
              environnants, non seulement parce que c'est la chose à faire, mais
              aussi parce que c'est essentiel pour atteindre l'excellence pour
              nos clients.
            </p>
            <div className=" w-fit">
              <Btn name="Santé, Sécurité & Environnement" lien="/" />
            </div>
          </div>
        </div>
        <div className=" w-[100%] lg:w-[50%] h-[600px] relative">
          <img src={safety} className=" absolute w-full h-full" alt="" />
        </div>
      </div>
      <div className=" h-[600px]  sm:gap-30 flex flex-col-reverse lg:flex-row">
        <div className="  w-[100%] lg:w-[50%] h-[600px] relative">
          <img src={Inclusion} className=" absolute w-full h-full" alt="" />
        </div>
        <div className="  w-[100%] lg:w-[50%] flex  h-[600px] relative items-center">
          <div className=" ml-0  flex gap-3 flex-col 2xl:pr-44 lg:pr-[3rem] lg:pl-[3rem] sm:px-6 px-2  ">
            <h1 className=" text-[18px] md:text-[30px] text-[#003d78] font-bold">
              Inclusion
            </h1>
            <div className=" bg-custom-blue h-[0.1px] w-full "></div>
            <p className=" text-[13px] sm:text-[14px] md:text-[17px] lg:text-[1.125rem] leading-[24px]">
              De bonnes normes de gouvernance d'entreprise et un leadership
              solide nous aident à mettre en œuvre notre stratégie de durabilité
              dans l'ensemble de l'entreprise, à gérer les processus de
              définition des objectifs et de reporting, à renforcer les
              relations avec les parties prenantes et à garantir une
              transparence et une responsabilité globales.
            </p>
            <div className=" flex items-start sm:flex-row sm:items-center flex-col gap-6">
              <Btn name="Inclusion" lien="/administration" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approche;
