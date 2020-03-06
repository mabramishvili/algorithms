let countCarrys = (x, y) => {
    let carry = 0, carryOperations = 0, sum = '';
    let max = Math.max(x, y).toString();
    let min = Math.min(x, y).toString();

    let maxEnd = max.length - 1;
    let minEnd = min.length - 1;

    while(minEnd>=0){
        let currentSum = parseInt(max[maxEnd]) + parseInt(min[minEnd]) + carry;
        let value = currentSum;
        if(currentSum > 10){
            carry = 1;
            carryOperations ++;
            value = currentSum % 10;
        }else{
            carry = 0;
        }
        sum = value + sum;
        minEnd--;
        maxEnd--;
    }
    console.log("carry", carryOperations);
};

let answer = countCarrys(15, 17);
console.log("answer", answer);
