import { describe, it, expect } from "vitest";

/**
 * lv2. 42885. 구명보트
 *
 * @see {@link https://school.programmers.co.kr/learn/courses/30/lessons/42885}
 * @param {number[]} people
 * @param {number} limit
 * @returns {number}
 */
function solution(people, limit) {
  people.sort((a, b) => b - a);

  let boats = 0;
  let left = 0;
  let right = people.length - 1;

  while (left <= right) {
    if (left === right) {
      boats += 1;
      break;
    }

    const leftP = people[left];
    const rightP = people[right];
    boats += 1;
    left += 1;

    if (leftP + rightP <= limit) {
      right -= 1;
    }
  }

  return boats;
}

describe("42885. 구명보트", () => {
  it("TC1", () => {
    expect(solution([70, 50, 80, 50], 100)).toEqual(3);
  });

  it("TC2", () => {
    expect(solution([70, 80, 50], 100)).toEqual(3);
  });
});
