const fs = require('fs');
isAsteroidBetween = (i, j, p, q, data) => {
    for (let k = Math.min(p, i); k <= Math.max(p, i); k++) {
        for (let l = Math.min(q, j); l <= Math.max(q, j); l++) {
            if((k === p && l === q) || (k === i && l === j)){
                continue;
            }
            if(data[k][l] === '#'){
                if((i - p) * (j - l) === (i - k) * (j - q)){
                    return true
                }
            }
        }
    }
    return false
};
geDegreeBetween = (y1, x1 , y2, x2 ) => {
    const diffY = y2 - y1;
    const realY = y1 - diffY;
    let dx = x2 - x1 , dy = realY - y1;
    return Math.atan2(dy,dx) * 180 / Math.PI;
};
const input = fs.readFileSync('./input2.txt', 'utf8');
const arr =  input.split('\r\n');
//console.log("arr",arr);
const data = [];
const columnL = arr.length;
let rowL = null;
for (let i = 0; i < arr.length; i++) {
    data[i] = [];
    const line = arr[i].split('');
    rowL = line.length;
    for (let j = 0; j < line.length; j++) {
        data[i][j] = line[j]
    }
}
const activeI = 22;
const activeJ = 17;
let degrees = [];
for (let i = 0; i < columnL; i++) {
    for (let j = 0; j < rowL; j++) {
        let symbol = data[i][j];
        if(symbol !== '#'){
            continue;
        }
        if(i === activeI && j === activeJ){
            continue
        }
        let d = geDegreeBetween(activeI, activeJ, i, j);
        degrees.push(d)
    }
}
const uniqDegress =  [...new Set(degrees)];

let totalRemovals = 0;
uniqDegress.sort((a, b) => {
    if(a <= 90 && b > 90) return -1;
    if(b <= 90 && a > 90) return 1;
    if(a >= b) return -1;
    return 1
});

console.log("degrees", uniqDegress);

for (let d of uniqDegress){
    loop2:
        for (let p = 0; p < columnL; p++) {
            for (let q = 0; q < rowL; q++) {
                let symbol = data[p][q];
                if(symbol !== '#'){
                    continue;
                }
                if(p === activeI && q === activeJ){
                    continue
                }
                console.log(`get degree between ${activeI},${activeJ} and ${p},${q} `);
                let sameDegree = geDegreeBetween(activeI, activeJ, p, q) === d;
                if(sameDegree){
                    if(!isAsteroidBetween(activeI, activeJ, p, q, data)){
                        data[p][q] = 'r';
                        totalRemovals ++;
                        if(totalRemovals === 200){
                            console.log(100 * q + p)
                        }
                        break loop2
                    }
                }
            }
        }
}