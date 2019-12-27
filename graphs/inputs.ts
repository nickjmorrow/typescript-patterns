import { TreeNode } from './types';

const sevenNode = new TreeNode(7, null, null);
const sixNode = new TreeNode(6, null, null);
const fiveNode = new TreeNode(5, null, null);
const fourNode = new TreeNode(4, null, null);
const threeNode = new TreeNode(3, sixNode, sevenNode);
const twoNode = new TreeNode(2, fourNode, fiveNode);
export const oneNode = new TreeNode(1, twoNode, threeNode);

export const createNodeFunc = (valuesArr: (string | number)[]) => (treeNode: TreeNode): string | number =>
	valuesArr.push(treeNode.value);
