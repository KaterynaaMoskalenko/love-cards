import React from "react";
import { useState, useEffect } from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import { questionsAll } from "../../data/QuestionsData";


const Card = () => {
  const [randomQuestion, setRandomQuestion] = useState("");
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    setRandomQuestion(
      questionsAll[Math.floor(Math.random() * questionsAll.length)]
    );
  }, []);

  const handleFlip = () => {
    setIsFlipped((prevState) => {
      // When the card is flipped back, set a new random question
      if (prevState) {
        setRandomQuestion(
          questionsAll[Math.floor(Math.random() * questionsAll.length)]
        );
      }
      return !prevState; // Toggle the state
    });
  };

  return (
    <div className="card-container">
      {/* Flip card component */}
      <label className="card">
        <input type="checkbox" className="card-toggle" />
        <div className="flip-card-inner">
          <div onClick={handleFlip}>
            {!isFlipped ? (
              <div className="card-front">
                <p>Click</p>
              </div>
            ) : (
              <div className="card-back">
                <p>{randomQuestion}</p>
              </div>
            )}
          </div>
        </div>
      </label>
    </div>
  );
};

export default Card;
