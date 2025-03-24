import React from "react";
import { getQuestionHistory } from "./HistoryService";
import { useNavigate } from "react-router";

import "./QuestionsHistoryPage.css";
import {useTranslation} from "react-i18next";
import ZeroState from "../../components/ZeroState/ZeroState";

export const QuestionsHistoryPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const history = getQuestionHistory().reverse();

  if (history.length === 0) {
      return <ZeroState type={"history"} onAction={() => navigate("/")}/>;
  }

    return (
        <div className="history-container">
            <h2 className="history-title">History</h2>
            <div className="history-grid">
                {history.map((item) => (
                    <div key={item.id} className={`history-card ${item.category}`}>
                        <p className="history-category">{t(`categories.${item.category}`)}</p>
                        <p className="history-question">{item.question}</p>
                    </div>
                ))}
            </div>
        <div onClick={() => {navigate("/")}}>
            Back to game
        </div>
</div>

)
    ;
};
