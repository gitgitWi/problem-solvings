// @ts-check

/**
 * BOJ 2309. 일곱 난쟁이
 * @see https://www.acmicpc.net/problem/2309
 *
 * - 일곱 난쟁이 키의 합은 100,
 * - 9명의 키가 주어졌을때 일곱 난쟁이 찾기
 * @param inputs {string[]} 9명의 키
 * @returns {string}
 */

const solution = (inputs) => {
  const target = 100;
  const sizes = inputs.map((d) => Number(d));
  const total = sizes.reduce((sum, cur) => (sum += cur), 0);

  /** @type {number[]} */
  let ans = [];

  sizes.forEach((choice1, i) => {
    sizes.slice(i + 1).forEach((choice2, j) => {
      if (total - choice1 - choice2 !== target) return;

      const jj = j + i + 1;
      ans = sizes
        .slice(0, i)
        .concat(sizes.slice(i + 1, jj))
        .concat(sizes.slice(jj + 1));
      return;
    });
  });

  return ans.sort((a, b) => a - b).join("\n");
};

const main = () => {
  const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

  console.log(solution(input));

  // [
  //   [20, 7, 23, 19, 10, 15, 25, 8, 13],
  // ].forEach((q) => console.log(solution(q.map((d) => String(d)))));
};

main();

export {};
