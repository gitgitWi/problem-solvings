/**
 * 12909. 올바른 괄호
 * - https://school.programmers.co.kr/learn/courses/30/lessons/12909?language=javascript
 */

const lefts = new Set(['(', '[', '{']);

/**
 * @param {string} s
 * @returns {boolean}
 */
const solution = (s) => {
  const chars = s.split('');
  const stack = [];

  for (const char of chars) {
    if (lefts.has(char)) {
      stack.push(char);
      continue;
    }

    const top = stack.pop();
    if (!top) return false;
    if (char === ')' && top !== '(') return false;
    if (char === ']' && top !== '[') return false;
    if (char === '}' && top !== '{') return false;
  }

  return stack.length === 0;
};

const testCases = [
  { input: '()()', anwser: true },
  { input: '(())()', anwser: true },
  { input: ')()(', anwser: false },
  { input: '(()(', anwser: false },
];

export const validParentheses = {
  solution,
  testCases,
};
