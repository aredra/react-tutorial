import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import PersonContext from "./contexts/PersonContext";

const people = [
  { id: 0, name: "aredra", age: 9999 },
  { id: 1, name: "dra", age: 9999 },
];

ReactDOM.render(
  <React.StrictMode>
    <PersonContext.Provider value={people}>
      <App />
    </PersonContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
