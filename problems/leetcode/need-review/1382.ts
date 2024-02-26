/**
 * 1382. Balance a Binary Search Tree
 * {@link https://leetcode.com/problems/balance-a-binary-search-tree/}
 */
function balanceBST(root: TreeNode | null): TreeNode | null {
  const { floor } = Math;
  const nodes: number[] = [];
  const bfs = (node: TreeNode) => {
    if (!node?.val) return;

    if (node.left) bfs(node.left);
    nodes.push(node.val);
    if (node.right) bfs(node.right);
  };

  const bst = (_nodes: number[]) => {
    if (_nodes.length === 0) return null;

    const mid = floor(_nodes.length / 2);
    const curNode = new TreeNode(_nodes[mid]);
    curNode.left = bst(_nodes.slice(0, mid));
    curNode.right = bst(_nodes.slice(mid + 1));
    return curNode;
  };

  bfs(root!);
  return bst(nodes);
}

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

export {};
