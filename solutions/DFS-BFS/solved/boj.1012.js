/**
 * 유기농 배추
 * - {@link https://www.acmicpc.net/problem/1012}
 *
 * @param {string[]} inputs
 * @returns {string}
 *
 */
const solution = ([_tests, ...lines]) => {
  /** @types {number[][]} */
  const parseLines = () => {
    const cases = [];
    let caseId = -1;

    for (const line of lines) {
      const splitted = line.split(" ").map(Number);
      if (splitted.length === 3) {
        const [width, height] = splitted;
        cases.push(
          Array.from({ length: height }, (_) =>
            Array.from({ length: width }, () => 0)
          )
        );
        caseId = cases.length - 1;
      } else {
        const [left, top] = splitted;
        cases[caseId][top][left] = 1;
      }
    }
    return cases;
  };

  const cases = parseLines();

  /**
   *
   * @param {number[][]} baat 밭
   * @returns {number}
   */
  const traverse = (baat) => {
    let bugs = 0;
    const [WIDTH, HEIGHT] = [baat[0].length, baat.length];

    for (let curTop = 0; curTop < HEIGHT; curTop++) {
      for (let curLeft = 0; curLeft < WIDTH; curLeft++) {
        if (baat[curTop][curLeft] === 0) continue;

        const queue = [[curTop, curLeft]];
        while (queue.length > 0) {
          /** @ts-ignore */
          const [top, left] = queue.shift();
          if (baat[top][left] === 0) continue;
          baat[top][left] = 0;

          if (top + 1 < HEIGHT && baat[top + 1][left] === 1) {
            queue.push([top + 1, left]);
          }
          if (top - 1 >= 0 && baat[top - 1][left] === 1) {
            queue.push([top - 1, left]);
          }
          if (left + 1 < WIDTH && baat[top][left + 1] === 1) {
            queue.push([top, left + 1]);
          }
          if (left - 1 >= 0 && baat[top][left - 1] === 1) {
            queue.push([top, left - 1]);
          }
        }

        bugs += 1;
      }
    }

    return bugs;
  };

  return cases.map(traverse).map(String).join("\n");
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
      inputs: [
        "2",
        "10 8 17",
        "0 0",
        "1 0",
        "1 1",
        "4 2",
        "4 3",
        "4 5",
        "2 4",
        "3 4",
        "7 4",
        "8 4",
        "9 4",
        "7 5",
        "8 5",
        "9 5",
        "7 6",
        "8 6",
        "9 6",
        "10 10 1",
        "5 5",
      ],
      answer: ["5", "1"],
    },
    {
      inputs: ["1", "5 3 6", "0 2", "1 2", "2 2", "3 2", "4 2", "4 0"],
      answer: ["2"],
    },
  ].forEach(({ inputs, answer }) => {
    const ans = solution(inputs);
    console.log(ans, ans === answer.join("\n"));
    console.log(`\n`);
  });
};

main();

export {};
