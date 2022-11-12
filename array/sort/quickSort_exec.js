function quickSort(arr, left, right) {
    // 获取数组的长度
    let len = arr.length,
        partitionIndex;

    left = typeof left != 'number' ? 0 : left;
    right = typeof right != 'number' ? len - 1 : right

    // 递归的结果条件
    if (left >= right) {
        return;
    }

    //得到基准元素
    partitionIndex = partition(arr, left, right);
    console.log('come in partitionIndex',partitionIndex)
    quickSort(arr,left, partitionIndex-1)
    quickSort(arr, partitionIndex+1,right)

    return arr
}

function partition(arr, left, right){
    // 设定基准值，
    let pivot = left,index = pivot+1
    for(let i = index;i<=right;i++){
        if(arr[i] < arr[pivot]){
            swap(arr,i,index)
            index++;
        }
    }
    // 此时基准值的位置还需要交换
    swap(arr, pivot, index - 1);
    return index-1;
}
function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

}
let arr = [4, 5, 8, 1, 7, 2, 6, 3];
quickSort(arr);
console.log(arr);