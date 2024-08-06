/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    if(nums.length <=2) return nums[0]
    let majority = Math.ceil(nums.length/2);
    let dict ={};

    for(let elem of nums){
        if(dict[elem]){
            dict[elem] += 1;
            if(dict[elem] == majority){
                return elem
            }
        } else {
            dict[elem] = 1
        }
    }
};