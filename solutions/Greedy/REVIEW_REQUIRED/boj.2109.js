// @ts-check

/**
 * Gold3. 2109. 순회강연
 * @see https://www.acmicpc.net/problem/2109
 * - 풀이법 찾기가 어려웠음
 * - 강의 듣고 해결
 *
 * @param input {string[]}
 * @returns  {number}
 */
const solution = ([_, ...pricesWithDue]) => {
  /** @type {number[]} */
  const moneys = [];

  pricesWithDue
    .map((line) => line.split(" ").map(Number).reverse())
    .sort((a, b) => {
      const diff = a[0] - b[0];
      return diff === 0 ? b[1] - a[1] : diff;
    })
    .forEach(([due, price]) => {
      moneys.push(price);
      moneys.sort((a, b) => b - a);
      if (moneys.length > due) moneys.pop();
    });

  return moneys.reduce((acc, cur) => acc + cur, 0);
};

const main = () => {
  const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
  console.log(solution(input));

  // [
  //   [["4", "50 2", "10 1", "20 2", "30 1"], 80],
  //   [["7", "20 1", "2 1", "10 3", "100 2", "8 2", "5 20", "50 10"], 185],
  // ].forEach(([q, a]) => {
  //   // @ts-ignore
  //   const res = solution(q);
  //   console.log(res);
  //   console.log(res === a);
  // });
};

main();

// export {};
