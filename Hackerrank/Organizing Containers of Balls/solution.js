// Complete the organizingContainers function below.
function organizingContainers(container) {
    let sizes = {}, types = {};
    for(let cont of container){
        let sum = 0;
        for(let key in cont){
            types[key] = types[key] + cont[key] || cont[key];
            sum += cont[key];
        }
        sizes[sum] = sizes[sum] + 1 || 1;
    }
    for(let capacity in sizes){
        for (let key in types) {
            if (types[key] === parseInt(capacity)) {
                delete types[key];
                sizes[capacity] = sizes[capacity] - 1;
                if(!sizes[capacity]){
                    break;
                }
            }
        }
        if(sizes[capacity]){
            return "Impossible";
        }
    }
    return "Possible";
}

let container = [[1,1], [1,1]];
console.log(organizingContainers(container));