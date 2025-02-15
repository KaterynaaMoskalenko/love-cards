import React from "react";
import { useTranslation } from "react-i18next";
import {
  ArchiveBoxIcon,
  ArrowUturnLeftIcon,
  HeartIcon,
  InformationCircleIcon, TagIcon,
} from "@heroicons/react/20/solid";
import { getPurchaseStatus, initiatePurchase } from "./stripe/StripeService";
import MenuItem from "./menuPage/MenuItem";

import "./Menu.css";
import LanguageMenuItem from "./menuPage/LanguageMenuItem";
import { useNavigate } from "react-router";
import CategoryChangeMenuItem from "./menuPage/CategoryChangeMenuItem";
import NotPaidMenuItem from "./menuPage/NotPaidMenuItem";

function MenuPage({
  closePopup,
  categoryFilters,
  setCategoryFilters,
  isClosing,
  isPopupVisible,
}) {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const isPaid = getPurchaseStatus();

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

            {isPaid
                ? (
                    <MenuItem
                        icon={<ArchiveBoxIcon width={"20px"} />}
                        labelKey={"history"}
                        onClick={() => {
                          closePopup();
                          navigate("/history");
                        }}
                    />
                )
                : (
                    <NotPaidMenuItem
                        icon={<ArchiveBoxIcon width={"20px"} />}
                        labelKey={"history"}
                    />
                )
            }

            {isPaid
                ? (
                    <MenuItem
                        icon={<HeartIcon width={"20px"} />}
                        labelKey={"favorites"}
                        onClick={() => {
                          closePopup();
                          navigate("/favorites");
                        }}
                    />
                )
                : (
                    <NotPaidMenuItem icon={<HeartIcon width={"20px"} />} labelKey={"favorites"} />
                )
            }

            {isPaid
                ? (
                    <CategoryChangeMenuItem
                        categoryFilters={categoryFilters}
                        setCategoryFilters={setCategoryFilters}
                    />
                )
                : (
                    <NotPaidMenuItem labelKey={"categoryChange"} icon={<TagIcon height={20}/>} />
                )
            }

            <MenuItem
              icon={<InformationCircleIcon width={"20px"} />}
              labelKey={"about"}
              onClick={() => {
                closePopup();
                navigate("/about");
              }}
            />

            {!isPaid && (
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
