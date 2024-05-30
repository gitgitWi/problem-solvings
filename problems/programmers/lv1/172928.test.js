import { describe, it, expect } from 'vitest';

/**
 * lv1. 172928. 공원 산책
 * @see {@link https://school.programmers.co.kr/learn/courses/30/lessons/172928}
 *
 * @param {string[]} park
 * @param {string[]} routes
 * @returns {number[]}
 */
function solution(park, routes) {
  const START = 'S';
  const OBSTACLE = 'X';

  const WAYS = {
    N: [-1, 0],
    S: [1, 0],
    W: [0, -1],
    E: [0, 1],
  };

  const table = park.map((row) => Array.from(row));
  let startPos = [0, 0];
  table.forEach((row, rowId) => {
    row.forEach((val, colId) => {
      if (val !== START) return;
      startPos = [rowId, colId];
    });
  });

  return routes.reduce((position, route) => {
    const [way, _moves] = route.split(' ');
    const moves = Number(_moves);

    /** @type {[number, number]} */
    const [dR, dC] = WAYS[way].map((w) => w * moves);

    const [currentR, currentC] = position;
    const [nextR, nextC] = [currentR + dR, currentC + dC];
    if (!table[nextR]?.[nextC]) return position;

    if (dR === 0) {
      const [startC, endC] = [currentC, nextC].sort((a, b) => a - b);
      return table[currentR]
        .slice(startC, endC + 1)
        .some((val) => val === OBSTACLE)
        ? position
        : [nextR, nextC];
    }

    // dC === 0
    const [startR, endR] = [currentR, nextR].sort((a, b) => a - b);
    return table
      .slice(startR, endR + 1)
      .map((row) => row[currentC])
      .some((val) => val === OBSTACLE)
      ? position
      : [nextR, nextC];
  }, startPos);
}

describe('172928. 공원 산책', () => {
  it('tc1', () => {
    expect(solution(['SOO', 'OOO', 'OOO'], ['E 2', 'S 2', 'W 1'])).toEqual([
      2, 1,
    ]);
  });

  it('tc2', () => {
    expect(solution(['SOO', 'OXX', 'OOO'], ['E 2', 'S 2', 'W 1'])).toEqual([
      0, 1,
    ]);
  });

  it('tc3', () => {
    expect(
      solution(['OSO', 'OOO', 'OXO', 'OOO'], ['E 2', 'S 3', 'W 1']),
    ).toEqual([0, 0]);
  });
});
