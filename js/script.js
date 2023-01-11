



function renderStartPage() {
	const page = document.querySelector('.page')

	page.appendChild(templateEngine(startPageTemplate()));
};

document.addEventListener('DOMContentLoaded', () => {
	renderStartPage()
})


function startPageTemplate() {
	return {
		tag: 'div',
		cls: 'level__wrapper',
		content: [
			{
				tag: 'h2',
				cls: 'level__title',
				text: 'Выбери сложность',
			},
			{
				tag: 'div',
				cls: 'level__number-wrapper',
				content: [
					{
						tag: 'p',
						cls: 'level__number-item',
						text: '1'
					},
					{
						tag: 'p',
						cls: 'level__number-item',
						text: '2'
					},
					{
						tag: 'p',
						cls: 'level__number-item',
						text: '3'
					},
				]
			},
			{
				tag: 'button',
				cls: ['level__button', 'button'],
				text: 'Старт'
			}
		]
	}
};

// function gamePageTemplate() {
// 	return {
// 		tag: 'div',
// 		cls: 'game__wrapper',
// 		content: [
// 			{
// 				tag: 'div',
// 				cls: 'game__header',
// 				content: [
// 					{
// 						tag: 'p',
// 						cls: 'game__timer',
// 						text: ``,
// 					},
// 					{
// 						tag: 'button',
// 						cls: ['game__button', 'button'],
// 						text: 'Начать заново'
// 					}
// 				]
// 			},
// 			{
// 				tag: 'div',
// 				cls: 'game__bottom',
// 				content: [
// 					{
// 						tag: 'img',
// 						cls: 'game__card',
// 						attrs: {
// 							alt: 'card',
// 							width: '83',
// 							src: './img/cards/shirt.svg',
// 						},
// 					},
// 				]
// 			}
// 		]
// 	}
// };



// function winWindowTemplate() {
// 	return {
// 		tag: 'div',
// 		cls: ['window__wrapper', 'window__wrapper_win'],
// 		content: [
// 			{
// 				tag: 'img',
// 				cls: 'window__title',
// 				attrs: {
// 					alt: 'win',
// 					width: '90',
// 					src: './img/icons/win.png',
// 				},
// 			},
// 			{
// 				tag: 'h2',
// 				cls: 'window__title',
// 				text: 'Вы выиграли!',
// 			},
// 			{
// 				tag: 'p',
// 				cls: 'window__subtitle',
// 				text: 'Затраченное время:',
// 			},
// 			{
// 				tag: 'p',
// 				cls: 'window__time',
// 				text: ``,
// 			},
// 			{
// 				tag: 'button',
// 				cls: ['window__button', 'button'],
// 				text: 'Играть снова'
// 			}
// 		]
// 	}
// };

// function loseWindowTemplate() {
// 	return {
// 		tag: 'div',
// 		cls: ['window__wrapper', 'window__wrapper_lose'],
// 		content: [
// 			{
// 				tag: 'img',
// 				cls: 'window__title',
// 				attrs: {
// 					alt: 'win',
// 					width: '90',
// 					src: './img/icons/lose.png',
// 				},
// 			},
// 			{
// 				tag: 'h2',
// 				cls: 'window__title',
// 				text: 'Вы проиграли!',
// 			},
// 			{
// 				tag: 'p',
// 				cls: 'window__subtitle',
// 				text: 'Затраченное время:',
// 			},
// 			{
// 				tag: 'p',
// 				cls: 'window__time',
// 				text: ``,
// 			},
// 			{
// 				tag: 'button',
// 				cls: ['window__button', 'button'],
// 				text: 'Играть снова'
// 			}
// 		]
// 	}
// };