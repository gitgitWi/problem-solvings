/*
 * @lc app=leetcode id=35 lang=typescript
 *
 * [35] Search Insert Position
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
  let idx = 0,
    left = 0,
    right = nums.length - 1;

  while (left <= right) {
    idx = (left + right) >> 1;
    const cur = nums[idx];

    if (cur === target) return idx;

    if (cur < target) left = idx + 1;
    else right = idx - 1;
  }

  return left;
}
// @lc code=end

[
  [[1, 3, 5, 6], 5, 2],
  [[1, 3, 5, 6], 2, 1],
  [[1, 3, 5, 6], 7, 4],
  [[1, 3, 5, 6], 2, 1],
].forEach(([nums, target, output]) => {
  const ans = searchInsert(nums as number[], target as number);
  console.log(ans);
  console.assert(ans === output);
});
