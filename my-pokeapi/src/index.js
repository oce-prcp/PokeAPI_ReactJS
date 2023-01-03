import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { render } from "react-dom";
import { Provider } from "react-redux";
import VisibleLogin from "./containers/VisibleLogin";
import Login from "./components/Login/Login";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
