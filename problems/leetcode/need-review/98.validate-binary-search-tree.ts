/**
 * @file
 * LeetCode 98. Validate Binary Search Tree
 *
 * @see {@link https://leetcode.com/problems/validate-binary-search-tree/}
 */

interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

const isValidBST = (root: TreeNode): boolean => {
  const hasLeft = root.left !== null;
  const hasRight = root.right !== null;

  if (hasLeft) {
    const isLeftValid = root.left.val < root.val && isValidBST(root.left);
    if (!isLeftValid) return false;
  }

  if (hasRight) {
    const isRightValid = root.right.val > root.val && isValidBST(root.right);
    if (!isRightValid) return false;
  }

  return true;
};

const testCases = [
  //
];

export const validateBinarySearchTree = {
  solution: isValidBST,
  testCases,
};
