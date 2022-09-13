import React from "react";
import logo from "./images/logo.svg";

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <img src={logo} alt="logo" />
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
