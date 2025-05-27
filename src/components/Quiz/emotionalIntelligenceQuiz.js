import React from "react";

const emotionalIntelligenceQuiz = {
  title: "Emotional Intelligence in Relationships",
  description: "Discover how well you understand and manage emotions in your relationship",
  loadingContent: {
    subtitle: "Analyzing your EQ patterns",
    cardTitle: "💝 Ready to Practice EQ Skills?",
    cardText: "Your results will reveal your emotional strengths. Practice them with meaningful conversations."
  },
  questions: [
    {
      id: "intro",
      type: "info",
      text: "Welcome to the Emotional Intelligence Quiz!",
      content: (
        <div style={{ textAlign: 'center', color: '#fff' }}>
          <div style={{ fontSize: '48px', marginBottom: '20px' }}>🧠💝</div>
          <h2 style={{ fontSize: '24px', marginBottom: '16px', color: '#ffc371' }}>Understanding Emotions in Love</h2>
          <div style={{ 
            background: 'rgba(255,255,255,0.1)', 
            borderRadius: '16px', 
            padding: '24px',
            marginBottom: '20px'
          }}>
            <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '16px' }}>
              Emotional Intelligence (EQ) is your ability to understand, use, and manage emotions effectively in relationships.
            </p>
            <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
              Research shows that EQ is often more important than IQ for relationship success and happiness.
            </p>
          </div>
        </div>
      ),
    },
    // Self-Awareness Questions (1-5)
    {
      id: "q1",
      type: "single",
      layout: "list",
      text: "When you feel upset in your relationship, you typically:",
      answers: [
        {
          id: "attuned",
          text: "Immediately recognize what specific emotion you're feeling and why",
        },
        {
          id: "empathetic",
          text: "Notice you're upset but need time to understand the exact feeling",
        },
        {
          id: "logical",
          text: "Focus on analyzing the situation rather than the emotion",
        },
        {
          id: "passionate",
          text: "Feel overwhelmed by the intensity of the emotion",
        },
      ],
    },
    {
      id: "q2",
      type: "single",
      layout: "grid",
      text: "Which facial expression would you most easily recognize in your partner?",
      answers: [
        {
          id: "attuned",
          text: "Subtle Disappointment",
          imageUrl: "https://em-content.zobj.net/thumbs/120/microsoft/319/slightly-frowning-face_1f641.png",
        },
        {
          id: "empathetic",
          text: "Clear Sadness",
          imageUrl: "https://em-content.zobj.net/thumbs/120/microsoft/319/crying-face_1f622.png",
        },
        {
          id: "logical",
          text: "Obvious Anger",
          imageUrl: "https://em-content.zobj.net/thumbs/120/microsoft/319/angry-face_1f620.png",
        },
        {
          id: "passionate",
          text: "Intense Joy",
          imageUrl: "https://em-content.zobj.net/thumbs/120/microsoft/319/grinning-face-with-big-eyes_1f603.png",
        },
      ],
    },
    {
      id: "q3",
      type: "multi",
      layout: "list",
      text: "Select all the ways you become aware of your emotional state:",
      answers: [
        {
          id: "attuned",
          text: "I notice physical sensations (tension, heart rate changes)",
        },
        {
          id: "empathetic",
          text: "I pay attention to my thoughts and mental reactions",
        },
        {
          id: "logical",
          text: "I analyze patterns in my behavior over time",
        },
        {
          id: "passionate",
          text: "I feel the emotions very intensely and immediately",
        },
      ],
    },
    {
      id: "q4",
      type: "single",
      layout: "list",
      text: "When your partner points out something that hurt them, your first internal reaction is:",
      answers: [
        {
          id: "attuned",
          text: "Curiosity about their perspective and your own feelings",
        },
        {
          id: "empathetic",
          text: "Concern for their pain and wanting to understand",
        },
        {
          id: "logical",
          text: "Analyzing whether their reaction is justified",
        },
        {
          id: "passionate",
          text: "Strong emotional reaction (defensive, guilty, or upset)",
        },
      ],
    },
    {
      id: "q5",
      type: "single",
      layout: "grid",
      text: "Which situation would trigger the strongest emotional response in you?",
      answers: [
        {
          id: "attuned",
          text: "Feeling Misunderstood",
          imageUrl: "https://em-content.zobj.net/thumbs/120/microsoft/319/confused-face_1f615.png",
        },
        {
          id: "empathetic",
          text: "Partner Being Hurt",
          imageUrl: "https://em-content.zobj.net/thumbs/120/microsoft/319/pleading-face_1f97a.png",
        },
        {
          id: "logical",
          text: "Unfair Treatment",
          imageUrl: "https://em-content.zobj.net/thumbs/120/microsoft/319/face-with-raised-eyebrow_1f928.png",
        },
        {
          id: "passionate",
          text: "Being Ignored",
          imageUrl: "https://em-content.zobj.net/thumbs/120/microsoft/319/loudly-crying-face_1f62d.png",
        },
      ],
    },
    // Info Slide 1
    {
      id: "info1",
      type: "info",
      text: "The Science of EQ",
      content: (
        <div style={{ textAlign: 'center', color: '#fff' }}>
          <div style={{ fontSize: '48px', marginBottom: '20px' }}>📊</div>
          <h3 style={{ fontSize: '24px', marginBottom: '16px', color: '#ffc371' }}>Research Findings</h3>
          <div style={{ 
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            marginBottom: '20px',
            flexWrap: 'wrap'
          }}>
            <div style={{ 
              background: 'rgba(255,255,255,0.1)', 
              borderRadius: '12px', 
              padding: '16px',
              flex: 1,
              minWidth: '120px'
            }}>
              <div style={{ fontSize: '32px', marginBottom: '8px', color: '#ffc371' }}>90%</div>
              <div style={{ fontSize: '14px' }}>of top performers have high EQ</div>
            </div>
            <div style={{ 
              background: 'rgba(255,255,255,0.1)', 
              borderRadius: '12px', 
              padding: '16px',
              flex: 1,
              minWidth: '120px'
            }}>
              <div style={{ fontSize: '32px', marginBottom: '8px', color: '#ffc371' }}>2x</div>
              <div style={{ fontSize: '14px' }}>more likely to have successful relationships</div>
            </div>
          </div>
          <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
            Studies show that emotional intelligence is a stronger predictor of relationship satisfaction than personality compatibility.
          </p>
        </div>
      ),
    },
    // Self-Regulation Questions (6-10)
    {
      id: "q6",
      type: "single",
      layout: "list",
      text: "During a heated argument, you're most likely to:",
      answers: [
        {
          id: "attuned",
          text: "Take a pause to collect yourself before responding",
        },
        {
          id: "empathetic",
          text: "Focus on understanding your partner's emotions",
        },
        {
          id: "logical",
          text: "Try to stick to facts and logical points",
        },
        {
          id: "passionate",
          text: "Express your feelings intensely in the moment",
        },
      ],
    },
    {
      id: "q7",
      type: "single",
      layout: "grid",
      text: "When you're angry, which approach do you typically use?",
      answers: [
        {
          id: "attuned",
          text: "Breathe & Reflect",
          imageUrl: "https://em-content.zobj.net/thumbs/120/microsoft/319/person-in-lotus-position_1f9d8.png",
        },
        {
          id: "empathetic",
          text: "Talk It Through",
          imageUrl: "https://em-content.zobj.net/thumbs/120/microsoft/319/speaking-head_1f5e3-fe0f.png",
        },
        {
          id: "logical",
          text: "Analyze the Problem",
          imageUrl: "https://em-content.zobj.net/thumbs/120/microsoft/319/thinking-face_1f914.png",
        },
        {
          id: "passionate",
          text: "Express Immediately",
          imageUrl: "https://em-content.zobj.net/thumbs/120/microsoft/319/face-with-steam-from-nose_1f624.png",
        },
      ],
    },
    {
      id: "q8",
      type: "single",
      layout: "list",
      text: "When you've said something hurtful in anger, you typically:",
      answers: [
        {
          id: "attuned",
          text: "Immediately recognize it and take responsibility",
        },
        {
          id: "empathetic",
          text: "Feel terrible and focus on making amends",
        },
        {
          id: "logical",
          text: "Explain your reasoning while acknowledging the hurt",
        },
        {
          id: "passionate",
          text: "Feel defensive but eventually apologize",
        },
      ],
    },
    {
      id: "q9",
      type: "multi",
      layout: "list",
      text: "Select all the strategies you use to manage difficult emotions:",
      answers: [
        {
          id: "attuned",
          text: "Mindfulness and self-awareness practices",
        },
        {
          id: "empathetic",
          text: "Talking to friends or family for support",
        },
        {
          id: "logical",
          text: "Writing or journaling to process thoughts",
        },
        {
          id: "passionate",
          text: "Physical activities or creative expression",
        },
      ],
    },
    {
      id: "q10",
      type: "single",
      layout: "grid",
      text: "When stressed, which coping mechanism do you prefer?",
      answers: [
        {
          id: "attuned",
          text: "Meditation",
          imageUrl: "https://em-content.zobj.net/thumbs/120/microsoft/319/om_1f549-fe0f.png",
        },
        {
          id: "empathetic",
          text: "Talking",
          imageUrl: "https://em-content.zobj.net/thumbs/120/microsoft/319/speech-balloon_1f4ac.png",
        },
        {
          id: "logical",
          text: "Planning",
          imageUrl: "https://em-content.zobj.net/thumbs/120/microsoft/319/clipboard_1f4cb.png",
        },
        {
          id: "passionate",
          text: "Exercise",
          imageUrl: "https://em-content.zobj.net/thumbs/120/microsoft/319/person-running_1f3c3.png",
        },
      ],
    },
    // Info Slide 2
    {
      id: "info2",
      type: "info",
      text: "Building Emotional Regulation",
      content: (
        <div style={{ textAlign: 'center', color: '#fff' }}>
          <div style={{ fontSize: '48px', marginBottom: '20px' }}>🎯</div>
          <h3 style={{ fontSize: '24px', marginBottom: '16px', color: '#ffc371' }}>The STOP Technique</h3>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px',
            marginBottom: '20px'
          }}>
            <div style={{ 
              background: 'rgba(255,255,255,0.1)', 
              borderRadius: '12px', 
              padding: '16px'
            }}>
              <div style={{ fontSize: '24px', marginBottom: '8px' }}>🛑</div>
              <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#ffc371' }}>Stop</div>
              <div style={{ fontSize: '14px' }}>Pause the reaction</div>
            </div>
            <div style={{ 
              background: 'rgba(255,255,255,0.1)', 
              borderRadius: '12px', 
              padding: '16px'
            }}>
              <div style={{ fontSize: '24px', marginBottom: '8px' }}>🫁</div>
              <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#ffc371' }}>Take a breath</div>
              <div style={{ fontSize: '14px' }}>Center yourself</div>
            </div>
            <div style={{ 
              background: 'rgba(255,255,255,0.1)', 
              borderRadius: '12px', 
              padding: '16px'
            }}>
              <div style={{ fontSize: '24px', marginBottom: '8px' }}>👁️</div>
              <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#ffc371' }}>Observe</div>
              <div style={{ fontSize: '14px' }}>Notice your feelings</div>
            </div>
            <div style={{ 
              background: 'rgba(255,255,255,0.1)', 
              borderRadius: '12px', 
              padding: '16px'
            }}>
              <div style={{ fontSize: '24px', marginBottom: '8px' }}>🎯</div>
              <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#ffc371' }}>Proceed</div>
              <div style={{ fontSize: '14px' }}>Respond mindfully</div>
            </div>
          </div>
          <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
            This simple technique can transform how you handle emotional moments in relationships.
          </p>
        </div>
      ),
    },
    // Empathy & Social Awareness Questions (11-15)
    {
      id: "q11",
      type: "single",
      layout: "list",
      text: "When your partner is quiet after a long day, you:",
      answers: [
        {
          id: "attuned",
          text: "Sense their mood and ask how you can support them",
        },
        {
          id: "empathetic",
          text: "Feel their energy and offer comfort without being asked",
        },
        {
          id: "logical",
          text: "Give them space and wait for them to share",
        },
        {
          id: "passionate",
          text: "Feel concerned and try to cheer them up",
        },
      ],
    },
    {
      id: "q12",
      type: "single",
      layout: "grid",
      text: "Which body language cue do you notice first in your partner?",
      answers: [
        {
          id: "attuned",
          text: "Subtle Tension",
          imageUrl: "https://em-content.zobj.net/thumbs/120/microsoft/319/person-facepalming_1f926.png",
        },
        {
          id: "empathetic",
          text: "Emotional Expression",
          imageUrl: "https://em-content.zobj.net/thumbs/120/microsoft/319/smiling-face-with-tear_1f972.png",
        },
        {
          id: "logical",
          text: "Behavioral Changes",
          imageUrl: "https://em-content.zobj.net/thumbs/120/microsoft/319/person-shrugging_1f937.png",
        },
        {
          id: "passionate",
          text: "Energy Shifts",
          imageUrl: "https://em-content.zobj.net/thumbs/120/microsoft/319/dizzy-face_1f635.png",
        },
      ],
    },
    {
      id: "q13",
      type: "single",
      layout: "list",
      text: "When your partner is stressed about work, you typically:",
      answers: [
        {
          id: "attuned",
          text: "Ask what kind of support they need right now",
        },
        {
          id: "empathetic",
          text: "Listen and validate their feelings",
        },
        {
          id: "logical",
          text: "Offer practical solutions to their problems",
        },
        {
          id: "passionate",
          text: "Share your own similar experiences",
        },
      ],
    },
    {
      id: "q14",
      type: "multi",
      layout: "list",
      text: "Select all the ways you show empathy to your partner:",
      answers: [
        {
          id: "attuned",
          text: "I mirror their emotional state appropriately",
        },
        {
          id: "empathetic",
          text: "I use phrases like 'That sounds really hard'",
        },
        {
          id: "logical",
          text: "I ask clarifying questions to understand better",
        },
        {
          id: "passionate",
          text: "I share how their situation makes me feel",
        },
      ],
    },
    {
      id: "q15",
      type: "single",
      layout: "grid",
      text: "When your partner needs emotional support, which approach feels most natural?",
      answers: [
        {
          id: "attuned",
          text: "Mindful Presence",
          imageUrl: "https://em-content.zobj.net/thumbs/120/microsoft/319/people-hugging_1fac2.png",
        },
        {
          id: "empathetic",
          text: "Active Listening",
          imageUrl: "https://em-content.zobj.net/thumbs/120/microsoft/319/ear_1f442.png",
        },
        {
          id: "logical",
          text: "Problem Solving",
          imageUrl: "https://em-content.zobj.net/thumbs/120/microsoft/319/light-bulb_1f4a1.png",
        },
        {
          id: "passionate",
          text: "Emotional Connection",
          imageUrl: "https://em-content.zobj.net/thumbs/120/microsoft/319/beating-heart_1f493.png",
        },
      ],
    },
    // Info Slide 3
    {
      id: "info3",
      type: "info",
      text: "The Neuroscience of Empathy",
      content: (
        <div style={{ textAlign: 'center', color: '#fff' }}>
          <div style={{ fontSize: '48px', marginBottom: '20px' }}>🧠</div>
          <h3 style={{ fontSize: '24px', marginBottom: '16px', color: '#ffc371' }}>Mirror Neurons at Work</h3>
          <div style={{ 
            background: 'rgba(255,255,255,0.1)', 
            borderRadius: '12px', 
            padding: '20px',
            marginBottom: '20px'
          }}>
            <div style={{ fontSize: '40px', marginBottom: '12px' }}>🪞</div>
            <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '16px' }}>
              Mirror neurons fire both when we act and when we observe others acting. This is the biological basis of empathy!
            </p>
            <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
              When you see your partner smile, the same neurons that would fire if you were smiling become active. This automatic mirroring helps us understand and connect with our loved ones' emotions.
            </p>
          </div>
        </div>
      ),
    },
    // Relationship Management Questions (16-20)
    {
      id: "q16",
      type: "single",
      layout: "list",
      text: "When resolving a conflict, your main goal is to:",
      answers: [
        {
          id: "attuned",
          text: "Understand each other's perspectives and find mutual solutions",
        },
        {
          id: "empathetic",
          text: "Ensure both people feel heard and valued",
        },
        {
          id: "logical",
          text: "Find the most fair and logical resolution",
        },
        {
          id: "passionate",
          text: "Express your feelings and reconnect emotionally",
        },
      ],
    },
    {
      id: "q17",
      type: "single",
      layout: "grid",
      text: "Which communication style do you use most often?",
      answers: [
        {
          id: "attuned",
          text: "Mindful Communication",
          imageUrl: "https://em-content.zobj.net/thumbs/120/microsoft/319/lotus_1fab7.png",
        },
        {
          id: "empathetic",
          text: "Heart-Centered",
          imageUrl: "https://em-content.zobj.net/thumbs/120/microsoft/319/red-heart_2764-fe0f.png",
        },
        {
          id: "logical",
          text: "Clear & Direct",
          imageUrl: "https://em-content.zobj.net/thumbs/120/microsoft/319/direct-hit_1f3af.png",
        },
        {
          id: "passionate",
          text: "Expressive",
          imageUrl: "https://em-content.zobj.net/thumbs/120/microsoft/319/fire_1f525.png",
        },
      ],
    },
    {
      id: "q18",
      type: "multi",
      layout: "list",
      text: "Select all the ways you build emotional intimacy:",
      answers: [
        {
          id: "attuned",
          text: "Regular check-ins about feelings and needs",
        },
        {
          id: "empathetic",
          text: "Sharing vulnerabilities and deep emotions",
        },
        {
          id: "logical",
          text: "Having meaningful conversations about values and goals",
        },
        {
          id: "passionate",
          text: "Expressing love and appreciation frequently",
        },
      ],
    },
    {
      id: "q19",
      type: "single",
      layout: "list",
      text: "When your partner is going through a difficult time, you:",
      answers: [
        {
          id: "attuned",
          text: "Adjust your approach based on what they need most",
        },
        {
          id: "empathetic",
          text: "Provide consistent emotional support and presence",
        },
        {
          id: "logical",
          text: "Help them think through solutions and next steps",
        },
        {
          id: "passionate",
          text: "Share their emotional burden and offer comfort",
        },
      ],
    },
    {
      id: "q20",
      type: "single",
      layout: "grid",
      text: "How do you prefer to express love and appreciation?",
      answers: [
        {
          id: "attuned",
          text: "Thoughtful Gestures",
          imageUrl: "https://em-content.zobj.net/thumbs/120/microsoft/319/wrapped-gift_1f381.png",
        },
        {
          id: "empathetic",
          text: "Words of Affirmation",
          imageUrl: "https://em-content.zobj.net/thumbs/120/microsoft/319/love-letter_1f48c.png",
        },
        {
          id: "logical",
          text: "Acts of Service",
          imageUrl: "https://em-content.zobj.net/thumbs/120/microsoft/319/hammer-and-wrench_1f6e0-fe0f.png",
        },
        {
          id: "passionate",
          text: "Physical Affection",
          imageUrl: "https://em-content.zobj.net/thumbs/120/microsoft/319/couple-with-heart_1f491.png",
        },
      ],
    },
    // Final Info Slide
    {
      id: "info4",
      type: "info",
      text: "Growing Your EQ Together",
      content: (
        <div style={{ textAlign: 'center', color: '#fff' }}>
          <div style={{ fontSize: '48px', marginBottom: '20px' }}>🌱💕</div>
          <h3 style={{ fontSize: '24px', marginBottom: '16px', color: '#ffc371' }}>EQ is Learnable</h3>
          <div style={{ 
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            marginBottom: '20px',
            flexWrap: 'wrap'
          }}>
            <div style={{ 
              background: 'rgba(255,255,255,0.1)', 
              borderRadius: '12px', 
              padding: '16px',
              flex: 1,
              minWidth: '140px'
            }}>
              <div style={{ fontSize: '24px', marginBottom: '8px' }}>🎯</div>
              <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#ffc371' }}>Practice</div>
              <div style={{ fontSize: '14px' }}>Daily emotional awareness</div>
            </div>
            <div style={{ 
              background: 'rgba(255,255,255,0.1)', 
              borderRadius: '12px', 
              padding: '16px',
              flex: 1,
              minWidth: '140px'
            }}>
              <div style={{ fontSize: '24px', marginBottom: '8px' }}>💬</div>
              <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#ffc371' }}>Communicate</div>
              <div style={{ fontSize: '14px' }}>Share feelings openly</div>
            </div>
          </div>
          <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
            Unlike IQ, emotional intelligence can be developed throughout life. Couples who practice EQ skills together create stronger, more resilient relationships.
          </p>
        </div>
      ),
    },
  ],
  resultDescriptions: {
    attuned: {
      label: "High EQ Partner",
      icon: "🧠💝",
      description: "You are emotionally attuned and skilled at relationship navigation. You have excellent emotional awareness, can regulate your responses effectively, and naturally tune into both your own and your partner's emotional states. Your high EQ helps you navigate relationship challenges with wisdom and grace.",
    },
    empathetic: {
      label: "Developing EQ",
      icon: "🌱💕",
      description: "You have good emotional awareness but room for growth in regulation. Your natural empathy and caring nature make you a supportive partner, and you're developing stronger skills in managing intense emotions and reading subtle emotional cues.",
    },
    logical: {
      label: "Analytical Partner",
      icon: "🧩💭",
      description: "You are strong on logic but may miss emotional nuances. You approach relationships with thoughtful analysis and problem-solving skills, but you might sometimes overlook the emotional subtleties of situations. Developing your empathy and emotional expression could enhance your relationships.",
    },
    passionate: {
      label: "Reactive Partner",
      icon: "🔥❤️",
      description: "You feel deeply but struggle with emotional regulation. Your passion and emotional intensity bring energy and authenticity to your relationship, but you may sometimes react strongly before processing. Working on emotional regulation techniques could help you channel your emotional strength more effectively.",
    },
  },
  calculateResult: (quizData, answers) => {
    // Initialize tally
    const tally = {
      attuned: 0,
      empathetic: 0,
      logical: 0,
      passionate: 0,
    };

    // Count answers
    Object.values(answers).forEach((answer) => {
      if (typeof answer === 'string') {
        // Single select answer
        tally[answer]++;
      } else if (Array.isArray(answer)) {
        // Multi select answers
        answer.forEach((ans) => {
          tally[ans]++;
        });
      }
    });

    // Calculate percentages
    const total = Object.values(tally).reduce((sum, count) => sum + count, 0);
    const percentages = {};
    Object.keys(tally).forEach((key) => {
      percentages[key] = total > 0 ? Math.round((tally[key] / total) * 100) : 0;
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

export default emotionalIntelligenceQuiz; 