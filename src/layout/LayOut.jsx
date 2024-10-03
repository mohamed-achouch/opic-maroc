import React from "react";
import { Header } from "../components/Header";
import Routers from "../routers/Routers";
import Footer from "../components/Footer";

const LayOut = () => {
  return (
    <div>
      <Header />
      <div>
        <Routers />
      </div>
      <Footer />
    </div>
  );
};

export default LayOut;
