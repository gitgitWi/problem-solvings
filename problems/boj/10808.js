// @ts-check

/**
 * 알파벳 개수
 * @see https://www.acmicpc.net/problem/10808
 *
 * @param input {string[]}
 * @returns  {string}
 */
const solution = (input) => {
  const words = input[0].split("");
  const aCode = "a".charCodeAt(0);

  const counts = Array(26).fill(0);
  words.forEach((w) => {
    counts[w.charCodeAt(0) - aCode] += 1;
  });
  return counts.join(" ");
};

const main = () => {
  const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

  console.log(solution(input));
  // [["baekjoon"]].forEach((q) => console.log(solution(q)));
};

main();

export {};
