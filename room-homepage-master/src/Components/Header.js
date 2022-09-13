import React, { useState } from "react";
import logo from "./images/logo.svg";
import cross from "./images/icon-close.svg";
import hamburger from "./images/icon-hamburger.svg";

const Header = () => {
  const [setIcon ,getIcon] = useState(hamburger);
  function showNav(){
    document.querySelector("main").classList.toggle("scroll");
    (setIcon===cross) ? getIcon(hamburger) : getIcon(cross);
  }
  return (
    <>
      <header>
        <nav>
          <img src={setIcon} alt="nav-icon" className="ham" onClick={showNav}/>
          <img src={logo} alt="logo" />
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
        <ul className={(setIcon===cross) ? "mob-nav navhere" :"mob-nav"}>
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
    </>
  );
};

export default Header;
