function solve(){
    const request = require('request');
    request.get('https://pastebin.com/raw/mM3xnmWH', function (error, response, body) {
        let arr = body.split(",").map(Number), curPos = 0;
        let originalArr = [...arr];

        while(arr[0]!==19690720) {
            for(let i=0; i<=99; i++){
                for(let j=0; j<=99; j++){
                    arr = [...originalArr];
                    arr[1] = i;
                    arr[2] = j;
                    curPos = 0;
                    whileLoop:
                    while (curPos < arr.length) {
                        let operation = arr[curPos];
                        switch (operation) {
                            case 1:
                                arr[arr[curPos + 3]] = arr[arr[curPos + 1]] + arr[arr[curPos + 2]];
                                curPos += 4;
                                break;
                            case 2:
                                arr[arr[curPos + 3]] = arr[arr[curPos + 1]] * arr[arr[curPos + 2]];
                                curPos += 4;
                                break;
                            default:
                                if(arr[0]===19690720){
                                    console.log("Noun",i);
                                    console.log("Verb",j);
                                    console.log("answer",100*i+j);
                                    return;
                                }
                                break whileLoop;
                        }
                    }
                }
            }
        }

    });
}

solve();