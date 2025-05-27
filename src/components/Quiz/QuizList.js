import React from 'react';
import QuizCard from './QuizCard';
import quizRegistry from '../../data/quizRegistry';
import './QuizList.css';

const QuizList = () => {
  return (
    <div className="quiz-list-container">
      <div className="quiz-list-header">
        <h1>Relationship Quizzes</h1>
        <p className="quiz-list-description">
          Discover more about yourself and your relationships through these insightful quizzes.
        </p>
      </div>

      <div className="quiz-grid">
        {Object.values(quizRegistry).map(quiz => (
          <QuizCard key={quiz.id} quiz={quiz} />
        ))}
      </div>
    </div>
  );
};

export default QuizList; 