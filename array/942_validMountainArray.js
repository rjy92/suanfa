// var validMountainArray = function(arr){
//     if(!arr || arr.length < 3){
//         return false
//     }
//     let max = {
//         index:0,
//         num:arr[0]
//     }
//     for(let i=1;i<arr.length;i++){
//         if(arr[i]>max.num && max.index +1 == i){
//             max.index = i
//             max.num = arr[i]
//         }
//     }

//     if(max.index == arr.length - 1 || max.index == 0) return false
//     console.log('max.index',max.index)

//     for(let i= max.index+1 ;i<arr.length;i++){
//         if(arr[i]< max.num && max.index +1 == i){
//             max.index = i
//             max.num = arr[i]
//         }else{
//             return false
//         }
//     }
//     return true
// }

// var validMountainArray = function(arr){
//     const n = arr.length
//     let i = 0;
//     let j = n - 1;
//     while(i+1 < n && arr[i]<arr[i+1]){
//         i++
//     }
//     while(j - 1 >= 0 && arr[j-1]>arr[j]){
//         j++
//     }
//     if(i!=0 && j!= n-1 && i==j){
//         return true
//     }
//     return false
// }

var validMountainArray = function(arr){
    const n = arr.length
    let i = 0
    while(i +1 < n && arr[i] < arr[i+1]){
        i++
    }
    if(i==0 || i== n-1) return false
    while(i+1<n && arr[i] > arr[i + 1]){
        i++
    }
    return i === n - 1;
}

let arr = [9,8,7,6,5,4,3,2,1,0]
console.log(validMountainArray(arr))