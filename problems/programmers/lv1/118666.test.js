import { describe, it, expect } from 'vitest';

/**
 * lv1. 성격 유형 검사하기
 *
 * @see {@link https://school.programmers.co.kr/learn/courses/30/lessons/118666}
 *
 * @param {string[]} survey
 * @param {number[]} choices
 * @returns {string}
 */
function solution(survey, choices) {
  const typeKeys = ['RT', 'CF', 'JM', 'AN'];
  const typeKeySet = new Set(typeKeys);

  return survey
    .reduce(
      (acc, select, idx) => {
        const alphaSorted = typeKeySet.has(select);
        const adjustedTypeKey = alphaSorted
          ? select
          : Array.from(select).reverse().join('');

        const typeId = typeKeys.findIndex((key) => key === adjustedTypeKey);
        const choice = choices[idx];
        acc[typeId] += (alphaSorted ? 8 - choice : choice) - 4;
        return acc;
      },
      [0, 0, 0, 0],
    )
    .reduce((acc, score, idx) => {
      const typeKey = typeKeys[idx];
      return acc.concat(score >= 0 ? typeKey[0] : typeKey[1]);
    }, '');
}

describe('118666. 성격 유형 검사하기', () => {
  it('ex1.', () => {
    expect(solution(['AN', 'CF', 'MJ', 'RT', 'NA'], [5, 3, 2, 7, 5])).toEqual(
      'TCMA',
    );
  });

  it('ex2.', () => {
    expect(solution(['TR', 'RT', 'TR'], [7, 1, 3])).toEqual('RCJA');
  });

  // it('', () => {
  //   expect(solution([], [])).toEqual('');
  // });
});
