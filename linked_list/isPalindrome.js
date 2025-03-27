/**
Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

Example 1:
Input: head = [1,2,2,1]
Output: true

Example 2:
Input: head = [1,2]
Output: false
 
* Definition for singly-linked list.
* function ListNode(val, next) {
*     this.val = (val===undefined ? 0 : val)
*     this.next = (next===undefined ? null : next)
* }

* @param {ListNode} head
* @return {boolean}
*/

var isPalindrome = function (head) {
  // Edge cases: empty list or single node
  if (!head || !head.next) return true;

  let slow = head,
    fast = head,
    prev = null; // for reversing first half

  // Reverse first half while finding the middle
  while (fast && fast.next) {
    fast = fast.next.next; // move 2 steps ahead
    let next = slow.next;
    slow.next = prev; // reverse link
    prev = slow;
    slow = next;
  }

  // If odd number of nodes, skip the middle node
  if (fast) slow = slow.next;

  // Compare reversed first half with second half
  while (prev && slow) {
    if (prev.val !== slow.val) return false; // mismatch found
    prev = prev.next;
    slow = slow.next;
  }
  return true; // palindrome confirmed
};
