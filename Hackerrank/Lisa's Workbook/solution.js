// Complete the workbook function below.
function workbook(n, k, arr) {
    let chapter = 1, counter = 0, page = 1;
    while (chapter <= n) {
        let problem = 1, problemsInChapter = arr[chapter - 1];
        while (problem <= problemsInChapter) {
            if(problem === page){
                counter++;
            }
            if (problem % k === 0 && problem < problemsInChapter) {
                page++;
            }
            problem++;
        }
        chapter++;
        page++;
    }
    return counter;
}

let n = 5;
let k = 3;
let arr = [4, 2, 6, 1, 10];

workbook(n, k, arr);