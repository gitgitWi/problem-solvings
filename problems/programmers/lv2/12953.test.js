import { describe, it, expect } from "vitest";

/**
 * lv2. 12953. N개의 최소공배수
 * @see {@link https://school.programmers.co.kr/learn/courses/30/lessons/12953}
 * @param {number[]} arr
 * @returns {number}
 */
function solution(arr) {
  if (arr.some((num) => num === 1)) {
    return arr.reduce((acc, cur) => acc * cur);
  }

  /**
   * @param {number} a
   * @param {number} b
   * @returns {number}
   */
  function getGcd(a, b) {
    const [_a, _b] = [a, b].sort((_a, _b) => _a - _b);
    if (_b % _a === 0) return _a;

    return Array.from({ length: _a }, (_, i) => i + 1).reduce((gcd, cur) =>
      _a % cur === 0 && _b % cur === 0 ? cur : gcd,
    );
  }

  /**
   * @param {number} a
   * @param {number} b
   * @returns {number}
   */
  function getLcm(a, b) {
    return (a * b) / getGcd(a, b);
  }

  return arr.reduce((acc, cur) => getLcm(acc, cur), 1);
}

describe("12953. N개의 최소공배수", () => {
  it("TC1", () => {
    expect(solution([2, 6, 8, 14])).toEqual(168);
  });

  it("TC2", () => {
    expect(solution([1, 2, 3])).toEqual(6);
  });

  it("TC3", () => {
    expect(solution([3, 5, 15])).toEqual(15);
  });

  it("TC4", () => {
    expect(solution([2, 3, 5, 15, 25])).toEqual(150);
  });
});
