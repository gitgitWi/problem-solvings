/**
 * lv2. 1844. 게임 맵 최단거리
 * - https://school.programmers.co.kr/learn/courses/30/lessons/1844
 *
 * - 효율성 통과 때문에 헤맸음..
 *   - 처음에 BFS가 아닌 백트래킹 방식으로 접근했던게 문제였고,
 *   - BFS로 방문 표시만 하면서 목표지점 도달할때 shortest 업데이트하는 방식에선 왜 계속 시간초과가 났는지는 좀더 고민해봐야할 듯
 *
 * @param {number[][]} maps, 0은 벽, 1은 길
 * @returns {number}
 */
const solution = (maps) => {
  const [ROW_LIMIT, COL_LIMIT] = [maps.length, maps[0].length];
  const WAYS = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  /**
   * @type {number[][]} [row, col]
   */
  const queue = [];
  queue.push([0, 0]);

  while (queue.length > 0) {
    const cur = queue.shift();
    if (!cur) break;

    const [row, col] = cur;
    if (row === ROW_LIMIT - 1 && col === COL_LIMIT - 1) {
      break;
    }

    const nextDist = maps[row][col] + 1;

    // next path
    WAYS.map(([dr, dc]) => [row + dr, col + dc])
      .filter(([nextRow, nextCol]) => maps[nextRow]?.[nextCol] === 1)
      .forEach(([nextRow, nextCol]) => {
        maps[nextRow][nextCol] = nextDist;
        queue.push([nextRow, nextCol]);
      });
  }

  const distance = maps[ROW_LIMIT - 1][COL_LIMIT - 1];
  return distance === 1 ? -1 : distance;
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
