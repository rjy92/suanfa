// 冒泡排序
function bubbleSort(arr){
    let lan = arr.length
    for(let i = 0;i< lan- 1 ;i++){
        for(let j = 0;j<lan-1-i;j++){
            if(arr[j]>arr[j+1]){
                const temp = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}

// 优化算法：记录循环完毕后是否发生值的交换
function bubbleSort1(arr){
    let lan = arr.length
    for(let i = 0;i< lan- 1 ;i++){
        let flag = 0
        for(let j = 0;j<lan-1-i;j++){
            if(arr[j]>arr[j+1]){
                const temp = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = temp
                flag++
            }
        }
        if(flag == 0){break;}
    }
    return arr
}

// 优化算法：
function bubbleSort2(arr){
    let lastIndex=0;
    let sortBorder=arr.length-1;
    for(let i=0;i<arr.length-1;i++){
        let sort=false; //记录每次大循环完毕后是否发生值的交换
        for(let j=0;j<sortBorder;j++){ //将sortBorder作为位置边界，作为嵌套循环的循环次数
            if(arr[j]>arr[j+1]){ //如果循环中的值前面的值大于后面的值则将前面值与后面值交换
                let temp=arr[j]; //这是正序，反之判断为小于则为倒序
                arr[j]=arr[j+1];
                arr[j+1]=temp;
                sort=true;//值发生变化了，记录为true
                lastIndex=j;//记录每次小循环发生内容交换的下标
            }
        }
        sortBorder=lastIndex;//获取每次大循环中的所有小循环最终完成后的下标，这就是位置边界
        if(!sort){ //sort还是false则证明此循环未发生内容交换，退出整个循环
            break;
        }
    }
    return arr
}

let arr = [4,5,1,7,3,10,11,12]
console.log(bubbleSort2(arr))


