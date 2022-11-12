import { defaultCompare, Compare } from './utils/index.js'
import { Node } from './Node.js'
export default class BinarySearchTree {
    constructor(compareFn = defaultCompare) {
        this.compareFn = compareFn;//用来比较节点的值
        this.root = null;//Node类型的根节点
    }
    insert(key) {
        // 判断插入的节点是否是第一节点
        if (this.root == null) {
            // 是，创建一个Node类的实例并将他赋值给root属性来将root指向这个新节点
            this.root = new Node(key)
        } else {
            // 将节点添加到根节点以外的位置，需要借助辅助方法
            this.insertNode(this.root, key)
        }
    }
    insertNode(node, key) {
        //新节点的键小于当前节点的键，则检查左侧子节点
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            if (node.left == null) {
                //如果没有左侧子节点，就插入新节点
                node.left = new Node(key)
            } else {
                // 如果有左侧子节点，就递归调用insertNode方法，继续找到树的下一层
                this.insertNode(node.left, key)
            }
        } else { //新节点的键大于当前节点的键
            if (node.right == null) {
                node.right = new Node(key)
            } else {
                this.insertNode(node.right, key)
            }
        }
    }
    inOrderTraverse(callback) {
        //接收一个节点和对应的回调函数作为参数
        this.inOrderTraverseNode(this.root, callback)
    }
    inOrderTraverseNode(node, callback) {
        // 检查以参数形式传入的节点是否为null，这是停止递归继续执行的判断条件
        if (node != null) {
            //调用相同的函数来访问左侧子节点
            this.inOrderTraverseNode(node.left, callback)
            callback(node.key) //对根节点进行操作
            this.inOrderTraverseNode(node.right, callback) //// 再访问右侧子节点
        }
    }
    preOrderTraverse(callback) {
        this.preOrderTraverseNode(this.root, callback)
    }
    preOrderTraverseNode(node, callback) {
        // 检查以参数形式传入的节点是否为null，这是停止递归继续执行的判断条件
        if (node != null) {
            callback(node.key) //对根节点进行操作
            //调用相同的函数来访问左侧子节点
            this.preOrderTraverseNode(node.left, callback)
            this.preOrderTraverseNode(node.right, callback) //// 再访问右侧子节点
        }
    }
    postOrderTraverse(callback) {
        this.postOrderTraverseNode(this.root, callback)
    }
    postOrderTraverseNode(node, callback) {
        // 检查以参数形式传入的节点是否为null，这是停止递归继续执行的判断条件
        if (node != null) {
            //调用相同的函数来访问左侧子节点
            this.postOrderTraverseNode(node.left, callback)
            this.postOrderTraverseNode(node.right, callback) //// 再访问右侧子节点
            callback(node.key) //对根节点进行操作
        }
    }
    min() {
        return this.minNode(this.root)
    }
    minNode(node) {
        let currentNode = node
        //遍历树的左边,直到找到树的最下层(最左端)
        while (currentNode != null && currentNode.left != null) {
            currentNode = currentNode.left
        }
        return currentNode
    }
    max() {
        return this.maxNode(this.root)
    }
    maxNode(node) {
        let currentNode = node
        //遍历树的右边,直到找到树的最下层(最左端)
        while (currentNode != null && currentNode.right != null) {
            currentNode = currentNode.right
        }
        return currentNode
    }
    search(key) {
        return this.searchNode(this.root, key)
    }
    searchNode(node, key) {
        //检验传入的node是否合法
        if (node == null) {
            return false
        }
        //要找的键比当前的节点小,则继续在左侧的子树上搜索
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            return this.searchNode(node.left, key)
        }
        //要找的键比当前的节点大,从右侧子节点开始继续搜索
        else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
            return this.searchNode(node.right, key)
        }
        //要找的键和当前节点相等
        else {
            return true
        }
    }
    remove(key) {
        return this.removeNode(this.root, key);
    }
    removeNode(node, key) {
        //如果正在检测的节点为null,说明键不存在于树中
        if (node == null) {
            return false
        }

        //如果要找的键比当前节点的值小,就沿树的左边找下一个节点
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            node.left = this.removeNode(node.left, key)
            return node
        }
        // 如果要找的键比当前节点的值大,就沿树的右边找下一个节点
        else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
            node.right = this.removeNode(node.right, key)
            return node
        }
        // 找到的要删除的键
        else{
            // 第一种情况：移除一个叶节点
            if(node.left == null && node.right == null){
                node = null
                return node
            }

            // 第二种情况，只有右侧子节点
            if(node.left == null){
                node = node.right //把对它的引用改为对它右侧子节点的引用
                return node
            }
            // 只有左侧子节点
            else if(node.right == null){
                node = node.left //把对它的引用改为对它左侧子节点的引用
                return node
            }

            //第三种情况:移除有两个字节点的节点
            //1 找到要移除的节点后,需要找到它右边子树中最小的节点
            const aux = this.minNode(node.right)
            //2. 用它右侧子树中最小节点的键去更新这个节点的值
            node.key = aux.key
            //3. 继续把右侧子树中的最小节点移除
            node.right = this.removeNode(node.right,aux.key)
             // 向它的父节点返回更新后节点的引用
            return node
        }
    }
}