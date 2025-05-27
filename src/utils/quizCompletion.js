const QUIZ_COMPLETION_KEY = 'quiz_completion';

const quizCompletion = {
  markAsCompleted: (quizId) => {
    const completedQuizzes = JSON.parse(localStorage.getItem(QUIZ_COMPLETION_KEY) || '[]');
    if (!completedQuizzes.includes(quizId)) {
      completedQuizzes.push(quizId);
      localStorage.setItem(QUIZ_COMPLETION_KEY, JSON.stringify(completedQuizzes));
    }
  },
  
  isCompleted: (quizId) => {
    const completedQuizzes = JSON.parse(localStorage.getItem(QUIZ_COMPLETION_KEY) || '[]');
    return completedQuizzes.includes(quizId);
  },

  getCompletedQuizzes: () => {
    return JSON.parse(localStorage.getItem(QUIZ_COMPLETION_KEY) || '[]');
  },

  resetCompletion: (quizId) => {
    const completedQuizzes = JSON.parse(localStorage.getItem(QUIZ_COMPLETION_KEY) || '[]');
    const updatedQuizzes = completedQuizzes.filter(id => id !== quizId);
    localStorage.setItem(QUIZ_COMPLETION_KEY, JSON.stringify(updatedQuizzes));
  }
};

export default quizCompletion; 