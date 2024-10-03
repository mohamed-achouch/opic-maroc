import React from "react";
import logo from "../assets/footer-logo.png";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { LiaAutoprefixer } from "react-icons/lia";

const Footer = () => {
  return (
    <footer className="bg-custom-blue py-10 sm:px-6 px-2  2xl:px-44 lg:px-[3rem]">
      <div>
        <div className=" flex items-center flex-col-reverse gap-4 justify-center lg:flex-row lg:items-start  ">
          <div className=" hidden lg:flex  flex-col gap-2">
            <Link to="/">
              <img src={logo} alt="" height={70} width={70} />
            </Link>
            <p className=" text-white text-[14px] md:text-[16px] w-[400px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              autem, culpa ipsam repellat,
            </p>
          </div>
          <ul className=" flex flex-1 flex-wrap gap-3  justify-center lg:justify-start ">
            <li className=" text-white hover:text-custom-yelow text-[14px] lg:text-[16px] hover:underline transition-all duration-300 font-meduim">
              <a href="/about">À propos</a>
            </li>           
            <li className=" text-white  hover:text-custom-yelow text-[14px] lg:text-[16px] hover:underline transition-all duration-300 font-meduim">
              <a href="/services">Services et expertises</a>
            </li>
            <li className=" text-white  hover:text-custom-yelow text-[14px] lg:text-[16px] hover:underline transition-all duration-300 font-meduim">
              <a href="/location">Localisation</a>
            </li>
            <li className=" text-white  hover:text-custom-yelow text-[14px] lg:text-[16px] hover:underline transition-all duration-300 font-meduim">
              <a href="/location">lorem lorem</a>
            </li>
            <li className=" text-white  hover:text-custom-yelow text-[14px] lg:text-[16px] hover:underline transition-all duration-300 font-meduim">
              <a href="/location">lorem lorem</a>
            </li>
            <li className=" text-white  hover:text-custom-yelow text-[14px] lg:text-[16px] hover:underline transition-all duration-300 font-meduim">
              <a href="/location">lorem lorem</a>
            </li>
            <li className=" text-white  hover:text-custom-yelow text-[14px] lg:text-[16px] hover:underline transition-all duration-300 font-meduim">
              <a href="/location">lorem lorem</a>
            </li>
            <li className=" text-white  hover:text-custom-yelow text-[14px] lg:text-[16px] hover:underline transition-all duration-300 font-meduim">
              <a href="/location">lorem lorem</a>
            </li>
            
          </ul>
          <ul className=" flex items-start gap-2">
            <a
              href="/"
              className=" border rounded-full hover:border-main-color duration-300 transition-all hover:text-main-color text-teal-50 w-6 text-[12px] h-6 flex items-center justify-center"
            >
              <li>
                <FaFacebook />
              </li>
            </a>
            <a
              href="https://www.instagram.com/opic_maroc/" target="_balanc"
              className=" border rounded-full hover:border-main-color duration-300 transition-all hover:text-main-color text-teal-50 w-6 text-[12px] h-6 flex items-center justify-center"
            >
              <li>
                <FaInstagram />
              </li>
            </a>
            <a
              href="/"
              className=" border rounded-full hover:border-main-color duration-300 transition-all hover:text-main-color text-teal-50 w-6 text-[12px] h-6 flex items-center justify-center"
            >
              <li>
                <FaLinkedin />
              </li>
            </a>
            <a
              href="/"
              className=" border rounded-full hover:border-main-color duration-300 transition-all hover:text-main-color text-teal-50 w-6 text-[12px] h-6 flex items-center justify-center"
            >
              <li>
                <FaYoutube />
              </li>
            </a>
          </ul>
        </div>
        <div className=" h-[.4px] mt-[30px] bg-slate-300 w-full"></div>
        <div className=" flex flex-col gap-2 lg:justify-between  items-center lg:flex-row lg:items-center">
          <ul className=" flex items-center gap-4 flex-wrap mt-[15px] justify-center lg:justify-start">
            <li className=" text-[14px]  md:text-[16px] text-white font-medium">
            © 2024 Opic. Tous droits réservés.
            </li>
            <li className=" text-[14px]  md:text-[16px] text-white before:content-[''] before:h-full relative before:absolute before:top-0 before:-left-2 font-medium before:w-[.2px] before:bg-white">
            Marques déposées
            </li>
            <li className=" text-[14px]  md:text-[16px] text-white before:content-[''] before:h-full relative before:absolute before:top-0 before:-left-2 font-medium before:w-[.2px] before:bg-white">
            Politique de confidentialité
            </li>
            <li className=" text-[14px]  md:text-[16px] text-white before:content-[''] before:h-full relative before:absolute before:top-0 before:-left-2 font-medium before:w-[.2px] before:bg-white">
            Politique relative aux cookies
            </li>
          </ul>
          <span
            onClick={() => window.scroll(0, 0)}
            className=" cursor-pointer text-[14px] hover:text-custom-yelow text-white font-medium flex items-center mt-[15px] lg:mt-0 gap-1"
          >
            Back To Top <LiaAutoprefixer />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
