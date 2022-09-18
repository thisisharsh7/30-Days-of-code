import React from "react";
import paper from "./images/icon-paper.svg";
import scissors from "./images/icon-scissors.svg";
import rock from "./images/icon-rock.svg";

const Game = (props) => {
  return (
    <>
      <div className="game">
        <div className="choice-pannel showMo">
          <div id="paper" className="outer">
            <img src={paper} alt="paper" id="paper-bg" onClick={props.NextStep}/>
          </div>
          <div id="rock" className="outer">
            <img src={rock} alt="rock" id="rock-bg" onClick={props.NextStep}/>
          </div>
          <div id="scissors" className="outer">
            <img src={scissors} alt="scissors" id="scissors-bg" onClick={props.NextStep}/>
          </div>
        </div>
        <button id="rbtn" onClick={props.TogRule}>Rules</button>
      </div>
    </>
  );
};

export default Game;
