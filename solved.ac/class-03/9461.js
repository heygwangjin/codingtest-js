/*
  시간복잡도: O(N) (단, N은 테스트케이스 개수)
  풀이 시간: 15m
  시도 횟수: 1
*/
function solution(arr) {
  const result = [];
  const dp = Array(101).fill(0);

  dp[1] = 1;
  dp[2] = 1;
  dp[3] = 1;

  for (let i = 4; i < dp.length; i++) {
    dp[i] = dp[i - 2] + dp[i - 3];
  }

  for (const n of arr.slice(1)) {
    result.push(dp[n]);
  }

  return result.join('\n');
}

// 1 1 1 2 2 3 4 5 7 9 12 16
// 전전 + 전전전 = 현재?
// dp[i] = dp[i - 2] + dp[i - 3];

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const arr = [];
rl.on('line', (line) => {
  arr.push(line.trim());
}).on('close', () => {
  console.log(solution(arr.map(Number)));
  process.exit();
});
