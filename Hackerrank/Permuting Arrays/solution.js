// Complete the twoArrays function below.
function twoArrays(k, A, B) {
    A = A.sort((a,b)=>a-b);
    B = B.sort((a,b)=>b-a);
    for(let i=0; i<A.length; i++) {
        if(A[i] + B[i] < k){
            return "NO";
        }
    }
    return "YES";
}
