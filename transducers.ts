// https://jrsinclair.com/articles/2019/magical-mystical-js-transducers/

interface Item {
	term: string;
	found: boolean;
	popularity: number;
}

const victorianSlang = [
	{
		term: 'doing the bear',
		found: true,
		popularity: 108,
	},
	{
		term: 'bone shaker',
		found: true,
		popularity: 609,
	},
	{
		term: 'damfino',
		found: true,
		popularity: 232,
	},
	{
		term: 'donkey’s breakfast',
		found: true,
		popularity: 787,
	},
	{
		term: 'rational costume',
		found: true,
		popularity: 513,
	},
	{
		term: 'mind the grease',
		found: false,
		popularity: 154,
	},
];

// const filter = <T>(arr: T[], predicate: (value: T) => boolean) =>
// 	arr.reduce(
// 		(accumulator: T[], currentValue: T) => (predicate(currentValue) ? [currentValue, ...accumulator] : accumulator),
// 		[],
// 	);

// const map = <T, U>(arr: T[], func: (value: T) => U) =>
// 	arr.reduce((accumulator: U[], currentValue: T) => [...accumulator, func(currentValue)], []);

const isFound: Predicate<Item> = (item: Item) => item.found;

const getPopularity: Func<Item, number> = (item: Item) => item.popularity;

type Func<T, U> = (value: T) => U;

type Predicate<T> = Func<T, boolean>;

type Reducer<T, U> = (accumulator: T, current: U) => T;

type FilterReducer<T> = Reducer<T[], T>;

type MapReducer<T, U> = Reducer<U[], T>;

const addScores: Reducer<{ totalPopularity: number; itemCount: number }, number> = (
	accumulator: { totalPopularity: number; itemCount: number },
	current: number,
) => ({
	totalPopularity: accumulator.totalPopularity + current,
	itemCount: accumulator.itemCount + 1,
});

const initialInfo = { totalPopularity: 0, itemCount: 0 };

const popularityInfo = victorianSlang
	.filter(isFound)
	.map(getPopularity)
	.reduce(addScores, initialInfo);

const makeFilterReducer = <T>(predicate: Predicate<T>): FilterReducer<T> => (accumulator: T[], item: T): T[] =>
	predicate(item) ? accumulator.concat([item]) : accumulator;

const makeMapReducer = <T, U>(func: (val: T) => U): MapReducer<T, U> => (accumulator: U[], item: T): U[] =>
	accumulator.concat([func(item)]);

const filterFoundReducer = makeFilterReducer(isFound);

const mapPopularityReducer = makeMapReducer(getPopularity);

type Transducer<T, U, V> = (reducer: Reducer<T, U>) => Reducer<V, T>;

const makeFilterTransducer = <T, U>(predicate: Predicate<T>) => (nextReducer: Reducer<U, T>): Reducer<U, T> => (
	accumulator: U,
	item: T,
) => (predicate(item) ? nextReducer(accumulator, item) : accumulator);

const makeMapTransducer = <T, U, V>(func: Func<T, U>) => (nextReducer: Reducer<V, U>): Reducer<V, T> => (
	accumulator: V,
	item: T,
) => nextReducer(accumulator, func(item));

const foundFilterTransducer = makeFilterTransducer<Item, number>(isFound);

const scoreMappingTransducer = makeMapTransducer<Item, number, number>(getPopularity);

// const otherAddScores: Reducer<number, number> = (accumulator: number, current: number) => current + accumulator;

// const allInOneReducer = foundFilterTransducer(scoreMappingTransducer(otherAddScores));

// const output = victorianSlang.reduce(allInOneReducer, 0);

const rootReducer: Reducer<number, number> = (accumulator: number, current: number) => accumulator + current;

const finalReducer = foundFilterTransducer(scoreMappingTransducer(rootReducer));

console.log(victorianSlang.reduce(finalReducer, 0));
