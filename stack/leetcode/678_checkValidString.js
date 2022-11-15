var checkValidString = function(s) {
    if(s == "") return true
    const n = s.length;
    const leftStack = []; // 存储左括号
    const asteriskStack = []; // 存储星号

    for(let i = 0;i<n;i++){
        const cur = s[i];
        if(cur=="("){
            leftStack.push(i);
        }
        else if(cur == "*"){
            asteriskStack.push(i)
        }
        else if(cur == ")"){
            // 先判断leftStack栈中是否有数据，有则匹配
            if(leftStack.length){
                leftStack.pop()
            }else if(asteriskStack.length){
                asteriskStack.pop()
            }else{
                return false
            }
        }
    }
    while(leftStack.length && asteriskStack.length){
        const left = leftStack.pop()
        const asteriskIndex = asteriskStack.pop();
        if(left > asteriskIndex){
            return false
        }
    }

    return !leftStack.length
};

console.log(checkValidString('*(()'))