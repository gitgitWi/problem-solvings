/*
 * @lc app=leetcode id=283 lang=typescript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  const len = nums.length;

  for (let i = 0; i < len; i++) {
    if (nums[i] !== 0) continue;
    for (let j = i; j < len; j++) {
      if (nums[j] === 0) continue;
      nums[i] = nums[j];
      nums[j] = 0;
      // if (j === len - 1 && nums[j] === 0) return;
      break;
    }
  }

  // return nums;
  return;
}
// @lc code=end

[
  [
    [0, 1, 0, 3, 12],
    [1, 3, 12, 0, 0],
  ],
  [[0], [0]],
].forEach(([nums, ans]) => {
  const output = moveZeroes(nums);

  console.log(output);
  console.assert(JSON.stringify(output) === JSON.stringify(ans));
});
