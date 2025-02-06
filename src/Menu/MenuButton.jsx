// import { div } from "motion/react-client";
import React, { useState } from "react";

import "./Menu.css";

import MenuPage from "./MenuPage";

function MenuButton({ categoryFilters, setCategoryFilters }) {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const openPopup = () => {
    setIsPopupVisible(true);
    setIsClosing(false);
  };

  const closePopup = () => {
    setIsClosing(true);

    setTimeout(() => {
      setIsPopupVisible(false);
      setIsClosing(false);
    }, 150);
  };

  return (
    <div>
      <div className="menu-button-container">
        {/* <h1>TWO OF US</h1> */}
        <div className="menu-icon" onClick={openPopup}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>

      {isPopupVisible && (
        <MenuPage
          closePopup={closePopup}
          categoryFilters={categoryFilters}
          setCategoryFilters={setCategoryFilters}
          isClosing={isClosing}
          isPopupVisible={isPopupVisible}
        />
      )}
    </div>
  );
}

export default MenuButton;
