// var verifyPostorder  = function(postorder){
//     const isPostorder = function(start,end){
//         if(start >= end){ // 终止条件，说明此树节点数量小于1，无需其他判断，直接返回true
//             return true
//         }

//         let now = start, midIndex;
//         while(postorder[now] < postorder[end]){
//             now++
//         }
//         midIndex = now; //找到第一个大于当前子树根节点的值

//         //判断右树子节点，是否都大于根节点的值

//         while(postorder[now] > postorder[end]){
//             now++
//         }
//         return (now === end)&& isPostorder(start,midIndex-1) && isPostorder(midIndex,end-1)

//     }

//     return isPostorder(0,postorder.length-1)
// }


var verifyPostorder = function (postorder) {
    // 后续遍历的顺序是左右根   反向遍历 那就是右根左--大致
    let stack = [];
    let root = Number.MAX_SAFE_INTEGER;
    for (let i = postorder.length - 1; i >= 0; i--) {
      // 如果后面的元素还比根节点大了  那肯定不是正确的顺序
      if (postorder[i] > root) return false;
      // 如果栈内有值并且栈顶元素比当前元素大，比当前元素大的都弹出来，最后一个弹出来的一定是后面元素（左子树）的根节点
      console.log(stack,postorder[i])
      while (stack.length && stack[stack.length - 1] > postorder[i]) {
        root = stack.pop();
      }
      stack.push(postorder[i]);
      
    }
    return true;
  };

const arr = [1,3,2,7,6,5]
console.log(verifyPostorder(arr))