import React from 'react'
import architecturalBanner from "../assets/services/architectural.jpg" 
import architecturalContnet from "../assets/services/architecturContent.jpg"
import OpicBanner from '../components/OpicBanner'
const Architectural = () => {
  return (
    <div>
        <OpicBanner image={architecturalBanner} title="LOTS ARCHITECTURAUX" desc=""/>
        <div className=" pt-10 md:pt-2 h-[500px] relative flex flex-col gap-6 lg:gap-0 sm:gap-0  lg:flex-row">
        <div
          style={{
            clipPath: "polygon(100% 8%, 0 100%, 100% 100%)",
          }}
          className=" absolute h-full w-[30%] right-0 top-0 bg-gradient-to-r  from-blueFrom to-whiteTo "
        ></div>
        <div className="w-[100%] lg:w-[70%] h-[350px] sm:px-6 pr-2 pl-2 relative  2xl:pl-44 lg:pl-[3rem] flex pt-[100px]">
          <div className="flex gap-3 flex-col">
            <h1 className=" text-[18px] md:text-[30px] font-bold text-[#003d78]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </h1>
            <div className=" bg-custom-blue h-[0.1px] w-full "></div>
            <p className=" text-justify text-[13px] sm:text-[14px] md:text-[17px] lg:text-[1.125rem] leading-[24px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
              cumque impedit dolores natus aliquam, laudantium hic
              exercitationem corporis dolore nobis expedita ea omnis ut ipsa
              nesciunt deleniti! Voluptatum, debitis voluptatem. Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Ipsam dicta cumque
              exercitationem id ut. Odio incidunt, odit ab, quidem, ut corporis
              aperiam magnam ea maiores molestias blanditiis eum earum quia?
            </p>
          </div>
        </div>
        <div className="w-[100%] lg:w-[30%] h-[600px] relative"></div>
      </div>
      <div
        className={` flex flex-col h-fit lg:h-[60vh] bg-gray-100 gap-6 lg:gap-0 lg:flex-row`}
      >
        <div
          className={`w-[100%] lg:w-[50%] h-full px-2  2xl:pl-44 lg:pl-[3rem] lg:pr-[3rem] sm:px-6 relative mt-4 md:mt-0   flex items-center`}
        >
          <div className=" flex gap-3 flex-col">
            <h1 className=" text-[18px] md:text-[30px] font-bold text-black/80">
            Lorem ipsum dolor sit amet consectetur
            </h1>{" "}
            <div className=" bg-custom-blue h-[0.1px] w-full "></div>
            <p className=" text-justify text-[13px] sm:text-[14px] md:text-[17px] lg:text-[1.125rem] leading-[24px] text-black/90">
              <ul className=" flex flex-col gap-2 md:gap-4">
                <li><span className=" text-custom-blue">❑</span>    Faux plafond / BA 13 / AMSTRONG</li>
                <li><span className=" text-custom-blue">❑</span>  Revêtement (Marbre, Céramique, Zellige)</li>
                <li><span className=" text-custom-blue">❑</span>  Menuiserie Bois</li>
                <li><span className=" text-custom-blue">❑</span>  Menuiserie Aluminium / Métallique</li>
                <li><span className=" text-custom-blue">❑</span>  Vitrerie</li>
                <li><span className=" text-custom-blue">❑</span>  Peinture</li>
                <li><span className=" text-custom-blue">❑</span>  Enduits projetés en plâtre</li>
              </ul>
            </p>           
          </div>
        </div>
        <div className=" w-[100%] h-[450px] lg:w-[50%] lg:h-full relative">
          <img
            src={architecturalContnet}
            className="  object-cover  w-full h-full"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default Architectural