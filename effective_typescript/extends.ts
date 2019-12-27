interface ExtendsPerson {
	firstName: string;
	lastName: string;
}

type DancingDuo<T extends ExtendsPerson> = [T, T];

// const myVar1: DancingDuo<Person> = [{ firstName: '', lastName: '' }];
const myVar1: DancingDuo<ExtendsPerson> = [
	{ firstName: '', lastName: '' },
	{ firstName: '', lastName: '' },
];
