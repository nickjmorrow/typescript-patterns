class ArgumentException extends Error {
	name = 'ArgumentError';

	constructor(message: string) {
		super(message);
	}
}

class InvalidOperationException extends Error {
	name = 'InvalidError';

	constructor(message: string) {
		super(message);
	}
}

class Throw {
	static If(condition: boolean, message: string) {
		if (condition) {
			throw new Error(message);
		}
	}

	static IfNull(value: any, message: string) {
		if (value === null) {
			throw new ArgumentException(message);
		}
	}

	static IfNullish(value: any, message: string) {
		if (value === null || value === undefined) {
			throw new ArgumentException(message);
		}
	}

	static InvalidIf(condition: boolean, message: string) {
		if (condition) {
			throw new InvalidOperationException(message);
		}
	}
}
