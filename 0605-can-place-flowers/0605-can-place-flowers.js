/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let res = false;
    let N = n;
    let i = 0;

    if(flowerbed.length == 1){
        if(flowerbed[0] == 0 && n<=1){
            return true;
        } else if(flowerbed[0] == 1 && n==0) {
            return true;
        }
        return false
    }
    if(n==0) return true;

    while(i<flowerbed.length){
        if(i==0 && flowerbed[i] == 0 && flowerbed[i+1] == 0){
            //update position and subtract n
            flowerbed[i] = 1;
            N -= 1;
            i+=1;
        } else if (flowerbed[i] == 0 && flowerbed[i+1] == 0 && flowerbed[i-1] == 0){
            flowerbed[i] = 1;
            N -= 1;
            i+=1;
        } else if (i==flowerbed.length-1 && flowerbed[i] == 0 && flowerbed[i-1] == 0) {
            flowerbed[i] = 1;
            N -= 1;
            i+=1;
        }

        if(N == 0){
            res = true;
        }
        i+=1;
    }

    return res;
};