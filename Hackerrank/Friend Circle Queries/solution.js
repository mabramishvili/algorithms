// Complete the maxCircle function below.
let answer = [];
function maxCircle(queries) {
    let sets = Array(queries.length), map = {};
    for(let i=0; i<queries.length; i++){
        sets[i] = new Set();
    }

    for(let i=0; i<queries.length; i++){
        let [a,b] = queries[i];
        let union = new Set([a,b]);
        let index = false;
        if(a in map){
            index = map[a];
            for(let value of sets[index]){
                union.add(value);
            }
        }
        if(b in map){
            index = map[b];
            for(let value of sets[map[b]]){
                union.add(value);
            }
        }
        if(index !== false){
            sets[index] = union;
            for(let value of union){
                map[value] = index;
            }
            printMax(sets);
            continue;
        }
        sets[i].add(a);
        sets[i].add(b);
        map[a] = i;
        map[b] = i;
        printMax(sets);
    }
    return answer;
}

let printMax = (arr) => {
    let max = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i].size > max){
            max = arr[i].size;
        }
    }
    answer.push(max);
};

let queries = [[1000000000,23], [11, 3778], [7, 47], [11, 1000000000]];
maxCircle(queries);