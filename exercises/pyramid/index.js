// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'

function pyramid(n) {
    for(let row=0; row<n; row++){
        let level = '';

    }
}

let start = new Date();
pyramid(1500);
let time = new Date() - start;

console.log("time needed", time);

module.exports = pyramid;

//my first try
// function pyramid(n) {
//     const maxLength = 1 + (n-1)*2;
//     for(let i=0; i<n; i++){
//         let level = '';
//         for(let j=0; j<maxLength; j++){
//             const median = Math.floor(maxLength/2);
//             if(j < median - i || j > median + i){
//                 level+=' ';
//             }else{
//                 level+='#';
//             }
//         }
//         console.log(level);
//     }
// }


//solution 2
// function pyramid(n) {
//     const maxLength = 1 + (n-1)*2;
//     let arr = [];
//     arr[0]='';
//     while(arr[0].length!==maxLength){
//         arr[0]+='#';
//     }
//     let index = 1;
//
//     while(arr.length!==n){
//         let prev = arr[index-1];
//         let firstIndex = prev.indexOf('#');
//         let lastIndex = prev.lastIndexOf('#');
//         prev = prev.substr(0, firstIndex) + ' ' + prev.substr(firstIndex + 1);
//         prev = prev.substr(0, lastIndex) + ' ' + prev.substr(lastIndex + 1);
//         arr.push(prev);
//         index++;
//     }
//
//     arr.reverse().map(x=>{
//         console.log(x);
//     });
//
// }

// function pyramid(n) {
//     let s = '#';
//     let spaces = ' '.repeat(n-1);
//     for(let i=0; i<n; i++){
//         console.log(spaces+s+spaces);
//         s+='##';
//         spaces=spaces.substr(1);
//     }
// }