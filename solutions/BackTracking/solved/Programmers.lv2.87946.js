// -- solution

/**
 * 순열? DP? Back-tracking?
 * @param {number} k, 1~5_000, 현재 상태
 * @param {[number, number][]} dungeons, length: 1~8, [입장시 필요, 퇴장시 필요]
 * @returns number, 최대로 많이 방문할 수 있는 수
 */
function solution(k, dungeons) {
  const dSize = dungeons.length;
  let maxVisited = 0;

  /**
   * 특정 회차에서
   * @param {number} curState
   * @param {number} curOut
   * @param {Set<number>} visited
   * @returns {void}
   */
  function _helper(curState = k, curOut, visited = new Set([])) {
    const visitedNums = visited.size;

    if (visitedNums === dSize) {
      if (visitedNums > maxVisited) maxVisited = visitedNums;
      return;
    }

    const nextState = curState - curOut;
    dungeons.forEach(([nextIn, nextOut], nextIdx) => {
      if (visited.has(nextIdx)) return;
      if (nextState >= nextIn)
        return _helper(nextState, nextOut, new Set([...visited, nextIdx]));
      if (visitedNums > maxVisited) maxVisited = visitedNums;
    });
  }

  dungeons.forEach(([curIn, curOut], curIdx) => {
    if (k >= curIn) _helper(k, curOut, new Set([curIdx]));
  });

  return maxVisited;
}

// -- cases

/**
 * @type {[number, [number, number][], number][]}
 */
const qq = [
  [
    80,
    [
      [80, 20],
      [50, 40],
      [30, 10],
    ],
    3,
  ],
];

const timer = `Solution Timer`;

qq.forEach(([k, d, ans]) => {
  console.time(timer);

  const answer = solution(k, d);

  console.timeEnd(timer);

  console.log({
    answer,
    is: answer === ans,
  });
});

export {};
