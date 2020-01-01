import { injectable } from 'tsyringe';

@injectable()
export class ClassWithParameterlessConstructor {
	constructor() {
		return;
	}

	sayName() {
		console.log('I have not been given a name!');
	}
}
