// https://jrsinclair.com/articles/2019/magical-mystical-js-transducers/

export type Func<T, U> = (value: T) => U;

export type Predicate<T> = Func<T, boolean>;

export type Reducer<Accumulator, CurrentItem> = (accumulator: Accumulator, current: CurrentItem) => Accumulator;

export type FilterReducer<T> = Reducer<T[], T>;

export type MapReducer<T, U> = Reducer<U[], T>;

export const makeFilterReducer = <T>(predicate: Predicate<T>): FilterReducer<T> => (accumulator: T[], item: T): T[] =>
	predicate(item) ? accumulator.concat([item]) : accumulator;

export const makeMapReducer = <T, U>(func: (val: T) => U): MapReducer<T, U> => (accumulator: U[], item: T): U[] =>
	accumulator.concat([func(item)]);

export type Transducer<Accumulator, TransformedItem, OriginalItem> = (
	nextReducer: Reducer<Accumulator, TransformedItem>,
) => Reducer<Accumulator, OriginalItem>;

export const makeFilterTransducer = <Accumulator, SomeItem>(
	predicate: Predicate<SomeItem>,
): Transducer<Accumulator, SomeItem, SomeItem> => (
	nextReducer: Reducer<Accumulator, SomeItem>,
): Reducer<Accumulator, SomeItem> => (accumulator: Accumulator, item: SomeItem): Accumulator =>
	predicate(item) ? nextReducer(accumulator, item) : accumulator;

export const makeMapTransducer = <Accumulator, OriginalItem, TransformedItem>(
	func: Func<OriginalItem, TransformedItem>,
): Transducer<Accumulator, TransformedItem, OriginalItem> => (
	nextReducer: Reducer<Accumulator, TransformedItem>,
): Reducer<Accumulator, OriginalItem> => (accumulator: Accumulator, item: OriginalItem): Accumulator =>
	nextReducer(accumulator, func(item));
