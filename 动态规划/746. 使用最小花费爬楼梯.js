/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  let f = [0, 0];
  for (let i = 2; i <= cost.length; i++) {
    f[i] = Math.min(f[i - 1] + cost[i - 1], f[i - 2] + cost[i - 2]);
  }
  return f[cost.length];
};
