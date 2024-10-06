/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let v1 = version1.split(".");
    let v2 = version2.split(".");

    let p1 = 0;
    let p2 = 0;

    for(let i=0; i<Math.max(v1.length, v2.length); i++){
        if(i>= v1.length){
            p1 = 0
        } else {
            p1 = parseInt(v1[i])
        }
        if(i >= v2.length){
            p2 = 0;
        } else {
            p2 = parseInt(v2[i])
        }


        if(p1 < p2){
            console.log(p1, p2)
            return -1
        } else if (p1 > p2){
            return 1
        }

    }

    return 0
};