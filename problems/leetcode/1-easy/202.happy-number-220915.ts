export {};

function isHappy(n: number): boolean {
  const cached = new Set<number>([]);
  function _computeIsHappy(n: number): boolean {
    if (n === 1) return true;
    if (cached.has(n)) return false;
    cached.add(n);

    const strNums = String(n).split("");
    const sumSquared = strNums
      .map((strNum) => {
        const num = Number(strNum);
        return num * num;
      })
      .reduce((acc, num) => acc + num, 0);
    return _computeIsHappy(sumSquared);
  }

  return _computeIsHappy(n);
}

[
  { n: 19, ans: true },
  { n: 2, ans: false },
  { n: 1111111, ans: true },
  { n: 10, ans: true },
].forEach(({ n, ans }) => {
  const sol = isHappy(n);
  console.log({ ans, sol, is: ans === sol });
});
