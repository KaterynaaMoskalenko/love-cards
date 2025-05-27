import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./i18n";

const rootElement = document.getElementById("root");

// Check if the page was pre-rendered by react-snap
const isPrerendered = rootElement.hasChildNodes();

if (isPrerendered) {
  // Use hydrate for pre-rendered content
  ReactDOM.hydrateRoot(rootElement, <App />);
} else {
  // Use render for client-only pages
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
