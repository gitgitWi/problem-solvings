import { describe, test, expect } from "vitest";

describe("76502. 괄호 회전하기", () => {
  /**
   * @see {@link https://school.programmers.co.kr/learn/courses/30/lessons/76502}
   * @param {string} s
   * @returns {number}
   */
  function solution(s) {
    const paren1 = { left: "(", right: ")" };
    const paren2 = { left: "[", right: "]" };
    const paren3 = { left: "{", right: "}" };
    const size = s.length;

    /**
     * @param {number} startIdx
     * @returns {boolean}
     */
    const isValid = (startIdx) => {
      const target = s.concat(s.slice(0, startIdx));
      const lastIndex = target.length;

      const stack = [];
      for (let i = startIdx; i < lastIndex; i++) {
        const cur = target[i];
        if (cur === paren1.left || cur === paren2.left || cur === paren3.left) {
          stack.push(cur);
          continue;
        }
        switch (cur) {
          case paren1.right: {
            const prev = stack.pop();
            if (!prev || prev !== paren1.left) return false;
            continue;
          }
          case paren2.right: {
            const prev = stack.pop();
            if (!prev || prev !== paren2.left) return false;
            continue;
          }
          case paren3.right: {
            const prev = stack.pop();
            if (!prev || prev !== paren3.left) return false;
            continue;
          }
          default:
            continue;
        }
      }
      return true;
    };

    let rotates = 0;
    for (let start = 0; start < size; start++) {
      if (isValid(start)) rotates++;
    }

    return rotates;
  }

  test("TC1", () => {
    expect(solution("[](){}")).toEqual(3);
  });

  test("TC2", () => {
    expect(solution("}]()[{")).toEqual(2);
  });

  test("TC3", () => {
    expect(solution("[)(]")).toEqual(0);
  });

  test("TC4", () => {
    expect(solution("}}}")).toEqual(0);
  });
});
