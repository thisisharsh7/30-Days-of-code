import React from "react";
import dot from "./images/icon-ellipsis.svg";

const Card = (props) => {
  return (
    <>
      <section
        className="card-body"
        style={{
          backgroundImage: `url(${props.bg})`,
          backgroundColor: props.color,
        }}
      >
        <div className="card">
          <h2 className="card-title">{props.title}</h2>
          <img src={dot} alt="ellipsis" />
          <h1 className="duration">{props.current}hrs</h1>
          <p className="prev">Last Week - {props.previous}hrs</p>
        </div>
      </section>
    </>
  );
};

export default Card;
