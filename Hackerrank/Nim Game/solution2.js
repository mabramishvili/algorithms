function nimGame(pile) {
    let x = 0;
    for (let stones of pile){
        x ^= stones;
    }
    return x ? "First" : "Second";
}

let pile = [1,2,3,4,5];

console.log(nimGame(pile));