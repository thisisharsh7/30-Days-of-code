import React, { useState } from "react";
const validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const UserFill = () => {
  const [keepInput , setInput] = useState("");
  
  function keepEmail(event){
    setInput(event.target.value);
  }

  function checkInput(event){
    console.log(keepInput);
    if(keepInput.match(validRegex)) return ;

    setInput("Please enter a valid email")
    event.preventDefault();

  }
  return (
    <>
      <div id="userFill">
        <h2>Get early access today</h2>
        <p>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <form onSubmit={checkInput}>
          <input type="text" placeholder="email@example.com" onChange={keepEmail} value={keepInput}/>
          <button type="submit">Get Started For Free</button>
        </form>
      </div>
    </>
  );
};

export default UserFill;
