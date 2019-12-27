interface StateA {
	fire: string;
	water: string;
	earth: string;
	air: string;
}

type StateB = { [k in 'fire' | 'water']: StateA[k] };

// type MyPick<T, K> = { [k in K]: T[k] };
