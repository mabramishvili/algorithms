function twoStrings(s1, s2) {
    let s1Map = {}, s2Map = {};
    for(let char of s1){
        s1Map[char] = s1Map[char] + 1 || 1;
    }
    for(let char of s2){
        s2Map[char] = s2Map[char] + 1 || 1;
    }
    for(let key in s1Map){
        if(s2Map[key]){
            return "YES";
        }
    }
    return "NO";
}