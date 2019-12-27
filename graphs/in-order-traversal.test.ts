import { inOrderTraversalRecursive, inOrderTraversalIterative } from './in-order-traversal';
import { oneNode } from './inputs';
import { TreeNode } from './types';

let values: (string | number)[] = [];
const expectedTraversalValues = [4, 2, 5, 1, 6, 3, 7];

const nodeFunc = (treeNode: TreeNode) => values.push(treeNode.value);

describe('in order traversal', (): void => {
	beforeEach(
		(): void => {
			values = [];
		},
	);

	it('recursive', (): void => {
		inOrderTraversalRecursive(oneNode, nodeFunc);
		expect(values).toEqual(expectedTraversalValues);
	});

	it('iterative', (): void => {
		inOrderTraversalIterative(oneNode, nodeFunc);
		expect(values).toEqual(expectedTraversalValues);
	});
});
