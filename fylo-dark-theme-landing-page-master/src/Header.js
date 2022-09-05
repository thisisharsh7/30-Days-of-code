import React from "react";
import logo from "./images/logo.svg";

const Header = () => {
  return (
    <>
      <div id="header">
        <nav>
          <img src={logo} alt="logo" id="logo-header" />
          <ul>
            <li>Features</li>
            <li>Team</li>
            <li>Sign In</li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
