import { TreeNode, NodeFunc } from './types';

export const postOrderTraversalRecursive = (rootNode: TreeNode, nodeFunc: NodeFunc) => {
	if (rootNode.left) {
		postOrderTraversalRecursive(rootNode.left, nodeFunc);
	}

	if (rootNode.right) {
		postOrderTraversalRecursive(rootNode.right, nodeFunc);
	}

	nodeFunc(rootNode);
};

export const postOrderTraversalIterative = (rootNode: TreeNode, nodeFunc: NodeFunc) => {
	const nodeStack: TreeNode[] = [];
	if (rootNode == null) {
		return;
	}

	let currentNode: TreeNode | null = rootNode;

	while (true) {
		if (currentNode !== null) {
			nodeStack.push(currentNode);
			currentNode = currentNode.left;
		} else {
			if (nodeStack.length === 0) {
				break;
			}
			const topOfStack = nodeStack[nodeStack.length - 1];

			if (topOfStack.right) {
				currentNode = topOfStack.right;
			} else {
				currentNode = nodeStack.pop()!;

				nodeFunc(topOfStack);
				currentNode = topOfStack;
			}
		}
	}
};
