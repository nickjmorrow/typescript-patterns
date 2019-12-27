import { TreeNode } from './types';
import { depthFirstSearchRecursive } from './depth-first-search';
import { oneNode } from './inputs';

const expectedDepthFirstSearch = [1,2,4,5,3,6,7];

let values: (string | number)[] = [];
const func = (treeNode: TreeNode): number => values.push(treeNode.value);

describe('depth first search tests', (): void => {
	beforeEach(
		(): void => {
			values = [];
		},
	);
	it('base case', (): void => {
		depthFirstSearchRecursive(oneNode, func);

		expect(values).toEqual(expectedDepthFirstSearch);
	});

	// it('iterative case', (): void => {
	// 	depthFirstSearchIterative(aNode, func);
	// 	expect(values).toEqual(expectedDepthFirstSearch);
	// });
});
