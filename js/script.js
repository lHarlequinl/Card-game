window.app = {
	blocks: {},
	screens: {},
	timers: [],

	renderScreen: (screenName) => {
		if (!screens[screenName])
			console.log('Такого экрана нет!');

		window.app.mainNode.replaceChildren();

		screens[screenName]();
	},
	renderBlock: (blockName, container) => {
		if (!blocks[blockName])
			console.log('Такого блока нет!');

		blocks[blockName](container);
	},
	mainNode: document.querySelector('.game'),
	level: [],
};

const blocks = window.app.blocks;
const screens = window.app.screens;


// START SCREEN
screens['startScreen'] = renderStartScreen;
blocks['startBtn'] = renderStartButton;
blocks['levelNumber'] = renderLevelNumber;


// GAME
screens['gameScreenLow'] = renderGameScreenLow;
blocks['newGame'] = renderNewGame;






function initApp() {
	window.app.renderScreen('startScreen');
};

initApp();