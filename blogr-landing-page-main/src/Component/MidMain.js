import React from "react";
import Phone from "./images/illustration-phones.svg"

function MidMain() {
  return (
    <>
      <section id="circle-bg" >
      <div id="mobile-bg">
        <img src={Phone} alt="phone-illustration" />
        <div id="mobile-text">
            <h2> State of the Art Infrastructure</h2>
            <p>  With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
  This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>
        </div>
        </div>
      </section>
    </>
  );
}

export default MidMain;
