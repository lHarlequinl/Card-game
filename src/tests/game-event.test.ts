import { shuffleCards } from '../js/game-event';
import { cardType } from '../js/cards';

const { it, expect, describe } = require('@jest/globals');

describe('shuffleCards()', () => {
	it('should return empty array', () => {
		const array: cardType[] = [];
		const result = shuffleCards(array);
		expect(result).toHaveLength(0);
	});
});
