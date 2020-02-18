/*
 * Complete the pageCount function below.
 */
function pageCount(n, p) {
    /*
     * Write your code here.
     */

    let fromFirst = Math.floor(p/2);
    let fromLast = 0;
    if(n%2===0){
        fromLast = Math.ceil((n-p)/2);
    }else{
        fromLast = Math.floor((n-p)/2);
    }

    console.log("fromFirst", fromFirst);
    console.log("fromLast", fromLast);

    return Math.min(fromFirst, fromLast);

}

let answer = pageCount(6,2);
