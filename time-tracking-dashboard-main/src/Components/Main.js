import React, { useState } from "react";
import Card from "./Card";
import Hero from "./Hero";
import data from "./data.json";

const Main = () => {
  const [getPeriod, setPeriod] = useState("Weekly");
  function chngData(event) {
    setPeriod(event.target.innerText);
  }
  return (
    <>
      <main>
        <Hero btnClick={chngData} cuText={getPeriod} />
        {data &&
          data.map((sdata, index) => {
            const pic = require(`${sdata.bimg}`);
            let cur = sdata.timeframes;
            let pre = sdata.timeframes;
            if (getPeriod == "Monthly") {
              cur = cur.monthly.current;
              pre = pre.monthly.previous;
            } else if (getPeriod == "Daily") {
              cur = cur.daily.current;
              pre = pre.daily.previous;
            } else {
              cur = cur.weekly.current;
              pre = pre.weekly.previous;
            }
            return (
              <Card
                title={sdata.title}
                current={cur}
                previous={pre}
                key={index}
                color={sdata.color}
                bg={pic}
              />
            );
          })}
      </main>
    </>
  );
};

export default Main;
