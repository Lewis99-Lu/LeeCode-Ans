var convert = function(s, numRows) {
    //紀錄位置要遞增或遞減
    let step = 0
    //紀錄當前要插入的索引位置
    let location = 0
    let result = new Array(numRows).fill("")
    if(s.length <= numRows || numRows === 1) return s
    for(let i = 0; i < s.length; i++){
        result[location] += s[i]
        //位置等於0開始遞增
        if(location === 0){
            step = 1
        }
        //索引位置到達最後一個，開始遞減
        else if(location === numRows - 1){
            step = -1
        }
        location += step
    }
    return result.join("")
};