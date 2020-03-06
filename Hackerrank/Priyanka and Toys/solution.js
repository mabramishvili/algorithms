// Complete the toys function below.
function toys(w) {
    w = w.sort((a,b)=>a-b);
    let containerCount = 1, minElement = w[0];
    for(let i=0; i<w.length; i++){
        if(w[i]>minElement+4){
            containerCount++;
            minElement = w[i];
        }
    }

    console.log(containerCount);

    console.log(w);

}

let answer = toys([1,2,3,4,5,10,11,12,13]);
