function twoPluses(grid) {
    let ans = 0;
    for (let key in grid) {
        grid[key] = grid[key].split("");
    }
    for (let x = 0; x < grid.length; x++) {
        for (let y = 0; y < grid[0].length; y++) {
            let r = 0;
            while (grid[x + r] && grid[x - r] && grid[x + r][y] == 'G' && grid[x - r][y] == 'G' &&
            grid[x][y + r] == 'G' && grid[x][y - r] == 'G') {
                grid[x + r][y] = grid[x - r][y] = grid[x][y + r] = grid[x][y - r] = '-';
                for (let p = 1; p <= grid.length; p++) {
                    for (let k = 1; k <= grid[0].length; k++) {
                        let R = 0;
                        while (grid[p + R] && grid[p - R] && grid[p + R][k] == 'G' && grid[p - R][k] == 'G' &&
                        grid[p][k + R] == 'G' && grid[p][k - R] == 'G') {
                            ans = Math.max(ans, (1 + 4 * r) * (1 + 4 * R));
                            R++;
                        }
                    }
                }
                r++;
            }
            r = 0;
            while (grid[x - r] && grid[x + r] && grid[x + r][y] == '-' && grid[x - r][y] == '-' &&
            grid[x][y + r] == '-' && grid[x][y - r] == '-') {
                grid[x + r][y] = grid[x - r][y] = grid[x][y + r] = grid[x][y - r] = 'G';
                r++;
            }
        }
    }
    return ans;
}

let grid = [
    'GGGGGG',
    'GBBBGB',
    'GGGGGG',
    'GGBBGB',
    'GGGGGG'
];

twoPluses(grid);