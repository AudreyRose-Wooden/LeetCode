/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str = s.toLowerCase().replace(/[^0-9a-z]/gi, '');

    let i=0;
    let j=str.length-1;

    while(i<j){
        if(str[i] !== str[j]){
            return false;
        } else {
            i++;
            j--;
        }
    }
    return true;
};