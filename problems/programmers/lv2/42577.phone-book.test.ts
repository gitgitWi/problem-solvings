/**
 * @fileoverview
 * lv2. 42577. 전화번호 목록
 * - https://school.programmers.co.kr/learn/courses/30/lessons/42577?language=javascript
 *
 * hash로 분류는 되어있는데, hash로 안풀어도 효율성 통과..
 * 시간초과 조건이 이상한거 아닌가?
 */
test('42577. 전화번호 목록', () => {
  //
  expect(true).toBe(true);
  expect(solution(['119', '97674223', '1195524421'])).toBe(false);
  expect(solution(['123', '456', '789'])).toBe(true);
  expect(solution(['12', '123', '1235', '567', '88'])).toBe(false);
});

function solution(phoneBook: string[]): boolean {
  phoneBook.sort((a, b) => a.localeCompare(b));
  for (let id = 1; id < phoneBook.length; id++) {
    if (phoneBook[id].startsWith(phoneBook[id - 1])) return false;
  }
  return true;
}

export {};
