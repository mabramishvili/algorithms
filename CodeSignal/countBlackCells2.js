function countBlackCells(n, m) {
    if (n == m) return (n + 2 * (n - 1));
    if (n == 1 || m == 1) return n * m;
    let g = m, gcd = n;
    while (g) {
        t = gcd;
        gcd = g;
        g = t % gcd;
    }
    return n + m - gcd + (gcd - 1) * 2;
}