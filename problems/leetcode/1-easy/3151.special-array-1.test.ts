import { describe, it, expect } from 'vitest';

/**
 * 3151. Special Array I
 * @see {@link https://leetcode.com/problems/special-array-i/description/}
 *
 */
function isArraySpecial(nums: number[]): boolean {
  const len = nums.length;
  if (len === 1) return true;

  for (let i = 1; i < len; i++) {
    const [prev, cur] = [nums[i - 1], nums[i]];
    if (prev === cur || prev % 2 === cur % 2) return false;
  }

  return true;
}

describe('3151. S', () => {
  it('[1]', () => {
    expect(isArraySpecial([1])).toEqual(true);
  });

  it('[2, 1, 4]', () => {
    expect(isArraySpecial([2, 1, 4])).toEqual(true);
  });

  it('[4, 3, 1, 6]', () => {
    expect(isArraySpecial([4, 3, 1, 6])).toEqual(false);
  });
});
