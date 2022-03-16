/*
 * @lc app=leetcode id=977 lang=typescript
 *
 * [977] Squares of a Sorted Array
 */

// @lc code=start
function sortedSquares(nums: number[]): number[] {
  const square = (num: number) => Math.pow(num, 2);
  const n = nums.length;
  let mid = n - 1;

  for (let i = 0; i < n; i++) {
    nums[i] = square(nums[i]);
  }

  for (let i = 0; i < n - 1; i++) {
    if (nums[i] < nums[i + 1]) {
      mid = i;
      break;
    }
  }

  let ans: number[] = [nums[mid]];
  let left = mid - 1,
    right = mid + 1;

  while (true) {
    if (left < 0 && right >= n) break;

    if (left < 0) ans.push(nums[right++]);
    else if (right >= n) ans.push(nums[left--]);
    else {
      const l = nums[left];
      const r = nums[right];
      l > r ? (right++, ans.push(r)) : (left--, ans.push(l));
    }
  }
  return ans;
}
// @lc code=end

[
  [
    [-7, -3, 2, 3, 11],
    [4, 9, 9, 49, 121],
  ],
  [
    [-4, -1, 0, 3, 10],
    [0, 1, 9, 16, 100],
  ],
  [
    [-5, -3, -2, -1],
    [1, 4, 9, 25],
  ],
  [
    [-10000, -9999, -7, -5, 0, 0, 10000],
    [0, 0, 25, 49, 99980001, 100000000, 100000000],
  ],
].forEach(([nums, output]) => {
  const ans = sortedSquares(nums);
  console.log(ans);
  console.assert(JSON.stringify(ans) === JSON.stringify(output));
});
