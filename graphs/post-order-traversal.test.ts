import { oneNode } from './inputs';
import { postOrderTraversalRecursive } from './post-order-traversal';
import { TreeNode } from './types';

let values: (string | number)[] = [];
const expectedTraversalValues = [4, 5, 2, 6, 7, 3, 1];

const nodeFunc = (treeNode: TreeNode) => values.push(treeNode.value);

describe('in order traversal', (): void => {
	beforeEach(
		(): void => {
			values = [];
		},
	);

	it('recursive', (): void => {
		postOrderTraversalRecursive(oneNode, nodeFunc);
		expect(values).toEqual(expectedTraversalValues);
	});

	// it('iterative', (): void => {
	// 	postOrderTraversalIterative(oneNode, nodeFunc);
	// 	expect(values).toEqual(expectedTraversalValues);
	// });
});
