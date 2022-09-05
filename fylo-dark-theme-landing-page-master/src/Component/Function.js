import React from "react";

const Function = (props) => {
  return (
    <>
      <div className="function">
        <img src={props.image} alt="access-anywhere" />
        <h3>{props.headerText}</h3>
        <p>{props.paraText}</p>
      </div>
    </>
  );
};

export default Function;
