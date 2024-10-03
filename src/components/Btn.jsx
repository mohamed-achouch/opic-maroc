import React from 'react'
import { FaChevronRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Btn = ({name , lien}) => {
  return (
    <Link to={`${lien}`} className=' bg-main-color hover:bg-main-color/80 flex items-center justify-center transition-all group duration-500 py-3 px-8'>
          <span className=' text-white font-medium capitalize text-[13px]  flex gap-3 items-center group-hover:gap-4 duration-200 transition-all '>{name} <FaChevronRight className=' text-custom-blue'/></span>         
    </Link>
  )
}

export default Btn