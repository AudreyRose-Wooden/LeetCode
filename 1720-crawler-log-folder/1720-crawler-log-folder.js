/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    // "../" == pop
    // "./" == continue
    // "x/" == push

    let directory = [];

    for(let i=0; i<logs.length; i++){
        if(logs[i] == "../"){
            directory.pop();
        } else if (logs[i] !== "./"){
            directory.push(logs[i]);
        }
    }

    return directory.length;
};