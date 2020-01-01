import { readonly } from './readonly';
import { log } from './log';
import { logWithName } from './logWithname';

class Example {
	a() {
		return;
	}

	@readonly
	b() {
		return;
	}

	@log
	c(x: number, b: number) {
		return x + b;
	}

	@logWithName('someName')
	d(x: number, y: number) {
		return x * y;
	}
}

const e = new Example();

e.a = () => {
	return;
};
// e.b = () => {};
e.c(55, 44);

e.d(7, 6);
