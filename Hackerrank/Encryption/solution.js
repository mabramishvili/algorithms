// Complete the encryption function below.
function encryption(s) {
    s = s.replace(/ /g, "");
    let sqrt = Math.sqrt(s.length), map = [], start = 0, ans = "",
        rows = Math.floor(sqrt), columns = Math.ceil(sqrt);

    if(rows*columns < s.length)
        rows ++;

    for(let i=0; i<rows && start<s.length; i++){
        map[i] = [];
        for(let j=0; j<columns; j++){
            map[i][j] = s[start] || "";
            start++;
        }
    }

    for(let i=0; i<columns; i++){
        for(let j=0; j<rows; j++){
            if(map[j][i]) {
                ans += map[j][i];
            }
        }

        if(i !== columns.length-1){
            ans+=" ";
        }
    }

    return ans;
}


let s = "haveaniceday";
console.log(encryption(s));