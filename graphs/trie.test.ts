import { Trie } from './trie';

describe('trie tests', (): void => {
	const trie = new Trie(['hell', 'hex', 'he', 'bat', 'baseball', 'hello', 'bastion', 'battery']);
	it('base case', (): void => {
		const expectedEligibleWords = ['he', 'hex', 'hell', 'hello'];
		const actualEligibleWords = trie.getEligibleWords('he');
		expect(actualEligibleWords).toEqual(expectedEligibleWords);
	});
	it('should return no eligible words when expected', (): void => {
		const expectedEligibleWords: string[] = [];
		const actualEligibleWords = trie.getEligibleWords('xylophone');
		expect(actualEligibleWords).toEqual(expectedEligibleWords);
	});
	it('should return actual word and additional words when there is complete match', (): void => {
		const expectedEligibleWords = ['bat', 'battery'];
		const actualEligibleWords = trie.getEligibleWords('bat');
		expect(actualEligibleWords).toEqual(expectedEligibleWords);
	});
	it('should ignore casing', (): void => {
		const expectedEligibleWords = ['Bat', 'Battery'];
		const actualEligibleWords = trie.getEligibleWords('Bat');
		expect(actualEligibleWords).toEqual(expectedEligibleWords);
	});
});
