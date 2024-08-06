/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    let seen = new Set();

    let idx = 0;
    while(idx<nums.length){
        if(seen.has(nums[idx])){
            //remove index
            nums.splice(idx, 1);
        } else {
            seen.add(nums[idx]);
            idx++;
        }
    }

    return nums.length;
    
};