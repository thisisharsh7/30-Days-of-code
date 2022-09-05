import React from "react";
import Card from "./Card";
import profile1 from "./profile-1.jpg";
import profile2 from "./profile-2.jpg";
import profile3 from "./profile-3.jpg";

const AllCards = () => {
  return (
    <>
      <div id="allCards">
        <Card
          desc="  Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
  become a well-oiled collaboration machine."
          userImg={profile1}
          name=" Satish Patel"
          work="Founder & CEO, Huddle"
        />
        <Card
          desc="  Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
  become a well-oiled collaboration machine."
          userImg={profile2}
          name="Bruce McKenzie"
          work="Founder & CEO, Huddle"
        />
        <Card
          desc="  Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
  become a well-oiled collaboration machine."
          userImg={profile3}
          name=" Iva Boyd"
          work="Founder & CEO, Huddle"
        />
      </div>
    </>
  );
};

export default AllCards;