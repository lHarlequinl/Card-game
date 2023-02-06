import { cards, cardType } from './cards';
import { templateEngine } from '../lib/template-engine';

export function renderGameScreen() {
	window.app.mainNode.appendChild(templateEngine(gameScreenTemplate()));

	const gameScreen = document.querySelector('.game__screen') as HTMLElement;
	const headerScreen = document.querySelector(
		'.game__screen-header'
	) as HTMLElement;

	headerScreen.appendChild(templateEngine(playNewGameTemplate()));

	window.app.renderBlock('newGame', headerScreen);
	window.app.renderBlock('cards', gameScreen);
}

export function renderNewGame() {
	const newGameButton = document.querySelector('.button') as HTMLElement;

	newGameButton.addEventListener('click', (event) => {
		event.preventDefault();

		window.app.cards = [];
		window.app.renderScreen('startScreen');
	});
}

let stopTimer: ReturnType<typeof setInterval>;
let playerTime: string;
const PAIRS: number[] = [3, 6, 9];
let clickCount = 0;
let compare: string[] = [];
let moves = 0;
let cardValues2: cardType[];

function gameWatch() {
	const gameTimer = document.querySelector('.timer__degits') as HTMLElement;

	let milliseconds = 0;

	setTimeout(() => {
		stopTimer = setInterval(() => {
			milliseconds += 1000;

			let dateTimer = new Date(milliseconds);

			window.app.timers.push(
				(playerTime = gameTimer.innerHTML =
					('0' + dateTimer.getUTCMinutes()).slice(-2) +
					':' +
					('0' + dateTimer.getUTCSeconds()).slice(-2))
			);
		}, 1000);

		cardClickHandler();
	}, 5000);
}

export function clearTimers() {
	if (window.app.timers.length > 0) {
		clearInterval(stopTimer);

		window.app.timers.forEach((timer) => {
			window.app.timers = [];
		});
	}
}

export function renderCards() {
	gameWatch();

	let cardValues: cardType[] = cards;

	const numberOfCards = PAIRS[Number(window.app.userLevel) - 1];

	cardValues2 = shuffleCards(cardValues);
	cardValues2 = cardValues2.slice(0, numberOfCards);
	cardValues2.push(...cardValues2);
	cardValues2 = shuffleCards(cardValues2);

	const cardsWrapper = document.querySelector(
		'.game__screen-cards'
	) as HTMLElement;

	cardValues2.forEach((card) => {
		cardsWrapper.appendChild(templateEngine(card));
	});
}

export function cardClickHandler() {
	const cardsShirt = document.querySelectorAll('.card__item-back');

	cardsShirt.forEach((card) => {
		card.classList.remove('card__item-flip');

		card.addEventListener('click', (event) => {
			event.preventDefault();

			const { target } = event;

			if (target instanceof HTMLElement) {
				card.classList.add('card__item-flip');

				const cardName = target.getAttribute('data-id') as string;

				window.app.cards.push(cardName);
				compare.push(cardName);

				clickCount++;
				moves++;

				checkResult();
			}
		});
	});
}

function checkResult() {
	const [firstCard, secondCard] = compare;

	if (clickCount >= 2 && firstCard !== secondCard) {
		clearTimers();
		window.app.renderScreen('loseWindow');

		compare.length = 0;
		clickCount = 0;
		moves = 0;
	}

	if (clickCount === 2 && firstCard === secondCard) {
		compare.length = 0;
		clickCount = 0;
	}

	if (moves === cardValues2.length) {
		clearTimers();
		window.app.renderScreen('winWindow');

		compare.length = 0;
		clickCount = 0;
		moves = 0;
	}
}

export function renderLoseWindow() {
	const gameScreen = document.querySelector('.game') as HTMLElement;

	window.app.mainNode.appendChild(templateEngine(loseWindowTemplate()));
	window.app.renderBlock('newGame', gameScreen);
}

export function renderWinWindow() {
	const gameScreen = document.querySelector('.game') as HTMLElement;

	window.app.mainNode.appendChild(templateEngine(winWindowTemplate()));
	window.app.renderBlock('newGame', gameScreen);
}

function shuffleCards(array: cardType[]) {
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
					src: './static/img/icons/win.png',
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
				text: `${playerTime}`,
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
					src: './static/img/icons/lose.png',
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
				text: `${playerTime}`,
			},
			{
				tag: 'button',
				cls: ['window__button', 'button'],
				text: 'Играть снова',
			},
		],
	};
}
