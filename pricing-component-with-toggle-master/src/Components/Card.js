import React from "react";

const Card = (props) => {
  return (
    <>
      <section className={`card-body ${props.newClass}`}>
        <div className="card-skeleton">
          <h2>{props.title}</h2>
          <ul>
            <li>
              <span className="dollar">&#36;</span>
              <span>{props.price}</span>
            </li>
            <li>
              {props.storage} {props.bytes} Storage
            </li>
            <li>{props.user} Users Allowed</li>
            <li>Send up to {props.send} GB</li>
          </ul>
          <button>Learn More</button>
        </div>
      </section>
    </>
  );
};

export default Card;
