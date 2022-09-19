// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }

/**
 * - 풀긴 했는데, 좀더 최적화할 방법 찾아보기
 * - 이전에 강의 들었던 걸 다시 잘 생각해보자
 */
function isPalindrome(head: ListNode): boolean {
  let reverseNode = new ListNode(head.val, null);
  let cur = head;
  let size = 1;
  while (cur) {
    // @ts-ignore
    cur = cur.next;
    if (!cur) break;
    reverseNode = new ListNode(cur.val, reverseNode);
    size += 1;
  }

  const half = Math.floor(size + 1 / 2);
  cur = head;
  let curReverse = reverseNode;

  for (let i = 0; i <= half; i++) {
    if (cur.val !== curReverse.val) return false;

    // @ts-ignore
    cur = cur.next;
    // @ts-ignore
    curReverse = curReverse.next;
  }

  return true;
}
