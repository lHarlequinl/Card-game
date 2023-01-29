export type Game = {
	blocks: BlocksObjType | {};
	screens: {};
	renderScreen: (
		screenName: ScreenName,		
		) => void; // void менять по ситуации
	renderBlock: (
		blockName: BlockName, 
		container: HTMLElement,
		) => void; // void менять по ситуации
	mainNode: HTMLElement;
	userLevel: any;
	timers: string[];
	levels: number[];
	cards: string[];
};

type ScreenName = 'startScreen' | 'gameScreen' | 'loseWindow' | 'winWindow';

export type BlockName =
	| 'startBtn'
	| 'levelNumber'
	| 'newGame'
	| 'cards'
	| 'clickHandler';

export type BlocksObjType = {
	startBtn: () => HTMLElement;
	levelNumber: () => HTMLElement;
	newGame: () => HTMLElement;
	cards: () => HTMLElement;
	clickHandler: () => HTMLElement;
};
