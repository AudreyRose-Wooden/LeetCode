/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let aStack = [];
    let bStack = [];

    for(let char of s){
        if(char == "#"){
            aStack.pop();
        } else {
            aStack.push(char)
        }
    }

    for(let char of t){
        if(char == "#"){
            bStack.pop();
        } else {
            bStack.push(char)
        }
    }

    if(aStack.join("") == bStack.join("")){
        return true;
    } else {
        return false;
    }
};