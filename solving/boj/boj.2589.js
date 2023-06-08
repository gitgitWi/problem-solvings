/**
 * 보물섬
 * - {@link https://www.acmicpc.net/problem/2589}
 *
 * @param {string[]} lines
 * @returns {number}
 *
 */
const solution = (lines) => {
  const { min, max } = Math;
  const parseLines = () => {
    const [rows, cols] = lines[0].split(' ').map(Number);
    const grid = lines
      .slice(1)
      .map((line) => line.split('').map((p) => (p === 'L' ? 1 : 0)));
    return { rows, cols, grid };
  };

  /**
   * @param {(0|1)[][]} grid
   * @returns {number[][][]}
   */
  const getLands = (grid) => {
    /** @type {number[][][]} */
    const lands = [];
    const ROWS = grid.length;
    const COLS = grid[0].length;
    const traverse = getLand(grid);

    for (let rowId = 0; rowId < ROWS; rowId++) {
      for (let colId = 0; colId < COLS; colId++) {
        if (grid[rowId][colId] === 1) {
          lands.push(traverse(rowId, colId));
        }
      }
    }

    return lands;
  };

  /**
   * @param {(0|1)[][]} grid
   * @returns {(row: number,col: number, land?:number[][]) => number[][]}
   */
  const getLand = (grid) => {
    const ROWS = grid.length;
    const COLS = grid[0].length;

    return function traverse(rowId = 0, colId = 0, land = []) {
      grid[rowId][colId] = 0;
      land.push([rowId, colId]);

      if (rowId + 1 < ROWS && grid[rowId + 1][colId] === 1)
        traverse(rowId + 1, colId, land);
      if (rowId - 1 >= 0 && grid[rowId - 1][colId] === 1)
        traverse(rowId - 1, colId, land);
      if (colId + 1 < COLS && grid[rowId][colId + 1] === 1)
        traverse(rowId, colId + 1, land);
      if (colId - 1 >= 0 && grid[rowId][colId - 1] === 1)
        traverse(rowId, colId - 1, land);
      return land;
    };
  };

  /**
   * @param {(0|1)[][]} grid
   * @returns {(0|1)[][]}
   */
  const copyGrid = (grid) => grid.map((row) => row.slice());

  /**
   * @param {[number, number]} param0
   */
  const traverseBfs = ([rowSize, colSize]) => {
    /**
     * @param {number[]} end
     */
    return ([endRow, endCol]) => {
      /** @type {number} */
      let distance = Number.MAX_SAFE_INTEGER;

      /**
       * @param {number[]} curPos
       * @param {number} dist
       * @param {(0|1)[][]} visited
       * @returns {number}
       */
      return function bfs([row, col], dist = 0, visited) {
        if (dist > distance) return distance;
        if (row === endRow && col === endCol) {
          if (dist < distance) distance = dist;
          return distance;
        }

        visited[row][col] = 0;

        if (row + 1 < rowSize && visited[row + 1][col] === 1) {
          bfs([row + 1, col], dist + 1, visited);
        }
        if (col + 1 < colSize && visited[row][col + 1] === 1) {
          bfs([row, col + 1], dist + 1, visited);
        }
        if (row - 1 >= 0 && visited[row - 1][col] === 1) {
          bfs([row - 1, col], dist + 1, visited);
        }
        if (col - 1 >= 0 && visited[row][col - 1] === 1) {
          bfs([row, col - 1], dist + 1, visited);
        }

        visited[row][col] = 1;
        return distance;
      };
    };
  };

  const { rows, cols, grid } = parseLines();
  const distanceCache = {};
  const getDistance = traverseBfs([rows, cols]);
  const lands = getLands(copyGrid(grid));

  let dist = 0;
  for (const land of lands) {
    while (land.length > 0) {
      const start = land.pop();
      if (!start) break;
      for (const end of land) {
        /** @ts-ignore */
        const cacheKey = start.concat(end).join(`-`);
        if (cacheKey in distanceCache) continue;

        const _dist = getDistance(end)(start, 0, copyGrid(grid));
        /** @ts-ignore */
        distanceCache[cacheKey] = _dist;

        if (_dist > dist) dist = _dist;
      }
    }
  }

  return dist;
};

const main = () => {
  // const input = require('fs')
  //   .readFileSync('/dev/stdin')
  //   .toString()
  //   .trim()
  //   .split('\n');
  // console.log(solution(input));

  [
    {
      inputs: ['5 7', 'WLLWWWL', 'LLLWLLL', 'LWLWLWW', 'LWLWLLL', 'WLLWLWW'],
      answer: 8,
    },
  ].forEach(({ inputs, answer }) => {
    const ans = solution(inputs);
    console.log(ans, ans === answer);
    console.log(`\n`);
  });
};

main();

export {};
