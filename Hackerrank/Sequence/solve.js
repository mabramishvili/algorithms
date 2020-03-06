// Complete the permutationEquation function below.
function permutationEquation(p) {
    let indexes = {}, ans = [];
    for(let i=0; i<p.length; i++){
        indexes[p[i]] = i+1;
    }
    for(let x=1; x<=p.length; x++){
        let xIndex = indexes[x];
        let xIndexIndex = indexes[xIndex];
        ans.push(xIndexIndex);
    }
    return ans;
}


let p = [5,2,1,3,4];
console.log(permutationEquation(p));
