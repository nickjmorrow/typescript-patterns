interface MyInterface {
	readonly myProperty: string;
}

const sum = (input: readonly number[]): number => input.reduce((agg, cur): number => agg + cur, 0);

const readonlyArray: readonly number[] = [];

interface SomePerson {
	name: string;
	age: number;
}

type ReadonnlyPerson = Readonly<SomePerson>;
