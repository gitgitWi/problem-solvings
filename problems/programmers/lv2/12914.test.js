import { describe, test, expect } from "vitest";

describe("12914. 멀리 뛰기", () => {
  /**
   * @see {@link https://school.programmers.co.kr/learn/courses/30/lessons/12914}
   * @param {number} n
   * @returns {number}
   */
  function solution(n) {
    const steps = [0, 1, 2];
    if (n <= 2) return steps[n];

    let idx = 3;
    while (idx <= n) {
      steps[idx] = (steps[idx - 1] + steps[idx - 2]) % 1234567;
      idx++;
    }

    return steps[n];
  }

  test("TC1", () => {
    expect(solution(4)).toEqual(5);
  });

  test("TC2", () => {
    expect(solution(3)).toEqual(3);
  });
});
