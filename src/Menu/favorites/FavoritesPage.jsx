import React, { useState } from "react";
import {
  addToFavorites,
  getFavoriteQuestions,
  removeFromFavorites,
} from "./FavoritesService";
import { useNavigate } from "react-router";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";

import "./FavoritesPage.css";
import { useTranslation } from "react-i18next";

export const FavoriteQuestionsPage = () => {
  const [favoriteQuestions, setFavoriteQuestion] = useState(
    getFavoriteQuestions().map((item) => ({ ...item, liked: true }))
  );
  const [toast, setToast] = useState(null);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const toggleFavorite = (item) => {
    if (item.liked) {
      removeFromFavorites(item);
    } else {
      addToFavorites(item);
    }

    const updatedFavoriteQuestions = favoriteQuestions.map((question) => {
      if (question.question === item.question) {
        return { ...question, liked: !question.liked };
      }
      return question;
    });
    setFavoriteQuestion(updatedFavoriteQuestions);

    // Show toast notification
    const toastText = !item.liked
      ? `Added to favorites: "${item.question}"`
      : `Removed from favorites: "${item.question}"`;
    setToast(toastText);

    // Hide toast after 3 seconds
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  return (
    <div className="favorites-container">
      <h2 className="favorites-title">Favorites</h2>
      <div className="favorites-grid">
        {favoriteQuestions.map((item) => (
          <div key={item.id} className={`favorites-card ${item.category}`}>
            <div className="favorites-content">
              <p className="favorites-category">
                {t(`categories.${item.category}`)}
              </p>
              <p className="favorites-question">{item.question}</p>
            </div>
            <button
              className="heart-button"
              onClick={() => toggleFavorite(item)}
            >
              {item.liked ? (
                <HeartIconSolid className="heart-icon filled" />
              ) : (
                <HeartIconOutline className="heart-icon outlined" />
              )}
            </button>
          </div>
        ))}
      </div>

      {/* Toast Notification */}
      {toast && <div className="toast">{toast}</div>}
    </div>
  );
};
