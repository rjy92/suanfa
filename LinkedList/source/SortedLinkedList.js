import { defaultEquals, defaultCompare, Compare } from './utils/index.js'
import LinkedList from './LinkedList.js'
export default class SortedLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
        super(equalsFn)
        this.compareFn = compareFn // 声明compareFn函数，用来比较元素
    }
    push(element) {
        if (this.isEmpty()) {
            super.push(element);
        } else {
            const pos = this.getIndexNextSortedElement(element);
            super.insert(element, pos);
        }
    }
    insert(element) {
        if (this.isEmpty()) {
            return super.insert(element, 0)
        } else {
            const pos = this.getIndexNextSortedElement(element)
            return super.insert(element, pos)
        }
    }
    getIndexNextSortedElement(element) {
        let current = this.head
        let i = 0;
        for (; i < this.count; i++) {
            const comp = this.compareFn(element, current.element)
            if (comp === Compare.LESS_THAN) {
                return i
            } else {
                current = current.next
            }
        }
        return i
    }
}