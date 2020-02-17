function getTotalX(a, b) {
    // Write your code here
    let max = Math.max(...b), res = [];
    for(let i=max; i>=1; i--){
        let isValid = true;
        for(let val of b){
            if(val % i !== 0){
                isValid = false;
                break;
            }
        }
        for(let val of a){
            if(i % val !== 0){
                isValid = false;
                break;
            }
        }
        if(isValid) {
            res.push(i);
        }
    }
    return res.length;
}

let solve = getTotalX([2,6], [24, 36]);
console.log("answer", solve);
