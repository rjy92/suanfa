var evalRPN = function(tokens) {
    const len  = tokens.length
    const stack = []
    for(let i = 0;i<len;i++){
        if(!isNaN(Number(tokens[i]))){
            stack.push(Number(tokens[i]))
            continue;          
        }
       
        let last = stack.pop(),beforeLast = stack.pop()
        switch(tokens[i]){
            case "+":
                stack.push(last+beforeLast);
                break
            case "-":
                stack.push(beforeLast-last);
                break;
            case "*":
                stack.push(beforeLast*last);
                break;
            case "/":
                stack.push(beforeLast/last | 0);
                break;
        }

    }
    return stack.pop()
};

const tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
console.log(evalRPN(tokens))