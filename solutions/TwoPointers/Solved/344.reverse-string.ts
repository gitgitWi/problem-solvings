/*
 * @lc app=leetcode id=344 lang=typescript
 *
 * [344] Reverse String
 */

// @lc code=start
/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]) {
  const last = s.length - 1;
  const mid = Math.ceil(last * 0.5);
  for (let i = 0; i < mid; i++) {
    [s[i], s[last - i]] = [s[last - i], s[i]];
  }
  return;
  // return s;
}
// @lc code=end

[
  [
    ["h", "e", "l", "l", "o"],
    ["o", "l", "l", "e", "h"],
  ],
  [
    ["H", "a", "n", "n", "a", "h"],
    ["h", "a", "n", "n", "a", "H"],
  ],
].forEach(([s, a]) => {
  const output = reverseString(s);
  console.log(output);
  console.assert(JSON.stringify(output) === JSON.stringify(a));
});
