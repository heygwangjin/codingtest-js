/*
  시간복잡도: O(n + m)
  풀이 시간: 20m
  시도 횟수: 1
*/
function solution(arr) {
  const [n, m] = arr.shift().split(' ').map(Number);
  const nums = arr.shift().split(' ').map(Number);
  const result = [];
  const dp = Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    dp[i] = nums[i - 1] + dp[i - 1];
  }

  for (let i = 0; i < m; i++) {
    const [begin, end] = arr[i].split(' ').map(Number);
    result.push(dp[end] - dp[begin - 1]);
  }

  return result.join('\n');
}

// 1. dp로 각 인덱스마다 해당 인덱스까지의 원소들의 합을 저장
// 2. dp[end] - dp[begin - 1] = 구간합이 된다.

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const arr = [];
rl.on('line', (line) => {
  arr.push(line.trim());
}).on('close', () => {
  console.log(solution(arr));
  process.exit();
});
