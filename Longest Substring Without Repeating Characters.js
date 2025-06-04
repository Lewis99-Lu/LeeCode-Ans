var lengthOfLongestSubstring = function(s) {
    let set = new Set()
    let start = 0
    let maxLength = 0
    for(let end = 0; end < s.length; end++){
        while(set.has(s.at(end))){
            set.delete(s.at(start))
            start ++
        }
        set.add(s.at(end))
        maxLength = maxLength > (end - start + 1) ? maxLength : (end - start + 1)
    }
    return maxLength
};