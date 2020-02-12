function sumInRange(nums, queries) {
    let fibSums = [], totalSum = 0, mod = 1000000007;
    for (let key in nums) {
        fibSums[key] = (fibSums[key - 1] || 0) + nums[key];
    }
    for (let query of queries) {
        let [start, end] = query;
        totalSum += fibSums[end] - (fibSums[start - 1] || 0);
    }
    return ((totalSum % mod) + mod) % mod;
}