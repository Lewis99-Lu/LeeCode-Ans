var intToRoman = function(num) {
    let result = ""
    const romanIntMap = [['M',1000],['CM',900],['D',500],['CD',400],['C',100],['XC',90],['L',50],['XL',40],['X',10],['IX',9],['V',5],['IV',4],['I',1]]
    for(let key = 0;key < romanIntMap.length; key++){
        let [roman,value] = romanIntMap[key]
        while(num >= value){
            num -= value
            result += roman
        }
    }
    return result
};