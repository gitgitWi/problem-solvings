import { describe, it, expect } from 'vitest';

/**
 * lv1. 신규 아이디 추천
 * @see {@link https://school.programmers.co.kr/learn/courses/30/lessons/72410}
 *
 * @param {string} newId
 * @returns {string}
 */

function solution(newId) {
  const level6 = (
    newId
      .toLowerCase()
      .replace(/[^a-z0-9-_.]/g, '')
      .replace(/\.{2,}/g, '.')
      .replace(/^\./, '')
      .replace(/\.$/, '') || 'a'
  )
    .slice(0, 15)
    .replace(/\.$/, '');

  return level6.padEnd(3, level6[level6.length - 1]);
}

describe('신규 아이디 추천', () => {
  it('ex1.', () => {
    expect(solution('...!@BaT#*..y.abcdefghijklm')).toEqual('bat.y.abcdefghi');
  });
  it('ex2.', () => {
    expect(solution('z-+.^.')).toEqual('z--');
  });
  it('ex3.', () => {
    expect(solution('=.=')).toEqual('aaa');
  });
  it('ex4.', () => {
    expect(solution('123_.def')).toEqual('123_.def');
  });
  it('ex5.', () => {
    expect(solution('abcdefghijklmn.p')).toEqual('abcdefghijklmn');
  });
});
