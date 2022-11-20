import  LinkedList from './LinkedList.js'
import  DoublyLinkedList from './DoublyLinkedList.js'
import CircularLinkedList from './CircularLinkedList.js'
// const linkedList = new LinkedList()
// linkedList.push(15)
// linkedList.push(10)
// console.log(linkedList.insert(100,0))
// console.log(linkedList.insert(20,10))
// console.dir(linkedList)
// // linkedList.removeAt(0)
// // console.dir(linkedList)
// console.dir(linkedList.getElementAt(2))
// console.dir(linkedList.getElementAt(3))
// console.log(linkedList.indexOf(100))
// console.log(linkedList.indexOf(10))
// console.log(linkedList.toString())
// const doublyLinkedList = new DoublyLinkedList()
// console.log(doublyLinkedList.insert(1,0))
// doublyLinkedList.insert(2,1)
// doublyLinkedList.insert(3,2)
// console.log(doublyLinkedList)
// console.log(doublyLinkedList.removeAt(1))
// console.log(doublyLinkedList)

const circularLinkedList = new CircularLinkedList()
console.log(circularLinkedList.insert(2,0))
console.log(circularLinkedList.insert(1,0))

circularLinkedList.removeAt(0)
console.log(circularLinkedList)

