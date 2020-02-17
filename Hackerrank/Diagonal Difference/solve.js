function diagonalDifference(arr) {
    let ind1 = [0, 0], ind2 = [0, arr.length - 1], dir1 = [1,1], dir2 = [1, -1];
    let sum1 = 0, sum2 = 0;

    while(true){
        let [i1, j1] = ind1;
        let [i2, j2] = ind2;
        if(i1>=arr.length){
            break;
        }
        sum1+=arr[i1][j1];
        sum2+=arr[i2][j2];
        ind1[0] += dir1[0];
        ind1[1] += dir1[1];
        ind2[0] += dir2[0];
        ind2[1] += dir2[1];
    }

    return Math.abs(sum1-sum2);
}

let solution = diagonalDifference([
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9]]);
