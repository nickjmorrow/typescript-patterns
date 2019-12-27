import { TreeNode } from './types';

class WrapperNode {
	public treeNode: TreeNode;
	public level: number;

	public constructor(treeNode: TreeNode, level: number) {
		this.treeNode = treeNode;
		this.level = level;
	}
}

export const levelOrderTraversalIterative = (root: TreeNode) => {
	const queue: WrapperNode[] = [];
	const wrapperRoot = new WrapperNode(root, 0);
	const wrapperNodes: WrapperNode[] = [];
	let currentNode: WrapperNode = wrapperRoot;
	queue.unshift(wrapperRoot);

	while (queue.length > 0) {
		currentNode = queue.pop()!;
		wrapperNodes.push(currentNode);

		if (currentNode.treeNode.left) {
			queue.unshift(new WrapperNode(currentNode.treeNode.left, currentNode.level + 1));
		}
		if (currentNode.treeNode.right) {
			queue.unshift(new WrapperNode(currentNode.treeNode.right, currentNode.level + 1));
		}
	}
	const output = wrapperNodes.reduce(
		(agg, cur) => {
			const {
				level,
				treeNode: { value },
			} = cur;
			if (agg[level] === undefined) {
				agg[level] = [value];
			} else {
				agg[level].push(value);
			}
			return agg;
		},
		[] as (string | number)[][],
	);
	return output;
};

const levelOrderTraversalRecursiveHelper = (treeNode: TreeNode, visitedNodes: (number | string)[][], level: number) => {
	if (visitedNodes[level] === undefined) {
		visitedNodes[level] = [treeNode.value];
	} else {
		visitedNodes[level].push(treeNode.value);
	}

	if (treeNode.left) {
		levelOrderTraversalRecursiveHelper(treeNode.left, visitedNodes, level + 1);
	}
	if (treeNode.right) {
		levelOrderTraversalRecursiveHelper(treeNode.right, visitedNodes, level + 1);
	}
};

export const levelOrderTraversalRecursive = (treeNode: TreeNode) => {
	const visitedNodes: (number | string)[][] = [];
	levelOrderTraversalRecursiveHelper(treeNode, visitedNodes, 0);
	return visitedNodes;
};
