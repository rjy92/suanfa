/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
    if (!head) return []
    if (head.val == val) return head.next
    let prev = head
    let cur = head.next
    while (cur && cur.val !== val) {
        prev = cur
        cur = cur.next
    }
    if (cur !== null) {
        prev.next = cur.next
    }
    return head
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
    if (!head) return []
    if (head.val == val) return head.next
    let cur = head
    while (cur && cur.next !== null) {
        if (cur.next.val == val) {
            cur.next = cur.next.next
            break;
        }
        cur = cur.next
    }
    return head
};