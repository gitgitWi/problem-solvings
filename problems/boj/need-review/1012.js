// @ts-check

/**
 * BOJ. 1012. 유기농 배추
 * @see https://www.acmicpc.net/problem/1012
 *
 * @param input {string[]}
 * @returns  {string}
 */
const solution = ([_T, ...lines]) => {
  /** @type {number[]} */
  const answers = [];
  const tests = parseInputs(lines);

  const dy = [-1, 0, 1, 0];
  const dx = [0, 1, 0, -1];

  // traverse
  tests.forEach(({ m, n, grid }) => {
    let count = 0;
    for (let row = 0; row < m; row++) {
      for (let col = 0; col < n; col++) {
        if (grid[row][col] === 0) continue;

        /** @type {number[][]} */
        const queue = [[row, col]];

        while (queue.length > 0) {
          const [cy, cx] = queue.shift();

          /**
           * IMPORTANT
           * - queue에 들어올때 동일한 값이 중복되어 들어오는 경우가 있음!!
           */
          if (grid[cy][cx] === 0) continue;
          grid[cy][cx] = 0;

          for (let i = 0; i < 4; i++) {
            const [ny, nx] = [cy + dy[i], cx + dx[i]];
            if (!canMove(ny, nx, m, n, grid)) continue;
            queue.push([ny, nx]);
          }
        }

        count += 1;
      }
    }

    answers.push(count);
  });

  return answers.join("\n");
};

/**
 *
 * @param {number} rowIdx
 * @param {number} colIdx
 * @param {number} m
 * @param {number} n
 * @param {number[][]} arr
 * @returns
 */
const canMove = (rowIdx, colIdx, m, n, arr) => {
  if (rowIdx < 0 || colIdx < 0 || rowIdx >= m || colIdx >= n) return false;
  if (arr[rowIdx][colIdx] === 0) return false;

  return true;
};

/**
 *
 * @param {string[]} lines
 * @returns {{m: number; n:number; k: number; grid: number[][]}[]}
 */
const parseInputs = (lines) => {
  /** @type {{m: number; n:number; k: number; grid: number[][]}[]}} */
  const tests = [];
  const splitted = lines.map((line) => line.split(" ").map(Number));
  for (let i = 0; i < splitted.length; ) {
    const cur = splitted[i];
    const [m, n, k] = cur;

    const grid = Array.from({ length: m }, () => new Array(n).fill(0));
    const visited = splitted.slice(i + 1, i + 1 + k);
    for (const [row, col] of visited) {
      grid[row][col] = 1;
    }

    tests.push({
      m,
      n,
      k,
      grid,
    });
    i += k + 1;
  }

  return tests;
};

const main = () => {
  // const input = require("fs")
  //   .readFileSync("/dev/stdin")
  //   .toString()
  //   .trim()
  //   .split("\n");

  // console.log(solution(input));

  [
    [
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
    ["1", "5 3 6", "0 2", "1 2", "2 2", "3 2", "4 2", "4 0"],
  ].forEach((q) => console.log(solution(q)));
};

main();

export {};
