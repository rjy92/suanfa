//LinkedList.js
import { defaultEquals } from './utils/index.js'
import { Node } from './models/linked-list-models.js'
export default class LinkedList {
    constructor() {
        this.count = 0; //来存储链表中的元素数量
        this.head = undefined; // 保存引用
        this.equalsFn = defaultEquals;
    }
    push(element) {
        const node = new Node(element)
        // 向空链表中插入数据
        if (this.head == null) {
            this.head = node
        }
        // 向不为空的链表尾部添加元素
        else {
            // 循环遍历，找到最后一个元素，再元素next位置添加新元素
            let current = this.head
            while (current.next != null) {
                current = current.next
            }
            current.next = node
        }
        this.count++;// 链表长度+1
    }
    removeAt(index) {
        // 检查传入的index是否合法,是否越界
        if (index >= 0 && index < this.count) {
            let current = this.head;
            if (index == 0) {//删除第一项元素
                this.head = current.next
            } else {
                // // 记录当前元素对前一个元素的引用
                // let previous;
                // for (let i = 0; i < index; i++) {
                //     previous = current;
                //     current = current.next;
                // }
                // // 删除项为current项，将 previous 与 current 的下一项链接起来：跳过 current，从而移除它
                // previous.next = current.next
                let previous = this.getElementAt(index - 1)
                current = previous.next
                previous.next = current.next
            }
            this.count--
            return current.element;
        }
        return undefined
    }
    getElementAt(index) {
        // 判断index的合法性
        if (index >= 0 && index < this.count) {
            let node = this.head
            for (let i = 0; i < index && node != null; i++) {
                node = node.next
            }
            return node
        }
        return undefined
    }
    insert(element, index) {
        // 判断index的合法性
        if (index >= 0 && index < this.count) {
            const node = new Node(element);
            if (index == 0) { // 起点位置插入第一个元素
                let current = this.head;
                node.next = current
                this.head = node;
            } else {
                //中间或者尾部插入元素，首先要找到要插入的位置
                let previous = this.getElementAt(index - 1)
                let current = previous.next
                node.next = current
                previous.next = node
            }
            this.count++
            return true
        }
        return false
    }
    indexOf(element) {
        let current = this.head
        // 循环访问链表，判断元素是否相等
        for (let i = 0; i < this.count && current != null; i++) {
            if (this.equalsFn(element, current.element)) {
                return i
            } else {
                current = current.next
            }
        }
        return -1
    }
    remove(element) {
        const index = this.indexOf(element)
        return this.removeAt(index)
    }
    isEmpty() {
        return this.size() === 0
    }
    size() {
        return this.count
    }
    getHead() {
        return this.head
    }
    clear() {
        this.head = undefined;
        this.count = 0;
    }
    toString() {
        if (this.head == null) {
            return '';
        }

        let objString = `${this.head.element}`;
        let current = this.head.next;

        for (let i = 1; i < this.size() && current != null; i++) {
            objString = `${objString},${current.element}`;
            current = current.next;
        }
        return objString;
    }
}