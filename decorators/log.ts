export function log(target: any, name: string, descriptor: PropertyDescriptor) {
	const original = descriptor.value;
	if (typeof original === 'function') {
		descriptor.value = function(...args: any[]) {
			console.log(`Arguments: ${args}`);
			try {
				const result = original.apply(this, args);
				console.log(`Result: ${result}`);
				return result;
			} catch (e) {
				console.log(`Error: ${e}`);
				throw e;
			}
		};
	}
	return descriptor;
}
