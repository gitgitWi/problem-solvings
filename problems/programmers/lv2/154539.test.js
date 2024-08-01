import { describe, test, expect } from "vitest";

describe("154539. 뒤에 있는 큰 수 찾기", () => {
  /**
   * lv2. 154539. 뒤에 있는 큰 수 찾기
   * @see {@link https://school.programmers.co.kr/learn/courses/30/lessons/154539}
   * @param {number[]} numbers
   * @returns {number[]}
   */
  function solution(numbers) {
    const length = numbers.length;
    const answer = Array(length).fill(-1);

    const numIndex = Array(10).fill(undefined);
    for (let idx = length - 1; idx >= 0; idx--) {
      const curNum = numbers[idx];
      const nextBigIdx = numIndex
        .slice(curNum + 1)
        .filter((i) => i > idx)
        .sort((a, b) => a - b)[0];

      answer[idx] = nextBigIdx === undefined ? -1 : numbers[nextBigIdx];
      numIndex[curNum] = idx;
    }

    return answer;
  }

  test("TC1", () => {
    expect(solution([2, 3, 3, 5])).toEqual([3, 5, 5, -1]);
  });

  test("TC2", () => {
    expect(solution([9, 1, 5, 3, 6, 2])).toEqual([-1, 5, 6, 6, -1, -1]);
  });
});
