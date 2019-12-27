import { knapsack } from './knapsack';

describe('knapsack', () => {
	it('base case', () => {
		const items = [
			{ weight: 3, value: 4 },
			{ weight: 1, value: 1 },
			{ weight: 4, value: 5 },
			{ weight: 5, value: 7 },
		];
		const maxWeight = 7;
		const solution = knapsack(items, maxWeight);
		expect(solution).toEqual([{ weight: 3, value: 4 }, { weight: 4, value: 5 }]);
	});
});
