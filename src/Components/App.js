import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../css/main.css";
import Body from "./Body";
import Header from "./Header";
import Page2 from './Page2';
import Page1 from './Page1'


function App() {

  function changePage() {
    console.log("check");
  }
  // if (change) return <Redirect to={{ pathname: "/Page2" }} />;
  return (
    <>
      <Switch>
        <Route exact path="/" component={Page1} />
        <Route path="/Page2" component={Page2} />
      </Switch>
    </>
  );
}

export default App;
