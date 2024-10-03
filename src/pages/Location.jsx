import React from "react";
import location from "../assets/loc.avif";
import locationbackGround from "../assets/locations.png"
const Location = () => {
  return (
    <div className="">
      <div className="  bg-custom-blue py-8">
        <div className=" sm:px-6 px-2  2xl:px-52 lg:px-44 ">
          <h2 className=" text-white text-[1.6rem] md:text-[2rem] lg:text-[2.5rem] font-bold leading-[37px]">
            Opic Location
          </h2>
        </div>
      </div>
      <div className=" flex flex-col  lg:flex-row">
        <div className=" sm:pl-6 pl-2 flex items-center py-3 md:py-6 lg:py-0  2xl:pl-52 lg:pl-44 lg:flex-1 bg-slate-500/20" style={{backgroundImage: `url(${locationbackGround})`}}>
          <div className=" flex flex-col gap-4">
            <h3 className=" text-[1rem] md:text-[2rem] lg:text-[2.5rem] font-semibold  leading-[37px] text-main-color">
              Siège social
            </h3>
            <p className=" text-[1.2rem] md:text-[2rem] font-medium">Société Opic</p>
            <div className=" h-[.3px] bg-cyan-300 w-[230px]"></div>
            <h3 className=" font-normal text-[15px] md:text-[17px] lg:text-[20px]">B25, Avenue Mohammed 6, Souissi, <br /> Rabat, Morocco 10000</h3>
            <h3 className=" font-normal text-[15px] md:text-[17px] lg:text-[20px]">Tel: +1.469.398.7000</h3>
            <h3 className=" font-normal text-[15px] md:text-[17px] lg:text-[20px]">Fax: +1.469.398.7255</h3>
          </div>
        </div>
        <div className=" h-[400px] w-full relative lg:w-[50%] lg:h-[500px]">
          <img src={location} alt="" className=" absolute h-full w-full" />
        </div>
      </div>
    </div>
  );
};

export default Location;
