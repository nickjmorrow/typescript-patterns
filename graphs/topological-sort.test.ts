import { topologicalSort, Node } from './topological-sort';

describe('topological sort', () => {
	it('base case', () => {
		const nodeG = { value: 'G', children: [] as Node[] };
		const nodeF = { value: 'F', children: [nodeG] };
		const nodeH = { value: 'H', children: [] };
		const nodeE = { value: 'E', children: [nodeF, nodeH] };
		const nodeD = { value: 'D', children: [nodeF] };
		const nodeC = { value: 'C', children: [nodeE] };
		const nodeB = { value: 'B', children: [nodeC, nodeD] };
		const nodeA = { value: 'A', children: [nodeC] };
		const nodes: Node[] = [nodeA, nodeB, nodeC, nodeD, nodeE, nodeF, nodeG];

		const topologicallySortedNodes = topologicalSort(nodes);
		console.log(topologicallySortedNodes);
	});
});
