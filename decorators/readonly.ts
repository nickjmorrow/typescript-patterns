export function readonly(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
	descriptor.writable = false;
	return descriptor;
}
