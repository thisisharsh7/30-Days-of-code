import React from "react";
import Icon1 from "./icon-hamburger.svg";
import Icon2 from "./icon-close.svg";
import { useState } from "react";

function Header() {
const [showdialogue , getdialogue] = useState(false);
function showBox(){
  getdialogue(!showdialogue);
}
  return (
    <header>
      <div className="black">
        <nav>
          <h1>Project</h1>
          <div className={showdialogue ? "nav-icon menu-full" : "nav-icon"}>
            <iframe
              src={"https://ghbtns.com/github-btn.html?user=thisisharsh7&type=follow&count=true&size=large"}
              frameBorder={0}
              scrolling={0}
              width={250}
              height={30}
              title={"GitHub"}
            ></iframe>
            <iframe
              src={"https://ghbtns.com/github-btn.html?user=thisisharsh7&repo=30-Days-Of-Code&type=star&count=true&size=large"}
              frameBorder={0}
              scrolling={0}
              width={110}
              height={30}
              title={"GitHub"}
            ></iframe>
          </div>
          <img
            onClick={showBox}
            className={showdialogue ? "hamburgerIcon shapeShow" : "hamburgerIcon"}
            src={Icon1}
            alt="hamburger"
            id={1}
          />
          <img
            onClick={showBox}
            className={showdialogue ? "crossIcon shapeChange" : "crossIcon"}
            src={Icon2}
            alt="cross"
            id={2}
          />
        </nav>
      </div>
    </header>
  );
}

export default Header;
