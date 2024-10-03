import React from "react";
import Image from "./Image";
import Button from "./Button";
import { Link } from "react-router-dom";
const Card = ({ item ,color ,click}) => {
  return (
    <Link to={item.lien ? item.lien : ""} className={` group-hover:scale-150 h-full w-full ${click === true ? ' cursor-default' : ' cursor-pointer'}`}> 
      <div className=" group transition-all duration-500 ease-in-out w-full h-full flex flex-col gap-3">
      <div className=" relative h-full ">
        <Image image={item.image}  click={click}/>
      </div>
      <Button name={item.name} color={color} click={click} />
    </div>
    </Link>
  );
};

export default Card;
