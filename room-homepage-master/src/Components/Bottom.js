import React from "react";
import Dark from "./images/image-about-dark.jpg";
import Light from "./images/image-about-light.jpg";

const Bottom = () => {
  return (
    <>
      <section>
        <img src={Dark} alt="dark" />
        <div>
          <h2>About our furniture</h2>
          <p>
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </div>
        <img src={Light} alt="light" />
      </section>
    </>
  );
};

export default Bottom;
