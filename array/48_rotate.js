// var rotate = function(matrix) {
//     const n = matrix.length;
//     let matrix_new = new Array(n).fill(0).map(()=>new Array(n).fill(0)) 
//     for(let i=0;i<n;i++){
//         for (let j = 0; j < n; j++) {
//             matrix_new[j][n-i-1] = matrix[i][j]
//         }
//     }
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             matrix[i][j] = matrix_new[i][j];
//         }
//     }
// };
var rotate = function(matrix){
    const n = matrix.length;
    // 水平翻转
    for (let i = 0; i < Math.floor(n / 2); i++) {
        for (let j = 0; j < n; j++) {
            [matrix[i][j], matrix[n - i - 1][j]] = [matrix[n - i - 1][j], matrix[i][j]];
        }
    }
    // 主对角线翻转
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
}
const matrix = [[1,2,3],[4,5,6],[7,8,9]]
console.log(rotate(matrix))