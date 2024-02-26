/**
 * @todo
 * - 좀더 효율적으로 푸는 방법으로 다시 풀어보기
 */
function findBall(grid: (1 | -1)[][]): number[] {
  const maxX = grid[0].length;
  const maxY = grid.length;

  const getNextPosition = (
    [curX, curY]: [number, number],
    [curXTo, curYTo] = [1, 0],
    currentDiagonal = grid[curY][curX]
  ): number => {
    const [nextYTo, nextXTo] = [
      curXTo * currentDiagonal,
      curYTo * currentDiagonal,
    ];
    const [nextX, nextY] = [curX + nextXTo, curY + nextYTo];

    /** v-shape */
    if (curYTo === 0 && nextYTo === -1) return -1;
    if (nextY === maxY && nextYTo === 1) return nextX;
    if (nextX < 0 || nextY < 0 || nextX >= maxX || nextY >= maxY) return -1;

    return getNextPosition([nextX, nextY], [nextXTo, nextYTo]);
  };

  return [...Array(grid[0].length).fill(undefined).keys()].map((startX) =>
    getNextPosition([startX, 0], [0, 1])
  );
}

[
  {
    input: [
      [1, 1, 1, -1, -1],
      [1, 1, 1, -1, -1],
      [-1, -1, -1, 1, 1],
      [1, 1, 1, 1, -1],
      [-1, -1, -1, -1, -1],
    ],
    output: [1, -1, -1, -1, -1],
  },
  {
    input: [[-1]],
    output: [-1],
  },
  {
    input: [
      [1, 1, 1, 1, 1, 1],
      [-1, -1, -1, -1, -1, -1],
      [1, 1, 1, 1, 1, 1],
      [-1, -1, -1, -1, -1, -1],
    ],
    output: [0, 1, 2, 3, 4, -1],
  },
  {
    input: [
      [
        1, -1, -1, 1, -1, 1, 1, 1, 1, 1, -1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1,
        -1, -1, 1, -1, 1, -1, 1, -1, -1, -1, -1, 1, -1, 1, 1, -1, -1, -1, -1,
        -1, 1,
      ],
      [
        -1, 1, 1, 1, -1, -1, -1, -1, 1, 1, 1, -1, -1, -1, 1, -1, -1, 1, 1, 1, 1,
        1, 1, -1, 1, -1, -1, -1, -1, -1, 1, -1, 1, -1, -1, -1, -1, 1, 1, -1, 1,
        1,
      ],
      [
        1, -1, -1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, -1, 1, -1,
        -1, 1, -1, 1, -1, 1, -1, -1, 1, -1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1,
        -1,
      ],
    ],
    output: [
      -1, -1, 1, -1, -1, -1, -1, 10, 11, -1, -1, 12, 13, -1, -1, -1, -1, -1, 17,
      -1, -1, 20, -1, -1, -1, -1, -1, -1, -1, -1, 27, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1,
    ],
  },
].forEach(({ input, output }) => {
  const sol = findBall(input as (1 | -1)[][]);
  console.log(
    input
      .map((row) =>
        "|"
          .concat(row.map((col) => (col === 1 ? "↘️" : "↙️")).join("|"))
          .concat("|")
      )
      .join("\n")
  );

  console.log({
    sol,
    output,
    outputLength: output.length,
    is: JSON.stringify(sol) === JSON.stringify(output),
  });
});

export {};
