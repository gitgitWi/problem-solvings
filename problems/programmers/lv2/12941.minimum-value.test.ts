/**
 * @fileoverview
 * lv2. 12941. 최솟값 만들기
 * - https://school.programmers.co.kr/learn/courses/30/lessons/12941
 */
test('12941. 최솟값 만들기', () => {
  expect(solution([1, 4, 2], [5, 4, 4])).toBe(29);
  expect(solution([1, 2], [3, 4])).toBe(10);
});

function solution(arrayA: number[], arrayB: number[]): number {
  const sortedA = arrayA.sort((a, b) => a - b);
  const sortedB = arrayB.sort((a, b) => b - a);
  return sortedA
    .map((valA, index) => valA * sortedB[index])
    .reduce((acc, cur) => acc + cur, 0);
}

export {};
