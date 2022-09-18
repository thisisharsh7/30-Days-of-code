import React from "react";
import paper from "./images/icon-paper.svg";
import scissors from "./images/icon-scissors.svg";
import rock from "./images/icon-rock.svg";

const Game = (props) => {
  return (
    <>
      <div className="game">
        <div className="choice-pannel showMo">
          <div className="outer paper">
            <img id={0} src={paper} alt="paper" className="paper-bg" onClick={props.NextStep}/>
          </div>
          <div className="outer rock">
            <img id={1} src={rock} alt="rock" className="rock-bg" onClick={props.NextStep}/>
          </div>
          <div className="outer scissors">
            <img id={2} src={scissors} alt="scissors" className="scissors-bg" onClick={props.NextStep}/>
          </div>
        </div>
        <button id="rbtn" onClick={props.TogRule}>Rules</button>
      </div>
    </>
  );
};

export default Game;
