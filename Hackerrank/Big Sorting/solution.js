// Complete the bigSorting function below.
function bigSorting(unsorted) {
    unsorted = unsorted.sort(compare);
    return unsorted;
}

let compare = (a, b) => {
    if (a.length > b.length) {
        return 1;
    }
    if (b.length > a.length) {
        return -1;
    }
    for (let i = 0; i < a.length; i++) {
        if (parseInt(b[i]) > parseInt(a[i])) {
            return -1;
        }
        if (parseInt(a[i]) > parseInt(b[i])) {
            return 1;
        }
    }
    return 1;
};

let arr = ['6', '31415926535897932384626433832795', '1', '3', '10', '3', '5'];
bigSorting(arr);