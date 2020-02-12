let anagrams = [];

const find = (s, start, end) => {
    if(start === end){
        if(!anagrams.includes(s.join(""))){
            anagrams.push(s.join(""));
        }
    }else{
        for(let i=start; i<=end; i++){
            [s[start], s[i]] = [s[i], s[start]];
            find(s, start+1, end);
            [s[start], s[i]] = [s[i], s[start]];
        }
    }
};

const findAllAnagrams = (s) => {
    let arr = s.split("");
    find(arr, 0, arr.length-1);
    for(let i=0; i<anagrams.length; i++){
        console.log(anagrams[i]);
    }
};

findAllAnagrams("abc");