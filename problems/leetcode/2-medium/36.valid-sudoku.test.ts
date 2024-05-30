import { describe, it, expect } from 'vitest';

/**
 * Medium. 36. Valid Sudoku
 * @see {@link https://leetcode.com/problems/valid-sudoku/?envType=study-plan-v2&envId=top-interview-150}
 */
function isValidSudoku(board: string[][]): boolean {
  const EMPTY = '.';

  for (const row of board) {
    const set = new Set<string>();
    for (const val of row) {
      if (val === EMPTY) continue;
      if (set.has(val)) return false;
      set.add(val);
    }
  }

  for (let colId = 0; colId < 9; colId++) {
    const set = new Set<string>();
    for (let rowId = 0; rowId < 9; rowId++) {
      const val = board[rowId][colId];
      if (val === EMPTY) continue;
      if (set.has(val)) return false;
      set.add(val);
    }
  }

  for (let subId = 0; subId < 9; subId++) {
    const rowStartId = Math.floor(subId / 3) * 3;
    const colStartId = (subId % 3) * 3;
    const set = new Set<string>();

    for (let rowId = rowStartId; rowId < rowStartId + 3; rowId++) {
      for (let colId = colStartId; colId < colStartId + 3; colId++) {
        const val = board[rowId][colId];
        if (val === EMPTY) continue;
        if (set.has(val)) return false;
        set.add(val);
      }
    }
  }

  return true;
}

describe('36. Valid Sudoku', () => {
  it('tc1', () => {
    expect(
      isValidSudoku([
        ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
        ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
        ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
        ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
        ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
        ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
        ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
        ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
        ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
      ]),
    ).toEqual(true);
  });

  it('tc2', () => {
    expect(
      isValidSudoku([
        ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
        ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
        ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
        ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
        ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
        ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
        ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
        ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
        ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
      ]),
    ).toEqual(false);
  });
});
