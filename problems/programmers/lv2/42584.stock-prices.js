/**
 * @param {number[]} prices
 * @returns {number[]}
 */
const solution = (prices) => {
  const SIZE = prices.length;
  /** @type {number[]} */
  const answer = new Array(SIZE).fill(0);

  for (let idx = 0; idx < SIZE; idx++) {
    const price = prices[idx];
    let period = 0;
    for (let next = idx + 1; next < SIZE; next++) {
      const nextPrice = prices[next];
      period++;
      if (nextPrice < price) break;
    }
    answer[idx] = period;
  }

  return answer;
};

const testCases = [{ input: [1, 2, 3, 2, 3], answer: [4, 3, 1, 1, 0] }];

export const stockPrices = {
  solution,
  testCases,
};
