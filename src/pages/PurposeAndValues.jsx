import React from "react";
import banner from "../assets/bannerOpicValues.png";
import vision from "../assets/vesion.webp";
import notreBut from "../assets/notreBut.jpg";
import Title from "../components/Title";
import values from "../data/values";
import Card from "../components/Card";
import OpicBanner from "../components/OpicBanner";
const PurposeAndValues = () => {
  return (
    <section className="  pb-10">
      <OpicBanner
        image={banner}
        title="Purpose & Values"
        desc="La mission, la vision et les valeurs fondamentales de Opic
              constituent la base de notre identité. Ces principes essentiels
              façonnent notre impact mondial et guident la voie que nous suivons
              pour atteindre nos objectifs commerciaux."
      />
      <div className="flex flex-col gap-6  lg:gap-0 mt-10 md:mt-0">
        <div className=" h-[600px] flex flex-col gap-6 lg:gap-0 sm:gap-0  lg:flex-row">
          <div className="w-[100%] lg:w-[50%] h-[600px] sm:px-6 pr-2 pl-2 relative  2xl:pl-44 lg:pl-[3rem] lg:pr-[3rem] flex items-center">
            <div className="flex gap-3 flex-col">
              <h1 className=" text-[18px] md:text-[30px] font-bold text-[#003d78]">
                Notre But
              </h1>
              <div className=" bg-custom-blue h-[0.1px] w-full "></div>
              <p className=" text-justify text-[13px] sm:text-[14px] md:text-[17px] lg:text-[1.125rem] leading-[24px]">
                Notre objectif, construire un monde meilleur, résonne avec notre
                ambition et constitue la base de notre culture. Opic a été
                fondé avec la volonté de créer des structures qui survivraient à
                leur constructeur et de laisser le monde en meilleur état qu'il
                ne l'était auparavant.
              </p>
            </div>
          </div>
          <div className=" w-[100%] lg:w-[50%] h-[858px] object-cover lg:h-[600px] relative">
            <img src={notreBut} className="object-cover absolute w-full h-full" alt="" />
          </div>
        </div>
        <div className=" h-[600px] gap-40  sm:gap-0 flex flex-col-reverse lg:flex-row">
          <div className="  w-[100%] lg:w-[50%] h-[858px] object-cover lg:h-[600px] relative">
            <img src={vision} className=" object-cover absolute w-full h-full" alt="" />
          </div>
          <div className="  w-[100%] lg:w-[50%] flex  h-[600px] relative items-center">
            <div className=" ml-0  flex gap-3 flex-col 2xl:pr-44 lg:pr-[3rem] lg:pl-[3rem] sm:px-6 px-2  ">
              <h1 className=" text-[18px] md:text-[30px] text-[#003d78] font-bold">
                Notre Vision
              </h1>
              <div className=" bg-custom-blue h-[0.1px] w-full "></div>
              <p className=" text-justify text-[13px] sm:text-[14px] md:text-[17px] lg:text-[1.125rem] leading-[24px]">
                En tant que partenaire précieux, nous offrons des solutions
                innovantes et durables qui permettent à tous nos parties
                prenantes de prospérer. Notre vision aligne l'organisation pour
                réussir et souligne un engagement à veiller à ce que nous soyons
                tournés vers l'avenir, axés sur les résultats et viables pour
                les générations futures. Le travail que nous accomplissons, les
                personnes que nous inspirons et les communautés dans lesquelles
                nous investissons alimentent l'innovation et la croissance.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Title title="Nos valeurs fondamentales" />

      <div className=" sm:px-6 px-2  2xl:px-44 lg:px-[3rem]">
        <p className=" sm:px-6 px-2  2xl:px-44 lg:px-[3rem] text-[23] font-semibold text-center">
          Les valeurs fondamentales de Opic agissent comme notre boussole
          comportementale. Nous adhérons à ces principes et ils nous guident
          dans la construction d'un monde meilleur.
        </p>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
          {values.map((item, index) => (
            <div key={index} className=" relative border w-full border-gray-300/80 p-4 flex items-center  sm:items-start flex-col gap-2">
             <div className=" h-[250px] w-full">
                <Card item={item} click={true}/>
             </div>
              <p className=" text-start  text-black ">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PurposeAndValues;
