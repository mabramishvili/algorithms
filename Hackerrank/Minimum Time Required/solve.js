// Complete the minTime function below.
function minTime(machines, goal) {
    let map = {}, sum = 0, days = 1;
    for (let v of machines) {
        map[v] = map[v] + 1 || 1;
    }

    while (true) {
        let productsForDay = 0;
        let tmp = days;

        // for (let i=1; i<=Math.sqrt(days); i++) {
        //     if (days % i == 0) {
        //         if(map[i]){
        //             productsForDay += map[i];
        //         }
        //         if (days / i !== i && map[days / i]) {
        //             productsForDay += map[days / i];
        //         }
        //     }
        // }


        for (let key in map) {
            if (days % key === 0) {
                productsForDay += map[key];
            }
        }


        if ((sum + productsForDay) >= goal) {
            return days;
        }
        sum += productsForDay;
        days++;
    }

}

let machines = [2, 3, 2];
let goal = 10;

console.log(minTime(machines, goal));
