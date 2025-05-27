import React from "react";

const IntroInfoComponent = () => (
  <div style={{ textAlign: "center" }}>
    <div style={{ fontSize: 48, marginBottom: 16 }}>💖</div>
    <div style={{ fontSize: 24, color: "#fff", marginBottom: 16, fontWeight: 700 }}>
      Discover Your Love Language
    </div>
    <div style={{ fontSize: 18, color: "#fff", marginBottom: 16, lineHeight: 1.4 }}>
      Everyone gives and receives love differently. Understanding your love language can transform your relationships and help you connect more deeply with the people you care about.
    </div>
    <div style={{
      background: "rgba(255,195,113,0.2)",
      borderRadius: 12,
      padding: 16,
      border: "2px solid rgba(255,195,113,0.3)"
    }}>
      <div style={{ fontSize: 16, color: "#ffc371", fontWeight: 600, marginBottom: 8 }}>
        What you'll discover:
      </div>
      <div style={{ fontSize: 14, color: "#fff", textAlign: "left" }}>
        • Your primary way of feeling loved<br/>
        • How you naturally express love to others<br/>
        • Tips for better communication in relationships<br/>
        • Your complete love language profile
      </div>
    </div>
  </div>
);

const AdvancedInfoComponent = () => (
  <div style={{ textAlign: "center" }}>
    <div style={{ fontSize: 18, color: "#fff", marginBottom: 8 }}>
      <b>💡 Love Language Tip:</b>
    </div>
    <div style={{ color: "#fff", fontSize: 16, marginBottom: 16 }}>
      Try expressing love in all five languages! While you have a primary language, everyone appreciates all forms of love.
    </div>
    <div style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12,
      marginTop: 16
    }}>
      {[
        { icon: "💬", label: "Words", desc: "Verbal affection" },
        { icon: "🤲", label: "Acts", desc: "Helpful actions" },
        { icon: "🎁", label: "Gifts", desc: "Thoughtful presents" },
        { icon: "⏰", label: "Time", desc: "Undivided attention" },
        { icon: "🤗", label: "Touch", desc: "Physical affection" }
      ].slice(0, 4).map((lang, i) => (
        <div key={i} style={{
          background: "rgba(255,255,255,0.1)",
          padding: 12,
          borderRadius: 8,
          fontSize: 14
        }}>
          <div style={{ fontSize: 20, marginBottom: 4 }}>{lang.icon}</div>
          <div style={{ fontWeight: 600, color: "#ffc371" }}>{lang.label}</div>
          <div style={{ color: "#fff", fontSize: 12 }}>{lang.desc}</div>
        </div>
      ))}
    </div>
  </div>
);

