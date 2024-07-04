import { describe, test, expect } from "vitest";

describe("131701. 연속 부분 수열 합의 개수", () => {
  /**
   * @see {@link https://school.programmers.co.kr/learn/courses/30/lessons/131701}
   * @param {number[]} elements
   * @returns {number}
   */
  function solution(elements) {
    const arr = elements.concat(elements);
    const windowSize = elements.length;

    /** @type {Set<number>} */
    const sumSet = new Set(elements);

    // 2개이상일때 부분 수열 사이즈에 따라
    const sizes = Array.from({ length: windowSize - 1 }, (_, i) => i + 2);
    for (const size of sizes) {
      for (let idx = 0; idx < windowSize; idx++) {
        const sum = arr.slice(idx, idx + size).reduce((acc, cur) => acc + cur);
        sumSet.add(sum);
      }
    }

    return sumSet.size;
  }

  test("TC1", () => {
    expect(solution([7, 9, 1, 1, 4])).toEqual(18);
  });
});
