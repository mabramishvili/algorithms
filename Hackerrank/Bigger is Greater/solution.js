function biggerIsGreater(w) {
    let arr = w.split(""), index = -1;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1].localeCompare(w[i]) > 0) {
            index = i;
        }
    }

    if (index === -1)
        return "no answer";

    let minGreater = arr[index + 1], minIndex = index + 1;
    for (let i = index + 2; i < arr.length; i++) {
        if (arr[i].localeCompare(arr[index]) > 0 && arr[i].localeCompare(minGreater) < 0) {
            minGreater = arr[i];
            minIndex = i;
        }
    }

    [arr[index], arr[minIndex]] = [arr[minIndex], arr[index]];
    let left = arr.slice(0, index + 1), right = arr.slice(index + 1);

    return left.concat(right.sort()).join("");
}

let w = "dkhc";
console.log(biggerIsGreater(w));