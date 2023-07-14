import React from "react";
import Card from "./Card";
import data from "../Components/data.json";

function Main() {
  return (
    <>
      <div className="card-body" >
        {
          
          data && data.reverse().map((sdata) =>{
          let pic = '';
        try {
          pic = require(`./images/screenshot${sdata.id}.jpg`);
          }catch(err){
          pic = require(`./images/noImage.webp`);
          }
        return(
        <Card
          display={pic}
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
