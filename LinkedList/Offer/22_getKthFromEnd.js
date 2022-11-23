var getKthFromEnd = function(head, k) {
    let n = 0,node = head
    while(node){
        node = node.next;
        n++
    }
    node = head
    for(let i = 0;i<n-k;i++){
        node = node.next
    }
    return node
};

