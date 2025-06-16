var maxArea = function(height) {
    let left = 0
    let right = height.length - 1
    let finalWater = 0
    while(left < right){
        let height = height[left] < height[right] ? height[left] : height[right]
        finalWater = finalWater > (height * (right - left)) ? finalWater : (height * (right - left))
        if(height[left] < height[right]){
            left++
        }else{
            right--
        }
    }
    return finalWater
};