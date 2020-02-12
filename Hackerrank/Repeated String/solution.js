function solve(s, n) {
   let counter =  (s.match(/a/g)||[]).length;
   counter = counter*Math.floor(n/s.length);
   for(let i=0; i<n%s.length; i++)
       counter = s[i]==='a'?counter+1:counter;
   return counter;
}

solve('abcac', '11');