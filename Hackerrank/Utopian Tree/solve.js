// Complete the utopianTree function below.
function utopianTree(n) {
    let start = 1, isSummer = true;
    for(let i=0; i<n; i++){
        isSummer ? start*=2 : start+=1;
        isSummer = !isSummer;
    }
    return start;
}

let n = 5;
console.log(utopianTree(n));
