/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
 var reversePrint = function(head) {
    if(!head) return []
    let result = reversePrint(head.next)
    result.push(head.val)
    return result
};

var reversePrint = function(head) {
    if(!head) return []
     let arr = [];
     while(head){
         arr.push(head.val)
         head = head.next;
     }
     return arr.reverse()
 };