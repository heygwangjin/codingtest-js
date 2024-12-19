/*
  시간복잡도: O(n)
  풀이 시간: 20m
  시도 횟수: 1
*/
function solution(arr) {
  let [n, k] = arr.shift().split(' ').map(Number);
  let result = 0;

  while (k > 0) {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (k - arr[i] >= 0) {
        k -= arr[i];
        result++;
        break;
      }
    }
  }

  return result;
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
