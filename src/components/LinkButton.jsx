import React from "react";
import { Link } from "react-router-dom";

const LinkButton = ({ lien, icon , download ,name }) => {
  return (
    <Link to={`${lien}`} download={`${download === null ?  "" : "" }` } className=" flex w-fit items-center gap-2 group">
      <span className=' font-semibold text-[14px] lg:text-[18px] text-black/80 group-hover:text-main-color relative after:content-[""] after:bg-custom-blue after:h-[.4px] after:w-full after:left-0 after:absolute after:bottom-0'>
        {name}
      </span>
      <span className=" text-custom-blue text-[20px] md:text-[26px] font-semibold ">
        {icon}
      </span>
    </Link>
  );
};

export default LinkButton;
