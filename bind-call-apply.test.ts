import { myOldFunc, myArrowFunc, myOldObj, myArrowObj } from './bind-call-apply';

describe('bind-call-apply', () => {
	it('base', () => {
		myOldFunc();
		myArrowFunc();

		myOldObj.myOldFunc();
		myArrowObj.myArrowFunc();
	});
});
