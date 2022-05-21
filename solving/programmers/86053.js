// @ts-check

/**
 * 86053. 금과 은 운반하기
 * @see https://programmers.co.kr/learn/courses/30/lessons/86053?language=javascript
 * - ReviewRequired
 *
 * @param {number} a
 * @param {number} b
 * @param {number[]} g
 * @param {number[]} s
 * @param {number[]} w
 * @param {number[]} t
 * @returns {number}
 */
function solution(a, b, g, s, w, t) {
  return 0;
}

[
  [10, 10, [100], [100], [7], [10], 50],
  [90, 500, [70, 70, 0], [0, 0, 500], [100, 100, 2], [4, 8, 1], 499],
].forEach(([a, b, g, s, w, t, result]) => {
  // @ts-ignore
  const ans = solution(a, b, g, s, w, t);
  console.log(ans);
  console.log(JSON.stringify(ans) === JSON.stringify(result));
});

export {};
