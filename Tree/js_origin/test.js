import BinarySearchTree from './binarySearchTree.js'
const tree = new BinarySearchTree()
tree.insert(11);
// 插入元素
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);
console.dir(tree)

let arr = []
const printNode = (value) => {
    console.log(value)
    arr.push(value)
};
// tree.inOrderTraverse(printNode);


// tree.preOrderTraverse(printNode);

// tree.postOrderTraverse(printNode);
// console.log(arr.join(" "))

//
console.log(tree.min())  
console.log(tree.max())  
console.log(tree.search(17))  

// tree.remove(6)
tree.remove(15)
tree.inOrderTraverse(printNode);

console.log(arr.join(" "))
