let fib = {};
function fibonacci(n) {
    if(fib[n]){
        return fib[n];
    } else if(n<=1){
        fib[n] = n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
    }else {
        fib[n] = fibonacci(n - 1) + fibonacci(n - 2);
    }
    return fib[n];
}
