/*
  시간복잡도: O(t)
  풀이 시간: 28m
  시도 횟수: 1
*/
function solution(arr) {
  const t = arr[0];
  const result = [];
  const dp = Array(10001).fill(0);

  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 4;

  // 1, 2, 4, 7, 13으로 경우의 수가 있다.
  // 이전 3개의 방법 개수의 합이 현재 방법의 수
  for (let i = 4; i < dp.length; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }

  // 각 n의 방법의 수를 result 배열에 저장
  for (let i = 1; i <= t; i++) {
    result.push(dp[arr[i]]);
  }

  return result.join('\n');
}

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
