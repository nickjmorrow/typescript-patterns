const makeState = <T extends string | number>(initialState: T): ((newState: T) => void)[] => {
	let s = initialState;

	const setState = (newState: T): void => {
		s = newState;
	};

	const getState = (): T => s;

	return [getState, setState];
};

const [getStringState, setStringState] = makeState('Hello!');
const [getNumberState, setNumberState] = makeState(5);
// const [getBooleanState, setBooleanState] = makeState(true);
