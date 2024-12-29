// import { div } from "motion/react-client";
import React, { useState } from "react";
import { Link } from "react-router";
import "./Menu.css";
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

  const solutions = [
    {
      name: "Language",
      icon: ChartPieIcon,
      subOptions: [
        { name: "EN", href: "#english" },
        { name: "UA", href: "#ukrainian" },
        { name: "PL", href: "#polish" },
      ],
    },
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

  return (
    <div>
      <div className="menu-button-container">
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
            <h1 className="menu-header">Menu</h1>
            <button className="close-button" onClick={closePopup}>
              <ArrowUturnLeftIcon />
            </button>
            <div className="popup-content">
              <ul className={`menu-list ${isPopupVisible ? "move-down" : ""}`}>
                <li>
                  <Popover>
                    <PopoverButton className="language-popover-button">
                      Language
                      <ChevronDownIcon className="down-icon" />
                    </PopoverButton>
                    <PopoverPanel className="language-popover-panel" transition>
                      <div className="flex flex-col">
                        {solutions
                          .find((item) => item.name === "Language")
                          ?.subOptions.map((subItem) => (
                            <div key={subItem.name} className="language-option">
                              <a
                                href={subItem.href}
                                className="font-semibold text-gray-900"
                              >
                                {subItem.name}
                                <span className="absolute inset-0" />
                              </a>
                            </div>
                          ))}
                      </div>
                    </PopoverPanel>
                  </Popover>

                  {/* <a href="#option1">Language</a> */}
                </li>
                <li>
                  <a href="#option2">Card history</a>
                </li>
                <li>
                  <a href="#option3">About</a>
                </li>

                <li>
                  <a href="#option1">Favorites</a>
                </li>
                <li>
                  <a href="#option2">Category change</a>
                </li>
              </ul>

              {/* <Popover className="relative">
                <PopoverButton className="inline-flex items-center gap-x-1 text-sm font-semibold text-gray-900">
                  <span>Solutions</span>
                  <ChevronDownIcon aria-hidden="true" className="size-5" />
                </PopoverButton>

                <PopoverPanel
                  className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4"
                  transition
                >
                  <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm shadow-lg ring-1 ring-gray-900/5">
                    <div className="p-4">
                      {solutions.map((item) => (
                        <div
                          key={item.name}
                          className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
                        >
                          <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            <item.icon
                              aria-hidden="true"
                              className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                            />
                          </div>
                          <div>
                            <a
                              href={item.href}
                              className="font-semibold text-gray-900"
                            >
                              {item.name}
                              <span className="absolute inset-0" />
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </PopoverPanel>
              </Popover> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MenuButton;
