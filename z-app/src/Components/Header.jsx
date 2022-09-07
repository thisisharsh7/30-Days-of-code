import React from "react";
import Icon1 from "./icon-hamburger.svg";
import Icon2 from "./icon-close.svg";
import { useState } from "react";

function Header() {
  const [showIcon, getIcon] = useState({
    open: "block",
    close: "none",
  });
  function showBox(event) {
    getIcon(() => {
      if (event.target.id === "1") {
        return {
          open: "none",
          close: "block",
        };
      } else {
        return {
          open: "block",
          close: "none",
        };
      }
    });
  }

  return (
    <header>
      <div className="black">
        <nav>
          <h1>Project</h1>
          <div className="nav-icon">
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
            className="hamburgerIcon"
            src={Icon1}
            alt="hamburger"
            style={{ display: showIcon.open }}
            id={1}
          />
          <img
            onClick={showBox}
            className="crossIcon"
            src={Icon2}
            alt="cross"
            style={{ display: showIcon.close }}
            id={2}
          />
        </nav>
      </div>
    </header>
  );
}

export default Header;
