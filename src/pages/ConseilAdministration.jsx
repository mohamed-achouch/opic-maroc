import React from "react";
import administration from "../assets/manager.jpg";
import directors from "../data/directors";
import Director from "../components/Director";
import { Link } from "react-router-dom";
import OpicBanner from "../components/OpicBanner";
const ConseilAdministration = () => {
  return (
    <div>
      <OpicBanner
        image={administration}
        title="Manager Général"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum impedit aut quaerat odio cumque eveniet, similique fuga dolores aperiam totam nisi aspernatur corrupti temporibus odit eos rerum sapiente non corporis."
      />
      <div className=" mt-10  sm:px-6 px-2  2xl:px-52 lg:px-44 ">
        <div className="">
          {directors.map((direc, index) => (
            <Link to="/general-manager" className="">
              <div className=" m-auto w-[300px] my-10">
                <Director key={index} director={direc} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConseilAdministration;
