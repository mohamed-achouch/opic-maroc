import React from "react";
import { FaChevronRight } from "react-icons/fa";

export const DemandesGénérales = () => {
  return (
    <div>
      <div className=" sm:px-6 px-2  2xl:px-44 lg:px-[3rem] bg-custom-blue w-full flex items-start justify-center">
        <div className=" pt-9 pb-9 flex-col flex gap-3 justify-center items-start">
          <h1 className=" w-fit text-[30px] text-white font-bold">
            Demandes Générales
          </h1>
          <p className="text-white text-justify text-[14px] md:text-[16px] lg:text-[18px]">
            Les investisseurs, les analystes, les médias et les spectateurs des
            webinaires de Opic peuvent poser des questions ici. Voir les boutons
            ci-dessous pour des questions sur d'autres sujets.
          </p>
        </div>
      </div>
      <div className="sm:px-6 px-2  2xl:px-44 lg:px-[3rem]">
        <form
          action=""
          className=" flex flex-col gap-6 my-14"
          autoComplete="off"
        >
          <div className=" flex flex-col gap-6 lg:flex-row w-full lg:gap-5">
            <div className=" flex flex-col gap-2 w-full">
              <label
                htmlFor=""
                className=" w-fit text-main-color font-bold text-[17px] after:content-['*'] after:text-red-700 after:absolute relative after:top-0 after:-right-3"
              >
                {" "}
                First Name
              </label>
              <input
               required
                type="text"
                placeholder="First Name"
                className=" w-full placeholder:font-normal border-main-color outline-none py-2 pl-2 text-[16px] font-bold text-main-color  border-b-[1px]"
              />
            </div>
            <div className=" flex flex-col gap-2 w-full">
              <label
                htmlFor=""
                className=" w-fit text-main-color font-bold text-[17px] after:content-['*'] after:text-red-700 after:absolute relative after:top-0 after:-right-3"
              >
                {" "}
                Last Name
              </label>
              <input
                required
                type="text"
                placeholder="Last Name"
                className="  placeholder:font-normal border-main-color outline-none py-2 pl-2 text-[16px] font-bold text-main-color  border-b-[1px]"
              />
            </div>
          </div>
          <div className=" flex flex-col gap-6 lg:flex-row w-full lg:gap-5">
            <div className=" flex flex-col gap-2 w-full">
              <label
                htmlFor=""
                className=" w-fit text-main-color font-bold text-[17px] after:content-['*'] after:text-red-700 after:absolute relative after:top-0 after:-right-3"
              >
                {" "}
                Country
              </label>
              <input
                type="text"
                required
                placeholder="Country Name"
                className=" placeholder:font-normal w-full border-main-color outline-none py-2 pl-2 text-[16px] font-bold text-main-color  border-b-[1px]"
              />
            </div>
            <div className=" flex flex-col gap-2 w-full">
              <label
                htmlFor=""
                className=" w-fit text-main-color font-bold text-[17px] after:content-['*'] after:text-red-700 after:absolute relative after:top-0 after:-right-3"
              >
                {" "}
                City
              </label>
              <input
                type="text"
                required
                placeholder="City Name"
                className=" placeholder:font-normal w-full border-main-color outline-none py-2 pl-2 text-[16px] font-bold text-main-color  border-b-[1px]"
              />
            </div>
          </div>
          <div className=" flex flex-col gap-6 lg:flex-row w-full lg:gap-5">
            <div className=" flex flex-col gap-2 w-full">
              <label
                htmlFor=""
                className=" w-fit text-main-color font-bold text-[17px] after:content-['*'] after:text-red-700 after:absolute relative after:top-0 after:-right-3"
              >
                {" "}
                Phone
              </label>
              <input
                type="text"
                required
                placeholder="Phone Number"
                className=" placeholder:font-normal w-full border-main-color outline-none py-2 pl-2 text-[16px] font-bold text-main-color  border-b-[1px]"
              />
            </div>
            <div className=" flex flex-col gap-2 w-full">
              <label
                htmlFor=""
                className=" w-fit text-main-color font-bold text-[17px] after:content-['*'] after:text-red-700 after:absolute relative after:top-0 after:-right-3"
              >
                {" "}
                Email
              </label>
              <input
                required
                type="email"
                placeholder="adress@gamil.com"
                className=" placeholder:font-normal w-full border-main-color outline-none py-2 pl-2 text-[16px] font-bold text-main-color  border-b-[1px]"
              />
            </div>
          </div>
          <div className=" flex flex-col gap-6 w-full  lg:gap-6">
            <label
              htmlFor=""
              className=" w-fit text-main-color font-bold text-[17px] after:content-['*'] after:text-red-700 after:absolute relative after:top-0 after:-right-3"
            >
              Message
            </label>
            <textarea
              type="text"
              required
              rows={6}
              placeholder="Message"
              className="  placeholder:font-normal w-full border-main-color outline-none py-1 pl-2 text-[16px] font-bold text-main-color  border-b-[1px]"
            />
          </div>
          <p className="text-[15px] text-gray-400  text-justify md:text-start font-medium w-[100%] md:w-[96%] lg:w-[80%] mb-4">
            Aucune information personnelle ou sensible, y compris les numéros
            d'identification émis par le gouvernement, les données médicales et
            les informations financières, ou tout ce qui est considéré comme des
            données confidentielles ou sensibles, ne doit être inclus dans ce
            formulaire.
          </p>
          <button
            type="submit"
            className="text-white cursor-pointer bg-custom-blue w-fit py-2 px-10 font-normal text-[16px]  capitalize flex gap-3 items-center group-hover:gap-4 duration-200 transition-all "
          >
            Send Message <FaChevronRight />
          </button>
        </form>
      </div>
    </div>
  );
};
