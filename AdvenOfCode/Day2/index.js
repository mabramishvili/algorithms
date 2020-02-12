function solve(){
    const request = require('request');
    request.get('https://pastebin.com/raw/y14vra6M', function (error, response, body) {
        let totalSum = 0;
        for(let fuel of body.split("\n")){
            let sum = 0, tmp = Math.floor(parseInt(fuel)/3)-2;
            while(tmp>0){
                sum+=tmp;
                tmp = Math.floor(tmp/3)-2;
            }
            totalSum+=sum;
        }
        console.log(totalSum);
    });
}

solve();