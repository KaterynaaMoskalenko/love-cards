export const addToFavorites = (question) => {
  const currentFavoriteQuestions = getFavoriteQuestions();
  currentFavoriteQuestions.push(question);
  const favoriteQuestionsString = JSON.stringify(currentFavoriteQuestions);
  localStorage.setItem("favoriteQuestions", favoriteQuestionsString);
};

export const removeFromFavorites = (questionToRemove) => {
  const currentFavoriteQuestions = getFavoriteQuestions();

  const updatedFavoriteQuestions = currentFavoriteQuestions.filter(
    (question) => question.question != questionToRemove.question
  );

  const favoriteQuestionsString = JSON.stringify(updatedFavoriteQuestions);
  localStorage.setItem("favoriteQuestions", favoriteQuestionsString);
  return updatedFavoriteQuestions;
};

export const getFavoriteQuestions = () => {
  const favoritesString = localStorage.getItem("favoriteQuestions");
  return JSON.parse(favoritesString) ?? [];
  // if left is not null -> left, if null -> []
};
