var merge = function(intervals) {
    if(intervals.length == 0) return
    // 按照左端点升序排序
    intervals.sort((a,b)=>a[0] - b[0])

    let res = []
    let temp = intervals[0]
    for(let i=1; i<intervals.length; i++){
       
        const curr = intervals[i]
        // 有重叠，可以合并
        if(temp[1]>=curr[0]){
            temp = [temp[0],Math.max(temp[1],curr[1])]
        }else{
            res.push(temp)
            temp = intervals[i]
        }
       
    }  
    res.push(temp) 
    return res
};

const intervals = [[1,3],[2,6],[8,10],[1,2],[15,18]]
console.log(merge(intervals))