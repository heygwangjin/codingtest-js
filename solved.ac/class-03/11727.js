/*
  시간복잡도: O(n)
  풀이 시간: 35m
  시도 횟수: 2
*/
function solution(n) {
  const dp = Array(1001).fill(0);

  dp[1] = 1;
  dp[2] = 3;

  for (let i = 3; i < dp.length; i++) {
    dp[i] = (dp[i - 1] + 2 * dp[i - 2]) % 10007;
  }

  return dp[n];
}

// dp[i] = dp[i - 1] + (2 * dp[i - 2])

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on('line', (line) => {
  input = line;
  input = Number(line);
  rl.close();
}).on('close', () => {
  console.log(solution(input));
  process.exit();
});