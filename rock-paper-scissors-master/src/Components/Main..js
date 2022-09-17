import React from "react";
import paper from "./images/icon-paper.svg";
import scissors from "./images/icon-scissors.svg";
import rock from "./images/icon-rock.svg";

const Main = () => {
  return (
    <>
      <main>
      <div id="paper" className="outer">
        <img src={paper} alt="paper" id="paper-bg"/>
        </div>
        <div id="rock" className="outer">
        <img src={rock} alt="rock" id="rock-bg" />
        </div>
        <div id="scissors" className="outer">
        <img src={scissors} alt="scissors" id="scissors-bg"/>
        </div>
      </main>
    </>
  );
};

export default Main;
