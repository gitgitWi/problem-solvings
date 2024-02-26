/*
 * @lc app=leetcode id=48 lang=typescript
 *
 * [48] Rotate Image
 */

// @lc code=start
/**
 * Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]) {
  const n = matrix.length;
  const swap = ([ay, ax]: [number, number], [by, bx]: [number, number]) =>
    ([matrix[by][bx], matrix[ay][ax]] = [matrix[ay][ax], matrix[by][bx]]);

  matrix.reverse();

  for (let cy = 0; cy < n; cy++) {
    for (let cx = cy; cx < n; cx++) swap([cy, cx], [cx, cy]);
  }

  return;
}

// @lc code=end

[
  [
    // q
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    // a
    [
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ],
  ],
  [
    [
      [5, 1, 9, 11],
      [2, 4, 8, 10],
      [13, 3, 6, 7],
      [15, 14, 12, 16],
    ],
    [
      [15, 13, 2, 5],
      [14, 3, 4, 1],
      [12, 6, 8, 9],
      [16, 7, 10, 11],
    ],
  ],
].forEach(([q, a]) => {
  const ans = rotate(q);
  // console.log(ans);
  // console.assert(JSON.stringify(ans) === JSON.stringify(a));
});
