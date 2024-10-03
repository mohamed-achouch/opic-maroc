import React from "react";
import business from "../assets/contact/business-inquries.avif";
import general from "../assets/contact/general-inquries.avif";
import Card from "../components/Card";
const ContacterNous = () => {
  const contact = [
    {
      id: 1,
      name: "Demandes Commerciales",
      desc: "Contactez-nous pour discuter de la façon dont Opic peut vous aider.",
      image: business,
      lien:"/demandes-commerciales"
    },
    {
      id: 2,
      name: "Demandes Générales",
      desc: "Posez des questions relatives à l'investissement, aux relations avec les médias et à nos webinaires.",
      image: general,
       lien:"/demandes-generales"
    },
  ];

  return (
    <div>
      <div className=" sm:px-6 px-2  2xl:px-44 lg:px-[3rem] bg-custom-blue h-[100px] w-full flex items-center justify-center">
        <h1 className=" w-fit text-[22px] lg:text-[30px] text-white font-bold">
          Comment pouvons-nous vous aider ?
        </h1>
      </div>
      <div className=" my-10 w-[94%] md:w-[86%] lg:w-[80%] m-auto flex-col  md:flex-row flex gap-6 lg:gap-[200px] justify-between">
        {" "}
        {contact.map((item, index) => (
          <div className=" h-[240px] md:h-[315px] w-full">
            <Card key={index} item={item} color="main-color" click={false} />
          </div>
        ))}
      </div>
      {/* <Test/> */}
    </div>
  );
};

export default ContacterNous;
