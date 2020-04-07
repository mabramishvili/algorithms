let binarySearch = (arr, val) => {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (val >= arr[mid]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    console.log(left);
};

let arr = [2, 3, 3];
let val = 3;

binarySearch(arr, val);