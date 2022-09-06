import React, { useState } from "react";
import logo from "./images/logo.svg";
import Arrow from "./images/icon-arrow-light.svg";
import CloseIcon from "./images/icon-close.svg";
import HamburgerIcon from "./images/icon-hamburger.svg";

function Navbar() {
  const [showProduct, getProduct] = useState("none");
  const [showCompany , getCompany] = useState("none");
  const [showConnect , getConnect] = useState("none");
  const [closeButton , showButton] = useState ("none");
  const [openButton , showOpenButton] = useState("block");


  function expandTab(event) {
    const k= event.target.parentElement.id;
    if(k==1 && showProduct=="none"){
      getProduct("flex");
      getCompany("none");
      getConnect("none");
    }else if(k==2 && showCompany=="none"){
      getCompany("flex");
      getProduct("none");
      getConnect("none");
    }else if(k==3 && showConnect=="none"){
      getProduct("none");
      getCompany("none");
      getConnect("flex");
    }else{
      getProduct("none");
      getCompany("none");
      getConnect("none");
    }
  }
  function hamClick(){
    showButton("block");
    showOpenButton("none");
  }
  function closeClick(){
    showButton("none");
    showOpenButton("block");
  }
  return (
    <>
      <nav>
        <img src={logo} alt="Blogr_logo" />
        <img id="close" src={CloseIcon} style={{display: closeButton}} alt="close" onClick={closeClick}/>
          <img id="hamburger" onClick={hamClick} style={{display: openButton}}  src={HamburgerIcon} alt="hamburger" />
        <div id="nav-static">
          <div id="subNav">
            <div className="merge">
              <button type="button" onClick={expandTab} id={1}>
                <span>Product</span>
                <img src={Arrow} alt="arrow" />
              </button>
              <ul id="product" style={{ display: showProduct }}>
                <li> Overview</li>
                <li> Pricing</li>
                <li> Marketplace</li>
                <li> Features</li>
                <li> Integrations</li>
              </ul>
            </div>
            <div className="merge">
              <button type="button" onClick={expandTab} id={2}>
                <span>Company</span>
                <img src={Arrow} alt="arrow" />
              </button>
              <ul id="company" style={{ display: showCompany }}>
                <li> About</li>
                <li> Team</li>
                <li> Blog</li>
                <li> Careers</li>
              </ul>
            </div>
            <div className="merge">
              <button type="button" onClick={expandTab} id={3}>
                <span>Connect</span>
                <img src={Arrow} alt="arrow" />
              </button>
              <ul className="connect" style={{ display: showConnect }}>
                <li> Contact</li>
                <li> Newsletter</li>
                <li> LinkedIn</li>
              </ul>
            </div>
          </div>
          <div id="nav-button">
            <button id="login"> Login</button>
            <button id="sign"> Sign Up</button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
