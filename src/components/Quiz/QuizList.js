import React from 'react';
import { Helmet } from 'react-helmet-async';
import QuizCard from './QuizCard';
import quizRegistry from '../../data/quizRegistry';
import './QuizList.css';

const QuizList = () => {
  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>Relationship Quizzes | Two of Us Cards - Strengthen Your Bond</title>
        <meta name="description" content="Discover your relationship strengths with our collection of research-based quizzes. Take our Love Language, Attachment Style, Emotional Intelligence, and Conflict Resolution quizzes to deepen your connection and improve communication with your partner." />
        <meta name="keywords" content="relationship quiz, love language test, attachment style quiz, emotional intelligence test, conflict resolution quiz, couples quiz, relationship assessment, love test" />
        <meta name="author" content="Two of Us Cards" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Relationship Quizzes | Two of Us Cards - Strengthen Your Bond" />
        <meta property="og:description" content="Discover your relationship strengths with our collection of research-based quizzes. Take our Love Language, Attachment Style, Emotional Intelligence, and Conflict Resolution quizzes." />
        <meta property="og:image" content="https://twoofuscards.com/social-preview-quizzes.png" />
        <meta property="og:url" content="https://app.twoofuscards.com/quizzes" />
        <meta property="og:site_name" content="Two of Us Cards" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Relationship Quizzes | Two of Us Cards - Strengthen Your Bond" />
        <meta name="twitter:description" content="Discover your relationship strengths with our collection of research-based quizzes." />
        <meta name="twitter:image" content="https://twoofuscards.com/social-preview-quizzes.png" />
        
        {/* Additional SEO Tags */}
        <meta name="theme-color" content="#ff6b6b" />
        <meta name="application-name" content="Two of Us Cards" />
        <meta name="apple-mobile-web-app-title" content="Two of Us Cards" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://app.twoofuscards.com/quizzes" />
      </Helmet>
      
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
    </>
  );
};

export default QuizList; 