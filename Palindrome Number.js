var isPalindrome = function(x) {
    let result = 0
    let pow = 0
    let count = x
    let copyX = x
    while(count >= 10){
        count = Math.floor(count / 10)
        pow++
        console.log(count)
        console.log(pow)
    }
    while(copyX > 0){
        result += (copyX % 10) * Math.pow(10, pow)
        console.log(result)
        copyX = Math.floor(copyX / 10)
        pow--
    }
    return result === x
};