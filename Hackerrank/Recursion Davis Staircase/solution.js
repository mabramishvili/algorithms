function stepPerms(n){
    let arr = [1,2,4];
    if([1,2,3].includes(n))
        return arr[n-1];
    for (let i = 3; i < n; i++)
        arr[i] = arr[i-1] + arr[i-2] + arr[i-3];
    return arr[arr.length-1];
}