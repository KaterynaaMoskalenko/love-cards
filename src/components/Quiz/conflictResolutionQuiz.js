const conflictResolutionQuiz = {
  title: "Relationship Conflict Resolution Style",
  description: "Discover your conflict resolution style with our relationship communication quiz. Learn whether you're a Validating, Volatile, Conflict-Avoidant, or Hostile conflict resolver based on Dr. John Gottman's research. Take this free couples quiz to improve your relationship communication and learn healthy conflict resolution strategies.",
  loadingContent: {
    subtitle: "Analyzing conflict patterns",
    cardTitle: "💝 Ready to Resolve Better?",
    cardText: "Discover your conflict style, then practice healthy communication with conversation cards designed for couples."
  },
  questions: [
    {
      id: "intro",
      type: "info",
      text: "Welcome to the Conflict Resolution Style Quiz!",
      content: (
        <div style={{ textAlign: 'center', color: '#fff' }}>
          <div style={{ fontSize: '48px', marginBottom: '20px' }}>🤝</div>
          <h2 style={{ fontSize: '24px', marginBottom: '16px', color: '#ffc371' }}>Understanding Conflict Styles</h2>
          <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '16px' }}>
            Based on Dr. John Gottman's research, there are four main conflict resolution styles that couples use.
          </p>
          <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
            Answer honestly to discover your style and learn how to improve your conflict resolution skills.
          </p>
        </div>
      ),
    },
    {
      id: "q1",
      type: "single",
      layout: "grid",
      text: "When you and your partner disagree about something important, you tend to:",
      answers: [
        {
          id: "validating",
          text: "Listen & Understand",
          imageUrl: "https://em-content.zobj.net/thumbs/120/microsoft/319/waving-hand_1f44b.png",
        },
        {
          id: "volatile",
          text: "Express Passionately",
          imageUrl: "https://em-content.zobj.net/thumbs/120/microsoft/319/sparkles_2728.png",
        },
        {
          id: "avoidant",
          text: "Take Time to Think",
          imageUrl: "https://em-content.zobj.net/thumbs/120/microsoft/319/dove_1f54a-fe0f.png",
        },
        {
          id: "hostile",
          text: "Stand Your Ground",
          imageUrl: "https://em-content.zobj.net/thumbs/120/microsoft/319/shield_1f6e1-fe0f.png",
        },
      ],
    },
    {
      id: "q2",
      type: "single",
      layout: "list",
      text: "During an argument, you typically:",
      answers: [
        {
          id: "validating",
          text: "Stay calm and try to understand your partner's perspective",
        },
        {
          id: "volatile",
          text: "Express your emotions openly and engage in intense discussion",
        },
        {
          id: "avoidant",
          text: "Try to avoid conflict or quickly move past disagreements",
        },
        {
          id: "hostile",
          text: "Feel overwhelmed and may withdraw or become defensive",
        },
      ],
    },
    {
      id: "info1",
      type: "info",
      text: "Did You Know?",
      content: (
        <div style={{ textAlign: 'center', color: '#fff' }}>
          <div style={{ fontSize: '48px', marginBottom: '20px' }}>📊</div>
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '16px',
            padding: '24px',
            marginBottom: '20px'
          }}>
            <h3 style={{ fontSize: '24px', marginBottom: '16px', color: '#ffc371' }}>69% of Conflicts</h3>
            <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
              Dr. John Gottman's research shows that 69% of relationship conflicts are perpetual - they never get fully resolved.
            </p>
          </div>
          <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
            However, happy couples have learned to manage these conflicts effectively through their unique conflict resolution style.
          </p>
        </div>
      ),
    },
    {
      id: "q3",
      type: "single",
      layout: "grid",
      text: "When your partner is upset, you usually:",
      answers: [
        {
          id: "validating",
          text: "Listen & Validate",
          imageUrl: "https://em-content.zobj.net/thumbs/120/microsoft/319/ear_1f442.png",
        },
        {
          id: "volatile",
          text: "Engage Emotionally",
          imageUrl: "https://em-content.zobj.net/thumbs/120/microsoft/319/speaking-head_1f5e3-fe0f.png",
        },
        {
          id: "avoidant",
          text: "Give Space",
          imageUrl: "https://em-content.zobj.net/thumbs/120/microsoft/319/thinking-face_1f914.png",
        },
        {
          id: "hostile",
          text: "Solve Immediately",
          imageUrl: "https://em-content.zobj.net/thumbs/120/microsoft/319/rocket_1f680.png",
        },
      ],
    },
    {
      id: "q4",
      type: "single",
      layout: "list",
      text: "In resolving conflicts, you prefer to:",
      answers: [
        {
          id: "validating",
          text: "Find a compromise that works for both of you",
        },
        {
          id: "volatile",
          text: "Have an open, passionate discussion about the issue",
        },
        {
          id: "avoidant",
          text: "Let things resolve naturally over time",
        },
        {
          id: "hostile",
          text: "Address issues directly, even if it leads to tension",
        },
      ],
    },
    {
      id: "q5",
      type: "single",
      layout: "grid",
      text: "When you feel strongly about something, you:",
      answers: [
        {
          id: "validating",
          text: "Express Calmly",
          imageUrl: "https://em-content.zobj.net/thumbs/120/microsoft/319/smiling-face-with-smiling-eyes_1f60a.png",
        },
        {
          id: "volatile",
          text: "Debate Passionately",
          imageUrl: "https://em-content.zobj.net/thumbs/120/microsoft/319/fire_1f525.png",
        },
        {
          id: "avoidant",
          text: "Share Quietly",
          imageUrl: "https://em-content.zobj.net/thumbs/120/microsoft/319/smiling-face-with-halo_1f607.png",
        },
        {
          id: "hostile",
          text: "Stand Firm",
          imageUrl: "https://em-content.zobj.net/thumbs/120/microsoft/319/flexed-biceps_1f4aa.png",
        },
      ],
    },
    {
      id: "info2",
      type: "info",
      text: "The Power of Positivity",
      content: (
          <div style={{
            textAlign: 'center', color: '#fff'
          }}>
            <h3 style={{ fontSize: '24px', marginBottom: '16px', color: '#ffc371' }}>Science of Connection</h3>
            <div style={{
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '12px',
              padding: '16px',
              marginBottom: '20px'
            }}>
              <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '0' }}>
                Dr. Gottman's research shows that successful couples maintain 5 positive interactions for every negative one during conflicts.
              </p>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '20px',
              marginBottom: '20px'
            }}>
              <div style={{
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '12px',
                padding: '16px',
                flex: 1,
                maxWidth: '140px'
              }}>
                <div style={{ fontSize: '36px', marginBottom: '8px' }}>😊</div>
                <div style={{ fontSize: '16px' }}>Listen & Support</div>
              </div>
              <div style={{
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '12px',
                padding: '16px',
                flex: 1,
                maxWidth: '140px'
              }}>
                <div style={{ fontSize: '36px', marginBottom: '8px' }}>💝</div>
                <div style={{ fontSize: '16px' }}>Show Care</div>
              </div>
            </div>
            <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
              These small moments help maintain emotional connection during disagreements.
            </p>
          </div>
      ),
    },
    {
      id: "q6",
      type: "single",
      layout: "list",
      text: "After a disagreement, you typically:",
      answers: [
        {
          id: "validating",
          text: "Feel closer to your partner after resolving the issue",
        },
        {
          id: "volatile",
          text: "Feel energized and more connected to your partner",
        },
        {
          id: "avoidant",
          text: "Feel relieved that the conflict is over",
        },
        {
          id: "hostile",
          text: "Need time to recover from the emotional intensity",
        },
      ],
    },
    {
      id: "q7",
      type: "single",
      layout: "grid",
      text: "When making decisions together, you prefer to:",
      answers: [
        {
          id: "validating",
          text: "Discuss Thoroughly",
          imageUrl: "https://em-content.zobj.net/thumbs/120/microsoft/319/brain_1f9e0.png",
        },
        {
          id: "volatile",
          text: "Debate Openly",
          imageUrl: "https://em-content.zobj.net/thumbs/120/microsoft/319/speech-balloon_1f4ac.png",
        },
        {
          id: "avoidant",
          text: "Go With Flow",
          imageUrl: "https://em-content.zobj.net/thumbs/120/microsoft/319/leaf-fluttering-in-wind_1f343.png",
        },
        {
          id: "hostile",
          text: "Decide Quickly",
          imageUrl: "https://em-content.zobj.net/thumbs/120/microsoft/319/alarm-clock_23f0.png",
        },
      ],
    },
    {
      id: "q8",
      type: "single",
      layout: "list",
      text: "During stressful times, you tend to:",
      answers: [
        {
          id: "validating",
          text: "Support each other and work through challenges together",
        },
        {
          id: "volatile",
          text: "Express emotions openly and seek support from your partner",
        },
        {
          id: "avoidant",
          text: "Give each other space and handle stress independently",
        },
        {
          id: "hostile",
          text: "Become more sensitive to conflicts and disagreements",
        },
      ],
    },
    {
      id: "info3",
      type: "info",
      text: "Style Compatibility",
      content: (
        <div style={{ textAlign: 'center', color: '#fff' }}>
          <div style={{ fontSize: '48px', marginBottom: '20px' }}>💫</div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px',
            marginBottom: '20px'
          }}>
            <div style={{
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '16px',
              padding: '16px'
            }}>
              <div style={{ fontSize: '24px', marginBottom: '8px', color: '#ffc371' }}>Validating + Volatile</div>
              <div style={{ fontSize: '16px' }}>Balance of understanding and passion</div>
            </div>
            <div style={{
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '16px',
              padding: '16px'
            }}>
              <div style={{ fontSize: '24px', marginBottom: '8px', color: '#ffc371' }}>Avoidant + Hostile</div>
              <div style={{ fontSize: '16px' }}>Space and directness</div>
            </div>
          </div>
          <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
            Different styles can complement each other when partners understand and respect their differences.
          </p>
        </div>
      ),
    },
    {
      id: "q9",
      type: "single",
      layout: "grid",
      text: "When your partner criticizes you, you usually:",
      answers: [
        {
          id: "validating",
          text: "Listen & Reflect",
          imageUrl: "https://em-content.zobj.net/thumbs/120/microsoft/319/mirror_1fa9e.png",
        },
        {
          id: "volatile",
          text: "Respond Emotionally",
          imageUrl: "https://em-content.zobj.net/thumbs/120/microsoft/319/face-with-steam-from-nose_1f624.png",
        },
        {
          id: "avoidant",
          text: "Withdraw Briefly",
          imageUrl: "https://em-content.zobj.net/thumbs/120/microsoft/319/turtle_1f422.png",
        },
        {
          id: "hostile",
          text: "Defend Position",
          imageUrl: "https://em-content.zobj.net/thumbs/120/microsoft/319/crossed-swords_2694-fe0f.png",
        },
      ],
    },
    {
      id: "q10",
      type: "single",
      layout: "list",
      text: "When you need to apologize, you typically:",
      answers: [
        {
          id: "validating",
          text: "Acknowledge the impact and express genuine remorse",
        },
        {
          id: "volatile",
          text: "Express your feelings and explain your perspective",
        },
        {
          id: "avoidant",
          text: "Wait until emotions have cooled down",
        },
        {
          id: "hostile",
          text: "Focus on moving forward rather than dwelling on the past",
        },
      ],
    },
    {
      id: "q11",
      type: "single",
      layout: "grid",
      text: "During a heated discussion, you tend to:",
      answers: [
        {
          id: "validating",
          text: "Stay Present",
          imageUrl: "https://em-content.zobj.net/thumbs/120/microsoft/319/person_1f9d1.png",
        },
        {
          id: "volatile",
          text: "Get Animated",
          imageUrl: "https://em-content.zobj.net/thumbs/120/microsoft/319/face-with-symbols-on-mouth_1f92c.png",
        },
        {
          id: "avoidant",
          text: "Take Breaks",
          imageUrl: "https://em-content.zobj.net/thumbs/120/microsoft/319/hourglass-not-done_23f3.png",
        },
        {
          id: "hostile",
          text: "Get Defensive",
          imageUrl: "https://em-content.zobj.net/thumbs/120/microsoft/319/face-with-raised-eyebrow_1f928.png",
        },
      ],
    },
    {
      id: "q12",
      type: "single",
      layout: "list",
      text: "When your partner needs space, you usually:",
      answers: [
        {
          id: "validating",
          text: "Respect their need while maintaining emotional connection",
        },
        {
          id: "volatile",
          text: "Find it difficult but try to understand their perspective",
        },
        {
          id: "avoidant",
          text: "Appreciate the opportunity for personal space",
        },
        {
          id: "hostile",
          text: "Feel anxious or rejected by their need for space",
        },
      ],
    },
    {
      id: "info4",
      type: "info",
      text: "Your Style Matters",
      content: (
        <div style={{ textAlign: 'center', color: '#fff' }}>
          <div style={{ fontSize: '48px', marginBottom: '20px' }}>🎯</div>
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '16px',
            padding: '24px',
            marginBottom: '20px'
          }}>
            <h3 style={{ fontSize: '24px', marginBottom: '16px', color: '#ffc371' }}>No Perfect Style</h3>
            <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
              Each conflict resolution style has its strengths and challenges. The key is understanding your style and learning to work with your partner's approach.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "q13",
      type: "single",
      layout: "grid",
      text: "When resolving a conflict, you focus on:",
      answers: [
        {
          id: "validating",
          text: "Understanding",
          imageUrl: "https://em-content.zobj.net/thumbs/120/microsoft/319/light-bulb_1f4a1.png",
        },
        {
          id: "volatile",
          text: "Expression",
          imageUrl: "https://em-content.zobj.net/thumbs/120/microsoft/319/megaphone_1f4e3.png",
        },
        {
          id: "avoidant",
          text: "Harmony",
          imageUrl: "https://em-content.zobj.net/thumbs/120/microsoft/319/peace-symbol_262e-fe0f.png",
        },
        {
          id: "hostile",
          text: "Resolution",
          imageUrl: "https://em-content.zobj.net/thumbs/120/microsoft/319/check-mark-button_2705.png",
        },
      ],
    },
    {
      id: "q14",
      type: "single",
      layout: "list",
      text: "In your ideal relationship, conflicts are:",
      answers: [
        {
          id: "validating",
          text: "Opportunities for growth and deeper understanding",
        },
        {
          id: "volatile",
          text: "Natural expressions of passion and commitment",
        },
        {
          id: "avoidant",
          text: "Rare and quickly resolved",
        },
        {
          id: "hostile",
          text: "Direct and solution-focused",
        },
      ],
    },
  ],
  resultDescriptions: {
    validating: {
      label: "Validating Style",
      icon: "🤝",
      description: "You excel at understanding and validating your partner's feelings during conflicts. You're skilled at maintaining emotional connection while working through disagreements. Your approach helps create a safe space for open communication and mutual understanding.",
    },
    volatile: {
      label: "Volatile Style",
      icon: "💫",
      description: "You're passionate and expressive in your approach to conflict. You enjoy engaging in lively discussions and aren't afraid to show your emotions. Your energy can bring excitement to the relationship, though it's important to ensure both partners feel heard and respected.",
    },
    avoidant: {
      label: "Conflict-Avoidant Style",
      icon: "🕊️",
      description: "You prefer to maintain harmony by avoiding unnecessary conflicts. You're good at letting minor issues go and giving space when needed. While this can keep the peace, remember that some issues need to be addressed directly for the relationship to grow.",
    },
    hostile: {
      label: "Hostile Style",
      icon: "🛡️",
      description: "You tend to be direct and defensive in conflicts, often focusing on protecting your position. While this can be effective in some situations, it's important to work on softening your approach and being more open to your partner's perspective.",
    },
  },
  calculateResult: (quizData, answers) => {
    // Initialize tally
    const tally = {
      validating: 0,
      volatile: 0,
      avoidant: 0,
      hostile: 0,
    };

    // Count answers
    Object.values(answers).forEach((answer) => {
      if (answer) {
        tally[answer]++;
      }
    });

    // Calculate percentages
    const total = Object.values(tally).reduce((sum, count) => sum + count, 0);
    const percentages = {};
    Object.keys(tally).forEach((key) => {
      percentages[key] = Math.round((tally[key] / total) * 100);
    });

    // Find primary and secondary styles
    const sortedStyles = Object.entries(percentages)
      .sort(([, a], [, b]) => b - a)
      .map(([style]) => style);

    return {
      primary: sortedStyles[0],
      secondary: percentages[sortedStyles[1]] > 20 ? sortedStyles[1] : null,
      percentages,
    };
  },
};

export default conflictResolutionQuiz;
