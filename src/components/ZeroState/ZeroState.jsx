import React from "react";
import { useTranslation } from "react-i18next";
import "./ZeroState.css";

const ZeroState = ({ type, onAction }) => {
    const { t } = useTranslation();

    return (
        <div className="zero-state-container">
            {type === "history" ? (
                <div className="zero-state-content">
                    <div className="zero-state-icon" aria-label={t("zeroState.history.iconLabel")}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                    </div>
                    <h3>{t("zeroState.history.title")}</h3>
                    <p>{t("zeroState.history.description")}</p>
                    <button className="zero-state-button" onClick={onAction}>
                        {t("zeroState.history.button")}
                    </button>
                </div>
            ) : (
                <div className="zero-state-content">
                    <div className="zero-state-icon" aria-label={t("zeroState.favorites.iconLabel")}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 21C12 21 4 13.5 4 8.5C4 5.5 6.5 3 9.5 3C11.5 3 12 5 12 5C12 5 12.5 3 14.5 3C17.5 3 20 5.5 20 8.5C20 13.5 12 21 12 21Z"></path>
                            <line x1="12" y1="10" x2="10" y2="12"></line>
                            <line x1="12" y1="14" x2="14" y2="12"></line>
                        </svg>
                    </div>
                    <h3>{t("zeroState.favorites.title")}</h3>
                    <p>{t("zeroState.favorites.description")}</p>
                    <button className="zero-state-button" onClick={onAction}>
                        {t("zeroState.favorites.button")}
                    </button>
                </div>
            )}
        </div>
    );
};

export default ZeroState;
