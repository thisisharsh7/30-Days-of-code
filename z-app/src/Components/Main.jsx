import React from "react";
import Card from "./Card";
import data from "../Components/data.json";
import { useScroll, motion } from "framer-motion";

function Main() {
  const { scrollYProgress } = useScroll()
  return (
    <>
      <motion.div style={{
        scaleX: scrollYProgress, position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 30,
        height: "6px",
        backgroundColor: "white",
        borderBlock: "2px solid black",
        transformOrigin: 0
      }} />
      <div className="card-body" >
        {

          data && data.reverse().map((sdata, index) => {
            let pic = '';
            let placeHolder = '';
            try {
              pic = require(`./images/screenshot${sdata.id}.jpg`);
              placeHolder = require(`./images/placeScreenshot${sdata.id}.jpg`)
            } catch (err) {
              pic = require(`./images/noImage.webp`);
              placeHolder = require(`./images/noImage.webp`)
            }
            return (
              <Card
                display={pic}
                placeHolder={placeHolder}
                goto={sdata.goto}
                title={sdata.title}
                cnt={sdata.cnt + sdata.id.toString()}
                key={sdata.id}
              />
            )

          })
        }
      </div>
    </>
  );
}

export default Main;
