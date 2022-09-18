import React, { useState } from "react";
import Choose from "./Choose";
import Game from "./Game";
import Rule from "./Rule";


const Main = () => {
  const [getNum , setXNum] = useState(2);
  const [getPNum , setPXNum] = useState(-1);
  function RuleBlink(){
    document.querySelector(".rule-body").classList.toggle("ruleTog");
    document.querySelector(".result").classList.toggle("ruleTog");
  }
  function showNext(e){
    setPXNum(Number(e.target.id));
    document.querySelector(".game").style.display="none";
    setXNum(Math.floor(Math.random()*3));
    document.querySelector(".showNo").style.display="grid";
  }
  function shNum(){
    document.querySelector(".result").classList.toggle("ruleTog");
  }

  if(1){
    console.log("yes");
    setTimeout(shNum , 2000);
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
