function combine(n, k) {
    if (k <= 0 || n <= 0) return [];
    const ans = []
    // start:起始位置，track记录组合
    function backtrack(n, k, start, track) {
        if (k == track.length) {
            ans.push(track);
            return
        }
        for (let i = start; i <= n; i++) {
            // 做选择(前序遍历)
            track.push(i)
            backtrack(n, k, i + 1, [...track])
            // 撤销选择(后续遍历)
            track.pop()
        }
    }
    backtrack(n, k, 1, [])
    return ans
}


const n = 4, k = 2
console.log(combine(n, k))