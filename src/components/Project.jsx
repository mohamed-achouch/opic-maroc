import React from "react";
// import Btn from "./Btn";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Project = ({ project }) => {
    
  return (
    <div>
      <div className={`h-[600px] mb-4 flex flex-col gap-10 lg:gap-0 sm:gap-6 lg:mb-0 ${project.reverse === false ? " lg:flex-row-reverse" : " lg:flex-row  "}`}>
        <div className={`w-[100%] lg:w-[50%] h-[600px] ${project.reverse === false ? " pl-2 pr-2 2xl:pr-44 lg:pr-[3rem] lg:pl-[3rem] " : " pr-2 pl-2 2xl:pl-44 lg:pl-[3rem] lg:pr-[3rem]"} sm:px-6  relative   flex items-center`}>
          <div className="flex gap-3 flex-col">
            <h1 className=" text-[18px] md:text-[30px] font-bold text-[#003d78]">
              {project.name}
            </h1>
            <p className=" text-main-color text-[15px] md:text-[17px]">
              Location: {project.location}
            </p>
            {/* <p className=" text-main-color text-[15px] md:text-[17px]">
              Client: {project.client}
            </p> */}
            <div className=" bg-custom-blue h-[0.1px] w-full "></div>
            <p className=" text-justify text-[13px] sm:text-[14px] md:text-[17px] lg:text-[1.125rem] leading-[24px]">
              {project.description}
            </p>
            {/* <div className=" w-fit">
              <Btn name="Voir Le Projet" lien={project.lien} />
            </div> */}
          </div>
        </div>
        <div className=" w-[100%]  lg:w-[50%] h-[900px] lg:h-[600px] relative">
          <LazyLoadImage src={project.image} className=" absolute w-full h-full object-cover" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Project;
