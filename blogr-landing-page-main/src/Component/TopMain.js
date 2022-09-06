import React from "react";
import largeImage from "./images/illustration-editor-desktop.svg";
import smallImage from "./images/illustration-editor-mobile.svg";

function TopMain() {
  return (
    <>
      <section id="top-main">
        <h2> Designed for the future</h2>
        <picture>
            <source media="(max-width:400px)" srcSet={smallImage}  />
            <img src={largeImage} alt="first-feature" />
        </picture>
        <div className="text-para" id="introducing">
            <h3>Introducing an extensible editor</h3>
            <p>  Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
  The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
  videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
  change the looks of a blog.</p>
        </div>
        <div className="text-para" id="robust">
            <h3>Robust content management</h3>
            <p>  Flexible content management enables users to easily move through posts. Increase the usability of your blog 
  by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.</p>
        </div>
      </section>
    </>
  );
}

export default TopMain;
