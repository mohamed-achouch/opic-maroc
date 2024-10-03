import React from "react";
import projet from "../assets/projects.jpg";
import projects from "../data/projects";
import Project from "../components/Project";
import OpicBanner from "../components/OpicBanner";
const Projects = () => {
  return (
    <>
      <OpicBanner image={projet} title="Projets" desc="" />
      <div className=" pt-10 md:pt-2 h-[350px] relative flex flex-col gap-6 lg:gap-0 sm:gap-0  lg:flex-row">
        <div
          style={{
            clipPath: "polygon(100% 8%, 0 100%, 100% 100%)",
          }}
          className=" absolute h-full w-[30%] right-0 top-0 bg-gradient-to-r  from-blueFrom to-whiteTo "
        ></div>
        <div className="w-[100%] lg:w-[70%] h-[350px] sm:px-6 pr-2 pl-2 relative  2xl:pl-44 lg:pl-[3rem] flex items-center">
          <div className="flex gap-3 flex-col">
            <h1 className=" text-[18px] md:text-[30px] font-bold text-[#003d78]">
              Projets d'ingénierie, d'approvisionnement et de construction dans
              le monde entier
            </h1>
            <div className=" bg-custom-blue h-[0.1px] w-full "></div>
            <p className=" text-justify text-[13px] sm:text-[14px] md:text-[17px] lg:text-[1.125rem] leading-[24px]">
              Chez Opic, nous concevons et réalisons les projets les plus
              difficiles au monde. En appliquant une expertise de classe
              mondiale, nous fournissons des solutions professionnelles et
              techniques pour livrer des projets d'ingénierie,
              d'approvisionnement et de construction (EPC) sûrs, bien exécutés
              et rentables à des clients du monde entier.
            </p>
          </div>
        </div>
        <div className="w-[100%] lg:w-[30%] h-[600px] relative"></div>
      </div>

       {
          projects.map((project) => (
            <Project project={project}/>
          ))
       }

      {/* <div className=" h-[600px] flex flex-col gap-6 lg:gap-0 sm:gap-0  lg:flex-row">
        <div className="w-[100%] lg:w-[50%] h-[600px] sm:px-6 pr-2 pl-2 relative  2xl:pl-52 lg:pl-44 flex items-center">
          <div className="flex gap-3 flex-col">
            <h1 className=" text-[18px] md:text-[30px] font-bold text-[#003d78]">
              Villa Privée à RABAT
            </h1>
            <p className=" text-main-color text-[15px] md:text-[17px]">Location: Rabat</p>
            <p className=" text-main-color text-[15px] md:text-[17px]">Client: BENJELLOUNE</p>
            <div className=" bg-custom-blue h-[0.1px] w-full "></div>
            <p className=" text-justify text-[13px] sm:text-[14px] md:text-[17px] lg:text-[1.125rem] leading-[24px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
              quis distinctio at, eum laudantium vitae modi provident ipsa
              blanditiis a consequatur fuga, adipisci doloremque minus
              architecto sequi omnis iusto qui.
            </p>
            <div className=" w-fit">
              <Btn name="Voir Le Projet" lien="" />
            </div>
          </div>
        </div>
        <div className=" w-[100%] lg:w-[50%] h-[600px] relative">
          <img src={villaRabat} className=" absolute w-full h-full" alt="" />
        </div>
      </div>
      <div className=" h-[600px]  sm:gap-30 flex flex-col-reverse gap-6 lg:flex-row">
        <div className="  w-[100%] lg:w-[50%] h-[600px] relative">
          <img src={piscineKech} className=" absolute w-full h-full" alt="" />
        </div>
        <div className="  w-[100%] lg:w-[50%] flex  h-[600px] relative items-center">
          <div className=" ml-0 mt-5 md:mt-0  flex gap-3 flex-col 2xl:pr-52 lg:pr-44 sm:px-6 px-2  ">
            <h1 className=" text-[18px] md:text-[30px] text-[#003d78] font-bold">
              REVETEMENT PISCINE A MARRAKECH
            </h1>
            <p className=" text-main-color text-[15px] md:text-[17px]">Client: PRIVE</p>
            <p className=" text-main-color text-[15px] md:text-[17px]">Location: MARRAKECH </p>
            <div className=" bg-custom-blue h-[0.1px] w-full "></div>
            <p className=" text-[13px] sm:text-[14px] md:text-[17px] lg:text-[1.125rem] leading-[24px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              suscipit obcaecati hic repellat blanditiis corrupti quidem est
              cupiditate eos adipisci et voluptate modi quia dolorum, tenetur
              enim a maiores quas? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Excepturi repellat quia exercitationem eveniet
              quasi? Velit eligendi delectus voluptatibus, minus repellendus
              iure ullam, molestiae totam quod nisi ipsam ipsum, animi eum?
            </p>
            <div className=" flex items-start sm:flex-row sm:items-center flex-col gap-6">
              <Btn name="Voir Le Projet" lien="/" />
            </div>
          </div>
        </div>
      </div>
      <div className=" h-[600px] flex flex-col gap-6 lg:gap-0 sm:gap-0  lg:flex-row">
        <div className="w-[100%] lg:w-[50%] h-[600px] sm:px-6 pr-2 pl-2 relative  2xl:pl-52 lg:pl-44 flex items-center">
          <div className="flex gap-3 mt-5 md:mt-0  flex-col">
            <h1 className=" text-[18px] md:text-[30px] font-bold text-[#003d78]">
              Kitchenette - Hébergement universitaire
            </h1>
            <p className=" text-main-color text-[15px] md:text-[17px]">Client: BORA</p>
            <p className=" text-main-color text-[15px] md:text-[17px]">Location: IFRANE</p>
            <div className=" bg-custom-blue h-[0.1px] w-full "></div>
            <p className=" text-justify text-[13px] sm:text-[14px] md:text-[17px] lg:text-[1.125rem] leading-[24px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
              tempore magnam ex, quae vero repudiandae dignissimos quasi
              laboriosam saepe a aspernatur placeat laborum voluptatibus iure
              maiores assumenda quis tenetur mollitia!
            </p>
            <div className=" w-fit">
              <Btn name="voir le projet" lien="" />
            </div>
          </div>
        </div>
        <div className=" w-[100%] lg:w-[50%] h-[600px] relative">
          <img src={Kitchenette} className=" absolute w-full h-full" alt="" />
        </div>
      </div> */}
     
    </>
  );
};

export default Projects;
