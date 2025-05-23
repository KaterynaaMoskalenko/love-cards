import React from "react";

const CustomInfoComponent = () => (
  <div style={{ textAlign: "center" }}>
    <img
      src="https://5lovelanguages.com/assets/images/lovelanguages.png"
      alt="Love Languages"
      style={{ width: 120, marginBottom: 16 }}
    />
    <div style={{ fontSize: 18, color: "#fff", marginBottom: 8 }}>
      <b>Tip:</b> Try expressing love in all five languages!
    </div>
    <ul
      style={{
        color: "#fff",
        fontSize: 16,
        listStyle: "disc",
        margin: 0,
        paddingLeft: 20,
      }}
    >
      <li>Words of Affirmation</li>
      <li>Acts of Service</li>
      <li>Receiving Gifts</li>
      <li>Quality Time</li>
      <li>Physical Touch</li>
    </ul>
  </div>
);

const loveLanguageDescriptions = {
  words: {
    label: "Words of Affirmation",
    icon: "💬",
    description:
      "You feel most loved when you hear words of encouragement, appreciation, and affection.",
  },
  acts: {
    label: "Acts of Service",
    icon: "🤲",
    description:
      "You feel most loved when your partner helps you with tasks and chores.",
  },
  gifts: {
    label: "Receiving Gifts",
    icon: "🎁",
    description: "You feel most loved when you receive thoughtful gifts.",
  },
  quality: {
    label: "Quality Time",
    icon: "⏰",
    description: "You feel most loved when you spend meaningful time together.",
  },
  touch: {
    label: "Physical Touch",
    icon: "🤗",
    description:
      "You feel most loved through hugs, kisses, and other forms of physical affection.",
  },
};

function calculateLoveLanguageResult(quizData, answers) {
  // Tally all answer values
  const tally = {};
  quizData.questions.forEach((q) => {
    if (q.type === "single" && answers[q.id]) {
      const ans = q.answers.find((a) => a.id === answers[q.id]);
      if (ans && ans.value) {
        tally[ans.value] = (tally[ans.value] || 0) + 1;
      }
    }
    if (q.type === "multi" && Array.isArray(answers[q.id])) {
      answers[q.id].forEach((aid) => {
        const ans = q.answers.find((a) => a.id === aid);
        if (ans && ans.value) {
          tally[ans.value] = (tally[ans.value] || 0) + 1;
        }
      });
    }
  });
  // Find the love language with the highest count
  let max = 0;
  let primary = null;
  Object.entries(tally).forEach(([key, count]) => {
    if (count > max) {
      max = count;
      primary = key;
    }
  });
  return { primary, tally };
}

export const loveLanguageQuiz = {
  id: "love-language",
  title: "What is your love language?",
  description: "Discover how you best give and receive love.",
  icon: "💖",
  questions: [
    {
      id: "q1",
      type: "single",
      layout: "list",
      text: "It's more meaningful to me when...",
      answers: [
        {
          id: "a1",
          text: "I receive a loving note/text/email for no special reason from my loved one.",
          value: "words",
        },
        { id: "a2", text: "My partner and I hug.", value: "touch" },
      ],
    },
    {
      id: "q2",
      type: "single",
      layout: "grid",
      text: "Which of these would make you feel most loved?",
      answers: [
        {
          id: "a1",
          text: "A surprise gift",
          value: "gifts",
        },
        {
          id: "a2",
          text: "A long, meaningful conversation",
          value: "quality",
        },
        {
          id: "a3",
          text: "Help with chores or tasks",
          value: "acts",
        },
        {
          id: "a4",
          text: "A warm hug",
          value: "touch",
        },
      ],
    },
    {
      id: "q3",
      type: "multi",
      layout: "list",
      text: "Which of these make you feel most loved? (Choose all that apply)",
      answers: [
        { id: "a1", text: "Receiving gifts", value: "gifts" },
        { id: "a2", text: "Hearing 'I love you'", value: "words" },
        { id: "a3", text: "Spending quality time together", value: "quality" },
        { id: "a4", text: "A warm embrace", value: "touch" },
      ],
    },
    {
      id: "q4",
      type: "multi",
      layout: "grid",
      text: "Select all the ways you like to show love:",
      answers: [
        { id: "a1", text: "Giving thoughtful gifts", value: "gifts" },
        {
          id: "a2",
          text: "Doing chores or errands for my partner",
          value: "acts",
        },
        {
          id: "a3",
          text: "Spending uninterrupted time together",
          value: "quality",
        },
        {
          id: "a4",
          text: "Physical affection (hugs, kisses, etc.)",
          value: "touch",
        },
      ],
    },
    {
      id: "q5",
      type: "single",
      layout: "grid",
      text: 'Can you relate to this statement? "I tend to cope with difficult emotions or memories by engaging in substance abuse, reckless driving, or the like."',
      answers: [
        {
          id: "a1",
          text: "Strongly relate",
          imageUrl: "https://cdn-icons-png.flaticon.com/512/414/414927.png",
          value: "strong",
        },
        {
          id: "a2",
          text: "Somewhat relate",
          imageUrl: "https://cdn-icons-png.flaticon.com/512/414/414926.png",
          value: "somewhat",
        },
        {
          id: "a3",
          text: "Hardly relate",
          imageUrl: "https://cdn-icons-png.flaticon.com/512/414/414924.png",
          value: "hardly",
        },
        {
          id: "a4",
          text: "Can't relate",
          imageUrl: "https://cdn-icons-png.flaticon.com/512/414/4149271.png",
          value: "cant",
        },
      ],
    },
    {
      id: "info-simple",
      type: "info",
      icon: "💡",
      text: "Did you know? The five love languages are Words of Affirmation, Acts of Service, Receiving Gifts, Quality Time, and Physical Touch.",
    },
    {
      id: "info-custom",
      type: "info",
      content: <CustomInfoComponent />,
    },
  ],
  resultDescriptions: loveLanguageDescriptions,
  calculateResult: calculateLoveLanguageResult,
};
