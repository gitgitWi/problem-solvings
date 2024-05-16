import { describe, it, expect } from 'vitest';

/**
 * lv1. 숫자 문자열과 영단어
 *
 * @see {@link https://school.programmers.co.kr/learn/courses/30/lessons/81301}
 *
 * @param {string} s
 */
function solution(s) {
  const numberWords = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  return Number(
    numberWords.reduce(
      (answer, word, num) => answer.replace(new RegExp(word, 'gi'), `${num}`),
      s,
    ),
  );
}

describe('숫자 문자열과 영단어', () => {
  it(' ', () => {
    expect(solution('one4seveneight')).toEqual(1478);
    expect(solution('23four5six7')).toEqual(234567);
    expect(solution('2three45sixseven')).toEqual(234567);
    expect(solution('123')).toEqual(123);
  });
});
