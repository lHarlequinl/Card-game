import {
	renderStartScreen,
	renderStartButton,
	renderLevelNumber,
} from './start-screen';

import {
	renderGameScreen,
	renderNewGame,
	renderCards,
	cardClickHandler,
	clearTimers,
} from './game-event';

import { renderWinWindow } from './win-screen';
import { renderLoseWindow } from './lose-screen';

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
	cards: [],
};

// START SCREEN
window.app.screens['startScreen'] = renderStartScreen;

window.app.blocks['startBtn'] = renderStartButton;
window.app.blocks['levelNumber'] = renderLevelNumber;

// GAME
window.app.screens['gameScreen'] = renderGameScreen;

window.app.blocks['cards'] = renderCards;
window.app.blocks['clickHandler'] = cardClickHandler;
window.app.blocks['newGame'] = renderNewGame;

// FINAL SCREENS
window.app.screens['loseWindow'] = renderLoseWindow;
window.app.screens['winWindow'] = renderWinWindow;

export function getStartScreen() {
	window.app.renderScreen('startScreen');
}
