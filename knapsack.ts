interface Item {
	weight: number;
	value: number;
}

export const knapsack = (items: { weight: number; value: number }[], maxWeight: number): Item[] => {
	// const dp = Array(maxWeight + 1).fill(Array(items.length).fill(0));
	const dp = new Array(items.length).fill(new Array(maxWeight + 1).fill(0).map(x => x)).map(x => [...x]);

	items.sort((a, b) => (a.weight > b.weight ? 1 : -1));

	for (let currentItemIndex = 0; currentItemIndex < dp.length; currentItemIndex++) {
		for (let currentMaxWeight = 0; currentMaxWeight < dp[0].length; currentMaxWeight++) {
			const currentItem = items[currentItemIndex];
			if (currentItem.weight > currentMaxWeight) {
				dp[currentItemIndex][currentMaxWeight] =
					currentItemIndex === 0 ? 0 : dp[currentItemIndex - 1][currentMaxWeight];
			} else {
				const candidate =
					currentItem.value +
					(currentItemIndex === 0 ? 0 : dp[currentItemIndex - 1][currentMaxWeight - currentItem.weight]);
				const candidateWithoutItem = currentItemIndex === 0 ? 0 : dp[currentItemIndex - 1][currentMaxWeight];
				const finalCandidate = Math.max(candidate, candidateWithoutItem);
				dp[currentItemIndex][currentMaxWeight] = finalCandidate;
			}
		}
	}

	let remainingWeight = maxWeight;
	let startingItemIndex = items.length - 1;
	const optimalItems: Item[] = [];
	while (remainingWeight > 0) {
		const startingPoint = dp[startingItemIndex][remainingWeight];
		// if it equals the one above it
		if (startingPoint === dp[startingItemIndex - 1][remainingWeight]) {
			startingItemIndex -= 1;
		} else {
			optimalItems.push(items[startingItemIndex]);
			remainingWeight -= items[startingItemIndex].weight;
			startingItemIndex -= 1;
		}
	}
	return optimalItems.sort((a, b) => (a.weight > b.weight ? 1 : -1));
};
