let countCarrys = (x, y) => {
    let carry = 0, carryOperations = 0, sum = '';
    let max = Math.max(x, y).toString();
    let min = Math.min(x, y).toString();

    let maxEnd = max.length - 1;
    let minEnd = min.length - 1;

    while (minEnd >= 0 || maxEnd >= 0) {
        let minSum = minEnd >= 0 ? parseInt(min[minEnd]) : 0;
        let currentSum = parseInt(max[maxEnd]) + minSum + carry;
        let value = currentSum;
        if (currentSum >= 10) {
            carry = 1;
            carryOperations++;
            value = currentSum % 10;
        } else {
            carry = 0;
        }
        sum = value + sum;
        minEnd--;
        maxEnd--;
    }
    if(carry){
        sum = carry + sum;
    }
    console.log("sum", sum);
};

let answer = countCarrys(9999, 99);
console.log("answer", answer);
