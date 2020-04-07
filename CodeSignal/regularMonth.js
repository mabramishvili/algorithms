function regularMonths(currMonth) {
    let dt = currMonth.split("-");
    let date = new Date(dt[1], parseInt(dt[0]) - 1, 1);
    let next = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    while (next.getDay() !== 1) {
        next = new Date(next.getFullYear(), next.getMonth() + 1, 1);
    }
    return formatMonth((next.getMonth() + 1)) + "-" + next.getFullYear();
}

let formatMonth = (month) => {
    if (month < 10) {
        return "0" + month;
    }
    return month;
};

let curMonth = '02-2016';
console.log(regularMonths(curMonth));
