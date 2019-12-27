export const regularNumbers = (num: number) => ({
	num,
	func: () => regularNumbers(num + 1),
});
