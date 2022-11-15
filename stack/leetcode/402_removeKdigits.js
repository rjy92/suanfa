var removeKdigits = function(num, k) {
    const stack = []
    for (const digit of num) {
        while(stack.length && stack[stack.length-1] > digit && k){
            stack.pop()
            k--
        }
        stack.push(digit)
    }

    // 若我们删除了 m 个数字且 m<k，则剩余删除的元素数未m-k
    for(;k>0;k--){
        stack.pop()
    }
    console.log(stack,k)

    // 特殊处理，若最终数据存在前导向0 ，我们要删除前导零
    // 若最终序列未空，则返回0 
    let ans = "",isLeadingZero = true
    for( const digit of stack){
        if(isLeadingZero && digit == '0'){
            continue;
        }
        isLeadingZero = false
        ans+=digit
    }

    return ans || "0"
    
};

let num = "10", k = 2
console.log(removeKdigits(num,k))