// Complete the largestPermutation function below.
function largestPermutation(k, arr) {
    let indexes = {};
    for (let i = 0; i < arr.length; i++) {
        indexes[arr[i]] = i;
    }

    for (let i = 0; i < arr.length && k > 0; i++) {
        let optimalValue = arr.length - i;
        if (arr[i] === optimalValue) {
            continue;
        }

        //4is indexze chawere 1 arr = [1,2,1,3]
        arr[indexes[optimalValue]] = arr[i];
        //1is indexi gaxda 4is indexi rac iyo
        indexes[arr[i]] = indexes[optimalValue];


        arr[i] = optimalValue;
        indexes[optimalValue] = i;


        k--;
    }

    return arr;
}

let answer = largestPermutation(1, [1, 2, 3, 4]);
console.log("answer", answer);
