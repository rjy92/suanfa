var getRow = function(rowIndex) {
    let ret = []
    for(let i=0;i<=rowIndex;i++){
        let row = new Array(i+1).fill(1)
        for(let j=1;j<row.length-1;j++){
            row[j] = ret[i-1][j-1]+ret[i-1][j]
        }
        ret.push(row)
    }
    return ret[rowIndex]
};

var getRow = function(rowIndex) {
    let pre = [], cur =[]
    for (let i = 0; i <= rowIndex; i++) {
        cur = new Array(i + 1).fill(1);
        for(let j=1;j<cur.length-1;j++){
            cur[j] = pre[j-1]+pre[j]
        }
        pre = cur
    }
    return cur
}

var getRow = function(rowIndex) {
    const row = new Array(rowIndex + 1).fill(0);
    row[0] = 1
    for (let i = 1; i <= rowIndex; i++) {
        for(let j = i;j>0;j--){
            console.log('i',i,'row',row[j] ,row[j-1])
            row[j] += row[j - 1];
        }
    }
    return row
}
console.log(getRow(2))