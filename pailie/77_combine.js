var combine = function(n, k) {
    const res = []
    const helper = function(startIndex,path){
        if(path.length == k){
            //将数据放到res中，为防止path污染，则copy一份
            res.push(path.slice())
            return
        }
        for(let i = startIndex;i<= n - (k-path.length)+1;i++){
            path.push(i)    //加入path
            helper(i+1,path)//下一层递归
            path.pop()  //回溯状态
        }
    }

    helper(1,[])//递归入口
    return res
};

console.log(combine(4,2))