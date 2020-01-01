import { levelOrderTraversalIterative, levelOrderTraversalRecursive } from './level-order-traversal';
import { oneNode } from './inputs';

const expectedLevelOrderTraversal = [[1], [2, 3], [4, 5, 6, 7]];

describe('level order traversal', (): void => {
	it('iterative', (): void => {
		const actualLevelOrderTraversal = levelOrderTraversalIterative(oneNode);
		expect(actualLevelOrderTraversal).toEqual(expectedLevelOrderTraversal);
	});
	it('recursive', (): void => {
		const actualLevelOrderTraversal = levelOrderTraversalRecursive(oneNode);
		expect(actualLevelOrderTraversal).toEqual(expectedLevelOrderTraversal);
	});
});
