import React, { useState } from "react";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";
import "./LikeButton.css";

const LikeButton = () => {
    const [liked, setLiked] = useState(false);
    const [floatingHearts, setFloatingHearts] = useState([]);

    const handleLike = () => {
        if (!liked) {
            setLiked(true);

            // Generate 3 floating hearts with different movement directions
            const newHearts = [
                { id: Date.now(), direction: "left", rotation: -30 },  // Leftward tilt
                { id: Date.now() + 1, direction: "up", rotation: 0 },   // No rotation
                { id: Date.now() + 2, direction: "right", rotation: 30 } // Rightward tilt
            ];

            setFloatingHearts((prev) => [...prev, ...newHearts]);

            // Remove floating hearts after animation (1.2 sec)
            setTimeout(() => {
                setFloatingHearts([]);
            }, 1200);
        } else {
            setLiked(false);
        }
    };

    return (
        <div className="like-container" onClick={handleLike}>
            {/* Floating hearts animation */}
            {floatingHearts.map((heart) => (
                <HeartIconSolid
                    key={heart.id}
                    className={`floating-heart ${heart.direction}`}
                    style={{ transform: `rotate(${heart.rotation}deg)` }}
                />
            ))}

            {/* Like button */}
            <div className={`like-button ${liked ? "liked" : ""}`}>
                {liked ? <HeartIconSolid className="heart-icon" /> : <HeartIconOutline className="heart-icon" />}
            </div>
        </div>
    );
};

export default LikeButton;
