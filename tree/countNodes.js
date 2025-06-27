/**
Given the root of a complete binary tree, return the number of the nodes in the tree.

According to Wikipedia, every level, except possibly the last, is completely filled in a complete binary tree, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

Design an algorithm that runs in less than O(n) time complexity.

Example 1:
Input: root = [1,2,3,4,5,6]
Output: 6

Example 2:
Input: root = []
Output: 0

Example 3:
Input: root = [1]
Output: 1
 
Constraints:
The number of nodes in the tree is in the range [0, 5 * 104].
0 <= Node.val <= 5 * 104
The tree is guaranteed to be complete.

* Definition for a binary tree node.
* function TreeNode(val, left, right) {
*     this.val = (val===undefined ? 0 : val)
*     this.left = (left===undefined ? null : left)
*     this.right = (right===undefined ? null : right)
* }
*/
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
  const getDepth = (node) => {
    let depth = 0;
    while (node !== null) {
      depth++;
      node = node.left;
    }
    return depth;
  };

  if (root === null) {
    return 0;
  }

  // Calculate the depth of the left and right subtrees.
  const leftDepth = getDepth(root.left);
  const rightDepth = getDepth(root.right);

  // Check if the left and right subtrees have the same depth.
  if (leftDepth === rightDepth) {
    // If depths are equal, left subtree is a perfect binary tree.
    // Calculate the number of nodes in the left subtree as 2^leftDepth - 1
    // Count the nodes in the right subtree recursively.
    return (1 << leftDepth) + countNodes(root.right);
  } else {
    // If depths are not equal, right subtree is a perfect binary tree.
    // Calculate the number of nodes in the right subtree as 2^rightDepth - 1
    // Count the nodes in the left subtree recursively.
    return (1 << rightDepth) + countNodes(root.left);
  }
};
