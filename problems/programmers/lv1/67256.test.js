import { describe, it, expect } from 'vitest';

/**
 * lv1. 키패드 누르기
 *
 * @see {@link https://school.programmers.co.kr/learn/courses/30/lessons/67256?language=javascript}
 *
 * @param {number[]} numbers
 * @param {'left' | 'right'} hand
 */
function solution(numbers, hand) {
  const { abs } = Math;
  const LEFT_HAND = 'L';
  const RIGHT_HAND = 'R';
  const LEFT_ONLY = new Set([1, 4, 7]);
  const RIGHT_ONLY = new Set([3, 6, 9]);
  const IS_LEFT_USER = hand === 'left';
  const POSITIONS = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ['*', 0, '#'],
  ].reduce((acc, row, rowId) => {
    row.forEach((val, colId) => {
      acc.set(val, [rowId, colId]);
    });
    return acc;
  }, new Map());

  return numbers.reduce(
    /**
     * @param {{answer: string, prevLeft: number | '*' | '#', prevRight: number | '*' | '#'}} acc
     * @param {number} num
     */
    (acc, num) => {
      if (LEFT_ONLY.has(num)) {
        acc.answer = acc.answer.concat(LEFT_HAND);
        acc.prevLeft = num;
        return acc;
      }

      if (RIGHT_ONLY.has(num)) {
        acc.answer = acc.answer.concat(RIGHT_HAND);
        acc.prevRight = num;
        return acc;
      }

      const [numRow, numCol] = POSITIONS.get(num);
      const [leftRow, leftCol] = POSITIONS.get(acc.prevLeft);
      const [rightRow, rightCol] = POSITIONS.get(acc.prevRight);

      const leftDist = abs(numRow - leftRow) + abs(numCol - leftCol);
      const rightDist = abs(numRow - rightRow) + abs(numCol - rightCol);

      const diff = leftDist - rightDist;
      if (diff === 0) {
        acc.answer = acc.answer.concat(IS_LEFT_USER ? LEFT_HAND : RIGHT_HAND);
        IS_LEFT_USER ? (acc.prevLeft = num) : (acc.prevRight = num);
        return acc;
      }

      if (diff > 0) {
        acc.answer = acc.answer.concat(RIGHT_HAND);
        acc.prevRight = num;
        return acc;
      }

      acc.answer = acc.answer.concat(LEFT_HAND);
      acc.prevLeft = num;
      return acc;
    },

    { answer: '', prevLeft: '*', prevRight: '#' },
  ).answer;
}

describe('lv1. 키패드 누르기', () => {
  it('[1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]', () => {
    expect(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right')).toEqual(
      'LRLLLRLLRRL',
    );
  });

  it('[7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2]', () => {
    expect(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left')).toEqual(
      'LRLLRRLLLRR',
    );
  });

  it('[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]', () => {
    expect(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 'right')).toEqual(
      'LLRLLRLLRL',
    );
  });
});
