/**
 * 807. Max Increase to Keep City Skyline
 * {@link https://leetcode.com/problems/max-increase-to-keep-city-skyline/}
 */
function maxIncreaseKeepingSkyline(grid: number[][]): number {
  const getGridSum = (_grid: number[][]) => {
    let sum = 0;
    for (const row of _grid) {
      for (const val of row) {
        sum += val;
      }
    }
    return sum;
  };

  const { min } = Math;
  const result = grid.map((row) => row.slice());
  const SIZE = grid.length;

  for (let rowId = 0; rowId < SIZE; rowId++) {
    for (let colId = 0; colId < SIZE; colId++) {
      const curHeight = grid[rowId][colId];

      let rowMaxHeight = curHeight;
      for (let _rowId = 0; _rowId < SIZE; _rowId++) {
        const _curHeight = grid[_rowId][colId];
        if (_curHeight > rowMaxHeight) rowMaxHeight = _curHeight;
      }

      let colMaxHeight = curHeight;
      for (let _colId = 0; _colId < SIZE; _colId++) {
        const _curHeight = grid[rowId][_colId];
        if (_curHeight > colMaxHeight) colMaxHeight = _curHeight;
      }

      result[rowId][colId] = min(colMaxHeight, rowMaxHeight);
    }
  }

  return getGridSum(result) - getGridSum(grid);
}

const input = [
  [3, 0, 8, 4],
  [2, 4, 5, 7],
  [9, 2, 6, 3],
  [0, 3, 1, 0],
];
const output = 35;

const answer = maxIncreaseKeepingSkyline(input);
console.debug({ answer, isOK: answer === output });

export {};
