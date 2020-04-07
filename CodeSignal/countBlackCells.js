function countBlackCells(n, m) {
    if (n == m) return (n + 2 * (n - 1));
    if (n == 1 || m == 1) return n * m;
    return n + m - gcd(n, m) + (gcd(n, m) - 1) * 2;
}

function gcd(a, b) {
    return !a ? b : gcd(b % a, a);
}