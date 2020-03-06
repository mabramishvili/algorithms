// Complete the staircase function below.
function staircase(n) {
    let spaces='', arr=[];
    for(let i=n; i>0; i--){
        let line = spaces;
        for(let k=0; k<i; k++){
            line+='#';
        }
        spaces+=' ';
        arr.unshift(line);
    }
    for(let line of arr){
        console.log(line);
    }
}

let answer = staircase(5);
