import React from "react";
import NextCard from "./images/icon-next.svg";
import PrevCard from "./images/icon-prev.svg";


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
          <div className="grpBtn">
          <img src={props.profile} className="userIcon" alt="between-user"/>
          <p className="btnChange"><span onClick={props.prevShow}><img src={PrevCard} alt="left"></img></span><span  onClick={props.nextShow} ><img src={NextCard} alt="right"></img></span></p>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Testimonial;
