function coinChange(coins, amount) {
    if (!amount) return 0
    // 初始化数组
    const dp = new Array(amount + 1).fill(Infinity)
    dp[0] = 0
    for (let i = 0; i < coins.length; i++) {
        for (let j = coins[i]; j <= amount; j++) {
            dp[j] = Math.min(dp[j-coins[i]]+1,dp[j])
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount];
}

function coinChange(coins, amount) {
    const cache = [];
    const makeChange = (value) => {
        if (!value) {
            return [];
        }
        if (cache[value]) {
            return cache[value]
        }
        let min = []
        let newMin, newAmount;
        for (let i = 0; i < coins.length; i++) {
            const coin = coins[i]
            newAmount = value - coin
            if (newAmount >= 0) {
                newMin = makeChange(newAmount);
            }
            if (newAmount >= 0 && (newMin.length < min.length - 1 || !min.length) && (newMin.length || !newAmount)) {
                min = [coin].concat(newMin);

            }
        }
        return (cache[value] = min);
    }
    return makeChange(amount);
}
console.log(coinChange([1, 5, 10, 25], 36))