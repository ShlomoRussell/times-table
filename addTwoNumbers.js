/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const list1 = toLinkedList([
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 1,
]);
const list2 = toLinkedList([(5, 6, 4)]);
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
  const listToNumber = (list) => {
    const array = [];
    while (list) {
      array.push(list.val);
      list = list.next;
    }
    return BigInt(array.reverse().join(""));
  };

  const addedTogetherAndToArray = String(
    listToNumber(l1) + listToNumber(l2)
  ).split("");

  const toLinkedList = (array) => {
    return array.reduce((acc, curr) => {
      if (acc === null) {
        acc = new ListNode(+curr);
      } else {
        acc = new ListNode(+curr, acc);
      }
      return acc;
    }, null);
  };

  return toLinkedList(addedTogetherAndToArray);
}
console.log(addTwoNumbers(list1, list2));
