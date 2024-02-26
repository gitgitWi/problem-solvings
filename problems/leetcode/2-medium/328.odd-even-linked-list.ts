class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * @see https://leetcode.com/problems/odd-even-linked-list/
 * - 쉬운 줄 알았는데 오래 걸림..생각보다 까다로운 듯
 * @todo 최적화할 수 있는 방법..??
 */
function oddEvenList(head: ListNode | null): ListNode | null {
  if (!head) return null;

  const oddHead = new ListNode(head.val, head.next);
  const evenHead = head.next
    ? new ListNode(head.next?.val, head.next?.next)
    : null;

  let curOdd: ListNode | null = oddHead;
  let curEven: ListNode | null = evenHead;

  while (curOdd) {
    const nextEven = curOdd.next || null;
    if (curEven) curEven.next = nextEven;

    const nextOdd = curOdd.next?.next || null;
    curOdd.next = nextOdd;
    if (!nextOdd) {
      curOdd.next = evenHead?.next || null;
      break;
    }

    curOdd = nextOdd;
    curEven = nextEven;
  }

  return oddHead;
}

export {};
