import { shortestRouteInGameMap } from '@problems/dfs-bfs';

shortestRouteInGameMap.testCases.forEach(({ input, answer }) => {
  const result = shortestRouteInGameMap.solution(input);

  console.log(
    `${JSON.stringify(result) === JSON.stringify(answer) ? 'PASS' : 'FAIL'}\n`,
    result,
  );
});
