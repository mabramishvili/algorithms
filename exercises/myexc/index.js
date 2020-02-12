// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples

//   pyramid(2)
//    # #
//   ## ##
//   pyramid(3)
//    # #
//   ## ##
//  ### ###
//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'

function solution(n) {
    if (n === 0) return '';
    let maxLength = 3 + (n - 1) * 2;
    let arr = [];
    arr[0] = '';
    for (let i = 0; i < Math.floor(maxLength / 2); i++) {
        arr[0] += '#';
    }
    arr[0] += ' ';
    for (let i = 0; i < Math.floor(maxLength / 2); i++) {
        arr[0] += '#';
    }
    let index = 1;
    while (arr.length !== n) {
        let prev = arr[index - 1];
        prev = prev.substr(0, prev.indexOf('#')) + ' ' + prev.substr(prev.indexOf('#') + 1);
        prev = prev.substr(0, prev.lastIndexOf('#')) + ' ' + prev.substr(prev.lastIndexOf('#') + 1);
        arr.push(prev);
        index++;
    }
    arr.reverse().map(x => {
        console.log(x);
    });
}

solution(12);


module.exports = solution;