/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;

    let freq = {};
    for(let char of s){
        freq[char] = freq[char] ? freq[char] + 1 : 1;
    }

    for(let char of t){
        if(!freq[char]) return false;

        freq[char] -= 1;

        if(freq[char] == 0){
            delete freq[char]
        }
    }

    console.log(freq)
    return Object.keys(freq).length == 0
};