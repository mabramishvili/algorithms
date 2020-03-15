// Complete the happyLadybugs function below.
function happyLadybugs(b) {
    let map = {};
    if(checkValid(b)){
        return 'YES';
    }
    for(let char of b){
        map[char] = map[char] + 1 || 1;
    }
    if(!map['_']){
        return 'NO';
    }
    for(let key in map){
        if(key !== '_' && map[key] === 1){
            return 'NO';
        }
    }
    return 'YES';
}

function checkValid(b){
    for(let i=0; i<b.length; i++){
        if(b[i-1] !== b[i] && b[i+1] !== b[i]){
            return false;
        }
    }
    return true;
}

let b = "YYR_B_BR";
console.log(happyLadybugs(b));