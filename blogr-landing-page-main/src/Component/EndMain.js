import React from "react";
import SmallLappy from "./images/illustration-laptop-mobile.svg";
import LargeLappy from "./images/illustration-laptop-desktop.svg";

function EndMain() {
  return (
    <>
      <section id="main-end">
        <picture>
          <source media="(max-width: 450px)" srcSet={SmallLappy} />
          <img src={LargeLappy} alt="laptop" />
        </picture>
        <div id="main-end-div">
          <div className="text-para end-main-para" >
            <h3>Free, open, simple</h3>
            <p>
              Blogr is a free and open source application backed by a large
              community of helpful developers. It supports features such as code
              syntax highlighting, RSS feeds, social media integration,
              third-party commenting tools, and works seamlessly with Google
              Analytics. The architecture is clean and is relatively easy to
              learn.
            </p>
          </div>
          <div className="text-para end-main-para">
            <h3> Powerful tooling</h3>
            <p>
              Batteries included. We built a simple and straightforward CLI tool
              that makes customization and deployment a breeze, but capable of
              producing even the most complicated sites.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default EndMain;
