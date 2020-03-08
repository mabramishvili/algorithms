function kaprekarNumbers(p, q) {
    let ans = "";
    for(let i=p; i<=q; i++){
        if(check(i))
            ans += `${i} `;
    }
    ans = ans.trimEnd();
    console.log(ans || 'INVALID RANGE');
}

function check(n) {
    let d = n.toString().length, square = Math.pow(n, 2).toString();
    let right = square.slice(square.length-d),
        left = ~~square.slice(0, square.length-d);
    return parseInt(left) + parseInt(right) === n;
}

let p = 1, q = 100;
console.log(kaprekarNumbers(p, q));