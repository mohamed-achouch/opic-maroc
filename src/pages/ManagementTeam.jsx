import React from "react";
import team from "../assets/ManagementTeam.jpg"
import directors from "../data/directors";
import Director from "../components/Director";
import OpicBanner from "../components/OpicBanner";
const ManagementTeam = () => {
  return (
    <div>
      <OpicBanner
        image={team}
        title="Équipe de direction"
        desc="L'équipe de direction de Opic est chargée de diriger l'organisation et de réaliser des projets de manière sûre, efficace, économique et durable. Chacun de ces leaders est dédié à notre mission de construire un monde meilleur, et ils s'engagent pleinement envers nos clients, employés et parties prenantes."
      />
      <div className=" mt-10  sm:px-6 px-2  2xl:px-52 lg:px-44 ">
        <div className=" grid grid-cols-1 gap-[60px] lg:gap-[30px] md:grid-cols-2 lg:sm:grid-cols-3">
          {directors.map((direc, index) => (
            <Director key={index} director={direc} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManagementTeam;
