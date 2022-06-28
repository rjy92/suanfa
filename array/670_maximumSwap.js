 var maximumSwap = function (num) {
    let last = new Array(10).fill(-1)
    num = Array.from(num.toString())
    // 获取索引数组
    for (let i = 0; i < num.length; i++) {
        // 将字符串转化为数字
        last[num[i] - '0'] = i
    }
    for (let i = 0; i < num.length; i++) {
        for (let d = 9; d > (num[i] - '0'); d--) {
            if (last[d] > i) {
                let temp = num[last[d]]
                num[last[d]] = num[i]
                num[i] = temp
                return Number(num.join(""));
            }
        }
    }
    return Number(num.join(""));
};

var maximumSwap = function (num) {
    num = Array.from(num.toString())

    let last = -1, // 较小的高位
    lastMax = -1, // 较大的高位
    max = -1; // 最大值的位置
    for (let i=num.length-1; i>=0; i--) {
        if (max !== -1 && num[i] < num[max]) {
            last = i
            lastMax = max;
        }
        
        if (max === -1 || num[i] > num[max]) max = i;
    }
    if(last !== -1) [num[last],num[lastMax]] = [num[lastMax],num[last]] 
    return +num.join('');

};
const num = 1078107
console.log(maximumSwap(num))