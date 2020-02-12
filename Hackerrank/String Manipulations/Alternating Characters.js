// // Complete the alternatingCharacters function below.
// function alternatingCharacters(s) {
//     let counter = 0;
//     for (let i = 0; i < s.length; i++) {
//         let char = s[i];
//         if (i < s.length - 1) {
//             let nextChar = s[i + 1];
//             if (char === nextChar) {
//                 counter++;
//             }
//         }
//     }
//     return counter;
// }
//
// let answer = alternatingCharacters("ABABABAB");
// console.log("answer", answer);

function alternatingCharacters(s) {
    console.log("here");
    let counter = 0;
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        for (let j = i + 1; j < s.length; j++) {
            i = j - 1;
            if (s[j] !== char) {
                break;
            } else {
                counter++;
            }
        }
    }
    return counter;
}

let answer = alternatingCharacters("AAABBB");
console.log("answer", answer);