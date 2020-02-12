function rotLeft(a,d) {
    // for(let counter=0; counter<d; counter++){
    //     let firstElement = a[0];
    //     for(let i=0; i<a.length; i++){
    //         if(i===a.length-1){
    //             a[i] = firstElement;
    //         }else{
    //             a[i] = a[i+1];
    //         }
    //     }
    // }
    while(d-- !== 0) a.push(a.shift());
    return a;
}

rotLeft([1,2,3,4,5],4);