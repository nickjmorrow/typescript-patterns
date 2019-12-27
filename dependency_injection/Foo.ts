import { injectable } from 'tsyringe';

@injectable()
export class ClassWithParameterlessConstructor {
	constructor() {}

	sayName() {
		console.log('I have not been given a name!');
	}
}
