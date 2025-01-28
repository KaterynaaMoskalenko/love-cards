


export const addToHistory = (question) => { 
    const currentHistory = getQuestionHistory();
    currentHistory.push(question);
    const historyString = JSON.stringify(currentHistory);

    localStorage.setItem("questionHistory", historyString)
}

export const getQuestionHistory = () => {
    const historyString = localStorage.getItem("questionHistory")
    return JSON.parse(historyString) ?? []
}

