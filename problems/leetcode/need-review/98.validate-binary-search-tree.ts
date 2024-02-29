/**
 * @file
 * LeetCode 98. Validate Binary Search Tree
 *
 * @see {@link https://leetcode.com/problems/validate-binary-search-tree/}
 *
 * @todo
 * - 처음부터 접근 잘못해서 계속 헤맨 듯
 */

interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

function isValidBST(root: TreeNode): boolean {
  let prevNode: TreeNode | null = null;

  const traverse = (node: TreeNode | null): boolean => {
    if (node === null) return true;
    if (!traverse(node.left)) return false;
    if (prevNode !== null && node.val <= prevNode.val) return false;
    prevNode = node;
    return traverse(node.right);
  };

  return traverse(root);
}

export const validateBinarySearchTree = {
  solution: isValidBST,
};
