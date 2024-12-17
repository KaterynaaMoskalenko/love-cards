import { render } from "react-dom";
import React, { useState } from "react";
import { useSprings, animated, interpolate } from "react-spring";
import { useGesture } from "react-use-gesture";
import "../../";
import { questionsAll } from "../../data/QuestionsData";
import loveCardImage from "../../assets/images/love-card.jpg";

const cards = [loveCardImage];

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
  const [gone] = useState(() => new Set()); // Track cards that are flicked out
  const [flipped, setFlipped] = useState(Array(20).fill(true)); // Track flip state for each card

  const [props, set] = useSprings(20, (i) => ({
    ...to(i),
    from: from(i),
  }));

  const bind = useGesture(
    ({ args: [index], down, delta: [xDelta], direction: [xDir], velocity }) => {
      const trigger = velocity > 0.5;
      const dir = xDir < 0 ? -1 : 1;
      if (!down && trigger) {
        gone.add(index);
        //setFlipped(false);
      }
      console.log("VELOCITY", velocity);
      if (!down && velocity == 0) {
        set((i) => {
          if (i !== index) return;
          const flip = flipped[index] ? 0 : 180; // Rotate by 180 degrees on flip
          setTimeout(() => {
            setFlipped((prev) => {
              const newFlipped = [...prev];
              newFlipped[index] = !newFlipped[index];
              return newFlipped;
            });
          }, 250);
          return { flip, config: { duration: 500 } }; // Slower animation for flip
        });
      } else {
        set((i) => {
          if (index !== i) return;
          const isGone = gone.has(index);
          const x = isGone
            ? (150 + window.innerWidth) * dir
            : down
            ? xDelta
            : 0;
          const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0);
          const scale = down ? 1.1 : 1;
          return {
            x,
            rot,
            scale,
            delay: undefined,
            config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
          };
        });
      }
      if (!down && gone.size === 20)
        setTimeout(() => {
          gone.clear() || set((i) => to(i));
          setFlipped(Array(20).fill(true));
        }, 600);
    }
  );

  return props.map(({ x, y, rot, scale, flip }, i) => (
    <animated.div
      key={i}
      style={{
        transform: interpolate(
          [x, y],
          (x, y) => `translate3d(${x}px,${y}px,0)`
        ),
      }}
    >
      <animated.div
        {...bind(i)}
        style={{
          display: "flex",
          transform: interpolate(
            [rot, scale, flip],
            (rot, scale, flip) => `${trans(rot, scale)} rotateY(${flip}deg)`
          ),
          cursor: "pointer",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            width: "100%",
            borderRadius: "15px",
            backgroundImage: flipped[i] ? `url(${cards[0]})` : "",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            boxShadow: `6px 6px 8px rgba(135, 28, 76, 0.5), 
    -6px -6px 8px rgba(135, 28, 76, 0.5)
  `,
          }}
        >
          {!flipped[i] && <div className="card-back">{questionsAll[i]}</div>}
        </div>
      </animated.div>
    </animated.div>
  ));
}

export default Deck;
