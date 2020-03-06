// Complete the commonChild function below.
let memo = {};

function commonChild(s1, s2) {
    return lcs(s1, s2, s1.length, s2.length);
}

/* Returns length of LCS for X[0..m-1], Y[0..n-1] */
let lcs = ( X, Y, m, n ) =>
{
    let L = {};
    let i,j;
    for (i = 0; i <= m; i++)
    {
        L[i] = {};
        for (j = 0; j <= n; j++)
        {
            if (i == 0 || j == 0)
                L[i][j] = 0;
            else if (X[i - 1] == Y[j - 1])
                L[i][j] = L[i - 1][j - 1] + 1;
            else
                L[i][j] = Math.max(L[i - 1][j], L[i][j - 1]);
        }
    }
    return L[m][n];
};

let s1 = "OUDFRMYMAW";
let s2 = "AWHYFCCMQX";

let answer = commonChild(s1, s2);
console.log("answer", answer);
