import React from "react";
import Toggle from "./Toggle";
import AllCard from "./AllCard";
let setIndex = 0;
const Main = () => {
  return (
    <>
      <main>
        <Toggle />
        <AllCard index={setIndex} />
      </main>
    </>
  );
};

export default Main;
