function mergeStrings(s1, s2) {
    let mergedString = "", map1 = {}, map2 = {};
    for (let char of s1) {
        map1[char] = map1[char] + 1 || 1;
    }
    for (let char of s2) {
        map2[char] = map2[char] + 1 || 1;
    }

    while (s1.length !== 0 && s2.length !== 0) {
        if (map1[s1[0]] > map2[s2[0]] || (map1[s1[0]] === map2[s2[0]] && s1[0] > s2[0])) {
            mergedString += s2[0];
            s2 = s2.substr(1);
        } else {
            mergedString += s1[0];
            s1 = s1.substr(1);
        }
    }

    mergedString = mergedString + s1 + s2;
    return mergedString;
}

let answer = mergeStrings("super", "tower");
console.log("answer", answer);