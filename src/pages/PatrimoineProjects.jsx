import React from "react";
import { Banner } from "../components/Banner";
import patrimoine from "../assets/feautures/patrimoineBanner.jpg";
import OpicBanner from "../components/OpicBanner";
const PatrimoineProjects = () => {
  return (
    <div>
        <OpicBanner image={patrimoine} title="Patrimoine & Savoir-Faire Marocain" desc="Découvrez l’essence du Maroc à travers notre section dédiée au Patrimoine & Savoir-Faire Marocain. Plongez dans l’architecture traditionnelle qui allie art et histoire, et laissez-vous inspirer par la richesse de notre héritage."/>    
    </div>
  );
};

export default PatrimoineProjects;
