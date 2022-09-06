import React from "react";
import Phone from "./images/illustration-phones.svg"

function MidMain() {
  return (
    <>
      <section style={{backgroundColor:"pink"}}>
        <img src={Phone} alt="phone-illustration" />
        <div>
            <h2> State of the Art Infrastructure</h2>
            <p>  With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
  This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>
        </div>
      </section>
    </>
  );
}

export default MidMain;
