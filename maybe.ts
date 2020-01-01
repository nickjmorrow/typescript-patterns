class Maybe<T> {
	private value: T | null;

	constructor(value: T | null) {
		this.value = value;
	}

	Value() {
		return this.Value;
	}

	HasValue() {
		return this.Value !== undefined;
	}
}

const maybe5 = new Maybe(5);

interface User {
	id: number;
	name: string;
}

const getUser = (): Maybe<User> => {
	const user = {
		id: 1,
		name: 'Mike',
	};

	return new Maybe(user);
};
