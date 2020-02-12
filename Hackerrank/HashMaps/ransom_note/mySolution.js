// Complete the checkMagazine function below.
function checkMagazine(magazine, note) {
    let magazineMap = {}, noteMap = {};
    for(let word of magazine){
        magazineMap[word] = magazineMap[word] + 1 || 1;
    }
    for(let word of note){
        noteMap[word] = noteMap[word] + 1 || 1;
    }
    for(let key in noteMap){
        if(!magazineMap[key] || magazineMap[key] < noteMap[key]){
            return "No";
        }
    }
    return "Yes";
}

let res = checkMagazine(['two', 'times', 'magazine', 'revamped', 'three', 'three'], ['two', 'times', 'three', 'three', 'three']);
console.log(res);

// function checkMagazine(magazine, note) {
//     for(let word of note){
//         if(!magazine.includes(word)){
//             return "No";
//         }else{
//             let idx = magazine.findIndex(p => p === word);
//             magazine.splice(idx, 1);
//         }
//     }
//     return "Yes";
// }
