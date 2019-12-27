import { flickerWord } from './flicker-word';

describe('flicker word', () => {
	it('works lol', () => {
		const word = ['beautiful', 'performant', 'secure', 'beautiful'];
		const flickerWords = flickerWord(word, 9);

		expect(flickerWords.length > 1).toBe(true);
	});
});
