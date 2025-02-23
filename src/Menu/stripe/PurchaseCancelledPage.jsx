import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";
import "./PurchaseCancelledPage.css";
import {clearPurchaseStatus, initiatePurchase} from "./StripeService";

const PurchaseCancelledPage = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    useEffect(() => {
        clearPurchaseStatus();
    }, []);

    const handleBackToApp = () => {
        navigate("/"); // Change this to your app's main route
    };

    return (
        <div className="payment-cancelled-page">
            <div className="payment-content">
                <XCircleIcon className="payment-cancel-icon" />
                <h1 className="payment-title">{t("paymentCancelled.title")}</h1>
                <p className="payment-subtitle">{t("paymentCancelled.subtitle")}</p>

                <div className="payment-message">
                    <p>⚠️ {t("paymentCancelled.message")}</p>
                </div>

                <div className="payment-actions">
                    <button className="payment-button" onClick={initiatePurchase}>
                        {t("paymentCancelled.retryButton")}
                    </button>
                    <button className="payment-secondary-button" onClick={handleBackToApp}>
                        {t("paymentCancelled.backButton")}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PurchaseCancelledPage;
