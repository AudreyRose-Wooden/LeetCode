/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    let result = true;
    function dfs(nodeP, nodeQ){
        if(!nodeP && !nodeQ) return;
        if((nodeP && !nodeQ) || (!nodeP && nodeQ)){
            console.log(false)
            result = false;
            return
        };

        console.log(nodeP, nodeQ)
        if(nodeP.val !== nodeQ.val){
            result = false;
        }

        dfs(nodeP.left, nodeQ.left);
        dfs(nodeP.right, nodeQ.right);
    }

    dfs(p,q)
    return result;
};