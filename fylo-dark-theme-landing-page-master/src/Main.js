import React from "react";
import Hero from "./Component/Hero";
import Allfunction from "./Component/Allfunction";
import illustration from "./images/illustration-intro.png";
import AllCards from "./Component/AllCards";
import Productive from "./Component/Productive";
import UserFill from "./Component/UserFill";

const Main = () => {
  return (
    <>
      <div id="main">
      <div id="bg-hero">
        <Hero setSrc={illustration} />
        </div>
        <Allfunction />
        <Productive />
        <AllCards />
        <UserFill />
      </div>
    </>
  );
};

export default Main;
