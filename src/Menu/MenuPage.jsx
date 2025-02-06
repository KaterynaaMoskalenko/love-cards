import React from "react";
import { useTranslation } from "react-i18next";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Switch,
} from "@headlessui/react";
// import { ArchiveBox } from "@heroicons/react/20/solid";
import {
  ArchiveBoxIcon,
  ArrowUturnLeftIcon,
  HeartIcon,
  InformationCircleIcon,
} from "@heroicons/react/20/solid";
import { getPurchaseStatus, initiatePurchase } from "./stripe/StripeService";
import { useNavigate } from "react-router";
import MenuItem from "./MenuItem";

import "./Menu.css";

const languageOptions = [
  { code: "en", name: "English" },
  { code: "ua", name: "Ukrainian" },
  { code: "pl", name: "Polish" },
];

function MenuPage({
  closePopup,
  categoryFilters,
  setCategoryFilters,
  isClosing,
  isPopupVisible,
}) {
  const { t, i18n } = useTranslation();

  const navigate = useNavigate();
  const handleCategoryChange = (category, enabled) => {
    setCategoryFilters({ ...categoryFilters, [category]: !enabled });
  };

  const handleLanguageChange = (code) => {
    i18n.changeLanguage(code);
  };
  return (
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
                <div>
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
            </Popover>

            <MenuItem
              icon={<ArchiveBoxIcon width={"20px"} />}
              labelKey={"history"}
              onClick={() => {
                closePopup();
                navigate("/history");
              }}
            />

            <MenuItem
              icon={<HeartIcon width={"20px"} />}
              labelKey={"favorites"}
              onClick={() => {
                closePopup();
                navigate("/favorites");
              }}
            />

            <Popover>
              <PopoverButton as={<MenuItem label="categoryChange" icon={<ArchiveBoxIcon/>}/>}>
                Category change
              </PopoverButton>
              <PopoverPanel className="language-popover-panel" transition>
                <div className="flex flex-col">
                  {Object.entries(categoryFilters).map(
                    ([category, enabled]) => {
                      return (
                        <div>
                          <input
                            type="checkbox"
                            id="scales"
                            name="scales"
                            checked={enabled}
                            onChange={() =>
                              handleCategoryChange(category, enabled)
                            }
                          />
                          <label for="scales">
                            {t(`categories.${category}`)}
                          </label>
                        </div>
                      );
                    }
                  )}
                </div>
              </PopoverPanel>
            </Popover>
            <MenuItem
              icon={<InformationCircleIcon width={"20px"} />}
              labelKey={"about"}
              onClick={() => {
                closePopup();
                navigate("/about");
              }}
            />
            <li>
              {!getPurchaseStatus() && (
                <div onClick={initiatePurchase}>checkout</div>
              )}
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuPage;
