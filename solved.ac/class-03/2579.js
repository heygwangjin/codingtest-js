/*
  시간복잡도: O(n)
  풀이 시간: 1h 30m
  시도 횟수: 3
*/
function solution(arr) {
  const n = arr.shift();
  const dp = Array(301).fill(0);

  dp[1] = arr[0];
  dp[2] = arr[0] + arr[1];

  for (let i = 3; i <= n; i++) {
    dp[i] = Math.max(
      arr[i - 1] + arr[i - 2] + dp[i - 3], // 마지막칸 + 마지막 전칸, 마지막 전전전칸
      arr[i - 1] + dp[i - 2], // 마지막칸 + 마지막 전전칸
    );
  }

  return dp[n];
}

// 점수의 최댓값을 구하기
// 계단은 한 번에 한 계단씩 또는 두 계단씩 오를 수 있다. 즉, 한 계단을 밟으면서 이어서 다음 계단이나, 다음 다음 계단으로 오를 수 있다.
// 연속된 세 개의 계단을 모두 밟아서는 안 된다. 단, 시작점은 계단에 포함되지 않는다.
// 마지막 도착 계단은 반드시 밟아야 한다.

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
