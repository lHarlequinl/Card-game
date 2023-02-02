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
		if (!window.app.screens[screenName]) {
			console.log('Такого экрана нет!');
		} else {
			clearTimers();

			window.app.mainNode.replaceChildren();

			window.app.screens[screenName]();
		}
	},

	renderBlock: (blockName, container) => {
		if (!window.app.blocks[blockName]) {
			console.log('Такого блока нет!');
		} else {
			window.app.blocks[blockName](container);
		}
	},
	mainNode: document.querySelector('.game') as HTMLElement,
	userLevel: '0',
	levels: [3, 6, 12],
	cards: [],
};

// const blocks = window.app.blocks;
// const screens = window.app.screens;

// START SCREEN
// screens['startScreen'] = renderStartScreen;

// blocks['startBtn'] = renderStartButton;
// blocks['levelNumber'] = renderLevelNumber;

// // GAME
// screens['gameScreen'] = renderGameScreen;
// screens['loseWindow'] = renderLoseWindow;
// screens['winWindow'] = renderWinWindow;

// blocks['newGame'] = renderNewGame;
// blocks['cards'] = renderCards;
// blocks['clickHandler'] = cardClickHandler;

// START SCREEN
window.app.screens['startScreen'], renderStartScreen;

window.app.blocks['startBtn'], renderStartButton;
window.app.blocks['levelNumber'], renderLevelNumber;

// GAME
window.app.screens['gameScreen'], renderGameScreen;
window.app.screens['loseWindow'], renderLoseWindow;
window.app.screens['winWindow'], renderWinWindow;

window.app.blocks['newGame'], renderNewGame;
window.app.blocks['cards'], renderCards;
window.app.blocks['clickHandler'], cardClickHandler;

export function getStartScreen() {
	window.app.renderScreen('startScreen');
}