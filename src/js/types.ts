export type Game = {
	blocks: BlocksObjType;
	screens: ScreensObjType;
	renderScreen: (screenName: string) => void;
	renderBlock: (blockName: string, container: HTMLElement) => void;
	mainNode: HTMLElement;
	userLevel: string;
	timers: string[];
	levels: number[];
	cards: Array<string | number>;
	clearTimers:() => void 
};

// export type ScreenName =
// 	| 'startScreen'
// 	| 'gameScreen'
// 	| 'loseWindow'
// 	| 'winWindow'
// 	| string;

// export type BlockName =
// 	| 'startBtn'
// 	| 'levelNumber'
// 	| 'newGame'
// 	| 'cards'
// 	| 'clickHandler'
// 	| string;

type ScreensObjType = Record<string, () => HTMLElement>;
type BlocksObjType = Record<string, (container: HTMLElement) => HTMLElement>;
