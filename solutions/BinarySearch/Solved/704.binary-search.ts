/*
 * @lc app=leetcode id=704 lang=typescript
 *
 * [704] Binary Search
 */

// @lc code=start
/**
 * @returns target 숫자 인덱스
 */
function search(nums: number[], target: number): number {
  let ans = 0,
    left = 0,
    right = nums.length - 1,
    cur: number;
  const { floor } = Math;

  while (left <= right) {
    ans = floor((left + right) * 0.5);
    cur = nums[ans];

    if (cur === target) {
      break;
    }
    if (cur > target) right = ans - 1;
    else left = ans + 1;
  }

  return nums[ans] === target ? ans : -1;
}
// @lc code=end

/** examples */
[
  [[-1, 0, 3, 5, 9, 12], 9, 4],
  [[-1, 0, 3, 5, 9, 12], 2, -1],
].forEach(([nums, target, output]) => {
  const ans = search(nums as number[], target as number);
  console.log(ans);
  console.assert(ans === output);
});

export {};
