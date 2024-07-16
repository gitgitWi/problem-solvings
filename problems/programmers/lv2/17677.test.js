import { describe, test, expect } from "vitest";

describe("17677. 뉴스 클러스터링", () => {
  /**
   * 17677. 뉴스 클러스터링
   * @see {@link https://school.programmers.co.kr/learn/courses/30/lessons/17677?language=javascript}
   * @param {string} str1
   * @param {string} str2
   * @returns {number}
   *
   * @todo - 정확도 46.2/100, 교집합/합집합 때 중복값을 어떻게 하라는건지 잘 모르겠음..
   */
  function solution(str1, str2) {
    /**
     * @param {string} str
     */
    const str2pairs = (str) =>
      Array.from(str.toUpperCase())
        .reduce(
          /**
           * @param {string[]} acc
           */
          (acc, cur, idx, origin) => {
            const nextChar = origin[idx + 1];
            if (nextChar) acc.push(`${cur}${nextChar}`);
            return acc;
          },
          [],
        )
        .filter((pair) => pair.match(/[A-Z]{2}/gi));
    const pairs1 = str2pairs(str1);
    const pairs2 = str2pairs(str2);
    const [smaller, bigger] =
      pairs1.length < pairs2.length ? [pairs1, pairs2] : [pairs2, pairs1];

    const createUnion = () => {
      const biggerSet = new Set(bigger);
      const notInBigger = smaller.filter((val) => !biggerSet.has(val));
      return bigger.concat(notInBigger);
    };

    const createIntersect = () => {
      const biggerMap = bigger.reduce(
        (acc, val) => acc.set(val, (acc.has(val) ? acc.get(val) : 0) + 1),
        new Map([]),
      );

      const _intersect = smaller.filter((val) => {
        const num = biggerMap.get(val);
        if (!num) return false;
        biggerMap.set(val, num - 1);
        return true;
      });
      return _intersect;
    };

    const intersect = createIntersect();
    const union = createUnion();

    return (
      Math.floor((intersect.length / union.length) * 65536) ||
      /** NaN 예외처리 */ 65536
    );
  }

  test("TC1", () => {
    expect(solution("FRANCE", "french")).toEqual(16384);
  });

  test("TC2", () => {
    expect(solution("handshake", "shake hands")).toEqual(65536);
  });

  test("TC3", () => {
    expect(solution("aa1+aa2", "AAAA12")).toEqual(43690);
  });

  test("TC4", () => {
    expect(solution("E=M*C^2", "e=m*c^2")).toEqual(65536);
  });
});
