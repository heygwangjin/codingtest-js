/*
 * 풀이 참고
 * 1. 해당 문제는 피보나치 수열의 계산 과정에서 0과 1이 호출된 횟수를 기록하는 문제이다.
 * 2. 기존에 계산한 값들을 이용하여 그 다음 값을 계산해나가는 동적 계획법(dynamic programming)의 기초적인 형태 중 하나이다.
 */

function fibonacci(memo) {
  memo[0] = { 0: 1, 1: 0 }; // 0은 0 한 번만 호출
  memo[1] = { 0: 0, 1: 1 }; // 1은 1 한 번만 호출

  // memo[i] = memo[i - 1] + memo[i - 2]
  for (let i = 2; i <= 40; i++) {
    memo[i][0] = memo[i - 1][0] + memo[i - 2][0];
    memo[i][1] = memo[i - 1][1] + memo[i - 2][1];
  }
}

function solution(arr) {
  const t = arr.shift();
  const result = [];
  const memo = Array.from({ length: 41 }, () => ({
    0: 0,
    1: 0,
  })); // n은 0부터 40까지 가능하므로 배열의 크기는 41
  fibonacci(memo); // memo에 미리 40까지 0과 1의 호출 횟수를 저장한다.
  for (let i = 0; i < t; i++) {
    result.push(`${memo[arr[i]][0]} ${memo[arr[i]][1]}`);
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
