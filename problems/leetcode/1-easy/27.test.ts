import { describe, it, expect } from 'vitest';

/**
 * Easy. 27. Remove Element
 *
 * @see {@link https://leetcode.com/problems/remove-element/?envType=study-plan-v2&envId=top-interview-150}
 */
function removeElement(nums: number[], val: number): number {
  const valIndex = nums
    .sort((a, b) =>
      (a === val && b === val) || (a !== val && b === val) ? -1 : 1,
    )
    .findIndex((num) => num === val);
  return valIndex === -1 ? nums.length : valIndex;
}

describe('27. Remove Element', () => {
  it('tc1 ', () => {
    expect(removeElement([3, 2, 2, 3], 3)).toBe(2);
  });

  it('tc2 ', () => {
    expect(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)).toBe(5);
  });

  it('tc3 ', () => {
    expect(removeElement([2], 3)).toBe(1);
  });
});
