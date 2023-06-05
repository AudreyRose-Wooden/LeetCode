/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let mostSoFar = 0;
    let out = [];

    for(let i=0; i<candies.length; i++){
        mostSoFar = Math.max(mostSoFar, candies[i]);
    }

    for(let i=0; i<candies.length; i++){
        if(candies[i] + extraCandies >= mostSoFar){
            out.push(true);
        } else {
            out.push(false);
        }
    }

    return out;
};