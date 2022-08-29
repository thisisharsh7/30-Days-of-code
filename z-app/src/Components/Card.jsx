import React from "react";

function Card(props) {
  return (
    <>
      <div className="card">
        <a href={props.goto} target="_blank" rel="noreferrer" >
          <img class="img-1" src={props.display} alt={props.cnt} />
          <p>{props.title}</p>
        </a>
      </div>
    </>
  );
}

export default Card;
