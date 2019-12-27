import { TreeNode, NodeFunc } from './types';

export const preOrderTraversalRecursive = (rootNode: TreeNode, nodeFunc: NodeFunc) => {
	nodeFunc(rootNode);

	if (rootNode.left) {
		preOrderTraversalRecursive(rootNode.left, nodeFunc);
	}

	if (rootNode.right) {
		preOrderTraversalRecursive(rootNode.right, nodeFunc);
	}
};

export const preOrderTraversalIterative = (rootNode: TreeNode, nodeFunc: NodeFunc) => {
	let nodeStack: TreeNode[] = [];
	if (rootNode == null) {
		return;
	}

	let currentNode: TreeNode | null = rootNode;

	while (true) {
		if (currentNode !== null) {
			nodeFunc(currentNode);
			if (currentNode.right) {
				nodeStack.push(currentNode.right);
			}
			currentNode = currentNode.left;
		} else {
			if (nodeStack.length === 0) {
				break;
			}
			currentNode = nodeStack.pop()!;
		}
	}
};
