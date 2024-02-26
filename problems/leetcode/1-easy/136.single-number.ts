/*
 * @lc app=leetcode id=136 lang=typescript
 *
 * [136] Single Number
 */

// @lc code=start
function singleNumber(nums: number[]): number {
  const _set = new Set<number>([]);

  nums.forEach((num) => {
    _set.has(num) ? _set.delete(num) : _set.add(num);
  });

  return _set.values().next().value;
}
// @lc code=end
