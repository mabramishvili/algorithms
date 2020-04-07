missedClasses = (year, daysOfTheWeek, holidays) => {
    let counter = 0;
    for (let holiday of holidays) {
        let [month, day] = holiday.split('-').map(x => parseInt(x));
        let date = new Date(year + (month < 6 ? 1 : 0), month - 1, day);
        counter += daysOfTheWeek.includes(date.getDay() || 7);
    }
    return counter
};

let year = 2015;
let daysOfTheWeek = [2, 3];
let holidays = ["11-04", "02-22", "02-23", "03-07", "03-08", "05-09"];

console.log(missedClasses(year, daysOfTheWeek, holidays));