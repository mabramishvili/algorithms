let result = false;

function crosswordPuzzle(crossword, hints) {
    crossword = crossword.map(x => x.split(""));
    hints = hints.split(";");
    traverse(crossword, hints);
    return result.map(x => x.join(""));
}

let traverse = (crossword, hints) => {
    if (!!result) {
        return;
    }
    if (hints.length === 0) {
        result = crossword;
        return;
    }
    for (let i = 0; i < hints.length; i++) {
        let word = hints[i];
        for (let j = 0; j < crossword.length; j++) {
            for (let k = 0; k < crossword[0].length; k++) {
                if (crossword[j][k] === '-' || crossword[j][k] === word[0]) {
                    let width = 1, height = 1, ind = 0;
                    while (crossword[j][k + width] && (crossword[j][k + width] === '-' || crossword[j][k + width] === word[ind + width])) {
                        width++;
                    }
                    while (crossword[j + height] && (crossword[j + height][k] === '-' || crossword[j + height][k] === word[ind + height])) {
                        height++;
                    }
                    if (width >= word.length) {
                        let clone = crossword.map(arr => arr.slice()), left = [...hints];
                        left.splice(i, 1);
                        for (let z = 0; z < word.length; z++) {
                            clone[j][k + z] = word[z];
                        }
                        traverse(clone, left);
                    }
                    if (height >= word.length) {
                        let clone = crossword.map(arr => arr.slice()), left = [...hints];
                        left.splice(i, 1);
                        for (let z = 0; z < word.length; z++) {
                            clone[j + z][k] = word[z];
                        }
                        traverse(clone, left);
                    }
                }
            }
        }
    }
    return false;
};

let crossword =
    ['+-++++++++',
        '+-++++++++',
        '+-------++',
        '+-++++++++',
        '+-++++++++',
        '+------+++',
        '+-+++-++++',
        '+++++-++++',
        '+++++-++++',
        '++++++++++'
    ];

let hints = 'ENGLAND;AGRA;NORWAY;GWALIOR';

console.log(crosswordPuzzle(crossword, hints));