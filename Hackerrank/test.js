function getNex10sValue(input) {
    let length = input.toString().length;
    if(length === 1){
        return 10;
    }
    let mult = Math.pow(10, (length - 1));
    if (input % mult)
        return input + (mult - input % mult);
    return input
}

console.log(getNex10sValue(1));