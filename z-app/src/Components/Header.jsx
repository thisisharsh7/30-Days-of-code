import React from "react";
import Icon1 from "./icon-hamburger.svg";
import Icon2 from "./icon-close.svg";
import { useState } from "react";

function Header() {
  const [showdialogue, getdialogue] = useState(false);
  const [setSrc, getSrc] = useState(Icon1);
  function showBox() {
    getdialogue(!showdialogue);
    if (setSrc === Icon1) {
      getSrc(Icon2);
    } else {
      getSrc(Icon1);
    }
  }
  return (
    <header>
      <div className="black">
        <nav>
          <h1>Project</h1>
          <div className={showdialogue ? "nav-icon menu-full" : "nav-icon"}>
            <iframe
              src={
                "https://ghbtns.com/github-btn.html?user=thisisharsh7&type=follow&count=true&size=large"
              }
              frameBorder={0}
              scrolling={0}
              width={250}
              height={30}
              title={"GitHub"}
            ></iframe>
            <iframe
              src={
                "https://ghbtns.com/github-btn.html?user=thisisharsh7&repo=30-Days-Of-Code&type=star&count=true&size=large"
              }
              frameBorder={0}
              scrolling={0}
              width={110}
              height={30}
              title={"GitHub"}
            ></iframe>
          </div>
          <img
            onClick={showBox}
            className="hamburgerIcon"
            src={setSrc}
            alt="hamburger"
          />
        </nav>
      </div>
    </header>
  );
}

export default Header;
