/**
 * @file
 * LeetCode 3046. Split the Array
 * - Easy
 * @see {@link https://leetcode.com/problems/split-the-array/description/}
 *
 * - 더 쉽게 풀 수 있는데 복잡하게 푼 듯?
 */

function isPossibleToSplit(nums: number[]): boolean {
  const firstSet = new Set();
  const secondSet = new Set();

  for (const num of nums.sort()) {
    const firstSetSize = firstSet.size;
    const secondSetSize = secondSet.size;

    if (firstSet.has(num) && secondSet.has(num)) {
      return false;
    }

    if (firstSet.has(num)) {
      secondSet.add(num);
    } else if (secondSet.has(num)) {
      firstSet.add(num);
    } else {
      firstSetSize > secondSetSize ? secondSet.add(num) : firstSet.add(num);
    }
  }

  return firstSet.size === secondSet.size && firstSet.size === nums.length / 2;
}

export const splitTheArray = {
  solution: isPossibleToSplit,
  testCases: [
    { input: [1, 1, 2, 2, 3, 4], answer: true },
    {
      input: [8, 9, 8, 5, 9, 3, 3, 1, 2, 1],
      answer: true,
    },
  ],
};
