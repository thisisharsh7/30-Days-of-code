import React, { useState } from "react";
import Choose from "./Choose";
import Game from "./Game";
import Rule from "./Rule";


const Main = () => {
  const [getNum , setXNum] = useState(2);
  const [getPNum , setPXNum] = useState(-1);
  function RuleBlink(){
    document.querySelector(".rule-body").classList.toggle("ruleTog");
  }
  function showNext(e){
    setPXNum(Number(e.target.id));
    document.querySelector(".showMo").classList.toggle("animate");
    setTimeout( () => {document.querySelector(".game").style.display="none";},1000);
    setXNum(Math.floor(Math.random()*3));
    setTimeout( () => {document.querySelector(".showNo").style.display="grid";},1000);
    setTimeout(()=>{document.querySelector(".chouse").classList.toggle("house");},2500)
  }
  function shNum(){
    document.querySelector(".result").style.display="flex";
  }
    setTimeout(shNum , 8000);
  let WinOrLoose = "Win";
  if(getNum === getPNum || getNum === (getPNum-1) || ((getNum===2) && (getPNum===0))){
    WinOrLoose = "Loose";
  }else{
    
    WinOrLoose = "Win";
  }
  
  return (
    <>
      <main>
        <Rule CloseIt={RuleBlink}/>
        <Game TogRule={RuleBlink} NextStep={showNext}/>
        <Choose setNum={getNum} setPNum={getPNum} findFinal={WinOrLoose}/>
      </main>

    </>
  );
};

export default Main;
