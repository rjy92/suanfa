// //斐波那契数
// function fibonacci(n) {
//     if (n < 1) return 0;
//     if (n <= 2) return 1
//     return fibonacci(n - 1) + fibonacci(n - 2)
// }

// console.log(fibonacci(5)) //5



function fibonacci(n) {
    let last1 = 1, last2 = 1, temp
    for (let i = 3; i <= n; i++) {
        temp = last1 + last2
        last1 = last2
        last2 = temp
    }
    return last2
}
console.log(fibonacci(5)) //5