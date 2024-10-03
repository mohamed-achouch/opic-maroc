import React, { useState } from "react";
import logo from "../assets/opic-logo.png";
import { Link, NavLink } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ProjetLink from "./ProjetLink";
import about from "../data/about-menu";
import { FaChevronRight } from "react-icons/fa6";
import { AiOutlineMenu } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import Button from "./Button";
import approches from "../data/approche";
import servicesMenu from "../data/servicesMenu";

export const Header = () => {
  const [menuText, setMenuText] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [aboutSlide, setAboutSlide] = useState(false);
  const [overviewAbout, setOverviewAbout] = useState(false);
  const [leaderSlide, setLeaderSlide] = useState(false);

  const handleFalse = () => {
    setAboutSlide(false);
    setIsOpen(false);
    setOverviewAbout(false);
    setLeaderSlide(false);
    setMenuText("");
  };
  
  return (
    <div>
      <header
        className=" sm:px-6 px-2  2xl:px-44 lg:px-[3rem] py-5 shadow drop-shadow-md  w-full bg-white z-20"       
      >
        <nav className=" flex justify-between items-center ">
          <div>
            <Link to="/" className=" block w-[35px] h-[35px] sm:w-[40px] msm:h-[40px]  md:w-[50px] md:h-[50px] relative">
              <img
                src={logo}
                alt=""
                className=" object-fill w-[100%] h-[100%] absolute"
                onClick={() => handleFalse()}
              />
            </Link>
          </div>
          <div className="  items-center hidden lg:flex lg:gap-[50px] xl:gap-[80px] 2xl:gap-[100px]">
            <ul className=" flex items-center gap-8">
              <li
                className={`${
                  menuText === "about"
                    ? " text-main-color before:block after:block after:bg-custom-blue after:w-full"
                    : "before:hidden"
                } cursor-pointer text-[16px] relative font-semibold  px-2  animation-all   text-custom-blue after:content-[''] after:w-0  after:absolute after:h-1 hover:after:w-full   after:bg-custom-yelow after:duration-300 after:transition-all after:top-[24px]  transition-all  ease-out duration-500 after:left-0 before:content-[''] before:h-6 before:w-6   before:bg-custom-blue before:rotate-45 before:absolute before:left-[50%] before:bottom-0 before:top-[47px] before:translate-x-[-50%]`}
                onClick={() => {
                  menuText === "about" ? setMenuText("") : setMenuText("about");
                }}
              >
                À propos
              </li>
              <li
                className={`${
                  menuText === "service"
                    ? " text-main-color before:block after:block after:bg-custom-blue after:w-full"
                    : "before:hidden"
                }  cursor-pointer text-[16px] relative font-semibold  px-2   text-custom-blue after:content-[''] after:w-0  after:absolute after:h-1 hover:after:w-full   after:bg-custom-yelow after:duration-300 after:transition-all after:top-[24px]  transition  ease-out duration-500 after:left-0 before:content-[''] before:h-6 before:w-6   before:bg-custom-blue before:rotate-45 before:absolute before:left-[50%] before:bottom-0 before:top-[47px] before:translate-x-[-50%]`}
                onClick={() => {
                  menuText === "service"
                    ? setMenuText("")
                    : setMenuText("service");
                }}
              >
               Nos Services
              </li>
              <li
                className={`${
                  menuText === "c"
                    ? " text-main-color before:block after:block after:bg-custom-blue after:w-full"
                    : "before:hidden"
                }  cursor-pointer text-[16px] relative font-semibold  px-2   text-custom-blue after:content-[''] after:w-0  after:absolute after:h-1 hover:after:w-full   after:bg-custom-yelow after:duration-300 after:transition-all after:top-[24px]  transition  ease-out duration-500 after:left-0 before:content-[''] before:h-6 before:w-6   before:bg-custom-blue before:rotate-45 before:absolute before:left-[50%] before:bottom-0 before:top-[35px] before:translate-x-[-50%]`}
                onClick={() => {
                  menuText === "c" ? setMenuText("") : setMenuText("");
                }}
              >
                <Link to="/projects">Nos Projets</Link>
              </li>
              <li
                className={`${
                  menuText === "c"
                    ? " text-main-color before:block after:block after:bg-custom-blue after:w-full"
                    : "before:hidden"
                }  cursor-pointer text-[16px] relative font-semibold  px-2   text-custom-blue after:content-[''] after:w-0  after:absolute after:h-1 hover:after:w-full   after:bg-custom-yelow after:duration-300 after:transition-all after:top-[24px]  transition  ease-out duration-500 after:left-0 before:content-[''] before:h-6 before:w-6   before:bg-custom-blue before:rotate-45 before:absolute before:left-[50%] before:bottom-0 before:top-[35px] before:translate-x-[-50%]`}
                onClick={() => {
                  menuText === "c" ? setMenuText("") : setMenuText("");
                }}
              >
                <Link to="/contacter-nous"> Contacter Nous</Link>
              </li>
              <li>
                <Link to="/demandes-generales">
                  <div className=" p-[10px] flex items-center justify-center border border-custom-blue hover:bg-custom-blue duration-500 hover:text-white text-custom-blue rounded-full">
                    <MdEmail />
                  </div>
                </Link>
              </li>
            </ul>           
          </div>
          <span
            className=" lg:hidden text-[25px] lg:text-[30px] text-custom-blue cursor-pointer"
            onClick={() => {isOpen ?  handleFalse() : setIsOpen(true)}}
          >
            {isOpen ? (
              <MdCancel />
            ) : (
              // <div>
              //   <span className=" h-20 w-1 bg-custom-blue relative"></span>
              //   <span className=" h-20 w-1 bg-custom-blue relative"></span>
              // </div>
              <AiOutlineMenu />
            )}
          </span>
        </nav>
      </header>
      {
        // Forma Mobile and tablet
        isOpen ? (
          <>
            <div
              className={`${
                isOpen ? "h-full" : "h-0"
              }  top-[75px] z-20  w-[100%] pt-4 sm:px-6 px-2  bg-white absolute left-0 transition duration-500 ease-in-out`}
            >
              <ul className=" flex flex-col gap-3">
                <li
                  className=" w-full flex justify-between cursor-pointer text-main-color py-2"
                  onClick={() => setAboutSlide(!aboutSlide)}
                >
                  <span>À propos</span> <FaChevronRight />
                </li>
                <li className=" w-full flex justify-between cursor-pointer text-main-color py-2">
                <Link
                    to="/services"
                    className="text-main-color py-2 font-bold"
                    onClick={() => handleFalse()}
                  >
                    Nos Services
                  </Link>
                </li>
                <li className=" w-full flex justify-between cursor-pointer text-main-color py-2">
                  <Link
                    to="/projects"
                    className="text-main-color py-2 font-bold"
                    onClick={() => handleFalse()}
                  >
                    Nos Projets
                  </Link>
                </li>
                <li className=" w-full flex justify-between cursor-pointer text-main-color py-2">
                  <Link
                    to="/contacter-nous"
                    className="text-main-color py-2 font-bold"
                    onClick={() => handleFalse()}
                  >
                    Contacter Nous
                  </Link>
                </li>
                <li className=" w-full flex justify-between cursor-pointer text-main-color py-2">
                  <div className=" flex items-center gap-3">
                    <div>
                      <Link
                        onClick={() => handleFalse()}
                        to="/demandes-generales"
                      >
                        <div className=" p-[10px] flex items-center justify-center border border-custom-blue hover:bg-custom-blue duration-500 hover:text-white text-custom-blue rounded-full">
                          <MdEmail />
                        </div>
                      </Link>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            {/* Slide About */}
            <div
              className={` w-0 transition-all duration-300 ease-in-out infinite bg-white overflow-hidden   absolute top-[82px] right-0   pt-4 sm:px-6 px-2 h-full ${
                aboutSlide
                  ? "w-[100%] px-2 transition-all duration-300  z-20  "
                  : " transition-all duration-300 px-0 w-0 "
              }`}
            >
              <span
                className="w-fit flex justify-between items-center gap-2 cursor-pointer text-main-color py-2 "
                onClick={() => setAboutSlide(!aboutSlide)}
              >
                <FaChevronLeft /> Back{" "}
              </span>
              <h3
                className="text-main-color py-2 font-bold "
                onClick={() => handleFalse()}
              >
                <Link to="/about">Opic À propos</Link>
              </h3>
              <ul className=" flex flex-col gap-3">
                <li className=" w-full flex justify-between cursor-pointer text-main-color py-2 border-t">
                  <span
                    onClick={() => {
                      setAboutSlide(!aboutSlide);
                      setOverviewAbout(!overviewAbout);
                    }}
                    className=" flex items-center gap-1"
                  >
                    Vue d'ensemble de l'entreprise <FaChevronRight />
                  </span>
                </li>
                <li className=" w-fit items-center flex justify-between cursor-pointer text-main-color py-2 border-t">
                  <span
                    onClick={() => {
                      setAboutSlide(!aboutSlide);
                      setLeaderSlide(!leaderSlide);
                    }}
                    className=" w-fit flex items-center gap-1"
                  >
                    Leadership
                  </span>
                  <FaChevronRight />
                </li>
              </ul>
            </div>
            {/* Slide  About  Overview*/}
            <div
              className={` w-0 transition-all duration-300 ease-in-out infinite bg-white overflow-hidden   absolute top-[82px] right-0   pt-4 sm:px-6 px-2 h-full ${
                overviewAbout
                  ? "w-[100%] px-2 transition-all duration-300  z-20  "
                  : " transition-all duration-300 px-0 w-0 "
              }`}
            >
              <span
                className="w-fit flex justify-between items-center gap-2 cursor-pointer text-main-color py-2 "
                onClick={() => {
                  setOverviewAbout(!overviewAbout);
                  setAboutSlide(!aboutSlide);
                }}
              >
                <FaChevronLeft /> Back{" "}
              </span>

              <ul className=" flex flex-col gap-3">
                <li className=" w-full flex justify-between cursor-pointer text-main-color py-2 border-t">
                  <span>
                    <Link onClick={() => handleFalse()} to="/proposeAndeValue">
                      Purpose & Values
                    </Link>
                  </span>
                </li>
                <li className=" w-full flex justify-between cursor-pointer text-main-color py-2 border-t">
                  <span>
                    <Link to="/location" onClick={() => handleFalse()}>
                      Location
                    </Link>
                  </span>
                  {/*  <FaChevronRight /> */}
                </li>
              </ul>
            </div>
            {/* LeaderShip Slider */}
            <div
              className={` w-0 transition-all duration-300 ease-in-out infinite bg-white overflow-hidden   absolute top-[82px] right-0   pt-4 sm:px-6 px-2 h-full ${
                leaderSlide
                  ? "w-[100%] px-2 transition-all duration-300  z-20  "
                  : " transition-all duration-300 px-0 w-0 "
              }`}
            >
              <span
                className="w-fit flex justify-between items-center gap-2 cursor-pointer text-main-color py-2 "
                onClick={() => {
                  setLeaderSlide(!leaderSlide);
                  setAboutSlide(!aboutSlide);
                }}
              >
                <FaChevronLeft /> Back{" "}
              </span>

              <ul className=" flex flex-col gap-3">
                <li className=" w-full flex justify-between cursor-pointer text-main-color py-2 border-t">
                  <span>
                    <Link onClick={() => handleFalse()} to="/administration">
                      Conseil d'Administration
                    </Link>
                  </span>
                </li>
                <li className=" w-full flex justify-between cursor-pointer text-main-color py-2 border-t">
                  <span>
                    <Link to="/team-management" onClick={() => handleFalse()}>
                      Équipe de direction
                    </Link>
                  </span>
                  {/*  <FaChevronRight /> */}
                </li>
              </ul>
            </div>
          </>
        ) : (
          ""
        )
      }
      <div
        className={`${
          menuText === "about" ? "h-[650px]" : "h-0"
        }  overflow-hidden w-full bg-custom-blue absolute left-0 z-30 hidden lg:block transition-all duration-200 ease-in-out`}
      >
        <div className=" sm:px-6 px-2  2xl:px-40 py-6">
          <div className=" text-white flex items-center gap-3 w-fit  hover:underline duration-200 transition-[gap]">
            {" "}
            <Link
              to="/about"
              onClick={() => setMenuText("")}
              className="  after:content-[''] text-[20px] capitalize after:top-2 left-0 after:absolute after:h-2 w-[100%] after:bg-slate-100 relative"
            >
              Opic À propos
            </Link>
            <FaChevronRight className=" text-[14px]" />
          </div>
          <div className=" h-[.4px] w-full bg-slate-100/15 my-3"></div>
          <div className=" flex items-start justify-between">
            <div className=" grid grid-cols-2 gap-[20px] md:gap-y-[20px] md:gap-x-[50px]">
              {about.map((ab, index) => (
                <div onClick={() => setMenuText("")} className="">
                  <ProjetLink key={index} about={ab} />
                </div>
              ))}
            </div>
            <div className=" h-[577px] w-[.3px]  bg-slate-100/15 mx-4"></div>
            <div>
              <Link
                to="/approche"
                onClick={() => handleFalse()}
                className=" my-4 block"
              >
                <Button name="Notre Approche" color="white" />
              </Link>
              <ul className=" flex flex-col gap-3">
                {approches.map((approch, index) => (
                  <li key={index}>
                    {" "}
                    <div className=" text-white flex items-center gap-3 w-fit  hover:underline duration-200 transition-[gap]">
                      {" "}
                      <Link
                        to="/about"
                        onClick={() => setMenuText("")}
                        className="  after:content-[''] after:top-2 left-0 after:absolute after:h-2 w-[100%] after:bg-slate-100 relative"
                      >
                        {approch.name}
                      </Link>
                      <FaChevronRight className=" text-[14px]" />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End Desktop A Propos */}
      {/* Start Desktop Services */}
      <div
        className={`${
          menuText === "service" ? "h-[640px]" : "  h-0"
        } overflow-hidden w-full bg-custom-blue absolute left-0 z-30 hidden lg:block transition-all duration-200 ease-in-out `}
      >
        <div className=" sm:px-6 px-2  2xl:px-40 py-6">
          <div className=" text-white flex items-center gap-3 w-fit  hover:underline">
            {" "}
            <Link
              to="/services"
              onClick={() => setMenuText("")}
              className="  after:content-[''] text-[20px] capitalize after:top-2 left-0 after:absolute after:h-2 w-[100%] after:bg-slate-100 relative"
            >
              Services & Expertise
            </Link>
            <FaChevronRight className=" text-[14px]" />
          </div>
          <div className=" h-[.4px] w-full bg-slate-100/15 my-3"></div>
          <div className=" grid grid-cols-3 gap-y-14 gap-x-14">
            {servicesMenu.map((service, index) => (
              <div
                key={index}
                onClick={() => setMenuText("")}
                className=" relative h-[220px] "
              >
                <ProjetLink about={service} key={index}/>
              </div>
            ))}
          </div>{" "}
          {/* End Desktop Services */}
        </div>
      </div>
      {/* <div
        className={`${
          menuText === "market" ? "h-[500px]" : "h-0"
        }  overflow-hidden w-full bg-custom-blue transition-[height] ease-out duration-300 transform`}
      >
        Market
      </div>
      <div
        className={`${
          menuText === "project" ? "h-[500px]" : "h-0"
        }   overflow-hidden w-full bg-custom-blue transition-[height] ease-out duration-300 transform`}
      >
        About
      </div>
      <div
        className={`${
          menuText === "career" ? "h-[500px]" : "h-0"
        }   overflow-hidden w-full bg-custom-blue transition-[height] ease-out duration-300 transform`}
      >
        About
      </div> */}
    </div>
  );
};
