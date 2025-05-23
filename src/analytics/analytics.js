import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-7HBZR0789Y");
};

export const logPageView = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};

export const logPurchaseModalOpen = (contextLocation) => {
  ReactGA.event("purchase_modal_open", {contextLocation});
};

export const logPurchaseButtonClicked = (contextLocation) => {
  ReactGA.event("purchase_button_clicked", {contextLocation});
};

export const logPurchaseCompleted = () => {
  ReactGA.event("purchase_completed");
};

export const logPurchaseCancelled = () => {
  ReactGA.event("purchase_cancelled");
}

export const logTrialStarted = () => {
  ReactGA.event("purchase_trial_started");
};

export const logCardSwiped = (cardQuestion) => {
  ReactGA.event("card_swiped", {cardQuestion});
};

export const logCardLiked = (cardQuestion) => {
  ReactGA.event("card_liked", {cardQuestion});
}

export const logOnboardingCompleted = () => {
  ReactGA.event("onboarding_completed");
};

export const logFreeDeckCompleted = () => {
  ReactGA.event("free_plan_deck_completed");
};

