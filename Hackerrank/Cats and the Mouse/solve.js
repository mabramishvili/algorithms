// Complete the catAndMouse function below.
function catAndMouse(x, y, z) {
    let distance1 = Math.abs(x-z), distance2 = Math.abs(y-z);
    if(distance1 === distance2){
        return "Mouse C";
    }else if(distance1 < distance2){
        return "Cat A";
    }else{
        return "Cat B";
    }
}
