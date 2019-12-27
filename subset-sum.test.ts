import { subsetSum } from './subset-sum';

describe('subset sum', () => {
	it('base case', () => {
		const targetSum = 11;
		const numbers = [2, 3, 7, 8, 10];
		const actualSubsets = subsetSum(numbers, targetSum);
		const expectedSubsets = [3, 8];
		expect(actualSubsets).toEqual(expectedSubsets);
	});
});
