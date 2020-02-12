// Complete the sherlockAndAnagrams function below.
function sherlockAndAnagrams(s) {
    let substrings = getAllSubstrings(s);
    let anagramCount = 0;
    for (let i = 0; i < substrings.length; i++) {
        for (let j = i + 1; j < substrings.length; j++) {
            let substring1 = substrings[i];
            let substring2 = substrings[j];
            if (substring1.length === substring2.length) {
                let isAnagram = true;
                let charMap1 = getCharMap(substring1);
                for (let s of substring2) {
                    if (!charMap1[s]) {
                        isAnagram = false;
                        break;
                    }
                    charMap1[s] = charMap1[s] - 1;
                }
                if (isAnagram) {
                    anagramCount++;
                }
            }
        }
    }
    return anagramCount;
}

function getAllSubstrings(s) {
    let substrings = [];
    for (let i = 0; i < s.length; i++) {
        let temp = "";
        for (let j = i; j < s.length; j++) {
            temp += s[j];
            substrings.push(temp);
        }
    }
    return substrings;
}

function getCharMap(s) {
    let charMap = {};
    for (let char of s) {
        charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap;
}

sherlockAndAnagrams("abba");