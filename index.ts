import { splitTheArray } from '@problems/leetcode/unsolved/3046';

splitTheArray.testCases.forEach(({ input, answer }) => {
  const result = splitTheArray.solution(input);

  console.log(
    `${JSON.stringify(result) === JSON.stringify(answer) ? 'PASS' : 'FAIL'}\n`,
    result,
  );
});
