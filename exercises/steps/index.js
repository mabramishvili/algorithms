// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row=0, stair='') {
    if(n===row){
        return;
    }

    if(n === stair.length){
        console.log(stair);
        return steps(n,row + 1);
    }

    if(stair.length<=row){
        stair+='#';
    }else{
        stair+=' ';
    }
    steps(n,row,stair);

}

steps(4);

module.exports = steps;

//my solution
// function steps(n) {
//     for(let i=0; i<n; i++){
//         let s = [n];
//         while(s.length!==n){
//             s.push(' ');
//         }
//         for(let j=0; j<i+1; j++){
//             s[j] = '#';
//         }
//         console.log(s.join(''));
//     }
// }

//solution #1
// function steps(n) {
//     for(let row=0; row<n; row++){
//         let stair = '';
//         for(let column=0; column<n; column++){
//             if(column<=row){
//                 stair += '#';
//             }else{
//                 stair += ' ';
//             }
//         }
//     }
// }
