export class TreeNode {
	public value: string | number;
	public left: TreeNode | null;
	public right: TreeNode | null;

	public constructor(value: string | number, left: TreeNode | null, right: TreeNode | null) {
		this.value = value;
		this.left = left;
		this.right = right;
	}
}

export type NodeFunc = (node: TreeNode) => any;

export interface ParagraphKeyPhraseIndex {
	paragraphIndex: number;
	keyPhraseIndex: number;
}
