import React, {useEffect, useMemo, useRef, useState} from "react";
import {useTranslation} from "react-i18next";
import Deck from "../components/Deck/Deck";

import cardQuestionsKnowMeBetter from "../assets/images/Card-pink.svg";
import cardTeamUs from "../assets/images/Card-orange.svg";
import cardRomanticSparks from "../assets/images/Card-red.svg";
import cardReflectGrow from "../assets/images/Card-yellow.svg";
import cardVisionValues from "../assets/images/Card-brown.svg";
import { addToHistory } from "../Menu/history/HistoryService";

import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

import LikeButton from "./LikeButton/LikeButton";

import "./QuestionsDeck.css";
import {logCardSwiped} from "../analytics/analytics";

// const cards = [loveCardImage];
const CATEGORY_IMAGE_MAP = {
    questionsKnowMeBetter: cardQuestionsKnowMeBetter,
    questionsRomanticSparks: cardRomanticSparks,
    questionsVisionValues: cardVisionValues,
    questionsTeamUs: cardTeamUs,
    questionsReflectGrow: cardReflectGrow,
};

const PAGE_SIZE = 20;

export const QuestionsDeck = ({ categoryFilters, onDeckFinish, questionsCount }) => {
    const [currentQuestions, setCurrentQuestions] = useState([]);
    const { t, i18n } = useTranslation();
    const deckRef = useRef(null);
    const [lastGoneIndex, setLastGoneIndex] = useState(null);

    const shuffleArray = (array) => {
        return array.sort(() => Math.random() - 0.5);
    };

    // Load questions based on selected language
    useEffect(() => {
        const questions = t("questions", { returnObjects: true });
        if (questions) {
            const filteredQuestions = prepareQuestions(questions).filter(
                (question) => categoryFilters[question.category]
            );
            const selectedQuestions = sampleQuestions(filteredQuestions);
            setCurrentQuestions(selectedQuestions);
        }
    }, [t, categoryFilters]);

    const prepareQuestions = (questionData) => {
        // Object.entries to return an array of the key/value pairs of an object.
        //Flat method of array instances creates a new array with all sub - array elements concatenated into it.
        const allQuestions = Object.entries(questionData)
            .map(([category, questions]) => {
                return questions.map((question) => {
                    return { category, question };
                });
            })
            .flat();
        return allQuestions;
    };

    // Utility: Select random questions from all categories
    const sampleQuestions = (questions) => {
        const shuffledQuestions = shuffleArray(questions);
        return shuffledQuestions.slice(0, questionsCount);
    };

    const onGone = (index) => {
        logCardSwiped(currentQuestions[index]);
        addToHistory(currentQuestions[index]);
        setLastGoneIndex(index);
        if (index === 0) {
            onDeckFinish();
        }
    }

    const cardsContent = useMemo(() => currentQuestions.map((question, index) => ({
        frontContent: question.question,
        backImage: CATEGORY_IMAGE_MAP[question.category],
        index,
    })), [currentQuestions]);

    if (!cardsContent.length) {
        return null;
    }

    const getTopCardIndex = () => {
        const topCardIndex = lastGoneIndex !== null
            ? lastGoneIndex - 1
            : cardsContent.length - 1;
        return topCardIndex;
    };

    const isBringBackLastCardDisabled = lastGoneIndex === null || lastGoneIndex === cardsContent.length;

    const loadNextCardsContentPage = () => {
        const endIndex = getTopCardIndex() + 1;
        const startIndex = Math.max(endIndex - PAGE_SIZE, 0);
        return cardsContent.slice(startIndex, endIndex);
    };

    console.log("TOP CARD INDEX", getTopCardIndex());

    return <div className={"question-deck-container"}>
        <Deck ref={deckRef} onGone={onGone} loadNextCardsContentPage={loadNextCardsContentPage}/>
        <div className={"questions-deck-actions-container"}>
            <div
                className={`question-deck-action ${isBringBackLastCardDisabled ? "disabled" : ""}`}
                onClick={() => {
                    deckRef.current.bringBackLastCard();
                    setLastGoneIndex(lastGoneIndex + 1);
                }}
            >
                <div className={"question-deck-action-button"}>
                     <ArrowUturnLeftIcon height={24}/>
                </div>
            </div>
            <div>
                <LikeButton currentQuestion={currentQuestions[getTopCardIndex()]}/>
            </div>
        </div>
    </div>;

}