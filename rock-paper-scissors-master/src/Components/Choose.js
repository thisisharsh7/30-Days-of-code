import React  from "react";
import paper from "./images/icon-paper.svg";
import scissors from "./images/icon-scissors.svg";
import rock from "./images/icon-rock.svg";
import Result  from "./Result";

const Choose = (props) => {
    const isrc = [paper , rock , scissors];
    const str = ["paper" , "rock" , "scissors"];
  return (
    <>
      <div className="choice-pannel showNo">
      <div className="result-text user-result">
        <p>You picked</p>
        <div className={`${str[props.setPNum]} outer`}>
          <img src={isrc[props.setPNum]} alt={str[props.setPNum]} className={`${str[props.setPNum]}-bg`} />
        </div>
        </div>
        <div className="result-text com-result ">
        <p>The house picked</p>
        <div className={`${str[props.setNum]} outer chouse`} >
        <img src={isrc[props.setNum]} alt={str[props.setNum]} className={`${str[props.setNum]}-bg`} />
        </div>
        </div>
        <Result finalText={props.findFinal}/> 
      </div>
      
    </>
  );
};

export default Choose;
