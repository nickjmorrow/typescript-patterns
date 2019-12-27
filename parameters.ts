type Person = {
	age: number;
	name: string;
};

const myFunction = (age: number, name: string): Person => ({ age, name });

type myParameters = Parameters<typeof myFunction>;
