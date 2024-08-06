/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let dict = {};

    let idx=0;
    while(idx<nums.length){
        if(dict[nums[idx]]){
            //check count
            // console.log(nums, idx)
            if(dict[nums[idx]] >= 2){
                dict[nums[idx]] += 1;
                nums.splice(idx, 1);
            } else {
                dict[nums[idx]] += 1;
                idx++
            }
        } else {
            dict[nums[idx]] = 1;
            idx++
        }
    }

    return nums.length;
};