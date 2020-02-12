isCryptSolution = (crypt, solution) => {
    let stringifiedCrypt = crypt.join(",");
    for (let sol of solution) {
        stringifiedCrypt = stringifiedCrypt.split(sol[0]).join(sol[1]);
    }
    const cryptArr = stringifiedCrypt.split(",");
    for(let element of cryptArr){
        if(element.startsWith(("00")) || (element.startsWith("0") && element!=0)){
            return false;
        }
    }
    return parseInt(cryptArr[0]) + parseInt(cryptArr[1]) === parseInt(cryptArr[2]);
};

let answer = isCryptSolution(["TEN", "TWO", "ONE"],
        [
            ["O","1"],
            ["T","0"],
            ["W","9"],
            ["E","5"],
            ["N","4"]
    ]);

console.log(answer);