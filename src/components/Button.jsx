import React from 'react'
import { FaChevronRight } from "react-icons/fa6";

const Button = ({name, color,click ,lien}) => {
  return (
    <div className=' w-fit'>
        <h1 className={`font-semibold text-${color}  capitalize flex items-center lg:justify-start justify-between w-full gap-2 ${!click ? 'group-hover:underline' : ''}`}>{name} <FaChevronRight/></h1>
    </div>
  )
}

export default Button