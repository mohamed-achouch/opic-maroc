import React from "react";
import directors from "../data/directors";
import avatar from "../assets/managerAvatar.png"
import { LazyLoadImage } from "react-lazy-load-image-component";
const ManagerGeneral = () => {
  return (
    <div>
      <div className=" h-[100px] w-full bg-custom-blue"></div>
      <div>
        {directors.map((derector, index) => (
          <div key={index} className=" py-10 relative ">
            <div
              style={{
                clipPath: "polygon(100% 8%, 0 100%, 100% 100%)",
              }}
              className=" absolute z-0 h-full w-[60%] lg:w-[30%] right-0 top-0 bg-gradient-to-r  from-blueFrom to-whiteTo "
            ></div>
            <div className=" px-2 sm:px-6 w-[100%] md:w-[80%] lg:w-[70%] flex-col-reverse lg:flex-row m-auto flex items-start gap-10">
              <div className=" flex-1 flex gap-2 flex-col">
                <h1 className=" text-[28px] font-semibold text-main-color capitalize ">
                  {derector.name}
                </h1>
                <p className=" text-[18px] text-main-color font-bold  ">{derector.postTitle}</p>
                <p className=" text-[#006781] text-[18px]">{derector.titledesc}</p>
                <div className=" h-[1px] w-full bg-custom-blue">

                </div>
                <p className=" leading-[32px] relative z-10	 text-[15px] md:text-[1.125rem]">{derector.desc}</p>
              </div>
              <div>
                <LazyLoadImage className=" relative w-50%] h-[200px] lg:h-[300px]  lg:w-[90%] z-20" src={avatar} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManagerGeneral;
