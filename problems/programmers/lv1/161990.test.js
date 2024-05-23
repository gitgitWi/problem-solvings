import { describe, it, expect } from 'vitest';

/**
 * lv1. 바탕화면 정리
 * @see {@link https://school.programmers.co.kr/learn/courses/30/lessons/161990}
 *
 * @param {string[]} wallpaper
 * @returns {number[]}
 */
function solution(wallpaper) {
  const EMPTY = '.';

  return wallpaper
    .map((row) => Array.from(row))
    .reduce(
      (answer, row, rowId) => {
        row.forEach((val, colId) => {
          if (val === EMPTY) return;
          const [startRow, startCol, endRow, endCol] = answer;
          if (rowId < startRow) answer[0] = rowId;
          if (rowId > endRow) answer[2] = rowId;
          if (colId < startCol) answer[1] = colId;
          if (colId > endCol) answer[3] = colId;
        });
        return answer;
      },
      [51, 51, -1, -1],
    )
    .map((val, id) => (id > 1 ? val + 1 : val));
}

describe('', () => {
  it('tc1', () => {
    expect(solution(['.#...', '..#..', '...#.'])).toEqual([0, 1, 3, 4]);
  });

  it('tc2', () => {
    expect(
      solution([
        '..........',
        '.....#....',
        '......##..',
        '...##.....',
        '....#.....',
      ]),
    ).toEqual([1, 3, 5, 8]);
  });

  it('tc3', () => {
    expect(
      solution([
        '.##...##.',
        '#..#.#..#',
        '#...#...#',
        '.#.....#.',
        '..#...#..',
        '...#.#...',
        '....#....',
      ]),
    ).toEqual([0, 0, 7, 9]);
  });

  it('tc4', () => {
    expect(solution(['..', '#.'])).toEqual([1, 0, 2, 1]);
  });
});
