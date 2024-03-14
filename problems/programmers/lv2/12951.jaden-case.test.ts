/**
 * @fileoverview
 * lv2. 12951. JadenCase 문자열 만들기
 * - https://school.programmers.co.kr/learn/courses/30/lessons/12951
 */
test('12951. JadenCase 문자열 만들기', () => {
  expect(solution('3people unFollowed me')).toBe('3people Unfollowed Me');
  expect(solution('for the last week')).toBe('For The Last Week');
  expect(solution('s   a')).toBe('S   A');
});

function solution(s: string): string {
  const length = s.length;
  if (length === 1) return s.toUpperCase();

  let answer = s[0].toUpperCase();
  for (let i = 1; i < length; i++) {
    answer += s[i - 1] !== ' ' ? s[i].toLowerCase() : s[i].toUpperCase();
  }
  return answer;
}

export {};
