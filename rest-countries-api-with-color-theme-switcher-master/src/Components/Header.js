import React from "react";

export default function Header() {
  const DarkWhite = () =>{
    document.querySelector("header").classList.toggle("whiteBgK");
    document.body.classList.toggle("whiteBg");
    document.querySelectorAll(".card").forEach(scard=> scard.classList.toggle("whiteBgK"));
    document.querySelectorAll("button").forEach(sbtn=>sbtn.classList.toggle("lbtn"));
  }
  return (
    <>
      <header>
        <div>
          <p>Where in the world?</p>
          <button type="button" onClick={DarkWhite}>Switch to Dark Mode</button>
        </div>
      </header>
    </>
  );
}
