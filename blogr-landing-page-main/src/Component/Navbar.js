import React, { useLayoutEffect, useState } from "react";
import logo from "./images/logo.svg";
import Arrow from "./images/icon-arrow-light.svg";
import CloseIcon from "./images/icon-close.svg";
import HamburgerIcon from "./images/icon-hamburger.svg";

function Navbar() {
  const [size , setSize] = useState(window.innerWidth);
  const [show, get] = useState({
    product: "none",
    company: "none",
    connect: "none",
  });
  const [storeButton, setToggle] = useState({
    hamb: "block",
    cross: "none",
  })
  if(window.innerWidth>748){
    storeButton.hamb="none";
    storeButton.cross="none";
  }
  useLayoutEffect(()=>{
    window.addEventListener('resize',()=>{
      setSize(window.innerWidth);
    })
    if(size>748){
      document.getElementById("nav-static").style.display="flex";
      storeButton.hamb="none";
      storeButton.cross="none";
    }else{
      if(storeButton.cross==="none"){
        document.getElementById("nav-static").style.display="none";
        storeButton.hamb="block";
      }
    }
    return () => window.removeEventListener('resize',()=>{
      setSize(window.innerWidth);
    })
  })

  function expandTab(event) {
    const k = event.target.parentElement.id;
    
    get(() => {
      if (k === "1" && show.product === "none") {
        return {
          product: "flex",
          company: "none",
          connect: "none",
        };
      } else if (k === "2" && show.company === "none") {
        return {
          product: "none",
          company: "flex",
          connect: "none",
        };
      } else if (k === "3" && show.connect === "none") {
        return {
          product: "none",
          company: "none",
          connect: "flex",
        };
      } else {
        return {
          product: "none",
          company: "none",
          connect: "none",
        };
      }
    });
  }
  function toggleButton(event) {
    setToggle(() => {
      if (event.target.id === "close") {
        document.getElementById("nav-static").className="";
        document.getElementById("nav-static").style.display="none";
        return {
          hamb: "block",
          cross: "none",
        };
      } else {
        document.getElementById("nav-static").className="nav-change";
        document.getElementById("nav-static").style.display="flex";
        return {
          hamb: "none",
          cross: "block",
        };
      }
    });
  }
  return (
    <>
      <nav>
        <img src={logo} alt="Blogr_logo" />
        <img
          id="close"
          src={CloseIcon}
          style={{ display: storeButton.cross }}
          alt="close"
          onClick={toggleButton}
        />
        <img
          id="hamburger"
          onClick={toggleButton}
          style={{ display: storeButton.hamb }}
          src={HamburgerIcon}
          alt="hamburger"
        />
        <div id="nav-static">
          <div id="subNav">
            <div className="merge">
              <button type="button" onClick={expandTab} id={1}>
                <span>Product</span>
                <img src={Arrow} alt="arrow" />
              </button>
              <ul id="product" style={{ display: show.product }}>
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
              <ul id="company" style={{ display: show.company }}>
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
              <ul className="connect" style={{ display: show.connect }}>
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
