function mergeSort(arr) {
    let len = arr.length
    if (len < 2) {
        return arr
    }
    let middle = Math.floor(len / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle)
    return merge(mergeSort(left),mergeSort(right))
}

function merge(left, right) {
    // 将数组按照一定的顺序合并
    var result = [];
    while(left.length && right.length){
        if(left[0] < right[0]){
            result.push(left.shift())
        }else{
            result.push(right.shift())
        }
    }
    while(left.length){
        result.push(left.shift())
    }
    while(right.length){
        result.push(right.shift())
    }
    return result
}
let arr = [4, 3, 2, 15, 1, 45, 23]
console.log(mergeSort(arr))