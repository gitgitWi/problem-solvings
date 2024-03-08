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

  /**
   * @param {number} row
   * @param {number} col
   * @param {number} length
   * @returns
   */
  const traverse = (row, col, length) => {
    // 방문 처리
    maps[row][col] = 0;

    // 상대방 진영 도달시 shortest 업데이트
    if (row === rowLimit - 1 && col === colLimit - 1) {
      if (length < shortest) shortest = length;
      return;
    }

    const nextBottom = row + 1;
    const nextTop = row - 1;
    const nextRight = col + 1;
    const nextLeft = col - 1;
    const nextLength = length + 1;

    // 상하좌우 탐색
    if (nextBottom < rowLimit && maps[nextBottom][col] === 1) {
      traverse(nextBottom, col, nextLength);
      // 방문처리 취소
      maps[nextBottom][col] = 1;
    }
    if (nextTop >= 0 && maps[nextTop][col] === 1) {
      traverse(nextTop, col, nextLength);
      // 방문처리 취소
      maps[nextTop][col] = 1;
    }
    if (nextRight < colLimit && maps[row][nextRight] === 1) {
      traverse(row, nextRight, nextLength);
      // 방문처리 취소
      maps[row][nextRight] = 1;
    }
    if (nextLeft >= 0 && maps[row][nextLeft] === 1) {
      traverse(row, nextLeft, nextLength);
      // 방문처리 취소
      maps[row][nextLeft] = 1;
    }
  };

  traverse(0, 0, 1);

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
