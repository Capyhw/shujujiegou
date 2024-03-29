/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head || !head.next) return head;

  let nextnode = new ListNode(null);
  nextnode = head.next;
  head.next = swapPairs(nextnode.next);
  nextnode.next = head;
  return nextnode;
};
