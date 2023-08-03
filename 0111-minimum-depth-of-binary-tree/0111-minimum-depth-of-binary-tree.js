/**
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
var minDepth = function(root) {
    if(!root) return 0;

    //leaf, return 1
    if(!root.left && !root.right) return 1;
    //check if left and right, return min
    let l = minDepth(root.left)
    let r = minDepth(root.right)
    let left = l == 0 ? Infinity : l;
    let right = r == 0 ? Infinity : r;

    return 1 + Math.min(left, right)
};