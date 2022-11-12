var levelOrder = function(root) {
    if(!root) return []
    let ret=[],queue=[root]
    let isOrderLeft = true;
    while(queue.length){
        let level = []
        let n = queue.length
        while(n){
            let cur = queue.shift()
            isOrderLeft?level.push(cur.val):level.unshift(cur.val)
            cur.left && queue.push(cur.left)
            cur.right && queue.push(cur.right)
            n--
        }
        isOrderLeft = !isOrderLeft
        ret.push(level)
    }
    return ret
};