function quickSort(arr, left, right) {
    let len = arr.length,
    partitionIndex;
    left = typeof left != 'number' ? 0 : left;
    right = typeof right != 'number' ? len - 1 : right;

    // 递归结束条件：left大于等于right的时候
    if (left >= right) {
        return;
    }
    //  得到基准元素的位置
    partitionIndex = partition(arr, left, right);
    quickSort(arr, left, partitionIndex-1);
    quickSort(arr, partitionIndex+1, right);
    return arr

}
function partition(arr, left, right){
    // 设定基准值（pivot）
    let pivot = left,index = pivot + 1;
    for (var i = index; i <= right; i++) {
        if (arr[i] < arr[pivot]) {
            swap(arr, i, index);
            index++;
        }        
    }
    //此时基准值的位置还需要交换
    swap(arr, pivot, index - 1);
    return index-1;

}
function swap(arr, i, j){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

let arr = [4, 5, 8, 1, 7, 2, 6, 3];
quickSort(arr);
console.log(arr);