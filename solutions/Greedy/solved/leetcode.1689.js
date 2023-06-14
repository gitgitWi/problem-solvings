/**
 * 1689. Partitioning Into Minimum Number Of Deci-Binary Numbers
 * - {@link https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers}
 * @param {string} n
 * @return {number}
 */
const minPartitions = (n) => {
  let maxNum = 0;

  n.split("")
    .map(Number)
    .forEach((num) => {
      if (num > maxNum) maxNum = num;
    });

  return maxNum;
};
