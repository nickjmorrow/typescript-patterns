type AbsolutePath = string & { _brand: 'abs' };

const isAbsolutePath = (path: string): path is AbsolutePath => {
	return path.startsWith('/');
};

const doSomethingWithAbsolutePath = (path: AbsolutePath): void => {
	console.log(path);
};

type Meters = number & { _brand: 'meters' };
type Miles = number & { _brand: 'miles' };
type Seconds = number & { _brand: 'seconds' };

const meters = (m: number): Meters => m as Meters;
const seconds = (s: number): Seconds => s as Seconds;
const miles = (m: number): Miles => m as Miles;

const oneKm = meters(1000); // Type is Meters
const oneMin = seconds(60); // Type is Seconds”

const convertToMiles = (meters: Meters): Miles => (meters * 521) as Miles;

const miles1 = convertToMiles(oneKm);
// const miles2 = convertToMiles(oneMin);
