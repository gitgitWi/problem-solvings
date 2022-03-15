/*
 * @lc app=leetcode id=278 lang=typescript
 *
 * [278] First Bad Version
 */

// @lc code=start
/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

function solution(isBadVersion: (version: number) => boolean) {
  return function (n: number): number {
    let ans = 0;
    let left = 1,
      right = n;
    const { floor } = Math;

    while (left <= right) {
      ans = floor((left + right) * 0.5);

      if (left === right) break;

      if (isBadVersion(ans)) {
        right = ans;
      } else {
        left = ans + 1;
      }
    }

    return ans;
  };
}
// @lc code=end

export {};
