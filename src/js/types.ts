export type Game = {
	blocks: BlocksObjType;
	screens: ScreensObjType;
	renderScreen: (screenName: ScreenName) => void;
	renderBlock: (blockName: BlockName, container: HTMLElement) => void;
	mainNode: HTMLElement;
	userLevel: string;
	timers: string[];
	cards: string[];
	clearTimers: () => void;
};

export type ScreenName = 'startScreen' | 'gameScreen' | 'loseWindow' | 'winWindow' | string;

export type BlockName = 'startBtn' | 'levelNumber' | 'newGame' | 'cards' | 'clickHandler' | string;

type ScreensObjType = Record<string, () => void>;
type BlocksObjType = Record<string, (container: HTMLElement) => void>;
