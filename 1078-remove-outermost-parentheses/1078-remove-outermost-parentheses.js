/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    //keep a count based on open/close parentheses
    let count = 0;
    let i = 0;
    let arr = [];
    
    while(i<s.length){
        if(s[i] == ")"){
            count--;
        }
        if(count>0) {
            arr.push(s[i])
        }

        if(s[i] == "("){
            count++
        }
        i+=1;
    }
    return arr.join("")
};