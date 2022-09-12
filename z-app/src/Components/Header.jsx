import React from "react";

function Header() {
  return (
    <header>
      <div className="black">
        <nav>
          <h1>Project</h1>
          <div className="nav-icon">
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
          <div className="gitRepo">
          
            <a href="https://github.com/thisisharsh7">GitHub</a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
