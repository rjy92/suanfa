function pathWithObstacles(obstacleGrid) {
    //判断数组的长度
    const row = obstacleGrid.length
    const col = obstacleGrid[0].length

    // 若头左上角的数据或者右下角的数据为障碍物，则永远无法到达,直接返回空数组
    if (obstacleGrid[0][0] != 0 || obstacleGrid[row - 1][col - 1] != 0) {
        return []
    }

    //使用一个数组记录当前的位置是否不能走通,因为一个位置，如果我们之前走过一次发现不能走通，那之后的尝试如果再走到这就直接返回
    let visited = new Array(row).fill(false).map(() => new Array(col).fill(false))

    let path = []
    //从(i,j)开始走，path记录了之前的路径
    let backtrack = function (obstacleGrid, x, y, visited) {
        // 超过边界、有障碍物、已经走过，则直接返回false
        if (x >= row || y >= col || obstacleGrid[x][y] == 1 || visited[x][y]) {
            return false
        }
        // 能走通，则放到path中
        path.push([x, y])
        visited[x][y] = true // 记录被访问过

        // 判断是否到达终点
        if (x == row - 1 && y == col - 1) {
            return true;
        }

        // 则需依次判断是否能走通
        if (backtrack(obstacleGrid, x + 1, y, visited) || backtrack(obstacleGrid, x, y + 1, visited)) {
            return true;
        }

        // 若是不能走通，则需要回溯
        path.pop();
        return false
    }

    backtrack(obstacleGrid, 0, 0, visited);
    return path;
}
const obstacleGrid = [
    [0, 0, 1, 1],
    [1, 0, 0, 1],
    [0, 0, 1, 0]
]
console.log(pathWithObstacles(obstacleGrid))