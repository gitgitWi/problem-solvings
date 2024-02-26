/**
 * 42583. 다리를 지나는 트럭
 * - https://school.programmers.co.kr/learn/courses/30/lessons/42583?language=javascript
 *
 * @param {number} maxTrucks 다리에 올라갈 수 있는 최대 트럭 개수
 * @param {number} maxWeight 다리가 견딜 수 있는 최대 무게
 * @param {number[]} truckWeights 트럭별 무게 - 순서대로
 * @returns {number}  모든 트럭이 다리를 건너는데 걸리는 최소 시간
 *
 * - 트럭 한대에 건너는데 1초 걸린다는거??
 */
const solution = (maxTrucks, maxWeight, truckWeights) => {
  const bridge = Array(maxTrucks).fill(0);

  /** init */
  const firstTruck = truckWeights.shift();
  let bridgeWeight = firstTruck;
  bridge.push(firstTruck);
  bridge.shift();
  let time = 1;

  while (bridgeWeight > 0) {
    time += 1;
    bridgeWeight -= bridge.shift();

    const nextTruck = truckWeights[0];
    if (nextTruck && bridgeWeight + nextTruck <= maxWeight) {
      const truck = truckWeights.shift();
      bridge.push(truck);
      bridgeWeight += truck;
    } else {
      bridge.push(0);
    }
  }

  return time;
};

const testCases = [
  { input: [2, 10, [7, 4, 5, 6]], answer: 8 },
  { input: [100, 100, [10]], answer: 101 },
  { input: [100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]], answer: 110 },
  // [10, 10, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]],
];

export const trucksOnBridge = {
  solution,
  testCases,
};
