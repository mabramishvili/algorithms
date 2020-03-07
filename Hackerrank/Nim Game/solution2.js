function nimGame(pile) {
    let x = 0;
    for(let stones of pile)
        x ^= stones;
    return x?"First":"Second";
}

let pile = [3, 2, 4];

console.log(nimGame(pile));