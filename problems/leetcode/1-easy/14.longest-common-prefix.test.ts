import { test, expect } from 'vitest';
/**
 * @fileoverview
 * 14. Longest Common Prefix
 * - https://school.programmers.co.kr/learn/courses/30/lessons/42892
 */

function longestCommonPrefix(strs: string[]): string {
  const first = strs[0];
  const LEN = first.length;

  let answer = '';
  for (let i = 0; i < LEN; i++) {
    const cur = first[i];
    for (const str of strs) {
      if (str[i] !== cur) return answer;
    }
    answer += cur;
  }

  return answer;
}

test('14. Longest Common Prefix', () => {
  expect(longestCommonPrefix(['flower', 'flow', 'flight'])).to.equal('fl');
  expect(longestCommonPrefix(['dog', 'racecar', 'car'])).to.equal('');
  expect(longestCommonPrefix(['a'])).to.equal('a');
});
