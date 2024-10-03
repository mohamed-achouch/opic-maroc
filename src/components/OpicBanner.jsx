import React from "react";

const OpicBanner = ({ image, title, desc }) => {
  return (
    <div className={` ${ desc ? 'h-[400px] sm:h-[360px] md:h-[560px] ' : 'h-[310px] sm:h-[315px]'} relative  lg:h-[680px] overflow-hidden   md:h-[710px] bg-[#019bea54] md:bg-transparent`}>
      <div className=" absolute h-[260px] w-[96%]  md:w-[90%] lg:w-[90%] md:h-[75%] lg:h-[74%] mt-8 z-10 m-auto left-0 right-0 top-0 bottom-0">
        <img src={image} alt="" className=" object-cover absolute w-full h-full" />
        <h1 className=" z-10 absolute left-4 bottom-3 font-bold text-white text-[16px] sm:text-[22px] md:text-[30px]">
          {title}
        </h1>
        <div className=" absolute bg-slate-900/40 z-0 h-full w-full"></div> 

      </div>
      <div
        style={{ clipPath: "polygon(100% 50%, 0 0, 0 100%)" }}
        className=" hidden md:block bg-[#019bea]  absolute left-0 top-0 w-[300px] h-[520px]"
      ></div>
      <div
        style={{
          clipPath:
            "polygon(25% 0, 100% 0, 100% 50%, 100% 100%, 0 100%, 0 73%)",
        }}
        className=" h-[710px] w-full bg-[#019bea54] relative hidden md:block"
      ></div>
      {desc ? (
        <p className=" mt-4 sm:mt-0 font-medium text-[14px] md:text-[16px] lg:text-[18px] absolute bottom-[5px] sm:px-6 px-2 lg:bottom-[50px]  2xl:px-44 lg:px-[2rem]">
          {desc}
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default OpicBanner;
