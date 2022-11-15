/*
var decodeString = function (s) {
    // 用两个栈来存放当前状态，前者是重复次数，后者是累积字符串
    let repetStack = [], resStack = [];
    //拼接字符串
    let resStr = "";
    //表示重复次数
    let repet = 0;

    for (let i = 0; i < s.length; i++) {
        let cur = s.charAt(i);
        if (cur == '[') {
            // 将重复次数压入栈,重复次数清空

            repetStack.push(repet)
            resStack.push(resStr)
            //置空，准备下面的累积
            repet = 0
            resStr = ''
        } else if (cur == ']') {
            // 取出当前重复次数栈中的值，也就是当前字符串的重复次数
            let count = repetStack.pop();
            let temp = "";
            for (let i = 0; i < count; i++) {
                temp += resStr
            }
            //和前面已经求得的字符串进行拼接
            resStr = resStack.pop() + temp;
        } else if (cur >= '0' && cur <= '9') {
            // 数据的具体值
            repet = 10 * repet + (cur - '0')
        } else {
            resStr += cur
        }
    }
    return resStr
}
*/

var decodeString = function (s) {
    var dfs = (s, i) => {
        let repet = 0, resStr = "";
        while (i < s.length) {
            let cur = s.charAt(i);
            if (cur >= '0' && cur <= '9') {
                repet = 10 * repet + (cur - '0')
                i++
            } else if (cur == "[") {
                const [tmp, nextIndex] = dfs(s, i + 1)
                resStr += (tmp|| '').repeat(repet);
                i = nextIndex
                repet = 0
            }else if(cur =="]"){
                return [resStr,i+1]
            }else{
                resStr+=cur
                i++
            }
        }
        return resStr
    }
    return dfs(s, 0)
}

let  str= "3[a2[b]]" // abcbcabcbc
console.log(decodeString(str))