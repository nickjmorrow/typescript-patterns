import { NuggetProvider } from './NuggetProvider';
import { injectable } from 'tsyringe';

@injectable()
export class NuggetFilterer {
	private _nuggetProvider: NuggetProvider;

	constructor(nuggetProvider: NuggetProvider) {
		this._nuggetProvider = nuggetProvider;
	}

	getFilteredNuggets = () => {
		return this._nuggetProvider.getNuggets().filter(n => n.tastiness === 'good' && n.weight > 1);
	};
}
