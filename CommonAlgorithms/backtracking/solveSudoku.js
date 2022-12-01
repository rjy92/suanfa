const solveSudoku = (board) => {
    const rows = new Array(9) // 存放每一行对应的可选数集
    const cols = new Array(9);// 存放每一列对应的可选数集
    const blocks = new Array(9);  // 存放每一框对应的可选数集
    const options = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    for (let i = 0; i < 9; i++) { // 集合的初始化
        rows[i] = new Set(options);
        cols[i] = new Set(options);
        blocks[i] = new Set(options);
    }

    const getBlockIndex = (i, j) => { // 根据坐标，获取所在的小框的索引
        return (i / 3 | 0) * 3 + j / 3 | 0;  // |0 是向下取整
    };

    for (let i = 0; i < 9; i++) {    // 根据现有的已填的数字，更新set们
        for (let j = 0; j < 9; j++) {
            if (board[i][j] != ".") {
                rows[i].delete(board[i][j]); // 当前行出现过这个数字，这个数字就不能在这一行出现，删除该选项
                cols[j].delete(board[i][j]);
                blocks[getBlockIndex(i, j)].delete(board[i][j]);
            }
        }
    }

    const fill = (i, j) => {
        // 判斷填充完成的條件
        if (j === 9) { // 我们采取的是横向填充，若j === 9 ,则填充到最后一列，下一步我们填充下一行
            i++;
            j = 0;
            if (i == 9) return true // 都填充完成，则返回true
        }
        // 若此位置有数据，则我们填充下一格
        if (board[i][j] != ".") return fill(i, j + 1)

        // 我们需要填充数据
        // 获取所在小框的索引
        const blockIndex = getBlockIndex(i, j)
        for (let num = 1; num <= 9; num++) {
            const s = String(num)
            // 当前选择必须在三个set中都存在，如果有一个不存在，就说明发生了冲突，跳过该选择
            if (!rows[i].has(s) || !cols[j].has(s) || !blocks[blockIndex].has(s)) continue;

            // 我们填充此数据
            board[i][j] = s;
            rows[i].delete(s)
            cols[j].delete(s);
            blocks[blockIndex].delete(s);

            if (fill(i, j + 1)) return true //如果基于当前选择，填下一个，最后可解出数独，直接返回真

            // 基于当前选择，填下一个，怎么填都不行，回溯，恢复为空格
            board[i][j] = '.'
            rows[i].add(s);     // set们，将之前删掉的当前数字，加回来
            cols[j].add(s);
            blocks[blockIndex].add(s);
        }
        return false // 尝试了1-9，每个都往下递归，都不能做完，返回false
    }

    // 开始填充数据
    fill(0, 0)
    return board
}


const board = [["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]]
console.log(solveSudoku(board))