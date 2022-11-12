function permutation(S) {
    var temp = S.split('');//字符串转化为数组
    len = temp.length;
    var res = [] // 结束
    dfs(0)
    return res

    function dfs(k) {
        if (k == len) { //遍历结束条件
            res.push(temp.join('')) // 添加结果
            return
        }
        for (let i = k; i < len; i++) {
            [temp[i],temp[k]] = [temp[k],temp[i]];// 交换位置
            dfs(k+1);
            [temp[i], temp[k]] = [temp[k], temp[i]]; //回溯
        }

    }
}

console.log(permutation('qwe'))