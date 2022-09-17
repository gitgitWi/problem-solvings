function longestCommonPrefix(strs: string[]): string {
  strs.sort((a, b) => a.length - b.length);

  const shortest = strs[0];
  const maxRecursive = shortest.length;

  let lcp = "";
  for (let endIdx = 1; endIdx <= maxRecursive; endIdx++) {
    const curCP = shortest.slice(0, endIdx);

    if (strs.every((str) => str.slice(0, endIdx) === curCP)) lcp = curCP;
    else return lcp;
  }

  return lcp;
}

[
  {
    Input: ["flower", "flow", "flight"],
    Output: "fl",
  },
  {
    Input: ["dog", "racecar", "car"],
    Output: "",
  },
  {
    Input: ["a"],
    Output: "a",
  },
].forEach(({ Input, Output }) => {
  const sol = longestCommonPrefix(Input);

  console.log({ sol, Output, is: sol === Output });
});

export {};
