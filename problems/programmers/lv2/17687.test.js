import { describe, test, expect } from "vitest";

describe("17687. n진수 게임", () => {
  /**
   * 17687. n진수 게임
   * @see {@link https://school.programmers.co.kr/learn/courses/30/lessons/17687}
   * @param {number} n
   * @param {number} t
   * @param {number} m
   * @param {number} p
   * @returns {string}
   */
  function solution(n, t, m, p) {
    const lastIndex = t * m;
    let orders = "";
    let number = 0;
    while (orders.length < lastIndex) {
      orders += number.toString(n);
      number += 1;
    }

    orders = orders.toUpperCase();
    let answer = "";
    for (let i = 0; i < t; i++) {
      answer += orders[i * m + (p - 1)];
    }
    return answer;
  }

  test("TC1", () => {
    expect(solution(2, 4, 2, 1)).toEqual("0111");
  });

  test("TC2", () => {
    expect(solution(16, 16, 2, 1)).toEqual("02468ACE11111111");
  });

  test("TC3", () => {
    expect(solution(16, 16, 2, 2)).toEqual("13579BDF01234567");
  });
});
