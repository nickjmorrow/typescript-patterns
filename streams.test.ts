import { regularNumbers } from './streams';

describe('streams', () => {
	it('base', () => {
		const { num: firstNum, func: firstFunc } = regularNumbers(0);
		const { num: secondNum, func: secondFunc } = firstFunc();
		const { num: thirdNum } = secondFunc();
		expect(firstNum).toEqual(0);
		expect(secondNum).toEqual(1);
		expect(thirdNum).toEqual(2);
	});
});
