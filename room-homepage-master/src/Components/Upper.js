import React from "react";
import data from "./data.json";

const Upper = () => {
  return (
    <>
      <section>
        {
          data.title.map((stitle,index) => {
            return(
                <div key={index}>
                    {stitle}
                </div>
            )
          })
          }
      </section>
    </>
  );
};

export default Upper;
