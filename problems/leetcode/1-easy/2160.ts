/**
 * 2160. Minimum Sum of Four Digit Number After Splitting Digits
 * {@link https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/}
 *
 */
function minimumSum(num: number): number {
  const [n1, n2, n3, n4] = String(num).split('').map(Number).sort().map(String);
  return parseInt(n1 + n4) + parseInt(n2 + n3);
}

/** test */
const testCases = [
  { input: 2932, output: 52 },
  { input: 4009, output: 13 },
] as const;

testCases.forEach(({ input, output }) => {
  const answer = minimumSum(input);

  console.assert(
    answer === output,
    `\nanswer: `,
    answer,
    `\nexpected: `,
    output,
    `\n`
  );
});

export {};
