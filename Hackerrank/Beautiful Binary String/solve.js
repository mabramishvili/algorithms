// Complete the beautifulBinaryString function below.
function beautifulBinaryString(b) {
    let counter = 0, arr = b.split("");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '0' && arr[i + 1] === '1' && arr[i + 2] === '0') {
            arr[i + 2] = '1';
            counter++;
        }
    }
    return counter;
}

let answer = beautifulBinaryString("0101010");

console.log("answer", answer);
