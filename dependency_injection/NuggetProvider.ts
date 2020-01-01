import { Nugget } from './Nugget';

export class NuggetProvider {
	getNuggets = (): Nugget[] => {
		// assume this is calling from the database
		return [1, 2, 3].map(n => ({ weight: n, tastiness: 'good' as const }));
	};
}

console.log('');
