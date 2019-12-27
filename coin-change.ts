const helper = (coins: number[], remainder: number, memo: any): number => {
	if (remainder === 0) {
		return 0;
	}
	if (remainder < 0) {
		return Number.POSITIVE_INFINITY;
	}
	if (memo[remainder]) {
		return memo[remainder];
	}

	let intermediateResult = Number.POSITIVE_INFINITY;
	coins.forEach(coin => {
		const result = helper(coins, remainder - coin, memo) + 1;
		intermediateResult = Math.min(result, intermediateResult);
	});

	const finalResult = intermediateResult === Number.POSITIVE_INFINITY ? -1 : intermediateResult;
	memo[remainder] = finalResult;
	return finalResult;
};

var coinChange = function(coins: number[], amount: number) {
	const memo = {};
	const result = helper(coins, amount, memo);
	return result;
};

const input = [
	{
		coins: [1, 2, 5],
		target: 14,
	},
];

const output = coinChange(input[0].coins, input[0].target);

console.log(output);
