import React, { useState } from "react";

export default function Header() {
  const [mode , setMode] = useState("Light");
  const DarkWhite = () =>{
    document.querySelector("header").classList.toggle("whiteBgK");
    document.body.classList.toggle("whiteBg");
    document.querySelectorAll(".card").forEach(scard=> scard.classList.toggle("whiteBgK"));
    document.querySelectorAll(".tgbtn").forEach(sbtn=>sbtn.classList.toggle("lbtn"));
    document.querySelectorAll(".skbtn").forEach(sbtn=>sbtn.classList.toggle("lbtn"));
    document.querySelector(".nipt").classList.toggle("whiteBgK");
    document.querySelector("#region").classList.toggle("whiteBgK");
     (mode === "Dark") ? setMode("Light") : setMode("Dark");
  }

  return (
    <>
      <header>
        <div>
          <p>Where in the world?</p>
          <button type="button" onClick={DarkWhite}>Switch to {mode} Mode</button>
        </div>
      </header>
    </>
  );
}
