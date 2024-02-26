/**
 * 문제
 * - {@link }
 *
 * @param {string[]} lines
 * @returns {string[]}
 *
 */
const solution = (lines) => {
  const ans = [""];
  return ans;
};

const main = () => {
  // const input = require("fs")
  //   .readFileSync("/dev/stdin")
  //   .toString()
  //   .trim()
  //   .split("\n");

  // console.log(solution(input));

  [
    {
      inputs: [],
      answer: [],
    },
  ].forEach(({ inputs, answer }) => {
    const ans = solution(inputs);
    console.log(ans, ans.join("\n") === answer.join("\n"));
    console.log(`\n`);
  });
};

main();

export {};
