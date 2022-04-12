// react
import React from "react";
// react dom
import { createRoot } from "react-dom/client";
// styles
import "./index.css";
// app component
import App from "./App";
// performance monitoring
import reportWebVitals from "./reportWebVitals";

// 👇 use createRoot in React18
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
