/**
 * @fileoverview
 * 1282. Group the People Given the Group Size They Belong To
 * - https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to
 */

test('1282. Group the People Given the Group Size They Belong To', () => {
  expect(groupThePeople([3, 3, 3, 3, 3, 1, 3])).toEqual([
    [5],
    [0, 1, 2],
    [3, 4, 6],
  ]);
  expect(groupThePeople([2, 1, 3, 3, 3, 2])).toEqual([[1], [0, 5], [2, 3, 4]]);
});

function groupThePeople(groupSizes: number[]): number[][] {
  const groupMap = new Map<number, number[]>();
  groupSizes.forEach((groupSize, i) => {
    groupMap.has(groupSize)
      ? groupMap.get(groupSize)!.push(i)
      : groupMap.set(groupSize, [i]);
  });

  return Array.from(groupMap.entries())
    .sort((a, b) => a[0] - b[0])
    .reduce((acc, [size, people]) => {
      for (let i = 0; i < people.length; i += size) {
        acc.push(people.slice(i, i + size));
      }
      return acc;
    }, [] as number[][]);
}

export {};
