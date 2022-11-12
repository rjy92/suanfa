var levelOrder = function(root) {
    if(!root) return [];
    let arr = [];
    let res = [];
    queue.push(root);
    while(queue.length) {
        let level = [];
      	//分层的关键:每轮都把当前所有节点shift出来，因为上一轮把上一层节点都放进队列，所以队列中都是同一层节点
        let n = queue.length;
        while(n) {
            let cur = queue.shift();
            level.push(cur.val);
            if(cur.left) arr.push(cur.left);
            if(cur.right) arr.push(cur.right);
            n--;
        }
        res.push(level);
    }
    return res;
};