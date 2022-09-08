import React, { useState } from "react";
import Toggle from "./Toggle";
import AllCard from "./AllCard";

const Main = () => {
  const [setIndex , getIndex] = useState(0);
  function moveClick(event){
    if(setIndex===1){
      getIndex(0);
      event.target.classList.remove("toggleLeft");
      event.target.classList.add("toggleRight");
    }else{
      getIndex(1);
      event.target.classList.remove("toggleRight");
      event.target.classList.add("toggleLeft");
    }
    
    
  }
  return (
    <>
      <main>
        <Toggle moveHorizon={moveClick} />
        <AllCard index={setIndex} />
      </main>
    </>
  );
};

export default Main;
