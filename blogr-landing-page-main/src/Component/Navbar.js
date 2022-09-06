import React, { useState } from "react";
import logo from "./images/logo.svg";
import Arrow from "./images/icon-arrow-light.svg";


function Navbar() {
  const [showClick, scanClick] = useState("none");
  function expandTab() {
    if (showClick === "none") {
      scanClick("flex");
    } else {
      scanClick("none");
    }
  }
  return (
    <>
      <nav>
        <img src={logo} alt="Blogr_logo" />
        <div id="nav-static">
          <div id="subNav">
            <div className="merge">
              <button onClick={expandTab}>
                <span>Product</span>
                <img src={Arrow} alt="arrow" />
              </button>
              <ul id="product" style={{ display: showClick }}>
                <li> Overview</li>
                <li> Pricing</li>
                <li> Marketplace</li>
                <li> Features</li>
                <li> Integrations</li>
              </ul>
            </div>
            <div className="merge">
              <button onClick={expandTab}>
                <span>Company</span>
                <img src={Arrow} alt="arrow" />
              </button>
              <ul id="company" style={{ display: showClick }}>
                <li> About</li>
                <li> Team</li>
                <li> Blog</li>
                <li> Careers</li>
              </ul>
            </div>
            <div className="merge">
              <button onClick={expandTab}>
                <span>Connect</span>
                <img src={Arrow} alt="arrow" />
              </button>
              <ul className="connect" style={{ display: showClick }}>
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
