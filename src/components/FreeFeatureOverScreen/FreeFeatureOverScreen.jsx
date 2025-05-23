import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./FreeFeatureOverScreen.css";
import { initiatePurchase } from "../../Menu/stripe/StripeService";
import {logPurchaseButtonClicked} from "../../analytics/analytics";

const FreeFeatureOverScreen = () => {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const onPayClick = () => {
      logPurchaseButtonClicked("freeFeatureOverScreen");
      initiatePurchase();
    }

    return (
        <div className={`free-feature-over-modal ${isVisible ? "fade-in" : ""}`} onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="free-feature-over-header">
                <div className="free-feature-over-fireworks">🎉</div>
                <h2 className="free-feature-over-title">{t("freeFeatureOverScreen.header")}</h2>
                <p className="free-feature-over-subtitle">{t("freeFeatureOverScreen.subtitle")}</p>
            </div>

            {/* Pricing Section */}
            <div className="free-feature-over-pricing">
                <p className="free-feature-over-price">{t("freeFeatureOverScreen.pricing")}</p>
            </div>

            {/* Purchase Button */}
            <button className="free-feature-over-button" onClick={onPayClick}>
                {t("freeFeatureOverScreen.purchaseButton")}
            </button>

            {/* Legal Links */}
            <div className="free-feature-over-legal">
                <span className="free-feature-over-legal-link">{t("freeFeatureOverScreen.termsOfService")}</span> |
                <span className="free-feature-over-legal-link">{t("freeFeatureOverScreen.privacyPolicy")}</span>
            </div>
        </div>
    );
};

export default FreeFeatureOverScreen;