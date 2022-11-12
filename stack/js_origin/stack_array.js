class Stack{
    constructor(){
        this.items = []
    }
    //向栈中添加元素
    push(element){
        this.items.push(element)
    }
    // 移除栈顶元素
    pop(){
        return this.items.pop()
    }
    peek(){// 查看栈顶元素
        return this.items[this.items.length - 1]
    }
    isEmpty(){
        //判断栈是否为空
        return this.items.length == 0
    }
    size(){
        //判断栈中元素的个数
        return this.items.length
    }
    clear(){
        this.items = []
    }
    toString(){
        //以字符串形式输出栈内数据
        let resultString = ''
        for (let i of this.items){
          resultString += i + ' '
        }
        return resultString
    }
}