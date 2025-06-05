var longestPalindrome = function(s) {
    let startInit = 0
    let endInit = 0
    if (s.length < 2){
        return s
    }
    const findPalindrome = (start, end) => {
        while(start >= 0 && end < s.length && s[start] === s[end]){
            start--
            end++
        }
        return [start + 1, end - 1]
    }
    for (let i = 0; i < s.length; i++) {
        let [startOdd, endOdd] = findPalindrome(i, i)
        let [startEven, endEven] = findPalindrome(i, i + 1)
        if (endOdd - startOdd > endInit - startInit) {
            startInit = startOdd
            endInit = endOdd
        }
        if (endEven - startEven > endInit - startInit) {
            startInit = startEven
            endInit = endEven
        }
    }

    return s.substring(startInit, endInit + 1);
};