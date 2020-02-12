function solution(arr){
    let sum = arr.reduce((a, b) => a + b), totalSum = sum * arr.length;
    console.log("SUM",sum);
    for (let i in arr) {
        let tmp = 10;
        for (let j = 0; j < arr[i].toString().length-1; j++)
            tmp *= 10;
        console.log("tmp",tmp);
        console.log("sum*tmp",sum * tmp);
        totalSum += sum * tmp;
    }
    console.log(totalSum);
    return totalSum;
}


solution( [111, 22]);