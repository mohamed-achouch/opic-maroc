import React from "react";

export const Banner = ({ image, title,desc }) => {
  return (
    <section>
      <div className={`relative md:h-[600px] ${desc === "" ? 'h-[300px]' : 'h-[435px]'} lg:h-[100vh] bg-[#c5dbf7] md:bg-inherit overflow-hidden`}>
        <div
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className={`w-[98%] sm:w-[96%] lg:w-[90%] bg-slate-400 absolute h-[200px] sm:h-[400px] md:h-[530px] ${desc === "" ? '-mt-[22px]' : '-mt-[72px]'} sm:mt-[-100px] md:mt-[-90px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 `}
        >
           <div className=" absolute bg-slate-900/50 h-full w-full"></div> 
          <h2 className="h-0 absolute  lg:left-14 sm:left-2 -bottom-2 font-bold  sm:bottom-[2.5rem] md:bottom-[3.5rem]  text-[#141517] sm:text-white text-[16px] sm:text-[22px] md:text-[30px] z-10 font-300 sm:font-bold">
            {title}
          </h2>
          {/* <div className="  bg-main-color/60  z-10 h-full w-full hidden sm:block"></div> */}
        </div>
        <div
          style={{ clipPath: "polygon(100% 50%, 0 0, 0 100%)" }}
          className=" hidden md:block bg-[#019bea]  absolute left-0 top-0 w-[300px] h-[89vh]"
        ></div>
        <div
          style={{
            clipPath:
              "polygon(25% 0, 100% 0, 100% 50%, 100% 100%, 0 100%, 0 73%)",
          }}
          className=" h-[90vh] w-full bg-[#019bea54] relative hidden md:block"
        >          
        </div>
        <div className="">
            <p className=" font-medium text-[14px] md:text-[16px] lg:text-[18px]  sm:px-6 px-2 lg:bottom-[60px] top-[18rem] sm:top-[20.4rem] text-justify  2xl:px-44 lg:px-[3rem] absolute  md:top-[30rem]  lg:top-[36rem]  left-0">
              {desc}
            </p>
          </div>
      </div>

    </section>
  );
};
