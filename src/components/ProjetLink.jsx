import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const ProjetLink = ({ about }) => {
  return (
    <Link
      to={about.link}
      className=" text-white flex flex-col gap-3 hover:underline  group">
      <div className="  lg:h-[230px] lg:w-[352px] relative overflow-hidden">
        <LazyLoadImage
          className=" absolute w-full h-full   group-hover:scale-105 transition-all duration-500"
          src={about.image}
          alt=""
        />
        <div className=" absolute w-full h-full transition-all duration-500 bg-custom-blue/70 z-10 rotate-45 top-48 -right-80 hidden group-hover:block"></div>
      </div>
      <h1 className=" capitalize text-white text-[16px]">{about.name}</h1>
    </Link>
  );
};

export default ProjetLink;
