import { describe, test, expect } from "vitest";

/**
 * @see {@link https://school.programmers.co.kr/learn/courses/30/lessons/12981}
 * @param {number} n
s * @param {string[]} words
 * @returns {number[]}
 */
function solution(n, words) {
  /** @type {Set<string>} */
  const wordsSet = new Set([]);
  let foundId = 0;

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const prevWord = words[i - 1];
    if (prevWord && word[0] !== prevWord[prevWord.length - 1]) {
      foundId = i;
      break;
    }

    const duplicated = wordsSet.has(word);
    if (duplicated) {
      foundId = i;
      break;
    }
    wordsSet.add(word);
  }

  return foundId ? [(foundId % n) + 1, Math.floor(foundId / n) + 1] : [0, 0];
}

describe("12981. 끝말잇기", () => {
  test("TC1", () => {
    expect(
      solution(3, [
        "tank",
        "kick",
        "know",
        "wheel",
        "land",
        "dream",
        "mother",
        "robot",
        "tank",
      ]),
    ).toEqual([3, 3]);
  });

  test("TC2", () => {
    expect(
      solution(5, [
        "hello",
        "observe",
        "effect",
        "take",
        "either",
        "recognize",
        "encourage",
        "ensure",
        "establish",
        "hang",
        "gather",
        "refer",
        "reference",
        "estimate",
        "executive",
      ]),
    ).toEqual([0, 0]);
  });

  test("TC3", () => {
    expect(
      solution(2, ["hello", "one", "even", "never", "now", "world", "draw"]),
    ).toEqual([1, 3]);
  });
});
