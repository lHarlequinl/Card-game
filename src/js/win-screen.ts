import { templateEngine } from '../lib/template-engine';
import { playerTime } from './game-event';

export function renderWinWindow() {
	const gameScreen = document.querySelector('.game') as HTMLElement;

	window.app.mainNode.appendChild(templateEngine(winWindowTemplate()));
	window.app.renderBlock('newGame', gameScreen);
}

function winWindowTemplate() {
	return {
		tag: 'div',
		cls: ['window__win', 'window__wrapper'],
		content: [
			{
				tag: 'img',
				cls: 'window__win-image',
				attrs: {
					alt: 'win',
					width: '96',
					src: './static/img/icons/win.png',
				},
			},
			{
				tag: 'h2',
				cls: ['window__win-title', 'window__title'],
				text: 'Вы выиграли!',
			},
			{
				tag: 'p',
				cls: ['window__win-subtitle', 'window-subtitle'],
				text: 'Затраченное время:',
			},
			{
				tag: 'p',
				cls: ['window__win-time', 'window-time'],
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