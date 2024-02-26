/*
 * @lc app=leetcode id=189 lang=typescript
 *
 * [189] Rotate Array
 */

// @lc code=start
/**
 * Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number) {
  k %= nums.length;
  if (k === 0) {
    // return nums;
    return;
  }

  const reverse = (left: number, right: number) => {
    while (left < right) {
      [nums[right], nums[left]] = [nums[left], nums[right]];
      left++;
      right--;
    }
  };

  nums.reverse();
  reverse(0, k - 1);
  reverse(k, nums.length - 1);

  // return nums;
}
// @lc code=end

[
  [[1, 2, 3, 4, 5, 6, 7], 3, [5, 6, 7, 1, 2, 3, 4]],
  [[1, 2, 3, 4, 5, 6, 7], 6, [2, 3, 4, 5, 6, 7, 1]],
  [[-1, -100, 3, 99], 2, [3, 99, -1, -100]],
].forEach(([nums, k, ans]) => {
  const output = rotate(nums as number[], k as number);
  console.log(output);
  console.assert(JSON.stringify(output) === JSON.stringify(ans));
});
