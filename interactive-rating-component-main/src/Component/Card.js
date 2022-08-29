import React, { useState } from "react";
import Rating from "./Rating";
import Thanks from "./Thanks";
const Card = () => {
  const [feedback, getfeedback] = useState("none");
  const [ratingShow, getRating] = useState("block");
  const [setRate, setRateCnt] = useState(0);
  const [prevCapt, capt] = useState({});
  function getRate(event){
    event.target.style.backgroundColor = "hsl(25, 97%, 53%)";
    event.target.style.color = "white";
    setRateCnt(event.target.id);
    capt(event.target);
    if (prevCapt.id) {
      if(prevCapt.id!==event.target.id){
        prevCapt.style.backgroundColor = "hsl(216, 16%, 30%)";
        prevCapt.style.color = "hsl(216, 12%, 54%)";
      }
    }
    
  };
  const submit = () => {
    if (setRate) {
      getRating("none");
      getfeedback("block");
    }
  };
  return (
    <>
      <div className="card">
        <Rating call={submit} inputRating={ratingShow} rate={getRate} />
        <Thanks show={feedback} num={setRate} />
      </div>
    </>
  );
};

export default Card;
