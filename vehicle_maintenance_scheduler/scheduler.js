export const calculateMaxImpact = (vehicles, mechanicHours) => {
  const n = vehicles.length;

  const dp = Array(n + 1)
    .fill(null)
    .map(() => Array(mechanicHours + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    const duration = vehicles[i - 1].Duration;

    const impact = vehicles[i - 1].Impact;

    for (let h = 0; h <= mechanicHours; h++) {
      if (duration <= h) {
        dp[i][h] = Math.max(dp[i - 1][h], impact + dp[i - 1][h - duration]);
      } else {
        dp[i][h] = dp[i - 1][h];
      }
    }
  }

  return dp[n][mechanicHours];
};
