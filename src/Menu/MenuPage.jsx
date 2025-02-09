import React from "react";
import { useTranslation } from "react-i18next";
import {
  ArchiveBoxIcon,
  ArrowUturnLeftIcon,
  HeartIcon,
  InformationCircleIcon,
} from "@heroicons/react/20/solid";
import { getPurchaseStatus, initiatePurchase } from "./stripe/StripeService";
import MenuItem from "./menuPage/MenuItem";

import "./Menu.css";
import LanguageMenuItem from "./menuPage/LanguageMenuItem";
import { useNavigate } from "react-router";
import CategoryChangeMenuItem from "./menuPage/CategoryChangeMenuItem";

function MenuPage({
  closePopup,
  categoryFilters,
  setCategoryFilters,
  isClosing,
  isPopupVisible,
}) {
  const { t } = useTranslation();

  const navigate = useNavigate();

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
        <div className="popup-content settings-container">
          <div className={`menu-list ${isPopupVisible ? "move-down" : ""}`}>
            <LanguageMenuItem />

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

            <CategoryChangeMenuItem
              categoryFilters={categoryFilters}
              setCategoryFilters={setCategoryFilters}
            />

            <MenuItem
              icon={<InformationCircleIcon width={"20px"} />}
              labelKey={"about"}
              onClick={() => {
                closePopup();
                navigate("/about");
              }}
            />

            {!getPurchaseStatus() && (
              <div className="promo-card" onClick={initiatePurchase}>
                <div className="promo-text">
                  <h2>Get a free subscription, sneak peeks & more!</h2>
                  <p>Join the community </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuPage;
