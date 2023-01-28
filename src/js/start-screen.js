import { templateEngine } from '../lib/template-engine';

export function renderStartScreen() {
	window.app.mainNode.appendChild(templateEngine(titleTemplate()));

	const levelWrapper = document.querySelector('.level__wrapper');

	window.app.renderBlock('levelNumber', levelWrapper);
	window.app.renderBlock('startBtn', levelWrapper);
}

export function renderLevelNumber(container) {
	container.appendChild(templateEngine(levelNumberTempalate()));

	document
		.querySelector('.level__number-wrapper')
		.addEventListener('click', (event) => {
			event.preventDefault();

			const { target } = event;
			const levelSelection = target.getAttribute('data-id');

			window.app.userLevel = levelSelection;
		});
}

export function renderStartButton(container) {
	container.appendChild(templateEngine(startButtonTempalate()));

	document
		.querySelector('.level__button')
		.addEventListener('click', (event) => {
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
