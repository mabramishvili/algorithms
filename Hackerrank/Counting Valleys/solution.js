function solve(n, s) {
    let valleysCount = 0, currentLevel = 0;
    for (let char of s) {
        if (currentLevel === 0 && char === 'D')
            valleysCount++;
        char === 'U' ? ++currentLevel : --currentLevel;
    }
    return valleysCount;
}

solve(8, 'UDDDUDUU');