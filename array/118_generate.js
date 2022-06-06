var generate = function(numRows) {
    if(numRows<=0) return
    if(numRows == 1) return [[1]]
    if(numRows == 2) return [[1],[1,1]]
    let arr = new Array(numRows),start = 2
    arr[0] = [1]
    arr[1] = [1,1]
    while(start < numRows){
        let rowArr = []
        for(let i=0;i<=start;i++){
            if(i==0 || i== start){
                rowArr.push(1)
            }else{
                rowArr.push(arr[start-1][i-1] + arr[start-1][i])
            }
        }
        arr[start] = rowArr
        start++
    }
    return arr
};

var generate = function(numRows){
    let ret = []
    for(i=0;i<numRows;i++){
        let row = new Array(i+1).fill(1)
        for(let j= 1;j<row.length-1;j++){
            row[j] = ret[i-1][j-1]+ret[i-1][j]
        }
        ret.push(row)
    }
    return ret
}
console.log(generate(3))
