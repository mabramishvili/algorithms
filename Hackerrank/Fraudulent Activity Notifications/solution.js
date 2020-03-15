// Complete the activityNotifications function below.
function activityNotifications(expenditure, d) {
    let counter = 0;
    if (expenditure.length <= d) {
        return 0;
    }

    let trailing = expenditure.slice(0, d), remove = 0;

    trailing.sort((a, b) => a - b);

    for (let i = d; i < expenditure.length; i++) {
        if (median(trailing) * 2 <= expenditure[i]) {
            counter++;
        }

        let removeIndex = trailing.indexOf(expenditure[remove]);
        trailing.splice(removeIndex, 1);

        let index = binarySearch(trailing, expenditure[i], 0, trailing.length);
        trailing.splice(index, 0, expenditure[i]);

        remove++;
    }
    return counter;
}

const binarySearch = (arr, element, start, end) => {
    let mid = Math.floor((start + end) / 2);
    if (end < 0) {
        return 0;
    }
    if (start === arr.length) {
        return arr.length;
    }
    if (element >= arr[mid] && element <= arr[mid + 1]) {
        return mid + 1;
    }
    if (element > arr[mid]) {
        return binarySearch(arr, element, mid + 1, end);
    } else {
        return binarySearch(arr, element, start, mid - 1);
    }
};

const median = arr => {
    const mid = Math.floor(arr.length / 2);
    return arr.length % 2 !== 0 ? arr[mid] : (arr[mid - 1] + arr[mid]) / 2;
};

let expenditure = [10, 20, 30, 40, 50];
let d = 3;

console.log(activityNotifications(expenditure, d));