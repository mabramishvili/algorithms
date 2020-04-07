function dynamicArray(n, queries) {
    // Write your code here
    let seqList = [], answer = [], lastAnswer = 0;
    for(let i=0; i<n; i++){
        seqList[i] = [];
    }
    for (let query of queries) {
        let [type, x, y] = query;
        let index = (x ^ lastAnswer) % n;
        if (type === 1) {
            seqList[index].push(y);
        } else {
            let ind = y % seqList[index].length;
            lastAnswer = seqList[index][ind];
            answer.push(lastAnswer);
        }
    }
    return answer;
}


let n = 2;
let queries = [[1, 0, 5], [1, 1, 7], [1, 0, 3], [2, 1, 0], [2, 1, 1]];
dynamicArray(n, queries);