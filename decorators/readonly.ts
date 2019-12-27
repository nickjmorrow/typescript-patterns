function getDecorator() {
	return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
		console.log(target);
		console.log(propertyKey);
		console.log(descriptor);
		console.log('2');
	};
}

export function readonly(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
	descriptor.writable = false;
	return descriptor;
}
