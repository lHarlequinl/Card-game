import { templateEngine } from '../lib/template-engine';
import { playerTime } from './game-event';

export function renderLoseWindow() {
	const gameScreen = document.querySelector('.game') as HTMLElement;

	window.app.mainNode.appendChild(templateEngine(loseWindowTemplate()));
	window.app.renderBlock('newGame', gameScreen);
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
