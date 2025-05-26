import React from "react";

const attachmentStyleDescriptions = {
  secure: {
    label: "Secure Attachment",
    icon: "🛡️",
    description: "You feel comfortable with intimacy and independence. You can trust others and be trusted, and you're able to maintain healthy boundaries while being emotionally available.",
  },
  anxious: {
    label: "Anxious-Preoccupied",
    icon: "💭",
    description: "You seek closeness and worry about relationships. You often need reassurance and may be sensitive to changes in your partner's behavior or emotional availability.",
  },
  avoidant: {
    label: "Dismissive-Avoidant",
    icon: "🛡️",
    description: "You value independence and self-reliance. You may avoid emotional intimacy and prefer to handle things on your own, sometimes at the expense of close relationships.",
  },
  fearful: {
    label: "Fearful-Avoidant",
    icon: "😰",
    description: "You have mixed feelings about closeness. You both desire and fear intimacy, which can lead to push-pull dynamics in relationships.",
  },
};

const CustomInfoComponent = () => (
  <div style={{ textAlign: "center" }}>
    <div style={{ fontSize: 18, color: "#fff", marginBottom: 8 }}>
      <b>Understanding Attachment Styles</b>
    </div>
    <div style={{ color: "#fff", fontSize: 16, marginBottom: 16 }}>
      Attachment styles are patterns of how we relate to others in close relationships. They develop early in life and can influence how we approach relationships as adults.
    </div>
    <ul
      style={{
        color: "#fff",
        fontSize: 16,
        listStyle: "disc",
        margin: 0,
        paddingLeft: 20,
        textAlign: "left",
      }}
    >
      <li>Secure: Comfortable with intimacy and independence</li>
      <li>Anxious: Seeks closeness and worries about relationships</li>
      <li>Avoidant: Values independence and may avoid intimacy</li>
      <li>Fearful: Has mixed feelings about closeness</li>
    </ul>
  </div>
);

