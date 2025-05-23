import React from "react";
import { XMarkIcon, FireIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";
import "./UnlockPaidFeaturesPopup.css";
import { initiatePurchase } from "../../Menu/stripe/StripeService";
import {logPurchaseButtonClicked} from "../../analytics/analytics";

const UnlockPaidFeaturesPopup = ({ onClose, isShowPopup }) => {
    const { t } = useTranslation();

    const handlePayButtonClick = () => {
        logPurchaseButtonClicked("unlockPaidFeaturesModal");
        initiatePurchase();
    }

    return isShowPopup && (
        <div className="unlock-popup">
            <div className="unlock-overlay">
                <div className="unlock-modal" onClick={(e) => e.stopPropagation()}>
                    <XMarkIcon className="unlock-close-icon" onClick={onClose} />

                    {/* Header */}
                    <div className="unlock-header">
                        <FireIcon className="unlock-flame" />
                        <h2 className="unlock-title">{t("unlockPaidFeatures.title")}</h2>
                        <p className="unlock-subtitle">{t("unlockPaidFeatures.subtitle")}</p>
                    </div>

                    {/* Feature List */}
                    <ul className="unlock-features">
                        <li>🃏 {t("unlockPaidFeatures.features.questions")}</li>
                        <li>⭐ {t("unlockPaidFeatures.features.favorites")}</li>
                        <li>📜 {t("unlockPaidFeatures.features.history")}</li>
                        <li>🎯 {t("unlockPaidFeatures.features.categories")}</li>
                        <li>🔓 {t("unlockPaidFeatures.features.oneTimePayment")}</li>
                    </ul>

                    {/* Pricing Section */}
                    <div className="unlock-pricing">
                        <p className="unlock-price">{t("unlockPaidFeatures.price")}</p>
                    </div>

                    {/* Purchase Button */}
                    <button className="unlock-button" onClick={handlePayButtonClick}>{t("unlockPaidFeatures.unlockNow")}</button>

                    {/* Restore Purchases & Legal Links */}
                    <div className="unlock-restore">{t("unlockPaidFeatures.restorePurchases")}</div>
                    <div className="unlock-legal">
                        <span>{t("unlockPaidFeatures.terms")}</span> | <span>{t("unlockPaidFeatures.privacy")}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UnlockPaidFeaturesPopup;
