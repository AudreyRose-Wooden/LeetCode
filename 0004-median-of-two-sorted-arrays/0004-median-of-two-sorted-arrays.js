/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let arr = [...nums1, ...nums2];
    arr.sort((a,b) => a-b);

    if(arr.length%2 != 0){
        let mid = Math.floor(arr.length/2)
        return arr[mid];
    } else {
        let l = arr.length/2;
        let r = l-1;
        console.log(l,r)

        return((arr[l]+arr[r])/2)
    }
};