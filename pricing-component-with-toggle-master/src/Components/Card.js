import React from "react";

const Card = (props) => {
  return (
    <>
      <section>
        <div className="card-body">
          <div className="card-skeleton">
            <h2>{props.title}</h2>
            <ul>
              <li>&#36; {props.price}</li>
              <li>
                {props.storage} {props.bytes} Storage
              </li>
              <li>{props.user} Users Allowed</li>
              <li>Send up to {props.send} GB</li>
            </ul>
            <button>Learn More</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
