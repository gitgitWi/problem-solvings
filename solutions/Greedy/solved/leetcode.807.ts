/**
 * 807. Max Increase to Keep City Skyline
 * {@link https://leetcode.com/problems/max-increase-to-keep-city-skyline/}
 */
function maxIncreaseKeepingSkyline(grid: number[][]): number {
  const SIZE = grid.length;
  const { min } = Math;

  const colMaxHeights: number[] = Array(SIZE).fill(0);
  const rowMaxHeights: number[] = Array(SIZE).fill(0);
  for (let rowId = 0; rowId < SIZE; rowId++) {
    for (let colId = 0; colId < SIZE; colId++) {
      const curHeight = grid[rowId][colId];
      if (curHeight > colMaxHeights[colId]) colMaxHeights[colId] = curHeight;
      if (curHeight > rowMaxHeights[rowId]) rowMaxHeights[rowId] = curHeight;
    }
  }

  let diffSum = 0;
  for (let rowId = 0; rowId < SIZE; rowId++) {
    for (let colId = 0; colId < SIZE; colId++) {
      const height = min(rowMaxHeights[rowId], colMaxHeights[colId]);
      const diff = height - grid[rowId][colId];
      diffSum += diff;
    }
  }

  return diffSum;
}

/** TEST */
const testCases = [
  {
    input: [
      [3, 0, 8, 4],
      [2, 4, 5, 7],
      [9, 2, 6, 3],
      [0, 3, 1, 0],
    ],
    output: 35,
  },
];

testCases.forEach(({ input, output }) => {
  const answer = maxIncreaseKeepingSkyline(input);
  console.assert(
    answer === output,
    '\nanswer: \x1b[91m%d\x1b[0m\nexpected: \x1b[32m%d\x1b[0m\n',
    answer,
    output
  );
});

export {};
