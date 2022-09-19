class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * - 1년 반 전에 JS로 풀었던 문제
 * - runtime 시간이 좀더 늘어남..
 */
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head) return null;

  const lists: ListNode[] = [];

  let cur = head;
  while (cur) {
    lists.push(cur);
    // @ts-ignore
    cur = cur.next;
  }

  if (n === lists.length) return head.next;

  const [before] = lists.slice(-n - 1, -n);

  if (!before?.next) return null;
  before.next = before.next.next;
  return head || null;
}
