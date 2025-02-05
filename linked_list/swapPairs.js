/**
Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

Example 1:
Input: head = [1,2,3,4]
Output: [2,1,4,3]
Explanation:

Example 2:
Input: head = []
Output: []

Example 3:
Input: head = [1]
Output: [1]

Example 4:
Input: head = [1,2,3]
Output: [2,1,3]

* Definition for singly-linked list.
* function ListNode(val, next) {
*     this.val = (val===undefined ? 0 : val)
*     this.next = (next===undefined ? null : next)
* }

* @param {ListNode} head
* @return {ListNode}
*/
var swapPairs = function (head) {
  if (!head || !head.next) return head; //handle empty and single node LL

  let prev = head;
  let curr = head.next;
  let after = head.next.next;

  head = head.next; //set head to be 2nd node KEY!

  while (true) {
    curr.next = prev;

    //handle 2 and 3 node LL and return
    if (!after || !after.next) {
      //connect 1-null or 1-3 based on 2 or 3 node LL
      prev.next = after;
      return head;
    }

    //if len > 3

    prev.next = after.next; //connect 1-4

    //go to next adjacent pair
    prev = after;
    curr = after.next;
    after = after.next.next;
  }
};
