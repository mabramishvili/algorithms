/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {

    let convert = {
        '01': '13',
        '02': '14',
        '03': '15',
        '04': '16',
        '05': '17',
        '06': '18',
        '07': '19',
        '08': '20',
        '09': '21',
        '10': '22',
        '11': '23',
        '12': '00',
    };

    let splitted = s.split(":");
    let hour = splitted[0], type = splitted[2].substr(2);
    if((hour === '12' && type === 'AM') || (hour !== '12' && type==='PM')){
        splitted[0] = convert[splitted[0]];
    }

    return splitted.join(":").substr(0,s.length-2);

}

let answer = timeConversion("12:45:54PM");
console.log("answer", answer);
