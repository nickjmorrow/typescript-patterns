import { Func, Predicate, Reducer, Transducer, makeFilterTransducer, makeMapTransducer } from './transducers';

describe('transducers', () => {
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

	const addScores: Reducer<TotalCountAccumulator, number> = (
		accumulator: TotalCountAccumulator,
		current: number,
	) => ({
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

	const foundFilterTransducer: Transducer<TotalCountAccumulator, Item, Item> = makeFilterTransducer<
		TotalCountAccumulator,
		Item
	>(isFound);

	/**
	 * I support functions that reduce over numbers, but I know SOME other functions
	 * need to reduce over Items. I'll take in a function that reduces over numbers
	 * and output a function that reduces over Items, because I know there's
	 * other functions that prefer to reduce over Items.
	 */
	const scoreMappingTransducer = makeMapTransducer<TotalCountAccumulator, Item, number>(getPopularity);

	const finalReducer = foundFilterTransducer(scoreMappingTransducer(addScores));

	const expectedResult = { total: 2249, count: 5 };
	it('using regular array methods produces expected result', () => {
		const actualResult = victorianSlang
			.filter(isFound)
			.map(getPopularity)
			.reduce(addScores, initialAccumulator);

		expect(actualResult).toEqual(expectedResult);
	});

	it('using transducers produces same result', () => {
		const actualResult = victorianSlang.reduce(finalReducer, initialAccumulator);

		expect(actualResult).toEqual(expectedResult);
	});
});
