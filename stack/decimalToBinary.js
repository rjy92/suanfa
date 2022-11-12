import {Stack} from './js_origin/stack_javascript.js'
function decimalToBinary(decNumber){
    const stack  = new Stack()
    let number = decNumber
    let rem = '',binaryString = ''
    while(number>0){
        rem = Math.floor(number%2)
        stack.push(rem)
        number = Math.floor(number/2)
    }
    while(!stack.isEmpty()){
        binaryString +=stack.pop().toString()
    }
    return binaryString
}

console.log(decimalToBinary(11))