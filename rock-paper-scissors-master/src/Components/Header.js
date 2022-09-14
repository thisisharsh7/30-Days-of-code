import React from "react";
import logo from "./images/logo.svg";

const Header = () => {
  return (
    <>
      <header>
        <div className="logo-score">
          <img src={logo} alt="logo" />
          <p className="score-text">
            <span className="text">Score</span>
            <span id="score">12</span>
          </p>
        </div>
      </header>
    </>
  );
};

export default Header;
