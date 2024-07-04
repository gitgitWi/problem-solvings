import { describe, test, expect } from "vitest";

describe("138476. 귤 고르기", () => {
  /**
   * @see {@link https://school.programmers.co.kr/learn/courses/30/lessons/138476}
   * @param {number} k
   * @param {number[]} tangerine
   * @returns
   */
  function solution(k, tangerine) {
    /** @type {Map<number, number>} */
    const tMap = tangerine.reduce((acc, cur) => {
      acc.has(cur) ? acc.set(cur, acc.get(cur) + 1) : acc.set(cur, 1);
      return acc;
    }, new Map());

    const sorted = Array.from(tMap.entries()).sort((a, b) => b[1] - a[1]);

    let answer = 0;
    let rest = k;
    for (const [_tanKg, tanNums] of sorted) {
      answer++;
      if (tanNums >= rest || rest <= 0) {
        break;
      }
      rest -= tanNums;
    }

    return answer;
  }

  test("TC1", () => {
    expect(solution(6, [1, 3, 2, 5, 4, 5, 2, 3])).toEqual(3);
  });

  test("TC2", () => {
    expect(solution(4, [1, 3, 2, 5, 4, 5, 2, 3])).toEqual(2);
  });

  test("TC3", () => {
    expect(solution(2, [1, 1, 1, 1, 2, 2, 2, 3])).toEqual(1);
  });
});
