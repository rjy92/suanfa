var fib = function (n) {
    if(0==n) return 0
    if(n==1) return 1
    return fib(n-1) +fib(n-2)
};

var fib1 = function (n) {
    let arr=[]
    arr[0] =0;
    arr[1] = 1
    for(let i=2;i<=n;i++){
        arr[i] = arr[i-1]+arr[i-2]
    }
    return arr[n]
};

var fib1 = function (n) {
    if(n==0|| 1==n) return n
    let a=0,b=1,c;
    for (let i = 2; i <= n; i++) {
        c=a+b
        a=b
        b=c
    }
    return c
};
