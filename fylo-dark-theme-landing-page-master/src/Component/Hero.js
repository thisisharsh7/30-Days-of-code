import React from "react";

const Hero = (props) => {
  return (
    <>
      <div id="hero">
        <img src={props.setSrc} alt="illustration" />
        <h1>All your files in one secure location, accessible anywhere.</h1>
        <p>
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <button>Get Started</button>
      </div>
    </>
  );
};

export default Hero;
