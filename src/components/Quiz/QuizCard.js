import React from 'react';
import { useNavigate } from 'react-router-dom';
import quizCompletion from '../../utils/quizCompletion';
import { trackQuizCardClick } from '../../analytics/analytics';
import './QuizCard.css';

const QuizCard = ({ quiz }) => {
  const navigate = useNavigate();
  const isCompleted = quizCompletion.isCompleted(quiz.id);

  const handleStartQuiz = () => {
    trackQuizCardClick(quiz.id, quiz.title);
    navigate(`/quiz/${quiz.id}`);
  };

  return (
    <div className="quiz-card" onClick={handleStartQuiz}>
      <div className="quiz-card-header">
        <span className="quiz-icon">{quiz.icon}</span>
        {isCompleted && (
          <span className="completion-badge" title="Quiz Completed">
            ✓
          </span>
        )}
      </div>
      
      <div className="quiz-card-content">
        <h3 className="quiz-title">{quiz.title}</h3>
        <p className="quiz-description">{quiz.description}</p>
        
        <div className="quiz-meta">
          <span className="quiz-stats">
            {quiz.questions} questions • {quiz.estimatedTime}
          </span>
        </div>
      </div>

      <button className="quiz-action-button">
        {isCompleted ? 'Retake Quiz' : 'Start Quiz'}
      </button>
    </div>
  );
};

export default QuizCard; 