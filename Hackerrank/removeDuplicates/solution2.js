// Complete the triplets function below.
function triplets(a, b, c) {
    let counter = 0, i = 0, j = 0;
    a = sortDistinct(a);
    b = sortDistinct(b);
    c = sortDistinct(c);

    for (let val of b) {
        while (i < a.length && a[i] <= val) {
            i++;
        }
        while (j < c.length && c[j] <= val) {
            j++;
        }
        counter += i * j;
    }

    return counter;

}

let sortDistinct = (a) => {
    a.sort((a, b) => a - b);
    return [...new Set(a)];
};

let a = [3, 5, 7];
let b = [3, 6];
let c = [4, 6, 9];

console.log(triplets(a, b, c));
