import React from "react";
import { Link } from "react-router";

function MenuButton() {
  return (
    <div className="menu-button-container">
      <Link to="/menu" className="menu-icon">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </Link>
    </div>
  );
}

export default MenuButton;
