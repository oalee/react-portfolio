import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

if (window.location.hostname !== "lrhm.xyz")
  window.location.replace("https://lrhm.xyz");
else ReactDOM.render(<App />, document.getElementById("root"));

// registerServiceWorker();
