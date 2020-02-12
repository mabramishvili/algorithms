function solve(k, z){
    let counter = 0;
    for(let i=k; i<=z; i++){
        let num = i.toString(), isValid = false;
        for(let j=0; j<num.length; j++){
            if(j+1<num.length && parseInt(num[j+1]) < parseInt(num[j])){
                isValid = false;
                break;
            }
            if(j+1<num.length && num[j]===num[j+1]){
                isValid = true;
            }
        }
        counter = !isValid ? counter : counter+1;
    }
    return counter;
}
console.log(solve(402328,864247));