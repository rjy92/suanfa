import LinkedList from './LinkedList.js'
import { defaultEquals } from './utils/index.js'
import { DoublyNode } from './models/linked-list-models.js'
export default class DoublyLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals) {
        super(equalsFn);
        this.tail = undefined;
    }
    push(element) {
        const node = new DoublyNode(element)
        // 向空链表中插入数据
        if (this.head == null) {
            this.head = node
            this.tail = node
        }
        // 向不为空的链表尾部添加元素
        else {
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
        this.count++;// 链表长度+1
    }
    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new DoublyNode(element)
            let current = this.head
            // 第一种情况，在链表的第一个位置插入元素
            if (index === 0) {
                if (this.head == null) {//元素新增
                    this.head = node;
                    this.tail = node;
                } else {
                    node.next = this.head
                    current.prev = node;
                    this.head = node;
                }
            } else if (index == this.count) { // 最后一项，新增的
                current = this.tail;
                current.next = node;
                node.prev = current;
                this.tail = node;
            } else { // 在任意为位置插入元素
                const previous = this.getElementAt(index - 1)
                current = previous.next;
                node.next = current;
                previous.next = node;
                current.prev = node;
                node.prev = previous;
            }
            this.count++
            return true
        }
        return false

    }
    removeAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head
            if (index === 0) { // 从头部移除元素
                this.head = current.next
                if (this.count == 1) { // 证明只有一项，要操作tail
                    this.tail = undefined
                } else {
                    this.head.prev = undefined
                }
            } else if (index === this.count - 1) { //从尾部移除
                current = this.tail
                this.tail = current.prev
                this.tail.next = undefined
            } else {
                current = this.getElementAt(index)
                const previous = current.prev
                previous.next = current.next
                current.next.prev = previous
            }
            this.count--
            return current.element
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
    getHead() {
        return this.head;
    }
    getTail() {
        return this.tail;
    }
    clear() {
        super.clear();
        this.tail = undefined;
    }
    toString() {
        if (this.head == null) {
            return '';
        }
        let objString = `${this.head.element}`;
        let current = this.head.next;
        while (current != null) {
            objString = `${objString},${current.element}`;
            current = current.next;
        }
        return objString;
    }
    inverseToString() {
        if (this.tail == null) {
            return '';
        }
        let objString = `${this.tail.element}`;
        let previous = this.tail.prev;
        while (previous != null) {
            objString = `${objString},${previous.element}`;
            previous = previous.prev;
        }
        return objString;
    }

}