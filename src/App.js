import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MenuButton from "./Menu/MenuButton";
import MenuPage from "./Menu/MenuPage";
import "./App.css";
import Deck from "./components/Card/SwipeCard";

function App() {
  return (
    <Router>
      <div className="App">
        <MenuButton />
        <Routes>
          <Route path="/" element={<Deck />} />
          <Route path="/menu" element={<MenuPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
