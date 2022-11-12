// 选择排序
function selectionSort(arr){
    const len = arr.length
    var minIndex;
    for(let i = 0;i<len;i++){
        minIndex = i
        for(let j = i+1;j<len;j++){
            if(arr[minIndex] > arr[j]){
                minIndex = j
            }
        }
        // minIndex为找到的最小元素
        // 交换i 与minIndex位置上的元素
        swap(arr,minIndex,i)
    }
    return arr
}

function swap(arr, i, j){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
let arr = [4, 5, 1, 7, 3]
console.log(selectionSort(arr))