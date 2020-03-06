// Complete the viralAdvertising function below.
function viralAdvertising(n) {
    let sum = 0, people = 5;
    for(let i=0; i<n; i++){
        let liked = Math.floor(people/2);
        sum+=liked;
        people = liked*3;
    }
    return sum;
}

let n = 5;
console.log(viralAdvertising(n));
