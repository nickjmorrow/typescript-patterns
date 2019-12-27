import { TreeNode } from './types';

export const inOrderTraversalRecursive = (rootNode: TreeNode, nodeFunc: (node: TreeNode) => any): void => {
	if (rootNode.left) {
		inOrderTraversalRecursive(rootNode.left, nodeFunc);
	}

	nodeFunc(rootNode);

	if (rootNode.right) {
		inOrderTraversalRecursive(rootNode.right, nodeFunc);
	}
};

export const inOrderTraversalIterative = (root: TreeNode, nodeFunc: (node: TreeNode) => any): void => {
	const nodeStack: TreeNode[] = [];
	let currentNode: TreeNode | null = root;

	while (true) {
		if (currentNode !== null) {
			nodeStack.push(currentNode);
			currentNode = currentNode.left;
		} else {
			if (nodeStack.length === 0) {
				break;
			}
			currentNode = nodeStack.pop()!;
			nodeFunc(currentNode);
			currentNode = currentNode.right;
		}
	}
};
