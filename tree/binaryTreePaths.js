/**
Given the root of a binary tree, return all root-to-leaf paths in any order.

A leaf is a node with no children.

Example 1:
Input: root = [1,2,3,null,5]
Output: ["1->2->5","1->3"]

Example 2:
Input: root = [1]
Output: ["1"]
 

Constraints:
The number of nodes in the tree is in the range [1, 100].
-100 <= Node.val <= 100 

* Definition for a binary tree node.
* function TreeNode(val, left, right) {
*     this.val = (val===undefined ? 0 : val)
*     this.left = (left===undefined ? null : left)
*     this.right = (right===undefined ? null : right)
* }

* @param {TreeNode} root
* @return {string[]}
*/

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}


var binaryTreePaths = function (root) {
  let paths = [];

  const traversal = (node, path) => {
    if (!node) return;

    path.push(node.val);

    if (!node.left && !node.right) {
      paths.push([...path]);
    } else {
      traversal(node.left, path);
      traversal(node.right, path);
    }

    path.pop(); // backtrack
  };

  traversal(root, []);
  return paths.map((path) => path.join("->"));
};

function buildTree(arr) {
  if (!arr.length) return null;

  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;

  while (i < arr.length) {
    const current = queue.shift();

    if (arr[i] != null) {
      current.left = new TreeNode(arr[i]);
      queue.push(current.left);
    }
    i++;

    if (i < arr.length && arr[i] != null) {
      current.right = new TreeNode(arr[i]);
      queue.push(current.right);
    }
    i++;
  }

  return root;
}

console.log(binaryTreePaths(buildTree([1, 2, 3, null, 5])));
