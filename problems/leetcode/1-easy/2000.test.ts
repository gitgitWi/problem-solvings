import { describe, it, expect } from 'vitest';

/**
 * Easy. 2000. Reverse Prefix of Word
 * @see {@link https://leetcode.com/problems/reverse-prefix-of-word/?envType=daily-question&envId=2024-05-01}
 */
function reversePrefix(word: string, ch: string): string {
  const chIdx = word.indexOf(ch);
  if (chIdx === -1) return word;

  return Array.from(word.slice(0, chIdx + 1))
    .reverse()
    .join('')
    .concat(word.slice(chIdx + 1));
}

describe('2000. Reverse Prefix of Word', () => {
  it('tc1', () => {
    expect(reversePrefix('abcdefd', 'd')).toBe('dcbaefd');
  });
  it('tc2', () => {
    expect(reversePrefix('xyxzxe', 'z')).toBe('zxyxxe');
  });
  it('tc3', () => {
    expect(reversePrefix('abcd', 'z')).toBe('abcd');
  });
});
