// var tribonacci = function (n) {
//     if(0==n) return 0
//     if(1==n) return 1
//     if(2==n) return 1
//     return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n-3)
// };


var tribonacci = function (n) {
    if(0==n||1==n) return 1
    if(2==n) return 1
    let a=0,b=1,c=1,d=2
    for(i=4;i<=n;i++){
        [a,b,c] =[b,c,d]
        d=a+b+c
    }
    return d

};

console.log(tribonacci(5))