/*
 * @lc app=leetcode id=557 lang=typescript
 *
 * [557] Reverse Words in a String III
 */

// @lc code=start
function reverseWords(s: string): string {
  let ans = "";
  let i = 0;
  const last = s.length;

  while (i < last) {
    /** find space */
    let space = i;
    for (; space < last; space++) {
      if (s[space] === " ") break;
    }

    /** add reversed words */
    for (let c = space; c-- > i; ) {
      ans += s[c];
    }
    ans += " ";
    i = space + 1;
  }

  return ans.trim();
}
// @lc code=end

[
  ["Let's take LeetCode contest", "s'teL ekat edoCteeL tsetnoc"],
  ["God Ding", "doG gniD"],
].forEach(([s, a]) => {
  const output = reverseWords(s);
  console.log(output);
  console.assert(output === a);
});
