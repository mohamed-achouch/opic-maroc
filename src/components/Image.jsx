import React from 'react'
import { FaChevronRight } from "react-icons/fa6";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Image = ({image  , click}) => {
  return (
   <div  className=' h-full w-full absolute'>
     <div className={`relative overflow-hidden group w-full h-full`}>
     <div className=" absolute bg-slate-900/10 h-full w-full z-10"></div> 
       {
         click === false ?  <div className=' hidden group-hover:flex   bg-[#009ae9] absolute z-10 h-full w-40 top-[44%]  items-center -right-[4rem] rotate-45'>
        <span className=' border border-white  w-10 h-10  rounded-full ml-8 flex items-center justify-center '><FaChevronRight className=' text-1xl -rotate-45 text-white'/></span>
          </div> : ''
       }
        <LazyLoadImage key={image.name} placeholderSrc={image} width="100%" height="100%"  src={image} alt={image.name} className='  absolute z-0 w-full h-full'/>
    </div>
   </div>
  )
}

export default Image