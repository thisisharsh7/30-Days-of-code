import React, { useState } from "react";
import Choose from "./Choose";
import Game from "./Game";
import Rule from "./Rule";


const Main = () => {
  const [getNum , setXNum] = useState(0);
  const [getPNum , setPXNum] = useState(0);
  function RuleBlink(){
    document.querySelector(".rule-body").classList.toggle("ruleTog");
  }
  function showNext(e){
    setPXNum(Number(e.target.id));
    console.log(e.target.id);
    console.log(typeof(Number(e.target.id)));
    document.querySelector(".game").style.display="none";
    setXNum(Math.floor(Math.random()*2));
    console.log(getNum);
    document.querySelector(".showNo").style.display="grid";
  }
  return (
    <>
      <main>
        <Rule CloseIt={RuleBlink}/>
        <Game TogRule={RuleBlink} NextStep={showNext}/>
        <Choose setNum={getNum} setPNum={getPNum}/>
      </main>

    </>
  );
};

export default Main;
