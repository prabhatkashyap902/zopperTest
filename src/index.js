import React from 'react';
import ReactDOM from "react-dom";
import App from "./Components/App";
import "./css/main.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

