// Complete the abbreviation function below.
function abbreviation(a, b) {
    if(a.length < b.length){
        return "NO";
    }

    let origin = a.split("");
    let tranformed = b.split("");

    for(let i=0; i<origin.length; i++){
        if(typeof tranformed[i] == 'undefined'){
            if(origin[i] === origin[i].toLowerCase()) {
                origin.splice(i, 1);
                i--;
            }else {
                return "NO";
            }
            continue;
        }
        if(origin[i] === tranformed[i]){
            continue;
        }
        if(tranformed[i] === tranformed[i].toUpperCase()){
            let lower = tranformed[i].toLowerCase();
            if(origin[i] === lower){
                origin[i] = origin[i].toUpperCase();
                continue;
            }
        }
        if (origin[i] !== tranformed[i] && origin[i].toLowerCase() === origin[i]){
            origin.splice(i, 1);
            i--;
        }
    }

    let strA = origin.join("");
    let strB = tranformed.join("");

    console.log(strA);
    console.log(strB);

    if(strA === strB){
        return "YES";
    }else{
        return "NO";
    }
}

// let a = 'bbBbbbbbrbBbbBbbbbbbbbbrbbbbbBbbbbbbbbbbbbbbobbbbbbbsbbbbbtbBbsbbtbbbbbbbobbbbbbbbbbsbbbbbbbbbbbbbbsbbbbbbbbbbrbrbbBbbbbbbTBbbbbbbbbbbbtbbbbbbbbbbbbbbbbBbbbobbbbbbbbbbbbbtbbbbbbbBbbbbbbbbbBbbsbbbbbbbbobbbbbbbsbbbbbbbbbbbbbbbbbbbbbbtbbbbbbbbrbbbbBbbbbbbbbsbbbbbbobBborbbbbbbbbbbrbbbbbbbbbbbbbbbbbbbbbbbbbtbbbbtbbbbbbbbtbbbbbbbbbbbbbbbbbbbbbbbBbobbbbbBbbbbbbbbbbbbbbbBobbbbbbbbbBbbbrbbbbbbbbbbtbboBbbbbbbbbbbbbSbbbtbbbbbbbbbbbbbbbbbbbbbbtbbbrbbbbbBbbbbbbbbbobbbbbbbbbbbbbbsbbbbbbtbrbbrbbbbbbobbbbbbbbbbbbbbbbbbbbbbbbbbrbbbbbbbbbbbbBbbbbbBbbbbbbbbbbBbbbbbbbbbbbObbtrbsbbbbbbbbbbbbbbbbbbbbrbbbbbbbobbbbbbbbbbbbbbbbbBbbbbbbbbbbbbbbbbbbbbbbrbbbbbbbbbbbbbbbBbbBbbbbbrbbbbbbbbbbbbbbbbbbbbrbbbsbbbbbrbbbbbbbbbbbrobbbbsbbbbbsbbbBbbbbbbbbbbtTbbbbbbbbbbbbtbbtrbobbbbbbbbbbbbbBbbbbbbsbbbbbbbbbbbbbbbbbbBbbbbbbbbbbobbbbbbbbbbbbbbbbbbbbobbbTbsBbbbbbbbbbbbbsbbbbbssbbbbbbbbbSbbbbbbbbbbbbbbsbbbbbbbbbbbbbBbbbbbbbbbbbbbsbbbbBbbtbbSbbbbbbbbbbbbbsbobbbBbbbrbBbbbbbbbbbbbBbbobbbbbbbbbbbbbbbbbbbbtbosbbbbbbbbtbbbbbbbbbbrbb';
// let b = 'BBBBBBBBBBBBBBBBBBBBBRBBBBBBBBBBBBOBBBBBSBBBBTBBBSBBTBBBBBBBBBBBBBSBBBBBBBBBBBBBSBBBBBBBRBBBBBBBBBTBBBBBBBBBTBBBBBBBBBBBBBBBBBBBBBBBBBBBBBTBBBBBBBBBBBBBBSBBBBBBOBBBBSBBBBBBBBBBBBBBBBBBBBBBBBBBBRBBBBBBBBBBBBBBOBBBORBBBBBBBBBRBBBBBBBBBBBBBBBBBBBBBTBBBBBBBBTBBBBBBBBBBBBBBBBBBOBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBTBOBBBBBBBBBBSBBTBBBBBBBBBBBBBBBBBBTBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBSBBBBTBBBRBBBBBOBBBBBBBBBBBBBBBBBBBBBBBRBBBBBBBBBBBBBBBBBBBBBBBBBBBBOBTRBSBBBBBBBBBBBBBBBRBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBRBBBBBBBBBBBBBBBBBBRBBBBBBRBBBBBBBBBBROBBBBBBBBSBBBBBBBBBBBBBTTBBBBBBBBBBBTBBTROBBBBBBBBBBBBBSBBBBBBBBBBBBBBBBBBBBBBBOBBBBBBBBBBBBOBBBTBSBBBBBBBBBBSBBBSBBBBBBSBBBBBBBBBBBSBBBBBBBBBBBBBBBBBBBBBBBBSBBBBBBTBBSBBBBBBBBBBSBOBBBBBBRBBBBBBBBBBBBBBOBBBBBBBBBBBBBBBBBTBSBBBBBBTBBBBBBBBRB';

let a = 'aAb';
let b= 'AB';

let answer = abbreviation(a,b);
console.log("answer", answer);
