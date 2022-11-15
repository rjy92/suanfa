var calculate = function(s) {
    s = s.trim();
    const len = s.length;
    let stack = [];
    let num = 0,preSign="+"
    for(let i = 0;i<len;i++){
        // 获取数字的大小
        if(s[i] !==" " && !isNaN(Number(s[i]))){
            num = num*10 +Number(s[i]) 
        }
        if (isNaN(Number(s[i])) || i === len - 1) {
            switch(preSign){
                case "+":
                    stack.push(num)
                    break;
                case "-":
                    stack.push(-num)
                    break;  
                case "*":
                    stack.push(stack.pop() * num);
                    break; 
                default:
                    console.log('come in stack',stack,num)
                    stack.push(stack.pop() / num | 0);       
            }
            preSign = s[i]
            num = 0;
        }
        
    }
    console.log('stack',stack)
    let sum = 0
    while(stack.length){
        sum+=stack.pop()
    }
    return  sum
};

var calculate1 = function(s) {
    s = s.trim()
    const len = s.length
    let stack = [],preSign = "+",num=0
    for(let i = 0;i<len;i++){
        let cur = s[i]
        // 判断是否是数字
        if(!isNaN(Number(cur)) && cur!=" "){
            num = num*10 +Number(cur) 
        }
        if(isNaN(Number(cur)) || i == len - 1){
            switch(preSign){
                case "+":
                    stack.push(num);
                    break;
                case "-":
                    stack.push(-num);
                    break;
                case "*":
                    stack.push(stack.pop()*num)
                    break;
                default:
                    console.log('come in stack',stack,num)
                    stack.push(stack.pop() / num | 0)
                    break;
            }
            preSign = cur
            num = 0
        }
    }

    console.log('stack',stack)
    let ret = 0
    while(stack.length){
        ret+= stack.pop()
    }
    return ret
};

const s = "3/2"
console.log(calculate(s))

console.log(calculate1(s))