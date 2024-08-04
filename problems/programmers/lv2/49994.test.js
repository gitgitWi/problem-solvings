import { describe, test, expect } from "vitest";

describe("49994. 방문길이", () => {
  /**
   * 49994. 방문길이
   * @see {@link https://school.programmers.co.kr/learn/courses/30/lessons/49994}
   *
   * @param {string} dirs
   * @returns {number}
   */
  function solution(dirs) {
    const dirMap = new Map([
      ["D", { row: 1, col: 0 }],
      ["U", { row: -1, col: 0 }],
      ["L", { row: 0, col: -1 }],
      ["R", { row: 0, col: 1 }],
    ]);
    const directs = Array.from(dirs).map((dir) => dirMap.get(dir));
    const canGo = ({ row, col }) =>
      row >= 0 && col >= 0 && row < 11 && col < 11;

    return directs.reduce(
      (visits, direct) => {
        const nextRow = visits.curRow + direct.row;
        const nextCol = visits.curCol + direct.col;
        if (!canGo({ row: nextRow, col: nextCol })) return visits;

        const route = [
          [nextRow, nextCol],
          [visits.curRow, visits.curCol],
        ]
          .sort((a, b) => {
            if (a[0] === b[0]) return a[1] - b[1];
            return a[0] - b[0];
          })
          .flat()
          .join("-");
        const nextRoutes = new Set(visits.routes);
        nextRoutes.add(route);

        return {
          curRow: nextRow,
          curCol: nextCol,
          routes: nextRoutes,
        };
      },
      {
        curRow: 5,
        curCol: 5,
        routes: new Set(),
      },
    ).routes.size;
  }

  test("TC1", () => {
    expect(solution("ULURRDLLU")).toEqual(7);
  });

  test("TC2", () => {
    expect(solution("LULLLLLLU")).toEqual(7);
  });
});
