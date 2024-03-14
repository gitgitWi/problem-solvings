/**
 * @fileoverview
 * lv2. 70129. 이진 변환 반복하기
 * - https://school.programmers.co.kr/learn/courses/30/lessons/70129
 */
test('70129. 이진 변환 반복하기', () => {
  expect(solution('110010101001')).toEqual([3, 8]);
  expect(solution('01110')).toEqual([3, 3]);
  expect(solution('1111111')).toEqual([4, 1]);
});

function solution(s: string): number[] {
  let cycle = 0;
  let zeros = 0;

  let curString = s;
  while (curString !== '1') {
    const prevLength = curString.length;

    cycle += 1;

    const zeroRemoved = curString.replace(/0/g, '');
    const nextLength = zeroRemoved.length;
    zeros += prevLength - nextLength;

    if (zeroRemoved === '1') {
      break;
    }

    curString = nextLength.toString(2);
  }

  return [cycle, zeros];
}

export {};
