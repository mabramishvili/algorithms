// Complete the timeInWords function below.
function timeInWords(h, m) {
    let map = {
        15: 'quarter',
        30: 'half',
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        21: "twenty one",
        22: "twenty two",
        23: "twenty 3",
        24: "twenty four",
        25: "twenty five",
        26: "twenty six",
        27: "twenty seven",
        28: "twenty eight",
        29: "twenty nine"
    };

    m = parseInt(m);
    if (m === 0) {
        return `${map[h]} o' clock`;
    }
    if (m <= 30) {
        let minute = m > 1 ? 'minutes' : 'minute';
        return `${map[m]} ${![15, 30].includes(m) ? minute + " " : ""}past ${map[h]}`;
    } else {
        m = 60 - m;
        let minute = m > 1 ? 'minutes' : 'minute';
        h = h + 1;
        return `${map[m]} ${![15].includes(m) ? minute + " " : ""}to ${map[h]}`;
    }

}

let h = 1, m = 1;
console.log(timeInWords(h, m));