/*
  시간복잡도: O(n + m)
  풀이 시간: 18m
  시도 횟수: 1
*/
function solution(arr) {
  const [n, m] = arr[0].split(' ').map(Number);
  const problems = arr.slice(n + 1);
  const result = [];
  const numToName = {};
  const nameToNum = {};

  for (let i = 1; i <= n; i++) {
    numToName[i] = arr[i];
    nameToNum[arr[i]] = i;
  }

  for (const problem of problems) {
    if (isNaN(+problem)) {
      // 문제가 포켓몬 이름인 경우
      result.push(nameToNum[problem]);
    } else {
      // 문제가 숫자인 경우
      result.push(numToName[problem]);
    }
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
  console.log(solution(arr));
  process.exit();
});
