import { stockPrices } from '@problems/stack-queue';

stockPrices.testCases.forEach(({ input, answer }) => {
  const result = stockPrices.solution(input);

  console.log(
    `${JSON.stringify(result) === JSON.stringify(answer) ? 'PASS' : 'FAIL'}\n`,
    result,
  );
});
