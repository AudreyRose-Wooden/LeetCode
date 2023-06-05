/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // Initialize memory to all arrays
    let left = new Array(nums.length);
    let right = new Array(nums.length);
    let prod = new Array(nums.length);
    const n = nums.length

    let i, j;

    /* Left most element of left array
    is always 1 */
    left[0] = 1;

    /* Right most element of right
    array is always 1 */
    right[n - 1] = 1;

    /* Construct the left array */
    for (i = 1; i < n; i++)
        left[i] = nums[i - 1] * left[i - 1];

    /* Construct the right array */
    for (j = n - 2; j >= 0; j--)
        right[j] = nums[j + 1] * right[j + 1];

    /* Construct the product array using
    left[] and right[] */
    for (i = 0; i < n; i++)
        prod[i] = left[i] * right[i];

    let answer = prod
    return answer;
};