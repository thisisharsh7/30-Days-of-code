import React from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
const Data = ["name", "now", "go", "what"];
function App() {
  return (
    <>
      {console.log(Data[0])}
      <div className="content">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
