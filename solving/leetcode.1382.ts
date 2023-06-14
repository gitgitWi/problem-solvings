class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/**
 * 1382. Balance a Binary Search Tree
 * {@link https://leetcode.com/problems/balance-a-binary-search-tree/}
 */
function balanceBST(root: TreeNode | null): TreeNode | null {
  return root;
}

export {};
