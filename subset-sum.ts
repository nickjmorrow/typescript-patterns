export const subsetSum = (numbers: number[], targetSum: number): number[] => {
	const dp = Array(numbers.length)
		.fill(Array(targetSum + 1).fill(0))
		.map(x => [...x]);
	const output: number[] = [];

	for (let numberIndex = 0; numberIndex < numbers.length; numberIndex++) {
		for (let currentTargetSum = 0; currentTargetSum <= targetSum; currentTargetSum++) {
			let result = 0;
			const currentNumber = numbers[numberIndex];
			if (currentTargetSum === 0 || currentTargetSum === currentNumber) {
				result = 1;
			}

			if (currentTargetSum < currentNumber) {
				result = numberIndex === 0 ? 0 : dp[numberIndex - 1][currentTargetSum];
			}

			if (currentTargetSum > currentNumber) {
				const remainingSum = currentTargetSum - currentNumber;
				const candidate = numberIndex === 0 ? 0 : dp[numberIndex - 1][remainingSum];
				const otherCandidate = numberIndex === 0 ? 0 : dp[numberIndex - 1][currentTargetSum];
				result = Math.max(candidate, otherCandidate);
			}

			dp[numberIndex][currentTargetSum] = result;
		}
	}

	let currentTargetSum = targetSum;
	let numberIndex = numbers.length - 1;
	while (currentTargetSum > 0) {
		const currentResult = dp[numberIndex][currentTargetSum];
		const previousCurrentResult = dp[numberIndex - 1][currentTargetSum];
		if (currentResult === previousCurrentResult) {
			numberIndex -= 1;
		} else {
			output.push(numbers[numberIndex]);
			currentTargetSum -= numbers[numberIndex];
			numberIndex -= 1;
		}
	}

	return output.sort();
};
