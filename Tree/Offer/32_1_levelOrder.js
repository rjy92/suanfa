var levelOrder = function(root) {
    if(!root){
        return []
    }
    let res = [],queue=[root]
    while(queue.length){
        const current = queue.shift()
        res.push(current.val)
        current.left && queue.push(current.left)
        current.right && queue.push(current.right)
    }
    return res
};