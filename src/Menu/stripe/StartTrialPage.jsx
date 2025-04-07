import React, { useEffect } from "react";
import { startTrial } from "./StripeService";
import { useNavigate } from "react-router-dom";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";
import "./PurchaseSuccessPage.css";

const StartTrialPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    startTrial();
  }, []);

  const handleGoToGame = () => {
    navigate("/"); // Change "/game" to your actual game route
  };

  return (
    <div className="payment-success-page">
      <div className="payment-content">
        <CheckCircleIcon className="payment-check-icon" />
        <h1 className="payment-title">{t("startTrial.title")}</h1>
        <p className="payment-subtitle">{t("startTrial.subtitle")}</p>

        <div className="payment-message">
          <p>✨ {t("startTrial.enjoy")}</p>
          <p>❤️ {t("startTrial.specialMoments")}</p>
        </div>

        <button className="payment-button" onClick={handleGoToGame}>
          {t("startTrial.startNow")}
        </button>
      </div>
    </div>
  );
};

export default StartTrialPage;
