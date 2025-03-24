import React, {forwardRef, useEffect, useImperativeHandle, useState} from "react";
import { useSprings, animated, interpolate } from "react-spring";
import { useGesture } from "react-use-gesture";
import cardBackImage from "../../assets/images/Card-back.svg";

const to = (i, delay = 50) => ({
  x: 0,
  y: i * -2,
  scale: 1,
  rot: 0,
  flip: 180,
  delay: i * delay,
});
const from = (i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000, flip: 180 });
const trans = (r, s) =>
  `perspective(1500px) rotateX(30deg) rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s})`;

const Deck = forwardRef(({ onGone, cardsContent: originalCardsContent, showCardDelay, loadNextCardsContentPage}, ref) => {
  const [cardsContent, setCardsContent] = useState([]);
  const [gone] = useState(() => new Set()); // Track cards that are flicked out
  const [flipped, setFlipped] = useState(Array(cardsContent.length).fill(true)); // Track flip state for each card
  const [isClickInProgress, setIsClickInProgress] = useState(false);

  const [props, set] = useSprings(cardsContent.length, (i) => ({
    ...to(i, showCardDelay),
    from: from(i),
  }));

  useEffect(() => {
    setFlipped(Array(cardsContent.length).fill(true));
  }, [cardsContent]);

  useEffect(() => {
    const initialCardsContent = originalCardsContent ?? loadNextCardsContentPage();
    setCardsContent(initialCardsContent);
  }, []);

  useImperativeHandle(ref, () => {
    return {
      bringBackLastCard: () => {
        const topIndex = getTopCardIndex();
        return bringBackCard(topIndex + 1);
      },
      flipTopCard: () => {
        const topIndex = getTopCardIndex();
        return handleClick(topIndex);
      },
    };
  }, [cardsContent, gone, flipped]); // Include all dependencies

  const bringBackCard = (index) => {
    if (gone.has(index)) {
      gone.delete(index);
      set((i) => {
        if (index !== i) return;
        return { ...to(i, showCardDelay), flip: flipped[index] ? 180 : 0 }; // Ensure correct flip state
      });
      setFlipped((prev) => {
        const newFlipped = [...prev];
        newFlipped[index] = false; // Ensure card is facing front
        return newFlipped;
      });
    }
  };

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
    const topCardIndex = getTopCardIndex();
    return topCardIndex === index;
  };
  const getTopCardIndex = () => {
    const topCardIndex = gone.size
      ? Math.min(...gone) - 1
      : cardsContent.length - 1;
    console.log('TOP CARD INDEX', topCardIndex, cardsContent);
    return topCardIndex;
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
        onGone(cardsContent[index].index);
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
      if (!down && gone.size === cardsContent.length)
        setTimeout(() => {
          gone.clear() || set((i) => ({...to(i, showCardDelay), from: from(i)}));
          if (loadNextCardsContentPage) {
            const newCardsContent = loadNextCardsContentPage();
            setCardsContent(newCardsContent);
          } else {
            setFlipped(Array(cardsContent.length).fill(true));
          }
        }, 600);
    }
  );

  return (
    <div
      id="deck-container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
      }}
    >
      {props.map(({ x, y, rot, scale, flip }, i) => (
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
                  ? `url(${cardsContent[i]?.backImage})`
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
                <div className="card-back">{cardsContent[i]?.frontContent}</div>
              )}
            </div>
          </animated.div>
        </animated.div>
      ))}
    </div>
  );
});

export default Deck;
