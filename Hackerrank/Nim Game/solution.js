// Complete the nimGame function below.
let map = {};

function nimGame(pile) {

    let counts = {}, included = {}, newPile = [];
    for(let val of pile){
        counts[val] = counts[val] + 1 || 1;
    }

    for(let el of pile){
        if(counts[el] % 2 === 1 && !included[el]){
            newPile.push(el);
            included[el] = true;
        }
    }

    pile = newPile;

    for (let i=0; i<pile.length; i++) {
        for(let j=1; j<=pile[i]; j++){
            let arr = [...pile], moves1 = [`${i},${j}`];
            arr[i] = arr[i] - j;
            traverse(arr, moves1, [], 2);
        }
    }
    for (let key in map){
        if(map[key] === 1){
            return "First";
        }
    }
    return "Second";
}

let traverse = (left, moves1, moves2, toMove) => {
    let allZero = true;
    for(let val of left){
        if(val !== 0){
            allZero = false;
            break;
        }
    }
    if(allZero){
        let combinationMoves = moves1.join("/");
        if(toMove === 1){
            map[combinationMoves] = -1;
        } else if(map[combinationMoves] !== -1){
            map[combinationMoves] = 1;
        }
        return;
    }
    for (let i=0; i<left.length; i++) {
        for(let j=1; j<=left[i]; j++){
            let arr = [...left], moves1New = [...moves1], moves2New = [...moves2], newToMove;
            if(toMove === 1){
                moves1New.push(`${i},${j}`);
                newToMove = 2;
            }else{
                moves2New.push(`${i},${j}`);
                newToMove = 1;
            }
            arr[i] = arr[i] - j;
            traverse(arr, moves1New, moves2New, newToMove);
        }
    }

};

let pile = [3, 2, 4, 4, 4];

console.log(nimGame(pile));