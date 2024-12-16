import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Card from "./components/Card/Card";
import "./App.css";
import SwipeCard from "./components/Card/SwipeCard";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header or navigation can go here */}
        <Routes>
          {/* Define routes for the app */}
          <Route path="/" element={<SwipeCard />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
