type Car = {
	motor: string;
	engine: string;
	wheels: string;
};

type CarPartExistence = Record<keyof Car, boolean>;
type CarPartExistence2 = { [k in keyof Car]: boolean };
