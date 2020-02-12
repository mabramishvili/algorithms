// Complete the makeAnagram function below.
function makeAnagram(a, b) {
    let charMap1 = {}, charMap2 = {}, operations = 0;
    for(let char of a){
        charMap1[char] = charMap1[char] + 1 || 1;
    }
    for(let char of b){
        charMap2[char] = charMap2[char] + 1 || 1;
    }

    for(let key in charMap1){
        if(!charMap2[key]){
            operations+=charMap1[key];
        }
        else if(!charMap2[key]!==charMap1[key]){
            operations+=Math.abs(charMap1[key]-charMap2[key]);
        }
    }

    for(let key in charMap2){
        if(!charMap1[key]){
            operations+=charMap2[key];
        }
    }
    console.log(operations);
    return operations;
}

makeAnagram("wwwwwww", "aaww");