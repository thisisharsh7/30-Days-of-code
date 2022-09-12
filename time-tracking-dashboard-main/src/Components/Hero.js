import React from "react";
import Jeremy from "./images/image-jeremy.png";

const Hero = (props) => {
  return (
    <>
      <section className="hero-card">
        <div className="hero-profile">
          <img src={Jeremy} alt="Jeremy" />
          <div>
            <p>Report for</p>
            <h1>Jeremy Robson</h1>
          </div>
        </div>
        <div className="hero-stats">
          <p onClick={props.btnClick}>Daily</p>
          <p onClick={props.btnClick}>Weekly</p>
          <p onClick={props.btnClick}>Monthly</p>
        </div>
      </section>
    </>
  );
};

export default Hero;
