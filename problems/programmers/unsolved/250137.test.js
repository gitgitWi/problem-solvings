import { describe, it, expect } from 'vitest';

/**
 * lv1. 붕대감기
 * @see {@link https://school.programmers.co.kr/learn/courses/30/lessons/250137}
 *
 * @param {[number, number, number]} bandage [시전 시간, 초당 회복량, 추가 회복량]
 * @param {number} health
 * @param {[number, number][]} attacks [공격 시간, 피해량][]
 *
 * @todo 문제 내용 그대로 구현 - 테스트 케이스는 일단 다 맞는데, 제출하면 2개만 맞고 점수 표시가 안됨??
 */
function solution(bandage, health, attacks) {
  const [HEAL_TIME, HEAL_BY_SEC, HEAL_BONUS] = bandage;
  let answer = health;
  let healTime = 0;
  let attackId = 0;
  for (let seconds = 1; seconds <= 1000; seconds++) {
    if (attacks[attackId] === undefined) return answer;
    const [attackTime, attackAmount] = attacks[attackId];

    if (attackTime !== seconds) {
      healTime += 1;
      if (answer === health) continue;
      answer += HEAL_BY_SEC;
      if (healTime === HEAL_TIME) {
        answer += HEAL_BONUS;
        healTime = 0;
      }
    } else {
      answer -= attackAmount;
      if (answer <= 0) return -1;
      attackId += 1;
      healTime = 0;
    }
  }

  return answer;
}

describe('[250137] 붕대감기', () => {
  it('tc1', () => {
    expect(
      solution([5, 1, 5], 30, [
        [2, 10],
        [9, 15],
        [10, 5],
        [11, 5],
      ]),
    ).toEqual(5);
  });

  it('tc2', () => {
    expect(
      solution([3, 2, 7], 20, [
        [1, 15],
        [5, 16],
        [8, 6],
      ]),
    ).toEqual(-1);
  });

  it('tc3', () => {
    expect(
      solution([4, 2, 7], 20, [
        [1, 15],
        [5, 16],
        [8, 6],
      ]),
    ).toEqual(-1);
  });

  it('tc4', () => {
    expect(
      solution([1, 1, 1], 5, [
        [1, 2],
        [3, 2],
      ]),
    ).toEqual(3);
  });
});