const loveLanguageDescriptions = {
  words: {
    label: "Words of Affirmation",
    icon: "💬",
    description:
      "You feel most loved when you hear words of encouragement, appreciation, and affection. Compliments, 'I love you,' and recognition mean the world to you.",
  },
  acts: {
    label: "Acts of Service",
    icon: "🤲",
    description:
      "You feel most loved when your partner helps you with tasks and shows care through actions. 'Actions speak louder than words' is your motto.",
  },
  gifts: {
    label: "Receiving Gifts",
    icon: "🎁",
    description: "You feel most loved when you receive thoughtful gifts. It's not about the cost, but the thought and effort behind the gesture that matters to you.",
  },
  quality: {
    label: "Quality Time",
    icon: "⏰",
    description: "You feel most loved when you spend meaningful, uninterrupted time together. Your partner's undivided attention is what makes you feel valued.",
  },
  touch: {
    label: "Physical Touch",
    icon: "🤗",
    description:
      "You feel most loved through hugs, kisses, and other forms of physical affection. Physical presence and touch make you feel secure and loved.",
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

  // Ensure all love languages are included
  const allLanguages = ['words', 'acts', 'gifts', 'quality', 'touch'];
  allLanguages.forEach(lang => {
    if (!tally[lang]) {
      tally[lang] = 0;
    }
  });

  // Calculate percentages
  const total = Object.values(tally).reduce((sum, count) => sum + count, 0);
  const percentages = {};

  if (total > 0) {
    Object.entries(tally).forEach(([key, count]) => {
      percentages[key] = Math.round((count / total) * 100);
    });
  } else {
    // Fallback if no answers
    allLanguages.forEach(lang => {
      percentages[lang] = 0;
    });
  }

  // Find primary and secondary love languages
  const sorted = Object.entries(percentages).sort((a, b) => b[1] - a[1]);
  const primary = sorted[0]?.[0] || null;
  const secondary = sorted.length > 1 && sorted[1][1] > 0 ? sorted[1][0] : null;

  return { primary, secondary, percentages, tally };
}

export const loveLanguageQuiz = {
  id: "love-language",
  title: "What is your love language?",
  description: "Discover how you best give and receive love.",
  icon: "💖",
  loadingContent: {
    subtitle: "Discovering your love style",
    cardTitle: "💝 Ready for Deeper Connection?",
    cardText: "Learn your love language, then practice it with conversation cards designed for couples."
  },
  questions: [
    {
      id: "info-intro",
      type: "info",
      content: <IntroInfoComponent />,
    },
    {
      id: "q1",
      type: "single",
      layout: "list",
      text: "When you're feeling down, what would comfort you most?",
      answers: [
        {
          id: "a1",
          text: "Hearing encouraging words like 'You've got this' or 'I believe in you'",
          value: "words",
        },
        {
          id: "a2",
          text: "Having someone help you with your tasks or responsibilities",
          value: "acts",
        },
        {
          id: "a3",
          text: "Receiving a small gift or surprise to cheer you up",
          value: "gifts",
        },
        {
          id: "a4",
          text: "Spending quality time together talking or just being present",
          value: "quality",
        },
        {
          id: "a5",
          text: "Getting a warm hug or comforting physical touch",
          value: "touch",
        },
      ],
    },
    {
      id: "q2",
      type: "single",
      layout: "grid",
      text: "Which gesture would make you feel most appreciated?",
      answers: [
        {
          id: "a1",
          text: "A heartfelt compliment",
          value: "words",
        },
        {
          id: "a2",
          text: "Help with a project",
          value: "acts",
        },
        {
          id: "a3",
          text: "A thoughtful gift",
          value: "gifts",
        },
        {
          id: "a4",
          text: "Undivided attention",
          value: "quality",
        },
        {
          id: "a5",
          text: "A gentle touch",
          value: "touch",
        },
      ],
    },
    {
      id: "q3",
      type: "single",
      layout: "list",
      text: "In a relationship, what makes you feel most connected to your partner?",
      answers: [
        {
          id: "a1",
          text: "When they tell me how much I mean to them",
          value: "words",
        },
        {
          id: "a2",
          text: "When they do things to make my life easier",
          value: "acts",
        },
        {
          id: "a3",
          text: "When they surprise me with little gifts or tokens of love",
          value: "gifts",
        },
        {
          id: "a4",
          text: "When we spend focused, uninterrupted time together",
          value: "quality",
        },
        {
          id: "a5",
          text: "When they hold my hand, hug me, or show physical affection",
          value: "touch",
        },
      ],
    },
    {
      id: "q4",
      type: "multi",
      layout: "list",
      text: "Which of these actions would make you feel loved? (Select all that apply)",
      answers: [
        { id: "a1", text: "Receiving a love note or sweet text message", value: "words" },
        { id: "a2", text: "Having someone cook dinner for you", value: "acts" },
        { id: "a3", text: "Getting flowers or a small surprise", value: "gifts" },
        { id: "a4", text: "Having a deep, meaningful conversation", value: "quality" },
        { id: "a5", text: "Cuddling while watching a movie", value: "touch" },
      ],
    },
    {
      id: "info-research-1",
      type: "info",
      icon: "📚",
      text: "Did you know? Dr. Gary Chapman identified the 5 Love Languages through decades of marriage counseling. He found that most relationship conflicts stem from speaking different love languages!",
    },
    {
      id: "q5",
      type: "single",
      layout: "list",
      text: "What hurts your feelings most in a relationship?",
      answers: [
        {
          id: "a1",
          text: "When my partner criticizes me or doesn't acknowledge my efforts",
          value: "words",
        },
        {
          id: "a2",
          text: "When my partner doesn't help me when I clearly need it",
          value: "acts",
        },
        {
          id: "a3",
          text: "When my partner forgets important occasions or doesn't think to surprise me",
          value: "gifts",
        },
        {
          id: "a4",
          text: "When my partner is always distracted or too busy for me",
          value: "quality",
        },
        {
          id: "a5",
          text: "When my partner avoids physical closeness or seems distant",
          value: "touch",
        },
      ],
    },
    {
      id: "q6",
      type: "single",
      layout: "grid",
      text: "How do you naturally show love to others?",
      answers: [
        {
          id: "a1",
          text: "I tell them how much they mean to me",
          value: "words",
        },
        {
          id: "a2",
          text: "I help them with tasks or do things for them",
          value: "acts",
        },
        {
          id: "a3",
          text: "I give them thoughtful gifts or surprises",
          value: "gifts",
        },
        {
          id: "a4",
          text: "I spend quality time and give them my attention",
          value: "quality",
        },
        {
          id: "a5",
          text: "I show affection through hugs and touch",
          value: "touch",
        },
      ],
    },
    {
      id: "q7",
      type: "multi",
      layout: "list",
      text: "When you want to show someone you care, what do you do? (Select all that apply)",
      answers: [
        { id: "a1", text: "Send them an encouraging message", value: "words" },
        { id: "a2", text: "Offer to help them with something", value: "acts" },
        { id: "a3", text: "Bring them a small gift or treat", value: "gifts" },
        { id: "a4", text: "Plan special time together", value: "quality" },
        { id: "a5", text: "Give them a hug or pat on the back", value: "touch" },
      ],
    },
    {
      id: "q8",
      type: "single",
      layout: "list",
      text: "In conflicts, what helps you feel better and reconnect?",
      answers: [
        {
          id: "a1",
          text: "Hearing an apology and words of affirmation",
          value: "words",
        },
        {
          id: "a2",
          text: "Seeing my partner make an effort to change their behavior",
          value: "acts",
        },
        {
          id: "a3",
          text: "Receiving a peace offering or gesture of goodwill",
          value: "gifts",
        },
        {
          id: "a4",
          text: "Talking through the issue and spending time together",
          value: "quality",
        },
        {
          id: "a5",
          text: "Making up with a hug or physical comfort",
          value: "touch",
        },
      ],
    },
    {
      id: "info-research-2",
      type: "info",
      content: <AdvancedInfoComponent />,
    },
    // {
    //   id: "q9",
    //   type: "single",
    //   layout: "grid",
    //   text: "What makes you feel most secure in a relationship?",
    //   answers: [
    //     {
    //       id: "a1",
    //       text: "Regular verbal reassurance and compliments",
    //       value: "words",
    //     },
    //     {
    //       id: "a2",
    //       text: "Consistent helpful actions and reliability",
    //       value: "acts",
    //     },
    //     {
    //       id: "a3",
    //       text: "Thoughtful gestures and remembering special dates",
    //       value: "gifts",
    //     },
    //     {
    //       id: "a4",
    //       text: "Regular date nights and focused conversations",
    //       value: "quality",
    //     },
    //     {
    //       id: "a5",
    //       text: "Regular physical affection and closeness",
    //       value: "touch",
    //     },
    //   ],
    // },
    // {
    //   id: "q10",
    //   type: "multi",
    //   layout: "list",
    //   text: "Which of these would be meaningful birthday gestures? (Select all that apply)",
    //   answers: [
    //     { id: "a1", text: "A heartfelt birthday message or card", value: "words" },
    //     { id: "a2", text: "Taking care of all my responsibilities for the day", value: "acts" },
    //     { id: "a3", text: "A carefully chosen gift that shows they know me", value: "gifts" },
    //     { id: "a4", text: "Planning a special day together, just the two of us", value: "quality" },
    //     { id: "a5", text: "Extra hugs, kisses, and physical affection", value: "touch" },
    //   ],
    // },
    // {
    //   id: "q11",
    //   type: "single",
    //   layout: "list",
    //   text: "When you're stressed, what do you most want from your partner?",
    //   answers: [
    //     {
    //       id: "a1",
    //       text: "To hear 'You're doing great' and words of encouragement",
    //       value: "words",
    //     },
    //     {
    //       id: "a2",
    //       text: "To have them take care of tasks so I can focus",
    //       value: "acts",
    //     },
    //     {
    //       id: "a3",
    //       text: "A small surprise or treat to brighten my day",
    //       value: "gifts",
    //     },
    //     {
    //       id: "a4",
    //       text: "To sit together and talk through what's bothering me",
    //       value: "quality",
    //     },
    //     {
    //       id: "a5",
    //       text: "A back rub or comforting physical presence",
    //       value: "touch",
    //     },
    //   ],
    // },
    // {
    //   id: "q12",
    //   type: "single",
    //   layout: "grid",
    //   text: "What's your ideal way to spend an anniversary?",
    //   answers: [
    //     {
    //       id: "a1",
    //       text: "Sharing heartfelt words about our relationship",
    //       value: "words",
    //     },
    //     {
    //       id: "a2",
    //       text: "Having a day where we take care of each other",
    //       value: "acts",
    //     },
    //     {
    //       id: "a3",
    //       text: "Exchanging meaningful gifts",
    //       value: "gifts",
    //     },
    //     {
    //       id: "a4",
    //       text: "Spending the whole day together without distractions",
    //       value: "quality",
    //     },
    //     {
    //       id: "a5",
    //       text: "Being physically close and affectionate all day",
    //       value: "touch",
    //     },
    //   ],
    // },
    // {
    //   id: "info-research-3",
    //   type: "info",
    //   icon: "💡",
    //   text: "Research shows that couples who understand each other's love languages report 2x higher relationship satisfaction. It's never too late to learn your partner's language!",
    // },
    // {
    //   id: "q13",
    //   type: "multi",
    //   layout: "list",
    //   text: "What makes you feel most appreciated at work or with friends? (Select all that apply)",
    //   answers: [
    //     { id: "a1", text: "Public recognition or verbal praise", value: "words" },
    //     { id: "a2", text: "Others offering to help with my workload", value: "acts" },
    //     { id: "a3", text: "Small tokens of appreciation or thank you gifts", value: "gifts" },
    //     { id: "a4", text: "Being invited to lunch or spending time together", value: "quality" },
    //     { id: "a5", text: "High-fives, hugs, or celebratory physical gestures", value: "touch" },
    //   ],
    // },
    // {
    //   id: "q14",
    //   type: "single",
    //   layout: "list",
    //   text: "If you could only receive one of these for the rest of your life, which would you choose?",
    //   answers: [
    //     {
    //       id: "a1",
    //       text: "Daily words of love and appreciation",
    //       value: "words",
    //     },
    //     {
    //       id: "a2",
    //       text: "Having someone always willing to help you",
    //       value: "acts",
    //     },
    //     {
    //       id: "a3",
    //       text: "Regular thoughtful surprises and gifts",
    //       value: "gifts",
    //     },
    //     {
    //       id: "a4",
    //       text: "Unlimited quality time with loved ones",
    //       value: "quality",
    //     },
    //     {
    //       id: "a5",
    //       text: "Constant physical affection and closeness",
    //       value: "touch",
    //     },
    //   ],
    // },
    // {
    //   id: "q15",
    //   type: "single",
    //   layout: "grid",
    //   text: "Looking back at your past relationships, what did you miss most when it was lacking?",
    //   answers: [
    //     {
    //       id: "a1",
    //       text: "Verbal affection and compliments",
    //       value: "words",
    //     },
    //     {
    //       id: "a2",
    //       text: "Practical support and help",
    //       value: "acts",
    //     },
    //     {
    //       id: "a3",
    //       text: "Thoughtful gestures and gifts",
    //       value: "gifts",
    //     },
    //     {
    //       id: "a4",
    //       text: "Meaningful time together",
    //       value: "quality",
    //     },
    //     {
    //       id: "a5",
    //       text: "Physical intimacy and affection",
    //       value: "touch",
    //     },
    //   ],
    // },
    // {
    //   id: "q16",
    //   type: "multi",
    //   layout: "list",
    //   text: "Final question: Which of these statements resonate with you? (Select all that apply)",
    //   answers: [
    //     { id: "a1", text: "I never get tired of hearing 'I love you'", value: "words" },
    //     { id: "a2", text: "Actions speak louder than words", value: "acts" },
    //     { id: "a3", text: "It's the thought that counts", value: "gifts" },
    //     { id: "a4", text: "Nothing beats quality time together", value: "quality" },
    //     { id: "a5", text: "Physical touch is essential for connection", value: "touch" },
    //   ],
    // },
    // {
    //   id: "info-final",
    //   type: "info",
    //   icon: "🎉",
    //   text: "You're almost done! Remember, we all have a primary love language, but everyone appreciates all five to some degree. Understanding your profile can help you communicate your needs and show love more effectively.",
    // },
  ],
  resultDescriptions: loveLanguageDescriptions,
  calculateResult: calculateLoveLanguageResult,
};
