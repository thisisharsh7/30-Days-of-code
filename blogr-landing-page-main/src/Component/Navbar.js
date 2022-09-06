import React from "react";
import logo from "./images/logo.svg";
import Arrow from "./images/icon-arrow-light.svg";

function Navbar() {
  return (
    <>
      <nav>
        <div>
          <img src={logo} alt="Blogr_logo" />
          <div>
            <button>
              <span>Product</span>
              <img src={Arrow} alt="arrow" />
            </button>
            <ul>
              <li> Overview</li>
              <li> Pricing</li>
              <li> Marketplace</li>
              <li> Features</li>
              <li> Integrations</li>
            </ul>
          </div>
          <div>
            <button>
              <span>Company</span>
              <img src={Arrow} alt="arrow" />
            </button>
            <ul>
              <li> About</li>
              <li> Team</li>
              <li> Blog</li>
              <li> Careers</li>
            </ul>
          </div>
          <div>
            <button>
              <span>Connect</span>
              <img src={Arrow} alt="arrow" />
            </button>
            <ul>
              <li> Contact</li>
              <li> Newsletter</li>
              <li> LinkedIn</li>
            </ul>
          </div>
        </div>
        <div>
          <button> Login</button>
          <button> Sign Up</button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
