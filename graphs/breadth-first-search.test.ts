import { TreeNode } from './types';
import { breadthFirstSearch } from './breadth-first-search';
import { oneNode } from './inputs';

const expectedDepthFirstSearch = [1,2,3,4,5,6,7];

let values: (string | number)[] = [];
const func = (treeNode: TreeNode): number => values.push(treeNode.value);

describe('breadth first search tests', (): void => {
	beforeEach(
		(): void => {
			values = [];
		},
	);
	it('base case', (): void => {
		breadthFirstSearch(oneNode, func);

		expect(values).toEqual(expectedDepthFirstSearch);
	});
});
