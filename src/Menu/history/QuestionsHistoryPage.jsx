import React from "react";
import { getQuestionHistory } from "./HistoryService";
import { useNavigate } from "react-router";

export const QuestionsHistoryPage = () => {
  const navigate = useNavigate();
  const history = getQuestionHistory();
  return (
    <div>
      {history.map((question) => {
        return <div>{question.question}</div>;
      })}
      <div
        onClick={() => {
          navigate("/");
        }}
      >
        Back to game
      </div>
    </div>
  );
};
