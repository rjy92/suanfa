function isValid(s) {
    // write code here
    let len = str.length
    let res = []
    for(let i = 0;i<len;i++){
        let c = s[i]
        switch(c){
            case '(':
            case '[':
            case '{':
                res.push(c)
                break;
            case ')':
                if(!res.length || res.pop() !== '('){
                    return false;
                }
                break;
            case ']':
                if(!res.length || res.pop() !== '['){
                    return false;
                }
                break;
            case '}':
                if(!res.length || res.pop() !== '{'){
                    return false;
                }
                break;
        }
        
    }
    return !res.length
}

let str = "([])"
console.log(isValid(str))