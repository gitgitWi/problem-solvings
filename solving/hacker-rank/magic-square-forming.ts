function formingMagicSquare(s: number[][]): number {
  const N = s.length;
  const SUM = Array.from({ length: N * N }, (_, i) => i + 1).reduce(
    (sum, cur) => sum + cur
  );
  const SUB_SUM = SUM / N;
  const { abs } = Math;

  const getColSum = (colIdx: number) => {
    let sum = 0;
    for (let rowIdx = 0; rowIdx < N; rowIdx++) sum += s[colIdx][rowIdx];
    return sum;
  };

  const getRowSum = (rowIdx: number) => {
    let sum = 0;
    for (let colIdx = 0; colIdx < N; colIdx++) sum += s[colIdx][rowIdx];
    return sum;
  };

  const getDiagSum = (toRight: boolean) => {
    let sum = 0;
    for (let i = 0; i < N; i++) {
      sum += s[toRight ? i : N - 1 - i][i];
    }
    return sum;
  };

  let cost = 0;

  return cost;
}

(
  [
    [
      [
        [4, 9, 2],
        [3, 5, 7],
        [8, 1, 5],
      ],
      1,
    ],
    [
      [
        [4, 8, 2],
        [4, 5, 7],
        [6, 1, 6],
      ],
      4,
    ],
  ] as [number[][], number][]
).forEach(([q, s]) => {
  const ans = formingMagicSquare(q);
  console.log(ans, ans === s);
});
