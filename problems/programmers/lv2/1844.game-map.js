/**
 * lv2. 1844. 게임 맵 최단거리
 * - https://school.programmers.co.kr/learn/courses/30/lessons/1844
 *
 * @param {number[][]} maps, 0은 벽, 1은 길
 * @returns {number}
 */
const solution = (maps) => {
  const rowLimit = maps.length;
  const colLimit = maps[0].length;
  let shortest = Number.MAX_SAFE_INTEGER;

  class Position {
    /** @type {number} */
    row;
    /** @type {number} */
    col;
    /** @type {Set<string>} */
    visited;

    /**
     * @param {number} row
     * @param {number} col
     * @param {Set<string>} visited
     */
    constructor(row, col, visited) {
      this.row = row;
      this.col = col;
      this.visited = visited;
    }
  }

  /**
   * @type {Position[]}
   */
  const stacks = [];
  stacks.push(new Position(0, 0, new Set()));

  while (stacks.length > 0) {
    const current = stacks.pop();
    if (!current) break;

    const { row, col, visited } = current;

    // 방문 처리
    const nextVisited = new Set(visited);
    nextVisited.add(`${row}-${col}`);

    // 목표지점 도달시 shortest 업데이트
    if (row === rowLimit - 1 && col === colLimit - 1) {
      if (nextVisited.size < shortest) shortest = nextVisited.size;
      continue;
    }

    const nextBottom = row + 1;
    const nextTop = row - 1;
    const nextRight = col + 1;
    const nextLeft = col - 1;

    // 상하좌우 탐색
    if (
      nextBottom < rowLimit &&
      maps[nextBottom][col] === 1 &&
      !visited.has(`${nextBottom}-${col}`)
    ) {
      stacks.push(new Position(nextBottom, col, nextVisited));
    }
    if (
      nextTop >= 0 &&
      maps[nextTop][col] === 1 &&
      !visited.has(`${nextTop}-${col}`)
    ) {
      stacks.push(new Position(nextTop, col, nextVisited));
    }
    if (
      nextRight < colLimit &&
      maps[row][nextRight] === 1 &&
      !visited.has(`${row}-${nextRight}`)
    ) {
      stacks.push(new Position(row, nextRight, nextVisited));
    }
    if (
      nextLeft >= 0 &&
      maps[row][nextLeft] === 1 &&
      !visited.has(`${row}-${nextLeft}`)
    ) {
      stacks.push(new Position(row, nextLeft, nextVisited));
    }
  }

  return shortest === Number.MAX_SAFE_INTEGER ? -1 : shortest;
};

/**
 * @type {{input: number[][], answer: number} []}
 */
const testCases = [
  {
    input: [
      [1, 0, 1, 1, 1],
      [1, 0, 1, 0, 1],
      [1, 0, 1, 1, 1],
      [1, 1, 1, 0, 1],
      [0, 0, 0, 0, 1],
    ],
    answer: 11,
  },
  {
    input: [
      [1, 0, 1, 1, 1],
      [1, 0, 1, 0, 1],
      [1, 0, 1, 1, 1],
      [1, 1, 1, 0, 0],
      [0, 0, 0, 0, 1],
    ],
    answer: -1,
  },
];

export const shortestRouteInGameMap = {
  solution,
  testCases,
};
