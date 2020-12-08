import React, { useState } from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import "../css/main.css";
import Body from "./Body";
import Header from "./Header";

function App() {
  const [change, setChange] = useState(false);
  function changePage() {
    console.log("check");
    setChange(true);
  }
  if (change) return <Redirect to={{ pathname: "/Page2" }} />;
  return (
    <>
      <div className="App">
        <Header />
        <Body redirect={changePage} />
      </div>
    </>
  );
}

export default App;
