import { TreeNode } from './types';

export const depthFirstSearchRecursive = (root: TreeNode, func: (value: TreeNode) => any): void => {
	// mark as visited
	func(root);

	if (root.left) {
		depthFirstSearchRecursive(root.left, func);
	}
	if (root.right) {
		depthFirstSearchRecursive(root.right, func);
	}

	return;
};

// export const depthFirstSearchIterative = (root: TreeNode, func: (value: TreeNode) => any): void => {
// 	const nodesToVisit: TreeNode[] = [];
// 	nodesToVisit.push(root);

// 	while (nodesToVisit.length > 0) {
// 		// pop node from list
// 		const nodeToVisit = nodesToVisit.pop()!;
// 		func(nodeToVisit);

// 		if (nodeToVisit.left) {
// 			nodesToVisit.push(nodeToVisit.left);
// 		}

// 		if (nodeToVisit.right) {
// 			nodesToVisit.push(nodeToVisit.right);
// 		}
// 	}
// };
