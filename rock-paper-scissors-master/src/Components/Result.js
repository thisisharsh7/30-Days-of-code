import React from "react";

const Result = (props) => {
    function ReStart(){
        setTimeout(()=>{
          
          document.querySelector(".chouse").classList.toggle("house");
          document.querySelector(".game").style.display="flex";
          document.querySelector(".showMo").style.display="grid";
          document.querySelector(".showMo").classList.toggle("animate");
          document.querySelector(".showNo").style.display="none";
          document.querySelector(".result").style.display="none";
        }, 1000);
    }
  return (
    <>
      <div className="result">
        <p className="lose-win" id="cmpr">You {props.finalText}</p>
        <button onClick={ReStart} type="button">Play Again</button>
      </div>
    </>
  );
};

export default Result;
