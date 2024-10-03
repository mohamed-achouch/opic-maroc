import React from 'react'
import Btn from './Btn'
const ServiceSection = ({service}) => {
  return (
    <div className={`h-[600px] flex flex-col gap-6 lg:gap-0 sm:gap-0 ${service.reverse === false ? " lg:flex-row-reverse" : " lg:flex-row "}`}>
        <div className={`w-[100%] lg:w-[50%] h-[600px] ${service.reverse === false ? " pl-2 pr-2 2xl:pr-44 lg:pr-[3rem] lg:pl-[3rem] " : " pr-2 pl-2 2xl:pl-44 lg:pl-[3rem] lg:pr-[3rem]"} sm:px-6  relative   flex items-center`}>
          <div className="flex gap-3 flex-col">
            <h1 className=" text-[18px] md:text-[30px] font-bold text-[#003d78]">
              {service.name}
            </h1> 
            <div className="bg-custom-blue h-[0.1px] w-full "></div>
            <p className=" text-justify text-[13px] sm:text-[14px] md:text-[17px] lg:text-[1.125rem] leading-[24px]">
              {service.desc}
            </p>
            <div className="w-fit">
              <Btn name={service.buttonContent} lien={service.link} />
            </div>
          </div>
        </div>
        <div className=" w-[100%] lg:w-[50%] h-[600px] relative">
            <img src={service.image} className=" absolute w-full h-full" alt="" />
        </div>
      </div>
  )
}

export default ServiceSection