import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Card from "./components/Card/Card";
import "./App.css";
import SwipeCard from "./components/Card/SwipeCard";
import Deck from "./components/Card/SwipeCard";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Deck />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
