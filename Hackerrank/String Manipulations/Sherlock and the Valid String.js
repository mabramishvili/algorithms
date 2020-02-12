// Complete the isValid function below.
function isValid(s) {
    console.log("here");
    console.log("s",s);
    let charMap = {}, occurances = {}, min = Infinity, max = -Infinity, minKey = -1, maxKey = -1;
    for(let char of s){
        charMap[char] = charMap[char] + 1 || 1;
    }

    if(checkValid(charMap)){
        return "YES";
    }

    for(let key in charMap){
        if(charMap[key] > max){
            max = charMap[key];
            maxKey = key;
        }
        if(charMap[key] < min){
            min = charMap[key];
            minKey = key;
        }
    }

    let tmp = {...charMap};
    tmp[maxKey] = tmp[maxKey] - 1;
    if(tmp[maxKey]===0){
        delete tmp[maxKey];
    }

    if(checkValid(tmp)){
        return "YES";
    }

    charMap[minKey] = charMap[minKey] - 1;
    if(charMap[minKey]===0){
        delete charMap[minKey];
    }


    if(checkValid(charMap)){
        return "YES";
    }

    return "NO";

}

function checkValid(obj){
    let char = "";
    for(let key in obj){
        if(char && obj[key]!==char) return false;
        char = obj[key];
    }
    return true;
}

let result = isValid("abbac");
console.log(result);