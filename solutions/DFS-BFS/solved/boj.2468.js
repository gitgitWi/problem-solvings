/**
 * Silver1. 2468. 안전 영역
 * - {@link https://www.acmicpc.net/problem/2468}
 *
 * @param {string[]} input
 * @returns  {number}
 */
const solution = (input) => {
  const parseInput = () => {
    const heights = new Set([1]);
    const size = Number(input[0]);

    const area = input.slice(1).map((line) =>
      line.split(" ").map((num) => {
        const numberedNum = Number(num);
        heights.add(numberedNum);
        return numberedNum;
      })
    );

    return {
      size,
      area,
      heights: Array.from(heights.values()).sort().slice(0, -1),
    };
  };

  const { size, area, heights } = parseInput();
  const ids = Array.from(Array(size).fill(0).keys());
  let answer = 1;

  /**
   * @param {number[][]} area
   * @returns {number[][]}
   */
  const copyArea = (area) => area.map((ar) => ar.slice());

  /**
   * @param {number} height
   * @param {number[][]} copiedArea
   * @returns {number}
   */
  const getSafeZones = (height, copiedArea = copyArea(area)) => {
    let safeZones = 0;
    for (const row of ids) {
      for (const col of ids) {
        const curHeight = copiedArea[row][col];
        if (curHeight === 0) {
          continue;
        }
        if (curHeight <= height) {
          copiedArea[row][col] = 0;
          continue;
        }

        const queue = [[row, col]];

        while (queue.length > 0) {
          /** @ts-ignore */
          const [cr, cc] = queue.shift();
          if (copiedArea[cr][cc] === 0) continue;
          copiedArea[cr][cc] = 0;

          if (cr + 1 < size && copiedArea[cr + 1][cc] > height)
            queue.push([cr + 1, cc]);
          if (cc + 1 < size && copiedArea[cr][cc + 1] > height)
            queue.push([cr, cc + 1]);
          if (cr - 1 >= 0 && copiedArea[cr - 1][cc] > height)
            queue.push([cr - 1, cc]);
          if (cc - 1 >= 0 && copiedArea[cr][cc - 1] > height)
            queue.push([cr, cc - 1]);
        }

        safeZones += 1;
      }
    }
    return safeZones;
  };

  for (const height of heights) {
    let safeZones = getSafeZones(height);
    if (safeZones > answer) answer = safeZones;
  }

  return answer;
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
        "5",
        "6 8 2 6 2",
        "3 2 3 4 6",
        "6 7 3 3 2",
        "7 2 5 3 6",
        "8 9 5 2 7",
      ],
      answer: 5,
    },
    {
      inputs: [
        "7",
        "9 9 9 9 9 9 9",
        "9 2 1 2 1 2 9",
        "9 1 8 7 8 1 9",
        "9 2 7 9 7 2 9",
        "9 1 8 7 8 1 9",
        "9 2 1 2 1 2 9",
        "9 9 9 9 9 9 9",
      ],
      answer: 6,
    },
  ].forEach(({ inputs, answer }) => {
    const ans = solution(inputs);
    console.log(ans, ans === answer);
  });
};

main();

export {};
