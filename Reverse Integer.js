var reverse = function(x) {
    let num = x > 0 ?  x : x * -1 
    const reverseFun = () => {
        let numArr = String(num).split("")
        let currentNum = ""
        let position = numArr.length - 1
        let changeTimes = numArr.length % 2 === 0 ? numArr.length / 2 : Math.floor(numArr.length / 2)
        for(let i = 0; i < changeTimes; i++){
            currentNum = numArr[position]
            numArr[position] = numArr[i]
            numArr[i] = currentNum
            position--
        }
        for(let j = 0; j < numArr.length + 1; j++){
            if(numArr[j] === 0){
                numArr.shift()
            }else{
                break;
            }
        }
        if(Number(numArr.join("")) > (Math.pow(2, 31) - 1) || 
            Number(numArr.join("")) < Math.pow(-2, 31) || 
            Number(numArr.join("")) === 0) return 0
        return x > 0 ? Number(numArr.join("")) : (Number(numArr.join(""))) * -1
    }
    return reverseFun()
};