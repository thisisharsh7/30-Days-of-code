import React from "react";
import Choose from "./Choose";
import Game from "./Game";
import Rule from "./Rule";


const Main = () => {
  function RuleBlink(){
    document.querySelector(".rule-body").classList.toggle("ruleTog");
  }
  function showNext(){
    
  }
  return (
    <>
      <main>
        <Rule CloseIt={RuleBlink}/>
        <Game TogRule={RuleBlink} NextStep={showNext}/>
        <Choose />
      </main>

    </>
  );
};

export default Main;
