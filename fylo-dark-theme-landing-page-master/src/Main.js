import React from "react";
import Hero from "./Component/Hero";
import Allfunction from "./Component/Allfunction";
import illustration from "./images/illustration-intro.png";
import AllCards from "./Component/AllCards";
import Productive from "./Component/Productive";

const Main = () => {
  return (
    <>
      <div id="main">
        <Hero setSrc={illustration} />
        <Allfunction />
        <Productive />
        <AllCards />
      </div>
    </>
  );
};

export default Main;
