function spiralOrder(matrix: number[][]): number[] {
  const ways = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  const orders: number[] = [];
  const totalNums = matrix.length * matrix[0].length;
  let currentPos = [0, -1];
  let currentWayIdx = 0;

  while (orders.length < totalNums) {
    let [prevX, prevY] = currentPos;
    let [dx, dy] = ways[currentWayIdx];
    if (!matrix[prevX + dx] || !matrix[prevX + dx][prevY + dy]) {
      currentWayIdx = (currentWayIdx + 1) % 4;
      [dx, dy] = ways[currentWayIdx];
    }
    const [curX, curY] = [prevX + dx, prevY + dy];

    orders.push(matrix[curX][curY]);
    currentPos = [curX, curY];
    matrix[curX][curY] = 0;
  }

  return orders;
}

[
  {
    input: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    output: [1, 2, 3, 6, 9, 8, 7, 4, 5],
  },
  {
    input: [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
    ],
    output: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7],
  },
].forEach(({ input, output }) => {
  const sol = spiralOrder(input);

  console.log({
    sol,
    output,
    is: JSON.stringify(sol) === JSON.stringify(output),
  });
});
