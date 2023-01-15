function renderGameScreen() {
	window.app.mainNode.appendChild(templateEngine(gameScreenTemplate()));

	const screenHeader = document.querySelector('.game__screen-header');

	screenHeader.appendChild(templateEngine(playNewGameTemplate()));

	window.app.renderBlock('newGame', screenHeader);
};



function renderNewGame() {
	document.querySelector('.game__button')
		.addEventListener('click', (event) => {
			event.preventDefault();

			window.app.level = [];
			window.app.renderScreen('startScreen');
		})
};



function gameScreenTemplate() {
	return {
		tag: 'div',
		cls: 'game__screen',
		content: [
			{
				tag: 'div',
				cls: 'game__screen-header',
				content: [
					{
						tag: 'div',
						cls: 'game__screen-timer',
						content: [
							{
								tag: 'div',
								cls: 'timer__titles',
								content: [
									{
										tag: 'div',
										cls: 'timer__title',
										text: 'min'
									},
									{
										tag: 'div',
										cls: 'timer__title',
										text: 'sec'
									}
								]
							},
							{
								tag: 'div',
								cls: 'timer__degits',
								text: `22:22`
							}
						]
					},
				]
			},
			{
				tag: 'section',
				cls: ['game__screen-cards', 'game__screen-cards_low'],
				content: ``
			}
		]
	}
};

function playNewGameTemplate() {
	return {
		tag: 'button',
		cls: ['game__button', 'button'],
		text: 'Начать заново'
	}
};



function winWindowTemplate() {
	return {
		tag: 'div',
		cls: ['window__wrapper', 'window__wrapper_win'],
		content: [
			{
				tag: 'img',
				cls: 'window__title',
				attrs: {
					alt: 'win',
					width: '90',
					src: './img/icons/win.png',
				},
			},
			{
				tag: 'h2',
				cls: 'window__title',
				text: 'Вы выиграли!',
			},
			{
				tag: 'p',
				cls: 'window__subtitle',
				text: 'Затраченное время:',
			},
			{
				tag: 'p',
				cls: 'window__time',
				text: ``,
			},
			{
				tag: 'button',
				cls: ['window__button', 'button'],
				text: 'Играть снова'
			}
		]
	}
};

function loseWindowTemplate() {
	return {
		tag: 'div',
		cls: ['window__wrapper', 'window__wrapper_lose'],
		content: [
			{
				tag: 'img',
				cls: 'window__title',
				attrs: {
					alt: 'win',
					width: '90',
					src: './img/icons/lose.png',
				},
			},
			{
				tag: 'h2',
				cls: 'window__title',
				text: 'Вы проиграли!',
			},
			{
				tag: 'p',
				cls: 'window__subtitle',
				text: 'Затраченное время:',
			},
			{
				tag: 'p',
				cls: 'window__time',
				text: ``,
			},
			{
				tag: 'button',
				cls: ['window__button', 'button'],
				text: 'Играть снова'
			}
		]
	}
};