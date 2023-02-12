import { shuffleCards } from '../js/game-event';
import { cardType, cards } from '../js/cards';

const { it, expect } = require('@jest/globals');

it('should return an array with maps', () => {
	const array: cardType[] = cards;
	const result = shuffleCards(array);
	expect(result).toHaveLength(cards.length);
});
