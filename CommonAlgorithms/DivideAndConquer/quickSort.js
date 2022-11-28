function quickSort(arr, left, right) {
    let len = arr.length, partitionIndex
    left = typeof left != 'number' ? 0 : left
    right = typeof right != 'number' ? len - 1 : right

    // 递归循环条件
    if (left >= right) {
        return;
    }
    partitionIndex = partition(arr, left, right)
    quickSort(arr, left, partitionIndex - 1)
    quickSort(arr, partitionIndex + 1, right)
    return arr
}

// 解决部分：所有元素小于pivot放左边 ，大于pivot放右边
function partition(arr, left, right) {
    let pivot = left, index = pivot + 1
    for (let i = index; i <= right; i++) {
        if (arr[i] < arr[pivot]) { // 交换数组数据
            swap(arr, i, index)
            index++
        }
    }
    swap(arr, pivot, index - 1)
    return index - 1
}
// 4,1,2,3,5,6,7,8

function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

let arr = [4, 3, 2,15, 1, 45, 23]
console.log(quickSort(arr))