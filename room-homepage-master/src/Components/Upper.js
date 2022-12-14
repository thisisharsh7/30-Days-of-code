import React, { useState } from "react";
import data from "./data.json";
import arrow from "./images/icon-arrow.svg";
import angR from "./images/icon-angle-right.svg";
import angL from "./images/icon-angle-left.svg";

const Upper = () => {
  const [idx, setIdx] = useState(0);
  let dPic = "";
  let mPic = "";
  function slideLeft(event) {
    idx !== 0 ? setIdx(idx - 1) : setIdx(0);
    if (idx !== 0) {
      document.querySelector(".pic-btn").classList.add("animate");
      setTimeout(
        () => document.querySelector(".pic-btn").classList.remove("animate"),
        400
      );
      event.target.parentElement.children[1].style.backgroundColor = "";
    } else {
      event.target.style.backgroundColor = "rgb(216, 87, 87)";
    }
  }
  function slideRight(event) {
    idx !== 2 ? setIdx(idx + 1) : setIdx(2);
    if (idx !== 2) {
      document.querySelector(".pic-btn").classList.add("animate");
      setTimeout(
        () => document.querySelector(".pic-btn").classList.remove("animate"),
        400
      );
      event.target.parentElement.children[0].style.backgroundColor = "";
    } else {
      event.target.style.backgroundColor = "rgb(216, 87, 87)";
    }
  }
  try {
    dPic = require(`${data.dsimg[idx]}`);
    mPic = require(`${data.msimg[idx]}`);
  } catch (err) {}

  return (
    <>
      <section>
        <div className="pic-btn">
          <picture>
            <source media={"(max-width:376px)"} srcSet={mPic} />
            <img src={dPic} alt="one" className="hero-img" />
          </picture>
        </div>
        <div className="hero">
          <h1>{data.title[idx]}</h1>
          <p>{data.description[idx]}</p>
          <p className="ctA">
            <span>Shop Now</span>
            <img src={arrow} alt="arrow" />
          </p>
          <p className="angle">
            <img src={angL} alt="angleLeft" onClick={slideLeft} />
            <img src={angR} alt="angleRight" onClick={slideRight} />
          </p>
        </div>
      </section>
    </>
  );
};

export default Upper;
