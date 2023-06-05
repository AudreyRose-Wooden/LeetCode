/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let p1 = 0;
    let p2 = 0;
    let res = [];

    while(p1 < word1.length || p2<word2.length){
        console.log("here")
        res.push(word1[p1]);
        res.push(word2[p2]);

        p1 += 1;
        p2 += 1;
    }

    return res.join("")
};