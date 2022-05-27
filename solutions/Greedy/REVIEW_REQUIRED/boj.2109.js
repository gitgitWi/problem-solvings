// @ts-check

/**
 * Gold3. 2109. 순회강연
 * @see https://www.acmicpc.net/problem/2109
 * - 풀이법 찾기가 어려웠음
 * - 강의 듣고 해결
 *
 * @param input {string[]}
 * @returns  {number}
 */
const solution = ([_, ...pricesWithDue]) => {
  class Node {
    /** @type {number} */
    value;
    /** @type {Node | undefined} */
    prevNode;
    /** @type {Node | undefined} */
    nextNode = undefined;
    /**
     * @param {number} value
     */
    constructor(value) {
      this.value = value;
    }
  }

  class PriceAscHeap {
    /** @type {Node | undefined} */
    head = undefined;
    size = 0;

    getSize() {
      return this.size;
    }

    removeTop() {
      if (!this.head || this.size === 0) return;
      this.head = this.head.nextNode;
      this.size -= 1;
    }

    /**
     * @param {Node} node
     */
    appendNode(node) {
      this.size += 1;

      if (!this.head) {
        this.head = node;
        return;
      }

      if (this.head.value > node.value) {
        node.nextNode = this.head;
        this.head.prevNode = node;
        this.head = node;
        return;
      }

      /** @type { Node | undefined }  */
      let pointNode = this.head;
      while (pointNode?.nextNode && pointNode.nextNode.value <= node.value) {
        pointNode = pointNode.nextNode;
      }

      node.nextNode = pointNode.nextNode;
      node.prevNode = pointNode;
      pointNode.nextNode = node;
    }

    getTotalValues() {
      let total = 0;
      let pointNode = this.head;
      while (pointNode) {
        total += pointNode.value;
        pointNode = pointNode.nextNode;
      }
      return total;
    }

    traverse() {
      const nodes = [];
      let pointNode = this.head;
      while (pointNode) {
        nodes.push(pointNode.value);
        pointNode = pointNode.nextNode;
      }
      console.log(nodes);
    }
  }

  const pq = new PriceAscHeap();

  pricesWithDue
    .map((line) => line.split(" ").map(Number).reverse())
    .sort((a, b) => {
      const diff = a[0] - b[0];
      return diff === 0 ? b[1] - a[1] : diff;
    })
    .forEach(([due, price]) => {
      pq.appendNode(new Node(price));
      if (pq.getSize() > due) pq.removeTop();
    });

  return pq.getTotalValues();
};

const main = () => {
  const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
  console.log(solution(input));

  // [
  //   [["4", "50 2", "10 1", "20 2", "30 1"], 80],
  //   [["7", "20 1", "2 1", "10 3", "100 2", "8 2", "5 20", "50 10"], 185],
  // ].forEach(([q, a]) => {
  //   // @ts-ignore
  //   const res = solution(q);
  //   console.log(res);
  //   console.log(res === a);
  // });
};

main();

// export {};