function calculateAttachmentStyleResult(quizData, answers) {
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

  // Ensure all attachment styles are included
  const allStyles = ['secure', 'anxious', 'avoidant', 'fearful'];
  allStyles.forEach(style => {
    if (!tally[style]) {
      tally[style] = 0;
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
    allStyles.forEach(style => {
      percentages[style] = 0;
    });
  }

  // Find primary and secondary styles
  const sorted = Object.entries(percentages).sort((a, b) => b[1] - a[1]);
  const primary = sorted[0]?.[0] || null;
  const secondary = sorted.length > 1 && sorted[1][1] > 0 ? sorted[1][0] : null;

  return { primary, secondary, percentages, tally };
}

export const attachmentStyleQuiz = {
  id: "attachment-style",
  title: "What is your attachment style?",
  description: "Discover how you form and maintain relationships.",
  icon: "💝",
  questions: [
    {
      id: "info-custom",
      type: "info",
      content: <CustomInfoComponent />,
    },
    {
      id: "q1",
      type: "single",
      layout: "list",
      text: "When I'm upset, I...",
      answers: [
        {
          id: "a1",
          text: "Feel comfortable reaching out to others for support",
          value: "secure",
        },
        {
          id: "a2",
          text: "Worry that others won't be there when I need them",
          value: "anxious",
        },
        {
          id: "a3",
          text: "Prefer to handle it on my own",
          value: "avoidant",
        },
        {
          id: "a4",
          text: "Want support but fear being vulnerable",
          value: "fearful",
        },
      ],
    },
    {
      id: "q2",
      type: "single",
      layout: "grid",
      text: "In relationships, I tend to...",
      answers: [
        {
          id: "a1",
          text: "Feel comfortable with both closeness and independence",
          value: "secure",
        },
        {
          id: "a2",
          text: "Worry about my partner's feelings for me",
          value: "anxious",
        },
        {
          id: "a3",
          text: "Value my independence above all else",
          value: "avoidant",
        },
        {
          id: "a4",
          text: "Feel conflicted about getting too close",
          value: "fearful",
        },
      ],
    },
    {
      id: "info-research-1",
      type: "info",
      icon: "🔬",
      text: "Research shows that about 50-60% of people have a secure attachment style, while the remaining 40-50% have one of the insecure styles (anxious, avoidant, or fearful).",
    },
    {
      id: "q3",
      type: "multi",
      layout: "list",
      text: "Select all that apply to how you feel in relationships:",
      answers: [
        {
          id: "a1",
          text: "I trust my partner and feel secure in our relationship",
          value: "secure",
        },
        {
          id: "a2",
          text: "I often worry about being abandoned",
          value: "anxious",
        },
        {
          id: "a3",
          text: "I prefer to keep some emotional distance",
          value: "avoidant",
        },
        {
          id: "a4",
          text: "I want closeness but fear getting hurt",
          value: "fearful",
        },
      ],
    },
    {
      id: "q4",
      type: "single",
      layout: "list",
      text: "When my partner needs space, I...",
      answers: [
        {
          id: "a1",
          text: "Understand and respect their need while maintaining my own sense of security",
          value: "secure",
        },
        {
          id: "a2",
          text: "Worry that they're pulling away or losing interest",
          value: "anxious",
        },
        {
          id: "a3",
          text: "Feel relieved and enjoy the independence",
          value: "avoidant",
        },
        {
          id: "a4",
          text: "Feel both relieved and worried about the distance",
          value: "fearful",
        },
      ],
    },
    {
      id: "info-research-2",
      type: "info",
      icon: "🧠",
      text: "Did you know? Your attachment style can influence your brain's response to social situations. People with secure attachment show more activity in brain regions associated with positive emotions and social connection.",
    },
    {
      id: "q5",
      type: "single",
      layout: "grid",
      text: "During conflicts, I typically...",
      answers: [
        {
          id: "a1",
          text: "Stay calm and work towards resolution together",
          value: "secure",
        },
        {
          id: "a2",
          text: "Worry about the relationship's future",
          value: "anxious",
        },
        {
          id: "a3",
          text: "Withdraw and need time alone",
          value: "avoidant",
        },
        {
          id: "a4",
          text: "Feel overwhelmed and unsure how to respond",
          value: "fearful",
        },
      ],
    },
    {
      id: "q6",
      type: "multi",
      layout: "list",
      text: "Select all that apply to how you feel about emotional intimacy:",
      answers: [
        {
          id: "a1",
          text: "I'm comfortable sharing my feelings and needs",
          value: "secure",
        },
        {
          id: "a2",
          text: "I need frequent reassurance about my partner's feelings",
          value: "anxious",
        },
        {
          id: "a3",
          text: "I prefer to keep my emotions private",
          value: "avoidant",
        },
        {
          id: "a4",
          text: "I want to be close but fear rejection",
          value: "fearful",
        },
      ],
    },
    {
      id: "info-research-3",
      type: "info",
      icon: "💑",
      text: "Studies show that people with secure attachment styles tend to have longer-lasting relationships and report higher relationship satisfaction. However, attachment styles can change with awareness and effort.",
    },
    {
      id: "q7",
      type: "single",
      layout: "list",
      text: "When it comes to trust in relationships, I...",
      answers: [
        {
          id: "a1",
          text: "Generally trust others unless given reason not to",
          value: "secure",
        },
        {
          id: "a2",
          text: "Need constant reassurance to feel secure",
          value: "anxious",
        },
        {
          id: "a3",
          text: "Prefer to rely on myself rather than others",
          value: "avoidant",
        },
        {
          id: "a4",
          text: "Want to trust but find it difficult",
          value: "fearful",
        },
      ],
    },
    {
      id: "q8",
      type: "single",
      layout: "grid",
      text: "In terms of commitment, I...",
      answers: [
        {
          id: "a1",
          text: "Feel comfortable with long-term commitment",
          value: "secure",
        },
        {
          id: "a2",
          text: "Worry about my partner's commitment level",
          value: "anxious",
        },
        {
          id: "a3",
          text: "Value my freedom and independence",
          value: "avoidant",
        },
        {
          id: "a4",
          text: "Want commitment but fear being trapped",
          value: "fearful",
        },
      ],
    },
    {
      id: "info-research-4",
      type: "info",
      icon: "🌱",
      text: "Attachment styles aren't fixed! Research shows that with therapy, self-awareness, and healthy relationships, people can develop more secure attachment patterns over time.",
    },
    {
      id: "q9",
      type: "multi",
      layout: "list",
      text: "Select all that apply to how you handle relationship challenges:",
      answers: [
        {
          id: "a1",
          text: "I communicate openly and work through issues together",
          value: "secure",
        },
        {
          id: "a2",
          text: "I worry about the relationship's stability",
          value: "anxious",
        },
        {
          id: "a3",
          text: "I prefer to solve problems independently",
          value: "avoidant",
        },
        {
          id: "a4",
          text: "I feel torn between connection and self-protection",
          value: "fearful",
        },
      ],
    },
    {
      id: "q10",
      type: "single",
      layout: "list",
      text: "When my partner is upset, I...",
      answers: [
        {
          id: "a1",
          text: "Feel comfortable offering support and understanding",
          value: "secure",
        },
        {
          id: "a2",
          text: "Worry that I might have caused their distress",
          value: "anxious",
        },
        {
          id: "a3",
          text: "Feel uncomfortable with emotional intensity",
          value: "avoidant",
        },
        {
          id: "a4",
          text: "Want to help but fear making things worse",
          value: "fearful",
        },
      ],
    },
    {
      id: "q11",
      type: "single",
      layout: "grid",
      text: "Regarding emotional needs, I...",
      answers: [
        {
          id: "a1",
          text: "Feel comfortable expressing my needs clearly",
          value: "secure",
        },
        {
          id: "a2",
          text: "Worry about being too needy",
          value: "anxious",
        },
        {
          id: "a3",
          text: "Prefer to handle my needs independently",
          value: "avoidant",
        },
        {
          id: "a4",
          text: "Have needs but fear expressing them",
          value: "fearful",
        },
      ],
    },
    {
      id: "q12",
      type: "multi",
      layout: "list",
      text: "Select all that apply to how you view relationships:",
      answers: [
        {
          id: "a1",
          text: "I see relationships as a source of support and growth",
          value: "secure",
        },
        {
          id: "a2",
          text: "I worry about being abandoned or rejected",
          value: "anxious",
        },
        {
          id: "a3",
          text: "I value my independence above relationship needs",
          value: "avoidant",
        },
        {
          id: "a4",
          text: "I want connection but fear getting hurt",
          value: "fearful",
        },
      ],
    },
  ],
  resultDescriptions: attachmentStyleDescriptions,
  calculateResult: calculateAttachmentStyleResult,
}; 