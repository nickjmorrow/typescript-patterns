export interface Node {
	value: string;
	children: Node[];
}

const helper = (node: Node, visitedNodes: Node[], topologicallySortedNodes: Node[]) => {
	const hasBeenVisited = (chosenNode: Node) => visitedNodes.some(vn => vn.value === chosenNode.value);

	if (!hasBeenVisited(node)) {
		visitedNodes.push(node);
	}

	node.children
		.filter(n => !hasBeenVisited(n))
		.forEach(child => helper(child, visitedNodes, topologicallySortedNodes));

	topologicallySortedNodes.unshift(node);
};

export const topologicalSort = (nodes: Node[]): Node[] => {
	const visitedNodes: Node[] = [];
	const topologicallySortedNodes: Node[] = [];

	// while there are unvisited nodes
	while (visitedNodes.length < nodes.length) {
		const unvisitedNodes = nodes.filter(n => !visitedNodes.some(vn => vn.value === n.value));
		const chosenNode = unvisitedNodes[0];

		helper(chosenNode, visitedNodes, topologicallySortedNodes);
	}

	return topologicallySortedNodes;
};
