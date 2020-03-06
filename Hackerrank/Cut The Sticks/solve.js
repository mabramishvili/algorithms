function cutTheSticks(arr) {
    arr = arr.sort((a,b) => a-b);
    let ans = [arr.length];
    while(arr.length){
        let min = arr[0];
        for(let i=0; i<arr.length; i++){
            arr[i] = arr[i] - min;
            if(!arr[i]){
                arr.shift();
                i--;
            }
        }
        if(arr.length)
            ans.push(arr.length);
    }
    return ans;
}

let arr = [2,2,4,4,5,8];
console.log(cutTheSticks(arr));
