function renderGameScreen() {
	window.app.mainNode.appendChild(templateEngine(gameScreenTemplate()));

	const gameScreen = document.querySelector('.game__screen');
	const headerScreen = document.querySelector('.game__screen-header');

	headerScreen.appendChild(templateEngine(playNewGameTemplate()));

	window.app.renderBlock('newGame', headerScreen);
	window.app.renderBlock('cards', gameScreen);
}

function renderNewGame() {
	document.querySelector('.button').addEventListener('click', (event) => {
		event.preventDefault();

		window.app.cards = [];
		window.app.renderScreen('startScreen');
	});
}

function gameEvent() {
	setTimeout(() => {
		gameWatch();
		cardClickHandler();
	}, 5000);
}

function gameWatch() {
	const gameTimer = document.querySelector('.timer__degits');

	let milliseconds = 0;

	window.app.timers.push(
		setInterval(() => {
			milliseconds += 1000;

			let dateTimer = new Date(milliseconds);

			gameTimer.innerHTML =
				('0' + dateTimer.getUTCMinutes()).slice(-2) +
				':' +
				('0' + dateTimer.getUTCSeconds()).slice(-2);
		}, 1000)
	);
}

let clickCount = 0;
const compare = [];

function cardClickHandler() {
	const cardsShirt = document.querySelectorAll('.card__item-back');

	cardsShirt.forEach((card) => {
		card.classList.remove('card__item-flip');

		card.addEventListener('click', (event) => {
			event.preventDefault();
			const { target } = event;

			card.classList.add('card__item-flip');

			const cardSuit = target.getAttribute('data-id');

			window.app.cards.push(target.dataset.id);
			compare.push(target.dataset.id);

			clickCount++;

			checkResult();
		});
	});
}

function checkResult() {
	const [firstCard, secondCard] = compare;
	if (clickCount === 2 && firstCard !== secondCard) {
		window.app.renderScreen('loseWindow');

		compare.length = 0;
		clickCount = 0;
	}

	if (
		window.app.cards.length ===
		window.app.levels[window.app.userLevel] * 2
	) {
		window.app.renderScreen('winWindow');

		compare.length = 0;
		clickCount = 0;
	}
}

function renderLoseWindow() {
	window.app.mainNode.appendChild(templateEngine(loseWindowTemplate()));
	window.app.renderBlock('newGame');
}

function renderWinWindow() {
	window.app.mainNode.appendChild(templateEngine(winWindowTemplate()));
	window.app.renderBlock('newGame');
}

function renderCards() {
	gameEvent();

	let cardValues = cards;
	const difficulty = window.app.userLevel;
	const numberOfCards = window.app.levels[window.app.userLevel];
	let cardValues2 = shuffleCards(cardValues);

	cardValues2 = cardValues2.slice(0, numberOfCards);
	cardValues2.push(...cardValues2);
	cardValues2 = shuffleCards(cardValues2);

	const cardsWrapper = document.querySelector('.game__screen-cards');

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
		tag: 'div',
		cls: 'game__screen',
		content: [
			{
				tag: 'div',
				cls: 'game__screen-header',
				content: [
					{
						tag: 'div',
						cls: 'game__screen-timer',
						content: [
							{
								tag: 'div',
								cls: 'timer__titles',
								content: [
									{
										tag: 'div',
										cls: 'timer__title',
										text: 'min',
									},
									{
										tag: 'div',
										cls: 'timer__title',
										text: 'sec',
									},
								],
							},
							{
								tag: 'div',
								cls: 'timer__degits',
								text: `00:00`,
							},
						],
					},
				],
			},
			{
				tag: 'section',
				cls: 'game__screen-cards',
			},
		],
	};
}

function playNewGameTemplate() {
	return {
		tag: 'button',
		cls: ['game__button', 'button'],
		text: 'Начать заново',
	};
}

function winWindowTemplate() {
	return {
		tag: 'div',
		cls: ['window__win', 'window__wrapper'],
		content: [
			{
				tag: 'img',
				cls: 'window__win-image',
				attrs: {
					alt: 'win',
					width: '96',
					src: './img/icons/win.png',
				},
			},
			{
				tag: 'h2',
				cls: ['window__win-title', 'window__title'],
				text: 'Вы выиграли!',
			},
			{
				tag: 'p',
				cls: ['window__win-subtitle', 'window-subtitle'],
				text: 'Затраченное время:',
			},
			{
				tag: 'p',
				cls: ['window__win-time', 'window-time'],
				text: `${window.app.timers}`,
			},
			{
				tag: 'button',
				cls: ['window__button', 'button'],
				text: 'Играть снова',
			},
		],
	};
}

function loseWindowTemplate() {
	return {
		tag: 'div',
		cls: ['window__lose', 'window__wrapper'],
		content: [
			{
				tag: 'img',
				cls: 'window__lose-image',
				attrs: {
					alt: 'win',
					width: '90',
					src: './img/icons/lose.png',
				},
			},
			{
				tag: 'h2',
				cls: ['window__lose-title', 'window__title'],
				text: 'Вы проиграли!',
			},
			{
				tag: 'p',
				cls: ['window__lose-subtitle', 'window-subtitle'],
				text: 'Затраченное время:',
			},
			{
				tag: 'p',
				cls: ['window__lose-time', 'window-time'],
				text: `${window.app.timers}`,
			},
			{
				tag: 'button',
				cls: ['window__button', 'button'],
				text: 'Играть снова',
			},
		],
	};
}
