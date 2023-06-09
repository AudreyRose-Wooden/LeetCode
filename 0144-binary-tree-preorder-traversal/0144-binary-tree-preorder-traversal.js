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
 * @return {number[]}
 */
function preorderTraversal(root) {
    if(!root) {
        return [];
    }

    const result = [];
    const nodesToTraverse = [root];

    let currentNode = root;

    while(nodesToTraverse.length) {
        while(currentNode) {
            result.push(currentNode.val);
            nodesToTraverse.push(currentNode);
            currentNode = currentNode.left;
        }

        currentNode = nodesToTraverse.pop();
        currentNode = currentNode.right;
    }

    return result;
}