var findMedianSortedArrays = function(nums1, nums2) {
    let nums3 = [...nums1,...nums2].sort((a,b) => a-b)
    let arrLength = nums3.length
    let result = 0
    if(arrLength % 2 === 1){
        result = nums3[arrLength / 2 ]
    }else{
        result = (nums3[arrLength / 2 - 1] + nums3[arrLength / 2]) / 2
    }
    return result
};