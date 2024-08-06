/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    function rev(arr, start, end){
        while(start<end){
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    }

    k%=nums.length
    rev(nums, 0, nums.length-1);
    rev(nums, 0, k-1);
    rev(nums, k, nums.length-1)
};