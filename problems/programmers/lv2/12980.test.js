import { describe, it, expect } from "vitest";

/**
 * lv2. 12980. 점프와 순간 이동
 * @see {@link https://school.programmers.co.kr/learn/courses/30/lessons/12980}
 * @param {number} n 1 이상 10억 이하의 자연수
 * @returns {number}
 */
function solution(n) {
  let rest = n;
  let usage = 0;

  while (rest > 0) {
    if (rest % 2 === 1) {
      rest = (rest - 1) / 2;
      usage++;
    } else {
      rest /= 2;
    }
  }

  return usage;
}

describe("12980. 점프와 순간 이동", () => {
  it("TC1", () => {
    expect(solution(5)).toEqual(2);
  });

  it("TC2", () => {
    expect(solution(6)).toEqual(2);
  });

  it("TC3", () => {
    expect(solution(5000)).toEqual(5);
  });
});
