import React, { useEffect, useState } from "react";
import Choose from "./Choose";
import Header from "./Header";
import Game from "./Game";
import Rule from "./Rule";
function comeNext() {
  document.querySelector(".showMo").classList.toggle("animate");
  setTimeout(() => {
    document.querySelector(".game").style.display = "none";
  }, 1000);
  setTimeout(() => {
    document.querySelector(".showNo").style.display = "grid";
  }, 1000);
  setTimeout(() => {
    document.querySelector(".chouse").classList.toggle("house");
  }, 2500);
  setTimeout(shNum, 5000);
}
function RuleBlink() {
  document.querySelector(".rule-body").classList.toggle("ruleTog");
}
function shNum() {
  document.querySelector(".result").style.display = "flex";
}
const getSavedPoint = () => {
  let SavedPoints = localStorage.getItem("points");
  if (SavedPoints) {
    return JSON.parse(localStorage.getItem("points"));
  }
};
const Main = () => {
  const [getNum, setXNum] = useState(2);
  const [getPNum, setPXNum] = useState(-1);
  const [cnt, getCnt] = useState(getSavedPoint());
  useEffect(() => {
    localStorage.setItem("points", JSON.stringify(cnt));
  });
  let WinOrLoose = "";
  if (
    (getNum === getPNum ||
      getNum === getPNum - 1 ||
      (getNum === 2 && getPNum === 0)) &&
    WinOrLoose === ""
  ) {
    WinOrLoose = "Loose";
  } else if (getPNum !== -1 && WinOrLoose === "") {
    WinOrLoose = "Win";
  }

  function showNext(e) {
    let id = Number(e.target.id);
    let ran = Math.floor(Math.random() * 3);
    setPXNum(id);
    setXNum(ran);
    comeNext();
    e.preventDefault();
    console.log(id);
    console.log(",");
    console.log(ran);
    if (id === ran || ran === id - 1 || (ran === 2 && id === 0)) {
      setTimeout(() => {
        cnt !== 0 ? getCnt(cnt - 1) : getCnt(0);
      }, 5000);
    } else {
      setTimeout(() => {
        getCnt(cnt + 1);
      }, 5000);
    }
  }
  console.log(cnt);

  console.log("harsh2");
  return (
    <>
      <Header Pnt={cnt} />
      <main>
        <Rule CloseIt={RuleBlink} />
        <Game TogRule={RuleBlink} NextStep={showNext} />
        <Choose setNum={getNum} setPNum={getPNum} findFinal={WinOrLoose} />
      </main>
    </>
  );
};

export default Main;
