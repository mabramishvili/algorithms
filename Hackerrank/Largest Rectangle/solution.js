// Complete the largestRectangle function below.
function largestRectangle(h) {
    let stack = [0], i = 1, max = 0;
    while (stack.length || i < h.length) {
        if (!stack.length || (i !== h.length && h[i] >= h[stack[stack.length - 1]])) {
            stack.push(i++);
        } else {
            let top = stack.pop();
            max = Math.max(max, !stack.length ? h[top] * i : h[top] * (i - stack[stack.length - 1] - 1));
        }
    }
    return max;
}

let arr = [2, 1, 2, 3, 1];
largestRectangle(arr);