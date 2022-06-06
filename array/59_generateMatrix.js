var generateMatrix = function(n){
    let num = 1
    var matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
    let top = 0,left = 0,right=n-1,bottom=n-1
    while(top<=bottom && left<=right){
        for(let column = left;column<=right;column++){
            matrix[top][column] = num
            num++
        }
        for(let row = top+1;row<=bottom;row++){
            matrix[row][right] = num
            num++
        }
        if(top<bottom && left <right){
            for(let column = right-1;column>left;column--){
                matrix[bottom][column] = num
                num++
            }
            for(let row=bottom;row>top;row-- ){
                matrix[row][left] = num
                num++
            }
        }
        left++;
        right--;
        top++;
        bottom--;
    }
    return matrix
}

console.log(generateMatrix(4))