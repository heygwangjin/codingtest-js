/*
  시간복잡도: O(n)
  풀이 시간: 11m
  시도 횟수: 1
*/
function solution(arr) {
  const timesAsc = arr[1]
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);

  let currentSum = 0; // 현재까지의 누적합
  let totalSum = 0; // 총합

  for (const time of timesAsc) {
    currentSum += time;
    totalSum += currentSum;
  }

  return totalSum;
}

// 1. 돈 뽑는 시간 오름차순으로 정렬 (뽑는 시간이 적을수록 뒤에 영향을 덜 미치기 때문)
// 2. 누적합

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
