
let solution = () => {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < arr.length; i++) {
        let left = [...arr];
        left.splice(i, 1);
        traverse([arr[i]], left);
    }
};
let traverse = (current, left) => {
    if (current.length === 9 && checkMagicMatrix(current))
        printMatrix(current);
    for (let i = 0; i < left.length; i++) {
        let newCurrent = current.concat(left[i]);
        let newLeft = [...left];
        newLeft.splice(i, 1);
        traverse(newCurrent, newLeft);
    }
};

let printMatrix = (matrix) => {
    console.log(matrix[0]+ " " + matrix[1] + " "+ matrix[2]);
    console.log(matrix[3]+ " " + matrix[4] + " "+ matrix[5]);
    console.log(matrix[6]+ " " + matrix[7] + " "+ matrix[8]);
    console.log("---------");
};

let checkMagicMatrix = (arr) => {
    return !(arr[0] + arr[1] + arr[2] !== 15
        || arr[3] + arr[4] + arr[5] !== 15
        || arr[6] + arr[7] + arr[8] !== 15
        || arr[0] + arr[3] + arr[6] !== 15
        || arr[1] + arr[4] + arr[7] !== 15
        || arr[2] + arr[5] + arr[8] !== 15
        || arr[0] + arr[4] + arr[8] !== 15
        || arr[2] + arr[4] + arr[6] !== 15);
};

console.log("sol", solution());