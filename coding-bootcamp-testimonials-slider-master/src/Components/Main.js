import React, { useState } from "react";
import Testimonial from "./Testimonial";
import Profile1 from "./images/image-tanya.jpg";
import Profile2 from "./images/image-john.jpg";
let detail = [
  "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
  " “ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
];
let user = ["Tanya Sinclair", "John Tarkpor"];
let job = ["UX Engineer", "Junior Front-end Developer"];
let allProfile = [Profile1, Profile2];

const Main = () => {
  const [cnt, setCnt] = useState(0);
  const [getColor, getColorOn] = useState({
    color1: "hsla(240, 18%, 77%)",
    color2: "hsl(240, 38%, 20%)",
  });
  const CardPrev = () => {
    document.querySelector(".userCard").classList.add("prevUserCard"); 
    document.querySelector(".userCard").classList.remove("nextUserCard"); 
    if (cnt !== 0) {
      setCnt(cnt - 1);
      getColorOn(() => {
        return {
          color1: "hsla(240, 18%, 77%)",
          color2: "hsl(240, 38%, 20%)",
        };
      });
    }
  };
  const CardNext = () => {
    document.querySelector(".userCard").classList.remove("prevUserCard"); 
    document.querySelector(".userCard").classList.add("nextUserCard");
    if (cnt !== 1) {
      setCnt(cnt + 1);
      getColorOn(() => {
        return {
          color1: "hsl(240, 38%, 20%)",
          color2: "hsla(240, 18%, 77%)",
        };
      });
    }
  };
  return (
    <>
      <main>
        <Testimonial
          para={detail[cnt]}
          name={user[cnt]}
          work={job[cnt]}
          profile={allProfile[cnt]}
          prevShow={CardPrev}
          nextShow={CardNext}
          setColor1={getColor.color1}
          setColor2={getColor.color2}
        />
      </main>
    </>
  );
};

export default Main;
