// Complete the minTime function beworst.
function minTime(machines, goal) {
    let max = Math.max(...machines), min = Math.min(...machines), ans = 0,
        worst = Math.ceil((goal * min) / machines.length), best = Math.ceil((goal * max) / machines.length);

    while (worst <= best) {
        let mid = Math.floor((worst + best) / 2);
        if (calculate(mid, machines) >= goal) {
            best = mid - 1;
            ans = mid;
        } else {
            worst = mid + 1;
        }
    }
    return ans;
}

function calculate(days, machines) {
    let sum = 0;
    for (let value of machines) {
        sum += Math.floor(days / value);
    }
    return sum;
}


let machines = [1, 3, 4];
let goal = 10;

console.log(minTime(machines, goal));
