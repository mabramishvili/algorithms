function rotateImage(a) {
    let answer = a.map(
        (row, rowIndex) => {
            return a.map(val => {
                console.log("val", val);
                console.log("val at index", val[rowIndex]);
                return val[rowIndex]
            }).reverse()
        }
    );
    return answer;
}

let answer = rotateImage(
    [[1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]]);

console.log("answer", answer);