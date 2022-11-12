export class Stack{
    constructor(){
        this.items = {};
        this.count = 0 
    }
    //向栈中添加元素
    push(element){
        this.items[this.count] = element;
        this.count ++ 
    }
    // 移除栈顶元素
    pop(){
        if(this.isEmpty()){
            return undefined
        }
        this.count--
        const result = this.items[this.count]
        delete this.items[this.count]
        return result
    }
    peek(){// 查看栈顶元素
        if(this.isEmpty()){
            return undefined
        }
        return this.items[this.count-1]
    }
    isEmpty(){
        //判断栈是否为空
        return this.count === 0
    }
    size(){
        //判断栈中元素的个数
        return this.count
    }
    clear(){
        this.items = {}
        this.count = 0
    }
    toString(){
        //以字符串形式输出栈内数据
        if(this.isEmpty()){
            return ''
        }
        let objString = `${this.items[0]}`
        for(let i = 1;i<this.count;i++){
            objString  = `${objString},${this.items[i]}`
        }
        return objString
    }
    
}


// const stack = new Stack()
// console.log(stack.isEmpty())
// stack.push(1)
// stack.push(5)
// stack.push(10)
// stack.push(100)
// console.log(stack)
// console.log(stack.size())
// console.log(stack.isEmpty())
// stack.pop()
// console.log(stack)
// console.log(stack.peek())
// console.log(stack.toString())
