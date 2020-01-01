import { oneNode } from './inputs';
import { preOrderTraversalRecursive, preOrderTraversalIterative } from './pre-order-traversal';
import { TreeNode } from './types';

let values: (string | number)[] = [];
const expectedTraversalValues = [1, 2, 4, 5, 3, 6, 7];

const nodeFunc = (treeNode: TreeNode) => values.push(treeNode.value);

describe('in order traversal', (): void => {
	beforeEach((): void => {
		values = [];
	});

	it('recursive', (): void => {
		preOrderTraversalRecursive(oneNode, nodeFunc);
		expect(values).toEqual(expectedTraversalValues);
	});

	it('iterative', (): void => {
		preOrderTraversalIterative(oneNode, nodeFunc);
		expect(values).toEqual(expectedTraversalValues);
	});
});
