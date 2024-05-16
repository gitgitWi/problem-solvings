import { describe, it, expect } from 'vitest';

/**
 * Easy. 26. Remove Duplicates from Sorted Array
 * @see {@link https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150}
 */
function removeDuplicates(nums: number[]): number {
  const LEN = nums.length;

  let answer = 1;
  for (let i = 1; i < LEN; i++) {
    if (nums[i] === nums[i - 1]) continue;
    nums[answer++] = nums[i];
  }

  return answer;
}

describe('26. Remove Duplicates from Sorted Array', () => {
  it('tc1 ', () => {
    expect(removeDuplicates([1, 1, 2])).toBe(2);
  });

  it('tc2 ', () => {
    expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toBe(5);
  });
});
