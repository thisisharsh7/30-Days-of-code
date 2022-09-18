import React from "react";
import RulePage from "./images/image-rules.svg";
import Cross from "./images/icon-close.svg";
const Rule = (props) => {
  return (
    <>
      <div className="rule-body">
        <div className="rules">
          <p>
            <span>Rules</span>
           <span><img src={Cross} alt="Close" id="close" onClick={props.CloseIt}/></span> 
          </p>
          <img src={RulePage} alt="RulePage" id="irule" />
        </div>
      </div>
    </>
  );
};

export default Rule;
