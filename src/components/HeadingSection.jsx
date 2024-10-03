import React from 'react'

const HeadingSection = ({title , content}) => {
  return (
    <div>
         <div className=" pt-10 md:pt-2 h-[350px] relative flex flex-col gap-6 lg:gap-0 sm:gap-0  lg:flex-row">
        <div
          style={{
            clipPath: "polygon(100% 8%, 0 100%, 100% 100%)",
          }}
          className=" absolute h-full w-[30%] right-0 top-0 bg-gradient-to-r  from-blueFrom to-whiteTo "
        ></div>
        <div className="w-[100%] lg:w-[70%] h-[350px] sm:px-6 pr-2 pl-2 relative  2xl:pl-44 lg:pl-[3rem] flex items-center">
          <div className="flex gap-3 flex-col">
            <h1 className=" text-[18px] md:text-[30px] font-bold text-[#003d78]">
              {title}
            </h1>
            <div className=" bg-custom-blue h-[0.1px] w-full "></div>
            <p className=" text-justify text-[13px] sm:text-[14px] md:text-[17px] lg:text-[1.125rem] leading-[24px]">
              {content}
            </p>
          </div>
        </div>
        <div className="w-[100%] lg:w-[30%] h-[600px] relative"></div>
      </div>
    </div>
  )
}

export default HeadingSection