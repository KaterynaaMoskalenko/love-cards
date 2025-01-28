import React, { useState } from "react";
import { getFavoriteQuestions, removeFromFavorites } from "./FavoritesService";
import { useNavigate } from "react-router";

export const FavoriteQuestionsPage = () => {
  const [favoriteQuestions, setFavoriteQuestion] = useState(
    getFavoriteQuestions()
  );
  const navigate = useNavigate();
  //   const favorites = getFavoriteQuestions();

  return (
    <div>
      {favoriteQuestions.map((question) => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            {question.question}
            <div
              onClick={() => {
                const updatedFavoriteQuestions = removeFromFavorites(question);
                setFavoriteQuestion(updatedFavoriteQuestions);
              }}
            >
              X
            </div>
          </div>
        );
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
