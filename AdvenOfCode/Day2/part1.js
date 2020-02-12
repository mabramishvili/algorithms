function solve(){
    const request = require('request');
    request.get('https://pastebin.com/raw/mM3xnmWH', function (error, response, body) {
        let arr = body.split(",").map(Number), curPos = 0; arr[1] = 12; arr[2] = 2;
        while(curPos<arr.length){
            let operation = arr[curPos];
            switch (operation) {
                case 1:
                    arr[arr[curPos+3]] = arr[arr[curPos+1]]+arr[arr[curPos+2]];
                    curPos+=4;
                    break;
                case 2:
                    arr[arr[curPos+3]] = arr[arr[curPos+1]]*arr[arr[curPos+2]];
                    curPos+=4;
                    break;
                default:
                    console.log("answer", arr[0]);
                    return;
            }
        }
    });
}

solve();