/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels = new Set(['a', 'e', 'i', 'o', 'u','A', 'E', 'I', 'O', 'U']);
    let newString = s;
    if(!s) return s

    let strVowels = [];
    for(let i=0; i<s.length; i++){
        if(vowels.has(s[i])){
            strVowels.push(s[i]);
        }
    }

    for(let j=0; j<s.length; j++){
        if(vowels.has(s[j])){
            let v = strVowels.pop();
            newString = newString.substring(0, j) + v + newString.substring(j+1)
        }
    }

    return newString;
};