// import { div } from "motion/react-client";
import React, { useState } from "react";
import { Link } from "react-router";
import "./Menu.css";
import { useTranslation } from "react-i18next";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import {
  ChevronDownIcon,
  ArrowUturnLeftIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";

function MenuButton() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const { t, i18n } = useTranslation();

  const languageOptions = [
    { code: "en", name: "English" },
    { code: "ua", name: "Ukrainian" },
    { code: "pl", name: "Polish" },
  ];

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
  const handleLanguageChange = (code) => {
    i18n.changeLanguage(code);
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
        <div
          className={`popup-overlay ${isClosing ? "close" : ""}`}
          onClick={closePopup}
        >
          <div className="popup-window" onClick={(e) => e.stopPropagation()}>
            <h1 className="menu-header">Settings</h1>
            <button className="close-button" onClick={closePopup}>
              <ArrowUturnLeftIcon />
            </button>
            <div className="popup-content">
              <div className={`menu-list ${isPopupVisible ? "move-down" : ""}`}>
                {/* <li> */}
                <Popover>
                  <PopoverButton className="language-popover-button">
                    Language
                    {/* <ChevronDownIcon className="down-icon" /> */}
                  </PopoverButton>
                  <PopoverPanel className="language-popover-panel" transition>
                    <div className="flex flex-col">
                      {languageOptions.map((subItem) => (
                        <div
                          key={subItem.name}
                          className="language-option text-gray-700"
                          style={{
                            fontSize: "0.9rem",
                            fontweight: "300",
                          }}
                          onClick={() => handleLanguageChange(subItem.code)}
                        >
                          {subItem.name}
                        </div>
                      ))}
                    </div>
                  </PopoverPanel>

                  <li>
                    <a href="#option2">History</a>
                  </li>

                  <li>
                    <a href="#option1">Favorites</a>
                  </li>
                  <li>
                    <a href="#option2">Category change</a>
                  </li>
                  <li>
                    <a href="#option3">About</a>
                  </li>
                </Popover>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MenuButton;
