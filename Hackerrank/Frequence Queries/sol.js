// Complete the freqQuery function below.
function freqQuery(queries) {
    let obj = {}, freq = {}, answers = [];

    for(let query of queries){
        let operation = query[0], value = query[1];
        switch (operation) {
            case 1:
                if(obj[value]){
                    freq[obj[value]] = freq[obj[value]] - 1 || 0;
                }
                obj[value] = obj[value] + 1 || 1;
                freq[obj[value]] = freq[obj[value]] + 1 || 1;
                break;
            case 2:
                if(obj[value]){
                    freq[obj[value]] = freq[obj[value]] - 1 || 0;
                }
                if(obj[value]){
                    obj[value] = obj[value] - 1;
                }
                if(obj[value]){
                    freq[obj[value]] = freq[obj[value]] + 1 || 1;
                }
                break;
            case 3:
                if(freq[value]>0){
                    answers.push(1);
                }else{
                    answers.push(0);
                }
                break;
        }
    }

    return answers;
}

let result = freqQuery([[1,5], [1,6], [3,2], [1,10], [1,10], [1,6], [2,5], [3,2]]);