import React from "react";
import logo from "./images/logo.svg";

const Header = (props) => {
  return (
    <>
      <header>
        <div className="logo-score">
          <img src={logo} alt="logo" id="logo"/>
          <p className="score-text">
            <span className="text">Score</span>
            <span id="score">{props.Pnt}</span>
          </p>
        </div>
      </header>
    </>
  );
};

export default Header;
