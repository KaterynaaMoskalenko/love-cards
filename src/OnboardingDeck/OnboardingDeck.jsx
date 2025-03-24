import React, {useEffect, useRef, useState} from "react";
import {useTranslation} from "react-i18next";
import cardTeamUs from "../assets/images/Card-orange.svg";
import cardRomanticSparks from "../assets/images/Card-red.svg";
import cardReflectGrow from "../assets/images/Card-yellow.svg";
import Deck from "../components/Deck/Deck";
import {QuestionsDeck} from "../QuestionsDeck/QuestionsDeck";
import {getIsOnboardingCompleted, setIsOnboardingCompleted} from "./OnboardingService";

import "./OnboardingDeck.css";
import {getPurchaseStatus} from "../Menu/stripe/StripeService";
import FreeFeatureOverScreen from "../components/FreeFeatureOverScreen/FreeFeatureOverScreen";

const ONBOARDING_CARDS = [
    {
        backImage: cardTeamUs,
        index: 3,
    },
    {
        backImage: cardRomanticSparks,
        index: 2,
    },
    {
        backImage: cardReflectGrow,
        index: 1,
    },
];

const getOnboardingCardContent = (t, index) => {
    return <div className={"onboarding-card-container"}>
        <div className={"onboarding-card-title"}>{t(`onboarding.howToPlayTitle${index}`)}</div>
        <div className={"onboarding-card-subtitle"}>{t(`onboarding.howToPlaySubtitle${index}`)}</div>
    </div>
}

const OnboardingDeck = ({categoryFilters}) => {
    const [isOnboarding, setIsOnboarding] = useState(false);
    const [isDeckFinished, setIsDeckFinished] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const deckRef = useRef(null);
    const {t} = useTranslation();
    const [localizedOnboardingCards, setLocalizedOnboardingCards] = useState([]);

    const isPaid = getPurchaseStatus();

    useEffect(() => {
       setLocalizedOnboardingCards(ONBOARDING_CARDS.map(card => ({
              ...card,
              frontContent: getOnboardingCardContent(t, card.index)
         })));
    }, [t]);

    useEffect(() => {
        const onboardingCompleted = getIsOnboardingCompleted();
        if (!onboardingCompleted) {
            setIsOnboarding(true);
        }
        setIsLoading(false);

        setTimeout(() => {
            deckRef.current?.flipTopCard();
        }, 2400);
    }, []);

    const onOnboardingCardGone = (index) => {
        if (index === 3) {
            setTimeout(() => {
                setIsOnboardingCompleted();
                setIsOnboarding(false);
            }, 300);
        }
    }

    const onDeckFinish = () => {
        setTimeout(() => {
            setIsDeckFinished(true);
        }, 300);
    }

    if (isLoading) {
        return;
    }

    if (isOnboarding) {
        return <Deck
            ref={deckRef}
            cardsContent={localizedOnboardingCards}
            onGone={onOnboardingCardGone}
            showCardDelay={700}
        />
    }

    if ((isDeckFinished && !isPaid)) {
        return <FreeFeatureOverScreen/>;
    }

    return <QuestionsDeck
        categoryFilters={categoryFilters}
        onDeckFinish={onDeckFinish}
        questionsCount={isPaid ? 150 : 10}
    />
};

export default OnboardingDeck;