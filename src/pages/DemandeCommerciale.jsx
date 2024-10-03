import React, { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";


const DemandeCommerciale = () => {
  const [selectedValue, setSelectedValue] = useState("Market");
  const [isOpen, setIsOpen] = useState(false);
  const options = ["Market", "Service"];
  const [catText, setCatText] = useState("Choose a Category");
  const ServiceList = [
    "Service 1",
    "Service2",
    "Service 3",
    "Service 4",
    "Service 5",
  ];
  const MarketList = [
    "Market 1",
    "Market 2",
    "Market 3",
    "Market 4",
    "Market 5",
  ];
  const [listCat, setListCat] = useState([]);

  const handleCategory = (event) => {
    setSelectedValue(event.target.value);
    handleCat(selectedValue);
  };
  const handleCat = (cat) => {
    if (cat === "Service") {
      setListCat(MarketList);
    }
    if (cat === "Market") {
      setListCat(ServiceList);
    }
  };
  const textShose = (e) => {
    setCatText(e.target.innerHTML);
    console.log(e.target.innerHTML);
  };
  const resetValues = () => {
    setCatText("Choose a Category");
    setIsOpen(false);
  };
  useEffect(() => {
    setListCat(MarketList);
  }, []);

  return (
    <div>
      <div className=" sm:px-6 px-2  2xl:px-44 lg:px-[3rem] bg-custom-blue w-full flex items-start justify-center">
        <div className=" pt-9 pb-9 flex-col flex gap-3 justify-center items-start">
          <h1 className=" w-fit text-[30px] text-white font-bold">
            Demandes Commerciales
          </h1>
          <p className="text-white text-justify text-[14px] md:text-[16px] lg:text-[18px]">
            Contactez l'équipe commerciale de Opic pour découvrir comment Opic
            peut répondre à vos besoins commerciaux et quelles solutions Opic
            propose dans votre secteur. Consultez les boutons ci-dessous pour
            des questions sur d'autres sujets.
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
                Job Title
              </label>
              <input
                type="text"
                placeholder="Job Title"
                className=" placeholder:font-normal w-full border-main-color outline-none py-2 pl-2 text-[16px] font-bold text-main-color  border-b-[1px]"
              />
            </div>
            <div className=" flex flex-col gap-2 w-full">
              <label
                htmlFor=""
                className=" w-fit text-main-color font-bold text-[17px] after:content-['*'] after:text-red-700 after:absolute relative after:top-0 after:-right-3"
              >
                {" "}
                Organization
              </label>
              <input
                type="text"
                placeholder="Organization"
                className=" placeholder:font-normal  placeholder:capitalize border-main-color outline-none py-2 pl-2 text-[16px] font-bold text-main-color  border-b-[1px]"
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
                Business Phone
              </label>
              <input
                type="text"
                placeholder="Business Phone Number"
                className=" placeholder:font-normal  placeholder:capitalize border-main-color outline-none py-2 pl-2 text-[16px] font-bold text-main-color  border-b-[1px]"
              />
            </div>
            <div className=" flex flex-col gap-2 w-full">
              <label
                htmlFor=""
                className=" w-fit text-main-color font-bold text-[17px] after:content-['*'] after:text-red-700 after:absolute relative after:top-0 after:-right-3"
              >
                {" "}
                Business Email
              </label>
              <input
                type="email"
                required
                placeholder="email@adress.com"
                className="placeholder:font-normal   border-main-color outline-none py-2 pl-2 text-[16px] font-bold text-main-color  border-b-[1px]"
              />
            </div>
          </div>
          <div className=" flex flex-col w-full gap-6 lg:gap-6">
            <label
              htmlFor=""
              className=" w-fit text-main-color font-bold text-[17px] after:content-['*'] after:text-red-700 after:absolute relative after:top-0 after:-right-3"
            >
              Subject Type
            </label>
            <div className=" flex gap-6 items-center">
              {options.map((option, index) => (
                <label
                  key={index}
                  onClick={() => resetValues()}
                  className=" text-[17px] font-medium flex items-center gap-1"
                >
                  <input
                    type="radio"
                    value={option}
                    checked={selectedValue === option}
                    onChange={handleCategory}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
          <div className=" flex flex-col gap-6 w-full">
            <label
              htmlFor=""
              className=" w-fit  text-main-color font-bold text-[17px] after:content-['*'] after:text-red-700 after:absolute relative after:top-0 after:-right-3"
            >
              {" "}
              {selectedValue}
            </label>
            <div className=" relative">
              <div
                onClick={() => setIsOpen(!isOpen)}
                className=" px-2 w-full py-2 bg-custom-blue/5 justify-between font-bold text-[18px] flex items-center cursor-pointer text-gray-500 hover:bg-blue-300/10"
              >
                {catText}
                {!isOpen ? (
                  <FaChevronDown className=" duration-300 transition-transform ease-in-out" />
                ) : (
                  <FaChevronUp className=" duration-300 transition-all ease-in-out" />
                )}
              </div>
              <div
                className={`bg-white z-20 absolute top-[2.7rem] w-full overflow-hidden  overflow-y-scroll ${
                  isOpen ? "h-[180px]" : "h-0"
                }`}
              >
                <ul
                  className={`py-2 font-meduim flex flex-col gap-4 text-main-color  `}
                >
                  {listCat.map((item, index) => (
                    <li
                      onClick={(e) => {
                        textShose(e);
                        setIsOpen(false);
                      }}
                      key={index}
                      className={`py-2 pl-2 text-[17px] text-main-color hover:bg-main-color/15 cursor-pointer ${
                        item === catText ? " bg-custom-blue text-white" : ""
                      }`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
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
            required
              type="text"
              rows={6}
              placeholder="Message"
              className="  placeholder:font-normal w-full border-main-color outline-none py-1 pl-2 text-[16px] font-bold text-main-color  border-b-[1px]"
            />
          </div>
          <p className=" text-[15px] text-gray-400 text-justify md:text-start font-medium w-[100%] md:w-[96%] lg:w-[80%] mb-4">
            Pas d'informations personnelles ou sensibles, y compris les numéros
            d'identification délivrés par le gouvernement, les données médicales
            et les informations financières, ou tout ce qui est considéré comme
            des données confidentielles ou sensibles, ne doivent être inclus
            dans ce formulaire.
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

export default DemandeCommerciale;
