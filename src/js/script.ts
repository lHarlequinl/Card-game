import {
	renderStartScreen,
	renderStartButton,
	renderLevelNumber,
} from './start-screen';

import {
	renderGameScreen,
	renderLoseWindow,
	renderWinWindow,
	renderNewGame,
	renderCards,
	cardClickHandler,
	clearTimers,
} from './game-event';

import { Game } from './types';

declare global {
	interface Window {
		app: Game;
	}
}

window.app = {
	blocks: {},
	screens: {},
	timers: [],
	clearTimers: clearTimers,

	renderScreen: (screenName) => {
		if (!screens[screenName]) console.log('Такого экрана нет!');

		clearTimers();

		window.app.mainNode.replaceChildren();

		screens[screenName]();
	},

	renderBlock: (blockName, container) => {
		if (!blocks[blockName]) console.log('Такого блока нет!');

		blocks[blockName](container);
	},
	mainNode: document.querySelector('.game'),
	userLevel: '0',
	levels: [3, 6, 12],
	cards: [],
} as Game;

const blocks: any = window.app.blocks;
const screens: any = window.app.screens;

// START SCREEN
screens['startScreen'] = renderStartScreen;

blocks['startBtn'] = renderStartButton;
blocks['levelNumber'] = renderLevelNumber;

// GAME
screens['gameScreen'] = renderGameScreen;
screens['loseWindow'] = renderLoseWindow;
screens['winWindow'] = renderWinWindow;

blocks['newGame'] = renderNewGame;
blocks['cards'] = renderCards;
blocks['clickHandler'] = cardClickHandler;


export function getStartScreen() {
	window.app.renderScreen('startScreen');
}
