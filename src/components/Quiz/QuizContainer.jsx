import React, { useState, useRef } from "react";
import { QuizProvider, useQuiz } from "./QuizContext";
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
        <div style={{ display: "flex", gap: 16, justifyContent: "center", marginTop: 32, marginLeft: 16, marginRight: 16 }}>
          <button
            className="free-feature-over-button-quiz"
            style={{ width: 180 }}
            onClick={onRestart}
          >
            Restart Quiz
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

  // Better mobile device detection
  const isMobileDevice = () => {
    if (typeof navigator === 'undefined') return false;
    
    // Check for touch capability
    const hasTouch = 'ontouchstart' in window || 
                     navigator.maxTouchPoints > 0 || 
                     navigator.msMaxTouchPoints > 0;
    
    // Check user agent for mobile indicators
    const userAgent = navigator.userAgent.toLowerCase();
    const mobileKeywords = ['mobile', 'android', 'iphone', 'ipad', 'ipod', 'blackberry', 'windows phone'];
    const hasMobileUA = mobileKeywords.some(keyword => userAgent.includes(keyword));
    
    // Check screen size (mobile-like dimensions)
    const isSmallScreen = window.screen.width <= 768 || window.innerWidth <= 768;
    
    // Check for mobile-specific APIs
    const hasOrientationAPI = 'orientation' in window || 'onorientationchange' in window;
    
    // Combine checks - need touch + (mobile UA OR small screen OR orientation API)
    return hasTouch && (hasMobileUA || isSmallScreen || hasOrientationAPI);
  };

  // Only use Web Share API on actual mobile devices
  const canShare = isMobileDevice() && 
                   typeof navigator !== 'undefined' && 
                   navigator.share && 
                   navigator.canShare;

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
        onShowResult={() => setShowResult(true)}
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
