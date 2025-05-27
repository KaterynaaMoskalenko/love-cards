import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      menu: {
        language: "Language",
        history: "History",
        favorites: "Favorites",
        categoryChange: "Category Change",
        about: "About",
        promoCardText: "Play 150 cards, see history, save favorite questions & more!",
        startNow: "Start Now!",
        quizzes: "Quizzes",
      },

      categories: {
        questionsKnowMeBetter: "Know Me Better",
        questionsRomanticSparks: "Romantic Sparks",
        questionsVisionValues: "Vision&Values",
        questionsTeamUs: "Team Us",
        questionsReflectGrow: "Reflect Growth",
      },
      questions: {
        questionsKnowMeBetter: [
          "What’s your idea of the perfect date night for us?",
          "What do you think makes our relationship unique?",
          "When did you first realize you had feelings for me?",
          "What’s something small I do that makes you feel loved?",
          "How do you like to show love and affection in a relationship?",
          "What’s a memory of us that always makes you smile?",
          "What’s one romantic gesture you’ve always wanted to experience?",
          "What’s your favorite thing about how we communicate?",
          "What’s one thing you’d like us to do more of as a couple?",
          "How do you feel we handle challenges in our relationship?",
          "What’s one goal or dream you’d like to accomplish together?",
          "How do you define a “perfect” relationship, and how do we compare?",
          "What’s your favorite way to spend quality time with me?",
          "What’s one thing you admire most about our relationship?",
          "What’s something you think we could improve as a couple?",
          "How do you feel when we’re apart for a long time?",
          "What’s the most romantic moment we’ve shared so far?",
          "What’s your favorite compliment I’ve ever given you?",
          "What’s a tradition or ritual we could create as a couple?",
          "What does a lifetime of love with me look like to you?",
        ],
        questionsRomanticSparks: [
          "What’s your favorite kind of kiss from me?",
          "How do you feel when I surprise you with something romantic?",
          "What’s a fantasy or dream you’d like us to explore together?",
          "What’s one small gesture that makes you feel most loved?",
          "What’s your idea of the ultimate romantic date?",
          "How do you like to celebrate special moments in our relationship?",
          "How does physical touch make you feel closer to me?",
          "What’s the most romantic thing you’ve ever dreamed about doing with someone?",
          "How do you feel when I compliment you in an unexpected way?",
          "What’s one way I can make you feel more desired?",
          "What’s your favorite way to initiate romance with me?",
          "What’s the most thrilling or exciting romantic moment we’ve shared?",
          "How do you feel about trying new romantic activities or experiences?",
          "What’s a song or movie that perfectly describes our love?",
          "How do you feel when we share a quiet, intimate moment together?",
          "What’s one thing you love about how we express passion?",
          "What does an ideal weekend getaway with me look like?",
          "What’s something spontaneous you’d love for us to do together?",
          "How do you feel when I make you laugh during romantic moments?",
          "What’s one thing you wish I did more to spark our connection?",
        ],
        questionsVisionValues: [
          "What’s your biggest hope for our relationship’s future?",
          "How do you see us building a happy life together?",
          "What’s one value you think we both share that makes us strong as a couple?",
          "How do you feel about combining traditions or starting new ones as a couple?",
          "What does success in love and life look like for you?",
          "What’s a dream you’d like to achieve together that we haven’t started yet?",
          "How do you think we can keep our love alive as we grow older?",
          "What role does respect play in our relationship for you?",
          "What does loyalty mean to you in a long-term partnership?",
          "How do you feel about how we navigate challenges as a couple?",
          "What’s something about our future you’re most excited for?",
          "How do you think we can balance personal goals with our shared goals?",
          "What’s one habit or practice you think would strengthen our bond?",
          "How do you imagine our relationship evolving in five years?",
          "What’s your vision for how we’ll celebrate major milestones?",
          "How do you think our love can inspire others?",
          "What’s one thing we should always prioritize in our relationship?",
          "What’s something you admire most about how we share life’s responsibilities?",
          "How do you feel about growing old with me?",
          "What’s your idea of a “perfect life” we could build together?",
        ],
        questionsTeamUs: [
          "How do you feel we handle making decisions as a couple?",
          "What’s one challenge we’ve overcome together that made us stronger?",
          "How do you think we can become better at supporting each other?",
          "What’s one thing I do that makes you feel like we’re an amazing team?",
          "How do you feel about how we handle stress together?",
          "What’s a project or goal you’d love for us to tackle as a couple?",
          "How do you think we balance fun and responsibility in our relationship?",
          "What’s one shared activity you think brings us closer?",
          "How do you feel about how we communicate during disagreements?",
          "What’s one way we could grow closer by working together?",
          "How do you think we bring out the best in each other?",
          "What’s a new hobby or experience we should try together?",
          "How do you feel about our ability to trust and rely on each other?",
          "What’s a time we worked well together that made you proud of us?",
          "How do you think we can keep our connection strong over the years?",
          "What’s one thing we could practice doing together to improve our bond?",
          "How do you feel about the way we share responsibilities in our lives?",
          "What’s one way we could strengthen our teamwork in love and life?",
          "How do you feel when we celebrate each other’s achievements?",
          "What’s something we’ve done together that taught you more about me?",
        ],
        questionsReflectGrow: [
          "What’s one lesson we’ve learned together that’s strengthened our relationship?",
          "How do you feel our relationship has grown since we started?",
          "What’s one thing you think we’ve improved as a couple?",
          "How do you feel about how we’ve supported each other through challenges?",
          "What’s one moment where you felt proud of how we handled a conflict?",
          "How do you feel about the way we show forgiveness to each other?",
          "What’s one thing you’ve learned about love from being with me?",
          "How do you think we’ve changed each other for the better?",
          "What’s one way you feel more secure in our relationship now than before?",
          "How do you feel when we talk openly about our needs and desires?",
          "What’s a growth area you’d like us to focus on together?",
          "How do you feel about the way we celebrate small wins in our relationship?",
          "What’s something I do that makes you feel deeply appreciated?",
          "How do you think we’ve become more emotionally connected over time?",
          "What’s one thing we could do better to make each other feel heard?",
          "How do you feel when we reflect on our shared experiences?",
          "What’s a habit or tradition we’ve developed that makes you feel loved?",
          "How do you think we’ve shown resilience as a couple?",
          "What’s one way we can continue to grow stronger as partners?",
          "How do you feel about the way we’ve created a safe space for each other?",
        ],
      },
      unlockPaidFeatures: {
        title: "DEEP QUESTIONS & COUPLE CONVERSATIONS",
        subtitle: "Unlock 150 meaningful questions & customize your experience.",
        features: {
          questions: "150 Questions (Free version: 10)",
          favorites: "Like questions & view favorites",
          history: "View history of played questions",
          categories: "Select & filter question categories",
          oneTimePayment: "One-time payment – No subscriptions!"
        },
        price: "Unlock all features for $10",
        unlockNow: "START NOW",
        restorePurchases: "Restore previous purchases",
        terms: "Terms of use",
        privacy: "Privacy Policy"
      },
      paymentSuccess: {
        title: "Success! You're In! 🎉",
        subtitle: "Your premium access is now active!",
        enjoy: "Start exploring the best cards and create new memories.",
        specialMoments: "We hope you enjoy every moment together!",
        startNow: "Start Playing Now"
      },
      startTrial: {
        title: "Your 7-Day Trial Has Started! 🚀",
        subtitle: "You've unlocked full access to premium features.",
        enjoy: "Dive into all 150 cards and discover new sides of each other.",
        specialMoments: "Make the most of these 7 days—every question counts!",
        startNow: "Explore Now"
      },
      zeroState: {
        history: {
          iconLabel: "Clock icon representing history",
          title: "Your journey starts here!",
          description: "Answered questions will be saved here. Start your journey now.",
          button: "Start Session"
        },
        favorites: {
          iconLabel: "Broken heart icon representing empty favorites",
          title: "No favorites yet",
          description: "Tap the ❤️ on questions to save them here.",
          button: "Browse Questions"
        }
      },
      paymentCancelled: {
        title: "Payment Cancelled ❌",
        subtitle: "It looks like the payment process was interrupted.",
        message: "Don't worry! You can try again or return to the app.",
        retryButton: "Retry Payment",
        backButton: "Back to App"
      },
      onboarding: {
        howToPlayTitle1: "Tap, Swipe, Like!",
        howToPlaySubtitle1:
            "• Tap to reveal the question.\n" +
            "• Swipe to go next.\n" +
            "• Like to save for later.",
        howToPlayTitle2: "Focus Your Experience",
        howToPlaySubtitle2:
            "• Each card has a category.\n" +
            "• Filter by category.\n" +
            "• See questions that fit.",
        howToPlayTitle3: "Make It Your Moment",
        howToPlaySubtitle3:
            "• Read the question out loud.\n" +
            "• Let your partner answer first.\n"+
            "• Get comfy and enjoy the moment."
      },
      freeFeatureOverScreen: {
        header: "You've unlocked 10 of 150 cards!",
        subtitle: "Don't stop here – there's so much more to explore together.",
        pricing: "Only $10 for Lifetime Access!",
        purchaseButton: "Unlock Premium Now",
        termsOfService: "Terms of Service",
        privacyPolicy: "Privacy Policy"
      },
    },
  },
  pl: {
    translation: {
      menu: {
        language: "Język",
        history: "Historia",
        favorites: "Ulubione",
        categoryChange: "Zmiana kategorii",
        about: "O nas",
        promoCardText: "Graj 150 kartami, zobacz historię, zapisz ulubione pytania i więcej!",
        startNow: "Zacznij teraz!"
      },
      categories: {
        questionsKnowMeBetter: "Poznaj mnie lepiej",
        questionsRomanticSparks: "Romantyczne Iskry",
        questionsVisionValues: "Wizja i Wartości",
        questionsTeamUs: "My jako Zespół",
        questionsReflectGrow: "Refleksja i Rozwój"
      },
      questions: {
        questionsKnowMeBetter: [
          "Jaka jest twoja wizja idealnej randki dla nas?",
          "Co twoim zdaniem sprawia, że nasz związek jest wyjątkowy?",
          "Kiedy po raz pierwszy zdałeś(aś) sobie sprawę, że masz do mnie uczucia?",
          "Coś małego, co robię, sprawia, że czujesz się kochany(a)?",
          "Jak lubisz okazywać miłość i czułość w związku?",
          "Jakie wspomnienie o nas zawsze sprawia, że się uśmiechasz?",
          "Jakim romantycznym gestem zawsze chciałeś(aś) się cieszyć?",
          "Co najbardziej lubisz w sposobie, w jaki się komunikujemy?",
          "Co chciałbyś(aś), abyśmy robili więcej jako para?",
          "Jak czujesz, że radzimy sobie z wyzwaniami w naszym związku?",
          "Jakie jedno cele lub marzenie chciałbyś(aś) zrealizować razem?",
          "Jak definiujesz „idealny” związek i jak się do niego odnosimy?",
          "Jaki jest twój ulubiony sposób spędzania jakościowego czasu ze mną?",
          "Co najbardziej podziwiasz w naszym związku?",
          "Co uważasz, że moglibyśmy poprawić jako para?",
          "Jak się czujesz, gdy jesteśmy daleko od siebie przez dłuższy czas?",
          "Jaki był najbardziej romantyczny moment, który dzieliliśmy do tej pory?",
          "Jaki jest twój ulubiony komplement, który kiedykolwiek ci dałem(a)?",
          "Jaka tradycja lub rytuał moglibyśmy stworzyć jako para?",
          "Jak widzisz życie pełne miłości ze mną?",
        ],
        questionsRomanticSparks: [
          "Jaki jest twój ulubiony rodzaj pocałunku ode mnie?",
          "Jak się czujesz, gdy zaskakuję cię czymś romantycznym?",
          "Jaką fantazję lub marzenie chciałbyś(aś), żebyśmy wspólnie zrealizowali?",
          "Jaki jeden mały gest sprawia, że czujesz się najbardziej kochany(a)?",
          "Jaka jest twoja wizja idealnej, romantycznej randki?",
          "Jak lubisz świętować szczególne chwile w naszym związku?",
          "Jak dotyk fizyczny sprawia, że czujesz się bliżej mnie?",
          "Jaka jest najbardziej romantyczna rzecz, którą kiedykolwiek marzyłeś(aś) zrobić z kimś?",
          "Jak się czujesz, gdy komplementuję cię w niespodziewany sposób?",
          "Jak mogę sprawić, byś czuł(a) się bardziej pożądany(a)?",
          "Jaki jest twój ulubiony sposób, aby inicjować romans ze mną?",
          "Jaki był najbardziej ekscytujący lub porywający romantyczny moment, który dzieliliśmy?",
          "Jak czujesz się w związku z próbą nowych romantycznych aktywności lub doświadczeń?",
          "Jaka piosenka lub film idealnie opisuje naszą miłość?",
          "Jak się czujesz, gdy dzielimy cichy, intymny moment razem?",
          "Co najbardziej lubisz w sposobie, w jaki wyrażamy naszą pasję?",
          "Jak wyglądałaby idealna weekendowa podróż we dwoje?",
          "Co spontanicznego chciałbyś(aś), żebyśmy razem zrobili?",
          "Jak się czujesz, gdy sprawiam, że się śmiejesz podczas romantycznych chwil?",
          "Co chciałbyś(aś), żebym robił(a) więcej, aby pobudzić naszą więź?",
        ],
        questionsVisionValues: [
          "Jakie jest twoje największe marzenie dotyczące przyszłości naszego związku?",
          "Jak widzisz nas, budujących szczęśliwe życie razem?",
          "Jaka jedna wartość, którą oboje podzielamy, sprawia, że jesteśmy silnym związkiem?",
          "Jak czujesz się w związku z łączeniem tradycji lub tworzeniem nowych jako para?",
          "Jak wygląda sukces w miłości i życiu dla ciebie?",
          "Jakie marzenie chciałbyś(aś) zrealizować razem, które jeszcze nie zostało rozpoczęte?",
          "Jak myślisz, co możemy zrobić, aby nasza miłość pozostała żywa, gdy będziemy starsi?",
          "Jaką rolę odgrywa szacunek w naszym związku dla ciebie?",
          "Co oznacza lojalność w długoterminowym partnerstwie?",
          "Jak czujesz się w związku z tym, jak pokonujemy wyzwania jako para?",
          "Co w naszej przyszłości najbardziej cię ekscytuje?",
          "Jak myślisz, jak możemy zrównoważyć osobiste cele z naszymi wspólnymi celami?",
          "Jaki jeden nawyk lub praktyka, według ciebie, wzmocniłaby naszą więź?",
          "Jak wyobrażasz sobie ewolucję naszego związku za pięć lat?",
          "Jaka jest twoja wizja tego, jak będziemy obchodzić ważne kamienie milowe?",
          "Jak myślisz, jak nasza miłość może inspirować innych?",
          "Jaka jedna rzecz powinna być zawsze priorytetem w naszym związku?",
          "Co najbardziej podziwiasz w sposobie, w jaki dzielimy odpowiedzialności życiowe?",
          "Jak się czujesz w związku z myślą o starzeniu się ze mną?",
          "Jak wyobrażasz sobie „idealne życie”, które moglibyśmy razem zbudować?",
        ],
        questionsTeamUs: [
          "Jak czujesz się w związku z tym, jak podejmujemy decyzje jako para?",
          "Jaka jedna trudność, którą razem pokonaliśmy, sprawiła, że staliśmy się silniejsi?",
          "Jak myślisz, jak możemy stać się lepsi w wspieraniu się nawzajem?",
          "Jaka jedna rzecz, którą robię, sprawia, że czujesz, iż jesteśmy niesamowitym zespołem?",
          "Jak czujesz się w związku z tym, jak radzimy sobie ze stresem razem?",
          "Jaki projekt lub cel chciałbyś, żebyśmy podjęli jako para?",
          "Jak myślisz, jak balansujemy zabawę i odpowiedzialność w naszym związku?",
          "Jaka jedna wspólna aktywność, według ciebie, zbliża nas do siebie?",
          "Jak czujesz się w związku z tym, jak komunikujemy się podczas nieporozumień?",
          "Jaka jedna rzecz sprawiłaby, że zbliżylibyśmy się do siebie, pracując razem?",
          "Jak myślisz, jak wyciągamy z siebie nawzajem to, co najlepsze?",
          "Jaki nowy hobby lub doświadczenie powinniśmy wypróbować razem?",
          "Jak czujesz się w związku z naszą zdolnością do zaufania sobie i polegania na sobie?",
          "Jaka sytuacja, w której pracowaliśmy razem, sprawiła, że byłeś(aś) dumny z nas?",
          "Jak myślisz, jak możemy utrzymać naszą więź silną przez lata?",
          "Jaka jedna rzecz, według ciebie, mogłaby wzmocnić naszą więź, jeśli robilibyśmy ją razem?",
          "Jak czujesz się w związku z tym, jak dzielimy obowiązki w naszym życiu?",
          "Jaka jedna rzecz sprawiłaby, że wzmocnilibyśmy naszą współpracę w miłości i życiu?",
          "Jak się czujesz, kiedy celebrujemy nawzajem nasze osiągnięcia?",
          "Co zrobiliśmy razem, co nauczyło cię czegoś więcej o mnie?",
        ],
        questionsReflectGrow: [
          "Jaka jedna lekcja, którą razem się nauczyliśmy, wzmocniła nasz związek?",
          "Jak czujesz, że nasz związek rozwinął się od momentu, gdy zaczęliśmy?",
          "Jaka jedna rzecz, według ciebie, poprawiła się w naszym związku?",
          "Jak czujesz się w związku z tym, jak wspieraliśmy się nawzajem przez trudności?",
          "Jaka chwila sprawiła, że byłeś(aś) dumny z tego, jak poradziliśmy sobie z konfliktem?",
          "Jak czujesz się w związku z tym, jak okazujemy sobie nawzajem przebaczenie?",
          "Jaka jedna rzecz, którą nauczyłeś(aś) się o miłości, będąc ze mną?",
          "Jak myślisz, jak zmieniliśmy się na lepsze dzięki sobie nawzajem?",
          "Jaki jeden sposób sprawia, że czujesz się bardziej bezpieczny(a) w naszym związku teraz niż wcześniej?",
          "Jak czujesz się, kiedy otwarcie rozmawiamy o naszych potrzebach i pragnieniach?",
          "Jaka dziedzina rozwoju, według ciebie, powinna być naszą wspólną uwagą?",
          "Jak czujesz się w związku z tym, jak świętujemy małe sukcesy w naszym związku?",
          "Jaka jedna rzecz, którą robię, sprawia, że czujesz się głęboko doceniony(a)?",
          "Jak myślisz, jak staliśmy się bardziej emocjonalnie związani z upływem czasu?",
          "Jaka jedna rzecz, według ciebie, mogłaby sprawić, że będziemy lepsi w tym, aby czuć się wysłuchanymi?",
          "Jak czujesz się, gdy wspólnie reflektujemy nad naszymi wspólnymi doświadczeniami?",
          "Jaka tradycja lub nawyk, który rozwinęliśmy, sprawia, że czujesz się kochany(a)?",
          "Jak myślisz, jak pokazaliśmy odporność jako para?",
          "Jaki jeden sposób możemy zastosować, aby dalej rosnąć i stawać się silniejszymi partnerami?",
          "Jak czujesz się w związku z tym, jak stworzyliśmy bezpieczną przestrzeń dla siebie nawzajem?",
        ],
      },
      unlockPaidFeatures: {
        title: "GŁĘBOKIE PYTANIA & ROZMOWY DLA PAR",
        subtitle: "Odblokuj 150 wartościowych pytań i dostosuj swoje doświadczenie.",
        features: {
          questions: "150 pytań (wersja darmowa: 10)",
          favorites: "Polub pytania i przeglądaj ulubione",
          history: "Zobacz historię zadanych pytań",
          categories: "Wybieraj i filtruj kategorie pytań",
          oneTimePayment: "Jednorazowa opłata – Bez subskrypcji!"
        },
        price: "Odblokuj wszystkie funkcje za 10$",
        unlockNow: "ZACZNIJ TERAZ",
        restorePurchases: "Przywróć poprzednie zakupy",
        terms: "Regulamin",
        privacy: "Polityka prywatności"
      },
      paymentSuccess: {
        title: "Sukces! Jesteś w grze! 🎉",
        subtitle: "Twój dostęp premium jest teraz aktywny!",
        enjoy: "Rozpocznij odkrywanie najlepszych kart i twórz nowe wspomnienia.",
        specialMoments: "Mamy nadzieję, że każdy moment będzie wyjątkowy!",
        startNow: "Zacznij grać teraz"
      },
      startTrial: {
        title: "Twój 7-dniowy okres próbny się rozpoczął! 🚀",
        subtitle: "Masz pełny dostęp do funkcji premium.",
        enjoy: "Zanurz się w 150 kartach i odkrywaj nowe strony swojej drugiej połówki.",
        specialMoments: "Wykorzystaj te 7 dni jak najlepiej — każde pytanie się liczy!",
        startNow: "Zacznij grać teraz"
      },
      zeroState: {
        history: {
          iconLabel: "Ikona zegara oznaczająca historię",
          title: "Twoja podróż zaczyna się tutaj!",
          description: "Odpowiedzi na pytania będą tu zapisywane. Zacznij teraz.",
          button: "Rozpocznij sesję"
        },
        favorites: {
          iconLabel: "Ikona złamanego serca oznaczająca brak ulubionych",
          title: "Brak ulubionych",
          description: "Stuknij ❤️ przy pytaniach, aby zapisać je tutaj.",
          button: "Przeglądaj pytania"
        }
      },
      paymentCancelled: {
        title: "Płatność anulowana ❌",
        subtitle: "Wygląda na to, że proces płatności został przerwany.",
        message: "Nie martw się! Możesz spróbować ponownie lub wrócić do aplikacji.",
        retryButton: "Spróbuj ponownie",
        backButton: "Powrót do aplikacji"
      },
      onboarding: {
        howToPlayTitle1: "Dotknij, Przesuń, Polub!",
        howToPlaySubtitle1:
            "• Dotknij, aby odkryć pytanie.\n" +
            "• Przesuń, by przejść dalej.\n" +
            "• Polub, by zapisać na później.",
        howToPlayTitle2: "Dopasuj Do Siebie",
        howToPlaySubtitle2:
            "• Każda karta ma kategorię.\n" +
            "• Filtruj według kategorii.\n" +
            "• Wybierz pytania dla siebie.",
        howToPlayTitle3: "Stwórz Swój Moment",
        howToPlaySubtitle3:
            "• Przeczytaj pytanie na głos.\n" +
            "• Pozwól partnerowi odpowiedzieć.\n" +
            "• Usiądź wygodnie i rozmawiaj."
      },
      freeFeatureOverScreen: {
        header: "Odblokowałeś 10 z 150 kart!",
        subtitle: "Nie zatrzymuj się tutaj – jest jeszcze wiele do odkrycia razem.",
        pricing: "Tylko 10 USD za dożywotni dostęp!",
        purchaseButton: "Odblokuj Premium Teraz",
        termsOfService: "Warunki Usługi",
        privacyPolicy: "Polityka Prywatności"
      }
    },
  },
  ua: {
    translation: {
      menu: {
        language: "Мова",
        history: "Історія",
        favorites: "Улюблене",
        categoryChange: "Зміна категорії",
        about: "Про нас",
        promoCardText: "Грай 150 картами, переглядай історію, зберігай улюблені запитання та багато іншого!",
        startNow: "Почни зараз!"
      },
      categories: {
        questionsKnowMeBetter: "Про мене",
        questionsRomanticSparks: "Романтичні іскри",
        questionsVisionValues: "Бачення та цінності",
        questionsTeamUs: "Ми як команда",
        questionsReflectGrow: "Рефлексія та розвиток"
      },
      questions: {
        questionsKnowMeBetter: [
          "Яка для тебе ідея ідеального побачення для нас?",
          "Що, на твою думку, робить наші стосунки унікальними?",
          "Коли ти вперше зрозумів(ла), що маєш почуття до мене?",
          "Яка дрібниця змушує тебе відчувати себе коханим(ою)?",
          "Як ти любиш показувати любов і прихильність у стосунках?",
          "Який спогад про нас завжди викликає у тебе усмішку?",
          "Який романтичний жест ти завжди хотів(ла) пережити?",
          "Що тобі найбільше подобається в нашому спілкуванні?",
          "Що б ти хотів(ла), щоб ми робили більше як пара?",
          "Як ти вважаєш, як ми справляємося з викликами у наших стосунках?",
          "Яка ціль або мрія, яку ти хотів(ла) б здійснити разом?",
          "Як ти визначаєш “ідеальні” стосунки, і як ми порівнюємося?",
          "Який твій улюблений спосіб проводити час зі мною?",
          "Що ти найбільше цінуєш у наших стосунках?",
          "Що ти думаєш, що ми могли б покращити як пара?",
          "Як ти почуваєшся, коли ми довго не разом?",
          "Який найбільш романтичний момент ми пережили до цього часу?",
          "Який твій улюблений комплімент, який я тобі колись сказав(ла)?",
          "Яку традицію або ритуал ми могли б створити як пара?",
          "Як ти бачиш наше спільне життя в любові на все життя?",
        ],
        questionsRomanticSparks: [
          "Який твій улюблений тип поцілунку від мене?",
          "Як ти почуваєшся, коли я дивую тебе чимось романтичним?",
          "Яка фантазія чи мрія, яку ти хотів(ла) б, щоб ми разом здійснили?",
          "Який маленький жест змушує тебе відчувати себе більш коханим(ою)?",
          "Яка твоя ідея ідеального романтичного побачення?",
          "Як ти любиш святкувати особливі моменти в наших стосунках?",
          "Який фізичний дотик допомагає тобі відчувати себе ближче до мене?",
          "Яка найбільш романтична річ, про яку ти коли-небудь мріяв(ла) зробити з кимось?",
          "Як ти почуваєшся, коли я несподівано роблю тобі комплімент ?",
          "Який спосіб я можу змусити тебе відчувати себе бажаним(ою)?",
          "Який твій улюблений спосіб ініціювати романтику зі мною?",
          "Який найбільш захоплюючий чи хвилюючий романтичний момент ми пережили?",
          "Як ти почуваєшся, коли ми пробуємо нові романтичні активності чи переживання?",
          "Яка пісня чи фільм ідеально описує нашу любов?",
          "Як ти почуваєшся, коли ми розділяємо тихий, інтимний момент разом?",
          "Що ти любиш в тому, як ми виражаємо свою пристрасть?",
          "Як виглядає ідеальний відпочинок на вихідні з тобою?",
          "Яку спонтанну річ ти б хотів(ла) зробити разом?",
          "Як ти почуваєшся, коли я змушую тебе сміятися під час романтичних моментів?",
          "Що ти хочеш, щоб я робив(ла) більше, щоб розпалити наш зв'язок?",
        ],
        questionsVisionValues: [
          "Яка твоя найбільша надія на майбутнє наших стосунків?",
          "Як ти бачиш, як ми будуємо щасливе життя разом?",
          "Яку одну цінність ти вважаєш, що ми обоє розділяємо, що робить нас сильними як пару?",
          "Як ти ставишся до поєднання традицій чи започаткування нових як пара?",
          "Як для тебе виглядає успіх у любові та житті?",
          "Яку мрію ти хотів(ла) б здійснити разом, яку ми ще не почали?",
          "Як ти думаєш, як ми можемо зберегти нашу любов живою, коли ми будемо старіти?",
          "Яку роль для тебе відіграє повага у наших стосунках?",
          "Що для тебе означає вірність у довготривалих партнерствах?",
          "Як ти відчуваєш, як ми долаємо труднощі як пара?",
          "Що в нашому майбутньому тебе найбільше хвилює?",
          "Як ти думаєш, як ми можемо збалансувати особисті цілі з нашими спільними цілями?",
          "Яка одна звичка чи практика, що може зміцнити наш зв'язок?",
          "Як ти уявляєш, як наші стосунки розвиватимуться через п’ять років?",
          "Яка твоя візія, як ми будемо святкувати великі досягнення?",
          "Як ти думаєш, як наша любов може надихати інших?",
          "Що ми повинні завжди ставити на перше місце в наших стосунках?",
          "Що ти найбільше цінуєш у тому, як ми ділимося життєвими обов’язками?",
          "Як ти почуваєшся з приводу того, що ми старітимемо разом?",
          "Яка твоя ідея «ідеального життя», яке ми могли б побудувати разом?",
        ],
        questionsTeamUs: [
          "Як ти відчуваєш, як ми приймаємо рішення як пара?",
          "Яку одну проблему ми подолали разом, що зробило нас сильнішими?",
          "Як ти думаєш, як ми можемо стати кращими у підтримці одне одного?",
          "Яку одну річ я роблю, що змушує тебе відчувати, що ми - чудова команда?",
          "Як ти відчуваєш, як ми справляємося зі стресом разом?",
          "Який проект чи мету ти хотів(ла) б, щоб ми виконали як пара?",
          "Як ти думаєш, як ми збалансовуємо розваги та відповідальність у наших стосунках?",
          "Яку одну спільну діяльність, на твою думку, вона нас наближає?",
          "Як ти відчуваєш, як ми спілкуємося під час суперечок?",
          "Яким чином ми могли б стати ближчими, працюючи разом?",
          "Як ти думаєш, як ми виявляємо найкраще одне в одному?",
          "Яке нове хобі чи досвід ми повинні спробувати разом?",
          "Як ти відчуваєш, як ми можемо довіряти та покладатися одне на одного?",
          "Який момент, коли ми працювали разом, змусив тебе пишатися нами?",
          "Як ти думаєш, як ми можемо зберегти наш зв'язок міцним з часом?",
          "Яку одну річ ми могли б практикувати разом, щоб покращити наш зв'язок?",
          "Як ти відчуваєш, як ми ділимося обов'язками в нашому житті?",
          "Яким чином ми могли б зміцнити нашу командну роботу в любові та житті?",
          "Як ти відчуваєш, коли ми святкуємо досягнення одне одного?",
          "Що ми зробили разом, що допомогло тобі більше зрозуміти мене?",
        ],
        questionsReflectGrow: [
          "Який один урок ми вивчили разом, що зміцнив наші стосунки?",
          "Як ти відчуваєш, як наші стосунки зросли з моменту, як ми почали?",
          "Яку одну річ, на твою думку, ми покращили як пара?",
          "Як ти відчуваєш, як ми підтримуємо одне одного через труднощі?",
          "Який один момент, коли ти відчув(ла) гордість за те, як ми вирішили конфлікт?",
          "Як ти відчуваєш, як ми показуємо прощення одне одному?",
          "Яку одну річ про любов ти дізнався(лась) від наших стосунків?",
          "Як ти думаєш, як ми змінили одне одного на краще?",
          "Яким чином ти відчуваєш більше безпеки в наших стосунках тепер, ніж раніше?",
          "Як ти відчуваєш, коли ми відкрито говоримо про наші потреби та бажання?",
          "Яка зона розвитку, на твою думку, нам варто зосередити увагу разом?",
          "Як ти відчуваєш, як ми святкуємо маленькі перемоги в наших стосунках?",
          "Що я роблю, що змушує тебе відчувати себе глибоко оціненим(ою)?",
          "Як ти думаєш, як ми стали емоційно більш зв'язаними з часом?",
          "Яку одну річ ми могли б зробити краще, щоб один одного слухати?",
          "Як ти відчуваєш, коли ми розмірковуємо про наші спільні досвіди?",
          "Яку звичку чи традицію ми розвинули, що змушує тебе відчувати себе любленим(ою)?",
          "Як ти думаєш, як ми продемонстрували стійкість як пара?",
          "Яким чином ми можемо продовжувати зміцнюватися як партнери?",
          "Як ти відчуваєш, коли ми створили безпечний простір один для одного?",
        ],
      },
      unlockPaidFeatures: {
        title: "ГЛИБОКІ ЗАПИТАННЯ & РОЗМОВИ ДЛЯ ПАР",
        subtitle: "Розблокуйте 150 значущих запитань і налаштуйте свій досвід.",
        features: {
          questions: "150 запитань (безкоштовна версія: 10)",
          favorites: "Вподобайте запитання та переглядайте улюблені",
          history: "Переглядайте історію пройдених запитань",
          categories: "Вибирайте та фільтруйте категорії запитань",
          oneTimePayment: "Разовий платіж – Без підписок!"
        },
        price: "Розблокуйте всі функції за 10$",
        unlockNow: "ПОЧАТИ ЗАРАЗ",
        restorePurchases: "Відновити попередні покупки",
        terms: "Умови використання",
        privacy: "Політика конфіденційності"
      },
      paymentSuccess: {
        title: "Успіх! Ви в грі! 🎉",
        subtitle: "Ваш преміум доступ тепер активний!",
        enjoy: "Почніть досліджувати найкращі картки та створювати нові спогади.",
        specialMoments: "Сподіваємось, кожен момент буде особливим!",
        startNow: "Почати гру зараз"
      },
      startTrial: {
        title: "Ваш 7-денний пробний період розпочато! 🚀",
        subtitle: "Ви отримали повний доступ до преміум функцій.",
        enjoy: "Зануртесь у всі 150 карток і відкрийте нові сторони одне одного.",
        specialMoments: "Використайте ці 7 днів на повну — кожне питання має значення!",
        startNow: "Почати гру зараз"
      },
      zeroState: {
        history: {
          iconLabel: "Іконка годинника, що представляє історію",
          title: "Ваша подорож починається тут!",
          description: "Відповіді на запитання зберігатимуться тут. Почніть зараз.",
          button: "Почати сесію"
        },
        favorites: {
          iconLabel: "Іконка розбитого серця, що представляє відсутність улюблених",
          title: "Ще немає улюблених",
          description: "Натисніть ❤️ біля питань, щоб зберегти їх тут.",
          button: "Переглянути запитання"
        }
      },
      paymentCancelled: {
        title: "Платіж скасовано ❌",
        subtitle: "Здається, процес оплати було перервано.",
        message: "Не хвилюйтесь! Ви можете спробувати ще раз або повернутися до застосунку.",
        retryButton: "Спробувати ще раз",
        backButton: "Повернутися до застосунку"
      },
      onboarding: {
        howToPlayTitle1: "Торкнись, Проведи, Вподобай!",
        howToPlaySubtitle1:
            "• Торкнись, щоб відкрити питання.\n" +
            "• Проведи, щоб перейти далі.\n" +
            "• Вподобай, щоб зберегти.",
        howToPlayTitle2: "Налаштуй Досвід",
        howToPlaySubtitle2:
            "• Кожна картка має категорію.\n" +
            "• Фільтруй за категоріями.\n" +
            "• Обирай питання під настрій.",
        howToPlayTitle3: "Створи Свій Момент",
        howToPlaySubtitle3:
            "• Прочитай питання вголос.\n" +
            "• Нехай партнер відповість.\n" +
            "• Розслабся і спілкуйся."
      },
      freeFeatureOverScreen: {
        header: "Ви розблокували 10 із 150 карток!",
        subtitle: "Не зупиняйтеся – є ще багато, що можна дослідити разом.",
        pricing: "Лише 10 доларів за необмежений доступ!",
        purchaseButton: "Розблокувай Преміум Зараз",
        termsOfService: "Умови обслуговування",
        privacyPolicy: "Політика конфіденційності"
      }
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    keySeparator: ".",

    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
