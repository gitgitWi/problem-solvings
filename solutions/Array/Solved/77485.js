// @ts-check

/**
 * 77485. 행렬 테두리 회전하기
 * @see https://programmers.co.kr/learn/courses/30/lessons/77485?language=javascript
 * - 행렬 회전시 회전 방향의 반대 방향부터 구하는 것이 계산하기 편함
 *
 * @param {number} rows
 * @param {number} columns
 * @param {number[][]} queries
 * @returns {number[]}
 */
function solution(rows, columns, queries) {
  const array = Array.from({ length: rows }, (_, rowIdx) =>
    Array.from(
      { length: columns },
      (_, colIdx) => colIdx + 1 + rowIdx * columns
    )
  );

  /**
   *
   * @param {number[]} param0
   * @returns {number[]}
   */
  const rotateArray = ([topRow, leftCol, bottomRow, rightCol]) => {
    /** @type {number[]} */
    const targets = [];
    const startNum = array[topRow][leftCol];

    // 왼쪽변
    for (let row = topRow; row < bottomRow; row++) {
      targets.push(array[row][leftCol]);
      array[row][leftCol] = array[row + 1][leftCol];
    }

    // 아랫변
    for (let col = leftCol; col < rightCol; col++) {
      targets.push(array[bottomRow][col]);
      array[bottomRow][col] = array[bottomRow][col + 1];
    }

    // 오른쪽변
    for (let row = bottomRow; row > topRow; row--) {
      targets.push(array[row][rightCol]);
      array[row][rightCol] = array[row - 1][rightCol];
    }

    // 윗변
    for (let col = rightCol; col > leftCol; col--) {
      targets.push(array[topRow][col]);
      array[topRow][col] = array[topRow][col - 1];
    }

    array[topRow][leftCol + 1] = startNum;

    return targets;
  };

  /** @type { number[]} */
  const answers = [];
  for (const query of queries) {
    const targets = rotateArray(query.map((_) => _ - 1));
    answers.push(Math.min(...targets));
  }

  return answers;
}

[
  [
    6,
    6,
    [
      [2, 2, 5, 4],
      [3, 3, 6, 6],
      [5, 1, 6, 3],
    ],
    [8, 10, 25],
  ],
  [
    3,
    3,
    [
      [1, 1, 2, 2],
      [1, 2, 2, 3],
      [2, 1, 3, 2],
      [2, 2, 3, 3],
    ],
    [1, 1, 5, 3],
  ],
  [100, 97, [[1, 1, 100, 97]], [1]],
].forEach(([rows, columns, queries, a]) => {
  // @ts-ignore
  const ans = solution(rows, columns, queries);
  console.log(ans);
  console.log(JSON.stringify(ans) === JSON.stringify(a));
});

export {};
