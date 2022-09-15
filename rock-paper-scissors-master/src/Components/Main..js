import React from "react";
import paper from "./images/icon-paper.svg";
import scissors from "./images/icon-scissors.svg";
import rock from "./images/icon-rock.svg";

const Main = () => {
  return (
    <>
      <main>
      <div id="paper-outer">
        <img src={paper} alt="paper" className="bg-icons"/>
        </div>
        <div id="rock-outer">
        <img src={rock} alt="rock" className="bg-icons" />
        </div>
        <div id="scissors-outer">
        <img src={scissors} alt="scissors" className="bg-icons"/>
        </div>
      </main>
    </>
  );
};

export default Main;
