function fib(n) {
    // 边界条件
    if (n == 1 || n == 0) return 1
    let a = 0, b = 1, c
    for (let i = 2; i <= n; i++) {
        c = a + b
        a = b
        b = c
    }
    return c
}

console.log(fib(5))