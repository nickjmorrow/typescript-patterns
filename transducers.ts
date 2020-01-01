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

const isFound: Predicate<Item> = (item: Item) => item.found;

const getPopularity: Func<Item, number> = (item: Item) => item.popularity;

/**
 * Transforms a T into a U.
 */
type Func<T, U> = (value: T) => U;

type Predicate<T> = Func<T, boolean>;

type Reducer<Accumulator, CurrentItem> = (accumulator: Accumulator, current: CurrentItem) => Accumulator;

type FilterReducer<T> = Reducer<T[], T>;

type MapReducer<T, U> = Reducer<U[], T>;

const initialInfo = { totalPopularity: 0, itemCount: 0 };

/**
 *
 * @param accumulator Number that gets added onto at each iteration.
 * @param current Curernnt number.
 */
const addScores: Reducer<TotalCountAccumulator, number> = (accumulator: TotalCountAccumulator, current: number) => ({
	total: accumulator.total + current,
	count: accumulator.count + 1,
});

interface TotalCountAccumulator {
	total: number;
	count: number;
}

const initialAccumulator: TotalCountAccumulator = {
	total: 0,
	count: 0,
};

const popularityInfo = victorianSlang
	.filter(isFound)
	.map(getPopularity)
	.reduce(addScores, initialAccumulator);

const makeFilterReducer = <T>(predicate: Predicate<T>): FilterReducer<T> => (accumulator: T[], item: T): T[] =>
	predicate(item) ? accumulator.concat([item]) : accumulator;

const makeMapReducer = <T, U>(func: (val: T) => U): MapReducer<T, U> => (accumulator: U[], item: T): U[] =>
	accumulator.concat([func(item)]);

const filterFoundReducer: Reducer<Item[], Item> = makeFilterReducer(isFound);

const mapPopularityReducer: Reducer<number[], Item> = makeMapReducer(getPopularity);

type Transducer<Accumulator, TransformedItem, OriginalItem> = (
	nextReducer: Reducer<Accumulator, OriginalItem>,
) => Reducer<Accumulator, TransformedItem>;

const makeFilterTransducer = <Accumulator, SomeItem>(
	predicate: Predicate<SomeItem>,
): Transducer<Accumulator, SomeItem, SomeItem> => (
	nextReducer: Reducer<Accumulator, SomeItem>,
): Reducer<Accumulator, SomeItem> => (accumulator: Accumulator, item: SomeItem): Accumulator =>
	predicate(item) ? nextReducer(accumulator, item) : accumulator;

const makeMapTransducer = <Accumulator, OriginalItem, TransformedItem>(
	func: Func<OriginalItem, TransformedItem>,
): Transducer<Accumulator, OriginalItem, TransformedItem> => (
	nextReducer: Reducer<Accumulator, TransformedItem>,
): Reducer<Accumulator, OriginalItem> => (accumulator: Accumulator, item: OriginalItem): Accumulator =>
	nextReducer(accumulator, func(item));

const foundFilterTransducer: Transducer<TotalCountAccumulator, Item, Item> = makeFilterTransducer<
	TotalCountAccumulator,
	Item
>(isFound);

const scoreMappingTransducer = makeMapTransducer<TotalCountAccumulator, Item, number>(getPopularity);

const finalReducer = foundFilterTransducer(scoreMappingTransducer(addScores));

console.log(victorianSlang.reduce(finalReducer, initialAccumulator));
