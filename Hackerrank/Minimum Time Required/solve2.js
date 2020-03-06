// Complete the minTime function below.
function minTime(machines, goal) {
    let max = Math.max(...machines), min = Math.min(...machines);
    let best = Math.ceil((goal * min) / machines.length);
    let worst = Math.ceil((goal * max) / machines.length);

    console.log(best);
    console.log(worst);

    return binarySearch(machines, goal, best, worst);

}

let binarySearch = (machines, goal, start, end) => {
    let middle = Math.floor((start + end) / 2);
    let items = calculateItemsForDays(middle, machines);
    if(items === goal){
        let previous = middle - 1;
        while(calculateItemsForDays(previous, machines) === goal){
            middle = previous;
            previous = previous - 1;
        }
        return middle;
    }
    else if(items > goal){
        return binarySearch(machines, goal, start, middle);
    }
    else {
         return binarySearch(machines, goal, middle, end);
    }
};

let calculateItemsForDays = (days, machines) => {
    let sum = 0;
    for (let machine of machines) {
        sum += Math.floor(days / machine);
    }
    return sum;
};

// let machines = [63, 2, 26, 59, 16, 55, 99, 21, 98, 65];
// let goal = 56;

let machines = [1, 3, 4];
let goal = 10;

console.log(minTime(machines, goal));
