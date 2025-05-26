import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
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

const INITIAL_CATEGORY_FILTERS = {
  questionsKnowMeBetter: true,
  questionsRomanticSparks: true,
  questionsVisionValues: true,
  questionsTeamUs: true,
  questionsReflectGrow: true,
};

function App() {
  const [categoryFilters, setCategoryFilters] = useState(
    INITIAL_CATEGORY_FILTERS
  );

  useEffect(() => {
    initGA(); // only runs once
  }, []);

  return (
    <Router>
      <PageViewTracker />
      <UnlockPaidFeaturesPopupProvider>
        <div className="App">
          <Header />
          <MenuButton
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
          </Routes>
        </div>
      </UnlockPaidFeaturesPopupProvider>
    </Router>
  );
}

export default App;
