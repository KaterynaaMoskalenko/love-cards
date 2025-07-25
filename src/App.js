import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Routes, useLocation} from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import MenuButton from "./Menu/MenuButton";
import Header from "./Header/Header";
import "./App.css";
import PurchaseSuccessPage from "./Menu/stripe/PurchaseSuccessPage";
import PurchaseCancelledPage from "./Menu/stripe/PurchaseCancelledPage";
import { QuestionsHistoryPage } from "./Menu/history/QuestionsHistoryPage";
import { FavoriteQuestionsPage } from "./Menu/favorites/FavoritesPage";
import StartTrialPage from "./Menu/stripe/StartTrialPage";
import { UnlockPaidFeaturesPopupProvider } from "./components/UnlockPaidFeatures/UnlockPaidFeaturesContext";
import OnboardingDeck from "./OnboardingDeck/OnboardingDeck";
import {initGA} from "./analytics/analytics";
import {PageViewTracker} from "./analytics/PageViewTracker";
import QuizContainer from "./components/Quiz/QuizContainer";
import { loveLanguageQuiz } from "./components/Quiz/quizData";
import { attachmentStyleQuiz } from "./components/Quiz/attachmentStyleQuiz";
import conflictResolutionQuiz from './components/Quiz/conflictResolutionQuiz';
import emotionalIntelligenceQuiz from './components/Quiz/emotionalIntelligenceQuiz';
import QuizList from "./components/Quiz/QuizList";

const INITIAL_CATEGORY_FILTERS = {
  questionsKnowMeBetter: true,
  questionsRomanticSparks: true,
  questionsVisionValues: true,
  questionsTeamUs: true,
  questionsReflectGrow: true,
};

// Conditional components to hide header/menu on quiz pages
const ConditionalHeader = () => {
  const location = useLocation();
  const isQuizPage = location.pathname.startsWith('/quiz/');
  
  if (isQuizPage) return null;
  return <Header />;
};

const ConditionalMenuButton = ({ categoryFilters, setCategoryFilters }) => {
  const location = useLocation();
  const isQuizPage = location.pathname.startsWith('/quiz/');
  
  if (isQuizPage) return null;
  return <MenuButton categoryFilters={categoryFilters} setCategoryFilters={setCategoryFilters} />;
};

function App() {
  const [categoryFilters, setCategoryFilters] = useState(
    INITIAL_CATEGORY_FILTERS
  );

  useEffect(() => {
    initGA(); // only runs once
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <PageViewTracker />
                <UnlockPaidFeaturesPopupProvider>
          <div className="App">
            <ConditionalHeader />
            <ConditionalMenuButton 
              categoryFilters={categoryFilters}
              setCategoryFilters={setCategoryFilters}
            />

            <Routes>
              <Route
                path="/"
                element={<OnboardingDeck categoryFilters={categoryFilters} />}
              />
              <Route path="/history" element={<QuestionsHistoryPage />} />
              <Route path="/favorites" element={<FavoriteQuestionsPage />} />
              <Route path="/quizzes" element={<QuizList />} />
              <Route
                path="/purchase-completed-successfully"
                element={<PurchaseSuccessPage />}
              />
              <Route
                path="/purchase-cancelled"
                element={<PurchaseCancelledPage />}
              />
              <Route
                path="/trial-started-successfully"
                element={<StartTrialPage />}
              />
              <Route 
                path="/quiz/love-language" 
                element={<QuizContainer quizData={loveLanguageQuiz} />} 
              />
              <Route 
                path="/quiz/attachment-style" 
                element={<QuizContainer quizData={attachmentStyleQuiz} />} 
              />
              <Route
                path="/quiz/conflict-resolution"
                element={<QuizContainer quizData={conflictResolutionQuiz} />}
              />
              <Route
                path="/quiz/emotional-intelligence"
                element={<QuizContainer quizData={emotionalIntelligenceQuiz} />}
              />
            </Routes>
          </div>
        </UnlockPaidFeaturesPopupProvider>
      </Router>
    </HelmetProvider>
  );
}

export default App;
