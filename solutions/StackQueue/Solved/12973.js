// @ts-check

/**
 * 12973. 짝지어 제거하기
 * @see https://programmers.co.kr/learn/courses/30/lessons/12973?language=javascript
 * - 1차
 *  - 문자열 직접 할당, slice
 *  - 정확성 통과, 효율성 시간초과
 * - 2차: all passed
 *
 * @param {string} s
 * @returns {number}
 */
function solution(s) {
  /** @type {string[]} */
  const stack = [];
  for (const w of s) {
    const curLength = stack.length;
    if (curLength > 0 && stack[curLength - 1] === w) stack.pop();
    else stack.push(w);
  }
  return Number(stack.length === 0);
}

[
  ["baabaa", 1],
  ["cdcd", 0],
].forEach(([q, a]) => {
  // @ts-ignore
  const ans = solution(q);
  console.log(ans);
  console.log(JSON.stringify(ans) === JSON.stringify(a));
});

export {};
