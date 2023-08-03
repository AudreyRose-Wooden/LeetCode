/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    if(!root) return [];

    let res = [];
    let stck = [root];

    while(stck.length > 0){
        // console.log(stck)
        let temp = stck.pop();
        console.log(temp)
        res.push(temp.val);

        for(let i = temp.children.length-1; i>=0; i--){
            stck.push(temp.children[i])
        }
    }

    return res;
};