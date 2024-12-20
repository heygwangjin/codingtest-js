function solution(n) {
  // dp 배열은 각 숫자 i에서 1로 만드는데 최소 연산 횟수를 저장 (N이 1 이상 10^6이하이기 때문에 배열의 길이를 1,000,001으로 생성)
  const dp = Array(1000001).fill(0);

  // dp[1]은 0이기 때문에 2부터 시작
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + 1;
    if (i % 2 === 0) dp[i] = Math.min(dp[i], dp[i / 2] + 1);
    if (i % 3 === 0) dp[i] = Math.min(dp[i], dp[i / 3] + 1);
  }

  return dp[n];
}

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
