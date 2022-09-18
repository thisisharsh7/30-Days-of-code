import React from "react";
import paper from "./images/icon-paper.svg";
import rock from "./images/icon-rock.svg";
import Result  from "./Result";

const Choose = () => {
  return (
    <>
      <div className="choice-pannel showNo">
      <div className="result-text user-result">
        <p>You picked</p>
        <div id="paper" className="outer">
          <img src={paper} alt="paper" id="paper-bg" />
        </div>
        </div>
        <div className="result-text com-result">
        <p>The house picked</p>
        <div id="rock" className="outer">
        <img src={rock} alt="rock" id="rock-bg" />
        </div>
        </div>
        <Result /> 
      </div>
      
    </>
  );
};

export default Choose;
