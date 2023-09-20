function fibonacci(n) {
    let fibo = [1, 1];

    for (let i = 2; i < n; i++) {
        fibo[i] = fibo[i-1] + fibo[i-2];
    }

    return fibo;
}
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(10));
console.log(fibonacci(15));
console.log(fibonacci(20));
console.log(fibonacci(50));