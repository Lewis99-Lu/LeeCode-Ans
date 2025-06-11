var myAtoi = function(s) {
    s = s.replaceAll(/^\s+/g,"")
    let result = ""
    for(let i = 0; i < s.length; i++){
        if( i === 0 && s[i] === "-"){
            result += "-"
            continue
        }
        if( i === 0 && s[i] === "+"){
            continue
        }
        let checkIsNum = parseInt(s[i])
        if(isNaN(checkIsNum)){
            break;
        }else{
            result += s[i]
        }
    }
    let num = parseInt(result);
    if (isNaN(num)) return 0;
    if(num > (Math.pow(2, 31)) - 1) return (Math.pow(2, 31)) - 1
    if(num < Math.pow(-2, 31)) return Math.pow(-2, 31)
    return num
};