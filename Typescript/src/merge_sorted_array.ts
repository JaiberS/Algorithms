/*
    You are given two integer arrays nums1 and nums2, sorted in non-decreasing order
    and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

    Merge nums1 and nums2 into a single array sorted in non-decreasing order.

    The final sorted array should not be returned by the function, but instead be stored inside the array nums1. 
    To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged
    and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

    Constraints:

    nums1.length == m + n
    nums2.length == n
    0 <= m, n <= 200
    1 <= m + n <= 200
    -109 <= nums1[i], nums2[j] <= 109

 */
 export function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    if (n == 0) return;
    let k = n + m - 1 as number;
    let i = m - 1 as number;
    let j = n - 1 as number
    for (let newArrayLen = 0 as number; newArrayLen < n + m; newArrayLen++) {
        if(nums2[j] == undefined || nums1[i] >= nums2[j]){
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }
};