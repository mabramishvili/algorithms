// Complete the triplets function below.
let counter = 0, used = {};
function triplets(a, b, c) {
    for(let i=0; i<a.length; i++){
        traverse([a[i]], b, c);
    }
    return counter;
}

function traverse(current, leftB, leftC){
    //console.log(`traverse`, current, leftB, leftC);
    if(current.length === 3){
        let key = current.join(",");
        if(!used[key]){
            counter++;
            used[key] = true;
        }
        return;
    }
    if(current.length === 1){
        for(let i=0; i<leftB.length; i++){
            if(leftB[i] >= current[0]){
                let newLeftB = [...leftB];
                newLeftB.splice(i, 1);
                let newCurrent = current.concat(leftB[i]);
                traverse(newCurrent, leftB, leftC);
            }
        }
    }
    if(current.length === 2){
        for(let i=0; i<leftC.length; i++){
            if(leftC[i] <= current[1]){
                let newLeftC = [...leftC];
                newLeftC.splice(i, 1);
                let newCurrent = current.concat(leftC[i]);
                traverse(newCurrent, leftB, leftC);
            }
        }
    }
}


let a = [3,5,7];
let b = [3,6];
let c = [4,6,9];

console.log(triplets(a,b,c));
