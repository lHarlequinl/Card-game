function renderStartScreen() {
	window.app.mainNode.appendChild(templateEngine(titleTemplate()));

	const levelWrapper = document.querySelector('.level__wrapper');

	window.app.renderBlock('levelNumber', levelWrapper);
	window.app.renderBlock('startBtn', levelWrapper);
};

function renderLevelNumber(container) {
	container.appendChild(templateEngine(levelNumberTempalate()));

	document.querySelector('.level__number-wrapper')
		.addEventListener('click', (event) => {
			event.preventDefault();

			const { target } = event;
			const levelSelection = target.getAttribute('data-id');

			window.app.level.push(levelSelection);
		});
};

function renderStartButton(container) {
	container.appendChild(templateEngine(startButtonTempalate()));

	document.querySelector('.level__button')
		.addEventListener('click', (event) => {
			event.preventDefault();

			const levelNumber = window.app.level.slice(-1).join('');

			switch (levelNumber) {
				case '1':
					window.app.renderScreen('gameScreen');
					break;

				case '2':
					window.app.renderScreen('gameScreen');
					break;

				case '3':
					window.app.renderScreen('gameScreen');
					break;

				default:
					console.log('Выбирете сложность!');
					break;
			}
		})
};



function titleTemplate() {
	return {
		tag: 'div',
		cls: 'level__wrapper',
		content: [
			{
				tag: 'h2',
				cls: 'level__title',
				text: 'Выбери сложность',
			},
		]
	}
};

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
					'data-id': '1',
				}
			},
			{
				tag: 'button',
				cls: 'level__number-item',
				text: '2',
				attrs: {
					'data-id': '2',
				}
			},
			{
				tag: 'button',
				cls: 'level__number-item',
				text: '3',
				attrs: {
					'data-id': '3',
				}
			},
		]
	}
};

function startButtonTempalate() {
	return {
		tag: 'button',
		cls: ['level__button', 'button'],
		text: 'Старт'
	}
};