// 迭代 
//var islandPerimeter = function (grid) {
//     const dx = [0, 1, 0, -1]
//     const dy = [1, 0, -1, 0]
//     const n = grid.length, m = grid[0].length;
//     let ans = 0;
//     for (let i = 0; i < n ; i++) {
//         for (let j = 0; j < m ; j++) {
//             if (grid[i][j]) {
//                 let ct = 0
//                 for (let k = 0; k < 4; k++) {
//                     const tx = i + dx[k]
//                     const ty = j + dy[k]
//                     if (tx < 0 || tx >= n || ty < 0 || ty >= m || !grid[tx][ty]) {
//                         ct += 1
//                     }
//                 }
//                 ans += ct
//             }
//         }
//     }
//     return ans
// };
var islandPerimeter = function (grid) {
    const n = grid.length, m = grid[0].length;
    
    const dx = [0, 1, 0, -1];
    const dy = [1, 0, -1, 0];
    const dfs = (x,y)=>{
        if(x<0 || x>=n || y< 0 || y>=m || grid[x][y] === 0){
            return 1
        }
        if(grid[x][y] == 2){
            return 0
        }
        grid[x][y]  = 2
        let res = 0;
       
        for(let k = 0;k<4;k++){
            const tx = x + dx[k]
            const ty = y + dy[k]
            res += dfs(tx,ty)
        }
        return res
    }
    let ans = 0;
    for (let i = 0; i < n ; i++) {
        for (let j = 0; j < m ; j++) {
            if (grid[i][j] === 1) {
                ans += dfs(i,j)
            }
        }
    }
    return ans
}

// var islandPerimeter = function (grid) {
//     const dx = [0, 1, 0, -1];
//     const dy = [1, 0, -1, 0];
//     const n = grid.length, m = grid[0].length;

//     const dfs = (x, y) => {
//         if (x < 0 || x >= n || y < 0 || y >= m || grid[x][y] === 0) {
//             return 1;
//         }
//         if (grid[x][y] === 2) {
//             return 0;
//         }
//         grid[x][y] = 2;
//         let res = 0;
//         for (let i = 0; i < 4; ++i) {
//             const tx = x + dx[i];
//             const ty = y + dy[i];
//             res += dfs(tx, ty);
//         }
//         return res;
//     }

//     let ans = 0;
//     for (let i = 0; i < n; ++i) {
//         for (let j = 0; j < m; ++j) {
//             if (grid[i][j] === 1) {
//                 ans += dfs(i, j);
//             }
//         }
//     }
//     return ans;
// };

const grid =[[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
console.log(islandPerimeter(grid))

