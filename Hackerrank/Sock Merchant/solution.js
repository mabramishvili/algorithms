
function solve(n,ar){
    let colors = {}, pairs = 0;
    for(let i=0; i<n; i++){
        colors[ar[i]] = colors[ar[i]]+1 || 1;
        if(colors[ar[i]]%2===0)
            pairs++;
    }
    return pairs;
}

solve(7, [1,2,1,2,1,3,2]);


module.exports = solve;