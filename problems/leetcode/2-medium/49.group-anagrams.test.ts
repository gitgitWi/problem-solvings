/**
 * @fileoverview
 * Medium. 49. Group Anagrams
 * - https://leetcode.com/problems/group-anagrams
 */
test('49. Group Anagrams', () => {
  expect(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])).toEqual([
    ['bat'],
    ['nat', 'tan'],
    ['ate', 'eat', 'tea'],
  ]);
  expect(groupAnagrams([''])).toEqual([['']]);
  expect(groupAnagrams(['a'])).toEqual([['a']]);
});

function groupAnagrams(strs: string[]): string[][] {
  if (strs.length === 1) return [strs];

  return Array.from(
    strs
      .reduce((acc, cur) => {
        const key = cur.split('').sort().join('');
        acc.has(key) ? acc.get(key)!.push(cur) : acc.set(key, [cur]);
        return acc;
      }, new Map<string, string[]>())
      .values(),
  );
}

export {};
