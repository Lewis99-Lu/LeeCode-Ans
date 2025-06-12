var isMatch = function(s, p) {
    if(p.length === 0) return s.length === 0
    let firstCharMatch = s.length > 0 && (p[0] === s[0] || p[0] === ".")
    if(p[1] === "*" && p.length >= 2){
        return isMatch(s, p.slice(2)) || firstCharMatch && isMatch(s.slice(1), p)
    }else{
        return firstCharMatch && isMatch(s.slice(1), p.slice(1))
    }
};