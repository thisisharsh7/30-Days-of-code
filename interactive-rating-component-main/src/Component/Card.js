import React from "react";
import Rating from "./Rating";
import Thanks from "./Thanks";

const Card = () => {
  return (
    <>
      <div className="card">
        <Rating className="rating"/>
        <Thanks className="thanks"/>
      </div>
    </>
  );
};

export default Card;
