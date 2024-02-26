// @ts-check

/**
 * 농구 경기
 * @see https://www.acmicpc.net/problem/1159
 *
 * @param input {string[]}
 * @returns  {string}
 */
const solution = (input) => {
  const names = input.slice(1);
  const PREDAJA = "PREDAJA";

  /** @type {Record<string, number>} */
  const namesMap = {};
  names.forEach((name) => {
    const first = name[0];
    if (first in namesMap) namesMap[first]++;
    else namesMap[first] = 1;
  });

  /** @type {string[]} */
  const picked = [];

  Object.entries(namesMap).forEach(([name, num]) => {
    if (num >= 5) picked.push(name);
  });

  return picked.sort((a, b) => a.localeCompare(b)).join("") || PREDAJA;
};

const main = () => {
  const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

  console.log(solution(input));

  // [
  //   [
  //     "18",
  //     "babic",
  //     "keksic",
  //     "boric",
  //     "bukic",
  //     "sarmic",
  //     "balic",
  //     "kruzic",
  //     "hrenovkic",
  //     "beslic",
  //     "boksic",
  //     "krafnic",
  //     "pecivic",
  //     "klavirkovic",
  //     "kukumaric",
  //     "sunkic",
  //     "kolacic",
  //     "kovacic",
  //     "prijestolonasljednikovi",
  //   ],
  //   ["6", "michael", "jordan", "lebron", "james", "kobe", "bryant"],
  // ].forEach((q) => console.log(solution(q)));
};

main();

export {};
