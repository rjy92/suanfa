import { Deque } from './deque.js'
function palindromeChecker(aString) {
    // 判断传入的字符是否为空
    if (aString === undefined || aString === null || (aString != null && aString.length === 0)) {
        return false
    }

    const deque = new Deque()
    const lowerString = aString.toLocaleLowerCase().split(' ').join('') // 字母转化为小写，同时移除所有空格

    let isEqual = true
    let firstChar,lastChar;
    for(let i = 0;i<lowerString.length;i++){
        deque.addFront(lowerString[i])
    }

    while(deque.size() > 1 && isEqual){
        firstChar = deque.removeFront()
        lastChar = deque.removeBack()
        if(firstChar != lastChar){
            isEqual = false
        }
    }
    return isEqual
}


palindromeChecker('Ma dam') // true
palindromeChecker('abcdef') // false