import { templateEngine } from '../lib/template-engine';
// import { BlocksObjType } from './types';

export function renderStartScreen() {
	window.app.mainNode.appendChild(templateEngine(titleTemplate()));

	const levelWrapper = document.querySelector(
		'.level__wrapper'
	) as HTMLElement;

	window.app.renderBlock('levelNumber', levelWrapper);
	window.app.renderBlock('startBtn', levelWrapper);
}

export function renderLevelNumber(container: HTMLElement) {
	container.appendChild(templateEngine(levelNumberTempalate()));

	const levelNumber = document.querySelector(
		'.level__number-wrapper'
	) as HTMLElement;

	levelNumber.addEventListener('click', (event) => {
		event.preventDefault();

		const target = event.target as HTMLElement;

		if (target) {
			const levelSelection = target.getAttribute('data-id');

			window.app.userLevel = levelSelection as any as string;
		}
	});
}

export function renderStartButton(container: HTMLElement) {
	container.appendChild(templateEngine(startButtonTempalate()));

	const startGameButton = document.querySelector(
		'.level__button'
	) as HTMLElement;

	startGameButton.addEventListener('click', (event) => {
		event.preventDefault();

		const levelNumber = window.app.userLevel;

		if (levelNumber) {
			window.app.renderScreen('gameScreen');
		} else {
			console.log('Выбирете сложность!');
		}
	});
}

function titleTemplate() {
	return {
		tag: 'div',
		cls: ['level__wrapper', 'window__wrapper'],
		content: [
			{
				tag: 'h2',
				cls: ['level__title', 'window__title'],
				text: 'Выбери сложность',
			},
		],
	};
}

function levelNumberTempalate() {
	return {
		tag: 'div',
		cls: 'level__number-wrapper',
		content: [
			{
				tag: 'button',
				cls: 'level__number-item',
				text: '1',
				attrs: {
					'data-id': '0',
				},
			},
			{
				tag: 'button',
				cls: 'level__number-item',
				text: '2',
				attrs: {
					'data-id': '1',
				},
			},
			{
				tag: 'button',
				cls: 'level__number-item',
				text: '3',
				attrs: {
					'data-id': '2',
				},
			},
		],
	};
}

function startButtonTempalate() {
	return {
		tag: 'button',
		cls: ['level__button', 'button'],
		text: 'Старт',
	};
}
