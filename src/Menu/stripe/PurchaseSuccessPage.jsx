import React, { useEffect } from "react";
import { storePurchaseSuccess } from "./StripeService";
import { useNavigate } from "react-router-dom";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";
import "./PurchaseSuccessPage.css";
import {logPurchaseCompleted} from "../../analytics/analytics";

const PurchaseSuccessPage = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    useEffect(() => {
        logPurchaseCompleted();
        storePurchaseSuccess();
    }, []);

    const handleGoToGame = () => {
        navigate("/"); // Change "/game" to your actual game route
    };

    return (
        <div className="payment-success-page">
            <div className="payment-content">
                <CheckCircleIcon className="payment-check-icon" />
                <h1 className="payment-title">{t("paymentSuccess.title")}</h1>
                <p className="payment-subtitle">{t("paymentSuccess.subtitle")}</p>

                <div className="payment-message">
                    <p>✨ {t("paymentSuccess.enjoy")}</p>
                    <p>❤️ {t("paymentSuccess.specialMoments")}</p>
                </div>

                <button className="payment-button" onClick={handleGoToGame}>
                    {t("paymentSuccess.startNow")}
                </button>
            </div>
        </div>
    );
};

export default PurchaseSuccessPage;
