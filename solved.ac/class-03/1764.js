/*
  시간복잡도: O(n + m)
  풀이 시간: 11m
  시도 횟수: 1
*/
function solution(arr) {
  const result = [];
  const [n, m] = arr.shift().split(' ').map(Number);
  const obj = {};

  for (let i = 0; i < n; i++) {
    obj[arr[i]] = 1;
  }

  for (let i = n; i < n + m; i++) {
    if (obj[arr[i]]) obj[arr[i]] += 1;
  }

  for (const [key, value] of Object.entries(obj)) {
    if (value === 2) result.push(key);
  }

  result.sort();
  result.unshift(result.length);

  return result.join('\n');
}

// 해시에 이름을 key로 빈도수를 value로 저장해서 빈도수가 2이상일 경우 듣보잡

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
