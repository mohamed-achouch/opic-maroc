import React from "react";
import { FaAngleRight } from "react-icons/fa6";

const Director = ({ director }) => {
  return (
      <div className=" hover:shadow-lg hover:shadow-black/15 relative cursor-pointer flex flex-col gap-4 items-center px-8 overflow-hidden py-6 group">
        <img src={director.image} alt="" />
        <div className=" text-center">
          <h2 className=" group-hover:underline text-[24px] font-semibold text-main-color">{director.name}</h2>
          <p className=" text-[16px] text-blue-900 font-medium ">{director.postTitle}</p>
        </div>
        <h3 className=" text-main-color font-medium text-[14px]  text-center">{director.titledesc}</h3>
        <span href="/" className=" capitalize underline text-custom-blue">
          voir plus
        </span>

                <div className=" bg-custom-blue/80  w-40 h-52 absolute -right-20 -bottom-24 transition-all duration-300 rotate-45 hidden group-hover:block">
                    <span className=" border border-emerald-50 w-10 h-10  rounded-full absolute left-5 bottom-20 flex items-center justify-center rotate-[316deg] text-wrap"><FaAngleRight className=" text-white"/></span>
                </div>
      </div>
  );
};

export default Director;
