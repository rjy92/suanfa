/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 var buildTree = function(preorder, inorder) {
    if(preorder.length === 0 || inorder.length === 0) return null
    // 前序遍历的第一个节点定然是当前树的根节点
    const root = new TreeNode(preorder[0])

    // 拿 root 把中序遍历的数组劈开，左边为左子树，右边为右子树
    const rootIndex = inorder.findIndex((item)=>item == preorder[0])
    if (rootIndex === -1) return null;

    preorder.shift(); // 删除掉先序遍历的根节点

    // 左边的数组定然全部都是当前根节点的左子树上的节点
    root.left = buildTree(preorder,inorder.slice(0, rootIndex))

    // 右边的数组定然全部都是当前根节点的右子树上的节点
    root.right = buildTree(preorder,inorder.slice(rootIndex+1))
    
    return root
};