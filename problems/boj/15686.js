// @ts-check

/**
 * 15686. 치킨 배달
 * @see https://www.acmicpc.net/problem/15686
 *
 * @param input {string[]}
 * @returns {number}
 */
const solution = ([nm, ..._grid]) => {
  const [N, M] = nm.split(" ").map(Number);
  const grid = _grid.map((g) => g.split(" ").map(Number));
  const homes = [];
  const chicks = [];
  const dists = [];

  // 집-치킨집 위치 찾기
  for (let row = 0; row < N; row++) {
    for (let col = 0; col < N; col++) {
      const cur = grid[row][col];
      if (cur === 0) continue;
      if (cur === 1) homes.push([row, col]);
      if (cur === 2) chicks.push([row, col]);
    }
  }

  // console.log({ chicks });

  // M개 고르기
  /** @type {number[][][]} */
  const targets = [];
  combination(-1, [], M, chicks, targets);

  // console.log(targets);

  const { abs, min } = Math;
  // 거리 구하기
  for (const target of targets) {
    let distance = 0;
    for (const [hy, hx] of homes) {
      let chicDists = [];
      for (const [cy, cx] of target) {
        chicDists.push(abs(cy - hy) + abs(cx - hx));
      }
      distance += min(...chicDists);
    }
    dists.push(distance);
  }

  // console.log(dists);

  return Math.min(...dists);
};

/**
 * @param {number} start
 * @param {number[]} selectedIds
 * @param {number} size
 * @param {number[][]} chicks
 * @param {number[][][]} targets
 */
const combination = (start, selectedIds, size, chicks, targets) => {
  if (selectedIds.length === size) {
    targets.push(chicks.filter((d, i) => selectedIds.includes(i)));
  }

  for (let nextId = start + 1; nextId < chicks.length; nextId++) {
    combination(nextId, selectedIds.concat([nextId]), size, chicks, targets);
  }
};

const main = () => {
  // const input = require("fs")
  //   .readFileSync("/dev/stdin")
  //   .toString()
  //   .trim()
  //   .split("\n");

  // console.log(solution(input));

  [
    ["5 3", "0 0 1 0 0", "0 0 2 0 1", "0 1 2 0 0", "0 0 1 0 0", "0 0 0 0 2"],
    ["5 2", "0 2 0 1 0", "1 0 1 0 0", "0 0 0 0 0", "2 0 0 1 1", "2 2 0 1 2"],
    ["5 1", "1 2 0 0 0", "1 2 0 0 0", "1 2 0 0 0", "1 2 0 0 0", "1 2 0 0 0"],
    ["5 1", "1 2 0 2 1", "1 2 0 2 1", "1 2 0 2 1", "1 2 0 2 1", "1 2 0 2 1"],
  ].forEach((q) => console.log(solution(q)));
};

main();

export {};
