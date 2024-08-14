/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);

    let answer = [[],[]]
    const arr1 = Array.from(set1)
    for(let elem of arr1){
        if(!set2.has(elem)){
            answer[0].push(elem);
        }
    }

    const arr2 = Array.from(set2)
    for(let elem of arr2){
        if(!set1.has(elem)){
            answer[1].push(elem);
        }
    }

    return answer
};