/**
 * @file
 * 42586. 기능 개발
 *
 * @see {@link https://school.programmers.co.kr/learn/courses/30/lessons/42586?language=javascript}
 */

/**
 * solution
 * @param {number[]} progresses
 * @param {number[]} speeds
 * @returns {number[]}
 */
const solution = (progresses, speeds) => {
  return Array.from(
    progresses
      .map((progress, i) => {
        const speed = speeds[i];
        return Math.ceil((100 - progress) / speed);
      })

      .reduce((acc, cur, idx) => {
        if (idx === 0) {
          acc.push(cur);
          return acc;
        }
        const prevDays = acc[idx - 1];
        acc.push(cur < prevDays ? prevDays : cur);

        return acc;
      }, [])
      .reduce((acc, day) => {
        acc.set(day, (acc.has(day) ? acc.get(day) : 0) + 1);
        return acc;
      }, new Map())
      .values(),
  );
};

/**
 * @type {{input: [number[], number[]], answer: number[]} []}
 */
const testCases = [
  {
    input: [
      [93, 30, 55],
      [1, 30, 5],
    ],
    answer: [2, 1],
  },
  {
    input: [
      [95, 90, 99, 99, 80, 99],
      [1, 1, 1, 1, 1, 1],
    ],
    answer: [1, 3, 2],
  },
];

export const featureDevelops = {
  solution,
  testCases,
};
