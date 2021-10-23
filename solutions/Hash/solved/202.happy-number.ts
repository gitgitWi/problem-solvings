/*
 * @lc app=leetcode id=202 lang=typescript
 *
 * [202] Happy Number
 */

// @lc code=start

function isHappy(init: number): boolean {
  if (init === 1) return true;

  const reducer = (num: number = init) =>
    num
      .toString()
      .split("")
      .reduce((acc, cur) => (acc += +cur * +cur), 0);

  let cur = init;
  const exists = new Set<number>([init]);

  while (true) {
    cur = reducer(cur);
    if (cur === 1) return true;
    if (exists.has(cur)) return false;
    exists.add(cur);
  }
}
// @lc code=end
