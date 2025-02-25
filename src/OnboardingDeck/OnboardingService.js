export const getIsOnboardingCompleted = () => {
    return localStorage.getItem("onboardingCompleted");
}

export const setIsOnboardingCompleted = () => {
    localStorage.setItem("onboardingCompleted", "true");
}