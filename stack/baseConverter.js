import {Stack} from './js_origin/stack_javascript.js'
function baseConverter(decNumber,base){
    const stack  = new Stack()
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let number = decNumber
    let rem = '',binaryString = ''

    if(!(base >=2 && base<=36)){
        return ''
    }
    while(number>0){
        rem = Math.floor(number%base)
        stack.push(rem)
        number = Math.floor(number/base)
    }
    while(!stack.isEmpty()){
        binaryString += digits[stack.pop()]
    }
    return binaryString
}

console.log(baseConverter(100345,2))
console.log(baseConverter(100345,8))
console.log(baseConverter(100345,16))
console.log(baseConverter(100345,35))