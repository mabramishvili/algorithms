// Complete the substrCount function below.
let memoize = {};
function substrCount(n, s) {
    let counter = 0;
    for (let i = 0; i < n; i++) {
        let tmp = "";
        for (let j = i; j < n; j++) {
            tmp = tmp += s[j];
            if(memoize[tmp]){
                counter++;
            }
            else if(memoize[tmp] !== false && isSpecial(tmp)){
                counter++;
            }
        }
    }
    return counter;
}

function isSpecial(s) {
    if(s.length === 1){
        memoize[s] = true;
        return true;
    }
    for(let i=1; i<s.length; i++){
        if(s.length % 2 === 0) {
            if (s[i] !== s[0]) {
                memoize[s] = false;
                return false;
            }
        }else {
            if (s[i] !== s[0] && i !== (s.length - 1) / 2) {
                memoize[s] = false;
                return false;
            }
        }
    }

    memoize[s] = true;
    return true;
}

const answer = substrCount(8, "mnonopoo");
console.log("answer", answer);