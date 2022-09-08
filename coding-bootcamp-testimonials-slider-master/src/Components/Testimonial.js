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
          <div className="grpBtn">
            <img src={props.profile} className="userIcon" alt="between-user" />
            <p className="btnChange">
              <span onClick={props.prevShow}>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="18">
                  <path
                    fill="none"
                    stroke={props.setColor1}
                    strokeWidth="3"
                    d="M11 1L3 9l8 8"
                  />
                </svg>
              </span>
              <span onClick={props.nextShow}>
                <svg
                  xmlns={"http://www.w3.org/2000/svg"}
                  width="13"
                  height="18"
                >
                  <path
                    fill="none"
                    stroke={props.setColor2}
                    strokeWidth="3"
                    d="M2 1l8 8-8 8"
                  />
                </svg>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
