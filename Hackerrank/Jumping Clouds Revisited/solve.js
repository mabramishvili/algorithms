// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c, k) {
    let e = 100, started = false, position = 0;
    while (position != 0 || !started) {
        started = true;
        position = (position + k) % c.length;
        if (c[position] === 1) {
            e -= 3;
        } else {
            e -= 1;
        }
    }
    return e;
}

let c = [0, 0, 1, 0];
let k = 2;

console.log(jumpingOnClouds(c, k));
