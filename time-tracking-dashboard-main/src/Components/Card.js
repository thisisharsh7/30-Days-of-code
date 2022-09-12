import React from "react";
import dot from "./images/icon-ellipsis.svg";
import play from "./images/icon-play.svg";

const Card = () => {
  return (
    <>
      <section className="card-body" style={{backgroundImage:`url(${play})` , backgroundColor:"black"}}>
        <div className="card">
          <h2 className="card-title">Work</h2>
          <img src={dot} alt="ellipsis" />
          <h1 className="duration">32hrs</h1>
          <p className="prev">Last Week - 36hrs</p>
        </div>
      </section>
    </>
  );
};

export default Card;
