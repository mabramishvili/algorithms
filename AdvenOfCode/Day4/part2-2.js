const isValid = (password) => {
    let twoAdjacent = false, onlyIncreasing = true;
    for (let i = 0; i < password.length; i++) {
        if (password[i - 1] !== password[i] && password[i] === password[i + 1] && password[i] !== password[i + 2])
            twoAdjacent = true;
        if (Number(password[i]) > Number(password[i + 1]))
            onlyIncreasing = false;
    }
    return twoAdjacent && onlyIncreasing;
};
solve = (start,end) => {
    let counter = 0;
    for (let i = start; i <= end; i++)
        if (isValid(`${i}`))
            counter++;
    return counter;
};