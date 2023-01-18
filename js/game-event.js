function renderGameScreen() {
    window.app.mainNode.appendChild(templateEngine(gameScreenTemplate()));

    const gameScreen = document.querySelector(".game__screen");
    const headerScreen = document.querySelector(".game__screen-header");

    headerScreen.appendChild(templateEngine(playNewGameTemplate()));

    window.app.renderBlock("newGame", headerScreen);
    window.app.renderBlock("cards", gameScreen);
}

function renderNewGame() {
    document
        .querySelector(".game__button")
        .addEventListener("click", (event) => {
            event.preventDefault();

            window.app.level = [];
            window.app.renderScreen("startScreen");
        });
}

function startTimer() {
    const gameTimer = document.querySelector(".timer__degits");
}

function renderCards() {
    let cardValues = cards;
    const difficulty = window.app.userLevel;
    const numberOfCards = window.app.levels[window.app.userLevel];
    let cardValues2 = shuffleCards(cardValues);

    cardValues2 = cardValues2.slice(0, numberOfCards);
    cardValues2.push(...cardValues2);
    cardValues2 = shuffleCards(cardValues2);

    const cardsWrapper = document.querySelector(".cards__wrapper");

    cardValues2.forEach((card) => {
        cardsWrapper.appendChild(templateEngine(card));
    });
}

function shuffleCards(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * (i + 1));
        [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
    return array;
}

function gameScreenTemplate() {
    return {
        tag: "div",
        cls: "game__screen",
        content: [
            {
                tag: "div",
                cls: "game__screen-header",
                content: [
                    {
                        tag: "div",
                        cls: "game__screen-timer",
                        content: [
                            {
                                tag: "div",
                                cls: "timer__titles",
                                content: [
                                    {
                                        tag: "div",
                                        cls: "timer__title",
                                        text: "min",
                                    },
                                    {
                                        tag: "div",
                                        cls: "timer__title",
                                        text: "sec",
                                    },
                                ],
                            },
                            {
                                tag: "div",
                                cls: "timer__degits",
                                // text: `22:22`,
                            },
                        ],
                    },
                ],
            },
            {
                tag: "section",
                cls: "game__screen-cards",
                content: [
                    {
                        tag: "div",
                        cls: "cards__wrapper",
                    }
                ]
            },
        ],
    };
}

function playNewGameTemplate() {
    return {
        tag: "button",
        cls: ["game__button", "button"],
        text: "Начать заново",
    };
}

function winWindowTemplate() {
    return {
        tag: "div",
        cls: ["window__wrapper", "window__wrapper_win"],
        content: [
            {
                tag: "img",
                cls: "window__title",
                attrs: {
                    alt: "win",
                    width: "90",
                    src: "./img/icons/win.png",
                },
            },
            {
                tag: "h2",
                cls: "window__title",
                text: "Вы выиграли!",
            },
            {
                tag: "p",
                cls: "window__subtitle",
                text: "Затраченное время:",
            },
            {
                tag: "p",
                cls: "window__time",
                text: ``,
            },
            {
                tag: "button",
                cls: ["window__button", "button"],
                text: "Играть снова",
            },
        ],
    };
}

function loseWindowTemplate() {
    return {
        tag: "div",
        cls: ["window__wrapper", "window__wrapper_lose"],
        content: [
            {
                tag: "img",
                cls: "window__title",
                attrs: {
                    alt: "win",
                    width: "90",
                    src: "./img/icons/lose.png",
                },
            },
            {
                tag: "h2",
                cls: "window__title",
                text: "Вы проиграли!",
            },
            {
                tag: "p",
                cls: "window__subtitle",
                text: "Затраченное время:",
            },
            {
                tag: "p",
                cls: "window__time",
                text: ``,
            },
            {
                tag: "button",
                cls: ["window__button", "button"],
                text: "Играть снова",
            },
        ],
    };
}
