const { it, expect } = require('@jest/globals');
const renderCards = require('../js/game-event');

import { renderCards } from '../js/game-event';

it('Проверка на наличие переменной "уровня"', () => {
	expect(renderCards('1')).toBe('2');
});
