import React, { useState, useRef } from "react";
import { QuizProvider, useQuiz } from "./QuizContext";
import { useNavigate } from "react-router-dom";
import "../FreeFeatureOverScreen/FreeFeatureOverScreen.css";
import html2canvas from 'html2canvas';
import ResultImageCard from './ResultImageCard';

const ProgressBar = () => {
  const { quizData, currentIndex } = useQuiz();
  const total = quizData.questions.length;
  const percent = Math.round(((currentIndex + 1) / total) * 100);
  return (
    <div
      style={{
        margin: "32px 0 24px 0",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "90%",
          maxWidth: 360,
          margin: "0 auto",
          height: 8,
          borderRadius: 8,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${percent}%`,
            height: "100%",
            background: "linear-gradient(90deg, #ff5f6d, #ffc371)",
            transition: "width 0.4s cubic-bezier(.4,2,.6,1)",
          }}
        />
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: 8,
          color: "#fff",
          fontWeight: 500,
        }}
      >
        Step {currentIndex + 1} of {total}
      </div>
    </div>
  );
};

const SingleSelectList = ({ question, answer, onSelect }) => (
  <div style={{ width: "100%", marginTop: 24 }}>
    {question.answers.map((ans) => (
      <button
        key={ans.id}
        className={`free-feature-over-button-quiz`}
        style={{
          width: "100%",
          marginBottom: 16,
          background:
            answer === ans.id
              ? "linear-gradient(135deg, #ff5f6d, #ffc371)"
              : "rgba(255,255,255,0.08)",
          color: answer === ans.id ? "#18171c" : "#fff",
          border:
            answer === ans.id ? "2px solid #ffc371" : "2px solid transparent",
          fontWeight: 500,
          fontSize: 16,
          transition: "all 0.2s cubic-bezier(.4,2,.6,1)",
        }}
        onClick={() => onSelect(ans.id)}
        type="button"
      >
        {ans.text}
      </button>
    ))}
  </div>
);

const SingleSelectGrid = ({ question, answer, onSelect }) => (
  <div
    style={{
      width: "100%",
      marginTop: 24,
      display: "flex",
      flexWrap: "wrap",
      padding: 8,
      boxSizing: "border-box",
    }}
  >
    {question.answers.map((ans) => (
      <button
        key={ans.id}
        className={`free-feature-over-button-quiz`}
        style={{
          width: "calc(50% - 16px)",
          minHeight: 120,
          margin: 8,
          background:
            answer === ans.id
              ? "linear-gradient(135deg, #ff5f6d, #ffc371)"
              : "rgba(255,255,255,0.08)",
          color: answer === ans.id ? "#18171c" : "#fff",
          border:
            answer === ans.id ? "2px solid #ffc371" : "2px solid transparent",
          fontWeight: 500,
          fontSize: 16,
          transition: "all 0.2s cubic-bezier(.4,2,.6,1)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          boxSizing: "border-box",
        }}
        onClick={() => onSelect(ans.id)}
        type="button"
      >
        {ans.imageUrl && (
          <img
            src={ans.imageUrl}
            alt={ans.text}
            style={{
              width: 48,
              height: 48,
              marginBottom: 12,
              objectFit: "contain",
            }}
          />
        )}
        <span style={{ fontSize: 18 }}>{ans.text}</span>
      </button>
    ))}
  </div>
);

const MultiSelectList = ({ question, answer = [], onSelect }) => (
  <div style={{ width: "100%", marginTop: 24 }}>
    {question.answers.map((ans) => {
      const selected = answer.includes(ans.id);
      return (
        <button
          key={ans.id}
          className={`free-feature-over-button-quiz`}
          style={{
            width: "100%",
            marginBottom: 16,
            background: selected
              ? "linear-gradient(135deg, #ff5f6d, #ffc371)"
              : "rgba(255,255,255,0.08)",
            color: selected ? "#18171c" : "#fff",
            border: selected ? "2px solid #ffc371" : "2px solid transparent",
            fontWeight: 500,
            fontSize: 16,
            transition: "all 0.2s cubic-bezier(.4,2,.6,1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: 12,
          }}
          onClick={() => onSelect(ans.id)}
          type="button"
        >
          <span
            style={{
              display: "inline-block",
              width: 20,
              height: 20,
              borderRadius: 4,
              border: selected ? "2px solid #18171c" : "2px solid #fff",
              background: selected ? "#ffc371" : "transparent",
              marginRight: 8,
              transition: "all 0.2s cubic-bezier(.4,2,.6,1)",
            }}
          >
            {selected && (
              <span
                style={{
                  display: "block",
                  width: 12,
                  height: 12,
                  margin: 2,
                  background: "#18171c",
                  borderRadius: 2,
                }}
              />
            )}
          </span>
          {ans.text}
        </button>
      );
    })}
  </div>
);

const MultiSelectGrid = ({ question, answer = [], onSelect }) => (
  <div
    style={{
      width: "100%",
      marginTop: 24,
      display: "flex",
      flexWrap: "wrap",
      padding: 8,
      boxSizing: "border-box",
    }}
  >
    {question.answers.map((ans) => {
      const selected = answer.includes(ans.id);
      return (
        <button
          key={ans.id}
          className={`free-feature-over-button-quiz`}
          style={{
            width: "calc(50% - 16px)",
            minHeight: 120,
            margin: 8,
            background: selected
              ? "linear-gradient(135deg, #ff5f6d, #ffc371)"
              : "rgba(255,255,255,0.08)",
            color: selected ? "#18171c" : "#fff",
            border: selected ? "2px solid #ffc371" : "2px solid transparent",
            fontWeight: 500,
            fontSize: 16,
            transition: "all 0.2s cubic-bezier(.4,2,.6,1)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            textAlign: "center",
            boxSizing: "border-box",
          }}
          onClick={() => onSelect(ans.id)}
          type="button"
        >
          {ans.imageUrl && (
            <img
              src={ans.imageUrl}
              alt={ans.text}
              style={{
                width: 48,
                height: 48,
                marginBottom: 12,
                objectFit: "contain",
              }}
            />
          )}
          <span style={{ fontSize: 18 }}>{ans.text}</span>
        </button>
      );
    })}
  </div>
);

const QuizSlide = () => {
  const { quizData, currentIndex, answers, setAnswer } = useQuiz();
  const q = quizData.questions[currentIndex];

  if (q.type === "info") {
    return (
      <div
        style={{
          minHeight: 120,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(255,255,255,0.06)",
          borderRadius: 16,
          padding: 32,
          margin: "24px 0",
          width: "100%",
        }}
      >
        {q.content ? (
          q.content
        ) : (
          <>
            {q.icon && (
              <div style={{ fontSize: 40, marginBottom: 12 }}>{q.icon}</div>
            )}
            <div style={{ fontSize: 20, color: "#fff", textAlign: "center" }}>
              {q.text}
            </div>
          </>
        )}
      </div>
    );
  }

  // Single-select, list layout
  if (q.type === "single" && q.layout === "list") {
    return (
      <>
        <div style={{ fontSize: 20, color: "#fff", textAlign: "center" }}>
          {q.text}
        </div>
        <SingleSelectList
          question={q}
          answer={answers[q.id]}
          onSelect={(id) => setAnswer(q.id, id)}
        />
      </>
    );
  }

  // Single-select, grid layout
  if (q.type === "single" && q.layout === "grid") {
    return (
      <>
        <div style={{ fontSize: 20, color: "#fff", textAlign: "center" }}>
          {q.text}
        </div>
        <SingleSelectGrid
          question={q}
          answer={answers[q.id]}
          onSelect={(id) => setAnswer(q.id, id)}
        />
      </>
    );
  }

  // Multi-select, list layout
  if (q.type === "multi" && q.layout === "list") {
    return (
      <>
        <div style={{ fontSize: 20, color: "#fff", textAlign: "center" }}>
          {q.text}
        </div>
        <MultiSelectList
          question={q}
          answer={answers[q.id]}
          onSelect={(id) => {
            const prev = answers[q.id] || [];
            setAnswer(
              q.id,
              prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]
            );
          }}
        />
      </>
    );
  }

  // Multi-select, grid layout
  if (q.type === "multi" && q.layout === "grid") {
    return (
      <>
        <div style={{ fontSize: 20, color: "#fff", textAlign: "center" }}>
          {q.text}
        </div>
        <MultiSelectGrid
          question={q}
          answer={answers[q.id]}
          onSelect={(id) => {
            const prev = answers[q.id] || [];
            setAnswer(
              q.id,
              prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]
            );
          }}
        />
      </>
    );
  }

  // Fallback for other types (to be implemented)
  return (
    <div
      style={{
        fontSize: 20,
        color: "#fff",
        textAlign: "center",
        minHeight: 120,
      }}
    >
      {q.text}
    </div>
  );
};

const ResultCard = ({ result, onRestart, descriptions, quizData, canShare }) => {
  const desc = descriptions[result.primary];
  const resultCardRef = useRef(null);
  const imageCardRef = useRef(null);
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const navigate = useNavigate();

  const downloadResultImage = async () => {
    if (!imageCardRef.current) return;

    setIsGeneratingImage(true);

    try {
      const canvas = await html2canvas(imageCardRef.current, {
        scale: 2,
        backgroundColor: null,
        useCORS: true,
        allowTaint: true,
        width: 540,
        height: 960,
        windowWidth: 540,
        windowHeight: 960,
      });

      // Generate filename
      const quizType = quizData.title.toLowerCase().replace(/\s+/g, '-');
      const primaryStyle = result.primary.toLowerCase().replace(/\s+/g, '-');
      const filename = `two-of-us-${quizType}-${primaryStyle}.png`;

      if (canShare) {
        // Mobile: Use Web Share API
        try {
          canvas.toBlob(async (blob) => {
            if (!blob) {
              throw new Error('Failed to generate image');
            }

            const file = new File([blob], filename, { type: 'image/png' });

            // Check if the file can be shared
            if (navigator.canShare({ files: [file] })) {
              try {
                await navigator.share({
                  title: `My ${quizData.title} Result`,
                  text: `I got ${result.primary}! Take the ${quizData.title} quiz on TwoOfUsCards.com`,
                  files: [file]
                });
                // Share completed successfully
              } catch (shareError) {
                // Handle share cancellation vs actual errors
                if (shareError.name === 'AbortError') {
                  // User cancelled the share - this is normal behavior, do nothing
                  return;
                } else {
                  // Actual error occurred, fallback to download
                  console.warn('Share failed, falling back to download:', shareError);
                  downloadCanvas(canvas, filename);
                }
              }
            } else {
              // Fallback to download if file sharing not supported
              downloadCanvas(canvas, filename);
            }
          }, 'image/png');
        } catch (shareError) {
          console.error('Error preparing share:', shareError);
          // Fallback to download
          downloadCanvas(canvas, filename);
        }
      } else {
        // Desktop: Download as before
        downloadCanvas(canvas, filename);
      }
    } catch (error) {
      console.error('Error generating image:', error);
      alert('Sorry, there was an error generating your image. Please try again.');
    } finally {
      setIsGeneratingImage(false);
    }
  };

  const downloadCanvas = (canvas, filename) => {
    const link = document.createElement('a');
    link.download = filename;
    link.href = canvas.toDataURL('image/png');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* Hidden image card for capture */}
      <div style={{ position: 'absolute', left: '-9999px', top: '-9999px' }}>
        <div ref={imageCardRef}>
          <ResultImageCard result={result} descriptions={descriptions} />
        </div>
      </div>

      {/* Visible result card */}
      <div
        ref={resultCardRef}
        style={{
          background: "rgba(255,255,255,0.08)",
          borderRadius: 20,
          padding: 16,
          textAlign: "center",
          color: "#fff",
          width: "100%",
          maxWidth: 600,
        }}
      >
        <div style={{ fontSize: 48, marginBottom: 12 }}>{desc?.icon || "🎉"}</div>
        <div style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>
          {result.secondary ? (
            <>
              Your Primary Style: {desc?.label || "Unknown"}
              <div style={{ fontSize: 20, marginTop: 16, color: "#ffc371" }}>
                Secondary Style: {descriptions[result.secondary]?.label}
              </div>
            </>
          ) : (
            `Your Style: ${desc?.label || "Unknown"}`
          )}
        </div>

        {/* Buttons positioned right after style titles */}
        <div style={{ display: "flex", gap: 16, justifyContent: "center", margin: "24px 16px", flexWrap: "wrap" }}>
          <button
            className="free-feature-over-button-quiz"
            style={{ width: 180 }}
            onClick={() => navigate('/quizzes')}
          >
            📚 More Quizzes
          </button>
          <button
            onClick={downloadResultImage}
            className="free-feature-over-button-quiz"
            disabled={isGeneratingImage}
            style={{
              background: isGeneratingImage
                ? '#666'
                : 'linear-gradient(135deg, #ff5f6d, #ffc371)',
              cursor: isGeneratingImage ? 'not-allowed' : 'pointer',
              width: 180,
              transition: 'all 0.3s ease',
              opacity: isGeneratingImage ? 0.7 : 1,
            }}
          >
            {isGeneratingImage
              ? '⏳ Generating...'
              : canShare
                ? '📱 Share'
                : '📸 Download'
            }
          </button>
        </div>

        {/* Small CTA for Card Game */}
        <div style={{
          textAlign: "center",
          margin: "16px 0 24px 0",
          padding: "0 16px"
        }}>
          <div style={{
            fontSize: 14,
            color: "rgba(255,255,255,0.6)",
            lineHeight: 1.4
          }}>
            💡 Want to practice these skills with your partner?{" "}
            <button
              onClick={() => window.open('https://app.twoofuscards.com?utm_source=quiz&utm_medium=results&utm_campaign=eq_quiz', '_blank', 'noopener,noreferrer')}
              style={{
                background: "none",
                border: "none",
                color: "#ffc371",
                textDecoration: "underline",
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 500,
                padding: 0
              }}
            >
              Try our card game ↗
            </button>
          </div>
        </div>

        <div style={{ fontSize: 18, marginBottom: 24 }}>{desc?.description}</div>
        <div style={{ fontSize: 16, margin: "24px 0 8px 0", fontWeight: 600 }}>
          Your Profile:
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 12,
          }}
        >
          {Object.keys(descriptions).map((key) => (
            <div
              key={key}
              style={{
                background:
                  key === result.primary || key === result.secondary
                    ? "#ffc371"
                    : "rgba(255,255,255,0.06)",
                color: key === result.primary || key === result.secondary ? "#18171c" : "#fff",
                borderRadius: 12,
                padding: "12px 18px",
                minWidth: 120,
                margin: 4,
                fontWeight: 500,
                fontSize: 16,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
              }}
            >
              <span style={{ fontSize: 22 }}>{descriptions[key].icon}</span>
              <span>{descriptions[key].label}</span>
              <span style={{ fontWeight: 700, marginLeft: 6 }}>
                {result.percentages?.[key] || result.tally?.[key] || 0}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const QuizContainer = ({ quizData }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  return (
    <div
      style={{
        marginTop: 80,
        marginBottom: 30,
        minWidth: 340,
        paddingLeft: 16,
        paddingRight: 16,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "calc(100vh - 80px)", // Full viewport height minus margins
        position: "relative",
      }}
    >
      <QuizProvider quizData={quizData} key={currentQuestionIndex}>
        <QuizWithResult onRestart={() => setCurrentQuestionIndex((k) => k + 1)} />
      </QuizProvider>
    </div>
  );
};

const QuizWithResult = ({ onRestart }) => {
  const { quizData, currentIndex, answers } = useQuiz();
  const isLast = currentIndex === quizData.questions.length - 1;
  const [showResult, setShowResult] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);

  // Better mobile device detection
  const isMobileDevice = () => {
    return window.innerWidth <= 768;
  };

  // Only use Web Share API on actual mobile devices
  const canShare = isMobileDevice() &&
                   typeof navigator !== 'undefined' &&
                   navigator.share &&
                   navigator.canShare;

  const handleShowResult = () => {
    setIsCalculating(true);
    // Add a delay to show the loading state
    setTimeout(() => {
      setIsCalculating(false);
      setShowResult(true);
    }, 8000); // 8 seconds delay for calculating effect and reading the info card
  };

  // Show loading state while calculating
  if (isCalculating) {
    // Dynamic content based on quiz type
    const getQuizSpecificContent = () => {
      // Use quiz-specific loadingContent if available, otherwise fallback to defaults
      if (quizData.loadingContent) {
        return quizData.loadingContent;
      }
      
      // Fallback for quizzes that don't have loadingContent yet
      return {
        subtitle: "Analyzing your responses",
        cardTitle: "💝 Ready for Deeper Conversations?",
        cardText: "Your results are almost ready. Practice these insights with meaningful discussions."
      };
    };

    const content = getQuizSpecificContent();

    return (
      <div style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "0 16px"
      }}>
        <div style={{
          background: "rgba(255,255,255,0.08)",
          borderRadius: 20,
          padding: 40,
          maxWidth: 400,
          width: "100%"
        }}>
          {/* Animated loading spinner */}
          <div style={{
            width: 60,
            height: 60,
            border: "4px solid rgba(255,255,255,0.1)",
            borderTop: "4px solid #ffc371",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
            margin: "0 auto 24px auto"
          }} />
          
          <div style={{
            fontSize: 24,
            fontWeight: 600,
            color: "#fff",
            marginBottom: 12
          }}>
            Calculating Results...
          </div>
          
          <div style={{
            fontSize: 16,
            color: "rgba(255,255,255,0.7)",
            lineHeight: 1.5,
            marginBottom: 32
          }}>
            {content.subtitle}
          </div>

          {/* Info Card for Card Game Promotion */}
          <div style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12,
            padding: 20,
            marginTop: 24
          }}>
            <div style={{
              fontSize: 18,
              fontWeight: 600,
              color: "#ffc371",
              marginBottom: 12,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8
            }}>
              {content.cardTitle}
            </div>
            
            <div style={{
              fontSize: 15,
              color: "rgba(255,255,255,0.9)",
              lineHeight: 1.5,
              marginBottom: 16
            }}>
              {content.cardText}
            </div>
            
            <button
              onClick={() => window.open('https://app.twoofuscards.com?utm_source=quiz&utm_medium=loading&utm_campaign=eq_quiz', '_blank', 'noopener,noreferrer')}
              style={{
                background: "linear-gradient(135deg, #ff5f6d, #ffc371)",
                border: "none",
                borderRadius: 8,
                color: "#18171c",
                padding: "12px 20px",
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                transition: "transform 0.2s ease",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                width: "100%"
              }}
              onMouseEnter={(e) => e.target.style.transform = "scale(1.02)"}
              onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
            >
              🎮 Start Deeper Conversations ↗
            </button>
            
            <div style={{
              fontSize: 12,
              color: "rgba(255,255,255,0.5)",
              marginTop: 8
            }}>
              (Opens in new tab)
            </div>
          </div>
        </div>
        
        {/* Add CSS animation for spinner */}
        <style jsx>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  if (showResult) {
    const result = quizData.calculateResult(quizData, answers);
    return (
      <div style={{
        height: "100%",
          width: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden"
      }}>
        <div style={{
          flex: 1,
          overflowY: "auto"
        }}>
          <ResultCard
            result={result}
            onRestart={onRestart}
            descriptions={quizData.resultDescriptions}
            quizData={quizData}
            canShare={canShare}
          />
        </div>
      </div>
    );
  }

  return (
    <div style={{
      height: "100vh",
      maxWidth: 400,
      display: "flex",
      flexDirection: "column",
      overflow: "hidden"
    }}>
      <div style={{
        flex: 1,
        overflowY: "auto",
      }}>
        <ProgressBar />
        <QuizSlide />
      </div>
      <QuizNavigation
        onShowResult={handleShowResult}
        isLast={isLast}
      />
    </div>
  );
};

const QuizNavigation = ({ onShowResult, isLast }) => {
  const { currentIndex, quizData, goNext, goBack, answers } = useQuiz();
  const q = quizData.questions[currentIndex];
  const isSingleList = q.type === "single" && q.layout === "list";
  const isSingleGrid = q.type === "single" && q.layout === "grid";
  const isMultiList = q.type === "multi" && q.layout === "list";
  const isMultiGrid = q.type === "multi" && q.layout === "grid";
  const canGoNext =
    q.type === "info" ||
    (isSingleList || isSingleGrid
      ? !!answers[q.id]
      : isMultiList || isMultiGrid
      ? Array.isArray(answers[q.id]) && answers[q.id].length > 0
      : true);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: 24,
      }}
    >
      <button
        className="free-feature-over-button-quiz"
        style={{
          width: "100%",
          opacity: (isLast ? 1 : 0.5) && canGoNext ? 1 : 0.5,
        }}
        onClick={() => (isLast ? onShowResult() : goNext())}
        disabled={!canGoNext}
      >
        {isLast ? "See Result" : "Next"}
      </button>
    </div>
  );
};

export default QuizContainer;
