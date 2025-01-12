import React, { useState, useEffect } from "react";
import { useSprings, animated, interpolate } from "react-spring";
import { useGesture } from "react-use-gesture";
import { useTranslation } from "react-i18next";
import loveCardImage from "../../assets/images/love-card.jpg";
import cardBackImage from "../../assets/images/Card-back.svg";
import cardQuestionsKnowMeBetter from "../../assets/images/Card-pink.svg";
import cardTeamUs from "../../assets/images/Card-orange.svg";
import cardRomanticSparks from "../../assets/images/Card-red.svg";
import cardReflectGrow from "../../assets/images/Card-yellow.svg";
import cardVisionValues from "../../assets/images/Card-brown.svg";

// const cards = [loveCardImage];
const CATEGORY_IMAGE_MAP = {
  questionsKnowMeBetter: cardQuestionsKnowMeBetter,
  questionsRomanticSparks: cardRomanticSparks,
  questionsVisionValues: cardVisionValues,
  questionsTeamUs: cardTeamUs,
  questionsReflectGrow: cardReflectGrow,
};

const to = (i) => ({
  x: 0,
  y: i * -2,
  scale: 1,
  rot: 0,
  flip: 180,
  delay: i * 50,
});
const from = (i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000, flip: 180 });
const trans = (r, s) =>
  `perspective(1500px) rotateX(30deg) rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s})`;

function Deck() {
  console.log("!!!!!!!");
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [gone] = useState(() => new Set()); // Track cards that are flicked out
  const [flipped, setFlipped] = useState(Array(20).fill(true)); // Track flip state for each card
  const { t, i18n } = useTranslation();
  const [isClickInProgress, setIsClickInProgress] = useState(false);

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };
  useEffect(() => {
    console.log("########");
    const questions = t("questions", { returnObjects: true });
    if (questions) {
      const selectedQuestions = sampleQuestions(questions);
      setCurrentQuestions(selectedQuestions);
      // setFlipped(Array(20).fill(true)); // Fixed size for flipping
    }
  }, [t]);

  // Utility: Select 20 random questions from all categories
  const sampleQuestions = (questions) => {
    // Object.entries to return an array of the key/value pairs of an object.
    //Flat method of array instances creates a new array with all sub - array elements concatenated into it.
    const allQuestions = Object.entries(questions)
      .map(([category, questions]) => {
        return questions.map((question) => {
          return { category, question };
        });
      })
      .flat();

    const shuffledQuestions = shuffleArray(allQuestions);
    return shuffledQuestions.slice(0, 20);
  };

  // // Load questions based on selected language

  const [props, set] = useSprings(20, (i) => ({
    ...to(i),
    from: from(i),
  }));

  const handleClick = (index) => {
    if (!isTopCardClick(index)) return;
    if (isClickInProgress) return;
    setIsClickInProgress(true);
    set((i) => {
      if (i !== index) return;

      const flip = flipped[index] ? 0 : 180; // Rotate by 180 degrees on flip
      console.log("START FLIP", i);
      setTimeout(() => {
        console.log("OLD FLIPPED", i, flipped[i]);
        setFlipped((prev) => {
          const newFlipped = [...prev];
          newFlipped[index] = !newFlipped[index];
          console.log("NEW FLIPPED", i, newFlipped[i]);
          return newFlipped;
        });
        setIsClickInProgress(false);
      }, 250);
      return { flip, config: { duration: 500 } }; // Slower animation for flip
    });
  };
  const isTopCardClick = (index) => {
    const topCardIndex = gone.size
      ? Math.min(...gone) - 1
      : currentQuestions.length - 1;
    return topCardIndex == index;
  };
  const bind = useGesture(
    ({ args: [index], down, delta: [xDelta], direction: [xDir], velocity }) => {
      if (!isTopCardClick(index)) return;
      //   Android FIX: Increase velocity and xDelta thresholds for swiping:
      const trigger = velocity > 0.7 || Math.abs(xDelta) > 50;
      console.log("xDelta", xDelta, "velocity", velocity, "xDir", xDir);
      const dir = xDir || (xDelta < 0 ? -1 : 1);
      if (!down && trigger) {
        gone.add(index);
        //setFlipped(false);
      }
      set((i) => {
        if (index !== i) return;
        const isGone = gone.has(index);
        const x = isGone ? (150 + window.innerWidth) * dir : down ? xDelta : 0;
        const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0);
        const scale = down ? 1.1 : 1;
        console.log("isGone", isGone, "x", x, "rot", rot, "scale", scale);
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
        };
      });
      if (!down && gone.size === 20)
        setTimeout(() => {
          gone.clear() || set((i) => to(i));
          setFlipped(Array(20).fill(true));
        }, 600);
    }
  );

  return props.map(({ x, y, rot, scale, flip }, i) => (
    <animated.div
      className="deck-of-cards"
      key={i}
      style={{
        transform: interpolate(
          [x, y],
          (x, y) => `translate3d(${x}px,${y}px,0)`
        ),
      }}
    >
      <animated.div
        className="card-flip"
        onClick={() => handleClick(i)}
        {...bind(i)}
        style={{
          display: "flex",
          backgroundSize: "cover",
          transform: interpolate(
            [rot, scale, flip],
            (rot, scale, flip) => `${trans(rot, scale)} rotateY(${flip}deg)`
          ),
        }}
      >
        <div
          className="card-animation"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            width: "100%",
            borderRadius: "15px",
            backgroundImage: flipped[i]
              ? `url(${CATEGORY_IMAGE_MAP[currentQuestions[i]?.category]})`
              : `url(${cardBackImage})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",

            cursor: "pointer",
            boxShadow: `6px 6px 8px rgba(135, 28, 76, 0.5), 
    -6px -6px 8px rgba(135, 28, 76, 0.5)
  `,
          }}
        >
          {!flipped[i] && (
            <div className="card-back">{currentQuestions[i]?.question}</div>
          )}
        </div>
      </animated.div>
    </animated.div>
  ));
}

export default Deck;
