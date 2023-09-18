/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    let curr_depth = 0;
    for(let action of logs){
        if(action == "../"){
            curr_depth = Math.max(curr_depth-1, 0);
        } else if (action !== "./") {
            curr_depth += 1;
        }
    }

    return curr_depth
};