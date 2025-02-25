import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MenuButton from "./Menu/MenuButton";
import Header from "./Header/Header";
import "./App.css";
import PurchaseSuccessPage from "./Menu/stripe/PurchaseSuccessPage";
import PurchaseCancelledPage from "./Menu/stripe/PurchaseCancelledPage";
import { QuestionsHistoryPage } from "./Menu/history/QuestionsHistoryPage";
import { FavoriteQuestionsPage } from "./Menu/favorites/FavoritesPage";
import { UnlockPaidFeaturesPopupProvider } from "./components/UnlockPaidFeatures/UnlockPaidFeaturesContext";
import OnboardingDeck from "./OnboardingDeck/OnboardingDeck";

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

  return (
    <Router>
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
          </Routes>
        </div>
      </UnlockPaidFeaturesPopupProvider>
    </Router>
  );
}

export default App;
