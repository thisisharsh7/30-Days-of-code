import React, { useState } from "react";
import Testimonial from "./Testimonial";
import Profile1 from "./images/image-tanya.jpg";
import Profile2 from "./images/image-john.jpg";
let detail = [
  "“ I’ve been interested in coding for a while but never taken thejump, until now. I couldn’t recommend this course enough. I’m nowin the job of my dreams and so excited about the future. ”",
  " “ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
];
let user = ["Tanya Sinclair", "John Tarkpor"];
let job = ["UX Engineer", "Junior Front-end Developer"];
let allProfile = [Profile1 , Profile2];

const Main = () => {
  const [cnt , setCnt] = useState(0)
const CardPrev = () => {
  if(cnt!==0){
    setCnt(cnt-1);
  }else{
    alert("Previous do not exist.")
  }
}
const CardNext = () => {
  if(cnt!==1){
    setCnt(cnt+1);
  }else{
    alert("Next do not exist.")
  }
}
  return (
    <>
      <main>
        <Testimonial para={detail[cnt]} name={user[cnt]} work={job[cnt]} profile={allProfile[cnt]} prevShow={CardPrev} nextShow={CardNext} />
      </main>
    </>
  );
};

export default Main;
