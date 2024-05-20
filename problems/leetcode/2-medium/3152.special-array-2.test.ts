import { describe, it, expect } from 'vitest';
import data from './3152.data.json';

/**
 * 3152. Special Array 2
 * @see {@link https://leetcode.com/problems/special-array-ii/description/}
 *
 * @todo Time Limit Exceeded - 535 / 536 testcases passed
 */
function isArraySpecial(nums: number[], queries: number[][]): boolean[] {
  const len = nums.length;
  if (len === 1) return queries.map((_) => true);

  const cache: boolean[] = [];
  for (let i = 1; i < len; i++) {
    const [prev, cur] = [nums[i - 1], nums[i]];
    cache[i] = prev !== cur && prev % 2 !== cur % 2;
  }

  return queries.map(([from, to]) => {
    if (from === to) return true;

    for (let i = from + 1; i < to + 1; i++) {
      if (cache[i] !== true) return false;
    }
    return true;
  });
}

describe('3151. S', () => {
  it('tc1', () => {
    expect(isArraySpecial([3, 4, 1, 2, 6], [[0, 4]])).toEqual([false]);
  });

  it('tc2', () => {
    expect(
      isArraySpecial(
        [4, 3, 1, 6],
        [
          [0, 2],
          [2, 3],
        ],
      ),
    ).toEqual([false, true]);
  });

  it('tc3', () => {
    expect(isArraySpecial(data.tc3.nums, data.tc3.queries)).toEqual(
      data.tc3.answer,
    );
  });
});
