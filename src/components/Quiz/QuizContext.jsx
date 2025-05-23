import React, { createContext, useContext, useState } from "react";

const QuizContext = createContext();

export const QuizProvider = ({ quizData, children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const goNext = () => {
    setCurrentIndex((idx) => Math.min(idx + 1, quizData.questions.length - 1));
  };
  const goBack = () => {
    setCurrentIndex((idx) => Math.max(idx - 1, 0));
  };
  const setAnswer = (questionId, value) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  return (
    <QuizContext.Provider
      value={{
        quizData,
        currentIndex,
        setCurrentIndex,
        answers,
        setAnswer,
        goNext,
        goBack,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => useContext(QuizContext);
