// var dailyTemperatures = function(temperatures) {
//     const len = temperatures.length
//     const ret = new Array(len).fill(0)
//     for(let i = 0;i<len - 1 ;i++){
//         for(let j = i+1;j<len;j++){
//             if(temperatures[j] > temperatures[i]){
//                 ret[i] = j-i
//                 break;
//             }
//         }
//     }
//     return ret
// };

// 单调栈
var dailyTemperatures = function(temperatures) {
    const len = temperatures.length
    const stack = []
    const ret = new Array(len).fill(0)
    for(let i = 0;i<len  ;i++){
        while(stack.length && temperatures[stack[stack.length -1]] < temperatures[i]){
            ret[stack[stack.length -1]] = i - stack[stack.length - 1]
            stack.pop()
        }
        stack.push(i)
    }
    return ret
};


const temperatures = [73,74,75,71,69,72,76,73]
console.log(dailyTemperatures(temperatures))