import React from "react";

const Testimonial = (props) => {
  return (
    <>
      <div className="userCard">
        <div className="userDescription">
          <div className="userText">
            <p className="detailPara">{props.para}</p>
            <p className="short-bio">
              <span className="bio-name">{props.name}</span>
              <span className="bio-work">{props.work}</span>
            </p>
          </div>
          <img src={props.profile} className="userIcon" />
        </div>
        
      </div>
    </>
  );
};

export default Testimonial;
