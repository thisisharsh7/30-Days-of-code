import React from "react";

const Result = (props) => {
    function ReStart(){
        setTimeout(window.location.reload.bind(window.location), 1000);
    }
  return (
    <>
      <div className="result">
        <p className="lose-win">You {props.finalText}</p>
        <button onClick={ReStart}>Play Again</button>
      </div>
    </>
  );
};

export default Result;
