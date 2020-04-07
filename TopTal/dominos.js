let dominoChain = (chain) => {
    let arr = chain.split(","), counter = 1, max = 1;
    if(arr.length == 0){
        return 0;
    }
    let start = arr[0];
    for(let i=1; i<arr.length; i++){
        let next = arr[i];
        if(start[2] === next[0]){
            counter++;
        }else{
            counter = 1;
        }
        max = Math.max(max, counter);
        start = next;
    }
    return max;
};

let chain = '3-3,3-4,4-8,2-2,5-5,5-5,5-5,5-5,5-5';
console.log(dominoChain(chain));