/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   let map = {};
   
   for(let idx=0; idx<nums.length; idx++){
    let curr = nums[idx];

    if(map[curr]){
        map[curr].push(idx);
    } else {
        map[curr] = [idx];
    }
   }

   for(let idx=0; idx<nums.length; idx++){
    let curr = nums[idx];
    let comp = target-curr;

    if(map[comp] && comp !== curr){
        return [idx, ...map[comp]]
    } else if(map[comp] && comp==curr && map[comp].length > 1){
        return map[comp]
    }
   }

    reutrn -1;
};