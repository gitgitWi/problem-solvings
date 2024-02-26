const { abs } = Math;

/**
 * 치킨 배달
 * - {@link https://www.acmicpc.net/problem/15686}
 *
 * @param {string[]} lines
 * @returns {number}
 *
 */
const solution = (lines) => {
  const parseLines = () => {
    const [N, idealChickens] = lines[0].split(' ').map(Number);
    const city = lines.slice(1).map((line) => line.split(' ').map(Number));

    const ids = Array.from(Array(N).fill(0).keys());
    const chickens = [];
    const houses = [];
    for (const rowId of ids) {
      for (const colId of ids) {
        const cur = city[rowId][colId];
        if (cur === 0) continue;

        const curPos = [rowId, colId];
        if (cur === 1) {
          houses.push(curPos);
        } else if (cur === 2) {
          chickens.push(curPos);
        }
      }
    }

    return {
      idealChickens,
      chickens,
      houses,
    };
  };

  /**
   * @param {number[]} a
   * @param {number[]} b
   * @returns {number}
   */
  const getChickDistance = ([rowA, colA], [rowB, colB]) =>
    abs(rowB - rowA) + abs(colB - colA);

  /**
   * @param {number[]} target
   * @param {number} choiceNum
   */
  const combination = (target, choiceNum) => {
    if (target.length === choiceNum) return [target.slice()];

    /** @type {number[][]} */
    const chosen = [];

    /** @type {number[][]} */
    const queue = target
      .slice(0, target.length - choiceNum + 1)
      .map((start) => [start]);

    while (queue.length > 0) {
      const cur = queue.shift();
      if (!cur) continue;
      if (cur.length === choiceNum) {
        chosen.push(cur);
        continue;
      }

      const [last] = cur.slice(-1);
      let next = last + 1;
      while (true) {
        if (next >= target.length) break;
        queue.push(cur.concat(next));
        next += 1;
      }
    }

    return chosen;
  };

  const { idealChickens, chickens, houses } = parseLines();

  /** @type {number[][]} house - chick */
  const chickDistCache = [];
  for (let houseId = 0; houseId < houses.length; houseId++) {
    chickDistCache[houseId] = [];
    for (let chickId = 0; chickId < chickens.length; chickId++) {
      chickDistCache[houseId].push(
        getChickDistance(houses[houseId], chickens[chickId])
      );
    }
  }

  const chosenChicks = combination(
    Array.from(chickens.keys()).map(Number),
    idealChickens
  );
  const houseIds = Object.keys(chickDistCache).map(Number);
  let shortest = Number.MAX_SAFE_INTEGER;
  for (const chosen of chosenChicks) {
    let _sum = 0;
    for (const houseId of houseIds) {
      const short = Math.min(
        ...chickDistCache[houseId].filter((_, chickId) =>
          chosen.includes(chickId)
        )
      );
      _sum += short;
    }

    if (_sum < shortest) shortest = _sum;
  }

  return shortest;
};

const main = () => {
  const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n');

  console.log(solution(input));

  [
    {
      inputs: [
        '5 3',
        '0 0 1 0 0',
        '0 0 2 0 1',
        '0 1 2 0 0',
        '0 0 1 0 0',
        '0 0 0 0 2',
      ],
      answer: 5,
    },
    {
      inputs: [
        '5 2',
        '0 2 0 1 0',
        '1 0 1 0 0',
        '0 0 0 0 0',
        '2 0 0 1 1',
        '2 2 0 1 2',
      ],
      answer: 10,
    },
    {
      inputs: [
        '5 1',
        '1 2 0 0 0',
        '1 2 0 0 0',
        '1 2 0 0 0',
        '1 2 0 0 0',
        '1 2 0 0 0',
      ],
      answer: 11,
    },
    {
      inputs: [
        '5 1',
        '1 2 0 2 1',
        '1 2 0 2 1',
        '1 2 0 2 1',
        '1 2 0 2 1',
        '1 2 0 2 1',
      ],
      answer: 32,
    },
  ].forEach(({ inputs, answer }) => {
    const ans = solution(inputs);
    console.log(ans, ans === answer);
    console.log(`\n`);
  });
};

main();

export {};
