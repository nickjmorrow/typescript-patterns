export function viewDecoratorArguments(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
	console.log(target);
	console.log(propertyKey);
	console.log(descriptor);
	return descriptor;
}

class MyClass {
	constructor(private name: string) {}

	@viewDecoratorArguments
	sayName(greeting: string) {
		console.log(`${greeting} ${this.name}`);
	}
}

// @viewDecoratorArguments()
function multiply(x: number, y: number) {
	return x * y;
}
