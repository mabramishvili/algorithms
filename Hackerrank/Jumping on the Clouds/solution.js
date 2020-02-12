function jumpingOnClouds(c) {
    let jumpsCount = 0;
    console.log("length", c.length);
    for(let i=0; i<c.length-1; i){
        if(!c[i+2]){
            i=i+2;
        }else{
            i=i+1;
        }
        console.log("I",i);
        console.log("count", jumpsCount);
        jumpsCount++;
    }
    console.log(jumpsCount);
    return jumpsCount;
}

jumpingOnClouds([0,0,1,0,0,1,0]);