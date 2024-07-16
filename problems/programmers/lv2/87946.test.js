import { describe, expect, test } from "vitest";

describe("87946. 피로도", () => {
  /**
   * 87946. 피로도
   * @see {@link https://school.programmers.co.kr/learn/courses/30/lessons/87946}
   * @param {number} start
   * @param {[number,number][]} places [최소피로도 huddle, 소모피로도 minus]
   * @returns {number}
   */
  function solution(start, places) {
    const placesNum = places.length;

    /** 방문 후 남는 에너지 순으로 정렬 */
    const sortedPlaces = places.slice().sort((a, b) => {
      const restEnergyA = a[0] - a[1];
      const restEnergyB = b[0] - b[1];
      const restEnergyDiff = restEnergyB - restEnergyA;
      return restEnergyDiff === 0 ? b[0] - a[0] : restEnergyDiff;
    });

    /**
     * 가능한 경로들
     * @type {[number,number][][]}
     */
    const routes = [];

    /**
     * 가능한 경로 완전 탐색으로 생성
     * @param {number} index
     * @param {[number,number][]} route
     */
    const creatRouteRecursive = (index = 0, route = []) => {
      if (index === placesNum) {
        route.length > 0 && routes.push(route);
        return;
      }

      const nextIndex = index + 1;
      creatRouteRecursive(nextIndex, route.concat([]));
      creatRouteRecursive(nextIndex, route.concat([sortedPlaces[index]]));
    };

    creatRouteRecursive(0, []);

    /** 가능 경로들 마다 몇개 방문 가능한지 확인 */
    return routes.reduce((maxVisits, route) => {
      const { visits } = route.reduce(
        ({ restEnergy, visits }, [huddle, minus]) => {
          const canVisit = restEnergy >= huddle;
          return {
            restEnergy: canVisit ? restEnergy - minus : 0,
            visits: canVisit ? visits + 1 : visits,
          };
        },
        { restEnergy: start, visits: 0 },
      );
      return Math.max(visits, maxVisits);
    }, 0);
  }

  test("TC1", () => {
    expect(
      solution(80, [
        [80, 20],
        [50, 40],
        [30, 10],
      ]),
    ).toEqual(3);
  });
});
