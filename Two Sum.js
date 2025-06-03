var twoSum = function (nums, target) {
    let result = []
    for(index = 0; index < nums.length; index++){
        for(innerIndex = index + 1; innerIndex < nums.length; innerIndex++){
            if(nums[index] + nums[innerIndex] === target){
                result.push(index)
                result.push(innerIndex)
                return result
            }
        }
    } 
};