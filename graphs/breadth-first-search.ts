import { TreeNode } from './types';

export const breadthFirstSearch = (root: TreeNode, func: (value: TreeNode) => any): void => {
	const queue: TreeNode[] = [];
	let currentNode = root;
	queue.push(root);

	while (queue.length > 0) {
		currentNode = queue.pop()!;
		func(currentNode);
		if (currentNode.left) {
			queue.unshift(currentNode.left);
		}
		if (currentNode.right) {
			queue.unshift(currentNode.right);
		}
	}
};
